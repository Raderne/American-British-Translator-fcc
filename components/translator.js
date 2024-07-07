const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    translate(text, locale) {
        let translation = text;

        if (locale === 'american-to-british') {
            translation = this.americanToBritish(text);
        } else if (locale === 'british-to-american') {
            translation = this.britishToAmerican(text);
        }

        return translation;
    }

    americanToBritish(text) {
        let translation = text;

        for (let word in americanOnly) {}
    }
}

module.exports = Translator;