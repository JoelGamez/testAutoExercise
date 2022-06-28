const fs = require('fs');
const yaml = require('js-yaml');
const fileContents = fs.readFileSync( './config/prod.yaml')
const urls = yaml.load(fileContents)['urls'];

import Page from '../pageobjects/page'


class MyAccount extends Page{
    /**
     * define selectors using getter methods
     */
    get signOutBtn () {
        return $('a=Sign out');
    }

    get pageHeader () {
        return $('h1=My account');
    }



}

export default new MyAccount();
