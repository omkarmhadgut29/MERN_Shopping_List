import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
    server: {
        proxy: {
            "/api/items": {
                // target: import.meta.env.VITE_BACKEND_SERVER,
                // target: "https://shoppinglist-api-8wio.onrender.com/",
                target: "http://localhost:5001",
                changeOrigin: true,
            },
        },
    },
    plugins: [react()],
});

// export default ({ mode }) => {
//     process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

//     return defineConfig({
//         server: {
//             proxy: {
//                 "/api/items": {
//                     target: process.env.VITE_BACKEND_SERVER,
//                     changeOrigin: true,
//                 },
//             },
//         },
//         plugins: [react()],
//     });
// };
