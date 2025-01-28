/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "rgba(141, 145, 150, 0.65)",
        "custom-r": "#999999",
        "input-color": "rgba(38, 59, 212, 0.1)",
        "button-bg": "rgba(38, 59, 212, 1)",
        "gradient-blue": "#082A5B",
        "gradient-to": "#1159C1",
        "route-bg": "#F4F9FC",
        "color-user": "#393939",
        "route-color": "#263BD4",
        "route-noncolor": "#8B909A",
        "route-name": "#2D2D2D",
        "card-user": "#00B69B",
        dob: "#5A6376",
        successtext: "#0F5C19",
        successbg: "#ACF1B5",
        failedtext: "#FF0000",
        failedbg: "#FFCCCC",
        pendingbg: "rgba(252, 198, 89, 0.2)",
        pendingtext: "#FCC659",
        "card-title": "#202224",
        "second-card-text": "#2E2E30",
        "compare-second-card": "#767676",
        "details-bg": "#D5E5FF",
        "details-color": "#344BFD",
        "details-colortwo": "rgba(5, 178, 250, 0.2)",
        "details-bgtwo": "#05B2FA",
        "details-loanbg": "rgba(255, 160, 81, 0.2)",
        "details-loancolor": "rgba(255, 160, 81, 1)",
        "cable-bg": "#F4A79D",
        "data-bg": "#F68D2B",
        "elect-bg": "#FFD200",
        "circle-color": "#404040",
        "customer-info": "#2D2D2D",
        "info-top": "#EBEBEB",
        "info-bottom": "#868E96"
      },
      borderRadius: {
        custom: "5px",
        circle: "50%",
        "custom-router": "4px",
        "t-l": "3px 0 0 3px",
        "b-l": "0 0 4px 4px"
      },
      borderWidth: {
        bdwidth: "1px"
      }
    }
  },
  plugins: []
};
