export async function getAllCenterInformation() {
  const r = await fetch("/api/center");
  const info = await r.json();
  return info;
}