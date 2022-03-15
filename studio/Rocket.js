"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var myTotalMass = 0;
        for (var i = 0; i < items.length; i++) {
            myTotalMass += items[i].massKg;
        }
        return myTotalMass;
    };
    ;
    Rocket.prototype.currentMassKg = function () {
        var cargoMassTotal = this.sumMass(this.cargoItems);
        var astronautMassTotal = this.sumMass(this.astronauts);
        var massTotal = cargoMassTotal + astronautMassTotal;
        return massTotal;
    };
    ;
    Rocket.prototype.canAdd = function (item) {
        var totalMass = this.currentMassKg() + item.massKg;
        if (totalMass <= this.totalCapacityKg)
            return true;
        return false;
    };
    Rocket.prototype.addCargo = function (cargo) {
        var itCanAddIt = this.canAdd(cargo); //this becomes true or false
        if (itCanAddIt) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
        ;
    };
    ;
    Rocket.prototype.addAstronaut = function (astronaut) {
        var itCanAddIt = this.canAdd(astronaut);
        if (itCanAddIt) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
