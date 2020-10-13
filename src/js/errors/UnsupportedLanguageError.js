export default class UnsupportedLanguageError extends Error {
  constructor(lang) {
    super(
      `Language '${lang}' is not supported. Check out /js/config/langs and use the constants defined in it.`
    );
    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name;
  }
}
