import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
      fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <svg
      className={classes.svgHover}
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      version="1.1"
      viewBox="0 0 300 300"
    >
      <g
        //fill="#010101"
        fillOpacity="1"
        stroke="none"
        fontFamily="Open Sans"
        fontSize="37.333"
        fontStretch="normal"
        fontStyle="normal"
        fontVariant="normal"
        fontWeight="normal"
        letterSpacing="0"
        textAnchor="start"
        wordSpacing="0"
        writingMode="lr-tb"
      >
        <g
          ariaLabel="k"
          transform="matrix(2.05504 0 0 2.10746 1447.33 -421.23)"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Open Sans, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontFeatureSettings: "normal",
            WebkitTextAlign: "start",
            textAlign: "start",
          }}
        >
          <path
            style={{
              InkscapeFontSpecification: "SunCatcherStudioFont",
            }}
            //fill="#010101"
            fillOpacity="1"
            d="M-637.964 254.46l-10 14.666 10 15-.156 48.483-12.77-8.712-.127-34.138-8-12.949h-15.56v30.899l-12.047-8.342.024-57.107 12.023-8.02v29.45h15.56l8-13.897v-31.358l12.9-9.035z"
            fontFamily="SunCatcherStudioFont"
            fontSize="333.333"
            fontStretch="normal"
            fontStyle="normal"
            fontVariant="normal"
            fontWeight="normal"
          ></path>
        </g>
        <g
          ariaLabel="l"
          transform="matrix(2.03282 0 0 2.09816 1126.18 -270.84)"
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'Open Sans, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontFeatureSettings: "normal",
            WebkitTextAlign: "start",
            textAlign: "start",
          }}
        >
          <path
            d="M-459.931 237.335l23.268-14.243v-16.617h13.033v.333l-.133 22.444-49.06 33.262.047-123.919 12.712 8.79z"
            style={{
              InkscapeFontSpecification: "SunCatcherStudioFont",
            }}
            //fill="#010101"
            fillOpacity="1"
            fontFamily="SunCatcherStudioFont"
            fontSize="333.333"
            fontStretch="normal"
            fontStyle="normal"
            fontVariant="normal"
            fontWeight="normal"
          ></path>
        </g>
      </g>
    </svg>
    // <svg
    //   className={classes.svgHover}
    //   xmlns="http://www.w3.org/2000/svg"
    //   class="icon icon-tabler icon-tabler-letter-k"
    //   width="40"
    //   height="40"
    //   viewBox="-1 -4 20 26"
    //   stroke-width="3"
    //   stroke="currentColor"
    //   fill="none"
    //   stroke-linecap="round"
    //   stroke-linejoin="round"
    // >
    //   {" "}
    //   <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "}
    //   <line x1="7" y1="4" x2="7" y2="20" /> <path d="M7 12h2l8 -8" />{" "}
    //   <line x1="9" y1="12" x2="17" y2="20" />{" "}
    // </svg>
  );
};
