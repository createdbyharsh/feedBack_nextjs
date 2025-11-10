const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // NextJS <Image> component needs to whitelist domains for src={}
      "lh3.googleusercontent.com", // Google profile images
      "pbs.twimg.com", // Twitter images
      "images.unsplash.com", // Unsplash images
      "logos-world.net", // Logo images
    ],
  },
};

module.exports = nextConfig;
