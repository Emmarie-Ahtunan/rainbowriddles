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
  {
    filename: 'flags/BigenderFlag.png',
    historyFile: 'history/BigenderFlag.txt',
    name: 'Bigender Pride Flag'
  },
  { 
    filename: 'flags/BisexualPrideFlag.png',  
    historyFile:'history/BisexualPrideFlag.txt',
    name: 'Bisexual Pride Flag'
  },
  { 
    filename: 'flags/DemigenderPrideFlag.png',  
    historyFile:'history/DemigenderPrideFlag.txt',
    name: 'Demigender Pride Flag'
  },
  {
    filename:'flags/DemisexualPrideFlag.png',
    historyFile: 'history/DemisexualPrideFlag.txt',
    name: 'Demisexual Pride Flag'
  },
  {
    filename: 'flags/GenderFluidPrideFlag.png',
    historyFile: 'history/GenderFluidPrideFlag.txt',
    name: 'Gender Fluid Pride Flag'
  },
  {
    filename:'flags/GenderQueerPrideFlag.png',
    historyFile: 'history/GenderFluidPrideFlag.txt',
    name: 'Gender Queer Pride Flag'
  },
  {
    filename: 'flags/GilberBakerPrideFlag.png',
    historyFile: 'history/GilberBakerPrideFlag.txt',
    name: 'Gilbert Baker Pride Flag'
  },
  {
    filename:'flags/Intersex-InclusiveProgressPrideFlag.png',
    historyFile: 'history/Intersex-InclusiveProgressPrideFlag.txt',
    name: 'Intersex-Inclusive Pride Flag'
  },
  {
    filename: 'flags/LesbianPrideFlag.png',
    historyFile: 'history/LesbianPrideFlag.txt',
    name: 'Lesbian Pride Flag'
  },
  {
    filename: 'flags/Non_BinaryPrideFlag.png',
    historyFile: 'history/Non_BinaryPrideFlag.txt',
    name: 'Non-Binary Pride Flag'
  },
  {
    filename: 'flags/PansexualPrideFlag.png',
    historyFile: 'history/PansexualPrideFlag.txt',
    name: 'Pansexual Pride Flag'
  },
  {
    filename: 'flags/PhiladelphiaPrideFlag.png',
    historyFile: 'history/PhiladelphiaPrideFlag.txt',
    name: 'Philadelphia Pride Flag'
  },
  {
    filename:'flags/PolyamoryPrideFlag.png',
    historyFile: 'history/PolyamoryPrideFlag.txt',
    name: 'Polyamory Pride Flag'
  },
  {
    filename:'flags/PolysexualPrideFlag.png',
    historyFile: 'history/PolysexualPrideFlag.txt',
    name: 'Polysexual Pride Flag'
  },
  {
    filename:'flags/PrideofAfricaFlag.png',
    historyFile: 'history/PrideofAfricaFlag.text',
    name: 'Pride of Africa Flag'
  },
  {
    filename:'flags/ProgressPrideFlag.png',
    historyFile: 'history/ProgressPrideFlag.txt',
    name: 'Progress Pride Flag'
  },

  {
    filename:'flags/QueerPeopleofColorPrideFlag.png',
    historyFile: 'history/QueerPeopleofColorPrideFlag.txt',
    name: 'Queer People of Color Pride Flag'
  },

  {
    filename:'flags/QueerPrideFlag.png',
    historyFile: 'history/QueerPrideFlag.png',
    name: 'Queer Pride Flag'
  },

  {
    filename:'flags/TraditionalaPrideFlag.png',
    historyFile: 'history/TraditionalPrideFlag.txt',
    name: 'Traditional Pride Flag'
  },

  {
    filename:'flags/Trans-InclusiveGayMensPrideFlag.png',
    historyFile: 'history/Trans-InclusiveGayMensPrideFlag.txt',
    name: 'Trans-Inclusive Gay Mens Pride Flag'
  },

  {
    filename:'flags/TransgenderPrideFlag.png',
    historyFile: 'history/TransgenderPrideFlag.txt',
    name: 'Transgender Pride Flag'
  },
  
  {
    filename:'flags/TwoSpiritPrideFlag.png',
    historyFile: 'history/TwoSpiritPrideFlag.txt',
    name: 'Two Spirit Pride Flag'
  }
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
  flagImage.src = randomFlag.filemane;
  

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
   alert('correct')
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
  } else {
    alert('incorrect')
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
