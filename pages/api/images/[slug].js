export default function handler(req, res) {
  // Require slug from the query string
  const { slug } = req.query;
  // Env is the environment variable that is set in the .env file
  const API_URL = process.env.BACKEND_URL;
  // Send a GET request to the API
  return res.status(200).redirect(301, API_URL + "/teachers/" + slug);
}
