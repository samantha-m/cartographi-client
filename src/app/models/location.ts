export class Location {
    title: string = "";
    description: string = "";
    lat: number = 0.0;
    lng: number = 0.0;

    constructor(t: string, d: string, la: number, ln: number) {
        this.title = t;
        this.description = d;
        this.lat = la;
        this.lng = ln;
    }
}