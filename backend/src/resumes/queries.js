const getResumes = "SELECT * FROM resumes";
const getResumeById = "SELECT * FROM resumes WHERE id = $1";
const removeResume = "DELETE FROM resumes WHERE id = $1";

module.exports = {
    getResumes,
    getResumeById,
    removeResume,
}