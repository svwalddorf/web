import Logo from "./extensions/svw-logo.png";
import SVGLogoWithoutText from "./extensions/svw-logo-without-text.svg";

const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    "de",
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  auth: {
    logo: Logo,
  },
  menu: {
    logo: SVGLogoWithoutText,
  },
  head: {
    favicon: SVGLogoWithoutText,
  },
  theme: {
    light: {
      colors: {
        primary100: "#ecf7fc",
        primary200: "#c1e2f4",
        primary500: "#73bae6",
        primary600: "#36aae8",
        primary700: "#128ed1",
        danger700: "#b72b1a",
      },
    },
    dark: {
      colors: {
        primary100: "#128ed1",
        primary200: "#36aae8",
        primary500: "#73bae6",
        primary600: "#c1e2f4",
        primary700: "#ecf7fc",
        danger700: "#b72b1a",
      },
    },
  },
};

const bootstrap = (app) => {
  console.log("Strapi Admin", app);
};

export default {
  config,
  bootstrap,
};
