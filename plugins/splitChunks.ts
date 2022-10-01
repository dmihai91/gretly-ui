export default {
  build: {
    extend(config, { isClient }) {
      const isProd = process.env.NODE_ENV === 'production';
      if (isProd && isClient) {
        config.optimization.splitChunks.maxSize = 249856; // 244 Kib
      }
    },
  },
};
