export default async (req, res) => {
  const API_URL = process.env.BACKEND_URL;
  const r = await fetch(API_URL + "/info/center");
  const info = await r.json();
  return res.json(info);
};
