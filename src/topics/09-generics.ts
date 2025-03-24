
// Los tipos de datos any, son muy peligrosos, ya que es como
//    trabajar con js nativo, sin aprovechar el  poder de ts.
export function whatsMyType<T>(argument: T): T{


    return argument;
}

const amIString = whatsMyType<string>('Hola Mundo');
const amINumber  = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1, 2, 3]);


console.log(amIString.split);
console.log(amINumber.toFixed() );
console.log(amIArray.join('-'));








export {};




