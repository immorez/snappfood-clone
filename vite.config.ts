import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: true,
        port: 5177,
    },
    plugins: [react()],
    resolve: {
        alias: [{ find: "@", replacement: "/src" }],
    },
});
