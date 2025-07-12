import express from 'express';
import { convertRomanHandler } from '../controllers/convert.controller.js';
import { romanValidator } from '../middleware/romanValidator.middleware.js';

const convertRouter = express.Router();

convertRouter.post('/', romanValidator, convertRomanHandler);

export default convertRouter;
