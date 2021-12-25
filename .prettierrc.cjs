module.exports = {
  bracketSpacing: true,
  trailingComma: "all",
  arrowParens: "always",
  printWidth: 120,

  plugins: ["prettier-plugin-svelte"],
  svelteSortOrder: "options-scripts-markup-styles",
  svelteStrictMode: true,
  svelteAllowShorthand: true,
  svelteIndentScriptAndStyle: true,
};
