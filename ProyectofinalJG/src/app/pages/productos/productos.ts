import { Component } from '@angular/core';
import { Canciones } from '../../models/producto';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  cancionId: Canciones[] = [
    {
      id: 1,
      tituloCan: 'Persiana Americana',
      nomArtista: 'Soda Stereo',
      descripcion: 'Clásico del rock argentino con ritmo bailable y guitarras envolventes. Su letra nació de un concurso de letras para fans y retrata la atracción voyeurista hacia una mujer detrás de una ventana.',
      creditos: 'Gustavo Cerati: voz-guitarra-compositor; Jorge Daffunchio: letrista; Zeta Bosio: bajo; Charly Alberti: batería',
      album: 'Signos',
      imagen: 'img/persiana.jpg'
    },
    {
      id: 2,
      tituloCan: 'La Flaca',
      nomArtista: 'Jarabe de Palo',
      descripcion: 'Tema icónico del pop rock español con fusión latina. Fue inspirado por una mujer cubana que el vocalista conoció en La Habana y relata un amor platónico apasionado.',
      creditos: 'Pau Donés: voz-guitarra-compositor-letrista; Joe Dworniak: productor',
      album: 'La Flaca',
      imagen: 'img/flaca.jpg'
    },
    {
      id: 3,
      tituloCan: 'Seminare',
      nomArtista: 'Serú Girán',
      descripcion: 'Balada sinfónica fundamental del rock argentino. Combina arreglos épicos de piano y guitarra para expresar la angustia existencial y la búsqueda de libertad en tiempos difíciles.',
      creditos: 'Charly García: voz-teclados-compositor-letrista; David Lebón: voz-guitarra; Pedro Aznar: bajo; Oscar Moro: batería',
      album: 'Serú Girán',
      imagen: 'img/seminare.jpg'
    },
    {
      id: 4,
      tituloCan: 'Flaca',
      nomArtista: 'Andrés Calamaro',
      descripcion: 'Himno del rock argentino con ritmo relajado y tintes de reggae y pop rock. Dedicada a su expareja de aquel entonces, pide con melancolía no guardar rencores tras la separación.',
      creditos: 'Andrés Calamaro: voz-teclados-compositor-letrista; Joe Blaney: productor-ingeniero de mezcla',
      album: 'Alta Suciedad',
      imagen: 'img/Laflaca.jpg'
    },
    {
      id: 5,
      tituloCan: 'Watermelon Sugar',
      nomArtista: 'Harry Styles',
      descripcion: 'Canción de pop rock y funk con sección de vientos luminosa. Evoca la euforia sensorial y la nostalgia de los días cálidos de verano junto a alguien especial.',
      creditos: 'Harry Styles: artista principal-compositor; Mitch Rowland: guitarra-compositor; Tyler Johnson: productor; Kid Harpoon: productor',
      album: 'Fine Line',
      imagen: 'img/watermelon.jpg'
    },
    {
      id: 6,
      tituloCan: 'Rosas',
      nomArtista: 'La Oreja de Van Gogh',
      descripcion: 'Clásico del pop español caracterizado por su melodía nostálgica. Narra la espera diaria de una mujer en un banco con la esperanza de volver a ver a su gran amor.',
      creditos: 'Amaia Montero: voz; Xabi San Martín: teclados-compositor-letrista; Pablo Benegas: guitarra; Nigel Walker: productor',
      album: 'Lo Que Te Conté Mientras Te Hacías la Dormida',
      imagen: 'img/rosas.jpg'
    },
    {
      id: 7,
      tituloCan: 'Seguir Viviendo Sin Tu Amor',
      nomArtista: 'Luis Alberto Spinetta',
      descripcion: 'Canción emblemática del rock nacional argentino. Destaca por su sensibilidad poética y su arreglo acústico luminoso sobre el duelo de continuar tras una despedida.',
      creditos: 'Luis Alberto Spinetta: voz-guitarra-compositor-letrista-productor; Javier Malosetti: bajo; Jota Morelli: batería',
      album: 'Pelusón of Milk',
      imagen: 'img/seguirviviendosintuamor.jpg'
    },
    {
      id: 8,
      tituloCan: 'El Amor Después del Amor',
      nomArtista: 'Fito Páez',
      descripcion: 'Tema central del disco más vendido en la historia del rock argentino. Celebra el renacer emocional y la esperanza que surge tras superar etapas oscuras.',
      creditos: 'Fito Páez: voz-piano-compositor-letrista; Carlos Narea: productor; Tweety González: teclados-programación',
      album: 'El Amor Después del Amor',
      imagen: 'img/amordespuesdelamor.jpg'
    },
    {
      id: 9,
      tituloCan: 'Please Please Please',
      nomArtista: 'Sabrina Carpenter',
      descripcion: 'Canción synth-pop con toques country y ritmo medio. Su letra es una súplica irónica a su nueva pareja para que no la haga quedar en ridículo frente a los demás.',
      creditos: 'Sabrina Carpenter: artista principal-compositora; Jack Antonoff: productor-compositor; Amy Allen: compositora',
      album: "Short n' Sweet",
      imagen: 'img/pleaseplease.jpg'
    },
    {
      id: 10,
      tituloCan: 'Demoliendo Hoteles',
      nomArtista: 'Charly García',
      descripcion: 'Clásico del rock argentino de energía explosiva y actitud irreverente. Refleja la rebeldía artística y el espíritu contestatario frente a las normas establecidas.',
      creditos: 'Charly García: voz-teclados-compositor-productor; Pablo Guyot: guitarra; Alfredo Toth: bajo; Willy Iturri: batería',
      album: 'Piano Bar',
      imagen: 'img/demoliendohoteles.jpg'
    },
    {
      id: 11,
      tituloCan: 'Shape of You',
      nomArtista: 'Ed Sheeran',
      descripcion: 'Éxito global de pop con ritmos inspirados en el dancehall y la marimba. Relata el inicio espontáneo de un romance que comienza en un bar.',
      creditos: 'Ed Sheeran: artista principal-compositor; Steve Mac: productor-compositor; Johnny McDaid: compositor',
      album: '÷ (Divide)',
      imagen: 'img/shape.jpg'
    },
    {
      id: 12,
      tituloCan: 'Lamento Boliviano',
      nomArtista: 'Los Enanitos Verdes',
      descripcion: 'Himno del rock argentino y latinoamericano con un riff de guitarra inconfundible. Expresa el dolor del desamor y la sensación de estar atrapado en el recuerdo.',
      creditos: 'Marciano Cantero: voz-bajo; Felipe Staiti: guitarra; Daniel Piccolo: batería; Dimi Bass: compositor; Natalio Faingold: compositor',
      album: 'Big Bang',
      imagen: 'img/lamentobolita.jpg'
    },
    {
      id: 13,
      tituloCan: 'Pink Pony Club',
      nomArtista: 'Chappell Roan',
      descripcion: 'Himno de synth-pop y dance-pop con crescendo emocional. Cuenta la historia de una joven que deja su pueblo conservador para perseguir sus sueños y ser libre en California.',
      creditos: 'Kayleigh Amstutz: artista principal-compositora; Daniel Nigro: productor-compositor-ingeniero',
      album: 'The Rise and Fall of a Midwest Princess',
      imagen: 'img/pinkpony.jpg'
    },
    {
      id: 14,
      tituloCan: 'Ji Ji Ji',
      nomArtista: 'Patricio Rey y sus Redonditos de Ricota',
      descripcion: 'Pieza de culto del rock argentino famosa por su solo de guitarra y el pogo masivo en vivo. Su letra críptica alude a la paranoia y al estallido social.',
      creditos: 'Indio Solari: voz-letrista; Skay Beilinson: guitarra-compositor; Semilla Bucciarelli: bajo; Tito Fargo: guitarra',
      album: 'Oktubre',
      imagen: 'img/jijij.jpg'
    },
    {
      id: 15,
      tituloCan: 'Irresponsables',
      nomArtista: 'Babasónicos',
      descripcion: 'Tema de rock alternativo argentino con estética glam y sensual. Juega con la provocación y el descaro al asumir los errores dentro de un romance.',
      creditos: 'Adrián Dárgelos: voz-letrista; Mariano Roger: guitarra-compositor; Diego Uma: guitarra; Diego Tuñón: teclados',
      album: 'Infame',
      imagen: 'img/irrespon.jpg'
    },
    {
      id: 16,
      tituloCan: 'Someone Like You',
      nomArtista: 'Adele',
      descripcion: 'Balada pop minimalista acompañada únicamente por piano. Expresa la madurez y el dolor de aceptar que una expareja ha rehecho su vida con alguien más.',
      creditos: 'Adele Adkins: artista principal-compositora; Dan Wilson: productor-compositor-piano',
      album: '21',
      imagen: 'img/someone.jpg'
    },
    {
      id: 17,
      tituloCan: 'Costumbres Argentinas',
      nomArtista: 'Los Abuelos de la Nada',
      descripcion: 'Clásico alegre del rock nacional argentino con saxofón y ritmo contagioso. Retrata con ternura la nostalgia de los primeros amores de juventud.',
      creditos: 'Andrés Calamaro: voz-teclados-compositor-letrista; Miguel Abuelo: voz; Gustavo Bazterrica: guitarra; Cachorro López: bajo',
      album: 'Los Abuelos en el Ópera',
      imagen: 'img/costumbresarg.jpg'
    },
    {
      id: 18,
      tituloCan: 'Prófugos',
      nomArtista: 'Soda Stereo',
      descripcion: 'Pista emblemática del rock argentino que mezcla new wave y pop rock. Habla sobre escapar juntos de las ataduras sociales para vivir un romance sin límites.',
      creditos: 'Gustavo Cerati: voz-guitarra-compositor; Charly Alberti: batería-compositor; Zeta Bosio: bajo',
      album: 'Signos',
      imagen: 'img/profugoss.jpg'
    },
    {
      id: 19,
      tituloCan: 'take me home (4 christmas)',
      nomArtista: 'Olivia Rodrigo',
      descripcion: 'Es su primera canción navideña original, lanzada como sencillo en noviembre de 2026. Con un estilo pop rock y new wave inspirado en el clásico «Christmas Wrapping» de The Waitresses, relata con humor y entusiasmo el deseo de que su pareja la lleve a pasar las fiestas en casa de sus padres como señal de compromiso. Incluye un saludo de «Feliz Navidad» hacia el final y su videoclip cuenta con las actuaciones de Cynthia Nixon y Ben Marshall.',
      creditos: 'Olivia Rodrigo: artista principal-compositora-letrista; Daniel Nigro: productor-compositor-ingeniero; Amy Allen: compositora-letrista',
      album: 'take me home (4 christmas) - Single',
      imagen: 'img/takemehome.jpg'
    },
  ];
}
cancionSeleccionada: Canciones | null = null;
verDetalleCancion(cancion: Canciones) {
    this.cancionSeleccionada = cancion;