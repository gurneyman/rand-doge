async function fetchJson(url) {
  const res = await fetch(url);
  return await res.json();
}

export async function fetchBreeds() {
  const json = await fetchJson("https://dog.ceo/api/breeds/list/all");
  return Object.keys(json.message);
}

export async function fetchRandomBreedImageUrl(breed) {
  const json = await fetchJson(`https://dog.ceo/api/breed/${breed}/images/random`);
  return json.message;
}
