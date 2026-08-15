import svelte from 'rollup-plugin-svelte';
import { defineConfig } from 'tsdown';

export default defineConfig((options) => {
	const isProduction = options.watch !== true;

	return {
		entry: ['src/console.ts'],
		outDir: 'lib',
		format: 'cjs',

		// `main` in package.json resolves to `./lib/console`, so the bundle must
		// keep the `.js` extension that tsdown would otherwise turn into `.cjs`.
		outExtensions: () => ({ js: '.js' }),

		platform: 'node',

		// `engines.atom` is >=1.56, which ships Electron 9 (Chrome 83).
		target: 'chrome83',

		deps: {
			// The bundle is self-contained, exactly like the previous rollup setup:
			// only what Pulsar itself provides stays external. `svelte` and
			// `@children-of-atom/rosetta` are ESM-only, so they could not be apm
			// dependencies of a CJS package anyway — they are devDependencies and
			// get inlined.
			alwaysBundle: ['@atxm/developer-console', '@children-of-atom/rosetta', 'event-kit', 'svelte'],
			neverBundle: [/^node:/, 'atom', 'electron'],
			onlyBundle: false,
		},

		plugins: [
			svelte({
				// No `emitCss`: rolldown has no CSS pipeline here, so the component
				// injects its own styles at runtime.
				emitCss: false,
				compilerOptions: {
					dev: !isProduction,
				},
			}),
		],

		dts: false,
		minify: isProduction,
		sourcemap: !isProduction,

		// `lib/` is a tracked directory; never wipe it behind the user's back.
		clean: false,
	};
});
