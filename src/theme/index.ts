import { indexElement } from "@/consts/common";
import { Theme, createTheme } from "@mui/material/styles";

export const HEIGHT_HEADER = 93;
export const PADDING_SIDE = 24;
export const PADDING_LEFT = 46;
export const PADDING_RIGHT = 100;

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      background: {
        main: string;
        secondary: string;
        grey: string;
        arccordion: string;
        title: string;
        link: string;
        button: string;
        black: string;
        red: string;
        titleInput: string;
        labelInput: string;
        white: string;
        rightAnswer: string;
        blue: string;
      };
      border: {
        error: string;
        active: string;
        default: string;
      };
      text: {
        blue: string;
      };
      overlay: any;
    };
  }
  interface ThemeOptions {
    custom?: object;
  }
}

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

export const theme = createTheme({
  custom: {
    background: {
      main: "#C23E3E",
      secondary: "#FFF6F6",
      grey: "#e6e6e6",
      arccordion: "#f7f7f7",
      title: "#DB4848",
      link: "#67C2F5",
      button: "#ec8282",
      black: "4C4C4C",
      titleInput: "#4C4C4C",
      labelInput: "#B0ACAC",
      white: "#FFFFFF",
      rightAnswer: "#10C66F",
      blue: "#2196F3",
    },
    text: {
      blue: "#2196F3",
    },
    border: {
      error: "red",
      active: "#2196F3",
      default: "#ccc",
    },
    overlay: {
      zIndex: `${indexElement.overlay}`,
      height: "100vh",
      width: "100vw",
      background: "rgba(0, 0, 0, 0.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: `#ffffff`,
          color: `#65748B`,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          "&:hover": {
            textShadow: "0px 0px 18px rgba(255, 255, 255, 0.69)",
          },
        },
        sizeSmall: {
          padding: `6px 16px`,
        },
        sizeMedium: {
          padding: `8px 20px`,
        },
        sizeLarge: {
          padding: `11px 24px`,
        },
        textSizeSmall: {
          padding: `7px 12px`,
        },
        textSizeMedium: {
          padding: `9px 16px`,
        },
        textSizeLarge: {
          padding: `12px 16px`,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: `32px 24px`,
          "&:last-child": {
            paddingBottom: `32px`,
          },
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: `h6`,
        },
        subheaderTypographyProps: {
          variant: `body2`,
        },
      },
      styleOverrides: {
        root: {
          padding: `32px 24px`,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: `border-box`,
          margin: 0,
          padding: 0,
        },
        html: {
          MozOsxFontSmoothing: `grayscale`,
          WebkitFontSmoothing: `antialiased`,
          display: `flex`,
          flexDirection: `column`,
          minHeight: `100%`,
          width: `100%`,
        },
        body: {
          display: `flex`,
          flex: `1 1 auto`,
          flexDirection: `column`,
          minHeight: `100%`,
          width: `100%`,
        },
        "#__next": {
          display: `flex`,
          flex: `1 1 auto`,
          flexDirection: `column`,
          height: `100%`,
          width: `100%`,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: `#E6E8F0`,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.71,
          minWidth: `auto`,
          paddingLeft: 0,
          paddingRight: 0,
          textTransform: `none`,
          "& + &": {
            marginLeft: 24,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: `#4D4D4D`,
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: `#F3F4F6`,
          ".MuiTableCell-root": {
            color: `#374151`,
          },
          borderBottom: `none`,
          "& .MuiTableCell-root": {
            borderBottom: `none`,
            fontSize: `12px`,
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0.5,
          },
          "& .MuiTableCell-paddingCheckbox": {
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          "& .MuiPickersYear-root": {
            "& button": {
              lineHeight: 1,
            },
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            "& input": {},
          },
          //border
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ccc",
            },
            "&.Mui-error fieldset": {
              borderColor: "red",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2196F3",
            },
          },
          //text error
          "& .MuiFormHelperText-root.Mui-error": {
            color: "red",
          },
        },
      },
    },
  },
}) as any;

export default theme;
