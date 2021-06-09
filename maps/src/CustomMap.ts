// Instructions to every other class
// on how they can be argument to 'addMaker' 
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    makerContent(): string;
    color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMaker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });


        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.makerContent()
            });
            infoWindow.open(this.googleMap, marker);
        });
    }
}