import { Person } from './08-classes';

export class Person {
    // Opcional no es lo mismo que undefined.
    // public name?: string;

    // public name: string;
    // private address: string;

    constructor(
        public name: string, 
        public lastName: string,
        private address?: string
    ){

        // Ya no es necesario asignarlo, si las propiedades se declaran
        //    en el constructor.
        // this.name = 'Cesar Luilly', 
        // this.address = 'New York'
    }
}

export class Hero1 extends Person{
    
    constructor(
        public alterEgo: string, 
        private age: number, 
        public realName: string
    ){
        super(realName, 'New York');
    }
}

export class Hero{
    constructor(
        public alterEgo: string, 
        private age: number, 
        public realName: string, 
        public person: Person
    ){
        
        

    }
}

// A diferencia de la herencia, se puede lograr lo mismo con inyeccion de dependencias, 
//    ademas de que es mas reutilizable, ya que tony a lo mejor puede estar interpretando
//    otro personaje.
const tony = new Person('Tony', 'Stark', 'New York');
const ironman = new Hero('Ironman', 45,  'New York', tony);

console.log(ironman);
















