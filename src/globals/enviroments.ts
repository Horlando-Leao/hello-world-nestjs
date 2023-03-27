// export const port_app = parseInt(process.env.PORT_APP);
// export const database_url = new String(process.env.DATABASE_URL).toString();
// export const url_api_cep = new String(process.env.URL_API_CEP).toString();

export default () => ({
  port: parseInt(process.env.PORT_APP, 10) || 3000,
  database: {
    host: process.env.DATABASE_URL,
  },
  api: {
    via_cep: process.env.URL_API_CEP,
  },
});
