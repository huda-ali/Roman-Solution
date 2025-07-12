import express from 'express';
import { convertRomanHandler } from '../controllers/convertController.js';
import { romanValidator } from '../middleware/romanValidator.middleware.js';

const convertRouter = express.Router();

convertRouter.post('/', romanValidator, convertRomanHandler);

export default convertRouter;
