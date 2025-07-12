function romanValidator(req, res, next) {
  const question = req.body.question;
  if (!question || (typeof question == 'string' && question.match(/[^IVXLCDM]/g) !== null) || question <= 0 || question >= 4000){
    return res.status(400).json({ error: 'question input not valid' });
  }
  next();
}

export { romanValidator }