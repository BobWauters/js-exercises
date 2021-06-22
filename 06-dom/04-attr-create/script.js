/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(function() {

    // your code here

    //TODO: verify and check again

    //TODO: get image               DONE
    let orginalImage =document.querySelector('#source');
    let valueOfImage= orginalImage.getAttribute("data-img");


    //TODO: create new element      DONE
    let newImage = document.createElement("img");
    newImage.src= valueOfImage;

    //TODO:add image                DONE

    document.querySelector("#target").appendChild(newImage);

    //TODO: remove image            DONE

    orginalImage.remove();

})();
