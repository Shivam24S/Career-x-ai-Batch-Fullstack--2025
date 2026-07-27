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
    {
        id: 3,
        qns: "Which method is used to add an element at the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: 0,
    },
    {
        id: 4,
        qns: "What is the output type of typeof null in JavaScript?",
        options: ["null", "object", "undefined", "string"],
        correctAnswer: 1,
    },
    {
        id: 5,
        qns: "Which symbol is used for strict equality comparison?",
        options: ["==", "=", "===", "!="],
        correctAnswer: 2,
    },
    {
        id: 6,
        qns: "Which function is used to convert a JSON string into a JavaScript object?",
        options: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.convert()",
            "JSON.object()",
        ],
        correctAnswer: 1,
    },
    {
        id: 7,
        qns: "Which array method creates a new array by applying a function to each element?",
        options: ["filter()", "map()", "reduce()", "forEach()"],
        correctAnswer: 1,
    },
    {
        id: 8,
        qns: "What is the default value of an uninitialized variable in JavaScript?",
        options: ["null", "0", "undefined", "false"],
        correctAnswer: 2,
    },
    {
        id: 9,
        qns: "Which event occurs when a user clicks on an HTML element?",
        options: ["onchange", "onclick", "onload", "onsubmit"],
        correctAnswer: 1,
    },
    {
        id: 10,
        qns: "Which method is used to remove the last element from an array?",
        options: ["push()", "pop()", "shift()", "splice()"],
        correctAnswer: 1,
    },
];

const qns = document.getElementById("qns");

let currentIndex = 0;

function loadQns() {
    qns.innerText = quizData[currentIndex].qns;
}


loadQns()