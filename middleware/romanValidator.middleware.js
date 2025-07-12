function romanValidator(req, res, next) {
  const roman = req.body.roman;
  if (!roman || roman.match(/[^IVXLCDM]/g) !== null){
    return res.status(400).json({ error: 'roman input not valid' });
  }
  next();
}

export { romanValidator }