# ⚛️ Aufbau Principle Visualizer

An interactive, web-based educational tool that visualizes the electron configuration of all 118 elements using the **Aufbau Principle** (Madelung rule). Designed with a sleek, responsive **Windows 11 (WinUI 3) Fluent Design** system, it features a dynamic orbital grid and a real-time animated Bohr model of the atom.

## ✨ Features

- **Interactive Orbital Diagram:** Watch as electrons dynamically fill the `s`, `p`, `d`, and `f` orbitals in the standard sequence as you adjust the atomic number.
- **Animated Bohr Model:** A beautifully animated HTML5 Canvas visualizer that calculates and renders the exact number of electrons orbiting the nucleus in their respective shells ($n=1$ to $7$).
- **Fluent UI / WinUI 3 Design:** A modern, premium interface mimicking Windows 11, complete with frosted glass effects (backdrop-filter), custom sliders, and a fully functional **Dark/Light Mode** toggle.
- **Element Search & Details:** Search for any element by its symbol (e.g., `Au`) or name (e.g., `Gold`). The app displays its categorization (e.g., Alkali Metal, Noble Gas) and electron configuration sequence.
- **Auto-Play Simulation:** Sit back and watch the app automatically build elements from Hydrogen to Oganesson.
- **Zero Dependencies:** Built entirely with vanilla HTML, CSS, and JavaScript. No build steps, bundlers, or external libraries required.

## 🚀 Live Demo

*(Optional: Add a link to your live hosted project here, e.g., GitHub Pages or Vercel)*  
[**Try the Visualizer Here**]([https://your-username.github.io/aufbau-visualizer](https://darkforcefreefire.github.io/Aufbau-Visualizer/))

## 📸 Preview

<img width="1510" height="856" alt="image" src="https://github.com/user-attachments/assets/abb608fb-4363-484d-919c-c46727f21702" />

## 📁 Project Structure

- `index.html` - The semantic HTML structure defining the 3-column layout.
- `styles.css` - The Fluent UI design system CSS, custom inputs, animations, and responsive media queries.
- `script.js` - The application logic, including the element database, Madelung rule sequencing, Canvas API drawing loop, and UI interactivity.

## 🧠 How it Works

1. **The Grid:** The visualization follows the $n + l$ rule. Orbitals are filled in order of increasing energy: `1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p...` up to `7p`.
2. **The Canvas:** As electrons fill the grid, the app tallies the total electrons per principal quantum number ($n$). The `requestAnimationFrame` loop then draws these electrons rotating at staggered speeds around the nucleus.
3. **Note on Exceptions:** To maintain a clean educational progression of the standard Aufbau sequence, real-world orbital anomalies (such as Copper and Chromium's $4s \rightarrow 3d$ electron promotions) are intentionally bypassed.



## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---
*Designed & Developed by Walker*
