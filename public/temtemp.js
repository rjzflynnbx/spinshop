// ==UserScript==
// @name         Load Boxever on any page
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.basicwebsiteexample.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const CLIENT_KEY = "PUT_CLIENT_KEY_HERE";
    const POS = "PUT_POS_HERE";

    var webFlowTarget = {
        local: "http://localhost:3010",
        dev: "https://d2li0augeb84at.cloudfront.net",
        prod: "https://d35vb5cccm4xzp.cloudfront.net"
    };
    var bxStage = "prod"; // use dev org
    window._boxever_settings = {
        client_key: CLIENT_KEY,
        target: `https://api.boxever.com/v1.2`, // Use the API located in Boxever European data centers
        cookie_domain: "", // Store the Boxever tracking cookie on dev-demo.boxever.com top level domain
        pointOfSale: POS,
        web_flow_target: webFlowTarget[bxStage] // Domain/CDN address to load SDK library from
    };

    function loadBxLib(callback) {
        console.log('loadBxLib');
        var scriptElement = document.createElement('script');
        scriptElement.type = 'text/javascript';
        scriptElement.src = 'https://d1mj578wat5n4o.cloudfront.net/boxever-1.4.1.min.js';
        scriptElement.async = true;
        document.head.appendChild(scriptElement);
        callback();
    }
    function sendViewEvent() {
        console.log("send View")
        setTimeout(function () {
            var viewEvent = {
                "browser_id": Boxever.getID(),
                "channel": "WEB",
                "type": "VIEW",
                "language": "EN",
                "currency": "EUR",
                "page": window.location.pathname,
                "pos": POS,
                "session_data": { "uri": window.location.pathname }
            };
            Boxever.eventCreate(viewEvent, function (data) { }, 'json');
        }, 1000);

    }


    loadBxLib(sendViewEvent);


    function KeyPress(e) {
        var evtobj = window.event ? event : e


        // Close session
        if (evtobj.keyCode == 67 && evtobj.ctrlKey) {
            if (confirm('CLOSE SESSION?')) {
                _boxeverq.push(function () {
                    var closeSessionEvent = {
                        browser_id: Boxever.getID(),
                        channel: "WEB",
                        language: "EN",
                        currency: "EUR",
                        pos: POS,
                        type: "FORCE_CLOSE",
                        _bx_extended_message: "1"
                    };

                    Boxever.eventCreate(closeSessionEvent, function (data) { }, 'json');
                });
            }


        }
         // Start as anon
        if (evtobj.keyCode == 65 && evtobj.ctrlKey) {
            if (confirm('START AS ANONYMOUS?')) {
                _boxeverq.push(function () {
                    Boxever.reset();
                });
                location.reload();
            }
        }

    }
    document.onkeydown = KeyPress;

})();