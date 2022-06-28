const fs = require('fs');
const yaml = require('js-yaml');
const fileContents = fs.readFileSync( './config/prod.yaml')
const urls = yaml.load(fileContents)['urls'];

import Page from '../pageobjects/page'


class HomePage extends Page{
    /**
     * define selectors using getter methods
     */
    get signInBtn () {
        return $('.login');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open(urls.home_url);
    }
}

export default new HomePage();
