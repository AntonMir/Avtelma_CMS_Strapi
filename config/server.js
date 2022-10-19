module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['YjXLqXr4za5hGeaxXYPFiw==', 'GhsGw87WDInw50ep80pqDA=='],
    // keys: env.array('APP_KEYS'),
  },
});
