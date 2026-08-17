import presetIcons from "@unocss/preset-icons";
import transformerDirectives from "@unocss/transformer-directives";
import {
	defineConfig,
	presetTypography,
	presetWebFonts,
} from "unocss";
import presetMini from '@unocss/preset-mini'

export default defineConfig({
	presets: [
		presetMini(),
		presetIcons({}),
		presetTypography(),
		presetWebFonts({
			// provider: "none",
			// fonts: {
			// 	sans: "var(--font-astro-serif)",
			// 	serif: "var(--font-astro-serif)",
			// 	display: "var(--font-astro-instrument)",
			// 	instrument: "var(--font-astro-instrument)",
			// },
		}),
	],
	transformers: [transformerDirectives()],
});
