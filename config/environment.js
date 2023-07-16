const environment = process.env.NODE_ENV || "development";

const config = {
  development: {
    apiKey: "openKey",
    host: "localhost",
    port: 3000,
    devMode: true,
  },
  production: {
    apiKey: process.env.API_KEY,
    host: process.env.HOST,
    port: process.env.PORT,
    devMode: false,
  },
};

module.exports = config[environment];
