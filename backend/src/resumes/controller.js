const pool = require('../../db');
const queries = require('./queries')
const fs = require('fs');

const getResumes = (req, res) => {
    pool.query(queries.getResumes, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    }
    )
};

const getResumeById = (req, res) => {
    const id = parseInt(req.params.id);
      if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid resume ID' });
    }
  
    pool.query(queries.getResumeById, [id], (error, results) => {
      if (error) {
        console.error('Error querying database:', error);
        return res.status(500).json({ error: 'Database error' });
      }
  
      if (results.rows.length === 0) {
        return res.status(404).json({ error: 'Resume not found' });
      }
  
      res.status(200).json(results.rows);
    });
};

  
const addResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    const { filename, path } = req.file;
    const { name, email, number } = req.body;

    const insertQuery = 'INSERT INTO resumes (name, email, number, file) VALUES ($1, $2, $3, $4) RETURNING id';
    const result = await pool.query(insertQuery, [name, email, number, path]);

    if (result.rowCount === 1) {
      res.status(201).send('Your resume was sent and location stored successfully.');
    } else {
      res.status(500).send('Failed to store file location.');
    }
  } catch (error) {
    console.error('Error uploading file or storing data:', error);
    res.status(500).send('Internal Server Error');
  }
};

const removeResume = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getResumeById, [id], (error, results) => {
    const noResumeFound = !results.rows.length;
    if (noResumeFound) {
      return res.status(404).send("Resume does not exist in the database, deletion aborted.");
    }

    const filePath = results.rows[0].file;  

    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Error deleting file:', err);
        return res.status(500).send("Failed to delete file.");
      }

      pool.query(queries.removeResume, [id], (error, results) => {
        if (error) {
          console.error('Error deleting record from database:', error);
          return res.status(500).send("Failed to delete database record.");
        }

        res.status(200).send("Resume and file deleted successfully.");
      });
    });
  });
};
 
module.exports = {
  getResumes,
  getResumeById,
  addResume,
  removeResume,
};