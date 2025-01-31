const express = require("express");
const {
    getQuestions,
    createExams,
    updateExams,
    deleteExams,
    createMatching,
    updateMatching,
    deleteMatching,
    createFraction,
    updateFraction,
    deleteFraction,
    createPlacement,
    updatePlacement,
    deletePlacement,
} = require("../controllers/question");

const router = express.Router();

router.get("/", getQuestions);
router.post("/exams", createExams);
router.put("/exams/:id", updateExams);
router.delete("/exams/:id", deleteExams);
router.post("/matching", createMatching);
router.put("/matching/:id", updateMatching);
router.delete("/matching/:id", deleteMatching);
router.post("/fraction", createFraction);
router.put("/fraction/:id", updateFraction);
router.delete("/fraction/:id", deleteFraction);
router.post("/placement", createPlacement);
router.put("/placement/:id", updatePlacement);
router.delete("/placement/:id", deletePlacement);

module.exports = router;
