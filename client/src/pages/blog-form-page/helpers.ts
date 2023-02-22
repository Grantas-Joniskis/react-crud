export const isStringArray = (arr: Array<unknown | string>):arr is string[] => arr.every((str) => typeof str !== 'string');

export const getBlogFormValues = (form: HTMLFormElement | undefined): Omit<BlogModel, 'id'> => {
  const formData = new FormData(form);

  const title = formData.get('title');
  if (typeof title !== 'string') throw new Error('Missing Title');
  const author = formData.get('author');
  if (typeof author !== 'string') throw new Error('Missing Author');
  const date = formData.get('date');
  if (typeof date !== 'string') throw new Error('Missing Date');
  const images = formData.getAll('images'); // .filter((img) => img !== '')
  if (!isStringArray(images)) throw new Error('All Images Must Be Strings!');
  const image = images[0];
  if (typeof image !== 'string') throw new Error('All Images Must Be Strings!');

  const values = {
    title,
    author,
    date,
    image,
    images: images.filter((img) => img !== ''),
  };

  return values;
};
