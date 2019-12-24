const defaultTheme = require('tailwindcss/defaultTheme');
// import theme from '../tailwind.config';

module.exports = {
  customProperties: {
    '--light--color-primary': defaultTheme.colors.teal['100'],
    '--light--color-secondary': defaultTheme.colors.teal['300'],
    '--light--color-accent': defaultTheme.colors.teal['900'],
    '--light--color-alt': defaultTheme.colors.gray['100'],

    '--dark--color-primary': defaultTheme.colors.red['800'],
    '--dark--color-secondary': defaultTheme.colors.teal['300'],
    '--dark--color-accent': defaultTheme.colors.teal['900'],
    '--dark--color-alt': defaultTheme.colors.teal['100']
  }
};
