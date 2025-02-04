const { Question, Exams, Fraction, Matching, Placement, Space } = require("../models/Question");

// Get all questions
const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find()
      .populate('exams')
      .populate('fraction')
      .populate('matching')
      .populate('placement')
      .populate('space');
    res.status(200).json({
      success: true,
      data: questions
    });
    console.log("questions",questions)
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Exams CRUD Operations
const createExams = async (req, res) => {
  try {
    const exam = await Exams.create(req.body);
    const question = await Question.create({ exams: exam._id });

    res.status(201).json({
      success: true,
      data: exam
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

const updateExams = async (req, res) => {
  try {
    const exam = await Exams.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!exam) {
      return res.status(404).json({
        success: false,
        error: "Exam not found"
      });
    }

    res.status(200).json({
      success: true,
      data: exam
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

const deleteExams = async (req, res) => {
  try {
    const exam = await Exams.findByIdAndDelete(req.params.id);

    if (!exam) {
      return res.status(404).json({
        success: false,
        error: "Exam not found"
      });
    }

    // Also delete the reference from Question collection
    await Question.findOneAndUpdate(
      { exams: req.params.id },
      { $unset: { exams: 1 } }
    );

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Matching CRUD Operations
const createMatching = async (req, res) => {
  try {
    const matching = await Matching.create(req.body);
    const question = await Question.create({ matching: matching._id });

    res.status(201).json({
      success: true,
      data: matching
    });
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

const updateMatching = async (req, res) => {
  try {
    const matching = await Matching.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!matching) {
      return res.status(404).json({
        success: false,
        error: "Matching question not found"
      });
    }

    res.status(200).json({
      success: true,
      data: matching
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

const deleteMatching = async (req, res) => {
  try {
    const matching = await Matching.findByIdAndDelete(req.params.id);

    if (!matching) {
      return res.status(404).json({
        success: false,
        error: "Matching question not found"
      });
    }

    // Also delete the reference from Question collection
    await Question.findOneAndUpdate(
      { matching: req.params.id },
      { $unset: { matching: 1 } }
    );

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Fraction CRUD Operations
const createFraction = async (req, res) => {
  try {
    console.log("1",req.body)

    const fraction = await Fraction.create(req.body);
    const question = await Question.create({ fraction: fraction._id });

    res.status(201).json({
      success: true,
      data: fraction
    });
  } catch (error) {
    console.log(error)

    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

const updateFraction = async (req, res) => {
  try {
    console.log("update",req.body)
    const fraction = await Fraction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!fraction) {
      return res.status(404).json({
        success: false,
        error: "Fraction question not found"
      });
    }

    res.status(200).json({
      success: true,
      data: fraction
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

const deleteFraction = async (req, res) => {
  try {
    const fraction = await Fraction.findByIdAndDelete(req.params.id);

    if (!fraction) {
      return res.status(404).json({
        success: false,
        error: "Fraction question not found"
      });
    }

    // Also delete the reference from Question collection
    await Question.findOneAndUpdate(
      { fraction: req.params.id },
      { $unset: { fraction: 1 } }
    );

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Placement CRUD Operations
const createPlacement = async (req, res) => {
  try {
    const placement = await Placement.create(req.body);
    const question = await Question.create({ placement: placement._id });

    res.status(201).json({
      success: true,
      data: placement
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

const updatePlacement = async (req, res) => {
  try {
    const placement = await Placement.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!placement) {
      return res.status(404).json({
        success: false,
        error: "Placement question not found"
      });
    }

    res.status(200).json({
      success: true,
      data: placement
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

const deletePlacement = async (req, res) => {
  try {
    const placement = await Placement.findByIdAndDelete(req.params.id);

    if (!placement) {
      return res.status(404).json({
        success: false,
        error: "Placement question not found"
      });
    }

    // Also delete the reference from Question collection
    await Question.findOneAndUpdate(
      { placement: req.params.id },
      { $unset: { placement: 1 } }
    );

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Space CRUD Operations
const createSpace = async (req, res) => {
  try {
    const space = await Space.create(req.body);
    const question = await Question.create({ space: space._id });

    res.status(201).json({
      success: true,
      data: space
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

const updateSpace = async (req, res) => {
  try {
    const space = await Space.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!space) {
      return res.status(404).json({
        success: false,
        error: "Space question not found"
      });
    }

    res.status(200).json({
      success: true,
      data: space
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

const deleteSpace = async (req, res) => {
  try {
    const space = await Space.findByIdAndDelete(req.params.id);

    if (!space) {
      return res.status(404).json({
        success: false,
        error: "Space question not found"
      });
    }

    // Also delete the reference from Question collection
    await Question.findOneAndUpdate(
      { space: req.params.id },
      { $unset: { space: 1 } }
    );

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
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
};