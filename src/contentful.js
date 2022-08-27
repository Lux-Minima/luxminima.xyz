const contentful = require("contentful");

const client = contentful.createClient({
  space: "81ncg6wai8hh",
  environment: "master", // defaults to 'master' if not set
  accessToken: "uNfBv7Esqi_wfudLGYLdTK4JcOOI-L5YFGPgMMhHvqE"
});

client
  .getContentTypes()
  .then(response => console.log(response.items))
  .catch(console.error);
