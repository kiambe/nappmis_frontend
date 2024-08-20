/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  webpack(config) {
    // Add a rule to handle .topojson files
    config.module.rules.push({
      test: /\.topojson$/,
      use: "url-loader", // Use url-loader instead of file-loader
      include: path.resolve(__dirname, "src/utils"),
    });

    // Important: return the modified config
    return config;
  },
};

export default nextConfig;
