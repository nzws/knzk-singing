// ==UserScript==
// @name         Knzk_singing
// @namespace    https://github.com/yuzulabo
// @version      1.1.1
// @description  おにいさんがうたいます
// @author       neziri_wasabi (yuzu_1203)
// @match        https://knzkoniisan.m.to/web/*
// @match        https://friends.nico/web/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// @license       MIT License
// ==/UserScript==

(function() {
    var audio_src  = Array();
    //これを足すとバリエーションが増えるよ
    audio_src[0] = "https://s3.mqube.net/t/files/item/file/201708/20170803218835/adcd0456.wav";
    audio_src[1] = "https://s3.mqube.net/t/files/item/file/201708/20170804623468/766aac33.wav";

    var audio_rand = Math.floor(Math.random()*audio_src.length);
    var nav = document.getElementsByClassName('compose-form');

    var audio_elem = document.createElement('audio');
    audio_elem.src = audio_src[audio_rand];
    audio_elem.setAttribute('controls', '1');
    audio_elem.setAttribute('autoplay', '1');
    audio_elem.setAttribute('loop', '1');

    $(nav).append(audio_elem);
    //nav.appendChild(audio_node); できない(；∀；)
})();
