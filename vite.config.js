import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { //resolve is a core concept used to handle asynchronous operations inside a Promise(placeholder). 
    alias: { //alias is an alternative name given to a variable, module, function, or property.
      "@": path.resolve(__dirname, "./src"), // This allows us to use @ to import the components from the src folder
    },
  },
});
