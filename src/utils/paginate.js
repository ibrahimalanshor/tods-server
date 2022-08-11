module.exports = (options) => {
  if (!options?.limit && !options?.page) return {};

  const limit = +(options?.limit || 10);
  const offset = Math.max(((options?.page || 1) - 1) * limit, 0);

  return { limit, offset };
};
