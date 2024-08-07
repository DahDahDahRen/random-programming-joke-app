const domElements = () => {
  const _randomJokeContainer = document.querySelector("#random-joke-container");
  const _randomJokeButton = document.querySelector("#random-joke-generator");

  //* Random Joke Markup
  const _randomJokeTextElementMarkUp = (...randomJoke) => {
    //* Get joke and answer params
    const [joke, answer] = randomJoke;

    //* Check if joke and answer is undefined
    if (!joke && !answer) {
      return `<p class="text-center default-joke-text">Hey, I am sorry to tell you but server started hating you! 😂</p>`;
    } else {
      return `<div class="random-joke-content">
                <p class="text-center">Q: <strong>${joke}</stron></p>
                <p class="text-center">Ans: <em>${answer}</em></p>
            </div>`;
    }
  };

  //* Insert Random joke markup
  const _insertRandomJokeToDOM = (randomJoke) => {
    _randomJokeContainer.innerHTML = "";
    _randomJokeContainer.insertAdjacentHTML("afterbegin", randomJoke);
  };

  return {
    randomJokeContainer: _randomJokeContainer,
    randomJokeBtnGenerator: _randomJokeButton,
    generateJokeMarkup: _randomJokeTextElementMarkUp,
    insertJokeToUI: _insertRandomJokeToDOM,
  };
};

export default domElements;
