const ciclos = [
  {
    nombre: "Primer Ciclo",
    materias: [
      { nombre: "Embriología", creditos: 7, prerequisito: "Ninguno" },
      { nombre: "Histología", creditos: 10, prerequisito: "Ninguno" },
      { nombre: "Anatomía Humana y Disecciones", creditos: 17, prerequisito: "Ninguno" },
      { nombre: "Salud Pública I", creditos: 7, prerequisito: "Ninguno" },
      { nombre: "Comunicación y Tecnologías de la Información", creditos: 3, prerequisito: "Ninguno" },
      { nombre: "Bioquímica Médica", creditos: 18, prerequisito: "Ninguno" },
      { nombre: "Metodología de la Investigación", creditos: 7, prerequisito: "Ninguno" }
    ]
  },
  {
    nombre: "Segundo Ciclo",
    materias: [
      { nombre: "Sexualidad Humana", creditos: 5, prerequisito: "Ninguno" },
      { nombre: "Bioética y Universidad", creditos: 7, prerequisito: "Ninguno" },
      { nombre: "Biología Molecular Básica", creditos: 7, prerequisito: "Bioquímica Médica" },
      { nombre: "Promoción de Estilos de Vida Saludable", creditos: 3, prerequisito: "Ninguno" },
      { nombre: "Fisiología Médica", creditos: 20, prerequisito: "Bioquímica Médica" },
      { nombre: "Psicología", creditos: 7, prerequisito: "Ninguno" },
      { nombre: "Salud Pública II", creditos: 6, prerequisito: "Salud Pública I" },
      { nombre: "Sociedad y Salud", creditos: 4, prerequisito: "Ninguno" },
      { nombre: "Bioestadística Inferencial", creditos: 6, prerequisito: "Metodología de la Investigación" }
    ]
  },
  {
    nombre: "Tercer Ciclo",
    materias: [
      { nombre: "Genética Médica", creditos: 10, prerequisito: "Biología Molecular Básica" },
      { nombre: "Fisiopatología Médica", creditos: 15, prerequisito: "Fisiología Médica" },
      { nombre: "Inmunología Médica", creditos: 7, prerequisito: "Biología Molecular Básica" },
      { nombre: "Microbiología I", creditos: 11, prerequisito: "Bioquímica Médica" },
      { nombre: "Patología", creditos: 15, prerequisito: "Histología" },
      { nombre: "Epidemiología", creditos: 6, prerequisito: "Ninguno" },
      { nombre: "Salud Ambiental", creditos: 3, prerequisito: "Ninguno" }
    ]
  },
  {
    nombre: "Cuarto Ciclo",
    materias: [
      { nombre: "Propedéutica y Semiología Médica", creditos: 20, prerequisito: "Fisiopatología Médica" },
      { nombre: "Farmacología Médica", creditos: 9, prerequisito: "Fisiología Médica" },
      { nombre: "Salud en la Comunidad I", creditos: 2, prerequisito: "Sociedad y Salud" },
      { nombre: "Salud Laboral", creditos: 3, prerequisito: "Salud Pública I" },
      { nombre: "Economía en Salud", creditos: 3, prerequisito: "Salud Pública II" },
      { nombre: "Microbiología II", creditos: 7, prerequisito: "Microbiología I" },
      { nombre: "Nutrición y Sociedad", creditos: 3, prerequisito: "Sociedad y Salud" },
      { nombre: "Legislación y Salud", creditos: 3, prerequisito: "Ninguno" },
      { nombre: "Salud del Niño y del Adolescente", creditos: 5, prerequisito: "Fisiología Médica" },
      { nombre: "Medicina Basada en Evidencias", creditos: 3, prerequisito: "Metodología de la Investigación" }
    ]
  },
    {
    nombre: "Quinto Ciclo",
    materias: [
      { nombre: "Clínica Médica", creditos: 18, prerequisito: "Propedéutica y Semiología Médica" },
      { nombre: "Clínica Quirúrgica", creditos: 18, prerequisito: "Propedéutica y Semiología Médica" },
      { nombre: "Clínica de Urología", creditos: 3, prerequisito: "Propedéutica y Semiología Médica" },
      { nombre: "Clínica de Dermatología", creditos: 3, prerequisito: "Propedéutica y Semiología Médica" },
      { nombre: "Clínica de Otorrinolaringología", creditos: 3, prerequisito: "Propedéutica y Semiología Médica" },
      { nombre: "Clínica de Oftalmología", creditos: 3, prerequisito: "Propedéutica y Semiología Médica" },
      { nombre: "Seminario de Integración Básico Clínico", creditos: 2, prerequisito: "Propedéutica y Semiología Médica" },
      { nombre: "Clínica de Gerontogeriatría", creditos: 3, prerequisito: "Propedéutica y Semiología Médica" },
      { nombre: "Clínica de Psiquiatría", creditos: 7, prerequisito: "Propedéutica y Semiología Médica" },
      { nombre: "Investigación Clínica", creditos: 3, prerequisito: "Metodología de la Investigación" },
      { nombre: "Clínica de Nefrología y Riesgo Cardiovascular", creditos: 6, prerequisito: "Propedéutica y Semiología Médica" },
      { nombre: "Salud en la Comunidad II", creditos: 2, prerequisito: "Salud en la Comunidad I" }
    ]
  },
  {
    nombre: "Sexto Ciclo",
    materias: [
      { nombre: "Técnicas Quirúrgicas", creditos: 6, prerequisito: "Clínica Quirúrgica" },
      { nombre: "Clínica de Reumatología y Rehabilitación", creditos: 3, prerequisito: "Clínica Médica" },
      { nombre: "Clínica de Gastroenterología", creditos: 3, prerequisito: "Clínica Médica" },
      { nombre: "Clínica de Neurología", creditos: 3, prerequisito: "Clínica Médica" },
      { nombre: "Clínica de Endocrinología y Enfermedades Metabólicas", creditos: 3, prerequisito: "Clínica Médica" },
      { nombre: "Clínica de Tórax y Cardiovascular", creditos: 3, prerequisito: "Clínica Quirúrgica" },
      { nombre: "Clínica de Cardiología", creditos: 7, prerequisito: "Clínica Médica" },
      { nombre: "Seminario de Integración Médico Quirúrgica", creditos: 2, prerequisito: "Clínica Médica" },
      { nombre: "Clínica de Coloproctología", creditos: 3, prerequisito: "Propedéutica y Semiología Médica" },
      { nombre: "Clínica de Neumología", creditos: 3, prerequisito: "Propedéutica y Semiología Médica" },
      { nombre: "Clínica de Infectología", creditos: 3, prerequisito: "Propedéutica y Semiología Médica" },
      { nombre: "Terapéutica Farmacológica", creditos: 11, prerequisito: "Farmacología Médica" },
      { nombre: "Clínica de Ortopedia y Traumatología", creditos: 3, prerequisito: "Clínica Quirúrgica" },
      { nombre: "Salud en la Comunidad III", creditos: 2, prerequisito: "Salud en la Comunidad II" }
    ]
  },
  {
    nombre: "Séptimo Ciclo",
    materias: [
      { nombre: "Biología Molecular en la Clínica", creditos: 3, prerequisito: "Biología Molecular Básica" },
      { nombre: "Pediatría del Recién Nacido y Lactante", creditos: 10, prerequisito: "Salud del Niño y del Adolescente" },
      { nombre: "Pediatría del Preescolar y Escolar", creditos: 10, prerequisito: "Salud del Niño y del Adolescente" },
      { nombre: "Obstetricia", creditos: 10, prerequisito: "Propedéutica y Semiología Médica" },
      { nombre: "Ginecología", creditos: 10, prerequisito: "Propedéutica y Semiología Médica" },
      { nombre: "Medicina Sexual", creditos: 3, prerequisito: "Propedéutica y Semiología Médica" },
      { nombre: "Seminario de Integración Materno Infantil", creditos: 2, prerequisito: "Salud del Niño y del Adolescente" },
      { nombre: "Salud en la Comunidad IV", creditos: 2, prerequisito: "Salud en la Comunidad III" },
      { nombre: "Administración de la Calidad en los Servicios de Salud", creditos: 3, prerequisito: "Salud Pública II" },
      { nombre: "Clínica de Oncología", creditos: 3, prerequisito: "Clínica Médica" },
      { nombre: "Clínica de Hematología", creditos: 3, prerequisito: "Clínica Médica" }
    ]
  },
  {
    nombre: "Orientación Quirúrgica",
    materias: [
      { nombre: "Clínica de Anestesiología", creditos: 3, prerequisito: "Clínica Quirúrgica" },
      { nombre: "Clínica de Cirugía Corporal y Morfofuncional", creditos: 3, prerequisito: "Clínica Quirúrgica" },
      { nombre: "Cirugía de Mínima Invasión", creditos: 3, prerequisito: "Clínica Quirúrgica" }
    ]
  },
  {
    nombre: "Área de Formación Optativa Abierta",
    materias: [
      { nombre: "Tanatología", creditos: 3, prerequisito: "Cuarto semestre" },
      { nombre: "Inmunoalergias", creditos: 3, prerequisito: "Inmunología Médica" },
      { nombre: "RCP Avanzado y Neonatal", creditos: 3, prerequisito: "Clínica de Cardiología" },
      { nombre: "Actualidades en Salud", creditos: 4, prerequisito: "Cuarto semestre" },
      { nombre: "Propiedad Intelectual", creditos: 4, prerequisito: "Cuarto semestre" },
      { nombre: "Medicina Alternativa", creditos: 3, prerequisito: "Farmacología Médica" },
      { nombre: "Medicina Genómica", creditos: 3, prerequisito: "Biología Molecular Básica" },
      { nombre: "Enfermedades Tropicales", creditos: 3, prerequisito: "Microbiología II" }
    ]
  }
];

// Renderizado en HTML
const contenedor = document.querySelector(".malla");

ciclos.forEach(ciclo => {
  const divCiclo = document.createElement("div");
  divCiclo.classList.add("ciclo");
  
  const titulo = document.createElement("h2");
  titulo.textContent = ciclo.nombre;
  divCiclo.appendChild(titulo);
  
  ciclo.materias.forEach(m => {
    const divMat = document.createElement("div");
    divMat.classList.add("materia");
    divMat.innerHTML = `
      <div class="nombre">${m.nombre}</div>
      <small>Créditos: ${m.creditos}</small>
      <small>Prerrequisito: ${m.prerequisito}</small>
    `;
    divCiclo.appendChild(divMat);
  });
  
  contenedor.appendChild(divCiclo);
});
