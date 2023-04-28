export const convertTitleInSlug = (text) => {
  const result = text
    .trim()
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll(":", "");
  return result;
};
