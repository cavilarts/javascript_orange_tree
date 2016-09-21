# Orange Trees & Jasmine Challenge

### Learning Competencies

* Write OO JavaScript using constructor functions and prototypal methods
* Begin working with MVC concepts in JavaScript
* Unit test JavaScript code using the Jasmine JS testing framework
* Gain familiarity with using [HTML5 Boilerplate](http://html5boilerplate.com/) to utilize HTML/CSS best practices
* Gain familiarity with file structure/naming conventions

### Summary

Remember our old friend **Orange Trees** from Ruby? Let's revisit it in JavaScript.

We have two HTML pages that we'll be utilizing:
* `index.html`, which represents our actual 'application:' what the end-user sees and interacts with
* `test/SpecRunner.html`, which represents the unit tests for the OO JS we've written for our application

We'll be utilizing some MVC concepts to create the tree and its corresponding view.

The tree represents the "model" in MVC, and contains data-related properties and methods. It
should NOT contain HTML, CSS, or references to the DOM, if we can help it. Models are *just
data*.

Read through the test specs in the `test/spec/tree.spec.js` file to determine what features
(properties and methods) the tree should have.

The view represents the "view" in MVC, and contains UI-related properties and methods. It MAY
contain HTML, CSS, and references to the DOM, as well as a reference to the model, our tree.
Our view represents the *user interface*, as well as the *event bindings* associated with the UI.

Read through the test specs in the `test/spec/view.spec.js` file to determine what features the
view should have. Note that you may have to write additional tests once your view is feature-complete!

### Releases

##### Release 0: TDDing the Model with Jasmine

We've written a lot of tests for you in Jasmine. Your job is to write the code for the model and
view to make these tests pass.

Open `SpecRunner.html`, found in the `test` directory. You should see your first failing test.

Our code for the model tests resides in `test/spec/tree.spec.js`.

Write OO JS code for the model in `javascripts/tree.js` to make this test pass.  Then uncomment the
next test (change the `xit` to `it`) and keep going until all the specs are passing.

##### Release 1: TDDing the View with Jasmine

Much like for our tree model, we've written a Jasmine test for you to test the view. Write the code
for the view to make this test pass.

Our code for the view tests resides in `test/spec/view.spec.js`.

Write OO JS code for the view in `javascripts/view.js` to make this test pass.

We'll come back to this test suite later to add additional tests for new functionality!

##### Release 2: Expanding the View

Now let's add some interaction with the DOM. Write your DOM interaction code in your view object,
found in `javascripts/view.js`. Use the objects you built in releases 0 and 1.

* Write code that allows you to plant a tree by clicking a button. It should be visible on the screen somehow (there is a tree image in the `images` directory you may use)
* Write code that allows you to age a tree by clicking a button. If you age the tree enough, there should be oranges that appear on the tree (use the orange image)
* Write code that allows you to pick an orange off the tree by clicking a button

Testing DOM-interactive JavaScript with Jasmine requires a lot of setup, since
`SpecRunner.html` has no way to access the HTML in `index.html`. You have to create mock
HTML elements in your testing suite for any of your `view.js` tests to run.

We've created these mock elements for you in the view spec. Read through the spec to see how
the mock elements are appended and removed before/after each test.

We've already given you one pending test example in `view.spec.js`. Get it working, and then
continue to add new tests for all your functions that create, read, update, or delete anything
from the DOM.

##### Release 3: Bonus! (optional)

* Have some fun. Can you add a pear tree? Can you do it TDD-style?
* Can you pick all the fruit that grows each year and put it in a basket?
* Can you know the number of fruit in the basket and the average diameter of that fruit at any time?

### Resources

1. [tryJasmine.com](http://tryjasmine.com)
1. [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
1. [Jasmine Documentation](http://pivotal.github.io/jasmine/)
1. [Jasmine Cheat Sheet](http://www.cheatography.com/citguy/cheat-sheets/jasmine-js-testing/)
1. [Another Jasmine Tutorial](http://evanhahn.com/how-do-i-jasmine/)
