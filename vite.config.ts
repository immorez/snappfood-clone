import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import EnvironmentPlugin from "vite-plugin-environment";
import path from "node:path";

export default defineConfig({
    server: {
        host: true,
        port: 5177,
    },

    plugins: [
        react(),
        EnvironmentPlugin("all"),
        VitePWA({
            registerType: "autoUpdate",
            devOptions: {
                enabled: true,
            },
            manifest: {
                name: "Snapp! Food",
                short_name: "Snapp! Food",
                icons: [
                    {
                        src: "/icon_192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/icon_512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
                theme_color: "#e20074",
                background_color: "#e20074",
                display: "standalone",
            },
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
