module.exports = (name) => {
  name = name.toLowerCase();
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return capitalizedName;
};
