import { MongoLogger, BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logger.js";
import User from "../models/user.js";
import UserService from "../services/userServices.js";
import Customer from "../models/customer.js"
console.log("User component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "serkn", "sentilay", "antalya")
let user2 = new User(2, "ali", "sentilay", "antalya")

userService.add(user1)
userService.add(user2)
//console.log(userService.list())
//console.log(userService.getById(1))

let customer = { id: 1, firstName: "serkan" }

customer.lastName = "sentilay"
console.log(customer.lastName)

console.log("*******************")

userService.load()
let customerToAdd = new Customer(1, "serkan", "sentilay", "Ankara", "asdasd")
customerToAdd.type = "customer"
userService.add(customerToAdd)
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())