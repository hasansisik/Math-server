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
    createSpace,
    updateSpace,
    deleteSpace,
} = require("../controllers/question");

const router = express.Router();

router.get("/", getQuestions);

// Exams routes
router.post("/exams", createExams);
router.put("/exams/:id", updateExams);
router.delete("/exams/:id", deleteExams);

// Matching routes
router.post("/matching", createMatching);
router.put("/matching/:id", updateMatching);
router.delete("/matching/:id", deleteMatching);

// Fraction routes
router.post("/fraction", createFraction);
router.put("/fraction/:id", updateFraction);
router.delete("/fraction/:id", deleteFraction);

// Placement routes
router.post("/placement", createPlacement);
router.put("/placement/:id", updatePlacement);
router.delete("/placement/:id", deletePlacement);

// Space routes
router.post("/space", createSpace);
router.put("/space/:id", updateSpace);
router.delete("/space/:id", deleteSpace);

module.exports = router;
