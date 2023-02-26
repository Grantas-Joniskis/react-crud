const title = {
  edit: 'EDIT BLOG',
  create: 'CREATE BLOG',
};

const buttonText = {
  edit: 'UPDATE',
  create: 'CRAETE',
};

const buttonColor = {
  edit: 'warning.main',
  create: '#FF1700',
};

const color = {
  edit: 'warning',
  create: 'error',
} as const;

const colorMain = {
  edit: 'warning.main',
  create: '#424242',
} as const;

export const getModeData = (mode: 'create' | 'edit') => ({
  title: title[mode],
  buttonText: buttonText[mode],
  colorMain: colorMain[mode],
  color: color[mode],
  buttonColor: buttonColor[mode],
});
