

const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; //Es una cadena o undefined.
}


const strider: Character = {
    name: 'strider',
    hp: 100,
    skills: ['Bash']
};

strider.hometown = 'Rivendell';

console.table(strider);


export {};
