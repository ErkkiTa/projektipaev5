
const answerInput = document.querySelector("#answer");


answerInput.addEventListener("keydown", keyHandler);

function keyHandler(event) {
    event = event || window.event;
    if(event.ctrlKey && event.keyCode==67 ) {
        // CTRL + C on vajutatud, popib roheline valgus ette korra
    }
    else {
        // kui ei ole vajutatud seda siis ta viskab punase valguse korra ette
    }
}



 
