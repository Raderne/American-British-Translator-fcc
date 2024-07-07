"use strict";
const Translator = require("../components/translator.js");

module.exports = (app) => {
  const translator = new Translator();

  app.route("/api/translate").post((req, res) => {
    const { text, locale } = req.body;
    
    if (text == "" && locale) {
      return res.json({ error: "No text to translate" });
    }
    if (!text || !locale) {
      return res.json({ error: "Required field(s) missing" });
    }
    if (locale !== "american-to-british" && locale !== "british-to-american") {
      return res.json({ error: "Invalid value for locale field" });
    }
    if (locale == "american-to-british") {
      return res.json(translator.toBritish(text));
    }
    if (locale == "british-to-american") {
      return res.json(translator.toAmerican(text));
    }
  });
};
