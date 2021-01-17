## Private property

**Problem:**
```javascript
/**
Create a "private property" called `secret` so that is accessible only from a privileged method called `getSecret` 
 and mutable by a privileged method called `setSecret`.
*/

x.secret // undefined
x.getSecret() // 'Our secret' (or whatever value the secret has)
x.setSecret('shhhhh')
x.getSecret() // 'shhhhh'
```
<!-- problem 1 ends -->

**Problem2:**
```
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
```