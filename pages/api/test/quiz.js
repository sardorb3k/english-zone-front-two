export default async function handler(req, res) {
  // Require the slug from the query string
  const body = req.query;
  // Env is the environment variable that is set in the .env file
  const API_URL = process.env.BACKEND_URL;
  // Send the message to the backend.
  const quiz = await fetch(API_URL + "/test-your-english/start?id=" + body.id);
  const res_quiz = await quiz.json();
  // Sends a HTTP success code
  res.status(200).json(res_quiz);
}
