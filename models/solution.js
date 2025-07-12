import { getConnection } from "../utils/db.js";

/** @type {import('mongoose').Mongoose} */
const mongoose = await getConnection();
const { Schema } = mongoose;

const solutionSchema = new Schema({
  question: Schema.Types.Mixed,
  answer: Schema.Types.Mixed,
});

const Solution = mongoose.model('Solution', solutionSchema);

export { Solution }