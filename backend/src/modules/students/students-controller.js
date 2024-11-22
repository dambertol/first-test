const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    try {
       // const items = await Item.find();
        res.status(200).json(getAllStudents(req.params));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const handleAddStudent = asyncHandler(async (req, res) => {
    try {
         res.status(200).json(addNewStudent(req.params));
     } catch (error) {
         res.status(500).json({ error: error.message });
     }
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    try {
         res.status(200).json(updateStudent(req.params));
     } catch (error) {
         res.status(500).json({ error: error.message });
     }
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    try {
         res.status(200).json(getStudentDetail(req.params));
     } catch (error) {
         res.status(500).json({ error: error.message });
     }
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    try {
         res.status(200).json(setStudentStatus(req.params));
     } catch (error) {
         res.status(500).json({ error: error.message });
     }
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
