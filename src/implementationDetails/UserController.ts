import {User} from "./User";

export class UserController {
    // public static setFullName(firstName: string, lastName: string) {
    //     let user = new User();
    //     user.Name = user.getFullName(firstName, lastName);
    //     return user.Name;
    // }

    public static setFullName(firstName: string, lastName: string) {
        let user = new User();
        user.Name = {firstName: firstName, lastName: lastName};
        return user.Name;
    }
}
