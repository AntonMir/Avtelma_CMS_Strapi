module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['YjXLqXr4za5hGeaxXYPFiw==','GhsGw87WDInw50ep80pqDA==','LznhkNwehTSdTgtQGrIwIQ==','rDeMD+YDySR5NqzRgXGXOg==']),
  },
});
