export default class User {
    constructor(id, firstName, lastName, city, age) {
        //this User daki globalde this.id ye parametreden gelen idyi verdik 
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        this.age = age
    }
}