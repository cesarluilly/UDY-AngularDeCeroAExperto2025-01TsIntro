interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheran",
        year: 2015
    }
}
console.log('Song: ', audioPlayer.song);

const song = 'New Song';

const {
    song:anotherSong, 
    songDuration: duration,
    details
} = audioPlayer;

const {author} = details;


// console.log('Song: ', anotherSong);
// console.log('duracion: ', duration);
// console.log('Author: ', author);

//DESESCTRUCTURACION DE ARREGLOS

const dbz: string [] = ['Goku', 'Vegeta', 'Trunk'];
const trunk = dbz[3] || 'No hay personaje';

console.log('Personaje 3: ', trunk);

const [p1, p2, p3, p4 = 'Not fount']: string [] = ['Goku', 'Vegeta', 'Trunk'];
console.log(p4);




















export {};














