// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const filterButton = document.getElementById('filter')
const winOrLose = document.getElementById('winOrLose')
const winOrLoseText1 = document.getElementById('winOrLoseText1')
const winOrLoseText2 = document.getElementById('winOrLoseText2')
const playAgain = document.getElementById('playAgain')
const winOrLoseContainer = document.getElementById('winOrLoseContainer')
const countUpTimer = document.getElementById('count-up')
const guessCounterElem = document.getElementById('guess-counter');


const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hair: 'hidden',
    eyes: 'hidden',
    accessories: ['sunglasses', 'a hat'],
    other: [],
    mood: 'a happy'
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    mood: 'an angry'
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hair: 'white',
    eyes: 'blue',
    accessories: [],
    other: ['smoking habit'],
    mood: 'a chill'
  },
  {
    name: 'Jagger',
    img: 'images/jagger.svg',
    hair: 'black',
    eyes: 'jagger',
    accessories: ['a face mask'],
    other: [],
    mood: 'an unknown'
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    mood: 'a happy'
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['sunglasses'],
    other: [],
    mood: 'a sad'
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hair: 'black',
    eyes: 'hidden',
    accessories: ['sunglasses','jewelry'],
    other: [],
    mood: 'a chill'
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['sunglasses'],
    other: [],
    mood: 'an angry'
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['sunglasses','jewelry'],
    other: [],
    mood: 'a chill'
  },
  {
    name: 'Javier',
    img: 'images/javier.svg',
    hair: 'hidden',
    eyes: 'blue',
    accessories: ['a cap'],
    other: [],
    mood: 'an uneasy'
  },
  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hair: 'purple',
    eyes: 'hidden',
    accessories: ['sunglasses'],
    other: ['smoking habit'],
    mood: 'an angry'
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hair: 'brown',
    eyes: 'blue',
    accessories: ['glasses','a hat'],
    other: ['smoking habit'],
    mood: 'an angry'
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['jewelry'],
    other: [],
    mood: 'an uneasy'
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hair: 'orange',
    eyes: 'green',
    accessories: ['glasses','a hat'],
    other: ['smoking habit','beard'],
    mood: 'an angry'
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hair: 'white',
    eyes: 'hidden',
    accessories: ['a hat','jewelry'],
    other: [],
    mood: 'an unknown'
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hair: 'purple',
    eyes: 'green',
    accessories: [],
    other: ['pet'],
    mood: 'an angry'
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hair: 'grey',
    eyes: 'brown',
    accessories: ['a face mask', 'glasses'],
    other: [],
    mood: 'an unknown'
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: [],
    mood: 'a chill'
  },
  {
    name: 'Jia',
    img: 'images/jia.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['glasses'],
    other: [],
    mood: 'an uneasy'
  },
  {
    name: 'Jinx',
    img: 'images/jinx.svg',
    hair: 'purple',
    eyes: 'green',
    accessories: ['a face mask'],
    other: [],
    mood: 'an unknown'
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses','jewelry'],
    other: [],
    mood: 'an uneasy'
  },
  {
    name: 'Jodi',
    img: 'images/jodi.svg',
    hair: 'yellow',
    eyes: 'blue',
    accessories: ['a hat'],
    other: [],
    mood: 'a sad'
  },
  {
    name: 'Joe',
    img: 'images/joe.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['a cap'],
    other: [],
    mood: 'a happy'
  },
  {
    name: 'Jolee',
    img: 'images/jolee.svg',
    hair: 'black',
    eyes: 'blue',
    accessories: ['a hair band', 'jewelry'],
    other: [],
    mood: 'an uneasy'
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hair: 'brown',
    eyes: 'green',
    accessories: ['glasses'],
    other: [],
    mood: 'a happy'
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hair: 'yellow',
    eyes: 'hidden',
    accessories: ['sunglasses', 'a cap', 'jewelry'],
    other: [],
    mood: 'a chill'
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hair: 'grey',
    eyes: 'blue',
    accessories: ['jewelry','glasses'],
    other: [],
    mood: 'a happy'
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hair: 'yellow',
    eyes: 'green',
    accessories: [],
    other: [],
    mood: 'a happy'
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hair: 'black',
    eyes: 'green',
    accessories: [],
    other: ['beard'],
    mood: 'a chill'
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hair: 'black',
    eyes: 'brown',
    accessories: ['glasses', 'a cap'],
    other: [],
    mood: 'an angry'
  }
]

// Global variables
let secret //Secret person object
let currentQuestion // The current question object
let charactersInPlay //The people that are left in the game
let guessCounter = 0 // Question counter starts on 0
let seconds = 0 // The timer starts with 0

// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <div class="inner-card">
          <div class="card-front">
            <p>${person.name}</p>
            <img src=${person.img} alt=${person.name}>
          </div>
          <div class="guess">
            <span>Guess on ${person.name}?</span>
            <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
          </div>
        </div>
      </div>
    `
})
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// The guess counter function displays the number of guesses
const guessCounterDisplay = () => {
  guessCounterElem.innerText = `${guessCounter}`;
};

// The timer function
const upTimer = () => {
  ++seconds;
  let hour = Math.floor(seconds / 3600);
  let minute = Math.floor((seconds - hour * 3600) / 60);
  let updSecond = seconds - (hour * 3600 + minute * 60);
  countUpTimer.innerHTML = `
    Your time: 
    <div class="timer">
      <span id="hour">${hour}</span>hr 
      <span id="minute">${minute}</span>min 
      <span id="second">${updSecond}</span>sec
    </div>
  `
}

let timer = setInterval(upTimer, 1000); // This has to come below the timer function

// This function to start (and restart) the game
const start = () => {
  // Setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS

  generateBoard();  //Loads the board of characters
  setSecret();  // Generates a new secret person on start
  filterButton.disabled = true; // Disables the "Find Out" button before the player has selected an option from the selection menu
  filterButton.style.opacity = "0.5" 
  console.log("The secret person is", secret.name);
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  filterButton.disabled = false; //Enables the "Find Out" button when a selection has been made
  const category = questions.options[questions.selectedIndex].parentNode.label// This variable stores what option group (category) the question belongs to.
  const value = questions.options[questions.selectedIndex].value; // This variable stores the value of the question from the dropdown.
  
  // A variable that stores the value of the question we've selected.
  currentQuestion = {
    category: category,
    value: value
  }
  console.log("Question selected", currentQuestion);
}

// This function is invoked when you click on "Find Out' button, leads to filter function
const checkQuestion = () => {
  const { category, value } = currentQuestion
  if (category === 'hair' || category === 'eyes' || category === 'mood' ) {
    if (secret[category] === value) {
      keep = true
      filterCharacters(true); 
    }
    else {
      keep = false
      filterCharacters(false); 
    }
  }
  else if (category === 'accessories' || category === 'other') {
    if (secret[category].includes(value)) {  
      keep = true
      filterCharacters(true); 
    }
    else {
      keep = false
      filterCharacters(false); 
    }
  }
}

// This will filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  const {category, value } = currentQuestion

  if (category === 'accessories') { 
    if (keep) {
      alert(`Yes, the person wears ${value}! Keep all that wears ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    }
    else {
      alert(`No, the person doesn't wear ${value}! Remove all that wears ${value}`);
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  }
  else if (category === 'other') {
    if (keep) {
      alert(`Yes, the person has a ${value}! Keep all people that has a ${value}s`)
      charactersInPlay = charactersInPlay.filter((person) => person[category].includes(value));
    }
    else {
      alert(`No, the person doesn't have a ${value}! Remove all people that has a ${value}s`)
      charactersInPlay = charactersInPlay.filter((person) => !person[category].includes(value));
    }
  }
  else {
    if (keep) {
      alert(`Yes, the person has ${value} ${category}! Keep all people with ${value} ${category}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] === value);
    }
    else {
      alert(`No, the person doesn't have ${value} ${category}! Remove all people with ${value} ${category}`)
      charactersInPlay = charactersInPlay.filter((person) => person[category] !== value);
    }
  }
  // Function: redraw the board with the remaining people.
  generateBoard();
}

// This function is invoked when you click on "Guess" button on each card and the player then has to confirm that they want to make a guess.
const guess = (personToConfirm) => {
  const userGuess = window.confirm(`Are you sure about ${personToConfirm}..?`);
  if (userGuess) {
    checkMyGuess(personToConfirm);
  }
}

// If the player confirms, this function is invoked
const checkMyGuess = (personToCheck) => {
  board.innerHTML = ''; // Clears the board
  winOrLose.style.display = "block"; // Displays the winOrLose window
  if (personToCheck === secret.name) {
    let theResultWin = `
      <img class="card-win" src=${secret.img} alt=${secret.name}>
      <h3>Amount of guesses: </h3>
      <div class="winOrLoseTime guess-container">${guessCounter}</div>
      <div class="winOrLoseTime">
        <h3>${countUpTimer.innerHTML}</h3>
      </div>
    `; // A varible with the secret person image, the amount of guesses the player had and how long it took
    winOrLoseContainer.insertAdjacentHTML("beforeEnd", theResultWin); //Displaying that HTML element without ruining the eventListeners below
    winOrLoseText1.innerText = `Wohoo that's correct! You Win!` // Two messages are displayed
    winOrLoseText2.innerText = `${secret.name} is pleased!`
  } else {
    let theResultLose = `
      <img class="card-lose" src=${secret.img} alt=${secret.name}>
      <h3>Amount of guesses: </h3>
      <div class="winOrLoseTime guess-container">${guessCounter}</div>
      <div class="winOrLoseTime">
        <h3>${countUpTimer.innerHTML}</h3>
      </div>
    `;
    winOrLoseContainer.insertAdjacentHTML("beforeEnd", theResultLose);
    winOrLoseText1.innerText = `Oh no! Your guess is wrong!`
    winOrLoseText2.innerText = `${secret.name} (the right person) is very angry!`
  }
}

// Invokes the start function when website is loaded
start()

// All the event listeners below

//Restart button
restartButton.addEventListener('click', (event) => { 
start() // Restarts the page on click
window.location.reload(); // The page is reloaded to remove the old insertAdjacentHTML elements
});
//When an option is picked in the dropdown menu
questions.addEventListener('change', () => {
  selectQuestion(); //Invokes the selectQuestion function
  filterButton.style.opacity = "1.0" //Enables the "Find Out" button
})
//When "Find Out" button is clicked
filterButton.addEventListener("click", () => {
  checkQuestion(); // The checkQuestion function is invoked
  guessCounter += 1; // The counter starts counting
  guessCounterDisplay();  // The counter starts displaying
});
//When "Play Again" button is clicked
playAgain.addEventListener("click", (event) => {
  start(); // The start function is invoked
  winOrLose.style.display = "none"; // The winOrLoseWindow stops showing
  window.location.reload(); // The page is reloaded to remove the old insertAdjacentHTML elements
});
