export default function handler(req, res) {
  // Require the slug from the query string
  const body = req.query;
  // Env is the environment variable that is set in the .env file
  const API_URL = process.env.BACKEND_URL;
  // Send a POST request to the API
  const data = {
    phoneNumber: body.phoneNumber,
  };
  console.log(data);
  // Data json is the data that is sent to the API

  const JSONdata = JSON.stringify(data);
  // Send the message to the backend.
  const quiz = fetch(API_URL + "/test-your-english/start", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSONdata,
  });
  console.log(rawResponse);
  // Sends a HTTP success code
  res.status(200).json(rawResponse);
}
