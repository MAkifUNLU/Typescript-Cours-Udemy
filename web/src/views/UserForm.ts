import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {

    eventsMap(): { [key: string]: () => void } {
        this.model.get('name')
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveClick
        };
    }

    onSaveClick = (): void => {
        this.model.save();
      };
    

    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');
        if (input) {
            const name = input.value;

            this.model.set({ name });
        }
    };

    // Cannot read property 'setRandomAge' of undefined at HTMLButtonElement.UserForm.onSetAgeClick
    // onSetAgeClick  (): void {    burayı sor
    onSetAgeClick = (): void => {
        this.model.setRandomAge();
        console.log(' button was clicked')
    }

    template(): string {
        return `
        <div>

        <input placeholder="${this.model.get('name')}" />
            <button class="set-name">Change Name</button>
            <button class="set-age" >Set random age</button>
            <button class="save-model">Save User</button>
        </div>
        `;
    }
}