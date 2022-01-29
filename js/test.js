// ==UserScript==
// @name        ReplyAllHide
// @namespace   ReplyAllHide
// @description hide reply-all button from LA
// @include     http://helpdesk.nazwa.pl/agent/*
// @include     https://helpdesk.nazwa.pl/agent/*
// @version     1.0
// @grant       none
// @run-at      document-idle
// @author      Szymon Szczepanowski
// @downloadURL https://server493957.nazwa.pl/praca/replyallhide.js
// ==/UserScript==

//simple and easy

function hide() {
    let replyAllBar = document.querySelector('.InputBoxButton')
    let replyAllBtn = document.querySelector('.InputBoxButton-primary')

    replyAllBar.onclick = null
    replyAllBtn.onclick = null
}

function main() {
    //niby interwał pracuje cały czas, ale nie zapycha niczego więc lux
    let x = setInterval(() => {
        if(document.querySelector('.InputBoxButton')) hide()
    }, 500)
}

main()