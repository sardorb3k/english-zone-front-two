export default async (req, res) => {
  // Env is the environment variable that is set in the .env file
  const API_URL = process.env.BACKEND_URL;
  // Send a GET request to the API
  const r = await fetch(API_URL + "/info/center");
  // Data json is the data that is sent to the API
  const info = await r.json();
  // Sends a HTTP success code
  return res.json(info);
};
