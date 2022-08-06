module.exports = (options) => {
  const limit = +(options?.limit || 10);
  const offset = Math.max(((options?.page || 1) - 1) * limit, 0);

  return { limit, offset };
};
