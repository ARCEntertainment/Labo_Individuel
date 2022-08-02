class clientDTO {
    id;
    pseudo;
    email;
    firstname;
    lastname;
    adress;

    constructor(id, pseudo, email, firstname, lastname, adress){
        this.id = id
        this.pseudo = pseudo
        this.email = email
        this.firstname = firstname
        this.lastname = lastname
        this.adress = adress
    }
}


module.exports = clientDTO