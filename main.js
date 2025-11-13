
const datosEventos = [

/*
   {
        id: "",
        titulo: "",
        categoria: "",
        imagenSrc: 'imagenes/eventos/',
        descripcion: "",       
        fecha: "",
        horario: "",
        localidad: "",
        costo: "",
        links: "",
        ubicacion: "",
        mapaEmbedSrc: "",
        lat: 
        lng: 
        ordenFecha:
    },
*/
    // ARTE & CULTURA EVENTOS
    {
        id: "artcultuno",
        titulo: "Legado: Exposición Foto Arte",
        categoria: "artecultura",
        imagenSrc: "imagenes/eventos/ayc/expoarte.png",
        descripcion: "El Museo de las y los Trabajadores \"Evita\" y FADP URBEM PHOTOS presentan \"Legado\", una imperdible Exposición Fotográfica que explora y celebra contenidos de la historia del Museo. La muestra, con curaduría y coordinación de Alberto Natale, Luján Salinas y Hugo Rivelli, contará con la participación de destacados expositores como Daniel H. Collazo, Fabián Vega, Luján Salinas, M. Cecilia Scala, Miguel H. Suárez, Paola Giorno, Pedro Villa, Tyncho Barrientos y Zulma Arrechea. No te pierdas la oportunidad de sumergirte en este testimonio visual de la mano de Norberto Santangelo.",
        fecha: "Hasta el 14 de Noviembre",
        horario: "10:00hs a 15:00hs",
        localidad: "La Plata",
        costo: "Gratis",
        links: "https://www.instagram.com/museotrabajadores.evita",
        ubicacion: "Museo Evita",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d289.18770355834806!2d-57.945596592818255!3d-34.91183511555519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e63945ef8c31%3A0x59f82e4db968ee31!2sMuseo%20de%20Las%20y%20Los%20Trabajadores%20%22Evita%22!5e0!3m2!1ses-419!2sar!4v1761689298171!5m2!1ses-419!2sar",
        lat: -34.91180284343598,
        lng: -57.94540503539831,
        ordenFecha: 1029
    },
    {
        id: "artcultdos",
        titulo: "Expo Diseño 2025",
        categoria: "artecultura",
        imagenSrc: "imagenes/eventos/ayc/expodiseño.png",
        descripcion: "Llega la última edición de 2025 de Expo Diseño, un encuentro imperdible para los amantes de las tendencias y el diseño local. El evento tendrá lugar el domingo 9 de noviembre, de 14 a 19 hs, en el increíble entorno natural del Club Universitario Gonnet. Esta edición reunirá a más de 50 expositores que presentarán sus proyectos en una amplia variedad de rubros, incluyendo indumentaria, carteras, calzado, accesorios, lencería, decoración, artículos para niños, belleza y mucho más. Una oportunidad única para apoyar el diseño de autor, descubrir nuevas tendencias y disfrutar de una experiencia completa con entrada libre y gratuita en un espacio Pet Friendly.",
        fecha: "9 de Noviembre",
        horario: "14:00 hs",
        localidad: "Gonnet",
        costo: "Gratis",
        links: "https://www.instagram.com/p/DQccByOCUAU",
        ubicacion: "Club Universitario Gonnet",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.3416162437734!2d-58.02310866229848!3d-34.879937252826295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2ddf0f0f47e75%3A0x8a17dcfbc1548515!2sClub%20Universitario%20de%20La%20Plata!5e0!3m2!1ses-419!2sar!4v1761703061495!5m2!1ses-419!2sa",
        lat: -34.880565253372495,
        lng: -58.01301006610521,
        ordenFecha: 1109
    },
    {
        id: "artculttres",
        titulo: "Viva Vintage",
        categoria: "artecultura",
        imagenSrc: "imagenes/eventos/ayc/vivavintage.png",
        descripcion: "¡Vuelve a La Plata el \"Viva Vintage Pop Up Market\"! Una cita imperdible para amantes de la moda sostenible y el estilo único, que reunirá a más de 20 stands con una gran variedad de ropa vintage y de segunda mano. El evento busca expositores con propuestas en moda vintage, diseño independiente, arte, accesorios y vinilos, ofreciendo un espacio de encuentro y personalidad. La jornada se completará con un DJ Set de Cool Cuts Crew, además de bar y gastronomía. La entrada es completamente gratuita para el público.",
        fecha: "9 de Noviembre",
        horario: "15:00 hs",
        localidad: "La Plata",
        costo: "Gratis",
        links: "",
        ubicacion: "Ciudad de Gatos",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7778.7411465783925!2d-57.94420529642086!3d-34.94262629575208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e8961ebd14df%3A0xca1de23d3aab4f3c!2sC.%2071%20%26%20C.%2017%2C%20B1904%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1761706877032!5m2!1ses-419!2sar",
        lat: -34.93958274987282,
        lng: -57.938999703035556,
        ordenFecha: 1109
    },
    {
        id: "artcultcuatro",
        titulo: "Gritos en el Planetario IV",
        categoria: "artecultura",
        imagenSrc: "imagenes/eventos/ayc/planetario.png",
        descripcion: "La Plata se prepara para ser la capital del miedo con la IV Edición del Festival Internacional de Cine de Horror y Fantasía: \"Gritos en el Planetario\". Coincidiendo con Halloween y el Día de los Muertos, durante tres días el icónico domo del Planetario UNLP se transformará para recibir lo mejor del cine fantástico internacional. La ilustración oficial de esta edición, inspirada en los clásicos del terror de los 70s y 80s (de Evil Dead a Creepshow), promete una fusión entre el horror gótico y la ciencia ficción. Prepárate para una inmersión total en el género que incluirá proyecciones, charlas y experiencias inmersivas bajo las estrellas del Bosque platense.",
        fecha: "1 & 2 de Noviembre",
        horario: "15:00 a 23:00hs",
        localidad: "La Plata",
        costo: "Función $2.000 / 2 Funciones $3.000 / Todas $5.000",
        links: "https://gritosenelplanetario.com.ar",
        ubicacion: "Planetario UNLP",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.8891921032505!2d-57.934861787913995!3d-34.90923017273297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e6115bf4f945%3A0x1c0e65c064600504!2sPlanetario%20Universidad%20Nacional%20de%20La%20Plata!5e0!3m2!1ses-419!2sar!4v1761701786712!5m2!1ses-419!2sar",
        lat: -34.90908940003872,
        lng: -57.93124080591579,
        ordenFecha: 1101
    },
    {
        id: "artcultcinco",
        titulo: "FICE 2025: Festival de Cine en Ensenada",
        categoria: "artecultura",
        imagenSrc: "imagenes/eventos/ayc/fice.png",
        descripcion: "El Festival Internacional de Cine de Ensenada (FICE) regresa para su 7ª edición, una travesía cultural que se extiende del 30 de octubre al 2 de noviembre. Bajo el lema \"cine que resiste, cine que se encuentra\", este evento ofrece cuatro días de entrada libre y gratuita repletos de proyecciones, incluyendo la Competencia Internacional de Largometrajes y Cortometrajes. La programación se complementa con talleres y conversatorios que invitan a la reflexión, además de actividades específicas para las escuelas. Las principales proyecciones tendrán lugar en el Cine Teatro Municipal de Ensenada (Ortiz de Rosas 99), con espacios al aire libre como FICE desde el Río, donde el cine y el paisaje se fusionan para resistir, imaginar y crear juntos.",
        fecha: "1 & 2 de Noviembre",
        horario: "15:00hs",
        localidad: "Ensenada",
        costo: "Gratis",
        links: "https://fice.com.ar",
        ubicacion: "Cine Teatro Municipal de Ensenada",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.6451742550809!2d-57.901733341158895!3d-34.862622606663464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e43a194a59ff%3A0xe3686558c036cd67!2sCine%20Teatro%20Municipal%20de%20Ensenada!5e0!3m2!1ses-419!2sar!4v1761701697083!5m2!1ses-419!2sar",
        lat: -34.86255586727022,
        lng: -57.90148374698577,
        ordenFecha: 1101
    },
     {
    id: "artcultseis",
    titulo: "La Noche de los Museos",
    categoria: "artecultura",
    imagenSrc: "imagenes/eventos/ayc/museo.png",
    descripcion: "El evento \"Museos a la Luz de la Luna\" en La Plata es una cita cultural ineludible que se celebra anualmente, transformando la noche platense en un vasto espacio de exploración artística, científica e histórica. Programada para el sábado 15 de Noviembre, esta jornada extiende sus actividades de 19:00 a 24:00 horas, ofreciendo una experiencia mágica y completamente gratuita para todas las edades. Organizada por la Red de Museos de la Universidad Nacional de La Plata (UNLP), la iniciativa permite a vecinos y visitantes recorrer un amplio abanico de museos (incluyendo el icónico Museo de La Plata, el Museo Azzarini, el Museo de Física, y otros de las diferentes facultades) y otros espacios culturales bajo una atmósfera nocturna especial. Los asistentes pueden participar en circuitos temáticos guiados, disfrutar de música en vivo, presenciar intervenciones artísticas, y acceder a propuestas lúdicas y educativas que buscan difundir el inmenso patrimonio cultural de la UNLP, reafirmando el compromiso con la educación pública, gratuita y de calidad.",
    fecha: "15 de Noviembre",
    horario: "19:00 hs",
    localidad: "La Plata",
    costo: "Gratis",
     links:"https://www.instagram.com/p/DQb0xXiDRGZ",
    ubicacion: "Museo de Ciencias Naturales de La Plata",
    mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.9028876930843!2d-57.9353316!3d-34.9088865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e6143077af85%3A0xa466b8a8cd326a29!2sMuseo%20de%20Ciencias%20Naturales%20de%20La%20Plata!5e0!3m2!1ses-419!2sar!4v1761847295947!5m2!1ses-419!2sar",
    lat: -34.90869293667296,
    lng: -57.93526186256644,
    ordenFecha: 1115
  },
    {
        id: "artcultsiete",
        titulo: "Festival Int. de Fotografia FREEZER",
        categoria: "artecultura",
        imagenSrc: "imagenes/eventos/ayc/feriafotos.jfif",
        descripcion: "¡Preparen las cámaras y los ojos! Vuelve el Freezer Foto Fest 2025 a La Plata. Este año, bajo el lema Lo imposible, el festival toma la ciudad del 7 al 9 de noviembre y se consolida como el punto de encuentro clave para la escena visual platense. El Centro de Arte UNLP será la sede principal, explotando de exposiciones (como Alephs y Fútbol) y una gran feria editorial (viernes 7 y sábado 8, de 15 a 19 hs). Durante esos días, el auditorio se llena de charlas, proyecciones y presentaciones de fotolibros (todo gratis), además de talleres especializados (¡con inscripción!) en otras sedes como Sputnik Var y Espacio Guarida. El sábado hay fiesta en Sputnik (desde las 21 hs) y el domingo 9, el gran final: un cierre colectivo y onírico navegando el Río Santiago al atardecer desde Berisso.",
        fecha: "7, 8 & 9 de Noviembre",
        horario: "18:00hs",
        localidad: "La Plata",
        costo: "Gratis",
        links: "https://festival.freezer.com.ar/2025",
        ubicacion: " Sede principal: Centro de Arte UNLP",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.73492201185!2d-57.9533157242462!3d-34.91310117284497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e6375ea3f02b%3A0x47bc19136d2e678!2sCentro%20de%20Arte%20UNLP!5e0!3m2!1ses-419!2sar!4v1761879597067!5m2!1ses-419!2sar",
        lat: -34.91296920467378,
        lng: -57.95073543920467,
        ordenFecha: 1107
    },
    {
        id: "artcultocho",
        titulo: "Feria de Arte Impreso en Espacio Vintage",
        categoria: "artecultura",
        imagenSrc: "imagenes/eventos/ayc/feriaarteimpreso.jfif",
        descripcion: "¡El plan ideal para lxs fanáticxs del diseño! Este sábado 1 de noviembre la esquina de 8 y 77 se activa con una gran Feria de Arte Impreso. La productora Entrevolcanes organiza este encuentro gráfico en la vereda de Espacio Vintage y Pivot Café. Desde las 16 hasta las 21 hs, vas a poder encontrar trabajos de artistas gráficos zarpados como LAVA, Industria Platense, Jost, Perex Design y más. La jornada se completa con una expo de Pancho Fran, música a cargo de Dj Gamvitz y la participación especial de Fungi Panaderia y Vermu Interferencia. Un planazo para ver arte, escuchar música y disfrutar de la movida local.",
        fecha: "1 de Noviembre",
        horario: "16:00hs",
        localidad: "La Plata",
        costo: "Gratis",
        links: "https://www.instagram.com/espaciovintagelaplata/p/DQRZf8ZkYV-",
        ubicacion: "Café Pivot",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d817.9541592437948!2d-57.957825630332!3d-34.91105079854124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e764c95c27d3%3A0xe15f2176668a7ee1!2zUElWw5NU!5e0!3m2!1ses-419!2sar!4v1761879986874!5m2!1ses-419!2sar",
        lat: -34.91101010736146,
        lng: -57.9572006756593,
        ordenFecha: 1101
    },
     {
        id: "artcultnueve",
        titulo: "Festival Tiendita de Verano: Agrupando Culturas",
        categoria: "artecultura",
        imagenSrc: 'imagenes/eventos/ayc/festivalverano.png',
        descripcion: "¡La Plata se enciende con una propuesta 100% autogestiva! Llega el Festival Tiendita de Verano el próximo 30 de noviembre, un evento que nace de la necesidad de agrupar culturas. Más que un simple festival, se presenta como una plataforma integral que gestiona y conecta a los artistas emergentes de la ciudad, integrando múltiples narrativas y formatos en un potente circuito cultural.\nParalelamente, el festival desborda el formato tradicional con dos propuestas clave para recorrer: un Festival Gráfico en la Plazoleta Bellas Artes (con intervenciones artísticas en vivo, serigrafía callejera, graffiti, paste-up y feria) y una Feria de Vinilos en Wild Hopes Dystopia con stands de La Plata y Buenos Aires.",       
        fecha: "30 de Noviembre",
        horario: "17:00 hs",
        localidad: "La Plata",
        costo: "1era tanda $10.000",
        links: "https://www.instagram.com/p/DQNnSqUDR6M/?img_index=1",
        ubicacion: "Plazoleta Bellas Artes",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1635.6839023438606!2d-57.941825100585774!3d-34.92231150509897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e621a22a0673%3A0xfe11cbcb5b8ab338!2sC.%2061%20%26%20C.%208%2C%20B1904%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1763001423610!5m2!1ses-419!2sar",
        lat:-34.92276234415577, 
        lng: -57.941680261296824,
        ordenFecha: 1130
    },
 {
        id: "artcultdiez",
        titulo: "Exposición \"Luis Pazos. Poesía vital\"",
        categoria: "artecultura",
        imagenSrc: 'imagenes/eventos/ayc/expoartvisuales.png',
        descripcion: "¡El Centro de Arte de la UNLP renueva sus exposiciones! En el marco del evento \"Museos a la luz de la luna\" (La Noche de los Museos de la UNLP), el sábado 15 de noviembre se inaugura la muestra \"Luis Pazos. Poesía vital\". Curada por Fernando Davis y co-organizada junto a Arthaus Central, la exposición recorre la producción del reconocido artista platense. Su obra, definida por el curador como una \"poesía vital, callejera y plebeya\", propone una reinvención de lo común y un verdadero arte del acontecimiento para transformar el mundo desde la invención colectiva.",       
        fecha: "15/11 al 20/12",
        horario: "11:00 hs",
        localidad: "La Plata",
        costo: "Gratis",
        links: "https://www.centrodearte.unlp.edu.ar/exposicion-luis-pazos-poesia-vital",
        ubicacion: "Centro de Arte UNLP",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.7350973303064!2d-57.95331572334942!3d-34.91309677390445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e6375ea3f02b%3A0x47bc19136d2e678!2sCentro%20de%20Arte%20UNLP!5e0!3m2!1ses-419!2sar!4v1763001840302!5m2!1ses-419!2sar",
        lat: -34.91292521523133, 
        lng: -57.950794446838,
        ordenFecha: 1115
    },
     {
        id: "artcultonce",
        titulo: "Exposición \"La piel del color\" de Ana Casanova",
        categoria: "artecultura",
        imagenSrc: 'imagenes/eventos/ayc/pielcolor.png',
        descripcion: "¡Otra inauguración imperdible en \"Museos a la luz de la luna\"! El Centro de Arte UNLP presenta \"La piel del color\", una exposición de la artista Ana Casanova con curaduría de Lucia Delfino. La muestra, que ocupará la Vidriera Bicentenario, presenta un diálogo poético entre el gesto pictórico y el paisaje. En palabras de Claudia Fontes, la artista \"reconoce una especie de correspondencia ontológica (...) entre las bolsas pintadas y el paisaje rural del sur de la Provincia de Buenos Aires\". Sus obras, describe Fontes, \"no nos dejan ver dónde terminan y así nos invitan a seguirlas\".",       
        fecha: "15/11 al 20/12",
        horario: "11:00 hs",
        localidad: "La Plata",
        costo: "Gratis",
        links: "https://www.centrodearte.unlp.edu.ar/exposicion-la-piel-del-color-ana-casanova",
        ubicacion: "Centro de Arte UNLP",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.7350973303064!2d-57.95331572334942!3d-34.91309677390445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e6375ea3f02b%3A0x47bc19136d2e678!2sCentro%20de%20Arte%20UNLP!5e0!3m2!1ses-419!2sar!4v1763001840302!5m2!1ses-419!2sar",
        lat: -34.91287722851144, 
        lng: -57.95106340102297,
        ordenFecha: 1115
    },
 
    //GASTRONOMIA EVENTOS

    {
        id: "gastrouno",
        titulo: "Festival Morder",
        categoria: "gastronomia",
        imagenSrc: "imagenes/eventos/gastronomia/morder.jpg",
        descripcion: "El Festival Morder llega al Hipódromo de La Plata el 2 de noviembre de 2025 con una propuesta única para los fanáticos de las hamburguesas. Será una jornada gratuita y abierta al público donde las principales hamburgueserías platenses competirán por el título a la mejor burger de la ciudad. El evento combina gastronomía, música y entretenimiento en un ambiente al aire libre. Los asistentes podrán participar como jurado popular, eligiendo entre diferentes modalidades de ticket que incluyen hamburguesas, papas, bebidas y beneficios extra.",
        fecha: "2 de Noviembre",
        horario: "12:00 hs",
        localidad: "La Plata",
        costo: "Gratis (General)",
        links: "https://www.instagram.com/morder.festival",
        ubicacion: "Hipódromo de La Plata",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.3844496995525!2d-57.94590688637232!3d-34.90003700659789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7561aa4afff%3A0x851c5a0b0233fb92!2sHIPODROMO%20NACIONAL%20ARGENTINO%20DARDO%20ROCHA!5e1!3m2!1ses-419!2sar!4v1761620808149!5m2!1ses-419!2sar",
        lat: -34.90423510936679,
        lng: -57.94813016278728,
        ordenFecha: 1102
    },
    {
        id: "gastrodos",
        titulo: "Feria, Morfi & Chupi",
        categoria: "gastronomia",
        imagenSrc: "imagenes/eventos/gastronomia/volga.jpg",
        descripcion: " El domingo 2 de noviembre, Volga abre sus puertas con una edición especial de feria en el patio, ideal para disfrutar al aire libre con buena comida, tragos y música. La propuesta reúne gastronomía, vermut, emprendedores y música, con la participación de espacios gastronómicos locales como Miraflores, Lia Bakery, Fugio y La Boutique.Además, contará con una selección de emprendedores invitados que ofrecerán productos de diseño, indumentaria, arte y más.",
        fecha: "2 de Noviembre",
        horario: "12:00 hs",
        localidad: "City Bell",
        costo: "Gratis",
        links: "https://www.instagram.com/p/DQKvdlijiSM",
        ubicacion: "Volga",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4104.5975881979575!2d-58.042457199999994!3d-34.870081299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2de7bf7af59d1%3A0x272a82ac53a4b999!2sVolga!5e1!3m2!1ses-419!2sar!4v1761621209011!5m2!1ses-419!2sar",
        lat: -34.87005486530535,
        lng: -58.04241428753017,
        ordenFecha: 1102
    },

    {
        id: "gastrotres",
        titulo: "Festival de la gastronomía Italiana",
        categoria: "gastronomia",
        imagenSrc: "imagenes/eventos/gastronomia/festivalitalia.jpg",
        descripcion: "Llega una nueva edición del Festival de la Gastronomía Italiana, con dos días para disfrutar al aire libre de buena comida, música y la calidez de la comunidad italiana en La Plata. Vas a poder probar las pizzas de Andiamo, las cervezas artesanales de Goyeneche Familia Cervecera, las delicias de Fatto a Mano, Mir Alfajores, Xocolat Pastelería, Piegata al Forno, Rosa y Mordisco Burgers, Sabores Rurales, Apolo Pizzas y muchos más.",
        fecha: "8 & 9 de Noviembre",
        horario: "12:00 hs",
        localidad: "La Plata",
        costo: "Gratis",
        links: "https://www.instagram.com/festivaldelagastronomia/?hl=es",
        ubicacion: "Parque Alberti",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4101.9800553117775!2d-57.983209123349035!3d-34.92248117440412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7c1644f1d6f%3A0xbcb35770910257f!2sParque%20Alberti!5e1!3m2!1ses-419!2sar!4v1761621548514!5m2!1ses-419!2sar",
        lat: -34.92236234639741,
        lng: -57.980644948070534,
        ordenFecha: 1108
    },
    {
        id: "gastrocuatro",
        titulo: "Tarot & Vino",
        categoria: "gastronomia",
        imagenSrc: "imagenes/eventos/gastronomia/lao.png",
        descripcion: "El Instituto de Artes Ocultas (IAO) te invita a una noche única e inolvidable de \"Tarot & Vino\" en La Plata. Una experiencia sensorial y esotérica que el IAO ha llevado por todo el país y el exterior, ¡y ahora puedes vivirla en tu ciudad! Prepárate para un \"viaje literal\" que incluye una lectura de Tarot, una deliciosa picada-cena y bebida para maridar una velada de misterio y revelación. Los cupos son limitados y están volando, así que asegúrate de reservar tu lugar para ser parte de esta tradición.",
        fecha: "2 de Noviembre",
        horario: "20:30 hs",
        localidad: "La Plata",
        costo: "Reserva",
        links: "https://www.instagram.com/iaoelviajedelheroe",
        ubicacion: "IAO",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1635.886515707336!2d-57.941141854925846!3d-34.91214495297906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e63dcdb9ddf7%3A0x303b32c1cd1b0df8!2sC.%202%201074%2C%20B1900%20CXJ%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1761688725804!5m2!1ses-419!2sar",
        lat: -34.91217574588048,
        lng: -57.94157905497451,
        ordenFecha: 1102
    },
    {
        id: "gastrocinco",
        titulo: "Cafecito & Pizza",
        categoria: "gastronomia",
        imagenSrc: "imagenes/eventos/gastronomia/beki.png",
        descripcion: "Beki Café Especialidad se une a Gordough Pizza para una tarde-noche de aroma, sabor y buena música. El evento \"Cafecito & Pizza\" se llevará a cabo el viernes 1 de noviembre, en Diagonal 74 esquina 48. La jornada arranca a las 17 hs con 2x1 en filtrados toda la tarde, tragos exclusivos de Beki y la música en vivo y DJ set de Lean Zambrano & Tofo Ameri. A partir de las 19:30 hs, Gordough traerá sus deliciosas pizzas, que podrás acompañar con la Cerveza Artesanal Astor Birra. Una excelente opción para arrancar el fin de semana con la mejor combinación de café, pizza y ambiente.",
        fecha: "1 de Noviembre",
        horario: "17:00hs",
        localidad: "La Plata",
        costo: "Gratis",
        links: "https://www.instagram.com/p/DQUQ8eHEQ6G/?img_index=1",
        ubicacion: "Beki Cafe",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3271.5825092596924!2d-57.9550442!3d-34.9169252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e775cc1cd1db%3A0xca89f9207130bf0e!2sBEKI-%20CAFE%20DE%20ESPECIALIDAD!5e0!3m2!1ses-419!2sar!4v1761711280377!5m2!1ses-419!2sar",
        lat: -34.916894408880154,
        lng: -57.95455067355615,
        ordenFecha: 1101
    },
    {
        id: "gastroseis",
        titulo: "Bodega Atamisque: Degustación y Cena en Cuatro Pasos",
        categoria: "gastronomia",
        imagenSrc: "imagenes/eventos/gastronomia/feriavinos.png",
        descripcion: "Latitud te invita a vivir una noche de sabores y aromas únicos con la Bodega Atamisque de San José, Tupungato (Valle de Uco). La cita es el sábado 1 de noviembre a las 20:30 horas y consiste en una degustación guiada por el sommelier Martín Vázquez, maridada con una exquisita Cena en Cuatro Pasos. El menú de la noche incluye, entre otros platos, un Tortelli de pistacho maridado con Serbal Pinot Noir, un Pappardelle relleno con Philippe Caraguel Malbec, y una Pavlova soft acompañada de Champagne Philippe Extra Brut. El costo es de $45.000 por persona y se ofrecen mesas compartidas e individuales.",
        fecha: "1 de Noviembre",
        horario: "20:30hs",
        localidad: "La Plata",
        costo: "$45.000",
        links: "https://www.instagram.com/p/DQYGQ9TDJFf/?hl=es&img_index=1",
        ubicacion: "Latitud Speakeasy Bar",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1945.4614601982978!2d-57.95277674642861!3d-34.90988401333342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e76ccae42f61%3A0x5734825c59610677!2sLatitud!5e0!3m2!1ses-419!2sar!4v1761714679730!5m2!1ses-419!2sar",
        lat: -34.9101168125463,
        lng: -57.950964995698094,
        ordenFecha: 1101
    },
    {
        id: "gastrosiete",
        titulo: "Paseo Gastronomico en el Galpón de las Artes",
        categoria: "gastronomia",
        imagenSrc: "imagenes/eventos/gastronomia/paseogastro.png",
        descripcion: "El Galpón de las Artes se transforma en un Paseo Gastronómico como parte de su Festival Creativo. El sábado 9 de noviembre, de 15:00 a 20:00 hs, podrás disfrutar de una tarde completa con una amplia oferta de Foodtrucks que incluyen opciones dulces, saladas, bebidas de todo tipo y alternativas veganas. Además de la gastronomía, el evento contará con música en vivo y emprendimientos de autoría y diseño. La entrada es libre y gratuita, y el espacio es completamente Pet Friendly.",
        fecha: "9 de Noviembre",
        horario: "15:00hs",
        localidad: "La Plata",
        costo: "Gratis",
        links: "https://www.instagram.com/p/DQVEBqzj9Vk/?img_index=1",
        ubicacion: "Galpón de las Artes",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2913.962926297213!2d-57.93750896884448!3d-34.93623057536757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e8bce3642945%3A0x5d00411b29bf0f7a!2sEl%20Galp%C3%B3n%20de%20las%20Artes!5e0!3m2!1ses-419!2sar!4v1761847809920!5m2!1ses-419!2sar",
        lat: -34.936763897074606,
        lng: -57.936002737295546,
        ordenFecha: 1109
    },
    {
        id: "gastroocho",
        titulo: "La Noche de las Heladerías",
        categoria: "gastronomia",
        imagenSrc: "imagenes/eventos/gastronomia/nocheheladerias.png",
        descripcion: "Preparate para el evento más dulce del año. Llega a La Plata la 9° edición de La Noche de las Heladerías este jueves 13 de noviembre. Es la excusa perfecta para cortar la semana y clavar ese postre que te merecés. Desde las 19 hs, más de 500 locales de todo el país, incluyendo las principales heladerías artesanales de nuestra ciudad, se suman a la promo más esperada: el clásico 2x1 en el cuarto kilo de helado. La jornada forma parte de la 41° Semana del Auténtico Helado Artesanal, organizada por AFADHYA bajo el lema “El futuro es artesanal”",
        fecha: "13 de Noviembre",
        horario: "19:00hs",
        localidad: "La Plata",
        costo: "Se paga el consumo",
        links: "https://www.afadhya.com.ar",
        ubicacion: "Heladerias adheridas",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104686.28509832387!2d-58.03557052110355!3d-34.92033963057398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62b1f0085a1%3A0xbcfc44f0547312e3!2sLa%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1761880681469!5m2!1ses-419!2sar",
        lat: -34.92104339517099,
        lng: -57.95763625943076,
        ordenFecha: 1113
    },


    // MÚSICA EVENTOS
    {
        id: "musicauno",
        titulo: "Cantá la Posta",
        categoria: "musica",
        imagenSrc: "imagenes/eventos/musica/laposta.jpg",
        descripcion: "El domingo 2/11 la rima vuelve a la calle. Se realizará el segundo encuentro de freestyle de Cantá la posta en Plaza Belgrano. Si tenés ganas de rapear o simplemente disfrutar del ambiente, caé desde las 15 hs que las inscripciones son ahí mismo.\nHost: Krónico\nDJ: Gamvitz",
        fecha: "2 de Noviembre",
        horario: "15:00 hs",
        localidad: "La Plata",
        costo: "Gratis",
        links: "https://www.instagram.com/p/DQM1wY4AIe5",
        ubicacion: "Plaza Belgrano",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4102.501753852486!2d-57.968478923349366!3d-34.91204287384853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7b5dcd71fe5%3A0xe572cc29fbcaf315!2sPlaza%20Belgrano!5e1!3m2!1ses-419!2sar!4v1761622290769!5m2!1ses-419!2sar\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade",
        lat: -34.91216164644384,
        lng: -57.96601129123164,
        ordenFecha: 1102
    },
    {
        id: "musicados",
        titulo: "Festival Rock Favaloro",
        categoria: "musica",
        imagenSrc: "imagenes/eventos/musica/rockfavaloro.jpg",
        descripcion: "El viernes 7 de noviembre, llega una nueva edición del Festival Rock Favaloro, una noche imperdible para los amantes del rock nacional. Tres bandas platenses rendirán homenaje a clásicos inolvidables con toda la energía y sentimiento que las caracteriza. En el escenario se presentarán: \nHiela Sangre (Tributo a La Renga)\nEsquina Libertad (Tributo a Los Piojos)\nRopa Sucia (Tributo a Patricio Rey y sus Redonditos de Ricota)\nPrepárate para vivir una noche llena de clásicos, emoción y mucho rock en vivo. ¡No te la pierdas!",
        fecha: "7 de Noviembre",
        horario: "22:00 hs",
        localidad: "La Plata",
        costo: "$10.000 / 2x1 $17.000",
        links: "https://www.passline.com/eventos/fiesta-rock-favaloro?srsltid=AfmBOoqIrNWj8HCTiyYx0BDzIrv23m-Q_w21BY5AQKg8iLSIQXlJ-Sy9",
        ubicacion: "Teatro René Favaloro",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19512.31060611089!2d-57.93255958208587!3d-34.9229221936384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e71135b3e65d%3A0x84fe2a287bb74c3b!2sTeatro%20Ren%C3%A9%20Favaloro!5e1!3m2!1ses-419!2sar!4v1761622728378!5m2!1ses-419!2sa",
        lat: -34.91861088906394,
        lng: -57.92444861821598,
        ordenFecha: 1107
    },
    {
        id: "musicatres",
        titulo: "El fechón del año en Casa Unclan",
        categoria: "musica",
        imagenSrc: "imagenes/eventos/musica/unclan.jpg",
        descripcion: "Viernes 7 de noviembre, a partir de las 23:59 hs, llega una noche explosiva a Casa Unclan con lo mejor del punk y el rock platense. ¡Traé ropa cómoda y preparate para el pogo!\n\nEn vivo:\nPaltax\nLas Curtis\nLlagas Llagas\nEl Pibe Materia\n\nUna fecha imperdible para quienes viven el rock local con pasión.\nEntradas: $4000 (anticipadas)",
        fecha: "7 de Noviembre",
        horario: "23:59 hs",
        localidad: "La Plata",
        costo: "$4.000",
        links: "https://www.instagram.com/p/DQF2_YmDi0n/?hl=es&img_index=1",
        ubicacion: "Casa Unclan",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4114.818687548948!2d-57.94558028791365!3d-34.9212869727289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7024b9b17ab%3A0x5f49dbc966eee69f!2sMiraflores%20La%20Plata!5e1!3m2!1ses-419!2sar!4v1760675672200!5m2!1ses-419!2sar3",
        lat: -34.921502127411266,
        lng: -57.93584933355954,
        ordenFecha: 1107
    },
    {
        id: "musicacuatro",
        titulo: "Miedo Puro - Lanzamiento de Álbum",
        categoria: "musica",
        imagenSrc: "imagenes/eventos/musica/miedopuro.jpg",
        descripcion: "El sábado 8 de noviembre la banda Miedo Puro se presenta en Ciudad de Gatos para celebrar el lanzamiento de su primer álbum homónimo. Promete una puesta especial preparada exclusivamente para esta fecha, con una experiencia sonora y visual que marca una nueva etapa en la historia del grupo.\n\nUna noche intensa, cargada de energía y emoción, para acompañar a Miedo Puro en el estreno de su esperado debut discográfico.\n\nEntradas anticipadas: disponibles a través de Catpass.",
        fecha: "8 de Noviembre",
        horario: "21:00 hs",
        localidad: "La Plata",
        costo: "Anticipada $6.000",
        links: "https://catpass.net/eventos/miedo-puro-presentac-on-de-disco-08-11-2025-oqB?fbclid=PAZXh0bgNhZW0CMTEAAadTiJTljLx7enD3Z8rBbq4pw8HEIMyn9PxsF_bLscsw1otFzRvopk3O8S4WAA_aem_uXKB8HLEo2SNpC5ga-YuCg",
        ubicacion: "Ciudad de Gatos",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4114.01883016489!2d-57.94527718791314!3d-34.9372362727232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e940a52f3ce9%3A0x52ad6d4397b1b06d!2sDynamo%20Teatro!5e1!3m2!1ses-419!2sar!4v1760672490530!5m2!1ses-419!2sar",
        lat: -34.938633184808225,
        lng: -57.937192206849275,
        ordenFecha: 1108
    },
    {
        id: "musicacinco",
        titulo: "Bestia Bebé y Tobogán Andaluz",
        categoria: "musica",
        imagenSrc: "imagenes/eventos/musica/bestiabb.jpg",
        descripcion: "El viernes 14 Bestia Bebé y Tobogán Andaluz se presentan por primera vez juntos en Ciudad de Gatos. Una noche única donde se unen dos referentes del indie rock argentino, con grandes estribillos, guitarras intensas y todo el pulso del corazón platense.\n\nUna fecha imperdible para quienes viven la escena local y quieren disfrutar del sonido más potente y emotivo de La Plata. Produce: Sifón Producciones.\n\nEntradas: Disponibles a través de Catpass.",
        fecha: "14 de Noviembre",
        horario: "20:00 hs",
        localidad: "La Plata",
        costo: "Anticipada $15.000",
        links: "https://www.instagram.com/p/DPw6409DQqh",
        ubicacion: "Ciudad de Gatos",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4114.818687548948!2d-57.94558028791365!3d-34.9212869727289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7024b9b17ab%3A0x5f49dbc966eee69f!2sMiraflores%20La%20Plata!5e1!3m2!1ses-419!2sar!4v1760675672200!5m2!1ses-419!2sar0",
        lat: -34.93839011304928,
        lng: -57.9377810812267,
        ordenFecha: 1114
    },
    {
        id: "musicaseis",
        titulo: "Chic@s de Oro Vol. 7",
        categoria: "musica",
        imagenSrc: "imagenes/eventos/musica/chic@sdeoro.jpg",
        descripcion: "Casa Unclan presenta una nueva edición del ciclo Chic@s de Oro, donde la música de las chicas y colectivo LGTBIQ+ toma el protagonismo.\n\nEn esta velada de pop, rock y postpunk, se presentarán las bandas Señoras Bien y Japón, en un encuentro que celebra la diversidad, la energía y la escena independiente platense.\n\nAdemás, habrá feria y entradas anticipadas a precios accesibles.\n\nEntradas: disponibles en Passline.",
        fecha: "14 de Noviembre",
        horario: "20:00 hs",
        localidad: "La Plata",
        costo: "$4.000",
        links: "https://www.passline.com/eventos/chics-de-oro-vii-129-en-casa-unclan-la-plata?srsltid=AfmBOoqHVd3hgXVq5z_lxjSt1ibCRCaqIVrtyDhDm8mF I6u_1p1xVAB",
        ubicacion: "Casa Unclan",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4114.818687548948!2d-57.94558028791365!3d-34.9212869727289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7024b9b17ab%3A0x5f49dbc966eee69f!2sMiraflores%20La%20Plata!5e1!3m2!1ses-419!2sar!4v1760675672200!5m2!1ses-419!2sar2",
        lat: -34.921836411612134,
        lng: -57.93575277403612,
        ordenFecha: 1114
    },
       {
    id: "musicasiete",
    titulo: "Tributo Viejas Locas e Intoxicados",
    categoria: "musica",
    imagenSrc: "imagenes/eventos/musica/tributovl.jpg",
    descripcion: "El sábado 29 de noviembre el Teatro Favaloro explota con una noche a puro rock. Llega a La Plata el mejor tributo a Viejas Locas e Intoxicados, para revivir los clásicos de Pity y compañía como si fuera la primera vez.\n\nUna fecha para cantar, poguear y dejarlo todo con la banda que marcó a toda una generación.",
    fecha: "29 de Noviembre",
    horario: "23:50 hs",
    localidad: "La Plata",
    costo: "$11.000",
     links:"https://www.passline.com/eventos/viejas-locas-intoxicados?srsltid=AfmBOooRZSizQ8FRZSllEcCHTNvxtvaAUjh5s2DJqDySWSEjbcPGS1DZ",
    ubicacion: "Teatro Favaloro",
    mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4114.818687548948!2d-57.94558028791365!3d-34.9212869727289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7024b9b17ab%3A0x5f49dbc966eee69f!2sMiraflores%20La%20Plata!5e1!3m2!1ses-419!2sar!4v1760675672200!5m2!1ses-419!2sar3",
    lat: -34.91888868176648,
    lng: -57.92427524688384,
    ordenFecha: 1129
  },
      {
        id: "musicaocho",
        titulo: "Peces Raros en el Hipódromo",
        categoria: "musica",
        imagenSrc: "imagenes/eventos/musica/pecesraros.png",
        descripcion: "El ciclo Noches Capitales trae a La Plata a Peces Raros, una de las bandas más destacadas de la escena indie-electrónica. El show se realizará el sábado 15 de noviembre en el Hipódromo de La Plata, con inicio a las 22:00 hs. La noche contará con un cartel de lujo, incluyendo a Rafael Cerato y el opening act de Celesta -Live-. Una oportunidad única para disfrutar de una de las propuestas más innovadoras del rock argentino en un gran escenario. Las entradas se pueden adquirir a través de Livepass, con opción de pago en 4 cuotas sin interés con Banco Provincia.",
        fecha: "15 de Noviembre",
        horario: "22:00hs",
        localidad: "La Plata",
        costo: "$40.000/$45.000/$50.000",
        links: "https://livepass.com.ar/events/peces-raros-en-hipodromo-de-la-plata",
        ubicacion: "Hipódromo de la Plata",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9255.090319415593!2d-57.94548085800552!3d-34.902219152722694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1762583413724!5m2!1ses-419!2sar",
        lat: -34.899805036029406,
        lng: -57.946785724399604,
        ordenFecha: 1115
    },
    {
        id: "musicanueve",
        titulo: "Abel Pintos: Noches Capitales",
        categoria: "musica",
        imagenSrc: "imagenes/eventos/musica/abelpintos.png",
        descripcion: "La Plata se viste de fiesta para recibir a uno de los artistas más importantes de la música argentina: Abel Pintos. El cantante se presentará en la serie de eventos \"Noches Capitales\" en el Hipódromo de La Plata el próximo viernes 1 de noviembre de 2025. El público tendrá la oportunidad de vivir en vivo sus grandes éxitos, sentir cada palabra y ser parte de una noche única e inolvidable que celebra la música en su máxima expresión. Las entradas para esta esperada fecha ya están disponibles para su compra a través de Livepass.com.ar.",
        fecha: "1 de noviembre",
        horario: "21:00 hs",
        localidad: "La Plata",
        costo: "general $80.000 / Experiencia Capital $200.000",
        links: "https://livepass.com.ar/events/abel-pintos-en-el-hipodromo-de-la-plata",
        ubicacion: "Hipódromo de La Plata",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7782.309546758893!2d-57.9494841676381!3d-34.90499144243565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7561aa4afff%3A0x851c5a0b0233fb92!2sHIPODROMO%20NACIONAL%20ARGENTINO%20DARDO%20ROCHA!5e0!3m2!1ses-419!2sar!4v1761701982135!5m2!1ses-419!2sar",
        lat: -34.90175023907109,
        lng: -57.94216851273608,
        ordenFecha: 1101
    },
   {
        id: "musicadiez",
        titulo: "Semana de la Música en La Plata",
        categoria: "musica",
        imagenSrc: 'imagenes/eventos/musica/semanamusica.png',
        descripcion: "¡La Plata sube el volumen! La ciudad se prepara para celebrar la Semana de la Música organizada por la Municipalidad de La Plata del 15 al 22 de noviembre. La propuesta busca inundar la capital provincial de sonidos, consolidando la escena local con espectáculos programados todos los días y distribuidos por toda la ciudad. La organización invita a estar atentos y ponerse un recordatorio para no perderse la agenda detallada, que se irá conociendo día por día.",       
        fecha: "15 a 22 de Noviembre",
        horario: "Desde las 12:00hs",
        localidad: "La Plata",
        costo: "Gratis",
        links: "https://www.instagram.com/p/DQ41MpAkkA8/?img_index=1",
        ubicacion: "Distintas Sedes",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7780.792211458889!2d-57.95311105237396!3d-34.9209986526099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62e3fc93575%3A0x6ffaec3bf616e000!2sPlaza%20Moreno!5e0!3m2!1ses-419!2sar!4v1762998168652!5m2!1ses-419!2sar",
        lat: -34.921124190323965, 
        lng: -57.95432313913638,
        ordenFecha: 1115
    },
   {
        id: "musicaonce",
        titulo: "Conociendo Rusia",
        categoria: "musica",
        imagenSrc: 'imagenes/eventos/musica/conociendorusia.png',
        descripcion: "¡El pop rock de Mateo Sujatovich vuelve a la ciudad! Conociendo Rusia se presenta en La Plata el viernes 21 de noviembre para un show muy especial: celebrar los 73 años del histórico Teatro Ópera. La fecha se enmarca en un año imparable para el artista, marcado por giras internacionales, colaboraciones y el reciente Premio Gardel a Mejor álbum de pop rock por su disco Jet Love. Será la oportunidad perfecta para repasar en vivo lo más destacado de su discografía en uno de los escenarios más emblemáticos de la capital provincial.",       
        fecha: "21 de Noviembre",
        horario: "20:00 hs",
        localidad: "La Plata",
        costo: "$40.000",
        links: "https://livepass.com.ar/events/conociendo-rusia-en-el-teatro-opera-lp-73-anos-aniversario",
        ubicacion: "Teatro Opera",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.357618625722!2d-57.9496523140606!3d-34.92256702536189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e6242dc3ae2d%3A0x8c2687677217c2d7!2sTeatro%20Opera%20La%20Plata!5e0!3m2!1ses-419!2sar!4v1762998809059!5m2!1ses-419!2sar",
        lat: -34.92274612062787, 
        lng: -57.94699857298587,
        ordenFecha: 1121
    },
   {
        id: "musicadoce",
        titulo: "MTV HITZ",
        categoria: "musica",
        imagenSrc: 'imagenes/eventos/musica/mtvhitz.jpg',
        descripcion: "¡La Plata se prepara para una noche de pura nostalgia y hits! La banda MTV Hitz llega al Teatro Favaloro el próximo 21 de noviembre para un show imperdible. El grupo, conocido por revivir los clásicos que marcaron una era en la televisión musical, promete una noche a puro rock y pop. Será una oportunidad única para corear esas canciones que definieron a una generación en uno de los teatros de la ciudad.",       
        fecha: "21 de Noviembre",
        horario: "21:00 hs",
        localidad: "La Plata",
        costo: "$15.000",
        links: "https://www.passline.com/eventos/mtv-hitz-en-teatro-favaloro-la-plata",
        ubicacion: "Teatro Rene Favaloro",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.513390140999!2d-57.926980623349266!3d-34.9186592742007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e71135b3e65d%3A0x84fe2a287bb74c3b!2sTeatro%20Ren%C3%A9%20Favaloro!5e0!3m2!1ses-419!2sar!4v1762999061252!5m2!1ses-419!2sar",
        lat: -34.91894518514984, 
        lng: -57.92424477011348,
        ordenFecha: 1121
    },
       {
        id: "musicatrece",
        titulo: "El ruido de las nubes en Casa Chicha",
        categoria: "musica",
        imagenSrc: 'imagenes/eventos/musica/ruidonubes.jpg',
        descripcion: "¡La escena local platense suma una nueva fecha! El ruido de las nubes llega a Casa Chicha el sábado 22 de noviembre para una noche imperdible. El espacio cultural de 61 y 15 será el escenario perfecto para disfrutar de su propuesta sonora en un ambiente íntimo.",       
        fecha: "22 de Noviembre",
        horario: "21:00 hs",
        localidad: "La Plata",
        costo: "$10.000",
        links: "https://www.passline.com/eventos/el-ruido-de-las-nubes-2211?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnQO9s1a9zMN_I44MT8rFeHCLbt8wspNjKhTNyd-mDM3ldkjeJsIt91u9QElo_aem_6Bk3e_lUILyk0BVv87Ti-Q",
        ubicacion: "Casa Chicha",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.0905075591168!2d-57.9484103!3d-34.929266999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e9542fb7f4bf%3A0xc207d67ddefdc121!2sCasa%20popular%20Chicha%20Mariani!5e0!3m2!1ses-419!2sar!4v1762999327430!5m2!1ses-419!2sar",
        lat: -34.92923621351071, 
        lng: -57.94843175767244,
        ordenFecha: 1122
    },
     {
        id: "musicacatorce",
        titulo: "Domingo Club IV",
        categoria: "musica",
        imagenSrc: 'imagenes/eventos/musica/domingoclub.jpg',
        descripcion: "¡Tolosa se prepara para una experiencia cultural única! Vuelve Domingo Club, el evento que fusiona música y gastronomía en el entorno alternativo y cálido de los Galpones Ferroviarios. Pensado como un espacio para el encuentro y el disfrute, esta cuarta edición propone un diálogo perfecto entre el buen comer y la buena música. El lineup de esta fecha contará con las presentaciones en vivo de Mamba Suite y Juan Baro, acompañados de diversas opciones gastronómicas y de entretenimiento.",       
        fecha: "23 de Noviembre",
        horario: "20:00 hs",
        localidad: "Tolosa",
        costo: "$5.000",
        links: "https://www.passline.com/eventos/domingo-club-iv?srsltid=AfmBOooAfmcAPkb1EgkyreP5v3166PvKLleAGp0AEvgAF3rNOIjCV2p_",
        ubicacion: "Galpones Ferroviarios",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13090.524817072663!2d-57.9709704!3d-34.8906061!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7066ac5e625%3A0x217dfab3e8d3c944!2sGalp%C3%B3n%20de%20Tolosa%20-%20FerroClub!5e0!3m2!1ses-419!2sar!4v1762999501342!5m2!1ses-419!2sar",
        lat: -34.890236487359935, 
        lng: -57.96994043172299,
        ordenFecha: 1123
    },
     {
        id: "musicaquince",
        titulo: "Sonido Trasnoche #2",
        categoria: "musica",
        imagenSrc: 'imagenes/eventos/musica/sonidotrasnoche.jpeg',
        descripcion: "¡Vuelve la fiesta a Casa Unclan! La productora Sonido Trasnoche presenta su segunda edición, un festival que promete extenderse hasta el amanecer. El viernes 5 de diciembre, el espacio cultural de calle 5 será el epicentro de un line-up potente que incluye a DE PARDELAS, MUJERCITAS TERROR, REVISTAS, CONTINENTAL CLUB, (B)EVA y DROGADOPE. Una jornada imperdible para la escena musical platense.",       
        fecha: "5 de Diciembre",
        horario: "20:00 hs",
        localidad: "La Plata",
        costo: "desde $8.000",
        links: "https://centralticket.net/event/7456?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnkrs1_ZsgEq-B7Pnq1BvBZM9HFYBgdnbUVUmlJcSm6hgPYutjYCXSIVE8rlM_aem_NBoNWIDh0M_3EkN2cbaTzg",
        ubicacion: "Casa Unclan",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2313.2218467896687!2d-57.936892939665555!3d-34.92176203601553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e61efc852db1%3A0xf51745ae717ce936!2sCasa%20Unclan!5e0!3m2!1ses-419!2sar!4v1762999816066!5m2!1ses-419!2sar",
        lat: -34.92171538316843,
        lng: -57.93520116514122, 
        ordenFecha: 1205
    },
     {
        id: "musicadieciseis",
        titulo: "FAZZINI en La Plata",
        categoria: "musica",
        imagenSrc: 'imagenes/eventos/musica/fazzini.jpg',
        descripcion: "¡La música en vivo sigue sonando en la ciudad! FAZZINI se presenta en La Plata el próximo viernes 12 de diciembre. El escenario elegido es Psiquika Teatro, que se prepara para recibir al artista y su propuesta musical en una noche imperdible.",       
        fecha: "12 de Diciembre",
        horario: "21:00 hs",
        localidad: "La Plata",
        costo: "Preventa $15.000",
        links: "https://www.passline.com/eventos/fazzini-en-la-plata?srsltid=AfmBOopmyEaO7tnrJFkVM-gkqn2VntGc-WkMA1ABx8ACv8sl6Ex473pC",
        ubicacion: "Psiquika Teatro",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d817.8117153280332!2d-57.94908413035088!3d-34.92534529873242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e6264f6fe9d3%3A0x1d68ba355fc16692!2sC.%2059%20886%2C%20B1900BTJ%20La%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1763000264897!5m2!1ses-419!2sa",
        lat: -34.92535079658134, 
        lng: -57.948499408777,
        ordenFecha: 1212
    },
]


/**
 * @param {string} url 
 * @param {string} elementId 
 * @returns {Promise<void>}
 */
function loadHtml(url, elementId) {
    const container = document.getElementById(elementId);
    if (!container) return Promise.resolve();

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                // Si la URL no es accesible (ej: error 404), lanzamos un error
                throw new Error(`Error al cargar ${url}: ${response.statusText}. Revisa la ruta.`);
            }
            return response.text();
        })
        .then(html => {
            container.innerHTML = html;
        })
        .catch(error => {
            console.error(`Fallo al cargar ${url}:`, error);
        });
}

/**
 * @param {string} email 
 * @returns {boolean}
 */
function isValidEmail(email) {

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

function cargarEventoDetalle() {
    const params = new URLSearchParams(window.location.search);
    const eventoId = params.get('id');

    const tituloElement = document.getElementById('evento-titulo');
    
    if (!eventoId || !tituloElement) return; 

    const evento = datosEventos.find(e => e.id === eventoId);

    if (!evento) {
        tituloElement.textContent = 'Error: Evento no encontrado.';
        return;
    }

    document.title = evento.titulo;
    document.getElementById('evento-titulo').textContent = evento.titulo;
    document.getElementById('evento-descripcion').textContent = evento.descripcion;
    document.getElementById('evento-img').src = evento.imagenSrc;
    document.getElementById('evento-img').alt = evento.titulo;

    document.getElementById('mini-mapa').src = evento.mapaEmbedSrc;

    document.getElementById('detalle-fecha').textContent = evento.fecha;
    document.getElementById('detalle-horario').textContent = evento.horario;
    document.getElementById('detalle-localidad').textContent = evento.localidad;
    document.getElementById('detalle-ubicacion').textContent = evento.ubicacion;
    document.getElementById('detalle-costo').textContent = evento.costo;
    // --- INSERCIÓN DEL LINK DE ENTRADAS AQUÍ ---
const linksP = document.getElementById('p-links'); // Asegúrate de que este ID coincida con tu HTML
const textoEnlace = "<strong>Más info & Venta entradas</strong>"; // El texto que quieres que sea clicable
    
if (linksP && evento.links) {
    // Creamos el enlace <a> que abre en una nueva pestaña (target="_blank")
    const linkHTML = `
        <a href="${evento.links}" target="_blank" class="enlace-entradas">
            ${textoEnlace}
        </a>
    `;
    
    // Reemplazamos el contenido del <p> con el enlace
    linksP.innerHTML = linkHTML;
} else if (linksP) {
    // Si no hay enlace externo, mostramos el texto sin enlace
    linksP.innerHTML = `${textoEnlace} <span class="no-link-msg">Ver detalles en descripción.</span>`;
}
    cargarEventosDestacados(eventoId);
}


function getRandomEvents(allEvents, currentEventId, count = 3) {
    const availableEvents = allEvents.filter(e => 
        e.titulo.trim() !== 'Evento Pendiente' && e.id !== currentEventId
    );
    
    if (availableEvents.length <= count) {
        return availableEvents;
    }

    const randomEvents = [];
    const usedIndices = new Set();

    while (randomEvents.length < count) {
        const randomIndex = Math.floor(Math.random() * availableEvents.length);
        
        if (!usedIndices.has(randomIndex)) {
            randomEvents.push(availableEvents[randomIndex]);
            usedIndices.add(randomIndex);
        }
    }

    return randomEvents;
}

function cargarEventosDestacados(currentEventId) {
    const contenedor = document.getElementById('destacados-contenedor'); 
    if (!contenedor) return;

    const eventosDestacados = getRandomEvents(datosEventos, currentEventId, 3);

    let htmlContent = '';
    eventosDestacados.forEach(evento => {
        htmlContent += `
            <div class="destacado-tarjeta">
                <a href="eventos.html?id=${evento.id}"> 
                    <img src="${evento.imagenSrc}" alt="${evento.titulo}">
                </a>
            </div>
        `;
    });

    contenedor.innerHTML = htmlContent;
}


function cargarEventosDeCategoria(categoria) {
    const contenedorBase = document.getElementById('contenedor-eventos');
    const titulo = document.getElementById('titulo-categoria');
    
    if (!contenedorBase || !titulo) {
        console.error("Contenedores de eventos o título no encontrados.");
        return;
    }

    if (!categoria) {
        titulo.textContent = 'selecciona una categoría';
        contenedorBase.innerHTML = '<p style="text-align: center; margin-top: 50px;">No se especificó ninguna categoría. Usa el menú de navegación para seleccionar una sección.</p>';
        return;
    }

    const categoriaLower = categoria.toLowerCase();
    const eventosFiltrados = datosEventos.filter(e => 
        e.categoria && e.categoria.toLowerCase() === categoriaLower
    );
    
    let nombreFormateado = categoriaLower;
    
    if (categoriaLower === 'artecultura') {
        nombreFormateado = 'arte y cultura';
    } 

    titulo.textContent = `sobre ${nombreFormateado}`; 

    if (eventosFiltrados.length === 0) {
        contenedorBase.innerHTML = '<p style="text-align: center; margin-top: 50px;">No hay eventos disponibles para esta categoría en este momento.</p>';
        return;
    }

    eventosFiltrados.sort((a, b) => {
    // Ordena de forma ascendente (el evento con menor ordenFecha va primero)
    return a.ordenFecha - b.ordenFecha; 
});
    // INICIO DE LA MODIFICACIÓN
    let contenidoFinal = ''; 

    eventosFiltrados.forEach((evento) => {
        const tarjetaHtml = `
            <div class="evento-tarjeta">
                <a href="eventos.html?id=${evento.id}">
                    <img src="${evento.imagenSrc}" alt="${evento.titulo}">
                </a> 
                <div class="logoArt"> 
                    <h2>${evento.titulo}</h2>
                    <p>${evento.fecha}</p>
                </div>
            </div>
        `;
        
        contenidoFinal += tarjetaHtml; // Añade la tarjeta directamente al contenido final
    });
    
    contenedorBase.innerHTML = contenidoFinal;
} 

function generarEventosMapa() {
    return datosEventos
        .filter(evento => evento.lat && evento.lng && evento.titulo.trim() !== 'Evento Pendiente')
        .map(evento => ({
            coords: [evento.lat, evento.lng], 
            titulo: evento.titulo,
            descripcion: evento.categoria.charAt(0).toUpperCase() + evento.categoria.slice(1).replace('cultura', ' y Cultura'), // Formatea la categoría
            url: `pagina articulos/eventos.html?id=${evento.id}` // Asegúrate de que esta ruta sea correcta en tu entorno
        }));
}


document.addEventListener('DOMContentLoaded', function() {

    Promise.all([
        
        loadHtml('header.html', 'header-container'), 
        loadHtml('footer.html', 'pie-contenedor'),
    ])
    .then(() => {

        const formNewsletter = document.getElementById('newsletter-form');
        
        if (formNewsletter) {
            formNewsletter.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const emailInput = formNewsletter.querySelector('input[name="entry.1452529070"]');
                const emailValue = emailInput ? emailInput.value : '';
                
                // VALIDACIÓN DEL EMAIL
                if (!isValidEmail(emailValue)) {
                    alert('❌ Por favor, ingresa un formato de correo electrónico válido (ej: nombre@dominio.com).');
                    if (emailInput) {
                        emailInput.focus();
                    }
                    return; 
                } 
                
                // ENVÍO SILENCIOSO
                const iframe = document.createElement('iframe');
                iframe.name = 'hidden_iframe_newsletter'; 
                iframe.style.display = 'none';
                document.body.appendChild(iframe);
                formNewsletter.target = 'hidden_iframe_newsletter';

                iframe.onload = function() {
                    alert('✅ ¡Gracias por suscribirte!');
                    formNewsletter.reset();
                    iframe.remove();
                };
                
                formNewsletter.submit(); 
            });
        }
        // 3. LÓGICA DEL MODAL DE EVENTOS (Abrir y Cerrar 'Tu Evento')
        const modal = document.getElementById('modal-evento');
        const btnAbrir = document.getElementById('abrir-modal-evento'); 
        const btnCerrar = document.getElementById('cerrar-modal');
        const formEvento = document.getElementById('form-evento');

        if (modal && btnCerrar) {
            
            function openModal() {
                modal.classList.remove('modal-hidden'); 
                modal.style.display = 'flex';
            }

            function closeModal() {
                modal.classList.add('modal-hidden');
                modal.style.display = 'none';
            }
            
            if (btnAbrir) {
                btnAbrir.addEventListener('click', function(e) {
                    e.preventDefault();
                    openModal();
                });
            } else {
                 console.warn("Elemento 'abrir-modal-evento' no encontrado. Asegúrate que esté en header.html.");
            }

            btnCerrar.addEventListener('click', closeModal);
            
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    closeModal();
                }
            });
            
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    closeModal();
                }
            });
            
            if (formEvento) {
                formEvento.addEventListener('submit', function(e) {
                    e.preventDefault(); 
                    
                    const iframe = document.createElement('iframe');
                    iframe.name = 'hidden_iframe_evento';
                    iframe.style.display = 'none';
                    
                    document.body.appendChild(iframe);
                    formEvento.target = 'hidden_iframe_evento';
                    
                    iframe.onload = function() {
                        alert('🎉 ¡Propuesta enviada con éxito! Nos pondremos en contacto pronto.');
                        formEvento.reset();
                        iframe.remove();
                        
                        closeModal();
                    };
                    
                    formEvento.submit();
                });
            }
        }


        // ----------------------------------------------------------
        // 5. LÓGICA DEL MODAL 'QUIÉNES SOMOS' 
        // ----------------------------------------------------------
        const modalQuienesSomos = document.getElementById('modal-quienes-somos');
        const abrirModalQuienesSomos = document.getElementById('abrir-modal-quienes-somos');
        const cerrarModalQuienesSomos = document.getElementById('cerrar-modal-quienes-somos');

        if (abrirModalQuienesSomos) {
            abrirModalQuienesSomos.addEventListener('click', (e) => {
                e.preventDefault();
                if (modalQuienesSomos) {
                    modalQuienesSomos.classList.remove('modal-hidden');
                    modalQuienesSomos.style.display = 'flex';
                }
            });
        }

        if (cerrarModalQuienesSomos) {
            cerrarModalQuienesSomos.addEventListener('click', () => {
                if (modalQuienesSomos) {
                    modalQuienesSomos.classList.add('modal-hidden');
                    modalQuienesSomos.style.display = 'none';
                }
            });
        }
        
        if (modalQuienesSomos) {
            modalQuienesSomos.addEventListener('click', (e) => {
                if (e.target === modalQuienesSomos) {
                    modalQuienesSomos.classList.add('modal-hidden');
                    modalQuienesSomos.style.display = 'none';
                }
            });
        }

    }) 
    .catch(error => {
        console.error("Fallo crítico en la carga inicial de Header/Footer:", error);
    }); 

    
    const currentPath = window.location.pathname;
    const params = new URLSearchParams(window.location.search);
    const categoriaURL = params.get('cat'); 
    
    if (currentPath.includes('eventos.html')) {
        cargarEventoDetalle();
    }

    if (currentPath.includes('seccion-eventos.html')) {
        cargarEventosDeCategoria(categoriaURL);
    }

    const bannerImg = document.getElementById('banner-rotativo');
    const images = [
        "pagina articulos/imagenes/banner y background/evento.png",
        "pagina articulos/imagenes/banner y background/musica.png",
        "pagina articulos/imagenes/banner y background/arte.png",
        "pagina articulos/imagenes/banner y background/gastronomia.png"
    ];

    let currentIndex = 0;
    const intervalTime = 5000;
    const transitionDuration = 700;

    if (bannerImg && images.length > 1) {
        bannerImg.src = images[currentIndex];
        bannerImg.classList.add('fade-in'); 

        function rotateBanner() {
            bannerImg.classList.remove('fade-in');
            bannerImg.classList.add('fade-out');

            setTimeout(() => {
                currentIndex = (currentIndex + 1) % images.length;
                bannerImg.src = images[currentIndex];

                bannerImg.classList.remove('fade-out');
                bannerImg.classList.add('fade-in');
            }, transitionDuration); 
        }

        setInterval(rotateBanner, intervalTime);
    }
    
    const mapaDiv = document.getElementById('mapaEventos');

    if (mapaDiv) {
        if (typeof L === 'undefined') {
            console.error("❌ ERROR: El objeto 'L' (Leaflet) no está definido. Revisa si leaflet.js está bien enlazado en el HTML.");
            mapaDiv.innerHTML = "<p style='text-align:center; padding: 20px; color: #2D3A69;'>⚠️ Error al cargar el mapa. Asegúrate de incluir el script de Leaflet en tu HTML.</p>";
            return; 
        }
        
        const laPlataCoords = [-34.9209, -57.9545];
        const zoomLevel = 11; 

        // 1. Inicializar el mapa
        const mapa = L.map('mapaEventos').setView(laPlataCoords, zoomLevel);

        // 2. Añadir el 'Tile Layer' (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
            attribution: '© OpenStreetMap contributors'
        }).addTo(mapa);
        

        const eventosMapa = generarEventosMapa();

        eventosMapa.forEach(evento => {
            const popupContent = `
                <div style="font-family: 'Archivo', sans-serif;">
                    <h3 style="margin: 0 0 5px 0; font-size: 1.1rem;">
                        <a href="${evento.url}" target="_blank" style="color: #2D3A69; text-decoration: none; font-weight: 800;">
                            ${evento.titulo}
                        </a>
                    </h3>
                    <p style="margin: 0; font-size: 0.9rem;">${evento.descripcion}</p>
                    <a href="${evento.url}" target="_blank" style="color: #000000; display: block; margin-top: 5px; text-decoration: underline; font-weight: 600;">Ver Evento Completo</a>
                </div>
            `;
            
            L.marker(evento.coords)
                .addTo(mapa)
                .bindPopup(popupContent); 
        });
    }

});