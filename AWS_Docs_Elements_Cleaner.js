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
// ==/UserScript==

(function() {
    'use strict';

    $("#footer").remove();
    $("#cookie-notice").remove();
    $("#awsdocs-cookie-banner").remove();
    $('#awsdocs-header > div.ng-scope > awsui-flash > div').remove();
    $('body > div > awsdocs-cookie-banner').remove();

})();
