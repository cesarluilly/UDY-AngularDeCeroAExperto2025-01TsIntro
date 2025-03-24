
export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250
}

interface TaxCalculationsOptions {
    tax: number;
    products: Product [];
}

// function taxCalculation(options: TaxCalculationsOptions ): 
//     [number, number] {
//     let total = 0;

//     //SIN DESESCRUCTURAR.
//     // options.products.forEach(product => {
//     //     total += product.price
//     // });

//     //CON DESESCRUCTURACION
//     options.products.forEach(({price}) => {
//         total += price
//     });

//     return [total, total * options.tax]
// }


// function taxCalculation({tax, products}: TaxCalculationsOptions ): 
export function taxCalculation(options: TaxCalculationsOptions ): 
    [number, number] {
    let total = 0;

    const {tax, products } = options;

    //CON DESESCRUCTURACION
    products.forEach(({price}) => {
        total += price
    });

    return [total, total * tax]
}



const shoppingCart = [phone, tablet]
const tax = 0.15;

const result = taxCalculation({
    products: shoppingCart, 
    tax // si el nombre es identico, no se necesita asignar
});

// console.log('Total: ', result[0]);
// console.log('Total: ', result[2]);

const [TotalDes, TaxDes] = taxCalculation({
    products: shoppingCart, 
    tax // si el nombre es identico, no se necesita asignar
});

console.log('Total: ', TotalDes);
console.log('Total: ', TaxDes);















// export {};