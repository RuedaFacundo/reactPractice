export class Contact {
    name = '';
    surName = '';
    email = '';
    connected = false;

    constructor(name, surName, email, connected) {
        this.name = name;
        this.surName = surName;
        this.email = email;
        this.connected = connected;
    }
}