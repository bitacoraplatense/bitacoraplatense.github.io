
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
     {
        id: "artcult-canto-ba",
        titulo: "CANTO BONAERENSE EN LA PLATA",
        categoria: "artecultura",
        imagenSrc: "imagenes/eventos/ayc/cantoba.png", // Asumo la ruta 'imagenes/eventos/ayc/'
        descripcion: "El recorrido de Canto Bonaerense por los municipios de la Provincia suma una nueva parada en la capital. Encuentro para compartir y potenciar las voces de nuestra Provincia.",
        fecha: "12/12 al 14/12",
        horario: "Ver detalles (días y horarios variados)",
        localidad: "La Plata (Gonnet)",
        costo: "Gratis",
        links: "", // No se proporcionó un enlace específico, se puede añadir después.
        ubicacion: "Anfiteatro de la República de los Niños",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9770.803550300898!2d-58.01071422237816!3d-34.884947846093276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2dded89c33c53%3A0x3bbaa42c765db4d4!2sRep%C3%BAblica%20de%20los%20Ni%C3%B1os!5e1!3m2!1ses-419!2sar!4v1764914929784!5m2!1ses-419!2sar",
        lat: -34.88628749311291,
        lng: -58.01945400533273,
        ordenFecha: 1212 // Asignado para ser posterior al evento anterior
    },
    {
        id: "artcult-subsuelo",
        titulo: "SUBSUELO: estadios previos de una piel suicida",
        categoria: "artecultura",
        imagenSrc: "imagenes/eventos/ayc/subsuelo.png", // Asumo la ruta 'imagenes/eventos/ayc/'
        descripcion: "Proyecto de Producción Coreografía en Tango. Idea, Dirección y Coreografía: Natacha Flores. ¡Capacidad Limitada!",
        fecha: "Jueves 4 de Diciembre",
        horario: "20:00 hs",
        localidad: "La Plata",
        costo: "$6000",
        links: "https://www.instagram.com/edta.laplata/", // No se proporcionó un enlace específico.
        ubicacion: "Pasaje Dardo Rocha - SALA B",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1726.6424792029043!2d-57.94990720450376!3d-34.91385869041794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7005d73befd%3A0x1f217024fca3f51f!2sEx%20Estaci%C3%B3n%20La%20Plata%20FCO!5e1!3m2!1ses-419!2sar!4v1764915097792!5m2!1ses-419!2sar",
        lat: -34.914154611081514,
        lng: -57.94936814961668,
        ordenFecha: 1204 // Asignado para ser posterior al evento anterior (Ajustar si el 4 de diciembre es antes del 14 de noviembre)
    },
    {
        id: "artcult-nocheferias",
        titulo: "La Noche de las Ferias (Edición Navidad)",
        categoria: "artecultura",
        imagenSrc: "imagenes/eventos/ayc/nocheferias.png", // Asumo la ruta 'imagenes/eventos/ayc/'
        descripcion: "Un clásico de la ciudad que invita a encontrar regalos de Navidad. Emprendimientos, artistas, música, intervenciones y gastronomía.",
        fecha: "20 de Diciembre",
        horario: "18:00 a 23:00 hs",
        localidad: "La Plata (Meridiano V)",
        costo: "Gratis", // Asumo que la entrada es gratuita
        links: "https://www.instagram.com/lanochedelasferias/?hl=es", // No se proporcionó un enlace específico.
        ubicacion: "Playón de 17 y 71 (Estación Provincial)",
        mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1776.6772167066083!2d-57.93954669975954!3d-34.93970416505377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s17%20y%2071%20la%20plata!5e1!3m2!1ses-419!2sar!4v1764917140869!5m2!1ses-419!2sar",
        lat: -34.93962042849631,
        lng: -57.93917757334473,
        ordenFecha: 1220 // Diciembre (12) + Día (20) = 1220
    },
{
    id: "artcult-entramadas",
    titulo: "Feria Entramadas #37",
    categoria: "artecultura",
    imagenSrc: "imagenes/eventos/ayc/entramadas.png",
    descripcion: "El encuentro que conquistó a La Plata vuelve con más de un centenar de emprendedores, artistas y diseñadores. Además, contará con propuestas gastronómicas de Rober Moreno, Sizglú y Fachada. Entrada libre y gratuita. (Atención: se reprograma al 21/12 por lluvia).",
    fecha: "Domingo 14 de Diciembre",
    horario: "16:00 a 20:00 hs",
    localidad: "La Plata",
    costo: "Gratis (Se sugiere donación)",
    links: "https://www.instagram.com/p/DRniONhkS9L/?img_index=1",
    ubicacion: "Planetario de La Plata, Paseo del Bosque",
    mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4106.902583157062!2d-57.93714704624763!3d-34.90923010304652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e6115bf4f945%3A0x1c0e65c064600504!2sPlanetario%20Universidad%20Nacional%20de%20La%20Plata!5e1!3m2!1ses-419!2sar!4v1764919187028!5m2!1ses-419!2sar",
    lat: -34.90908053205072,
    lng: -57.9324102654781,
    ordenFecha: 1214 // Diciembre (12) + Día (14) = 1214
},
    //GASTRONOMIA EVENTOS

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
{
    id: "gastro-birra-berisso",
    titulo: "FIESTA DE LA BIRRA DE BERISSO",
    categoria: "gastronomia",
    imagenSrc: "imagenes/eventos/gastronomia/cervezaberisso.png",
    descripcion: "Tres días con la mejor cerveza artesanal, propuestas gastronómicas y música en vivo en el Parque Cívico. Artistas destacados: Kapanga, Los Charros, Uriel Lozano y más. Acceso libre y gratuito.",
    fecha: "5, 6 & 7 de Diciembre",
    horario: "Consultar (Tres días de duración)",
    localidad: "Berisso",
    costo: "Gratis",
    links: "https://www.instagram.com/cervecerosdeberisso/?hl=es",
    ubicacion: "Parque Cívico de Berisso",
    mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4108.959419348162!2d-57.88565818792161!3d-34.868089572747564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e57b73359a5f%3A0x7fcb422cfb819a66!2sParque%20C%C3%ADvico%20de%20Berisso!5e1!3m2!1ses-419!2sar!4v1764916735920!5m2!1ses-419!2sar",
    lat: -34.86771985884191,
    lng: -57.88329247974565,
    ordenFecha: 1205 // Diciembre (12) + Día (05) = 1205
},
{
    id: "gastro-compe-astor",
    titulo: "Última Compe del Año: Café y Birra en Astor",
    categoria: "gastronomia",
    imagenSrc: "imagenes/eventos/gastronomia/astor.png",
    descripcion: "Última competencia del año en el tap room de Astor Birra en el barrio de Tolosa. Una gran fiesta para despedir el año que junta lo mejor del café y la cerveza. ¡Lxs esperamos a todxs!",
    fecha: " 21 de Diciembre",
    horario: "Consultar",
    localidad: "La Plata (Tolosa)",
    costo: "Consultar",
    links: "https://www.instagram.com/astorbirra/?hl=es",
    ubicacion: "Astor Birra Tap Room",
    mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4108.02873149756!2d-57.976662600000004!3d-34.8867103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e70e50a2f5ed%3A0xd38f778b15bf1925!2sAstor%20Tap%20Room!5e1!3m2!1ses-419!2sar!4v1764918514475!5m2!1ses-419!2sar",
    lat: -34.88675430348032,
    lng: -57.976582133735505,
    ordenFecha: 1221 // Diciembre (12) + Día (21) = 1221
},
{
    id: "gastro-feria-pulsar", // ID ajustado para reflejar la categoría
    titulo: "Feria Prenavideña en Café Pulsar",
    categoria: "gastronomia", // <-- CORREGIDO A GASTRONOMÍA
    imagenSrc: "imagenes/eventos/gastronomia/exporaca.png", // Ruta ajustada a la subcarpeta 'gastro'
    descripcion: "Edición especial para arrancar diciembre con magia, regalos y creatividad local. Una jornada ideal para encontrarte con propuestas únicas y regalos navideños.",
    fecha: "Sábado 6 de Diciembre",
    horario: "15:00 a 19:00 hs",
    localidad: "La Plata",
    costo: "Gratis",
    links: "https://www.instagram.com/feriaexporaca/", 
    ubicacion: "Casa Pulsar 58 e/5 y 6",
    mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4106.47961645845!2d-57.94448218791987!3d-34.91768497273006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e623205f737f%3A0xd5f815da40a72e0b!2sCasa%20Pulsar!5e1!3m2!1ses-419!2sar!4v1764918830468!5m2!1ses-419!2sar",
    lat: -34.9176937701093,
    lng: -57.94186971653281,
    ordenFecha: 1206
},
{
    id: "gastro-fiesta-5aniv",
    titulo: "5 AÑOS Vermú Interferencia",
    categoria: "gastronomia",
    imagenSrc: "imagenes/eventos/gastronomia/vermuint.png", // <--- Imagen placeholder
    descripcion: "Celebración del 5to aniversario del bar con una gran joda en el club CRISFA de Meridiano V. Habrá Patio Gastronómico, música en vivo con @camionerorocanrol, @laika.perra.rusa y más, además de feria de diseño e intervención literaria y pintura.",
    fecha: "Jueves 11 de Diciembre",
    horario: "Desde las 18:00 hs", // Hora extraída del Passline
    localidad: "La Plata (Meridiano V)",
    costo: "$17.000 (Entradas por Passline)",
    links: "https://www.passline.com/eventos/vermu-interferencia",
    ubicacion: "Club CRISFA, 71 y 14",
    mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d431.53951874420005!2d-57.936352822672866!3d-34.93688195044147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sar!4v1764920452239!5m2!1ses-419!2sar",
    lat: -34.936783,
    lng: -57.936250,
    ordenFecha: 1211 // Diciembre (12) + Día (11) = 1211
},
    // MÚSICA EVENTOS
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
    {
    id: "artcult-muta-sessions",
    titulo: "MUTA SESSIONS - S001",
    categoria: "musica",
    imagenSrc: "imagenes/eventos/musica/muta.png",
    descripcion: "Sesiones acústicas junto a @zennonn_ y @elpurre. Con la mejor cerveza y gastronomía de Astor Birra. ¡Incluye una consumición con la entrada!",
    fecha: "Domingo 14 de Diciembre",
    horario: "19:00 hs",
    localidad: "La Plata (Tolosa)",
    costo: "Entradas por Passline (Incluye consumición)",
    links: "https://www.passline.com/eventos/muta-sessions-s001-451717?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnKMwt0n3RZN3uD5jaNODWIUZZFKFj59_wl-uxeNNHfGfS0RWFyJSLYDW69a4_aem_2IP7VqJOgncw8JFd2lYFJw",
    ubicacion: "Astor Tap Room",
    mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4108.028736343141!2d-57.98152814625283!3d-34.886710203074706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e70e50a2f5ed%3A0xd38f778b15bf1925!2sAstor%20Tap%20Room!5e1!3m2!1ses-419!2sar!4v1764919930964!5m2!1ses-419!2sar",
    lat: -34.88664859816259,
    lng: -57.97657678877798,
    ordenFecha: 1214 // Diciembre (12) + Día (14) = 1214
},
{
    id: "musica-popu-latino",
    titulo: "MÚSICA POPULAR LATINOAMERICANA",
    categoria: "musica",
    imagenSrc: "imagenes/eventos/musica/musicapopu.jpeg",
    descripcion: "Fernando Rossini, Daniel Chappet y Simón Marziali se presentan en un formato que amalgama sus particularidades, logrando una sonoridad versátil y orgánica en función de la música popular latinoamericana.",
    fecha: "Viernes 5 de Diciembre",
    horario: "20:00 hs",
    localidad: "La Plata",
    costo: "A la gorra",
    links: "https://estacionprovincial.com.ar/#!/agenda",
    ubicacion: "Playón (Estación Provincial)",
    mapaEmbedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4105.376474073765!2d-57.94162738791903!3d-34.93972777272244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e8961daea89b%3A0x2646eda88016126c!2sCentro%20Cultural%20Estaci%C3%B3n%20Provincial!5e1!3m2!1ses-419!2sar!4v1764920175183!5m2!1ses-419!2sar",
    lat: -34.939816,
    lng: -57.938554,
    ordenFecha: 1205 // Diciembre (12) + Día (05) = 1205
}
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