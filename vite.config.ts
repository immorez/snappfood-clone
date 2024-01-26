import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import EnvironmentPlugin from "vite-plugin-environment";
import path from "node:path";

export default defineConfig({
    server: {
        host: true,
        port: 5177,
    },

    plugins: [react(), EnvironmentPlugin("all")],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
