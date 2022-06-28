const { faker } = require('@faker-js/faker');

class ActionHelper {

    static async click (element) {
        await element.waitForDisplayed()
        await element.click()
    }

    static async input (element, inputText) {
        await element.waitForDisplayed()
        await element.addValue(inputText)
    }

    static getFakeUser() {
        let data = faker
        let user = {}
        user.firstName = data.name.firstName()
        user.lastName = data.name.lastName()
        user.email = data.internet.email()
        user.password = data.internet.password()
        user.city = data.address.cityName()
        user.street = data.address.streetAddress()
        user.state = data.address.state()
        user.zip = data.address.zipCode()

        if (data.phone.number().includes(' x')){
            user.mobile = data.phone.number().split(' x')[0]
        } else {
            user.mobile = data.phone.number()
        }
        
        return user
    }   

}

module.exports = ActionHelper;
