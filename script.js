// Hämtar element från HTML
const cards = document.querySelectorAll(".card"); // Alla kort
const timeText = document.querySelector(".time b"); // Element där tiden visas
const timeSelect = document.getElementById("timeSelect"); // Dropdown för att ändra tiden

// Variablerna
let timeLeft = 30; // Starttiden i sekunder
let timer = null; // Här sparas timern som gör att tiden kan stoppas/startas

// Funktion som flippar kortet när man klickar
cards.forEach(card => {
  card.addEventListener("click", () => {
    const front = card.querySelector(".front-view"); // Framsidan på kortet             
    const back = card.querySelector(".back-view"); // Baksidan av kortet 

// Växlar synlighet 
    if (front.style.display === "none") {
      front.style.display = "flex"; // Visa framsidan
      back.style.display = "none"; // Dölj baksidan 
    } else {
      front.style.display = "none"; // Dölj framsidan
      back.style.display = "flex"; // Visa baksidan 
    }
  });
});

// Timerfunktion
function startTimer() {
  clearInterval(timer); // Stoppar timern om den redan körs 

  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer); // Stoppar timern
      alert("Tiden är slut!"); // Meddelande när tiden är slut 
      return;
    }

    timeText.innerText = timeLeft; // Uppdaterar tiden i HTML
    timeLeft--; // Minskar tiden med 1 sekund 
  }, 1000);
}

// Ändra tid via dropdown
timeSelect.addEventListener("change", () => {
  timeLeft = parseInt(timeSelect.value); // Hämtar den valda tiden från dropdown 
  timeText.innerText = timeLeft; // Uppdaterar tiden i HTML
  startTimer(); // Startar om timern 
});

// Startar timern när sidan laddas
startTimer();
