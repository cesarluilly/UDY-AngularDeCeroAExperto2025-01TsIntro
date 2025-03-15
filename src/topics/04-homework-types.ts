/*
    ===== Código de TypeScript =====
*/
interface IAddress {
    calle: string;
    pais: string;
    ciudad: string
}

interface ISuperHero {
    name: string;
    age: number;
    address: IAddress;
    showAddress:() => string;
}


const superHeroe: ISuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};
