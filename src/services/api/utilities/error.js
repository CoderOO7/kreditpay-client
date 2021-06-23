export function filterErrors(errors) {
  if (errors instanceof Array) {
    const newErrorSchema = [];
    errors.forEach((errObj) =>
      Object.keys(errObj).forEach((key) => newErrorSchema.push({ ...errObj[key] }))
    );
    return newErrorSchema;
  }
  return errors;
}
