// añadir contenido a la página
let main = document.createElement("main");
let section = `
    <section>
        <h1>Geography Quiz</h1><br><br><br>
        <p>Click the button to start</p>
        <a href="./Pages/quiz.html"><img src="./Assets/test-button.png" alt="button"></a>
        <audio src="./Assets/Musica_Lobby.mp3" autoplay loop controls class="hide">Audio not suported</audio>    
    </section>`;
main.innerHTML = section;
document.getElementById("home").appendChild(main);
let button = document.querySelector("a");
button.addEventListener("mouseover", function() {
    button.classList.add("pointer");
});
button.addEventListener("mouseout", function() {
    button.classList.remove("pointer");
});