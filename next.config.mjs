/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Configure SVGR
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            dimensions: false,
            plugins: ["@svgr/plugin-jsx"],
            typescript: true,
          },
        },
      ],
    });

    return config;
  },
  serverExternalPackages: ["@svgr/webpack", "@svgr/plugin-jsx"],
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.tsx",
        },
      },
    },
  },
};

export default nextConfig;
