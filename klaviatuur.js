function keyHandler(event) {
    event = event || window.event;
    if(event.ctrlKey && event.altKey && event.keyCode==67 ) {
        // CTRL + ALT + C on vajutatud, popib roheline valgus ette korra
    }
    else {
        // kui ei ole vajutatud seda siis ta viskab punase valguse korra ette
    }
}