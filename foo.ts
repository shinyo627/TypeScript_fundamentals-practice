// Custom type use type or interface when declare types
//  But there is only ever little difference between interface and type
// type for declaring types is more common.

// only real time interface is used for merging types.
// interface Quux = {
//   corge: number
// };

// function foo(bar: Quux) {
//   return 'Hello, ' + bar.quuz + ' ' + bar.corge;
// }

class Grault {
  private garply: string;

  constructor(quux: Quux, waldo: number[]) {
    this.garply = quux.quuz + ' ' + quux.corge + ' ' + waldo;
  }

  public getGarply() {
    return this.garply;
  }
}

type Quux = {
  quuz: string;
  corge: number;
};

let baz = { quuz: 'ABC', corge: 123 };

let fred: Grault = new Grault(baz, [1, 2, 3]);

// console.log(foo(baz));
console.log(fred.getGarply());

document.body.innerHTML = fred.getGarply();
