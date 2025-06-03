import NextI18Next from "next-i18next";

import path from "path";

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["es"],
  localePath: path.resolve("./src/locales"),
});

export default NextI18NextInstance;
