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
var index = 0;
var scoreArray = [];

if (document.title == "Geography Quiz") {
    let main = document.createElement("main");
    let section = `
        <section>
            <h1>Geography Quiz</h1><br><br><br>
            <p>Click the button to start</p>
            <a href="./Pages/quiz.html"><img src="./Assets/test-button.png" alt="button"></a>    
        </section>`;
    main.innerHTML = section;
    document.getElementById("home").appendChild(main); 
}

if (document.title == "Geography Quiz1") {
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
                    <h2 id="title">${quiz[index].label}</h2>
                    <article id="radio">
                        <label for="answer1" class="answer1" id="a1">${quiz[index].answer1}</label>
                        <input type="radio" name="answer1" id="answer1">
                        <label for="answer2" class="answer2" id="a2">${quiz[index].answer2}</label>
                        <input type="radio" name="answer2" id="answer2">
                        <label for="answer3" class="answer3" id="a3">${quiz[index].answer3}</label>
                        <input type="radio" name="answer3" id="answer3">
                        <label for="answer4" class="answer4" id="a4">${quiz[index].answer4}</label>
                        <input type="radio" name="answer4" id="answer4">
                    </article>
                </article>
                <article id="end">
                    <h2>Submit results</h2><br><br>
                    <button type="submit">Submit</button>
                </article>
            </form>
        </section>`;
    main1.innerHTML = section1;
    document.getElementById("testPage").appendChild(main1);

    const name = document.getElementById("name");
    name.style.display = "flex";
    const test = document.getElementById("test");
    test.style.display = "none";
    const end = document.getElementById("end");
    end.style.display = "none";

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
            name.style.display = "none";
            test.style.display = "flex";
        };
    });

    let inputAnswers = document.querySelectorAll("#radio input");
    let labelAnswers = document.querySelectorAll("#radio label");
    console.log(inputAnswers);

    let variableRecuperada = localStorage.getItem("scoreBoard");
    variableRecuperada = JSON.parse(variableRecuperada);
    console.log(variableRecuperada);

    document.getElementById("a1").classList.toggle("answer1");
    document.getElementById("a1").classList.toggle("red");

    document.getElementById("a1").classList.toggle("answer1");
    document.getElementById("a1").classList.toggle("red");

    let bubbleSort = (inputArr) => {
        let len = inputArr.length;
        let swaped;
        do {
            swaped = false;
            for (let i = 0; i < len; i++) {
                if (inputArr[i] > inputArr[i + 1]) {
                    let tmp = inputArr[i];
                    inputArr[i] = inputArr[i + 1];
                    inputArr[i + 1] = tmp;
                    swaped = true;
                }
            }
        } while (swaped);
        return inputArr;
    };
}


