function getInputValue() {

    // on récupère ici la valeur de l'id choice et et on el stock dans une variable choice
    let choice = document.getElementById('choice').value;

    // si choice n'est pas un nombre on se vener
    if (isNaN(choice)) {
        alert('Entrez un nombre avant que je me vener');
    } else {
        // on afecte choice à la variable startingminute
        let startingMinutes = choice;
        // on vide l'input
        this.choice.value = ('');

        //on  démarre le counter
        let time = startingMinutes * 60;

        // constante qui ne s'écrase pas
        const countDownEl = document.getElementById('countdown');


        // toutes les 1000 ms on update le compteur
        setInterval(updateCountdown, 1000);

        function updateCountdown() {
            // on arrondi et on place le reste avec la variable seconds en faisant un modulo
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;

            // afin d'avoirun 0 devant les chifres seuls
            seconds = seconds < 10 ? '0' + seconds : seconds;

            //affichage
            countDownEl.innerHTML = `${minutes} : ${seconds}`;

            //on compte
            if (time > 0) {
                time--;
            } else {
                countDownEl.innerHTML = `IT'S OVER !`
            }
        }
    }
}




