// ==UserScript==
// @name         AWS Docs Elements Cleaner
// @namespace    https://docs.aws.amazon.com
// @include      https://docs.aws.amazon.com/*
// @version      0.1
// @description  Remove unwanted footer and other elements from AWS Docs pages
// @author       Shariq Mustaquim
// @match        https://docs.aws.amazon.com/*
// @grant        none
// @require  http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

(function() {
   'use strict';

    //console.error("Starting...");

    waitForKeyElements ('#awsdocs-footer-row > div:nth-child(2) > div.awsui-util-mb-m.ng-scope > div:nth-child(1) > div.next-link.awsui-util-font-size-3.ng-scope > a', actionFunction1);

    function actionFunction1 (jNode) {
        jNode.append(" >>>>>>>>>>>>>>>>>>>>>>>> ");
    }

    waitForKeyElements ('body > div > awsdocs-cookie-banner', actionFunction2);

    function actionFunction2 (jNode) {
        jNode.remove();
    }

    waitForKeyElements ('#awsdocs-header > div.ng-scope > awsui-flash > div', actionFunction3);

    function actionFunction3 (jNode) {
        jNode.remove();
    }

    $("#footer").remove();
    $("#cookie-notice").remove();
    $("#awsdocs-cookie-banner").remove();

})();
