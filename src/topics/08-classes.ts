
export class Person {
    // Opcional no es lo mismo que undefined.
    // public name?: string;

    // public name: string;
    // private address: string;

    constructor(
        public name: string, 
        private address: string
    ){

        // Ya no es necesario asignarlo, si las propiedades se declaran
        //    en el constructor.
        // this.name = 'Cesar Luilly', 
        // this.address = 'New York'
    }
}

const ironman = new Person('Ironman', 'New York');

console.log(ironman);
















