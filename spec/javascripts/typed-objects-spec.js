// Here is your first test rewritten to expect a constructor function.

describe ("Tree", function(){
  it("should return a tree object", function(){
    var tree= new Tree()
    expect(tree).toBeDefined();
  });
});


// Copy the rest of the specs from plain-old-js-objects-spec.js one at a time and modify them to use constructor function OO.
