import { byYear,  parties, stateAbrv, states } from './data_util';

let sortedByYear = byYear();
let abrv = stateAbrv;
let partyColor = parties;

export function getYear() {
    let year = document.getElementById('years')
    if (!year || year.value === 'none') return
    return year.value;
}

function title() {
    if (getYear()) {
        return `Presidential Election of ${getYear()}`
    } else {
        return 'Select a Year'
    }
}

export function handlePlay() {
    let year;
    const pause = document.getElementsByClassName('fas fa-pause')[0];

    if (getYear() === '1789' || getYear() === 'Select Year' || getYear() === undefined) {
        year = 1789
    } else {
        year = parseInt(getYear());
    }
    
    let go = setInterval(() => {
        if (year === 1789) {
            year += 3
        } else if(year <= 2012) { year += 4}
        updateMap(year);
    }, 2000)

    pause.addEventListener('click', (e) => {
        e.preventDefault();    
        clearInterval(go)
    })
}

function resetMap() {
    for (let i=0; i<states.length; i++) {
        let state = document.getElementsByClassName(abrv[states[i]]);
        state[0].style.color = '#b0b0b0'
    }
}


export function updateMap(getYear) {
    resetMap();
    let year = getYear;
    let val = document.getElementById('years')
    if (year) {
        for (let i=0; i<sortedByYear[year].length; i++) {
            if (val) { val.value = year}
            let state = document.getElementsByClassName(abrv[sortedByYear[year][i].State]);
            state[0].style.color = partyColor[sortedByYear[year][i].Party]
            }
    }
}

export function render() {
    let map = document.createElement('div');
    map.className = 'map';
    map.innerHTML = `
        <ul class="stately"> 
            <li data-state="al" class="al" id='state'>A</li>
            <li data-state="ak" class="ak">B</li>
            <li data-state="ar" class="ar">C</li>						
            <li data-state="az" class="az">D</li>
            <li data-state="ca" class="ca">E</li>
            <li data-state="co" class="co">F</li>
            <li data-state="ct" class="ct">G</li>
            <li data-state="de" class="de">H</li>
            <li data-state="dc" class="dc">I</li>
            <li data-state="fl" class="fl">J</li>
            <li data-state="ga" class="ga">K</li>
            <li data-state="hi" class="hi">L</li>
            <li data-state="id" class="id">M</li>
            <li data-state="il" class="il">N</li>
            <li data-state="in" class="in">O</li>
            <li data-state="ia" class="ia">P</li>
            <li data-state="ks" class="ks">Q</li>
            <li data-state="ky" class="ky">R</li>
            <li data-state="la" class="la">S</li>
            <li data-state="me" class="me">T</li>
            <li data-state="md" class="md">U</li>
            <li data-state="ma" class="ma">V</li>
            <li data-state="mi" class="mi">W</li>
            <li data-state="mn" class="mn">X</li>
            <li data-state="ms" class="ms">Y</li>
            <li data-state="mo" class="mo">Z</li>
            <li data-state="mt" class="mt">a</li>
            <li data-state="ne" class="ne">b</li>
            <li data-state="nv" class="nv">c</li>
            <li data-state="nh" class="nh">d</li>
            <li data-state="nj" class="nj">e</li>
            <li data-state="nm" class="nm">f</li>
            <li data-state="ny" class="ny">g</li>
            <li data-state="nc" class="nc">h</li>
            <li data-state="nd" class="nd">i</li>
            <li data-state="oh" class="oh">j</li>			
            <li data-state="ok" class="ok">k</li>
            <li data-state="or" class="or">l</li>
            <li data-state="pa" class="pa">m</li>
            <li data-state="ri" class="ri">n</li>
            <li data-state="sc" class="sc">o</li>
            <li data-state="sd" class="sd">p</li>
            <li data-state="tn" class="tn">q</li>
            <li data-state="tx" class="tx">r</li>
            <li data-state="ut" class="ut">s</li>
            <li data-state="va" class="va">t</li>
            <li data-state="vt" class="vt">u</li>			
            <li data-state="wa" class="wa">v</li>
            <li data-state="wv" class="wv">w</li>
            <li data-state="wi" class="wi">x</li>
            <li data-state="wy" class="wy">y</li>
        </ul>
        `;   
    return map;
}

// module.exports = Map;