//! Fetch Random Joke
export default async function fetchRandomJoke() {
  try {
    const URL = `https://v2.jokeapi.dev/joke/Programming`;

    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("Something went wrong, when fetching you joke.");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
