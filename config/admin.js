module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eb185d883ce84678307ba37bfa2a667f'),
  },
});
