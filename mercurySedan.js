import Vehicle from "./vehicle.js";
const VehicleModule = require('./vehicle').Vehicle

class Car extends Vehicle 
class Car extends VehicleModule 
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    checkService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true
            return this.scheduleService;                       
        }
    }
    start() 
        if (this.fuel > 0) {            
            console.log("engine has started.");
            return this.started = true
        } else 
            console.log("no fuel");