import User from "./user.js"

export default class Customer extends User {
    constructor(id, firstName, lastName, city, age, creditCardNumber) {
        // super ile extends ettiğimiz Userdaki constructarı hedef alır onları işaretler gösterir, set edilir
        super(id, firstName, lastName, city, age)
        this.creditCardNumber = creditCardNumber
    }
}