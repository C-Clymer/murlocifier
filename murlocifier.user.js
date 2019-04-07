// ==UserScript==
// @name         Murlocifier
// @version      1
// @description  Simple script to use Blizzards 2019 April Fools code to murlocify all websites a user goes to.
// @description  https://news.blizzard.com/en-us/blizzard/22940237/april-fools-nerglish-translator-available-now
// @author       Valsh
// @include      *
// @grant        none
// @run-at      document-end
// ==/UserScript==

(function() {
    'use strict';
    function callback(){
        window.mmmurglurk()
    }
    var s=document.createElement("script");
    s.src="https://assets.webn.mobi/nerglish/nerglish.js";
    if(s.addEventListener){
        s.addEventListener("load",callback,false)
    }
    else if(s.readyState){
        s.onreadystatechange=callback
    }
    document.body.appendChild(s);

})();
