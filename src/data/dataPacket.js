"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataPacket = void 0;
class dataPacket {
    constructor(sensorId, time, value) {
        this._sensorId = sensorId;
        this._time = time;
        this._value = value;
    }
    get sensorId() {
        return this._sensorId;
    }
    set sensorId(value) {
        this._sensorId = value;
    }
    get time() {
        return this._time;
    }
    set time(value) {
        this._time = value;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        // this sensor fails at 112 degrees
        if (value < 112) {
            this._value = value;
        }
    }
    toString() {
        return JSON.stringify({ "value": this.value, "time": this.time, "sensorId": this.sensorId });
    }
    static getRandom(min, max) {
        const multiplier = Math.pow(10, dataPacket.DECIMAL_PLACES);
        const randomShifted = Math.floor(Math.random() * (max - min + 1) * multiplier) + min * multiplier;
        return randomShifted / multiplier;
    }
    static simulatePacket() {
        return new dataPacket("12345", new Date().getTime(), dataPacket.getRandom(dataPacket.MIN_TEMP, dataPacket.MAX_TEMP));
    }
}
exports.dataPacket = dataPacket;
dataPacket.DECIMAL_PLACES = 2;
dataPacket.MIN_TEMP = -15;
dataPacket.MAX_TEMP = 2;
