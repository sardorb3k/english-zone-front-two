export default function handler(req, res) {
  const { slug } = req.query;
  // res.end(slug)

  const API_URL = process.env.BACKEND_URL;
  // const r = fetch(API_URL + "/teachers/" + slug);

  return res.status(200).redirect(301, API_URL + "/teachers/" + slug);
  // const info = await r.json();
  // res.setHeader('Content-Type', 'image/jpg')
  // res.setHeader('Content-Disposition', `attachment; filename=${r}`);
  // return res.send(r)
  // res.status(200);

  // return "hello";
}
