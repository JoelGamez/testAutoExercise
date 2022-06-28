import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/home.page';
import LoginPage from '../pageobjects/login.page'
import CreateAccountPage from '../pageobjects/createAccount.page';
import MyAccountPage from '../pageobjects/myAccount.page';
import ActionHelper from '../../Util/actionHelper'
const fs = require('fs');
const yaml = require('js-yaml');
const fileContents = fs.readFileSync('./config/prod.yaml')
const urls = yaml.load(fileContents)['urls'];



Given(/^I am on the home page$/, async () => {
    await HomePage.open()
});

Given(/^I click on sign in$/, async () => {
    await ActionHelper.click(HomePage.signInBtn)
    await LoginPage.pageHeader.waitForDisplayed()
});

When(/^I attempt to login with invalid credentials$/, async () => {
    await LoginPage.invalidLogin()
})

When(/^I enter email address & click create an account$/, async () => {
    const user =  ActionHelper.getFakeUser()
    browser.sharedStore.set(`user${process.pid}`, user)
    await LoginPage.beginCreateAccount(user)
})

When(/^I fill out the create an account form and click create$/, async () => {
    await CreateAccountPage.fillCreateAccountForm()
    await ActionHelper.click(CreateAccountPage.regosterBtn)
})

When(/^I click sign out$/, async () => {
    await ActionHelper.click(MyAccountPage.signOutBtn)
})

Then(/^I expect to see an invalid credentials error$/, async () => {
    await expect(LoginPage.errorAlert).toExist()
})

Then(/^I can sign back in with my credentials$/, async () => {
    await LoginPage.newUserValidLogin()
    await expect(MyAccountPage.pageHeader).toExist()
})




