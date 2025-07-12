import { convert, deleteSolution, getSolutionById, updateSolution } from '../services/roman.service.js';
import { getAllSolutions } from '../services/roman.service.js';

async function convertRomanHandler(req, res) {
  const question = req.body.question;
  const result = await convert(question);
  res.json(result);
}

async function getAllSolutionsHandler(req, res) {
  res.json(await getAllSolutions());
}

async function getSolutionByIdHandler(req, res) {
  const id = req.params.id;
  try {
    res.json(await getSolutionById(id));
  } catch {
    res.status(404).json({error: 'solution not found'})
  }
}

async function updateSolutionHandler(req, res) {
  const id = req.params.id;
  try {
    res.json(await updateSolution(id, req.body.question));
  } catch {
    res.status(404).json({error: 'solution not found'})
  }
}

async function deleteSolutionHandler(req, res) {
  const id = req.params.id;
  try {
    res.json(await deleteSolution(id))
  } catch {
    res.status(404).json({error: 'solution not found'})
  }
}

export { 
  convertRomanHandler, 
  getAllSolutionsHandler,
  getSolutionByIdHandler, 
  updateSolutionHandler,
  deleteSolutionHandler
}