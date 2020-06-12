// ==UserScript==
// @name           Neptun PowerUp!
// @namespace      http://example.org
// @description    Felturbózza a Neptun-odat
// @version        1.52.9
// @downloadURL    https://github.com/solymosi/npu/raw/master/npu.user.js
// @include        https://*neptun*/*hallgato*/*
// @include        https://*neptun*/*oktato*/*
// @include        https://*hallgato*.*neptun*/*
// @include        https://*oktato*.*neptun*/*
// @include        https://netw*.nnet.sze.hu/hallgato/*
// @include        https://nappw.dfad.duf.hu/hallgato/*
// @include        https://host.sdakft.hu/*
// @include        https://neptun.ejf.hu/ejfhw/*
// @grant          GM.xmlHttpRequest
// @grant          GM_xmlhttpRequest
// @grant          GM.getValue
// @grant          GM_getValue
// @grant          GM.setValue
// @grant          GM_setValue
// @grant          GM.info
// @grant          GM_info
// @require        https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js
// ==/UserScript==
(function() {
    'use strict';
     var read = $('<input type="button" class="gridbutton" id="function_readall" value="Read all" onclick="readAll()">');
    $("#function_delete0").after(read);
    var scriptElem = document.createElement('script');
    scriptElem.innerHTML = 'function readAll(){var newMessages = document.getElementsByClassName("Row1_Bold");for(var i =0; i < newMessages.length; i++){var link = newMessages[i].getElementsByClassName("link");link[0].click();var backButton = document.getElementsByClassName("ui-button");for(var j = 0; j < backButton.lenght; j++){if(backButton[i].value == "Vissza"){backButton[i].click();}}}}';
    document.body.appendChild(scriptElem);

})();
