import { byYear } from './data_util';

export function constructor(year = "") {
    this.year = year;
}
export function getYear() {
    let banana = byYear();
    debugger
    if (document.getElementById('year')) {
        this.year = document.getElementById('year').value;
    }
}
export function updateMap() {
    
}

export function render() {
    let map = document.createElement('div');
    map.className = 'map';
    map.innerHTML = `
        <button>Description</button>
                <select id='years' onChange=${this.getYear()}>
                    <option value="1789">1789</option>
                    <option value="1792">1792</option>
                    <option value="1796">1796</option>
                    <option value="1800">1800</option>
                    <option value="1804">1804</option>
                    <option value="1808">1808</option>
                    <option value="1812">1812</option>
                    <option value="1816">1816</option>
                    <option value="1820">1820</option>
                    <option value="1824">1824</option>
                    <option value="1828">1828</option>
                    <option value="1832">1832</option>
                    <option value="1836">1836</option>
                    <option value="1840">1840</option>
                    <option value="1844">1844</option>
                    <option value="1848">1848</option>
                    <option value="1852">1852</option>
                    <option value="1856">1856</option>
                    <option value="1860">1864</option>
                    <option value="1868">1868</option>
                    <option value="1872">1872</option>
                    <option value="1876">1876</option>
                    <option value="1880">1880</option>
                    <option value="1884">1884</option>
                    <option value="1888">1888</option>
                    <option value="1892">1892</option>
                    <option value="1896">1896</option>
                    <option value="1900">1900</option>
                    <option value="1904">1904</option>
                    <option value="1908">1908</option>
                    <option value="1912">1912</option>
                    <option value="1916">1916</option>
                    <option value="1920">1920</option>
                    <option value="1924">1924</option>
                    <option value="1928">1928</option>
                    <option value="1932">1932</option>
                    <option value="1936">1936</option>
                    <option value="1940">1940</option>
                    <option value="1944">1944</option>
                    <option value="1948">1948</option>
                    <option value="1952">1952</option>
                    <option value="1956">1956</option>
                    <option value="1960">1960</option>
                    <option value="1964">1964</option>
                    <option value="1968">1968</option>
                    <option value="1972">1972</option>
                    <option value="1976">1976</option>
                    <option value="1980">1980</option>
                    <option value="1984">1984</option>
                    <option value="1988">1988</option>
                    <option value="1992">1992</option>
                    <option value="1996">1996</option>
                    <option value="2000">2000</option>
                    <option value="2004">2004</option>
                    <option value="2008">2008</option>
                    <option value="2012">2012</option>
                    <option value="2016">2016</option>
                    <option value="2020">2020</option>
                </select>
        <ul class="stately"> 
            <li data-state="al" class="al">A</li>
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