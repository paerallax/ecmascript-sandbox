/*  Topic: Variable scope
 * - Problem instructions: Which comment lines in the code should be removed to print the uni of the person?
 * - Why?
 * - Relevant resources:
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */

 function problem(){
   const person = { age: 17, surname: "Brown", uni: "AUA", };
   //console.log(person.uni);
 }
 problem();
 //console.log(person.uni);

/*
 * Comments and the solution(base64 encripted)
VGhlIGNvbW1lbnQgbGluZXMgb2YgdGhlIGNvbnNvbGUubG9nIGluc2lkZSB0aGUgZnVuY3Rpb24g
c2hvdWxkIGJlIHJlbW92ZWQuCldoZW4gY2FsbGluZyB0aGUgZnVuY3Rpb24sIGl0IGNyZWF0ZXMg
dGhlIG9iamVjdCAicGVyc29uIiBpbnNpZGUgdGhlIHNjb3BlIG9mIHRoZSBmdW5jaXRvbiwKd2hp
Y2ggd2UgY2FuIHVzZSBpbnNpZGUgdGhlIGZ1bmN0aW9uLCBidXQgd2hpY2ggaXMgbm90IGRlZmlu
ZWQgb3V0c2lkZSBvZiB0aGUgZnVuY3Rpb24gKGNvbnN0IGhhcyBibG9jayBzY29wZSwgaXQgY2Fu
J3QgYmUgdXNlZCBvdXRzaWRlIG9mIGl0J3MgYmxvY2spCmZ1bmN0aW9uIHByb2JsZW0oKXsKICBj
b25zdCBwZXJzb24gPSB7IGFnZTogMTcsIHN1cm5hbWU6ICJCcm93biIsIHVuaTogIkFVQSIsIH07
CiAgY29uc29sZS5sb2cocGVyc29uLnVuaSk7Cn0KcHJvYmxlbSgpOwovL2NvbnNvbGUubG9nKHBl
cnNvbi51bmkpOwo=
*/
