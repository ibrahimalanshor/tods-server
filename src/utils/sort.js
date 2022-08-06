module.exports = (options) => ({
  order: [[options?.sort || 'id', options?.order || 'desc']],
});
