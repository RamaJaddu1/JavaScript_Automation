Feature: Training feature

Some scenarios to understand better how protractor and cucumber work

Background: Navigate Browser
    Given I navigate to angular website

  

  @training_0
  Scenario: Test angular features button
    Given  I click the FEATURES button
    Then the text FEATURES & BENEFITS is displayed


  @training_1
  Scenario: Test angular features button
    Given I click the DOCS button
    Then the text Introduction to the Angular Docs is displayed


  @training_4
  Scenario: Test angular features button
    Given I search for text "Protractor"
    Then Some results are found

 @training_3
  Scenario: Test angular features button
    Given I search for text "Nothing"
    Then No result found
