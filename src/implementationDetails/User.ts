export class User {
    // public Name: string;
    // getFullName(firstName: string, lastName: string) {
    //     firstName = firstName.trim();
    //     lastName = lastName.trim();
    //     return firstName + " " + lastName;
    // }

    private _name: string;
    get Name() {
        return this._name;
    }

    set Name(name: any) {
        this._name = this.getFullName(name.firstName, name.lastName);
    }

    private getFullName(firstName: string, lastName: string) {
        firstName = firstName.trim();
        lastName = lastName.trim();
        return firstName + " " + lastName;
    }

    constructor() {}
}
