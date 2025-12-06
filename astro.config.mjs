import node from "@astrojs/node";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://webxfactory.fr", // ← IMPORTANT
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
	server: {
		port: 4321,
		host: "0.0.0.0",
	},
	// Force HTTPS pour tous les assets
	build: {
		assetsPrefix: "https://webxfactory.fr",
	},
});
