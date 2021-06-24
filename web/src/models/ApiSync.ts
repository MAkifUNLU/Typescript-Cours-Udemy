import axios, { AxiosPromise, AxiosResponse } from "axios";

interface HasId {
    id?: number;
}

export class ApiSync<T extends HasId> {
    constructor(public rootUrl: string) {}
    
    fetch(id: number): AxiosPromise {
        //eğik tırnaklar 
        return axios.get(`${this.rootUrl}/${id}`);
    }

    save(data: T): AxiosPromise {
        //id ye bak
        const {id} = data;

        if (id) {
            //id
            return axios.put(`${this.rootUrl}/${id}`, data);
        } else {
            //id
            return axios.post(this.rootUrl, data);
        }
    }
}