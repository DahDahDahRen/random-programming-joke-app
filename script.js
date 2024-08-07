import fetchRandomJoke from "./utils/fetchRandomJoke.js";
import domElements from "./components/uiComponents.js";

//! Get dom element module
const dom = domElements();

//! Listen for click event
dom.randomJokeBtnGenerator.addEventListener("click", async (e) => {
  try {
    //* Get joke
    const { setup, delivery } = await fetchRandomJoke();

    //* Generate markup
    const markup = dom.generateJokeMarkup(setup, delivery);

    //* Insert to UI
    dom.insertJokeToUI(markup);
  } catch (error) {
    console.error(error);
  }
});
