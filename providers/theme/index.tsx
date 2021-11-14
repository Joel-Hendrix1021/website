export const theme = {
  palette: {
    mode: "light",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#131D40",
      light: "#CDD5F0",
      dark: "",
      contrastText: "#fff",
    },
    secondary: {
      main: "#31C5C7",
      light: "",
      dark: "#174A4C",
      contrastText: "#fff",
    },
    complementary: {
      main: "#278D9A",
      light: "#D9F2F5",
      dark: "",
      contrastText: "#000",
    },
    error: {
      main: "#B00020",
      light: "",
      dark: "",
      contrastText: "#fff",
    },
    grey: {
      main: "#C4C4C4",
      light: "#AAAAAA",
      dark: "#555555",
    },
    text: {
      primary: "#131D40",
      secondary: "#555555",
      disabled: "#CDD5F0",
    },
    divider: "#CDD5F0",
    background: {
      paper: "#fff",
      default: "#F6FAFF",
    },
    action: {
      active: "",
      hover: "",
      hoverOpacity: 0.04,
      selected: "",
      selectedOpacity: 0.08,
      disabled: "",
      disabledBackground: "",
      disabledOpacity: 0.38,
      focus: "",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  spacing: {},
  shape: {
    borderRadius: 0,
  },
  mixins: {
    toolbar: {
      minHeight: 56,
      "@media (min-width: 0px) and (orientation: landspace)": {
        minHeight: 48,
      },
      "@media (min-width: 600px)": {
        minHeight: 64,
      },
    },
  },
  shadow: [
    "none",
    "0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px 0px rgba(0,0,0,0.12), 0px 1px 3px 0px rgba(0,0,0,0.20)",
    "0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px 0px rgba(0,0,0,0.12), 0px 1px 5px 0px rgba(0,0,0,0.20)",
    "0px 3px 4px 0px rgba(0,0,0,0.14), 0px 3px 3px 0px rgba(0,0,0,0.12), 0px 1px 8px 0px rgba(0,0,0,0.20)",
    "0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12), 0px 2px 4px 0px rgba(0,0,0,0.20)",
  ],
};
