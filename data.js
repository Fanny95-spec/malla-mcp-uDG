const materias = [
  // PRIMER CICLO
  { ciclo: "Primer Ciclo", clave: "I8553", nombre: "Embriología", creditos: 7, prerequisitos: [] },
  { ciclo: "Primer Ciclo", clave: "I8555", nombre: "Histología", creditos: 10, prerequisitos: [] },
  { ciclo: "Primer Ciclo", clave: "I8554", nombre: "Anatomía Humana y Disecciones", creditos: 17, prerequisitos: [] },
  { ciclo: "Primer Ciclo", clave: "I8551", nombre: "Salud Pública I", creditos: 7, prerequisitos: [] },
  { ciclo: "Primer Ciclo", clave: "I8547", nombre: "Comunicación y Tecnologías de la Información", creditos: 3, prerequisitos: [] },
  { ciclo: "Primer Ciclo", clave: "I8577", nombre: "Bioquímica Médica", creditos: 18, prerequisitos: [] },
  { ciclo: "Primer Ciclo", clave: "I8550", nombre: "Metodología de la Investigación", creditos: 7, prerequisitos: [] },

  // SEGUNDO CICLO
  { ciclo: "Segundo Ciclo", clave: "I3835", nombre: "Sexualidad Humana", creditos: 5, prerequisitos: [] },
  { ciclo: "Segundo Ciclo", clave: "I8548", nombre: "Bioética y Universidad", creditos: 7, prerequisitos: [] },
  { ciclo: "Segundo Ciclo", clave: "I8578", nombre: "Biología Molecular Básica", creditos: 7, prerequisitos: ["I8577"] },
  { ciclo: "Segundo Ciclo", clave: "I8559", nombre: "Promoción de Estilos de Vida Saludable", creditos: 3, prerequisitos: [] },
  { ciclo: "Segundo Ciclo", clave: "I8568", nombre: "Fisiología Médica", creditos: 20, prerequisitos: ["I8577"] },
  { ciclo: "Segundo Ciclo", clave: "I8552", nombre: "Psicología", creditos: 7, prerequisitos: [] },
  { ciclo: "Segundo Ciclo", clave: "I8563", nombre: "Salud Pública II", creditos: 6, prerequisitos: ["I8551"] },
  { ciclo: "Segundo Ciclo", clave: "I8549", nombre: "Sociedad y Salud", creditos: 4, prerequisitos: [] },
  { ciclo: "Segundo Ciclo", clave: "I8608", nombre: "Bioestadística Inferencial", creditos: 6, prerequisitos: ["I8550"] },

  // TERCER CICLO
  { ciclo: "Tercer Ciclo", clave: "I8579", nombre: "Genética Médica", creditos: 10, prerequisitos: ["I8578"] },
  { ciclo: "Tercer Ciclo", clave: "I8569", nombre: "Fisiopatología Médica", creditos: 15, prerequisitos: ["I8568"] },
  { ciclo: "Tercer Ciclo", clave: "I8571", nombre: "Inmunología Médica", creditos: 7, prerequisitos: ["I8578"] },
  { ciclo: "Tercer Ciclo", clave: "I8581", nombre: "Microbiología I", creditos: 11, prerequisitos: ["I8577"] },
  { ciclo: "Tercer Ciclo", clave: "I8583", nombre: "Patología", creditos: 15, prerequisitos: ["I8555"] },
  { ciclo: "Tercer Ciclo", clave: "I8556", nombre: "Epidemiología", creditos: 6, prerequisitos: [] },
  { ciclo: "Tercer Ciclo", clave: "I8557", nombre: "Salud Ambiental", creditos: 3, prerequisitos: [] },

  // CUARTO CICLO
  { ciclo: "Cuarto Ciclo", clave: "I8585", nombre: "Propedéutica y Semiología Médica", creditos: 20, prerequisitos: ["I8569"] },
  { ciclo: "Cuarto Ciclo", clave: "I8570", nombre: "Farmacología Médica", creditos: 9, prerequisitos: ["I8568"] },
  { ciclo: "Cuarto Ciclo", clave: "I8564", nombre: "Salud en la Comunidad I", creditos: 2, prerequisitos: ["I8549"] },
  { ciclo: "Cuarto Ciclo", clave: "I8558", nombre: "Salud Laboral", creditos: 3, prerequisitos: ["I8551"] },
  { ciclo: "Cuarto Ciclo", clave: "I8561", nombre: "Economía en Salud", creditos: 3, prerequisitos: ["I8563"] },
  { ciclo: "Cuarto Ciclo", clave: "I8582", nombre: "Microbiología II", creditos: 7, prerequisitos: ["I8581"] },
  { ciclo: "Cuarto Ciclo", clave: "I8562", nombre: "Nutrición y Sociedad", creditos: 3, prerequisitos: ["I8549"] },
  { ciclo: "Cuarto Ciclo", clave: "I8575", nombre: "Legislación y Salud", creditos: 3, prerequisitos: [] },
  { ciclo: "Cuarto Ciclo", clave: "I8614", nombre: "Salud del Niño y del Adolescente", creditos: 5, prerequisitos: ["I8568"] },
  { ciclo: "Cuarto Ciclo", clave: "I8573", nombre: "Medicina Basada en Evidencias", creditos: 3, prerequisitos: ["I8550"] },
  // QUINTO CICLO
  { ciclo: "Quinto Ciclo", clave: "I8586", nombre: "Clínica Médica", creditos: 18, prerequisitos: ["I8585"] },
  { ciclo: "Quinto Ciclo", clave: "I8599", nombre: "Clínica Quirúrgica", creditos: 18, prerequisitos: ["I8585"] },
  { ciclo: "Quinto Ciclo", clave: "I8607", nombre: "Clínica de Urología", creditos: 3, prerequisitos: ["I8585"] },
  { ciclo: "Quinto Ciclo", clave: "I8596", nombre: "Clínica de Dermatología", creditos: 3, prerequisitos: ["I8585"] },
  { ciclo: "Quinto Ciclo", clave: "I8603", nombre: "Clínica de Otorrinolaringología", creditos: 3, prerequisitos: ["I8585"] },
  { ciclo: "Quinto Ciclo", clave: "I8609", nombre: "Clínica de Oftalmología", creditos: 3, prerequisitos: ["I8585"] },
  { ciclo: "Quinto Ciclo", clave: "I8610", nombre: "Seminario de Integración Básico Clínico", creditos: 2, prerequisitos: ["I8585"] },
  { ciclo: "Quinto Ciclo", clave: "I8565", nombre: "Salud en la Comunidad II", creditos: 2, prerequisitos: ["I8564"] },
  { ciclo: "Quinto Ciclo", clave: "I8593", nombre: "Clínica de Gerontogeriatría", creditos: 3, prerequisitos: ["I8585"] },
  { ciclo: "Quinto Ciclo", clave: "I8597", nombre: "Clínica de Psiquiatría", creditos: 7, prerequisitos: ["I8585"] },
  { ciclo: "Quinto Ciclo", clave: "I8574", nombre: "Investigación Clínica", creditos: 3, prerequisitos: ["I8550"] },
  { ciclo: "Quinto Ciclo", clave: "I8595", nombre: "Clínica de Nefrología y Riesgo Cardiovascular", creditos: 6, prerequisitos: ["I8585"] },

  // SEXTO CICLO
  { ciclo: "Sexto Ciclo", clave: "I8600", nombre: "Técnicas Quirúrgicas", creditos: 6, prerequisitos: ["I8599"] },
  { ciclo: "Sexto Ciclo", clave: "I8588", nombre: "Clínica de Reumatología y Rehabilitación", creditos: 3, prerequisitos: ["I8586"] },
  { ciclo: "Sexto Ciclo", clave: "I8591", nombre: "Clínica de Gastroenterología", creditos: 3, prerequisitos: ["I8586"] },
  { ciclo: "Sexto Ciclo", clave: "I8605", nombre: "Clínica de Neurología", creditos: 3, prerequisitos: ["I8586"] },
  { ciclo: "Sexto Ciclo", clave: "I8598", nombre: "Clínica de Endocrinología y Enfermedades Metabólicas", creditos: 3, prerequisitos: ["I8586"] },
  { ciclo: "Sexto Ciclo", clave: "I8606", nombre: "Clínica de Tórax y Cardiovascular", creditos: 3, prerequisitos: ["I8599"] },
  { ciclo: "Sexto Ciclo", clave: "I8611", nombre: "Seminario de Integración Médico Quirúrgica", creditos: 2, prerequisitos: ["I8586"] },
  { ciclo: "Sexto Ciclo", clave: "I8566", nombre: "Salud en la Comunidad III", creditos: 2, prerequisitos: ["I8565"] },
  { ciclo: "Sexto Ciclo", clave: "I8594", nombre: "Clínica de Cardiología", creditos: 7, prerequisitos: ["I8586"] },
  { ciclo: "Sexto Ciclo", clave: "I8587", nombre: "Clínica de Coloproctología", creditos: 3, prerequisitos: ["I8585"] },
  { ciclo: "Sexto Ciclo", clave: "I8592", nombre: "Clínica de Neumología", creditos: 3, prerequisitos: ["I8585"] },
  { ciclo: "Sexto Ciclo", clave: "I8604", nombre: "Clínica de Infectología", creditos: 3, prerequisitos: ["I8585"] },
  { ciclo: "Sexto Ciclo", clave: "I8572", nombre: "Terapéutica Farmacológica", creditos: 11, prerequisitos: ["I8570"] },
  { ciclo: "Sexto Ciclo", clave: "I8602", nombre: "Clínica de Ortopedia y Traumatología", creditos: 3, prerequisitos: ["I8599"] },

  // SÉPTIMO CICLO
  { ciclo: "Séptimo Ciclo", clave: "I8580", nombre: "Biología Molecular en la Clínica", creditos: 3, prerequisitos: ["I8578"] },
  { ciclo: "Séptimo Ciclo", clave: "I8615", nombre: "Pediatría del Recién Nacido y Lactante", creditos: 10, prerequisitos: ["I8614"] },
  { ciclo: "Séptimo Ciclo", clave: "I8616", nombre: "Pediatría del Preescolar y Escolar", creditos: 10, prerequisitos: ["I8614"] },
  { ciclo: "Séptimo Ciclo", clave: "I8617", nombre: "Obstetricia", creditos: 10, prerequisitos: ["I8585"] },
  { ciclo: "Séptimo Ciclo", clave: "I8618", nombre: "Ginecología", creditos: 10, prerequisitos: ["I8585"] },
  { ciclo: "Séptimo Ciclo", clave: "I8619", nombre: "Medicina Sexual", creditos: 3, prerequisitos: ["I8585"] },
  { ciclo: "Séptimo Ciclo", clave: "I8612", nombre: "Seminario de Integración Materno Infantil", creditos: 2, prerequisitos: ["I8614"] },
  { ciclo: "Séptimo Ciclo", clave: "I8567", nombre: "Salud en la Comunidad IV", creditos: 2, prerequisitos: ["I8566"] },
  { ciclo: "Séptimo Ciclo", clave: "I8560", nombre: "Administración de la Calidad en los Servicios de Salud", creditos: 3, prerequisitos: ["I8563"] },
  { ciclo: "Séptimo Ciclo", clave: "I8589", nombre: "Clínica de Oncología", creditos: 3, prerequisitos: ["I8586"] },
  { ciclo: "Séptimo Ciclo", clave: "I8601", nombre: "Clínica de Hematología", creditos: 3, prerequisitos: ["I8586"] },

  // OCTAVO CICLO
  { ciclo: "Octavo Ciclo", clave: "I8590", nombre: "Urgencias Médicas", creditos: 3, prerequisitos: ["I8585"] },
  { ciclo: "Octavo Ciclo", clave: "I8620", nombre: "Clínica de Ginecología y Obstetricia", creditos: 12, prerequisitos: ["I8617"] },
  { ciclo: "Octavo Ciclo", clave: "I8621", nombre: "Clínica de Pediatría", creditos: 12, prerequisitos: ["I8616"] },
  { ciclo: "Octavo Ciclo", clave: "I8584", nombre: "Sesión Anatomoclínica", creditos: 3, prerequisitos: ["I8583"] },
  { ciclo: "Octavo Ciclo", clave: "I8613", nombre: "Análisis de la Decisión en la Clínica", creditos: 2, prerequisitos: ["I8586"] },
  { ciclo: "Octavo Ciclo", clave: "I8576", nombre: "Medicina Forense", creditos: 3, prerequisitos: ["I8583"] },

  // NOVENO Y DÉCIMO
  { ciclo: "Noveno y Décimo Ciclo", clave: "INTERNADO", nombre: "Internado de Pregrado", creditos: 2, prerequisitos: [] },

  // ORIENTACIÓN QUIRÚRGICA
  { ciclo: "Orientación Quirúrgica", clave: "I8626", nombre: "Clínica de Anestesiología", creditos: 3, prerequisitos: ["I8599"] },
  { ciclo: "Orientación Quirúrgica", clave: "I8627", nombre: "Clínica de Cirugía Corporal y Morfofuncional", creditos: 3, prerequisitos: ["I8599"] },
  { ciclo: "Orientación Quirúrgica", clave: "I8628", nombre: "Cirugía de Mínima Invasión", creditos: 3, prerequisitos: ["I8599"] },

  // OPTATIVAS ABIERTAS
  { ciclo: "Optativas", clave: "I8635", nombre: "Tanatología", creditos: 3, prerequisitos: [] },
  { ciclo: "Optativas", clave: "I8636", nombre: "Inmunoalergias", creditos: 3, prerequisitos: ["I8571"] },
  { ciclo: "Optativas", clave: "I8637", nombre: "RCP Avanzado y RCP Neonatal", creditos: 3, prerequisitos: ["I8594"] },
  { ciclo: "Optativas", clave: "I8638", nombre: "Actualidades en Salud", creditos: 4, prerequisitos: [] },
  { ciclo: "Optativas", clave: "I8639", nombre: "Propiedad Intelectual", creditos: 4, prerequisitos: [] },
  { ciclo: "Optativas", clave: "I8640", nombre: "Medicina Alternativa", creditos: 3, prerequisitos: ["I8570"] },
  { ciclo: "Optativas", clave: "I8641", nombre: "Medicina Genómica", creditos: 3, prerequisitos: ["I8578"] },
  { ciclo: "Optativas", clave: "I8642", nombre: "Enfermedades Tropicales", creditos: 3, prerequisitos: ["I8582"] }
];
