import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: ["./**/*.html", "./**/*.templ", "./**/*.go"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
} satisfies Config;
