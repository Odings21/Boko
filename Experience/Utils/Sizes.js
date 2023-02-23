import { EventEmitter } from "events";

export default class Sizes extends EventEmitter {
     constructor() {
        super();
        this.widht = window.innerWidth;
        this.height = window.innerHeight;
        this.aspect = this.widht/this.height;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2)

        window.addEventListener("resize", () => {
            this.widht = window.innerWidht;
            this.height = window.innerHeight;
            this.aspect = this.widht/this.height;
            this.pixelRatio = Math.min(window.devicePixelRatio, 2);
            this.emit("resize");
        })
     }
}