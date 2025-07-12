function romanValidator(req, res, next) {
  const question = req.body.question;
  if (!question || (isNaN(parseInt(question)) && question.match(/[^IVXLCDM]/g) !== null)){
    return res.status(400).json({ error: 'question input not valid' });
  }
  next();
}

export { romanValidator }