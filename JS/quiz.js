// variables que contienen las preguntas y respuestas. Pueden tener longitud indefinida
const quiz = [
    {"label": "What is the capital of France?",
    "answer1": "Berlin",
    "answer2": "Madrid",
    "answer3": "Paris",
    "answer4": "Rome"},
    {"label": "Which river is the longest in the world?",
    "answer1": "Amazon",
    "answer2": "Nile",
    "answer3": "Mississippi",
    "answer4": "Yangtze"},
    {"label": "Which country is known as the Land of the Rising Sun?",
    "answer1": "China",
    "answer2": "South Korea",
    "answer3": "Japan",
    "answer4": "Thailand"},
    {"label": "Which continent is the largest by land area?",
    "answer1": "Europe",
    "answer2": "Africa",
    "answer3": "Asia",
    "answer4": "North America"},
    {"label": "What is the highest mountain in the world?",
    "answer1": "Kilimanjaro",
    "answer2": "Mount Everest",
    "answer3": "Denali",
    "answer4": "Matterhorn"},
    {"label": "Which country is both in Europe and Asia?",
    "answer1": "Spain",
    "answer2": "Afganistan",
    "answer3": "Turkey",
    "answer4": "Azerbaijan"},
    {"label": "Which desert is the largest in the world?",
    "answer1": "Sahara",
    "answer2": "Atacama",
    "answer3": "Gobi",
    "answer4": "Arabian"},
    {"label": "What is the capital of Australia?",
    "answer1": "Sydney",
    "answer2": "Melbourne",
    "answer3": "Canberra",
    "answer4": "Perth"},
    {"label": "Which country is known as the Land of Fire and Ice?",
    "answer1": "Iceland",
    "answer2": "Norway",
    "answer3": "New Zealand",
    "answer4": "Canada"},
    {"label": "Which African country is known as the 'Rainbow Nation' due to its diverse population and cultures?",
    "answer1": "Kenya",
    "answer2": "Nigeria",
    "answer3": "South Africa",
    "answer4": "Ethiopia"}
];
const answers = ["Paris","Nile","Japan","Africa","Mount Everest","Turkey","Sahara","Canberra","Iceland","South Africa"];

//variables de uso interno
var index = 0;
var scoreArray = [];
var score = 0;

function bubbleSort(inputArr) {
    let len = inputArr.length;
    let swaped;
    do {
        swaped = false;
        for (let i = 0; i < len-1; i++) {
            if (inputArr[i][1] < inputArr[i + 1][1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swaped = true;
            }
        }
    } while (swaped);
    return inputArr;
};

//añadir contenido a la página
let main1 = document.createElement("main");
main1.id = "quiz";
let section1 = `
    <section id="name">
        <h2>Introduce your name to start:</h2> <br>
        <form id="formName">
            <label for="user">Name: </label>
            <input type="text" name="user" id="user" placeholder="Introduce your name"><br><br>
            <p id="parrafo"></p>
            <button type="submit">Submit</button>
        </form> 
    </section>
    <section>
        <form action="./score.html" method="get" id="formTest">
            <article id="test">
                <section id="titleContainer">
                <h2 id="title">${quiz[index].label}</h2>
                </section>
                <article id="radio">
                    <label for="answer1" class="answer0" id="a0">${quiz[index].answer1}</label>
                    <input type="radio" name="answer" id="answer1">
                    <label for="answer2" class="answer1" id="a1">${quiz[index].answer2}</label>
                    <input type="radio" name="answer" id="answer2">
                    <label for="answer3" class="answer2" id="a2">${quiz[index].answer3}</label>
                    <input type="radio" name="answer" id="answer3">
                    <label for="answer4" class="answer3" id="a3">${quiz[index].answer4}</label>
                    <input type="radio" name="answer" id="answer4">
                </article>
            </article>
            <article id="end">
                <h2>How did it go?</h2><br>
                <p>Submit results</p><br>
                <button type="submit">Submit</button>
            </article>
        </form>
        <div id="cronometro">00:00:00</div>
        <audio src="../Assets/Musica_Lobby.mp3" class="hide" autoplay loop controls>Audio not suported</audio>
    </section>`;
main1.innerHTML = section1;
document.getElementById("testPage").appendChild(main1);

// Mostrar sólo la primera pantalla
const crono = document.getElementById("cronometro");
crono.style.display = "none";
const name = document.getElementById("name");
name.style.display = "flex";
const test = document.getElementById("test");
test.style.display = "none";
const end = document.getElementById("end");
end.style.display = "none";

//funcionamiento del cronometro
let tiempoInicio = 0;
let intervalo;
function actualizarCronometro() {
    const tiempoActual = Date.now();
    const diferencia = tiempoActual - tiempoInicio;
    
    const horas = Math.floor(diferencia / 3600000);
    const minutos = Math.floor((diferencia % 3600000) / 60000);
    const segundos = Math.floor((diferencia % 60000) / 1000);
    
    const tiempoFormateado = `${String(horas).padStart(2, "0")}:${String(
        minutos
    ).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`;
    
    document.getElementById("cronometro").textContent = tiempoFormateado;
    }

// Validación formulario nombre
let button1 = document.getElementById("formName");
button1.addEventListener("submit", function(event) {
    const user = event.target.user.value;
    let linea = document.createTextNode("The name must be between 2 and 30 characters");
    if (user.length < 2 || user.length > 30) {
        event.preventDefault();
        if (document.getElementById("parrafo").textContent == "") {
            document.getElementById("parrafo").appendChild(linea);
        }
    } else {
        event.preventDefault();
        scoreArray.push(user);
        crono.style.display = "block";
        name.style.display = "none";
        test.style.display = "flex";
        if (!intervalo) {
            tiempoInicio = Date.now();
            intervalo = setInterval(actualizarCronometro, 1000);
            }
    };
});


let inputAnswers = document.querySelectorAll("#radio input");
let labelAnswers = document.querySelectorAll("#radio label"); 
let opcionUnica = true; //solo deja pulsar el botón una vez

//función cambiar color
function color() {
    for (let k = 0; k < labelAnswers.length; k++) {
        if (labelAnswers[k].textContent == answers[index]) {
            document.getElementById(`a${k}`).classList.toggle(`answer${k}`);
            document.getElementById(`a${k}`).classList.toggle("green");
        } else {
            document.getElementById(`a${k}`).classList.toggle(`answer${k}`);
            document.getElementById(`a${k}`).classList.toggle("red");
        }; 
    }; 
};


//añadir botones que checkeen los radio
//inhabilitar las opciones durante 2 segundos para que no se pueda cambiar
//cambiar los colores para mostrar la respuesta correcta    
for (let i = 0; i < labelAnswers.length; i++) {
    labelAnswers[i].addEventListener("mouseover", function() {
        labelAnswers[i].classList.add("pointer");
    });
    labelAnswers[i].addEventListener("mouseout", function() {
        labelAnswers[i].classList.remove("pointer");
    });
    labelAnswers[i].addEventListener("click", function(event) {
        if (opcionUnica) {
            opcionUnica= false;
            inputAnswers[i].checked = true;
            color();
            for (let j = 0; j < inputAnswers.length; j++) {
                inputAnswers[j].disabled = true;
            }
            function after() {
                inputAnswers[i].checked = false;
                color();
                opcionUnica = true;
                for (let j = 0; j < inputAnswers.length; j++) {
                    inputAnswers[j].disabled = false;
                };
                index += 1;
                if (index == 10) {
                    //mostrar siguiente pantalla
                    test.style.display = "none";
                    end.style.display = "flex";
                    //parar cronometro
                    clearInterval(intervalo);
                    intervalo = null;
                } else {
                    document.getElementById("title").textContent = `${quiz[index].label}`;
                    document.getElementById("a0").textContent = `${quiz[index].answer1}`;
                    document.getElementById("a1").textContent = `${quiz[index].answer2}`;
                    document.getElementById("a2").textContent = `${quiz[index].answer3}`;
                    document.getElementById("a3").textContent = `${quiz[index].answer4}`;
                }
            };
            if (labelAnswers[i].textContent == answers[index]) {
                score += 1;
            }
            setTimeout(after, 2000);
        }
        
    });
};
//variable de control
var control = false;
let formTest = document.getElementById("formTest");
formTest.addEventListener("submit", function(event) {
    //recupero el scoreBoard
    let variableRecuperada = localStorage.getItem("scoreBoard");
    if (variableRecuperada == null) {
        variableRecuperada = [];
    } else {
        variableRecuperada = JSON.parse(variableRecuperada);
    };

    //preparo la variable para introducir y la introduzco.
    scoreArray.push(score);
    variableRecuperada.push(scoreArray);

    //ordeno el scoreboard y lo vuelvo a guardar
    bubbleSort(variableRecuperada);
    variableRecuperada = JSON.stringify(variableRecuperada);
    localStorage.setItem('scoreBoard', variableRecuperada);

    //guardo también la puntuación del último para felicitarle
    scoreArray = JSON.stringify(scoreArray);
    localStorage.setItem('lastUser', scoreArray);
}); 



