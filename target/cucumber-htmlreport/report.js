$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myFeature.feature");
formatter.feature({
  "line": 2,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Title of your scenario",
  "description": "",
  "id": "title-of-your-feature;title-of-your-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to write a step with precondition",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I complete action",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I validate the outcomes",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.i_want_to_write_a_step_with_precondition()"
});
formatter.result({
  "duration": 215865779,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_complete_action()"
});
formatter.result({
  "duration": 98620,
  "status": "passed"
});
formatter.match({
  "location": "Steps.i_validate_the_outcomes()"
});
formatter.result({
  "duration": 225801,
  "status": "passed"
});
});