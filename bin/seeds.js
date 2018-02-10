const mongoose = require('mongoose');
const Plan = require('../models/plan.model');

require('../config/db.config');

const plans = [{
  title: 'Salt Room: Vacuna Natural para los catarros',
  description: 'Aubicado en la zona de Argüelles, en un edificio protegido por la antigüedad y belleza de su fachada, se encuentra este espacio inspirado en las cuevas de sal de Polonia, donde tuvo origen el tratamiento de la haloterapia, basado en la ausencia de problemas respiratorios de los mineros que trabajaban en las minas de sal de Wieliczka, lo que llevó a médicos e investigadores a la conclusión de que el beneficio provenía del ambiente salino que respiraban los mineros.',
  imgUrl: 'http://www.saltroommadrid.com/images/sala01.jpg',
  // createdBy: 'Beginner',
  sunny: false,
  price: 22,
  duration: 100,
  days:'1/2/3/4/5/6',
  startTime: "10:00",
  endTime: "18:00",
  startPosition: "{40.435277, -3.710721}",
  endPosition: "{40.435277, -3.710721}"
}, {
  title: 'La Gatoteca, casa de acogida para gatos, con acceso libre',
  description: 'Acércate a la Gatoteca para conocer a sus habitantes, descubrir todas las actividades que ofrecen y, quién sabe, tal vez surja una relación muy especial con alguno de los gatos… ¿Puede haber algo mejor que la compañía y el cariño de una mascota durmiendo junto a ti en el sofá?',
  imgUrl: 'https://lh3.googleusercontent.com/proxy/GA3cv0n0UgZe2fyughVJizZZQ7Nh_FnTWkeSCiXKbZLdU45bj7MnTL51yMHBviCspO6LKWhMguNmIu-jBp-Lb-dJ6T7EcVMqwFq0D1_1IbZrgMiKFjqFklsHKQYfImTECZ8uM3LwtqxUj4CXyyxy1oPSZ1ufsBIN6Ee_O2LOw4Z4qZ11R5dGdkg9yubsD2l8IPEeCZamaw7D3Sv7zIoIpTbpOZmqE8NwRSrwksYREN1dfEn7C9UDtMiHJYEiVuWPftG3TPiI8Y379sC6k7zEpSF6EvkCNQEuk8S_LVTnxtJwxD6njJzKYiaL7ZREQA9-oucUfVcmVX3sXmEfpSaZ3CE=w1200-h630-p-k-no-nu',
  // createdBy: 'Beginner',
  sunny: false,
  price: 10,
  duration: 120,
  days:'1/2/3/4/5',
  startTime: "12:00",
  endTime: "18:00",
  startPosition: "{40.407408, -3.696279}",
  endPosition: "{40.407408, -3.696279}"
}, {
  title: 'Copas por malasaña',
  description: 'La Vía Láctea es otro de los históricos de la zona. En su día fue un templo de la modernidad y hoy todavía tiene días de grandes llenos. Abre todos los días a las 20h, en el 18 de Velarde.  El Diplodocus, en el 31 de Manuela Malasaña, se llenaba hasta la bandera en los años 80. El último día que pasamos por allí seguía ofreciendo su Leche de Brontosaurio.  El Palentino lleva mucho tiempo en el barrio, en el 12 de Pez. Pero en marzo de 2017 se popularizó aún más por ser el escenario de la película El Bar, de Alex de la Iglesia..',
  imgUrl: 'http://3.bp.blogspot.com/-3IS8Zzzphic/UVIsPYlDlsI/AAAAAAAAAFU/Stm_KzyrQjE/s1600/plaza_dos_de_mayo.jpg',
  // createdBy: 'Beginner',
  sunny: false,
  price: 3,
  duration: 100,
  days:'1/2/3/4/5/6/7',
  startTime: "19:00",
  endTime: "3 :00",
  startPosition: "{40.427777, -3.701890}",
  endPosition: "{40.420238, -3.703017}"
}, {
  title: 'El Rey León el musical',
  description: 'Gracias al genio, visión artística y creativa de su directora, Julie Taymor, el género musical da un paso adelante. Con su sorprendente y colorida puesta en escena, EL REY LEÓN transporta al espectador al exotismo africano, con evocadoras músicas, constituyendo un nuevo hito en el mundo del espectáculo, un punto de inflexión en el diseño artístico, y en general, en el género musical, que a nadie deja indiferente. Un genial equipo creativo para un musical inolvidable.',
  imgUrl: 'http://www.elcorreoextremadura.com/imagenes/noticias_regionales/noticia_27077.jpg',
  // createdBy: 'Beginner',
  sunny: false,
  price: 44,
  duration: 120,
  days:'2/3/4/5/6/7',
  startTime: "22:00",
  endTime: "22:00",
  startPosition: "{40.421549,-3.7089918}",
  endPosition: "{40.421549,-3.7089918}"
}, {
  title: 'Entrada a la excursión por el estadio Santiago Bernabéu',
  description: 'Visite el Estadio Santiago Bernabéu en Madrid con una entrada, y explore el emblemático estadio del club de fútbol Real Madrid a su propio ritmo. Dentro del estadio no se puede perder el palco presidencial, la sala de trofeos y el túnel de los vestuarios donde los jugadores caminan victoriosos o agachan la cabeza de vergüenza. Conozca la historia del estadio y el club en las grandes pantallas junto al terreno de juego y en las exhibiciones ',
  imgUrl: 'https://images.musement.com/default/0001/24/bernabeu-stadium-tickets-and-tour_header-23614.jpeg?w=600&h=315&crop=edges',
  // createdBy: 'Beginner',
  sunny: true,
  price: 25,
  duration: 100,
  days:'1/2/3/4/5/6/7',
  startTime: "10:00",
  endTime: "19:00",
  startPosition: "{40.4523663,-3.6897446}",
  endPosition: "{40.4523663,-3.6897446}"
}, {
  title: 'Madrid Wax Museum Admission Ticket',
  description: 'The Wax Museum is located in the center of Madrid, in what is called the "golden mile of museums", since nearby is placed the Archeological Museum, and following the Paseo del Prado, we find the Prado Museum, the Thyssen Museum or Reina Sofia Museum. ',
  imgUrl: 'https://ep01.epimg.net/verne/imagenes/2015/03/05/articulo/1425549987_841133_1425571033_noticia_normal.jpg',
  // createdBy: 'Beginner',
  sunny: false,
  price: 19,
  duration: 90,
  days:'1/2/3/4/5/6',
  startTime: "10:00",
  endTime: "20:00",
  startPosition: "{40.4249622,-3.6935239}",
  endPosition: "{40.4249622,-3.6935239}"
}, {
  title: 'VIP de Viator: Acceso a primera hora al Museo del Prado con el Museo Reina Sofía al final',
  description: 'Disfrute del Museo del Prado antes de que se abran las puertas al público en este tour de 4 horas en Madrid, una oferta VIP de Viator que no está disponible en ningún otro lugar. La exclusiva experiencia, que solo está disponible a través de Viator, le ofrece acceso al museo antes de su apertura oficial, por lo que podrá ver obras como "Las Meninas" de Velázquez y "La Anunciación" de El Greco sin multitudes. Aprenda sobre las obras gracias a su guía, y luego diríjase al Museo Reina Sofía para admirar obras abstractas y surrealistas de Picasso, Dalí y muchos más. Si desea un tour privado o para grupos pequeños, elija la opción superior cuando haga su reserva.',
  imgUrl: 'https://cdn.20m.es/img2/recortes/2017/04/03/451899-944-550.jpg',
  // createdBy: 'Beginner',
  sunny: false,
  price: 1300,
  duration: 360,
  days:'1/2/3/4/5/6',
  startTime: "7:00",
  endTime: "9:00",
  startPosition: "{40.4137859,-3.6943158}",
  endPosition: "{40.4079164,-3.6967456}"
}, {
  title: 'Kapital: Party all night long',
  description: 'En el centro de Madrid, una de las salas mas emblematicas de Europa. En una ubicacion realmente privilegiada, situada en el triangulo del arte entre el museo Thyssen Bornemisa, el museo del Prado y el museo de arte contemporaneo Reina Sofia. Con 7 plantas independientes, la propuesta de Teatro Kapital permite ofrecer diferentes tipos de musica, espacios, decoraciones y esteticas ... siempre en un marco elegante y exclusivo, cualidades que ya son parte de la tradicion de la sala: ',
  imgUrl: 'http://www.grupo-kapital.com/kapital/v4_imagenes/cuerpo_info_r1_c1.jpg',
  // createdBy: 'Beginner',
  sunny: false,
  price: 18,
  duration: 0,
  days:'1/2/3/4/5/6/7',
  startTime: "00:00",
  endTime: "6:00",
  startPosition: "{40.409776,-3.6931638}",
  endPosition: "{40.409776,-3.6931638}"
}, ];


Plan.create(plans, (err, docs) => {
  if (err) {
    throw err;
  };
  docs.forEach((plan) => {
    console.log(plan.title);
  });
  mongoose.connection.close();
});