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
var Grault = /** @class */ (function () {
    function Grault(quux, waldo) {
        this.garply = quux.quuz + ' ' + quux.corge + ' ' + waldo;
    }
    Grault.prototype.getGarply = function () {
        return this.garply;
    };
    return Grault;
}());
var baz = { quuz: 'ABC', corge: 123 };
var fred = new Grault(baz, [1, 2, 3]);
// console.log(foo(baz));
console.log(fred.getGarply());
document.body.innerHTML = fred.getGarply();
