export default async function getPokemonService(options) {
  const { id } = options;
  const response = await fetch(`/api/v2/pokemon/${id}`, { method: "GET" });
  return response.json();
}
