/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

//TODO: Click on button to give object
    document.getElementById("run").addEventListener("click", function (){
        let bobAttributes = {
            firstname:"Bob",
            lastname:'Wauters',
            age:'26',
            birthplace:'brasschaat',
            hobbies:'basketball',
        }

        //TODO: display console with objects in
    console.log("hello these are my attributes: first name: " + bobAttributes.firstname + " last name:  " + bobAttributes.lastname + " my age is " + bobAttributes.age +" Im born in " + bobAttributes.birthplace + " And I like to play "+ bobAttributes.hobbies)
    });




})();
