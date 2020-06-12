// ==UserScript==
// @name         Neptun Message Reader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Krachi9
// @match        https://frame.neptun.bme.hu/hallgatoi/main.aspx?ismenuclick=true&ctrl=inbox
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     var read = $('<input type="button" class="gridbutton" id="function_readall" value="Read all" onclick="readAll()">');
    $("#function_delete0").after(read);
    var scriptElem = document.createElement('script');
    scriptElem.innerHTML = 'function readAll(){var newMessages = document.getElementsByClassName("Row1_Bold");for(var i =0; i < newMessages.length; i++){var link = newMessages[i].getElementsByClassName("link");link[0].click();var backButton = document.getElementsByClassName("ui-button");for(var j = 0; j < backButton.lenght; j++){if(backButton[i].value == "Vissza"){backButton[i].click();}}}}';
    document.body.appendChild(scriptElem);

})();
