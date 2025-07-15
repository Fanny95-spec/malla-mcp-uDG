const mallaDiv = document.getElementById("malla");
let aprobadas = new Set();

function renderMalla() {
  mallaDiv.innerHTML = "";
  const ciclos = [...new Set(materias.map(m => m.ciclo))];

  ciclos.forEach(ciclo => {
    const divCiclo = document.createElement("div");
    divCiclo.className = "ciclo";
    const h2 = document.createElement("h2");
    h2.textContent = ciclo;
    divCiclo.appendChild(h2);

    materias.filter(m => m.ciclo === ciclo).forEach(materia => {
      const divMateria = document.createElement("div");
      divMateria.className = "materia";
      divMateria.textContent = `${materia.nombre} (${materia.creditos} créditos)`;

      const puedeTomarse = materia.prerequisitos.every(pr => aprobadas.has(pr));
      if (!puedeTomarse) divMateria.classList.add("bloqueada");

      if (aprobadas.has(materia.clave)) divMateria.classList.add("aprobada");

      divMateria.addEventListener("click", () => {
        if (!puedeTomarse) return;
        if (aprobadas.has(materia.clave)) {
          aprobadas.delete(materia.clave);
        } else {
          aprobadas.add(materia.clave);
        }
        renderMalla();
      });

      divCiclo.appendChild(divMateria);
    });

    mallaDiv.appendChild(divCiclo);
  });
}

renderMalla();
