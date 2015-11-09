####Sakhile Technical Notes

## Workshops

* [Functions & Objects](./workshops/functions_and_objects_slides.html)
* [Useful algorithms](./workshops/useful_algorithms.md)
* Useful algoritms using functions (lodash)
* How does a web application work?
* Nelisa Spaza Shop

## Keep updated

To ensure your fork have the latest changes from this repository.

[Look at these instructions](https://help.github.com/articles/configuring-a-remote-for-a-fork/)

You need to create an upstream repository for your fork.

## Notes

Notes on things I learned & snippets of code that will make my life easier

### How to print a string to the console


#how do I print to the console again?

#This is how we write a function returning hello 

```javascript
var hello = function(){
console.log("hello world");
};
```

#This is how we write an if statement

```javascript

if (word.length == Sakhile){
console.log("hello Sakhi");
}else{
console.log("hello " + "Andre");
};
```

#A note about something else

#How to create a mocha test framework

```javascript

var ass = require("assert");

describe("in the ferry kata", function (){
	it("it should be able to create cars", function(){



		assert.aqual("car","car");
	});
	
});

```
# To run a mocha test type (mocha and the filename_test.js) and one should fail and other one pass

#This is a failling mocha test below
```javascript
/usr/local/lib/node_modules/mocha/lib/utils.js:591
      if (!files.length) throw new Error("cannot resolve path (or pattern) '" 
                               ^
Error: cannot resolve path (or pattern) 'test'
    at Object.lookupFiles (/usr/local/lib/node_modules/mocha/lib/utils.js:591:32)
    at runAgain (/usr/local/lib/node_modules/mocha/bin/_mocha:320:30)
    at Array.forEach (native)
    at Object.<anonymous> (/usr/local/lib/node_modules/mocha/bin/_mocha:319:6)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Function.Module.runMain (module.js:497:10)
    at startup (node.js:119:16)
    at node.js:902:3

```

add more here...

###If things get to long...

* [Todo something useful](notes/my_file.md) A short description here
* [Create a basic Express app](notes/my_file.md) How to get going with express
*[ sakhile link file](sakhile.md) this is how we add a link to our .md files
