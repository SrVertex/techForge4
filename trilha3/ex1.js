// Exercício 1: Crie uma classe Veiculo com um método mover() que imprima "O veículo está se movendo". Crie duas subclasses Carro e Bicicleta, ambas herdam de Veiculo. A subclasse Carro deve sobrescrever o método mover() para imprimir "O carro está dirigindo" e Bicicleta deve sobrescrever para "A bicicleta está pedalando". Instancie objetos de ambas as subclasses e chame o método mover().
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Veiculo = /** @class */ (function () {
    function Veiculo() {
    }
    Veiculo.prototype.mover = function () {
        console.log("O veiculo esta se movendo");
    };
    return Veiculo;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Carro.prototype.mover = function () {
        console.log("O carro esta sendo dirigido");
    };
    return Carro;
}(Veiculo));
var Bicicleta = /** @class */ (function (_super) {
    __extends(Bicicleta, _super);
    function Bicicleta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bicicleta.prototype.mover = function () {
        console.log("A bicicleta esta pedalando");
    };
    return Bicicleta;
}(Veiculo));
var veiculo1 = new Veiculo;
veiculo1.mover();
var carro1 = new Carro;
carro1.mover();
var bike1 = new Bicicleta;
bike1.mover();
