const getCareers = `
    SELECT * FROM careers
`;
const getCareerById = `
    SELECT * FROM careers 
    WHERE id = $1`
;
const addCareer = `
    INSERT INTO careers (name, location, summary, qualifications, icon) 
    VALUES ($1, $2, $3, $4, $5) RETURNING id
`;

const editCareer = `
    UPDATE careers
    SET name = $1, location = $2, summary = $3, qualifications = $4
    WHERE id = $5
`;


const removeCareer = `
    DELETE FROM careers 
    WHERE id = $1`
;

const getCareersWithPagination = `
    SELECT * FROM careers 
    ORDER BY id DESC 
    LIMIT $1 OFFSET $2;`
;

const getCareersWithPaginationAndSearch = `
    SELECT * FROM careers 
    WHERE (name LIKE $3 OR location LIKE $3) 
    ORDER BY id DESC 
    LIMIT $1 OFFSET $2;
`;

const getCareersWithSearchCount = `
    SELECT COUNT(*) FROM careers
    WHERE (name LIKE $1 OR location LIKE $1);
`;


const getPartners = "SELECT * FROM partners";
const getPartnerById = "SELECT * FROM partners WHERE id =$1";
const getStories = "SELECT * FROM stories";
const getStoryById = "SELECT * FROM stories WHERE id =$1";


module.exports = {
    getCareers,
    getCareerById,
    addCareer,
    editCareer,
    removeCareer,
    
    getCareersWithPagination,
    getCareersWithPaginationAndSearch,
    getCareersWithSearchCount,

    getPartners,
    getPartnerById,
    getStories,
    getStoryById,
};