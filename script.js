// An array of flag file objects with filenames and histories
const flags = [
  {
    filename: 'flags/AgenderPrideFlag.png',
    historyFile: 'history/AgenderPrideFlag.txt'
  },
  {
    filename: 'flags/AsexualPrideFlag.png',
    historyFile: 'history/AsexualPrideFlag.txt'
  },
  {
    filename: 'flags/BigenderFlag.png',
    historyFile: 'history/BigenderFlag.txt'
  },
  { 
    filename: 'flags/BisexualPrideFlag.png',  
    historyFile:'history/BisexualPrideFlag.txt'
  },
  { 
    filename: 'flags/DemigenderPrideFlag.png',  
    historyFile:'history/DemigenderPrideFlag.txt'
  },
  {
    filename:'flags/DemisexualPrideFlag.png',
    historyFile: 'history/DemisexualPrideFlag.txt'
  },
  {
    filename: 'flags/GenderFluidPrideFlag.png',
    historyFile: 'history/GenderFluidPrideFlag.txt'
  },
  {
    filename:'flags/GenderQueerPrideFlag.png',
    historyFile: 'history/GenderFluidPrideFlag.txt'
  },
  {
    filename: 'flags/GilberBakerPrideFlag.png',
    historyFile: 'history/GilberBakerPrideFlag.txt'
  },
  {
    filename:'flags/Intersex-InclusiveProgressPrideFlag.png',
    historyFile: 'history/Intersex-InclusiveProgressPrideFlag.txt'
  },
  {
    filename: 'flags/LesbianPrideFlag.png',
    historyFile: 'history/LesbianPrideFlag.txt'
  },
  {
    filename: 'flags/Non_BinaryPrideFlag.png',
    historyFile: 'history/Non_BinaryPrideFlag.txt'
  },
  {
    filename: 'flags/PansexualPrideFlag.png',
    historyFile: 'history/PansexualPrideFlag.txt'
  },
  {
    filename: 'flags/PhiladelphiaPrideFlag.png',
    historyFile: 'history/PhiladelphiaPrideFlag.txt'
  },
  {
    filename:'flags/PolyamoryPrideFlag.png',
    historyFile: 'history/PolyamoryPrideFlag.txt'
  },
  {
    filename:'flags/PolysexualPrideFlag.png',
    historyFile: 'history/PolysexualPrideFlag.txt'
  },
  {
    filename:'flags/PrideofAfricaFlag.png',
    historyFile: 'history/PrideofAfricaFlag.text'
  },
  {
    filename:'flags/ProgressPrideFlag.png',
    historyFile: 'history/ProgressPrideFlag.txt'
  },

  {
    filename:'flags/QueerPeopleofColorPrideFlag.png',
    historyFile: 'history/QueerPeopleofColorPrideFlag.txt'
  },

  {
    filename:'flags/QueerPrideFlag.png',
    historyFile: 'history/QueerPrideFlag.png'
  },

  {
    filename:'flags/TraditionalaPrideFlag.png',
    historyFile: 'history/TraditionalPrideFlag.txt'
  },

  {
    filename:'flags/Trans-InclusiveGayMensPrideFlag.png',
    historyFile: 'history/Trans-InclusiveGayMensPrideFlag.txt'
  },

  {
    filename:'flags/TransgenderPrideFlag.png',
    historyFile: 'history/TransgenderPrideFlag.txt'
  },
  
  {
    filename:'flags/TwoSpiritPrideFlag.png',
    historyFile: 'history/TwoSpiritPrideFlag.txt'
  }
];

// An array of flag file objects with filenames and histories
const flags = [
  {
    filename: 'flags/AgenderPrideFlag.png',
    historyFile: 'history/AgenderPrideFlag.txt',
    name: 'Agender Pride Flag'
  },
  {
    filename: 'flags/AsexualPrideFlag.png',
    historyFile: 'history/AsexualPrideFlag.txt',
    name: 'Asexual Pride Flag'
  },
  // Add other flag objects here
];

// Function to select a random flag
function selectRandomFlag() {
  const randomIndex = Math.floor(Math.random() * flags.length);
  const randomFlag = flags[randomIndex];
  return randomFlag;
}

// Function to update the flag image and load the flag history
function updateFlagImage() {
  const flagImage = document.getElementById('flag-image');
  const randomFlag = selectRandomFlag();
  flagImage.src = randomFlag.filename;

  loadFlagHistory(randomFlag.historyFile);
}

// Function to load the flag history from a file
function loadFlagHistory(filePath) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', filePath, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const flagHistory = xhr.responseText;
      displayFlagHistory(flagHistory);
      generateNewQuestion();
    }
  };
  xhr.send();
}

// Function to display the flag history
function displayFlagHistory(history) {
  const historyContainer = document.getElementById('history-container');
  historyContainer.textContent = history;
}

// Function to generate a new question
function generateNewQuestion() {
  const flagQuestion = document.getElementById('flag-question');
  const options = document.getElementsByClassName('option');

  // Select a random flag
  const randomFlag = selectRandomFlag();

  // Display the flag question
  flagQuestion.textContent = `Which flag does this represent?`;

  // Set the flag image for the question
  const flagImage = document.getElementById('flag-image');
  flagImage.src = randomFlag.filename;

  // Randomly assign the correct flag to one of the options
  const correctOptionIndex = Math.floor(Math.random() * options.length);
  options[correctOptionIndex].textContent = randomFlag.name;
  options[correctOptionIndex].dataset.flag = 'correct';

  // Assign other flags to the remaining options
  let flagIndex = 0;
  for (let i = 0; i < options.length; i++) {
    if (i !== correctOptionIndex) {
      options[i].textContent = flags[flagIndex].name;
      options[i].dataset.flag = 'incorrect';
      flagIndex++;
    }
  }
}

// Function to handle the user's answer
function checkAnswer(selectedOption) {
  // Get the selected option's flag data
  const selectedFlag = selectedOption.dataset.flag;

  // Check if the selected option is correct
  if (selectedFlag === 'correct') {
    // Get the history file for the flag
    const flagHistoryFile = selectedOption.dataset.historyFile;

    // Fetch the history file for the flag
    const xhr = new XMLHttpRequest();
    xhr.open('GET', flagHistoryFile, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const flagHistory = xhr.responseText;
        // Display the flag history to the user
        alert(`Flag History:\n${flagHistory}`);
      }
    };
    xhr.send();
  }

  // Generate a new question
  generateNewQuestion();
}

// Add event listeners to the options
for (let i = 0; i < options.length; i++) {
  options[i].addEventListener('click', function () {
    checkAnswer(options[i]);
  });
}

// Function to end the game
function endGame() {
  // Display the "Thank you for playing!" message
  const messageContainer = document.getElementById('message-container');
  messageContainer.textContent = "Thank you for playing!";

  // Hide the question container and options
  const questionContainer = document.getElementById('question-container');
  questionContainer.style.display = 'none';
}


