import { readFileSync, writeFileSync } from "fs";
import { promisify } from "util";
const glob = promisify(require("glob"));
import manageTranslations from "react-intl-translations-manager";
import parser from "typescript-react-intl";

// Add your language here
// `xx` and `xx-XX` formats are accepted (e.g. 'en' or 'en-AU')
// Then run `npm run translations` to create your language files!
const languages = [
  "ar",
  "ca-ES",
  "cs",
  "de",
  "el",
  "en-AU",
  "en-CA",
  "en-GB",
  "es",
  "fa",
  "fi",
  "fr",
  "he",
  "ga",
  "gd",
  "gl",
  "gu",
  "hi",
  "hu",
  "id",
  "it",
  "ja",
  "ko",
  "kp",
  "lb",
  "lt",
  "ne",
  "nl",
  "no",
  "pl",
  "pt",
  "pt-BR",
  "ro",
  "ru",
  "sk",
  "sr",
  "sv",
  "ta",
  "th",
  "tr",
  "vi",
  "zh-CN",
  "zh-TW",
  "uk",
];

async function main() {
  // Extract messages from source
  const files = await glob("src/**/*.@(tsx|ts)");
  const messages = files
    .map((file) => readFileSync(file).toString())
    .reduce((carry, contents) => carry.concat(parser(contents)), []);

  // Write messages to file
  writeFileSync(
    "./src/locales/extractedMessages/messages.json",
    JSON.stringify(messages, null, 2),
  );

  // Manage translations
  manageTranslations({
    languages,
    jsonOptions: {
      space: 2,
      trailingNewline: true,
    },
    messagesDirectory: "src/locales/extractedMessages",
    translationsDirectory: "src/locales/lang/",
  });
}

// Go go go!
// https://www.youtube.com/watch?v=H9dzpBa73_8
main().catch(console.error);
