// ==UserScript==
// @name         Neptun Message Reader
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Try to take over the world and read some messages!
// @author       Krachi9
// @match        https://frame.neptun.bme.hu/hallgatoi/main.aspx?ismenuclick=true&ctrl=inbox
// @match        https://frame.neptun.bme.hu/hallgatoi/main.aspx
// @downloadURL  https://github.com/krachi9/NeptunMessageReader/raw/master/nmr.user.js// 
// @require      https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
     var read = $('<input type="button" class="gridbutton" id="function_readall" value="Read all" onclick="readAll()">');
    $("#function_delete0").after(read);
    var scriptElem = document.createElement('script');
    scriptElem.innerHTML = 'function readAll(){var newMessages = document.getElementsByClassName("Row1_Bold");for(var i =0; i < newMessages.length; i++){var link = newMessages[i].getElementsByClassName("link");link[0].click();var backButton = document.getElementsByClassName("ui-button");for(var j = 0; j < backButton.lenght; j++){if(backButton[i].value == "Vissza"){backButton[i].click();}}}}';
    document.body.appendChild(scriptElem);

})();
