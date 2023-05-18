function isValidEnvironmentId(request, response, next) {
  const { id } = request.params;
  if (isNaN(id)) throw new Error('id не число');
  if (id <= 0) throw new Error('id отрицательный');
  next();
}

function isValidEnvironmentBody(request, response, next) {
  const { label, category, priority } = request.body;
  if (!label) throw new Error('label отсутствует');
  if (!category) throw new Error('category отсутствует');
  if (!priority) throw new Error('priority отсутствует');

  if (!isNaN(label)) throw new Error('label число');
  if (!isNaN(category)) throw new Error('category число');
  if (isNaN(priority)) throw new Error('priority не число');
  next();
}

module.exports = { isValidEnvironmentId, isValidEnvironmentBody };
