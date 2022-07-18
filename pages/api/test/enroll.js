export default function handler(req, res) {
  // Require the slug from the query string
  const body = req.body;
  // Env is the environment variable that is set in the .env file
  const API_URL = process.env.BACKEND_URL;
  // Send a POST request to the API
  const data = {
    fullname: body.fullname,
    phoneNumber: body.phoneNumber,
  };
  // Data json is the data that is sent to the API
  const JSONdata = JSON.stringify(data);
  // Send the message to the backend.
  fetch(API_URL + "/test-your-english/enroll", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSONdata,
  });
  // Sends a HTTP success code
  res.status(200).json({ message: "Message sent!" });
}
