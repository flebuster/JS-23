//итератор1 

function iterator() {
    let index = 5;
    return {
        next: function() {
            return {
                value: index--,
                done: false
            };
        }
    }
}

let a = iterator();
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);
console.log(a.next().value);

//итератор2

let b = "Hello World";
let iterator = b[Symbol.iterator]();

while(true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value);
}

//генератор

function* generateId() {
    let index = 3;
    while(true)
    yield index--;
}

let generator = generateId();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);


//наследование


class ThisIsClass {
}

let A = Arg => class extends Arg {
    testA() {
        console.log('from A');
    }
}

let B = Sup => class extends Sup {
    testB() {
        console.log('from B');
    }
};

let C = Super => class extends Super {
    testC() {
        console.log('it is C');
    }
}

class MyClass extends A(B(C(ThisIsClass))) {
}

let d = new MyClass();
let e = new MyClass();
let f = new MyClass();
d.testA()
e.testB()
f.testC()