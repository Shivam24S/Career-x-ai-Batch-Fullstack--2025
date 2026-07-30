const quizData = [
  {
    id: 1,
    qns: "What does JavaScript primarily used for?",
    options: [
      "Styling web pages",
      "Creating database tables",
      "Adding interactivity to websites",
      "Designing images",
    ],
    correctAnswer: 2,
  },
  {
    id: 2,
    qns: "Which keyword is used to declare a variable in modern JavaScript?",
    options: ["var", "let", "const", "Both let and const"],
    correctAnswer: 3,
  },
  // {
  //   id: 3,
  //   qns: "Which method is used to add an element at the end of an array?",
  //   options: ["push()", "pop()", "shift()", "unshift()"],
  //   correctAnswer: 0,
  // },
  // {
  //   id: 4,
  //   qns: "What is the output type of typeof null in JavaScript?",
  //   options: ["null", "object", "undefined", "string"],
  //   correctAnswer: 1,
  // },
  // {
  //   id: 5,
  //   qns: "Which symbol is used for strict equality comparison?",
  //   options: ["==", "=", "===", "!="],
  //   correctAnswer: 2,
  // },
  // {
  //   id: 6,
  //   qns: "Which function is used to convert a JSON string into a JavaScript object?",
  //   options: [
  //     "JSON.stringify()",
  //     "JSON.parse()",
  //     "JSON.convert()",
  //     "JSON.object()",
  //   ],
  //   correctAnswer: 1,
  // },
  // {
  //   id: 7,
  //   qns: "Which array method creates a new array by applying a function to each element?",
  //   options: ["filter()", "map()", "reduce()", "forEach()"],
  //   correctAnswer: 1,
  // },
  // {
  //   id: 8,
  //   qns: "What is the default value of an uninitialized variable in JavaScript?",
  //   options: ["null", "0", "undefined", "false"],
  //   correctAnswer: 2,
  // },
  // {
  //   id: 9,
  //   qns: "Which event occurs when a user clicks on an HTML element?",
  //   options: ["onchange", "onclick", "onload", "onsubmit"],
  //   correctAnswer: 1,
  // },
  // {
  //   id: 10,
  //   qns: "Which method is used to remove the last element from an array?",
  //   options: ["push()", "pop()", "shift()", "splice()"],
  //   correctAnswer: 1,
  // },
];

const qns = document.getElementById("qns");

const qnsNumber = document.getElementById("qnsNumber");

const options = document.getElementById("options");

const nextQnsBtn = document.getElementById("next-btn");

let currentIndex = 0;

let score = 0;

let selectedAnswer = null;

let userAnswers = [];

let timer


let timeLeft=30

function loadQns() {
  let currentQns = quizData[currentIndex];

  qnsNumber.innerText = `Qns ${currentIndex + 1}/${quizData.length}`;

  qns.innerText = currentQns.qns;

  options.innerHTML = "";

  currentQns.options.forEach((option, index) => {
    const col = document.createElement("div");

    col.classList.add("col-md-6");

    const button = document.createElement("button");

    button.innerText = option;

    button.classList.add("btn", "btn-outline-primary", "option-btn");

    button.onclick = function () {
      selectedAnswer = index;

      userAnswers.push({
        qns: currentQns.qns,
        answer: index,
        options: currentQns.options,
        correctAnswer: currentQns.correctAnswer,
      });

      console.log("user Answer", userAnswers);
      nextQns();
    };

    options.appendChild(col);

    col.appendChild(button);
  });
}

loadQns();


function startTimer(){

  let timerElement = document.getElementById("timer")


}


function nextQns() {
  if (selectedAnswer === quizData[currentIndex].correctAnswer) {
    score++;
  }

  if (currentIndex < quizData.length - 1) {
    selectedAnswer = null;
    currentIndex++;

    userAnswers.push({
      qns: quizData[currentIndex].qns,
      answer: null,
      options: quizData[currentIndex].options,
      correctAnswer: quizData[currentIndex].correctAnswer,
    });

    loadQns();
  } else {
    quizResult();
  }
}

function quizResult() {
  const quizResult = document.querySelector(".quiz-card");

  quizResult.innerHTML = `
  
  
  <h2 class="text-center" > Quiz Result 🎉</h2>

  <h3 class="text-center">  ${score}/${quizData.length} </h3>

  <div class="mt-3" >

  <h3 class="text-center"> ✏️ Review Summary</h3>

  <ul class="list-group">
  ${userAnswers.map((ans, index) => {
    return `
    
    <li class="list-group-item">
    
    <h5 class="text-center">Question No:- ${index + 1} ${ans.qns}</h5>

    <h6 class="text-center">Your Answer:- ${ans.answer !== null ? ans.options[ans.answer] : "Not Selected"}</h6>

    <h6 class="text-center">Correct Answer:- ${ans.options[ans.correctAnswer]} </h6>
    
    </li>

    `;
  })}


  </ul>

  </div>

  `;
}
