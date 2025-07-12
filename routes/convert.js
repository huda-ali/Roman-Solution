import express from 'express';
import { convertRomanHandler } from '../controllers/convertController.js';

const convertRouter = express.Router();

convertRouter.post('/', convertRomanHandler);

export default convertRouter;
