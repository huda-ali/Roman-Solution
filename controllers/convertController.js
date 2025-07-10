const { convertRoman } = require('../services/romanConverter');

function convertRomanHandler(req, res) {
  const roman = req.body.roman;
  if (!roman) return res.status(400).json({ error: 'roman input required' });

  const result = convertRoman(roman);
  res.json({ result });
}

module.exports = { convertRomanHandler };
