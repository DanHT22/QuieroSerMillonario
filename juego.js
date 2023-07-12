var questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["París", "Roma", "Madrid", "Berlín"],
        answer: 0
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Amazonas", "Nilo", "Mississippi", "Yangtsé"],
        answer: 0
    },
    {
        question: "¿Cuántos estados tiene México?",
        options: ["11", "32", "44", "23"],
        answer: 1
    },
    {
        question: "¿Cuándo acabó la II Guerra Mundial?",
        options: ["2003", "1932", "1945", "1917"],
        answer: 2
    },
    {
        question: "¿Cual es la lengua mas hablada en el mundo?",
        options: ["Español", "Frances", "Ingles", "chino mandarin"],
        answer: 3
    },
    {
        question: "¿Cuantos continentes existen?",
        options: ["1", "2", "3", "4", "5","6"],
        answer: 4
    },
    // Agrega más preguntas aquí...
];

var currentQuestion = 0;
var score = 0;

// Funcion para crear campos en HTML
function loadQuestion() {
    // se establecen las variables y se traen los elementos de html 
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");
    var resultElement = document.getElementById("result");

    // Crear elemento que se manda al HTML
    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";
    // crear campo en HTML
    for (var i = 0; i < questions[currentQuestion].options.length; i++) {
        var option = document.createElement("input");
        option.type = "radio";
        option.name = "answer";
        option.value = i;
        optionsElement.appendChild(option);
        optionsElement.appendChild(document.createTextNode(questions[currentQuestion].options[i]));
        optionsElement.appendChild(document.createElement("br"));
    }
    resultElement.style.display = "none";
}


function checkAnswer() {
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        var answer = parseInt(selectedOption.value);
        if (answer === questions[currentQuestion].answer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    var resultElement = document.getElementById("result");
    resultElement.textContent = "Tu puntuación final es: " + score + " de " + questions.length;
    resultElement.style.display = "block";
}

loadQuestion();