const EventEmitter = require("events");
const emitter = new EventEmitter();

class School extends EventEmitter {
    startClass() {
        setTimeout(() => {
            this.emit("bellring", {  // Emit 'bellring' event, not 'Bell is rang'
                period: "Second",
                text: "Period ended"
            });
        }, 2000);
    }
}



module.exports = School;