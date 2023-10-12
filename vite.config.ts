import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";

  /*const options = {
  key: fs.readFileSync("./front/front.key"),
  cert: fs.readFileSync("./front/front.cer"),
};*/

export default defineConfig({
  //server: { https: options },
  plugins: [react()],
});
