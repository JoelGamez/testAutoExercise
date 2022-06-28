import ActionHelper from '../../Util/actionHelper';
import Page from './page';

class CreateAccountPage extends Page {
    /**
     * define selectors using getter methods
     */
    get firstNameField () {
        return $('#customer_firstname');
    }

    get lastNameField () {
        return $('#customer_lastname');
    }

    get emailField () {
        return $('#email');
    }

    get passwordField () {
        return $('#passwd');
    }

    get addressFirstNameField () {
        return $('#firstname');
    }

    get addressLastNameField () {
        return $('#lastname');
    }

    get addressLineOneField () {
        return $('#address1');
    }

    get addressCityField () {
        return $('#city');
    }

    get stateDDBtn () {
        return $('#uniform-id_state');
    }

    get zipField () {
        return $('#postcode');
    }

    get mobilePhoneField () {
        return $('#phone_mobile');
    }

    get pageHeader () {
        return $('h1=Create an account');
    }

    get regosterBtn () {
        return $('#submitAccount');
    }

    get createAccountEmailField () {
        return $('#email_create');
    }

    get createAccountBtn () {
        return $('#SubmitCreate');
    }

    async fillCreateAccountForm () {
        let user = await browser.sharedStore.get(`user${process.pid}`)
        await ActionHelper.input(this.firstNameField,user.firstName)
        await ActionHelper.input(this.lastNameField,user.lastName)
        await ActionHelper.input(this.passwordField,user.password)
        await ActionHelper.input(this.addressFirstNameField,user.firstName)
        await ActionHelper.input(this.addressLastNameField,user.lastName)
        await ActionHelper.input(this.addressLineOneField,user.street)
        await ActionHelper.input(this.addressCityField,user.city)
        await ActionHelper.click(this.stateDDBtn)
        await browser.pause(1500)
        await browser.keys(user.state)
        await browser.keys('Enter')
        await ActionHelper.input(this.zipField,user.zip.split('-')[0])
        await ActionHelper.input(this.mobilePhoneField,user.mobile)
    }
}

export default new CreateAccountPage();
