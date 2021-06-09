import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable{
    companyName: string;
    catchPhrese: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'red'

    constructor(){
        this.companyName = faker.company.companyName();
        this.catchPhrese = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    makerContent(): string {
        return `
        <div>
            <h1>Company Name: ${this.companyName}</h1>
            <h3>CatchPhrese: ${this.catchPhrese}</h3>
        </div>
        `;
    }

}