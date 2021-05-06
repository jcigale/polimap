let Router = require("./router");
let Map = require("./map");

let routes = {
    map: Map,
}



document.addEventListener('DOMContentLoaded', () => {
    let main = document.querySelector('.main');
    router = new Router(main, routes);
    router.start();
    window.location.hash = "#map"
    const yearSelect = document.getElementById('years');

    yearSelect.addEventListener('change', (e) => {
        Map.updateMap(Map.getYear())
    });

    const infoButton = document.getElementsByClassName('info')[0];
    infoButton.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementsByClassName('description')[0].classList.add('is-open');
        document.getElementsByClassName('screen')[0].classList.add('is-open');
    })

    const close = document.getElementsByClassName('modal-close')[0];
    if (close) {
        close.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementsByClassName('description is-open')[0].classList.remove('is-open');
            document.getElementsByClassName('screen is-open')[0].classList.remove('is-open');
        })
    }

    const play = document.getElementsByClassName('fas fa-play')[0];

    play.addEventListener('click', (e) => {
        e.preventDefault();
        Map.handlePlay(); 
    })
})
