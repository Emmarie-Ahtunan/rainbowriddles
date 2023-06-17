// Array of flag objects
const flags = [
    {
      name: "flag1",
      imagePath: "assets/flag1.jpg",
      historyPath: "history/flag1-history.txt",
      isCorrect: false
    },
    // Add more flag objects for the remaining flags
    // ...
  ];
  
  let currentFlagIndex = 0;
  
  // Function to load the next flag
  function loadNextFlag() {
    const flag = flags[currentFlagIndex];
  
    // Display the flag image
    const flagImage = document.getElementById("flag-image");
    flagImage.src = flag.imagePath;
  
    // Clear the result and history
    document.getElementById("result").textContent = "";
    document.getElementById("history").textContent = "";
  
    // Update the current flag index
    currentFlagIndex = (currentFlagIndex + 1) % flags.length;
  }
  
  // Function to check the user's answer
  function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toLowerCase();
    const flag = flags[currentFlagIndex];
  
    if (userAnswer === flag.name && !flag.isCorrect) {
      flag.isCorrect = true;
  
      // Fetch and display the flag's history
      const xhr = new XMLHttpRequest();
      xhr.open("GET", flag.historyPath, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const history = xhr.responseText;
          document.getElementById("history").textContent = history;
        }
      };
      xhr.send();
  
      document.getElementById("result").textContent = "Correct!";
    } else {
      document.getElementById("result").textContent = "Incorrect!";
    }
  
    // Load the next flag
    loadNextFlag();
  }
  
  // Load the initial flag
  loadNextFlag();
  