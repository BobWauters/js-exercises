/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// TODO: Review & Redo again
// target = (change me name)
// find way to find current time instead of just value 18

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here


    const newDate = new Date();
    const hours = newDate.getHours()
    if (hours<18) {
        document.getElementById("target").innerHTML = "Hellow"
    }
    else {
        document.getElementById("target").innerHTML = "Evening"
    }

})();
