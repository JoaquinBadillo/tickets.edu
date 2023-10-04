import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";

const options = {
  key: fs.readFileSync("./frontend.key"),
  cert: fs.readFileSync("./frontend.cer"),
};

export default defineConfig({
  server: { https: options },
  plugins: [react()],
});
