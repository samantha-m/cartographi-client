import { Guid } from "js-guid";

export class CartographiMap {
    guid: string = Guid.newGuid().toString();
    title: string = "";
    description: string = "";
    locations: Location[] = [];

    constructor(t: string, d: string) {
        this.title = t;
        this.description = d;
    }
}