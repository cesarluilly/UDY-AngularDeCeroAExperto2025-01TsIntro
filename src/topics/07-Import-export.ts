// Aqui estoy importando interfaz, pero lo que hace es que tambien
//    ejecuta todas las funciones que se invocan dentro y todos los 
//    console.log, por lo tanto en ese archivo solo que se va a importar
//    solo debe haber definiciones y no invocaciones.
import { Product, taxCalculation } from './06-function-destructuring'


const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    }, 
    {
        description: 'Nokia',
        price: 100
    }
];


const [total, tax] = taxCalculation(
    {
        products: shoppingCart, 
        tax : 0.15
    }
);

console.log('Total: ', total);
console.log('Tax', tax);



export {};























