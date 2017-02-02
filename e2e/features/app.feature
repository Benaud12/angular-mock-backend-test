Feature: App

  Scenario: Initial load
    Given an anonymous user
    When I open the app
    Then I should see the app title
    And I should see the default stuff