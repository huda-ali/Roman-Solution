import express from 'express';
import { convertRomanHandler, deleteSolutionHandler, getAllSolutionsHandler, getSolutionByIdHandler, updateSolutionHandler } from '../controllers/convert.controller.js';
import { romanValidator } from '../middleware/romanValidator.middleware.js';

const convertRouter = express.Router();

convertRouter.post('/', romanValidator, convertRomanHandler);
convertRouter.get('/', getAllSolutionsHandler);
convertRouter.get('/:id', getSolutionByIdHandler);
convertRouter.put('/:id', romanValidator, updateSolutionHandler);
convertRouter.delete('/:id', deleteSolutionHandler);

export default convertRouter;
