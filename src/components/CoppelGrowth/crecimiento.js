import define from "./app.js";
import {Runtime, Library, Inspector} from "./runtime.js";

export function CoppelGrowthD3() {
    const container = document.querySelector(".map-container");
    const runtime = new Runtime();
    const main = runtime.module(define, Inspector.into(container));
}