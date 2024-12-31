import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      // color variables
      colors: {
        // background color variables
        main: {
          DEFAULT: "var(--bg_color)",
          success: "var(--success_color)",
          1: "var(--bg_color)",
          2: "var(--bg_color2)",
          3: "var(--bg_color3)",
          4: "var(--bg_color4)",
          5: "var(--bg_color5)",
          6: "var(--bg_color6)",
          7: "var(--bg_color7)",
          8: "var(--bg_color8)",
        },
        // text color variables
        font: {
          DEFAULT: "var(--text_light)",
          danger: "var(--danger_color)",
          1: "var(--text_dark)",
          2: "var(--text_dark2)",
          3: "var(--text_dark3)",
          4: "var(--text_dark4)",
        },
        // border color variables
        bc: {
          DEFAULT: "var(--border_color)",
          1: "var(--border_color)",
          2: "var(--border_color2)",
          3: "var(--border_color3)",
          4: "var(--border_color4)",
          5: "var(--border_color5)",
          6: "var(--border_color6)",
          7: "var(--border_color7)",
          8: "var(--border_color8)",
        },
      },
      // font size variables
      fontSize: {
        xs: "var(--text_xs)",
        sm: "var(--text_sm)",
        md: "var(--text_md)",
        lg: "var(--text_lg)",
        xl: "var(--text_xl)",
        p: "var(--text_p)",
        h1: "var(--text_h1)",
        h2: "var(--text_h2)",
      },
      // font family variables
      fontFamily: {
        Lora: "Lora, sans-serif !important",
        Inter: "Inter, sans-serif !important",
        rhd: "'Red Hat Display', sans-serif !important",
        cg: "'Cormorant Garamond', sans-serif !important",
      },
    },
  },
  plugins: [],
};
