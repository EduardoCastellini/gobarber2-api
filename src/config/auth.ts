export default {
  jwt: {
    secret: process.env.APP_SECRET || 'null',
    expiresIn: '1d',
  },
};
