# Test Automation Exercise

## Setup

1. Clone repo from GitHub

2. Install from terminal: `npm i`

## Environment loader

1. The ability to run test in specific environment
    - `ENV_DATA={env} npm run wdio -- --cucumberOpts.tagExpression='@scenarioXX'`
        - `If env is not specified prod will be the default environment`

## Running tests

1. From terminal: 
    - example using tags by feature name: `npm run wdio -- --cucumberOpts.tagExpression='@Login'`
    - example using tags by scenario name: `npm run wdio -- --cucumberOpts.tagExpression='@scenarioXX'`

