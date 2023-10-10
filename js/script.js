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
    "answer4": "Ethiopia"},
    {"label": "What is the capital of Canada?",
    "answer1": "Vancouver",
    "answer2": "Toronto",
    "answer3": "Ottawa",
    "answer4": "Montreal"},
    {"label": "Which continent is known as the 'Land Down Under'?",
    "answer1": "Africa",
    "answer2": "Australia",
    "answer3": "South America",
    "answer4": "Asia"},
    {"label": "What is the largest island in the world by land area?",
    "answer1": "Madagascar",
    "answer2": "Greenland",
    "answer3": "Borneo",
    "answer4": "Iceland"},
    {"label": "What is the highest waterfall in the world?",
    "answer1": "Angel Falls",
    "answer2": "Niagara Falls",
    "answer3": "Victoria Falls",
    "answer4": "Iguazu Falls"},
    {"label": "What is the largest country by land area in South America?",
    "answer1": "Brazil",
    "answer2": "Argentina",
    "answer3": "Colombia",
    "answer4": "Peru"},
    {"label": "Which river is the longest in Russia and Europe?",
    "answer1": "Rhine",
    "answer2": "Danube",
    "answer3": "Volga",
    "answer4": "Seine"},
    {"label": "In which country would you find the Great Barrier Reef?",
    "answer1": "Thailand",
    "answer2": "Australia",
    "answer3": "Indonesia",
    "answer4": "Fiji"},
    {"label": "What is the smallest continent?",
    "answer1": "Asia",
    "answer2": "Europe",
    "answer3": "Antarctica",
    "answer4": "Australia"},
    {"label": "What is the smallest country in Africa by land area?",
    "answer1": "Seychelles",
    "answer2": "Eswatini",
    "answer3": "Gambia",
    "answer4": "Djibouti"},
    {"label": "What is the capital of Australia?",
    "answer1": "Sydney",
    "answer2": "Melbourne",
    "answer3": "Canberra",
    "answer4": "Brisbane"},
    {"label": "Which Asian river is often called the 'River of Sorrows'?",
    "answer1": "Yangtze",
    "answer2": "Mekong",
    "answer3": "Yellow River (Huang He)",
    "answer4": "Indus"},
    {"label": "What is the largest lake in Africa?",
    "answer1": "Lake Tanganyika",
    "answer2": "Lake Malawi",
    "answer3": "Lake Victoria",
    "answer4": "Lake Chad"},
    {"label": "What is the highest mountain in South America?",
    "answer1": "Mount Aconcagua",
    "answer2": "Mount Chimborazo",
    "answer3": "Mount Huascarán",
    "answer4": "Mount Fitz Roy"},
    {"label": "Which country is known as the 'Land of the Rising Sun'?",
    "answer1": "China",
    "answer2": "South Korea",
    "answer3": "Japan",
    "answer4": "Thailand"},
    {"label": "What is the capital of Brazil?",
    "answer1": "Rio de Janeiro",
    "answer2": "Sao Paulo",
    "answer3": "Brasília",
    "answer4": "Salvador"},
    {"label": "Which country is located on the Iberian Peninsula in Europe?",
    "answer1": "Greece",
    "answer2": "Italy",
    "answer3": "Spain",
    "answer4": "Switzerland"},
    {"label": "What is the longest river in the United States?",
    "answer1": "Mississippi River",
    "answer2": "Missouri River",
    "answer3": "Colorado River",
    "answer4": "Ohio River"},
    {"label": "Which African country is known for its pyramids and the Nile River?",
    "answer1": "Ethiopia",
    "answer2": "Sudan",
    "answer3": "Egypt",
    "answer4": "Nigeria"},
    {"label": "Which U.S. state is known as the 'Sunshine State'?",
    "answer1": "California",
    "answer2": "Florida",
    "answer3": "Hawaii",
    "answer4": "Texas"},
    {"label": "What is the capital of South Korea?",
    "answer1": "Seoul",
    "answer2": "Busan",
    "answer3": "Incheon",
    "answer4": "Daegu"},
    {"label": "In which continent is the Sahara Desert located?",
    "answer1": "Africa",
    "answer2": "Asia",
    "answer3": "South America",
    "answer4": "Australia"},
    {"label": "What is the largest country by land area in the world?",
    "answer1": "Russia",
    "answer2": "China",
    "answer3": "United States",
    "answer4": "Canada"},
    {"label": "Which ocean is the largest by surface area?",
    "answer1": "Atlantic Ocean",
    "answer2": "Indian Ocean",
    "answer3": "Pacific Ocean",
    "answer4": "Arctic Ocean"},
    {"label": "What is the capital of Argentina?",
    "answer1": "Buenos Aires",
    "answer2": "Santiago",
    "answer3": "Montevideo",
    "answer4": "Asunción"},
    {"label": "Which mountain range spans from Morocco to Tunisia in North Africa?",
    "answer1": "Andes",
    "answer2": "Alps",
    "answer3": "Atlas Mountains",
    "answer4": "Himalayas"},
    {"label": "What is the national flower of Japan?",
    "answer1": "Lotus",
    "answer2": "Rose",
    "answer3": "Cherry Blossom",
    "answer4": "Orchid"},
    {"label": "Which river forms the border between the United States and Mexico?",
    "answer1": "Rio Grande",
    "answer2": "Colorado River",
    "answer3": "Mississippi River",
    "answer4": "Missouri River"},
    {"label": "What is the largest country in South America by population?",
    "answer1": "Argentina",
    "answer2": "Brazil",
    "answer3": "Colombia",
    "answer4": "Venezuela"},
    {"label": "Which European city is known as the 'City of Love'?",
    "answer1": "Paris",
    "answer2": "Rome",
    "answer3": "Vienna",
    "answer4": "Prague"},
    {"label": "Which desert is often called the 'Empty Quarter'?",
    "answer1": "Sahara Desert",
    "answer2": "Kalahari Desert",
    "answer3": "Gobi Desert",
    "answer4": "Rub' al Khali"},
    {"label": "What is the highest peak in North America?",
    "answer1": "Mount St. Elias",
    "answer2": "Mount Logan",
    "answer3": "Mount McKinley (Denali)",
    "answer4": "Mount Rainier"},
    {"label": "What is the capital of South Africa?",
    "answer1": "Cape Town",
    "answer2": "Johannesburg",
    "answer3": "Pretoria",
    "answer4": "Bloemfontein"},
    {"label": "What is the capital of Mexico?",
    "answer1": "Cancún",
    "answer2": "Monterrey",
    "answer3": "Mexico City",
    "answer4": "Guadalajara"},
    {"label": "Which country is known as the 'Pearl of Africa'?",
    "answer1": "Kenya",
    "answer2": "Tanzania",
    "answer3": "Uganda",
    "answer4": "Rwanda"},
    {"label": "What is the longest river in Europe?",
    "answer1": "Danube",
    "answer2": "Rhine",
    "answer3": "Volga",
    "answer4": "Seine"},
    {"label": "Which country is known as the 'Land of the Midnight Sun'?",
    "answer1": "Canada",
    "answer2": "Sweden",
    "answer3": "Norway",
    "answer4": "Russia"},
    {"label": "What is the largest country by land area in South Asia?",
    "answer1": "India",
    "answer2": "Pakistan",
    "answer3": "Bangladesh",
    "answer4": "Afghanistan"},
    {"label": "Which river flows through Budapest, the capital of Hungary?",
    "answer1": "Rhine",
    "answer2": "Danube",
    "answer3": "Elbe",
    "answer4": "Thames"},
    {"label": "Which country is known as the 'Cradle of Civilization'?",
    "answer1": "Greece",
    "answer2": "Egypt",
    "answer3": "Iraq",
    "answer4": "Turkey"},
    {"label": "What is the highest mountain in Oceania?",
    "answer1": "Mount Kilimanjaro",
    "answer2": "Mount Elbrus",
    "answer3": "Mount Cook",
    "answer4": "Puncak Jaya"}
];
const answers = ["Paris","Nile","Japan","Africa","Mount Everest","Turkey","Sahara","Canberra","Iceland","South Africa","Ottawa", "Australia", "Greenland", "Angel Falls", "Brazil", "Volga", "Australia", "Australia", "Gambia", "Canberra", "Yellow River (Huang He)", "Lake Victoria", "Mount Aconcagua", "Japan", "Brasília", "Spain", "Mississippi River", "Egypt", "Florida", "Seoul", "Africa", "Russia", "Pacific Ocean", "Buenos Aires", "Atlas Mountains", "Cherry Blossom", "Rio Grande", "Brazil", "Paris", "Rub' al Khali", "Mount McKinley (Denali)", "Pretoria", "Mexico City", "Uganda", "Volga", "Norway", "Afghanistan", "Danube", "Iraq", "Puncak Jaya"];

if (document.title == "Geography Quiz") {
    // añadir contenido a la página
    let main = document.createElement("main");
    main.id = "mainIndex"
    let section = `
        <section id="sectionIndex">
            <h1 id="titleIndex">Geography Quiz</h1><br><br><br>
            <p id="pIndex">Click the button to start</p>
            <a id="aIndex" href="./Pages/quiz.html"><img src="./assets/test-button.png" alt="button"></a>
            <audio src="./assets/Musica_Lobby.mp3" autoplay loop controls class="hide audio">Audio not suported</audio>    
        </section>
        <article>
            <p class="mute">Mute</p>
        </article>`;
    main.innerHTML = section;
    document.getElementById("home").appendChild(main);
    let button = document.querySelector("a");
    button.addEventListener("mouseover", function() {
        button.classList.add("pointer");
    });
    button.addEventListener("mouseout", function() {
        button.classList.remove("pointer");
    });
    var audio = document.getElementsByClassName("audio");
    document.getElementsByClassName("mute")[0].addEventListener("click", function() {audio[0].muted = true;}); 
}


if (document.title == "Geography Quiz1") {
    //elijo 10 preguntas aleatorias
    let preguntasFinal = [];
    let respuestasFinal = [];
    let preguntasTemp = quiz;
    let respuestasTemp = answers;
    for (let i = 0; i < 10; i++) {
        let num = (Math.floor(Math.random() * preguntasTemp.length-1));
        preguntasFinal.push(preguntasTemp[num]);
        respuestasFinal.push(respuestasTemp[num]);
        preguntasTemp.splice(num, 1);
        respuestasTemp.splice(num, 1);
    }
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
    let section1 = document.createElement("section");
    section1.innerHTML =`
        <section id="nombre">
            <h2 id="titleQuiz">Introduce your name to start:</h2> <br>
            <form id="formName">
                <label for="user" class="par">Name: </label>
                <input type="text" name="user" id="user" placeholder="Introduce your name"><br><br>
                <p id="parrafo" class="par"></p>
                <button type="submit" class="button">Submit</button>
            </form> 
        </section>
        <section>
            <form action="./score.html" method="get" id="formTest">
                <article id="test">
                    <section id="titleContainer">
                    <h2 id="title">${preguntasFinal[index].label}</h2>
                    </section>
                    <article id="radio">
                        <label for="answer1" class="answer0" id="a0">${preguntasFinal[index].answer1}</label>
                        <input type="radio" name="answer" id="answer1">
                        <label for="answer2" class="answer1" id="a1">${preguntasFinal[index].answer2}</label>
                        <input type="radio" name="answer" id="answer2">
                        <label for="answer3" class="answer2" id="a2">${preguntasFinal[index].answer3}</label>
                        <input type="radio" name="answer" id="answer3">
                        <label for="answer4" class="answer3" id="a3">${preguntasFinal[index].answer4}</label>
                        <input type="radio" name="answer" id="answer4">
                    </article>
                </article>
                <article id="end">
                    <h2>How did it go?</h2><br>
                    <p>Submit results</p><br>
                    <button type="submit" class="button">Submit</button>
                </article>
            </form>
            <div id="cronometro">00:00:00</div>
            <audio src="../assets/Musica_Lobby.mp3" class="hide audio" autoplay loop controls>Audio not suported</audio>
        </section>
        <article>
            <p class="mute">Mute</p>
        </article>`;
    main1.appendChild(section1);
    document.getElementById("testPage").appendChild(main1);

    // Mostrar sólo la primera pantalla
    const crono = document.getElementById("cronometro");
    crono.style.display = "none";
    const nombre = document.getElementById("nombre");
    nombre.style.display = "flex";
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
            nombre.style.display = "none";
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
            if (labelAnswers[k].textContent == respuestasFinal[index]) {
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
                        document.getElementById("title").textContent = `${preguntasFinal[index].label}`;
                        document.getElementById("a0").textContent = `${preguntasFinal[index].answer1}`;
                        document.getElementById("a1").textContent = `${preguntasFinal[index].answer2}`;
                        document.getElementById("a2").textContent = `${preguntasFinal[index].answer3}`;
                        document.getElementById("a3").textContent = `${preguntasFinal[index].answer4}`;
                    }
                };
                if (labelAnswers[i].textContent == respuestasFinal[index]) {
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
    var audio = document.getElementsByClassName("audio");
    document.getElementsByClassName("mute")[0].addEventListener("click", function() {audio[0].muted = true;});
};


if (document.title == "Geography Quiz2") {
    //recupero parámetros
    let variableRecuperada = localStorage.getItem("scoreBoard");
    variableRecuperada = JSON.parse(variableRecuperada);
    let scoreArray1 = localStorage.getItem("lastUser");
    scoreArray1 = JSON.parse(scoreArray1);
    let user = scoreArray1[0];
    let score = scoreArray1[1];

    //pinto la página
    let main2 = document.createElement("main");
    let section2 = `
    <section id="sectionScore">
        <h2 class="score">Well done ${user}!!</h2>
        <h2 class="score">Your score is: ${score} / 10</h2>
        <p id="result">Perfect!!</p>
        <img src="../assets/10-.png" alt="image" id="imageFinal">

        <h2>ScoreBoard</h2>
        <table>
            <tr>
            <th>Name</th> 
            <th>Score</th>
            </tr>`;
    for (let i = 0; i < variableRecuperada.length; i++) {
        section2 += `
            <tr>
                <td>${variableRecuperada[i][0]}</td>
                <td>${variableRecuperada[i][1]}</td>
            </tr>`;  
    }
    section2 += `
        </table>
        <audio  src="../assets/Musica_Lobby.mp3" class="hide audio" autoplay loop controls>Audio not suported</audio>
    </section>
    <aside>
        <a href="../index.html" id="aScore">Play again</a>
        <p class="par">New questions!</p>
    </aside>
    <article>
        <p class="mute">Mute</p>
    </article>`;
    main2.innerHTML = section2;
    document.getElementById("solPage").appendChild(main2);

    //cambio texto e imagen según la puntuación
    let result = document.getElementById("result");
    let imgUrl = document.getElementById("imageFinal");
    switch (score) {
        case 7:
        case 8:
        case 9:
            result.textContent = "Great score!!";
            imgUrl.src = "../assets/7-9-.png";
            break;
        case 5:
        case 6:
            result.textContent = "Well done!! You'll do better next Time";
            imgUrl.src = "../assets/5-6-.png";
            break;
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            result.textContent = "Looks like you should study more";
            imgUrl.src = "../assets/0-4-.png";
            break;
        default:
            break;
    };
    var audio = document.getElementsByClassName("audio");
    document.getElementsByClassName("mute")[0].addEventListener("click", function() {audio[0].muted = true;});
}




