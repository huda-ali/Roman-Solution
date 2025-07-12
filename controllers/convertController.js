import { romanConverter } from '../services/romanConverter.js';

function convertRomanHandler(req, res) {
  const roman = req.body.roman;
  const result = romanConverter(roman);
  res.json({ result });
}

export { convertRomanHandler }