// --- Data Setup ---

// Parallel Arrays for Element Symbols and Full Names (1 to 118)
const elementSymbols = [
    "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca",
    "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr",
    "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd",
    "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg",
    "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm",
    "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
];

const elementNames = [
    "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon",
    "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium",
    "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc",
    "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium",
    "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin",
    "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium",
    "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium",
    "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury",
    "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium",
    "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium",
    "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium",
    "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson"
];

// Standard Aufbau Filling Order (Madelung Rule)
const orbitals = [
    { id: '1s', n: 1, l: 0, max: 2 },
    { id: '2s', n: 2, l: 0, max: 2 },
    { id: '2p', n: 2, l: 1, max: 6 },
    { id: '3s', n: 3, l: 0, max: 2 },
    { id: '3p', n: 3, l: 1, max: 6 },
    { id: '4s', n: 4, l: 0, max: 2 },
    { id: '3d', n: 3, l: 2, max: 10 },
    { id: '4p', n: 4, l: 1, max: 6 },
    { id: '5s', n: 5, l: 0, max: 2 },
    { id: '4d', n: 4, l: 2, max: 10 },
    { id: '5p', n: 5, l: 1, max: 6 },
    { id: '6s', n: 6, l: 0, max: 2 },
    { id: '4f', n: 4, l: 3, max: 14 },
    { id: '5d', n: 5, l: 2, max: 10 },
    { id: '6p', n: 6, l: 1, max: 6 },
    { id: '7s', n: 7, l: 0, max: 2 },
    { id: '5f', n: 5, l: 3, max: 14 },
    { id: '6d', n: 6, l: 2, max: 10 },
    { id: '7p', n: 7, l: 1, max: 6 }
];

// --- Helper Functions ---
function getElementCategoryAndDescription(atomicNumber, name) {
    if (atomicNumber === 0) return "Move the slider or press play to begin adding electrons and discovering elements.";

    let category = "Unknown Element";
    let block = "";

    if ([3, 11, 19, 37, 55, 87].includes(atomicNumber)) { category = "an Alkali Metal"; block = "s-block"; }
    else if ([4, 12, 20, 38, 56, 88].includes(atomicNumber)) { category = "an Alkaline Earth Metal"; block = "s-block"; }
    else if ([2, 10, 18, 36, 54, 86, 118].includes(atomicNumber)) { category = "a Noble Gas"; block = "p-block"; }
    else if ([9, 17, 35, 53, 85, 117].includes(atomicNumber)) { category = "a Halogen"; block = "p-block"; }
    else if (atomicNumber >= 57 && atomicNumber <= 71) { category = "a Lanthanide"; block = "f-block"; }
    else if (atomicNumber >= 89 && atomicNumber <= 103) { category = "an Actinide"; block = "f-block"; }
    else if ((atomicNumber >= 21 && atomicNumber <= 30) || (atomicNumber >= 39 && atomicNumber <= 48) ||
        (atomicNumber >= 72 && atomicNumber <= 80) || (atomicNumber >= 104 && atomicNumber <= 112)) {
        category = "a Transition Metal"; block = "d-block";
    }
    else if ([13, 31, 49, 50, 81, 82, 83, 84, 113, 114, 115, 116].includes(atomicNumber)) { category = "a Post-transition Metal"; block = "p-block"; }
    else if ([5, 14, 32, 33, 51, 52].includes(atomicNumber)) { category = "a Metalloid"; block = "p-block"; }
    else if ([1, 6, 7, 8, 15, 16].includes(atomicNumber)) { category = "a Reactive Nonmetal"; block = atomicNumber === 1 ? "s-block" : "p-block"; }

    return `${name} is classified as ${category} belonging to the ${block}. It contains ${atomicNumber} protons and ${atomicNumber} electrons, following standard Aufbau sequencing.`;
}

// --- DOM Elements & Global State ---
const diagram = document.getElementById('diagram');
const slider = document.getElementById('electron-slider');
const configText = document.getElementById('config-text');
const elSymbol = document.getElementById('el-symbol');
const elName = document.getElementById('el-name');
const numInput = document.getElementById('electron-input');
const elAtomic = document.getElementById('el-atomic');
const elDesc = document.getElementById('el-desc');
const btnPlay = document.getElementById('btn-play');
const btnReset = document.getElementById('btn-reset');
const themeToggle = document.getElementById('theme-toggle');
const searchInput = document.getElementById('element-search');
const searchDropdown = document.getElementById('search-dropdown');
const realismToggle = document.getElementById('realism-toggle');


let isRealismEnabled = false;
let autoplayInterval;
let currentShellCounts = [0, 0, 0, 0, 0, 0, 0];
let currentSymbol = "--";

// --- Initialize WinUI Theme ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setTheme(isDark);
}

function setTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeToggle.setAttribute('aria-checked', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setTimeout(updateCanvasColors, 50);
}

themeToggle.addEventListener('click', () => {
    const isCurrentlyDark = themeToggle.getAttribute('aria-checked') === 'true';
    setTheme(!isCurrentlyDark);
});

themeToggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const isCurrentlyDark = themeToggle.getAttribute('aria-checked') === 'true';
        setTheme(!isCurrentlyDark);
    }
});

// --- Generate Diagram Grid ---
function buildGrid() {
    const cols = ['s', 'p', 'd', 'f'];
    cols.forEach((col, i) => {
        let label = document.createElement('div');
        label.className = 'grid-header';
        label.style.gridRow = 1;
        label.style.gridColumn = i + 2;
        label.innerText = col;
        diagram.appendChild(label);
    });

    for (let n = 1; n <= 7; n++) {
        let label = document.createElement('div');
        label.className = 'grid-header row-header';
        label.style.gridRow = n + 1;
        label.style.gridColumn = 1;
        label.innerText = `n=${n}`;
        diagram.appendChild(label);
    }

    orbitals.forEach((orb, index) => {
        const div = document.createElement('div');
        div.className = 'orbital empty';
        div.id = `orb-${orb.id}`;
        div.style.gridRow = orb.n + 1;
        div.style.gridColumn = orb.l + 2;

        div.innerHTML = `
            <div class="order-badge">${index + 1}</div>
            <div class="orb-name">${orb.id}</div>
            <div class="orb-count" id="count-${orb.id}">0/${orb.max}</div>
            <div class="progress-container"><div class="progress-bar" id="prog-${orb.id}"></div></div>
        `;
        diagram.appendChild(div);
    });
}

function updateConfig(source = 'system') {
    let count = parseInt(slider.value);
    let remaining = count;
    let configHTML = "";

    if (source !== 'manual_input') numInput.value = count;
    if (source !== 'search') searchInput.value = '';

    const percent = (count / slider.max) * 100;
    slider.style.setProperty('--slider-fill', `${percent}%`);

    if (count === 0) {
        currentSymbol = "--";
        elSymbol.innerText = "--";
        elName.innerText = "None Selected";
        elAtomic.innerText = `Atomic Number: 0`;
        elDesc.innerText = getElementCategoryAndDescription(0, "");
        configText.innerHTML = '<span class="placeholder-text">Waiting for electrons...</span>';
    } else {
        const symbol = elementSymbols[count - 1];
        const name = elementNames[count - 1];
        currentSymbol = symbol;
        elSymbol.innerText = symbol;
        elName.innerText = name;
        elAtomic.innerText = `Atomic Number: ${count}`;
        elDesc.innerText = getElementCategoryAndDescription(count, name);
    }

    currentShellCounts = [0, 0, 0, 0, 0, 0, 0];

    orbitals.forEach((orb) => {
        const orbDiv = document.getElementById(`orb-${orb.id}`);
        const progBar = document.getElementById(`prog-${orb.id}`);
        const countText = document.getElementById(`count-${orb.id}`);

        if (remaining > 0) {
            let adding = Math.min(remaining, orb.max);
            remaining -= adding;
            currentShellCounts[orb.n - 1] += adding;

            countText.innerText = `${adding}/${orb.max}`;
            progBar.style.width = `${(adding / orb.max) * 100}%`;

            if (adding === orb.max) {
                orbDiv.className = 'orbital filled';
                configHTML += `<span class="config-tag">${orb.id}<sup>${adding}</sup></span>`;
            } else {
                orbDiv.className = 'orbital filling';
                configHTML += `<span class="config-tag active">${orb.id}<sup>${adding}</sup></span>`;
            }
        } else {
            countText.innerText = `0/${orb.max}`;
            progBar.style.width = `0%`;
            orbDiv.className = 'orbital empty';
        }
    });

    if (count > 0) configText.innerHTML = configHTML;
}


realismToggle.addEventListener('change', (e) => {
    isRealismEnabled = e.target.checked;
});

const canvas = document.getElementById('atom-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;
let logicalWidth = 300;
let logicalHeight = 300;

let cachedColors = {
    accent: '#005FB8',
    text: '#000000',
    ring: 'rgba(0,0,0,0.2)',
    btnFg: '#FFFFFF'
};

function updateCanvasColors() {
    const style = getComputedStyle(document.body);
    cachedColors.accent = style.getPropertyValue('--accent-default').trim() || '#005FB8';
    cachedColors.text = style.getPropertyValue('--text-primary').trim() || '#000';
    cachedColors.ring = style.getPropertyValue('--text-tertiary').trim() || 'rgba(0,0,0,0.2)';
    cachedColors.btnFg = style.getPropertyValue('--primary-btn-fg').trim() || '#FFF';
}

function resizeCanvas() {
    const container = document.getElementById('canvas-container');
    if (!container || !canvas || !ctx) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    logicalWidth = rect.width;
    logicalHeight = rect.height;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
}

function drawAtom(time) {
    if (!ctx) return;

    ctx.clearRect(0, 0, logicalWidth, logicalHeight);
    const cx = logicalWidth / 2;
    const cy = logicalHeight / 2;

    const currentZ = parseInt(slider.value) || 0;
    const nucleusRadius = 18;
    const maxCanvasRadius = Math.min(cx, cy) - 20;

    // --- NEW RADIUS LOGIC ---
    let shellRadii = [];

    if (isRealismEnabled) {
        // REALISM MODE: Progressive gaps + Compression
        const compression = 1.0 - (currentZ / 118) * 0.1;
        const maxAvailableR = maxCanvasRadius * compression;
        const safeStartR = nucleusRadius + 16;
        const availableSpace = Math.max(maxAvailableR - safeStartR, 50);
        const cumulativeProportions = [0.20, 0.40, 0.54, 0.74, 0.88, 0.98, 1.05];

        for (let n = 1; n <= 7; n++) {
            shellRadii.push(safeStartR + (availableSpace * cumulativeProportions[n - 1]));
        }
    } else {
        // CLEAN MODE: Uniform fixed gaps
        const ringSpacing = maxCanvasRadius / 7;
        for (let n = 1; n <= 7; n++) {
            shellRadii.push(ringSpacing * n);
        }
    }

    // Draw Rings
    ctx.lineWidth = 1;
    for (let n = 1; n <= 7; n++) {
        if (currentShellCounts[n - 1] > 0) {
            ctx.beginPath();
            ctx.arc(cx, cy, shellRadii[n - 1], 0, 2 * Math.PI); // Use the calculated radii
            ctx.strokeStyle = cachedColors.ring;
            ctx.stroke();
        }
    }

    // Draw Electrons
    for (let n = 1; n <= 7; n++) {
        const count = currentShellCounts[n - 1];
        if (count > 0) {
            const r = shellRadii[n - 1]; // Use the calculated radii
            const speed = 0.0008 / n;
            for (let i = 0; i < count; i++) {
                const angle = (time * speed) + ((Math.PI * 2) / count) * i;
                const x = cx + Math.cos(angle) * r;
                const y = cy + Math.sin(angle) * r;

                ctx.beginPath();
                ctx.arc(x, y, Math.max(2.5, Math.min(4, logicalWidth / 100)), 0, 2 * Math.PI);
                ctx.fillStyle = cachedColors.accent;
                ctx.fill();
                ctx.lineWidth = 1;
                ctx.strokeStyle = cachedColors.btnFg;
                ctx.stroke();
            }
        }
    }

    // Draw Nucleus
    if (currentSymbol !== "--") {
        ctx.beginPath();
        ctx.arc(cx, cy, nucleusRadius, 0, 2 * Math.PI);
        ctx.fillStyle = cachedColors.accent;
        ctx.fill();

        ctx.fillStyle = cachedColors.btnFg;
        ctx.font = 'bold 16px "Segoe UI Variable Text", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(currentSymbol, cx, cy + 1);
    } else {
        ctx.beginPath();
        ctx.arc(cx, cy, nucleusRadius, 0, 2 * Math.PI);
        ctx.fillStyle = cachedColors.ring;
        ctx.fill();
    }

    requestAnimationFrame(drawAtom);
}

// --- Interactivity ---
function pauseAutoPlay() {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
    btnPlay.innerText = "Auto Play";
}

slider.addEventListener('input', () => {
    if (autoplayInterval) pauseAutoPlay();
    updateConfig('slider');
});

numInput.addEventListener('input', (e) => {
    if (autoplayInterval) pauseAutoPlay();

    let rawValue = e.target.value;
    if (rawValue === '') {
        slider.value = 0;
        updateConfig('manual_input');
        return;
    }

    let val = parseInt(rawValue, 10);
    if (isNaN(val)) return;

    let clampedVal = Math.min(Math.max(val, 0), 118);
    slider.value = clampedVal;

    if (val !== clampedVal) {
        numInput.value = clampedVal;
    }
    updateConfig('manual_input');
});

numInput.addEventListener('blur', () => {
    if (numInput.value === '') {
        numInput.value = slider.value;
    }
});

btnReset.addEventListener('click', () => {
    if (autoplayInterval) pauseAutoPlay();
    slider.value = 0;
    updateConfig('button');
});

btnPlay.addEventListener('click', () => {
    if (autoplayInterval) {
        pauseAutoPlay();
    } else {
        if (parseInt(slider.value) >= 118) slider.value = 0;
        btnPlay.innerText = "Pause";

        autoplayInterval = setInterval(() => {
            let current = parseInt(slider.value);
            if (current < 118) {
                slider.value = current + 1;
                updateConfig('autoplay');
            } else {
                pauseAutoPlay();
            }
        }, 200);
    }
});

// --- Custom Search Logic ---
function renderDropdown(query) {
    searchDropdown.innerHTML = '';

    if (!query) {
        searchDropdown.classList.add('hidden');
        return;
    }

    const lowerQuery = query.toLowerCase();
    const matches = [];

    for (let i = 0; i < elementNames.length; i++) {
        if (elementNames[i].toLowerCase().includes(lowerQuery) ||
            elementSymbols[i].toLowerCase().includes(lowerQuery)) {
            matches.push({ index: i, name: elementNames[i], symbol: elementSymbols[i] });
        }
    }

    if (matches.length === 0) {
        const noResult = document.createElement('li');
        noResult.className = 'dropdown-item';
        noResult.style.pointerEvents = 'none';
        noResult.innerHTML = `<span class="dropdown-name" style="color: var(--text-tertiary)">No results found</span>`;
        searchDropdown.appendChild(noResult);
    } else {
        matches.forEach(match => {
            const li = document.createElement('li');
            li.className = 'dropdown-item';
            li.innerHTML = `
                <span class="dropdown-symbol">${match.symbol}</span>
                <span class="dropdown-name">${match.name}</span>
            `;

            li.addEventListener('click', () => {
                selectElementFromSearch(match.index);
            });

            searchDropdown.appendChild(li);
        });
    }

    searchDropdown.classList.remove('hidden');
}

function selectElementFromSearch(index) {
    if (autoplayInterval) pauseAutoPlay();
    slider.value = index + 1;
    searchInput.value = elementNames[index];
    searchDropdown.classList.add('hidden');
    updateConfig('search');
}

searchInput.addEventListener('input', (e) => {
    renderDropdown(e.target.value.trim());
});

document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
        searchDropdown.classList.add('hidden');
    }
});

searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const visibleItems = searchDropdown.querySelectorAll('.dropdown-item:not([style*="pointer-events: none"])');

        if (!searchDropdown.classList.contains('hidden') && visibleItems.length > 0) {
            const firstMatchSymbol = visibleItems[0].querySelector('.dropdown-symbol').innerText;
            const index = elementSymbols.indexOf(firstMatchSymbol);

            if (index !== -1) {
                selectElementFromSearch(index);
                searchInput.blur();
            }
        }
    }
});

// --- Startup ---
initTheme();
buildGrid();
updateCanvasColors();
updateConfig('startup');

// Setup Canvas Observers
const canvasContainer = document.getElementById('canvas-container');
if (canvasContainer) {
    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(canvasContainer);
    requestAnimationFrame(drawAtom);
}