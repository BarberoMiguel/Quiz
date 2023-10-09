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
<section>
    <h2>Well done ${user}!!</h2>
    <h2>Your score is: ${score} / 10</h2>
    <p id="result">Perfect!!</p>
    <img src="../Assets/10-.png" alt="image" id="imageFinal">

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
    <audio src="../Assets/Musica_Lobby.mp3" class="hide" autoplay loop controls>Audio not suported</audio>
</section>`;
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
        imgUrl.src = "../Assets/7-9-.png";
        break;
    case 5:
    case 6:
        result.textContent = "Well done!! You'll do better next Time";
        imgUrl.src = "../Assets/5-6-.png";
        break;
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        result.textContent = "Looks like you should study more";
        imgUrl.src = "../Assets/0-4-.png";
        break;
    default:
        break;
}