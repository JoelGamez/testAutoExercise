const fs = require('fs')
const yaml = require('js-yaml')
const prodYaml = fs.readFileSync('./config/prod.yaml', 'utf8')

// this envLoader can take in ENV_DATA variable passed into the terminal command and point to desginated enviroments
class EnvLoader {

  static getEnv (envData) {
    envData = process.env.ENV_DATA
    const dataEnv = {}

    if (envData === 'prod') {
        dataEnv.yaml = prodYaml
        dataEnv.baseURL = 'http://automationpractice.com/index.php'
        dataEnv.envName = 'prod'
        dataEnv.filePath = './config/prod.yaml'

        return dataEnv

// staging logic commented out since not provided for the challenge

    // } else if (envData === 'staging') {
    //   dataEnv.yaml = stagingYaml
    //   dataEnv.baseURL = 'http://staging.automationpractice.com/index.php'
    //   dataEnv.envName = 'staging'
    //   dataEnv.filePath = './config/staging.yaml'

    //   return dataEnv
    } else {
        dataEnv.yaml = prodYaml
        dataEnv.baseURL = 'http://automationpractice.com/index.php'
        dataEnv.envName = 'prod'
        dataEnv.filePath = './config/staging.yaml'


        return dataEnv
    }
  }

}

module.exports = EnvLoader
