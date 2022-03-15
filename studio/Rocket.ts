import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    
    sumMass( items: Payload[] ): number{
        let myTotalMass = 0;
        for(let i = 0; i < items.length; i++) {
            myTotalMass += items[i].massKg;
        }
        return myTotalMass;
    };

    currentMassKg(): number {

        let cargoMassTotal = this.sumMass(this.cargoItems);
        let astronautMassTotal = this.sumMass(this.astronauts);
        let massTotal = cargoMassTotal + astronautMassTotal;

        return massTotal;
    };

    canAdd(item: Payload): boolean {
        let totalMass = this.currentMassKg() + item.massKg;
        if (totalMass <= this.totalCapacityKg) return true;
        return false;
    }

    addCargo(cargo: Cargo): boolean {
        let itCanAddIt = this.canAdd(cargo); //this becomes true or false
        if (itCanAddIt) {
            this.cargoItems.push(cargo)
            return true;
        } else {
            return false;
        };
    };

    addAstronaut(astronaut: Astronaut): boolean {
        let itCanAddIt = this.canAdd(astronaut);
        if (itCanAddIt) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }


}