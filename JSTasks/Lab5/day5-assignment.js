
// 1. Predict (in comments) the output order of this code, then run to verify.
   console.log(a());
   var b = function(){ return 'B'; };
   function a(){ return 'A'; }
   console.log(b());
   // Output will be:
   // A
   // B
//    After verifying, explain (one short line) why a works before definition and b does not.
// Explanation: Function declaration (a) is hoisted , but (b) is not

// 2. Rewrite a function declaration sum(a,b) into a function expression stored in a variable named add and confirm both produce same result for (3,4).
   function sum(a,b){ return a+b; }
   var add = function(a,b){ return a+b; }
   console.log(sum(3,4)); 
   console.log(add(3,4)); 

// 3. Create a named function expression assigned to var factorial. Use the internal name ONLY for recursion. Log factorial(5). Show (comment) that the internal name is not global.
   // Named Function Expression
      var factorial = function fact(n) {
          if (n <= 1) return 1;
          return n * fact(n - 1); 
         };

      console.log(factorial(5)); 

      //console.log(fact(5)); // Uncaught ReferenceError: fact is not defined


// 4. Write a function showInfo that logs arguments.length and each argument. Call it with 0, then 2, then 5 arguments.
   function showInfo() {
       console.log(arguments.length);
       for (var i = 0; i < arguments.length; i++) {
           console.log(arguments[i]);
       }
   }
   showInfo(); 
   showInfo('Hello', 42); 
   showInfo(1, 2, 3, 4, 5);

// 5. Write a function mutate(x,y) that changes x and y inside and shows arguments[0] / arguments[1] before and after. Explain result in a comment.
   function mutate(x, y) {
       console.log('Before :');
       console.log('x:', x, 'arguments[0]:', arguments[0]);
       console.log('y:', y, 'arguments[1]:', arguments[1]);

       x = x * 2;
       y = y + ' world';

       console.log('After mutation:');
       console.log('x:', x, 'arguments[0]:', arguments[0]);
       console.log('y:', y, 'arguments[1]:', arguments[1]);
   }
   mutate(5, 'Hello');

// 6. Implement sumAll() using only the arguments object (no arrays) to total all numeric arguments. Test sumAll(2,5,3) and sumAll().
   function sumAll() {
       var total = 0;
       for (var i = 0; i < arguments.length; i++) {
           total += arguments[i];
       }
       return total;
   }
   console.log(sumAll(2, 5, 3)); //10
   console.log(sumAll()); //0

// 7.  Implement sumAll() using only the arguments object but with the Array method reduce.
   function sumAll1() {
    var argsArray = [];
    for (var i = 0; i < arguments.length; i++) {
        argsArray.push(arguments[i]);
    }
    var total = argsArray.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);

    return total;
}
console.log(sumAll1(1, 2, 3, 4, 5)); // 15
console.log(sumAll1(10, -2, 8));     // 16

// 8. Write describeValue that returns different strings based on number of args: 0 -> 'none', 1 -> 'one:'+val, 2 -> 'two:'+a+','+b else 'too many'.
function describeValue() {
    if (arguments.length === 0) {
        return 'none';
    } else if (arguments.length === 1) {
        return 'one: ' + arguments[0];
    } else if (arguments.length === 2) {
        return 'two: ' + arguments[0] + ', ' + arguments[1];
    } else {
        return 'too many';
    }
}
console.log(describeValue());
console.log(describeValue(42)); 
console.log(describeValue('Hello', 'World')); 
console.log(describeValue(1, 2, 3)); 

// 9. Create an array funcs of three small anonymous functions that transform a number. Apply them in order to start = 10 (loop). Log final result.
var funcs = [
    function(n) { return n + 5; },
    function(n) { return n * 2; },
    function(n) { return n - 3; }
];

var start = 10;
for (var i = 0; i < funcs.length; i++) {
    start = funcs[i](start);
}
console.log(start); // ((10 + 5) * 2) - 3 = 27

// 10. Write makeMultiplier(factor) returning a function(n) that multiplies. Create double and triple; test with 7.
function makeMultiplier(factor) {
    return function(n) {
        return n * factor;
    };
}
var double = makeMultiplier(2);
var triple = makeMultiplier(3);
console.log(double(7)); 
console.log(triple(7)); 

// 11. Implement once(fn) runs fn only first time, returns its return value. Test with a function that logs and returns a string.
function once(fn) {
    var called = false;
    var result;
    return function() {
        if (!called) {
            called = true;
            result = fn.apply(this, arguments);
        }
        return result;
    };
}
var sayHello = once(function() {
    console.log('Hello!');
    return 'Greeting sent';
});
console.log(sayHello()); 
console.log(sayHello()); 
console.log(sayHello());

// 14. makeAdder(start) returns a function that adds its argument to internal total and returns current total each call. Demonstrate separate instances.
function makeAdder(start) {
    var total = start;
    return function(n) {
        total += n;
        return total;
    };
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2)); 
console.log(add5(3)); 
console.log(add10(2)); 
console.log(add10(5));


// 17. Make object user with name and method sayHi logging 'Hi NAME'. Call sayHi, then assign var f = user.sayHi; call f(). Explain (comment) output difference.
var user = {
    name: 'John',
    sayHi: function() {
        console.log('Hi ' + this.name);
    }
};
user.sayHi(); 
var f = user.sayHi;
f(); 
//in the first call 'this' refers to the user object so it logs 'Hi John' in the second call 'this' is undefined so it logs 'Hi        '.

// 18. Re-use sayHi but call it with another object { name: 'Sara' } using two different ways.
user.sayHi.call({ name: 'Sara' });
user.sayHi.apply({ name: 'Sara' });


// 19. Create greeter.greet(greeting,sign). Use apply to invoke it on { name: 'Ali' } with 'Hello','!'.
var greeter = {
    greet: function(greeting, sign) {
        console.log(greeting + ' ' + this.name + sign);
    }
};
greeter.greet.apply({ name: 'Ali' }, ['Hello', '!']);


// 20. Bind greet to { name:'Lara' } as greetLara (no preset greeting). Call with different greetings.
var greetLara = greeter.greet.bind({ name: 'Lara' });
greetLara('Hi', '!!');
greetLara('Welcome', '***');

// 21. Bind greet to produce a sayHello(obj) that always uses greeting 'Hello' but variable sign(!,*,!!,<#).
var sayHello = greeter.greet.bind({ name: 'Kareem' }, 'Hello');
sayHello('!');
sayHello('***');


// 22. Use slice inside a function to convert its arguments(remember it is an array like) to a real array and log reversed copy without mutating original.
function logReversed() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
    var copy = args.slice();
    var reversed = copy.reverse();

    console.log("Original:", args);
    console.log("Reversed:", reversed);
}

logReversed(1, 2, 3, 4, 5);
// 23. Given arr = [5,2,11,7] find max WITHOUT loop using max(). Then show an alternative with a loop.
var arr = [5, 2, 11, 7];
var max1 = Math.max.apply(null, arr);
console.log(max1);

var maxVal = arr[0]; 
for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
        maxVal = arr[i];
    }
}
console.log(maxVal);

// 24. Demonstrate calling Math.max with individual numbers using call and explain why apply is better.
console.log(Math.max.call(null, 5, 2, 11, 7));
     // apply is better when dealing with arrays because it allows passing an array of arguments directly while call requires listing each argument individually

// 25. Convert string concatenation 'User: '+name+' Age: '+(age+1) into a template literal equivalent.
var name = 'John';
var age = 30;
var message = `User: ${name} Age: ${age + 1}`;
console.log(message);

// 26. Create a multi-line template with variables title and body and log it; show classical \n build version for contrast.
var title = 'My Title';
var body = 'This is the body of the message.';
var templateLiteral = `
Title: ${title}
Body: ${body}
`;
console.log(templateLiteral);

var classical = 'Title: ' + title + '\n' + 'Body: ' + body + '\n';
console.log(classical);

// 27. Write a block with var i and let j inside if(true) and log both inside and outside. Comment which leaks.
if (true) {
    var i = 10; 
    let j = 20;
    console.log('Inside block: i =', i); 
    console.log('Inside block: j =', j); 
}
console.log('Outside block: i =', i); 
// console.log('Outside block: j =', j); // Uncaught ReferenceError: j is not defined


// 28. Write code that tries to log x before let x = 5;.
//console.log(x); // Uncaught ReferenceError: Cannot access 'x' before initialization
 let x = 5;

// 29. Show that pushing to a const array works but reassigning it does not (comment error you would get if attempted—do not actually break execution).
   const arrConst = [1, 2, 3];
   arrConst.push(4);
   console.log(arrConst);
    //arrConst = [5, 6, 7]; // Uncaught TypeError: Assignment to constant variable.

// 30. Rewrite a normal function square(n) { return n*n; } as arrow in three forms: full body, concise, inline in map over [1,2,3].

var squareFull = (n) => {
    return n * n;
};
console.log(squareFull(4)); 

var squareConcise = n => n * n;
console.log(squareConcise(4));

var numbers = [1, 2, 3];
var squares = numbers.map(n => n * n);
console.log(squares);

// 31. Create object timer with count:0 and method startClassic using setInterval(function(){...}) and startArrow using setInterval(()=>{...}). Show difference in how this works (stop after a few increments using clearInterval).


// 32. Write an arrow function that returns an object {v:10}. Show the need for parentheses.
var getObject = () => ({ v: 10 });// to deal with it as an object not a block
console.log(getObject()); 

// 33. Give one example where arrow is a bad choice (e.g., method needing dynamic this).
var obj = {
    value: 42,
    getValue: function() {
        return this.value;
    }
};
console.log(obj.getValue()); // 42


// 34. Start with function greet(name){ return 'Hi '+name+'!'; } Convert to arrow function using Const not let ya habeby :).
const greet = name => 'Hi ' + name + '!';
console.log(greet('Alice'));

// 35. Build pipeline functions: add2, times3, minus1 (all arrows). Write runPipeline(n, fnsArray) that loops through and applies each. Test runPipeline(5, [add2,times3,minus1]).
const add2 = n => n + 2;
const time3 = n => n*3;
const minus1 = n => n -1;
function runPipeline(n, fnsArray) {
      for (let i = 0; i < fnsArray.length; i++) {
         n = fnsArray[i](n);
      }
      return n;
}
console.log(runPipeline(5, [add2, time3, minus1]));





