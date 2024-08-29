import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: ["./public/**/*.html", "./views/**/*.templ"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
} satisfies Config;
