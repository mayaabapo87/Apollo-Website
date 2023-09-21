const getResumes = `
    SELECT * FROM resumes
`;

const getResumeById = `
    SELECT * FROM resumes 
    WHERE id = $1
`;

const removeResume = `
    DELETE FROM resumes 
    WHERE id = $1
`;

const getResumesWithPagination = `
    SELECT * FROM resumes 
    ORDER BY id DESC 
    LIMIT $1 OFFSET $2;
`;

const getResumesWithPaginationAndSearch = `
    SELECT * FROM resumes
    WHERE (name LIKE $3 OR position LIKE $3)
    ORDER BY id DESC
    LIMIT $1 OFFSET $2;
`;

const getResumesWithSearchCount = `
    SELECT COUNT(*) FROM resumes
    WHERE (name LIKE $1 OR position LIKE $1);
`;

module.exports = {
    getResumes,
    getResumeById,
    removeResume,
    getResumesWithPagination,
    getResumesWithPaginationAndSearch,
    getResumesWithSearchCount,
}