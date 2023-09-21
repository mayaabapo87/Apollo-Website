const pool = require('../../db');
const queries = require('./queries')

const getCareers = (req, res) => {
    pool.query(queries.getCareers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    }

    )
};

const getCareerById = (req, res) => {
    const id = parseInt(req.params.id);
      if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid career ID' });
    }
  
    pool.query(queries.getCareerById, [id], (error, results) => {
      if (error) {
        console.error('Error querying database:', error);
        return res.status(500).json({ error: 'Database error' });
      }
  
      if (results.rows.length === 0) {
        return res.status(404).json({ error: 'Career not found' });
      }
  
      res.status(200).json(results.rows);
    });
};
const fs = require('fs');

const addCareer = async (req, res) => {
  let icon = "default"; 

  if (req.file) {
    icon = req.file.filename;  
  }

  const { name, location, summary, qualifications } = req.body;
 
  try {
    const result = await pool.query(queries.addCareer, [name, location, summary, qualifications, icon]);

    if (result.rowCount === 1) {
      res.status(201).send('Career Added.');
    } else {
      res.status(500).send('Failed to add career.');
    }
  } catch (error) {
    console.error('Error adding career:', error);
    res.status(500).send('Internal Server Error');
  }
};

const editCareer = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, location, summary, qualifications } = req.body;

  try {
    const result = await pool.query(queries.editCareer, [name, location, summary, qualifications, id]);
    if (result.rowCount === 1) {
      res.status(201).send('Career Edit.');
    } else {
      res.status(500).send('Failed to edit career.');
    }
  } catch (error) {
    console.error('Error editing career:', error);
    res.status(500).send('Internal Server Error');
  }


};

const removeCareer = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.removeCareer, [id])
   
    res.status(200).send("Career deleted successfully.");
};


  
const getPartners = (req, res) => {
  pool.query(queries.getPartners, (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
  }

  )
};

const getPartnerById = (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid partner ID' });
}

pool.query(queries.getPartnerById, [id], (error, results) => {
  if (error) {
    console.error('Error querying database:', error);
    return res.status(500).json({ error: 'Database error' });
  }

  if (results.rows.length === 0) {
    return res.status(404).json({ error: 'Partner not found' });
  }

  res.status(200).json(results.rows);
});

};

const getStories = (req, res) => {
  pool.query(queries.getStories, (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
  }

  )
};

const getStoryById = (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
  return res.status(400).json({ error: 'Invalid partner ID' });
}

pool.query(queries.getStoryById, [id], (error, results) => {
  if (error) {
    console.error('Error querying database:', error);
    return res.status(500).json({ error: 'Database error' });
  }

  if (results.rows.length === 0) {
    return res.status(404).json({ error: 'Partner not found' });
  }

  res.status(200).json(results.rows);
});

};
 
module.exports = {
  getCareers,
  getCareerById,
  addCareer,
  editCareer,
  removeCareer,
  getPartners,
  getPartnerById,
  getStories,
  getStoryById,
};