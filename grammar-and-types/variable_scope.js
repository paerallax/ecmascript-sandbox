/**
   Topic: variable scope, the 'this' keyword.
 * Problem 1 instructions: What will function problem1 return? Why? Can we create a variable without
 explicitly mentioning the modifier?
 * Relevant resources:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 * - http://stackoverflow.com/questions/964910/is-javascript-an-untyped-language
 */

x = 10;

function problem1(){
  return this.x;
}

problem1();

/*
Problem solution --> 
VGhlIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIDEwLiBUaGUgJ3RoaXMnIGtleXdvcmQgaW4gSlMgaW4gdGhp
cyBjYXNlIHJlZmVycyB0byB0aGUgZ2xvYmFsIG9iamVjdCBzbyBpdCBjYW4gcmVhZCB4J3MgdmFsdWUg
KEkndmUgcHJvdmlkZWQgbGlua3MgaW4gdGhlIGhlYWRlciBvbiB0aGUgdG9waWMpLiBBbHNvLCBKUyBp
cyBkeW5hbWljYWxseSB0eXBlZCBzbyB3ZSBjYW4gb21pdCB2YXIsIGxldCwgY29uc3QgKHNlZSB0aGUg
M3JkIGxpbmspLg0K
*/
