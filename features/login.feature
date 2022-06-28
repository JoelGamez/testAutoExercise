@Login
Feature: Dealerware Coding Challenge

  @scenarioOne
  Scenario Outline: As a user, I can not login with invalid credentials

    Given I am on the home page
    And I click on sign in
    And I attempt to login with invalid credentials
    Then I expect to see an invalid credentials error

  @scenarioTwo
  Scenario Outline: As a user, I can not login with invalid credentials

    Given I am on the home page
    And I click on sign in
    When I enter email address & click create an account
    And I fill out the create an account form and click create
    And I click sign out
    Then I can sign back in with my credentials