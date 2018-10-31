	/**
 * @author Matthias Reischer
 * Sample File for Javascript functionality
 *
 */

/*
function printSomeThing() {
    alert("Button pressed!");
}*/

    function bildTausch(){

    	//console.log(document.getElementById("bild1").src);

    if (document.getElementById("bild").src.includes ("images/yeah.gif")){

        document.getElementById("bild").src = "images/congratulation.gif";

        } else {
        document.getElementById("bild").src = "images/yeah.gif";
    }
    }