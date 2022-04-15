# TYPESCRIPT

## Que es el tipado en Typescript

El tipado es una característica muy interesante que nos ayuda a mitigar riesgos, en javascript podemos reasignar tipos de valores a lo largo del código, esto es un riesgo que puede provocar errores en tiempo de ejecución si no tenemos cuidado de cómo estamos manejando los datos durante la ejecución del código.

Con el tipado, mitigamos el error forzando al analizador de código a que observe esas variables y se asegure de que no estamos modificando su tipo a lo largo del código o por ejemplo si declaramos “const” nos saltará error al querer modificar su valor (no tanto su tipo).

De este modo debemos de escribir mejor código o typescript nos avisará cuando hagamos algo que en tiempo de ejecución puede fallar, nos avisará en tiempo de codificación, capturando así muchos bugs de tipado que de otro modo se irían a producción.

## Tipos inferidos

TS usa tipos inferidos para “asignar” tipos de datos a variables sin que se las tengamos que asignar de manera explicita,
Entre los beneficios de usar TS esta el hecho de que tenemos los metodos usados a cada tipo de datos, como en el caso de una variable “string”, podemos acceder a el método toLowerCase de manera mas rápida.
Al no tener aun modularizacion, TS nos alerta de que ciertas variables ya han sido declaradas, esto lo podemos prevenir con funciones anónimas autoejecutadas
IFEE (Immediately-invoked function expressions)

## Number

NaN tambien aplica como tipo de dato “number”
Datos hexadecimales y binarios tambien son “number” y al mostrarlos en la consola son traducidos a su valor en decimal
:number no es lo mismo que :Number. Cuando usamos la mayuscula se refiere al super prototipo Number

## Boolean
Los operadores lógicos (sus evaluaciones devuelven booleans siempre)
```ts
  && and
  || Or
   ! Not

```
## String
El uso de back tick’s se conoce como “interpolación de strings” y es sumamente útil para construir cadenas de forma muy sencilla, con la interpolación ya no necesitamos métodos de concatenación y aunque habrá casos en los que no se pueda usar, es muy conveniente aprenderlo, verás que te facilita la vida.
Para hacer el “back tick”, podemos usar Alt + 96 o Alt + fn + 96
Como conclusión, usamos las comillas dobles cuando vamos a usar comillas simples dentro del texto y los backticks nos ayudan a usar multilínea e insertar variables de una manera mas cómoda
.
Ah si… y en relación a TS, podemos declarar que una variable es string de la siguiente manera
```ts
 let name: string = "hackchan"
```

## Arrays

 ### FOR EACH

 ```ts
   // modo noob
  for (let index = 0; index < letters.length; index++) {
    const element: string = letters[index]
    console.log(element)
  }

  // foreach
  letters.forEach(item => console.log(item))
 ```
 ### Mutable VS Immutable
 Mutable es un tipo de variable que se puede cambiar. En JavaScript, solo los objetos (objects) y las matrices (arrays) son mutables, no valores primitivos.(Puedes hacer que el nombre de una variable apunte a un nuevo valor, pero el valor anterior todavía se mantiene en la memoria. De ahí la necesidad de la recolección de basura).
 Un objeto mutable es un objeto cuyo estado puede modificarse después de su creación. Los inmutables son los objetos cuyo estado no se puede cambiar una vez creado el objeto.
 Las cadenas y los números son inmutables. Entendamos esto con un ejemplo:
 ```ts
 var immutableString = “Hola”;
 ```
 En el código anterior, se crea un nuevo objeto con valor de cadena.

 Las cadenas y los números son inmutables. Entendamos esto con un ejemplo:
 ```ts
immutableString = immutableString + “Mundo”;
 ```
Ahora agregamos “Mundo” al valor existente.

Al agregar “immutableString” con un valor de cadena, ocurren los siguientes eventos:
* Se recupera el valor existente de "immutableString"
* "World" se agrega al valor existente de "immutableString"
* El valor resultante luego se asigna a un nuevo bloque de memoria
* El objeto "immutableString" ahora apunta al espacio de memoria recién creado
* El espacio de memoria creado anteriormente ahora está disponible para recolección de basura.

### MAP
¿Qué hace el .map()? TRANSFORMAR.

map() es INMUTABLE por lo tanto no modifica el array original, sino que crea uno nuevo con la “transformación” aplicada.
Además, mantienes el mismo length que el array original, te devuelve en el nuevo array la misma cantidad que el array que le aplicaste el método.
```ts
const products = [
            { title: 'Burger', price: 121 },
            { title: 'Pizza', price: 202 },
        ];
        const app = document.getElementById('app');
        const list = products.map(product => {
            return `<li>${product.title} - ${product.price}</li>`;
        })

        app.innerHTML = list.join('');
```


El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
```ts
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected "Fire,Air,Water"

console.log(elements.join(''));
// expected  "FireAirWater"

console.log(elements.join('-'));
// expected "Fire-Air-Water"
Éxitos 😃
```
### FILTER

filter() lo que hace es filtrar el array original en base a una condición, los que la cumplan estaran en el nuevo array creado Por lo tanto filter() es inmutable y el nuevo array creado solamente puede contener:

cero coincidencias
todas coincidencias
algunas coincidencias
Pero nunca más coincidencias que el tamaño del array original

```ts
const words = ["spray", "limit", "elite", "exuberant"];

// con for
const newArray = [];
for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element.length >= 6) {
    newArray.push(element);
  }
}

// VS

// con filter
const rta = words.filter((element) => element.length >= 6);

// en ambos casos, el resultado:
> [ 'exuberant' ]
```

### REDUCE
Este método REDUCE, efectivamente hace eso. Solo reduce a un solo valor y no devuelve otro array, simplemente un valor.
Se utiliza muchísimo para hacer cálculos a partir de la información de un array
En su composición, a primeras, tiene como argumentos de la función del primer parámetro, al acumulador y como segundo parámetro al elemento por el que va iterando el loop. Y como segundo argumento del reduce(), se pasa el valor inicial del acumulador.

### SOME
Some: Si alguno de esos elementos cumple con alguna condicional, regresa -> True o False
No importa si todos los cumple o solo uno (Almenos alguno)
Si alguno cumple regresa: True, si ninguno cumple con la condicion regresa: False
```ts
import { IOrders } from '../../types'
import areIntervalsOverlapping from 'date-fns/areIntervalsOverlapping'
(() => {
  const items: number[] = [1, 1, 3, 4]
  const orders: IOrders[] = [
    {
      customerName: 'Nicolas',
      total: 60,
      delivered: true
    },
    {
      customerName: 'Nicolay',
      total: 78,
      delivered: false
    },
    {
      customerName: 'Zulema',
      total: 120,
      delivered: false
    },
    {
      customerName: 'Santiago',
      total: 180,
      delivered: true
    },
    {
      customerName: 'Valentina',
      total: 240,
      delivered: true
    }
  ]
  const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: 'Cita de trabajo'
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: 'Cita con mi jefe'
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: 'Cena'
    }
  ]

  const rta2 = items.some(item => item % 2 === 0)
  console.log(rta2)

  const rta3 = orders.some(item => item.delivered)
  console.log(rta3)

  const isOverlap = (newDate: { startDate: any, endDate: any }): boolean => {
    return dates.some(date => {
      return areIntervalsOverlapping({ start: date.startDate, end: date.endDate }, { start: newDate.startDate, end: newDate.endDate })
    })
  }
  const newAppoitment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30)
  }
  console.log(isOverlap(newAppoitment))
})()

```
### EVERY
Every: aqui todos los elementos debe cumplir la condicion para que devuelva true
```ts
  const items: number[] = [1, 30, 49, 29, 10, 13]
  const teams = [
    {
      name: 'Nicolas',
      age: 12
    },
    {
      name: 'Andrea',
      age: 8
    },
    {
      name: 'Zulema',
      age: 2
    },
    {
      name: 'Santiago',
      age: 18
    }
  ]

  const rta = items.every(item => item > 1)
  console.log(rta)

  const rta2 = teams.every(team => team.age <= 15)
  console.log(rta2)
```
### FIND
El método find() devuelve el primer elemento del array que cumpla con la condición dada o no devuelve undefined si es que no encuentra ningún elemento que cumpla los requisitos pedidos.

```ts
  const pets: string[] = ['cat', 'dog', 'bat']
  const rta = pets.includes('dog')
  console.log(rta)
```

### JOIN
El método join() une todos los elementos de un array en una cadena y devuelve esta cadena. Podemos pasarle cualquier elemento como separador que deseemos.

```ts
const elements = ['Fire', 'Air', 'Water'];

console.log( elements.join() );
// expected output "Fire,Air,Water"

console.log(elements.join(''));
// expected output "FireAirWater"

console.log(elements.join('-'));
// expected output "Fire-Air-Water"
```

### CONCAT

```ts
const elements = [1, 2, 3, 4];
const otherElements = [5, 6, 7, 8];

//elements.push(otherElements); // sin spread operator 
//console.log('Push sin spread operator:', elements);

elements.push(...otherElements); // con spread operator
console.log('Push con spread operator:', elements);

```

### FLAT
La funcionalidad de Flat con recursión
Se busca recursivamente en cada elemento hasta que ya no se encuentre otra lista y se van uniendo los elementos encontrados con Cat.

```ts
const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

function profundidad(list) {
    let newList = [];
    if (typeof list != "object") return [list];
    list.forEach(element => {
        newList = newList.concat(profundidad(element));
    });
    return newList;
}

const newArray = profundidad(matriz);

console.log(newArray);

```

## ANY

El tipo de dato any “desactiva” el tipado de TS, volviendo de cierta forma a JS.
No es recomendado usar any. Sin embargo, puede ser útil cuando estamos migrando código JS a TS.
Podemos convertir de any a cualquier otro tipo de dato con el as operator. Este se usa de la siguiente forma.

```ts
let foo: any = null;
foo = "My name"

const name = (foo as string)
const name = <string> foo
```

## UNION TYPES

Los Union Types nos permiten una mayor flexibilidad al momento de tipear variables. En caso de que una variable pueda ser boolean, string o number, los Union Types quedarían de la siguiente manera.

```ts
let foo: string | boolean | number;
```

## ALIAS

Los alias en TS nos ayudan a crear nuestros propios tipos de datos para asi hacer nuestro codigo mas escalable.

```ts
// Sin alias
let user = string | number | Object;

function createUser(user: string | number | Object){
  @code...
}

// Con alias
type UserType = string | number | Object

let user: UserType

function createUser(user: UserType){
  @code...
}
```

## NULL & UNDEFINED
El Optional chaining o encadenamiento opcional no solo se puede usar con null, sino también con undefined.

A su vez se puede usar también con funciones de la siguiente forma:

```ts
let result = someInterface.customMethod?.();
```

## FUNTIONS
En TS tenemos que declarar el tipo de dato de cada parámetro en la función. Además de que TS nos va a marcar error en caso de que agreguemos mas o menos parámetros de los requeridos.

```ts
// JS
function createPerson(name, lastName){
  return {name, lastName}
}
createPerson() // no error
createPerson(0, true) // no error
createPerson('o', 32, true) //no error

// TS
function createPerson(name: string, lastName: string){
  return {name, lastName}
}
createPerson() // ERROR
createPerson(0, true) // ERROR
createPerson('o', 32, true) // ERROR
```

## FUNTIONS RETURN

En TS podemos especificar que tipo de dato retorna la función e incluso podemos indicar cuando esa funcion no retorna nada.

```ts
// Retornando un string
function joinName(fName: string, lName: string): string {
 return `${fName} ${lName}`
}

// Funcion sin retorno
function printName(name: string): void {
  console.log(name)
}
```

## FUNTIONS OBJECTS AND TYPES
Con los type Alias también podemos definir la estructura de un objeto como tipo de dato. Por lo que ahora podriamos hacer lo siguiente:
```ts
type Product = {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}

const products: Product[] = [];

const addProduct = (data: Product){
  @code...
}
```


## MODULES
Podemos concluir que para crear módulos, solo tenemos que exportar ciertas variables de cualquier archivo e importarlas en otros.

También podemos notar que los alias pueden ir en su propio archivo, para que puedan ser importados en todos los demás archivos que los ocupen.

## DATE-FNS
date-fns es una librería muy liviana para trabajar con fechas, baja el bundle size de una aplicación.

## ENUM

Los enums funcionan como listas en las que podemos agregar llaves y valores. Esto lo que nos permite es tener un set de opciones predefinidas, evitando pasar un argumento invalido, ya que solo vamos a tener las opciones dentro del enum. Estos se usan de la siguiente manera

```ts
enum ROLES {
  ADMIN = "admin",
  USER = "user",
  OWNER = "owner"
}
```

## TUPLAS

Las tuplas nos sirven para hacer un array fuertemente tipado especificando el tipo de dato de cada elemento del array así como la cantidad de elementos. Para hacer una tupla lo hacemos de la siguiente manera

```ts 
const user: [string, number, boolean] = ["Irving", 20, true]
```

## UNKNOWS
Este tipo de dato es la mejora de any, ya que nos da la flexibilidad que en ocasiones queremos pero sin apagar por completo el análisis de código estático. Unknown nos fuerza a hacer una verificación de tipo.

```ts
let foo: unknown = null;
```
## NEVER
Otra forma de ver al tipo de dato never es como aquellas funciones que nunca llegan a ejecutarse por completo

## OPTIONAL
Nullish-coalescing en JS. Si, JavaScript
Antes solíamos hacer validaciones de la siguiente manera
```ts
const platziRank = rank || 100
```
Aquí el problema es que si rank tiene el valor 0, nos lo va a saltar y nos lo va a poner con el valor por defecto. Eso es valido para algunos valores falsy, como “”, 0, etc…

La manera de solucionar este problema es con el nullish-coalescing. Que funciona de la siguiente manera

const platziRank = rank ?? 100
Ahora solo va tomar en cuenta los tipos de datos null e undefined para que pase al valor que le estamos asignando por defecto.



## DEFAULT VALUE
Parametros por defecto en TS
Ya sabemos que los parametros por defecto pueden ser por defecto agregando un ?: justo como se hace abajo con age

```ts
function createUser(
  id: number,
  name: string,
  age?: number
) {
  return {
    id,
    name,
    age: age ?? 0,
  };
}
```

Sin embargo, tenemos la opcion de hacerlo de la siguiente manera

```ts
function createUser(
  id: number,
  name: string,
  age: number = 0
) {
  return {
    id,
    name,
    age
  };
}
```
En donde ya no usamos ?:, si no que ahora le asignamos un valor en caso de que ninguno sea asignado.
.
Las dos formas son validas y soportadas por TS