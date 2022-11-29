import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService {
    //export default dediğimizde diğer sayfadan çağırdığımızda süslü parantezle kullanmıyoruz
    //direkt ismi yeterli

    constructor(loggerService) {
        this.customers = []
        this.employees = []
        this.errors = []
        this.loggerService = loggerService
    }

    load() {
        // for of her bir users dolaş 
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    }
                    break;
                default:
                    this.errors.push(new DataError("Wrong user type", user))
                    break;
            }
        }
    }

    checkCustomerValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErros = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErros = true
                this.errors.push(
                    new DataError(`Validation problem ${field} is required`, user)
                )
            }
        }

        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasErros = true
            this.errors.push(new DataError(`Validation problem ${user.age} is not a number`, user))
        }

        return hasErros
    }

    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErros = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErros = true
                this.errors.push(
                    new DataError(`Validation problem ${field} is required`, user)
                )
            }
        }
        // Number.isNan numara degilse anlamında
        //parse çevirme parseInt integere sayısala çevirme
        // +user.age true deger ifadeyi açıklar truthy diğeri ! falsy 
        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasErros = true
            this.errors.push(new DataError(`Validation problem ${user.age} is not a number`, user))
        }
        return hasErros
    }

    add(user) {
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }
                break;
            case "employee":
                if (!this.checkEmployeeValidityForErrors(user)) {
                    this.employees.push(user)
                }
                break;
            default:
                this.errors.push(new DataError("This user can not be added. Wrong user type", user))
                break;
        }
        this.loggerService.log(user)
    }

    listCustmers() {
        return this.customers
    }

    getCustomerById(id) {
        return this.customers.find(u => u.id === id)
    }

    getCustomersSorted() {
        return this.customers.sort((customer1, customer2) => {
            if (customer1.firstName > customer2.firstName) {
                return 1;
            }
            else if (customer1.firstName === customer2.firstName) {
                return 0
            }
            else {
                return -1
            }
        })
    }

}