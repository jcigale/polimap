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
})