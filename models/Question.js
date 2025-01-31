const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Common fields schema that all question types share
const CommonFieldsSchema = {
  title: { type: String, required: true },
  accuracy: { type: Number, default: 0, min: 0, max: 100 },
  completionRate: { type: Number, default: 0, min: 0, max: 100 },
  questionsCount: { type: Number, required: true, min: 1 },
  createdAt: { type: Date, default: Date.now }
};

// Exams Schema
const ExamsSchema = new Schema({
  ...CommonFieldsSchema,
  category: { type: String, default: "Çoktan Seçmeli" },
  questions: [{
    question: { type: String, required: true },
    options: [{ type: String, required: true }],
    correctAnswer: { type: String, required: true }
  }]
});

// Fraction Schema
const FractionSchema = new Schema({
  ...CommonFieldsSchema,
  category: { type: String, default: "Kesir" },
  questions: [{
    title: { type: String, required: true },
    question: [{
      mixedFraction: { type: String, required: true },
      parts: {
        A: { type: String },
        B: { type: String },
        C: { type: String }
      },
      answer: { type: String, required: true }
    }]
  }]
});

// Matching Schema
const MatchingSchema = new Schema({
  ...CommonFieldsSchema,
  category: { type: String, default: "Eşleştirme" },
  questions: [{
    title: { type: String, required: true },
    question: [{ type: String, required: true }],
    correctAnswer: [{ type: String, required: true }]
  }]
});

// Placement Schema
const PlacementSchema = new Schema({
  ...CommonFieldsSchema,
  category: { type: String, default: "Sıralama" },
  desc: { type: String },
  questions: [{
    type: { type: String, enum: ['>', '<'], required: true },
    title: { type: String, required: true },
    correctAnswer: [{ type: Number, required: true }],
    direction: { type: String, required: true }
  }]
});

// Main Question Schema that references all other schemas
const QuestionSchema = new Schema({
  exams: { type: Schema.Types.ObjectId, ref: "Exams", },
  fraction: { type: Schema.Types.ObjectId, ref: "Fraction", },
  placement: { type: Schema.Types.ObjectId, ref: "Placement",  },
  matching: { type: Schema.Types.ObjectId, ref: "Matching", },
});

// Create models
const Exams = mongoose.model("Exams", ExamsSchema);
const Fraction = mongoose.model("Fraction", FractionSchema);
const Matching = mongoose.model("Matching", MatchingSchema);
const Placement = mongoose.model("Placement", PlacementSchema);
const Question = mongoose.model("Question", QuestionSchema);

// Export all models
module.exports = {
  Question,
  Exams,
  Fraction,
  Matching,
  Placement
};
