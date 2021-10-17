const studentList  = require('../db/studentsList.json')

module.exports = {
    
    list: async(req, res) => {
        
        res.status(200).json(studentList)
    }
}