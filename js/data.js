/**
 * DEONTECH MAGAZINE - BLOG EDITORIAL DE ÉTICA, TECNOLOGÍA Y SOCIEDAD
 * Base de Datos Centralizada de Publicaciones, Autores y Pilares Conceptuales
 * Universidad Científica del Sur (UCSUR) - HUM-010 (2026-2)
 */

const BLOG_INFO = {
  magazineName: "DEONTECH",
  tagline: "Manifiesto de Identidad Ética · Portafolio Digital",
  subtitle: "Un espacio editorial donde la ingeniería de software, los sistemas empresariales, la agronomía y la economía se articulan en torno a la dignidad humana, la bioética y la justicia distributiva en el Perú.",
  term: "UCSUR · 2026-2",
  institution: "Universidad Científica del Sur",
  course: "HUM-010 Ética y Deontología Profesional",
  edition: "Vol. 1 · Manifiesto de Identidad Ética — EC1 Semana 5",
  publishDate: "Septiembre 2026",
  stats: {
    articlesCount: 4,
    pillarsCount: 3,
    authorsCount: 5
  }
};

const TEAM_MEMBERS = [
  {
    id: "diego",
    name: "Diego Alberto Esquivel",
    career: "Ingeniería de Software",
    icon: "code-slash",
    color: "#06B6D4",
    role: "Arquitectura de Software y Sesgos Algorítmicos",
    bio: "Investiga accesibilidad digital, equidad en interfaces y mitigación de sesgos discriminatorios en algoritmos comerciales.",
    articlesCount: 3
  },
  {
    id: "manuel",
    name: "Manuel Felipe Jara",
    career: "Ingeniería Empresarial y de Sistemas",
    icon: "briefcase",
    color: "#3B82F6",
    role: "Transformación Digital y Gestión Responsable",
    bio: "Enfocado en la digitalización justa de las MYPES peruanas y la prevención de asimetrías de poder en cadenas de suministro.",
    articlesCount: 3
  },
  {
    id: "gabriela",
    name: "Gabriela Mendoza",
    career: "Agronomía y Negocios",
    icon: "leaf",
    color: "#10B981",
    role: "Sostenibilidad Agroambiental y Bioética Rural",
    bio: "Defensora de la inocuidad alimentaria, protección de agricultores familiares en valles costeros y erradicación de pesticidas tóxicos.",
    articlesCount: 3
  },
  {
    id: "naomi",
    name: "Naomi Salomé Quiroz",
    career: "Ingeniería Empresarial y de Sistemas",
    icon: "layers",
    color: "#8B5CF6",
    role: "Gobernanza de Datos y Accesibilidad Inclusiva",
    bio: "Especialista en estructuración de servicios digitales humanocéntricos para adultos mayores y personas con discapacidad.",
    articlesCount: 3
  },
  {
    id: "kevin",
    name: "Kevin Steven Salcedo",
    career: "Ingeniería Económica y de Negocios",
    icon: "trending-up",
    color: "#F59E0B",
    role: "Axiología Económica y Comercio Justo",
    bio: "Analiza modelos económicos alternativos que subordinan la rentabilidad mercantil a la preservación biológica y social.",
    articlesCount: 3
  }
];

const PHILOSOPHICAL_PILLARS = [
  {
    author: "Aristóteles",
    work: "Ética a Nicómaco",
    concept: "La Tríada Virtuosa",
    triad: "Telos · Areté · Eudaimonía",
    quote: "«Toda técnica y toda investigación parecen tender a algún bien; el fin supremo es la vida plena vivida según la virtud.»",
    thesis: "Nuestras profesiones reorientan su fin último (telos): ya no es solo maximizar dividendos financieros, sino garantizar la preservación de la vida, el cuidado ecológico y la justicia en el Perú.",
    badgeColor: "#06b6d4"
  },
  {
    author: "Immanuel Kant",
    work: "Metafísica de las Costumbres",
    concept: "Dignidad Ontológica",
    triad: "Imperativo Categórico",
    quote: "«Obra de tal modo que uses la humanidad, tanto en tu persona como en la de cualquier otro, siempre como fin y nunca como medio.»",
    thesis: "Ninguna persona (adultos mayores, usuarios vulnerables, jornaleros agrícolas) puede ser instrumentalizada como un descarte económico en nombre de la eficiencia o automatización.",
    badgeColor: "#10b981"
  },
  {
    author: "Max Scheler",
    work: "El Formalismo en la Ética",
    concept: "Jerarquía Objetiva de Valores",
    triad: "Espirituales > Vitales > Económicos",
    quote: "«Existe un orden objetivo donde lo vital y espiritual preside irrevocablemente sobre lo útil y placentero.»",
    thesis: "La rentabilidad es solo un medio instrumental operativo. La salud humana, la seguridad alimentaria y la equidad social son fines jerárquicamente superiores y no negociables.",
    badgeColor: "#f59e0b"
  }
];

const BLOG_TAGS = [
  "Bioética",
  "Inteligencia Artificial",
  "Sesgo Algorítmico",
  "Agricultura Familiar",
  "Comercio Justo",
  "Mypes Perú",
  "Brecha Digital",
  "Max Scheler",
  "Aristóteles",
  "Immanuel Kant",
  "Deontología CIP",
  "Sostenibilidad ODS"
];

const INITIAL_TRABAJOS = [
  {
    id: "ac1",
    code: "ENSAYO 01",
    title: "Robot Salvaje y el telos tecnológico: ¿Hacia una convivencia armónica con la vida?",
    category: "Filosofía Práctica y Telos",
    publishDate: "05 de Septiembre, 2026",
    author: "Diego Esquivel, Gabriela Mendoza y Equipo DeonTech",
    authorRole: "Software y Agroecología",
    module: "Módulo 1 — Aspectos Básicos de la Ética",
    week: "Semana 1",
    focusArea: "Metáfora de Identidad y Telos Profesional",
    product: "Ensayo Central de Identidad",
    status: "completed",
    featured: true,
    thumbnail: "assets/img/ac1-metafora-robot-salvaje.jpg",
    pdfUrl: "trabajos/tica - Actividad colaborativa 1.pdf",
    tags: ["Aristóteles", "Telos", "Areté", "Eudaimonía", "Robot Salvaje", "Tecnología Humanista"],
    summary: "Reflexión filosófica inspirada en la película 'Robot Salvaje' (2024): cómo la tecnología puede redefinir su telos para adaptarse y cuidar la vida en lugar de imponer una lógica utilitaria destructiva.",
    leadParagraph: "En pleno siglo XXI, cuando la aceleración tecnológica amenaza con desbordar los límites ecológicos y humanos, surge una pregunta ineludible: ¿cuál es el verdadero fin (telos) de nuestras disciplinas profesionales? Inspirados en la travesía del robot ROZZUM 7134, planteamos un giro deontológico urgente.",
    theories: [
      {
        concept: "Telos (Finalidad superior)",
        source: "Aristóteles, Ética a Nicómaco (Libro I)",
        application: "Toda profesión posee un fin último. En el contexto contemporáneo, el software, la gestión empresarial y el agro deben subordinar el beneficio económico a la preservación de la biosfera y el florecimiento de la comunidad."
      },
      {
        concept: "Areté (Excelencia moral como hábito)",
        source: "Aristóteles, Ética a Nicómaco (Libro I)",
        application: "La excelencia profesional no se agota en codificar rápido o reducir costos; es el hábito constante de proceder con equidad, transparencia y responsabilidad ante el impacto social."
      },
      {
        concept: "Eudaimonía (Florecimiento humano)",
        source: "Aristóteles, Ética a Nicómaco (Libro I)",
        application: "La realización del profesional se aleja del productivismo alienante y cobra sentido cuando su trabajo promueve una vida digna y plena para los conciudadanos."
      },
      {
        concept: "El sentido de la ética compartida",
        source: "Giusti, M. (2007). El sentido de la ética",
        application: "La ética no es un corsé restrictivo de sanciones, sino la indagación colectiva sobre las condiciones necesarias para una convivencia justa y digna."
      }
    ],
    details: {
      metaphorTitle: "Robot Salvaje (DreamWorks, 2024) — Coexistencia y Cuidado",
      reference: "Nota. De la película The Wild Robot (Sanders, 2024), DreamWorks Animation.",
      teamPurpose: "Escogimos esta escena de “Robot Salvaje” porque representa la tecnología adaptándose para convivir armónicamente con el ecosistema. Al igual que el autómata náufrago aprende a velar por las criaturas del bosque, nosotros asumimos el deber de ejercer la ingeniería, los negocios y la agronomía como agentes de protección, equidad y regeneración en el Perú.",
      careersPurpose: "Así como la máquina descubre que su verdadero destino es cuidar la vida, nosotros encontramos en la virtud y la deontología la verdadera brújula de nuestra praxis en el país."
    }
  },
  {
    id: "ac2",
    code: "ENSAYO 02",
    title: "¿A quién le debemos responsabilidad? Rostros vulnerables ante el ejercicio profesional",
    category: "Bioética Aplicada y Inclusión",
    publishDate: "12 de Septiembre, 2026",
    author: "Naomi Quiroz, Manuel Jara y Equipo DeonTech",
    authorRole: "Sistemas y Gestión Ética",
    module: "Módulo 1 — Aspectos Básicos de la Ética",
    week: "Semana 2",
    focusArea: "Bioética y Poblaciones Vulnerables",
    product: "Mapa de Responsabilidad y Compromiso Humano",
    status: "completed",
    featured: false,
    thumbnail: "assets/img/ac2-rostros-vulnerables.jpg",
    pdfUrl: "trabajos/tica - Actividad colaborativa 2.pdf",
    tags: ["Kant", "Dignidad Ontológica", "Bioética", "Poblaciones Vulnerables", "Brecha Digital", "Mypes", "Agricultura Familiar"],
    summary: "Examen crítico de cuatro poblaciones vulnerables en el Perú frente a la digitalización y el mercado: adultos mayores, personas con discapacidad sensorial, Mypes desprotegidas y agricultores familiares.",
    leadParagraph: "La innovación no ocurre en el vacío. Cuando una plataforma digital o una decisión comercial se implementa sin un marco deontológico riguroso, son las poblaciones históricamente excluidas las que pagan el costo de la exclusión y la precarización en nuestro país centralista.",
    theories: [
      {
        concept: "La persona como fin en sí mismo",
        source: "Kant, I. Fundamentación de la metafísica de las costumbres (1785)",
        application: "Ningún ser humano debe ser instrumentalizado jamás como un engranaje o insumo descartable para el lucro corporativo. La tecnología debe rendir cuentas a la dignidad incondicional de cada individuo."
      },
      {
        concept: "Dignidad ontológica vs. utilitaria",
        source: "Sesión 2 — Principios de Dignidad",
        application: "La dignidad intrínseca de una persona mayor o de un agricultor no depende de su velocidad para usar un smartphone ni de su capacidad de consumo; es inviolable y universal."
      },
      {
        concept: "Principios de la Bioética",
        source: "Beauchamp y Childress (Principios de ética biomédica)",
        application: "Autonomía, Beneficencia, No maleficencia y Justicia Distributiva como barreras contra la violencia estructural y el abandono digital."
      }
    ],
    vulnerablePopulations: [
      {
        group: "Usuarios con discapacidades visuales y/o auditivas",
        context: "En un ecosistema cada vez más digitalizado, miles de plataformas de banca y servicios públicos carecen de compatibilidad con lectores de pantalla o interfaces adaptativas, aislándolos de trámites elementales.",
        principle: "Justicia y Autonomía: Se vulnera la igualdad de oportunidades y se les obliga a perder su independencia para tareas cotidianas."
      },
      {
        group: "Adultos mayores y analfabetos digitales",
        context: "La eliminación forzosa de ventanillas físicas y la automatización bancaria sin soporte empático genera angustia, dependencia y exclusión patrimonial.",
        principle: "Dignidad Ontológica: Se les trata de forma implícita como usuarios prescindibles, vulnerando su derecho al acceso digno."
      },
      {
        group: "Micro y pequeñas empresas (Mypes) en transición",
        context: "Herramientas de software corporativo con precios desorbitados y comisiones abusivas en pasarelas de pago concentran el mercado en conglomerados hegemónicos.",
        principle: "Justicia Distributiva: La tecnología actúa como una barrera de entrada que confina a las Mypes a la informalidad desamparada."
      },
      {
        group: "Pequeños agricultores familiares",
        context: "Expuestos a fluctuaciones despiadadas de precios por parte de intermediarios y monopolios agroquímicos, sin asistencia técnica accesible ni contratos equitativos.",
        principle: "Dignidad Humana y Solidaridad: El mercado los reduce a insumos de subsistencia, despojándolos de soberanía económica."
      }
    ],
    details: {
      reference: "Nota. Elaboración propia.",
      commitment: "Nos negamos a concebir a las personas de provincia y a los sectores vulnerables como meras variables de ajuste. Nuestro compromiso como profesionales es diseñar soluciones de software, gestión empresarial y agroecología que se adapten con empatía a la diversidad de realidades peruanas."
    }
  },
  {
    id: "ac3",
    code: "ENSAYO 03",
    title: "¿Qué valoramos? La tensión axiológica entre la vida y el rendimiento económico",
    category: "Axiología y Economía Ética",
    publishDate: "16 de Septiembre, 2026",
    author: "Kevin Salcedo, Gabriela Mendoza y Equipo DeonTech",
    authorRole: "Economía y Agronomía",
    module: "Módulo 1 — Aspectos Básicos de la Ética",
    week: "Semana 3",
    focusArea: "Axiología y Jerarquía de Scheler",
    product: "Tabla Axiológica y Pirámide DeonTech",
    status: "completed",
    featured: false,
    thumbnail: "assets/img/ac3-jerarquia-valores.jpg",
    pdfUrl: "trabajos/tica - Actividad colaborativa 3.pdf",
    tags: ["Max Scheler", "Axiología", "Jerarquía de Valores", "Tensión Ética", "Comercio Justo", "Salud Ocupacional"],
    summary: "Análisis axiológico bajo la escala de Max Scheler sobre el conflicto endémico en el Perú entre el rendimiento económico inmediato y la salud, el medio ambiente y la justicia social.",
    leadParagraph: "En el mundo empresarial y técnico a menudo se presume que 'lo que genera dinero es bueno'. La axiología de Max Scheler nos demuestra lo contrario: los valores económicos son meramente instrumentales y deben supeditarse a los valores vitales y espirituales superiores.",
    theories: [
      {
        concept: "Jerarquía Objetiva de los Valores",
        source: "Scheler, M. El formalismo en la ética y la ética material de los valores (1913-1916)",
        application: "Los valores no son caprichos subjetivos; poseen un orden jerárquico inmutable donde la vida, la salud y la justicia ostentan rango superior sobre la utilidad monetaria."
      },
      {
        concept: "Tensión axiológica en contextos laborales",
        source: "Scheler, M. (Axiología del trabajo)",
        application: "El choque cotidiano entre abaratar costos operativos y respetar los derechos humanos, la salud de los trabajadores y el equilibrio ecológico."
      }
    ],
    schelerMatrix: [
      {
        category: "Valores Vitales",
        description: "Vida, salud, integridad física y equilibrio biológico (lo sano vs. lo mórbido).",
        presence: "Parcial",
        example: "En Agronomía: erradicar agroquímicos neurotóxicos y proteger a los jornaleros. En Software: combatir la cultura del burnout y el insomnio crónico en consultoras de TI."
      },
      {
        category: "Valores de lo Agradable",
        description: "Confort, placer sensorial inmediato y usabilidad ergonómica.",
        presence: "Sí",
        example: "En Sistemas y Software: diseñar interfaces web intuitivas, bellas, fluidas y placenteras de utilizar para cualquier persona."
      },
      {
        category: "Valores Espirituales (Justicia y Verdad)",
        description: "Lo justo, lo verdadero y lo digno; trascienden el interés biológico y mercantil.",
        presence: "Parcial",
        example: "En Economía y Sistemas: transparencia algorítmica, contratos de precio justo con comunidades productoras y erradicación de monopolios de información."
      },
      {
        category: "Valores Económicos",
        description: "Utilidad, eficiencia, rentabilidad y ahorro de costos operativos.",
        presence: "Sí",
        example: "En Gestión y Economía: solvencia financiera como medio de soporte, jamás como el dios supremo que autoriza abusos laborales o ecológicos."
      },
      {
        category: "Valores de lo Sagrado",
        description: "Lo santo vs. lo profano; máxima cúspide en el esquema de Scheler.",
        presence: "No",
        example: "En una praxis profesional laica nos orientamos por los derechos humanos universales, la bioética civil y los códigos deontológicos de los colegios profesionales."
      }
    ],
    details: {
      reference: "Nota. Elaboración propia.",
      tensionTitle: "La Tensión Axiológica en el Escenario Peruano",
      tensionText: "En valles como los de Ica y Piura, algunas agroexportadoras privilegian el uso de pesticidas prohibidos internacionalmente por ser más baratos, arriesgando la salud de cientos de familias trabajadoras. Simultáneamente, en Lima se estructuran modelos de negocio digitales y financieros con tasas usureras hacia pequeñas empresas. DeonTech declara: el beneficio económico jamás debe prevalecer sobre la salud, la vida y la justicia.",
      pyramidExplanation: "Nuestra pirámide axiológica establece de forma categórica: 1° Valores Espirituales (Justicia y Verdad) en la cúspide > 2° Valores Vitales (Salud y Vida) > 3° Valores Económicos (Rentabilidad Sostenible como soporte) > 4° Valores de lo Agradable (Confort y UX)."
    }
  },
  {
    id: "ac4",
    code: "ENSAYO 04",
    title: "Mapa de negligencias éticas y acciones positivas del ejercicio profesional",
    category: "Honestidad Intelectual y Diagnóstico Crítico",
    publishDate: "18 de Septiembre, 2026",
    author: "Equipo DeonTech",
    authorRole: "Software, Sistemas, Agronomía y Economía",
    module: "Módulo 1 — Aspectos Básicos de la Ética",
    week: "Semana 4",
    focusArea: "Negligencias, Falacias y Acciones Positivas",
    product: "Mapa de Negligencias Éticas y Acciones Positivas",
    status: "completed",
    featured: false,
    thumbnail: "assets/img/ac4-infografia-colaborativa.jpg",
    pdfUrl: "trabajos/tica - Actividad colaborativa 4.pdf",
    tags: ["Honestidad Intelectual", "Falacias", "Posverdad", "Método Socrático", "Negligencias", "Acciones Positivas", "Mito de la Caverna"],
    summary: "Esta es la última pieza del Manifiesto de Identidad Ética. El equipo ya sabe hacia dónde va (AC1), a quiénes sirve (AC2) y desde qué valores opera (AC3). Ahora mira con honestidad intelectual el campo profesional real: identifica las fallas éticas que persisten en el ejercicio de la ingeniería, la agronomía y la economía en el Perú, nombra las falacias que las sostienen y propone acciones positivas concretas.",
    leadParagraph: "Sin un diagnóstico crítico y honesto, el Manifiesto sería solo aspiracional y no ético. Necesitamos mirar con valentía las sombras del ejercicio profesional —las negligencias que se normalizan, las falacias que las justifican— para poder comprometernos con acciones positivas reales que transformen la praxis en el Perú.",
    theories: [
      {
        concept: "Honestidad intelectual",
        source: "Sesión 4 — Verdad lógica vs. verdad ética",
        application: "Ser honesto intelectualmente implica reconocer las fallas del propio campo profesional, no solo las del 'otro'. El mapa es un ejercicio de honestidad intelectual colectiva."
      },
      {
        concept: "Falacias en el discurso profesional",
        source: "Sesión 4 — Falacias y posverdad",
        application: "Las negligencias éticas frecuentemente se justifican mediante razonamientos falaces. Identificar la falacia que sostiene cada falla le da al diagnóstico rigor filosófico, no solo denuncia."
      },
      {
        concept: "Posverdad",
        source: "Radio Ambulante — Caravana de la desinformación (podcast complementario)",
        application: "La posverdad —cuando las emociones desplazan a los hechos— afecta también el ejercicio profesional. Narrativas populares distorsionan la realidad en perjuicio de poblaciones vulnerables en nuestras disciplinas."
      },
      {
        concept: "El método socrático",
        source: "Sesión 4 — Método socrático para la resolución de problemas",
        application: "Sócrates preguntaba hasta desmontar los supuestos falsos. Cada propuesta de mejora debe responder: ¿qué pregunta socrática revela el problema real detrás de la negligencia?"
      },
      {
        concept: "El mito de la caverna",
        source: "Platón, La República, Libro VII",
        application: "Los prisioneros en la caverna confunden sombras con realidad. ¿Qué 'sombras' —creencias normalizadas— impiden que los profesionales de nuestras carreras vean y corrijan sus fallas éticas?"
      }
    ],
    negligenciasMap: [
      {
        negligencia: "Diseñar o apoyar modelos económicos superficiales como el incremento del salario mínimo, ignorando que estas medidas asfixian financieramente y empujan a la informalidad a los pequeños negocios.",
        falacia: "Posverdad. Las emociones y la creencia popular de que un aumento del salario soluciona la pobreza pesa más que los hechos verificables sobre la pérdida de empleos formales que esto genera.",
        poblacion: "Micro y pequeños empresarios, al crear barreras económicas que precarizan su labor.",
        accionPositiva: "Implementar instrumentos económicos técnicos, como un seguro de desempleo, que proteja al trabajador sin vulnerar la dignidad del pequeño emprendedor ni quebrar su negocio."
      },
      {
        negligencia: "Implementar plataformas digitales obligatorias y complejas para trámites o gestión empresarial, excluyendo a quienes no dominan la tecnología o no tienen recursos técnicos.",
        falacia: "Posverdad. Se acepta emocionalmente la narrativa de que toda digitalización rápida es progreso, ignorando los hechos reales sobre la brecha tecnológica y marginando a los menos familiarizados.",
        poblacion: "Adultos mayores con baja digitalización y Mypes.",
        accionPositiva: "Diseñar software accesible con interfaces fáciles y cómodas, ofreciendo capacitaciones y alternativas de bajo costo que respeten la autonomía y dignidad."
      },
      {
        negligencia: "Utilizar agroquímicos tóxicos y baratos para no perder cosechas y maximizar ganancias, ignorando la protección adecuada de los trabajadores.",
        falacia: "Pendiente resbaladiza. Se afirma exageradamente que exigir equipos de protección caros o químicos seguros llevará inevitablemente a la quiebra de la empresa agrícola.",
        poblacion: "Trabajadores agrícolas y pequeños agricultores.",
        accionPositiva: "Promover tecnología agrícola sostenible que priorice la garantía alimentaria y la salud mental y física, asegurando un trato justo que no anteponga el ahorro de costos a la vida."
      }
    ],
    socraticQuestion: "¿Son correctas y beneficiosas las prácticas de mi ejercicio profesional hacia las poblaciones vulnerables?",
    manifestoClosure: "Inspirados en Robot Salvaje que adapta su tecnología para proteger el ecosistema, reconocemos nuestro deber de servir a poblaciones vulnerables como las Mypes, ancianos y pequeños agricultores, concibiéndolos como fines en sí mismos y no como medios utilitarios. Al confrontar las falacias y negligencias de nuestras carreras, reforzamos los valores vitales por encima del beneficio económico y nos comprometemos a ejercer de manera sostenible e inclusiva.",
    details: {
      reference: "Nota. Elaboración propia.",
      teamPurpose: "Esta es la última pieza del Manifiesto de Identidad Ética antes de la EC1. El equipo ya sabe hacia dónde va (AC1), a quiénes sirve (AC2) y desde qué valores opera (AC3). Ahora necesita mirar con honestidad intelectual el campo profesional real: ¿qué acciones positivas realiza mi profesión por nuestro país? ¿Qué fallas éticas existen hoy en ese ámbito en el Perú? Sin este diagnóstico crítico, el Manifiesto sería solo aspiracional y no ético."
    }
  },
  {
    id: "h1-manifiesto",
    code: "MANIFIESTO",
    title: "Manifiesto de Identidad Ética: La voz colectiva de DeonTech",
    category: "Manifiesto Editorial",
    publishDate: "Edición Especial (Semana 5)",
    author: "Colectivo DeonTech",
    authorRole: "Todas las disciplinas",
    module: "Módulo 1 — Cierre Temático",
    week: "Semana 5",
    focusArea: "Integración Multidisciplinaria",
    product: "Manifiesto Digital Integral de DeonTech",
    status: "upcoming",
    featured: false,
    thumbnail: "",
    pdfUrl: "",
    tags: ["Manifiesto Ético", "Identidad", "Sustentación", "Portafolio Digital", "Compromiso Cívico"],
    summary: "Documento fundacional que consolida los cuatro primeros ensayos de DeonTech en una declaración de principios deontológicos para la práctica profesional peruana.",
    leadParagraph: "El Manifiesto de Identidad Ética unifica la voz de cinco futuros profesionales que rechazan la neutralidad moral de la técnica y asumen el compromiso de construir una sociedad justa, humana y sostenible.",
    theories: [],
    details: {
      teamPurpose: "Hito editorial central que articula la totalidad de reflexiones del Módulo 1 en un manifiesto integral."
    }
  },
  {
    id: "ac5-ac6",
    code: "PODCAST",
    title: "Dilemas morales en el ejercicio profesional: Guion y debate sonoro",
    category: "Dilemas Morales y Debate",
    publishDate: "Próxima edición (Semanas 6-7)",
    author: "Equipo DeonTech",
    authorRole: "Producción Radial y Guion",
    module: "Módulo 2 — Dilemas Morales y Deontología",
    week: "Semanas 6 y 7",
    focusArea: "Dilemas Morales y Debate Profesional",
    product: "Podcast argumentativo con roles profesionales",
    status: "upcoming",
    featured: false,
    thumbnail: "",
    pdfUrl: "",
    tags: ["Podcast", "Dilema Ético", "Debate Moral", "Deliberación"],
    summary: "Debate en audio sobre un dilema moral complejo que confronta los intereses económicos de la agroindustria con la salud comunitaria y la ética algorítmica.",
    leadParagraph: "A través de la deliberación sonora, recreamos una mesa de conflicto ético entre ingenieros, economistas y agrónomos frente a una decisión empresarial límite.",
    theories: [],
    details: { teamPurpose: "Próxima fase de debate temático del proyecto." }
  },
  {
    id: "ac7-ac9",
    code: "ANÁLISIS",
    title: "Video-reacción y contraste dialéctico: Deliberando entre pares",
    category: "Pensamiento Crítico",
    publishDate: "Próxima edición (Semanas 9-11)",
    author: "Equipo DeonTech",
    authorRole: "Análisis Audiovisual",
    module: "Módulo 2 — Dilemas Morales y Deontología",
    week: "Semanas 9 a 11",
    focusArea: "Análisis Crítico y Deliberación Audiovisual",
    product: "Video con análisis crítico de contrapartes",
    status: "upcoming",
    featured: false,
    thumbnail: "",
    pdfUrl: "",
    tags: ["Video Reacción", "Pensamiento Crítico", "Audiovisual"],
    summary: "Análisis dialéctico y contraste crítico entre equipos sobre visiones deontológicas aplicadas a situaciones de riesgo.",
    leadParagraph: "La ética profesional se robustece en el diálogo abierto con posturas discrepantes. Analizamos argumentos y contraargumentos de equipos homólogos.",
    theories: [],
    details: { teamPurpose: "Próxima fase de profundización audiovisual." }
  },
  {
    id: "ac10-ac11",
    code: "INFOGRAFÍA",
    title: "Integridad académica, ética cívica y Objetivos de Desarrollo Sostenible",
    category: "Ética Cívica y ODS",
    publishDate: "Próxima edición (Semanas 13-14)",
    author: "Equipo DeonTech",
    authorRole: "Divulgación Visual",
    module: "Módulo 3 — Ética Cívica y Sostenibilidad",
    week: "Semanas 13 y 14",
    focusArea: "Integridad Científica y Desarrollo Sostenible",
    product: "Infografía de divulgación pública",
    status: "upcoming",
    featured: false,
    thumbnail: "",
    pdfUrl: "",
    tags: ["Infografía", "Integridad", "Sostenibilidad", "ODS", "Cívica"],
    summary: "Síntesis visual sobre prácticas anticorrupción, rigor científico y contribución ciudadana al cumplimiento de los ODS en el Perú.",
    leadParagraph: "La ética no concluye en la oficina ni en el laboratorio; es una praxis cívica cotidiana orientada a la sostenibilidad y la transparencia pública.",
    theories: [],
    details: { teamPurpose: "Fase de cierre orientada a la ética cívica y los Objetivos de Desarrollo Sostenible." }
  }
];

// Helper para persistencia local: carga los trabajos guardados o los iniciales
function loadTrabajos() {
  try {
    const saved = localStorage.getItem("deontech_magazine_articles_v6");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
    // Limpieza de claves anteriores
    localStorage.removeItem("deontech_magazine_articles_v5");
    localStorage.removeItem("deontech_magazine_articles_v4");
    localStorage.removeItem("deontech_magazine_articles_v3");
    localStorage.removeItem("deontech_portfolio_trabajos_v2");
    localStorage.removeItem("deontech_portfolio_trabajos");
  } catch (e) {
    console.warn("No se pudo cargar desde localStorage:", e);
  }
  return [...INITIAL_TRABAJOS];
}

// Helper para guardar en localStorage
function saveTrabajos(trabajos) {
  try {
    localStorage.setItem("deontech_magazine_articles_v6", JSON.stringify(trabajos));
  } catch (e) {
    console.error("Error al guardar en localStorage:", e);
  }
}

// Helper para restablecer datos originales
function resetTrabajos() {
  localStorage.removeItem("deontech_magazine_articles_v6");
  localStorage.removeItem("deontech_magazine_articles_v5");
  localStorage.removeItem("deontech_magazine_articles_v4");
  localStorage.removeItem("deontech_magazine_articles_v3");
  localStorage.removeItem("deontech_portfolio_trabajos_v2");
  localStorage.removeItem("deontech_portfolio_trabajos");
  return [...INITIAL_TRABAJOS];
}
