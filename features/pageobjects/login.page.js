import ActionHelper from '../../Util/actionHelper';
import CreateAccountPage from './createAccount.page';
import Page from './page';


class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get errorAlert () {
        return $('.alert-danger');
    }

    get pageHeader () {
        return $('h1=Authentication');
    }

    get emailField () {
        return $('#email');
    }

    get passwordField () {
        return $('#passwd');
    }

    get loginBtn () {
        return $('#SubmitLogin');
    }

    get createAccountEmailField () {
        return $('#email_create');
    }

    get createAccountBtn () {
        return $('#SubmitCreate');
    }

    async invalidLogin (username, password) {
        await ActionHelper.input(this.emailField,'invalidemail@12345.com')
        await ActionHelper.input(this.passwordField,'12345678')
        await ActionHelper.click(this.loginBtn)
    }

    async newUserValidLogin (username, password) {
        const user = await browser.sharedStore.get(`user${process.pid}`)
        await ActionHelper.input(this.emailField,user.email)
        await ActionHelper.input(this.passwordField,user.password)
        await ActionHelper.click(this.loginBtn)
    }


    async beginCreateAccount (user) {
        await ActionHelper.input(this.createAccountEmailField,user.email)
        await ActionHelper.click(this.createAccountBtn)
        await CreateAccountPage.pageHeader.waitForDisplayed()
    }
}

export default new LoginPage();
