// ==UserScript==
// @run-at       document-start
// @name         Old Boxever Engage 2.5 Demo
// @namespace    http://tampermonkey.net/
// @version      7.78
// @description  try to take over the world!
// @author       Joseph Manadan
// @match        https://spinair.boxever.io/*
// @match        https://spinbank.boxeverdemo.com/*
// @match        https://www.easyjet.com/en*
// @match        https://www.emirates.com/ie/english/*
// @resource     icons https://fonts.googleapis.com/icon?family=Material+Icons
// @require      https://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.0.1/mustache.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @grant        GM_addStyle
// @grant        unsafeWindow
// ==/UserScript==


GM_addStyle(GM_getResourceText ("icons"));

(function () {
    function loadBxLib() {
        var scriptElement = document.createElement('script');
        scriptElement.type = 'text/javascript';
        scriptElement.src = 'https://api.boxever.com/v1.2/boxever-min.js?client_key=pqsWXjI3lw12v5a9rrHPW1c4hET73GxQ';
        scriptElement.async = true;
        document.head.appendChild(scriptElement);



        const createElementBackup = document.createElement;
        document.createElement = function (...args) {
            // If this is not a script tag, bypass
            if (args[0].toLowerCase() !== 'script') {
                // Binding to document is essential
                return createElementBackup.bind(document)(...args)
            }

            const scriptElt = createElementBackup.bind(document)(...args)
            const originalSetAttribute = scriptElt.setAttribute.bind(scriptElt)

            // Define getters / setters to ensure that the script type is properly set
            Object.defineProperties(scriptElt, {
                'src': {
                    get() {
                        return scriptElt.getAttribute('src')
                    },
                    set(value) {
                        if (value.includes('boxever-min.js')) {
                            return false;
                        }
                        if (value.includes('emirates.com%2Fie')) {
                            originalSetAttribute('src', value.replace('emirates.com%2Fie', 'spinair.com'));
                        } else {
                            originalSetAttribute('src', value);
                        }
                        return true;
                    }
                }
            })

            // Monkey patch the setAttribute function so that the setter is called instead.
            // Otherwise, setAttribute('type', 'whatever') will bypass our custom descriptors!
            scriptElt.setAttribute = function (name, value) {
                if (name === 'type' || name === 'src')
                    scriptElt[name] = value
                else
                    HTMLScriptElement.prototype.setAttribute.call(scriptElt, name, value)
            }
            return scriptElt;
        }
    }

    loadBxLib();

    console.log('Engage 2.5 Library loaded!');

    var materialCss = `#bx-preview-insert *,#bx-preview-insert *:before,#bx-preview-insert *:after{-webkit-box-sizing:inherit;box-sizing:inherit}@media only screen and (min-width: 0){#bx-preview-insert{font-size:14px}}@media only screen and (min-width: 992px){#bx-preview-insert{font-size:14.5px}}@media only screen and (min-width: 1200px){#bx-preview-insert{font-size:15px}}#bx-preview-insert{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-weight:normal;color:rgba(0,0,0,.87);@keyframes indeterminate{0%{left:-35%;right:100%}60%{left:100%;right:-90%}100%{left:100%;right:-90%}}@keyframes indeterminate-short{0%{left:-200%;right:100%}60%{left:107%;right:-8%}100%{left:107%;right:-8%}}/*!
    * Waves v0.6.0
    * http://fian.my.id/Waves
    *
    * Copyright 2014 Alfiana E. Sibuea and other contributors
    * Released under the MIT license
    * https://github.com/fians/Waves/blob/master/LICENSE
    */@keyframes pulse-animation{0%{opacity:1;transform:scale(1)}50%{opacity:0;transform:scale(1.5)}100%{opacity:0;transform:scale(1.5)}}}#bx-preview-insert .materialize-red{background-color:#e51c23 !important}#bx-preview-insert .materialize-red-text{color:#e51c23 !important}#bx-preview-insert .materialize-red.lighten-5{background-color:#fdeaeb !important}#bx-preview-insert .materialize-red-text.text-lighten-5{color:#fdeaeb !important}#bx-preview-insert .materialize-red.lighten-4{background-color:#f8c1c3 !important}#bx-preview-insert .materialize-red-text.text-lighten-4{color:#f8c1c3 !important}#bx-preview-insert .materialize-red.lighten-3{background-color:#f3989b !important}#bx-preview-insert .materialize-red-text.text-lighten-3{color:#f3989b !important}#bx-preview-insert .materialize-red.lighten-2{background-color:#ee6e73 !important}#bx-preview-insert .materialize-red-text.text-lighten-2{color:#ee6e73 !important}#bx-preview-insert .materialize-red.lighten-1{background-color:#ea454b !important}#bx-preview-insert .materialize-red-text.text-lighten-1{color:#ea454b !important}#bx-preview-insert .materialize-red.darken-1{background-color:#d0181e !important}#bx-preview-insert .materialize-red-text.text-darken-1{color:#d0181e !important}#bx-preview-insert .materialize-red.darken-2{background-color:#b9151b !important}#bx-preview-insert .materialize-red-text.text-darken-2{color:#b9151b !important}#bx-preview-insert .materialize-red.darken-3{background-color:#a21318 !important}#bx-preview-insert .materialize-red-text.text-darken-3{color:#a21318 !important}#bx-preview-insert .materialize-red.darken-4{background-color:#8b1014 !important}#bx-preview-insert .materialize-red-text.text-darken-4{color:#8b1014 !important}#bx-preview-insert .red{background-color:#f44336 !important}#bx-preview-insert .red-text{color:#f44336 !important}#bx-preview-insert .red.lighten-5{background-color:#ffebee !important}#bx-preview-insert .red-text.text-lighten-5{color:#ffebee !important}#bx-preview-insert .red.lighten-4{background-color:#ffcdd2 !important}#bx-preview-insert .red-text.text-lighten-4{color:#ffcdd2 !important}#bx-preview-insert .red.lighten-3{background-color:#ef9a9a !important}#bx-preview-insert .red-text.text-lighten-3{color:#ef9a9a !important}#bx-preview-insert .red.lighten-2{background-color:#e57373 !important}#bx-preview-insert .red-text.text-lighten-2{color:#e57373 !important}#bx-preview-insert .red.lighten-1{background-color:#ef5350 !important}#bx-preview-insert .red-text.text-lighten-1{color:#ef5350 !important}#bx-preview-insert .red.darken-1{background-color:#e53935 !important}#bx-preview-insert .red-text.text-darken-1{color:#e53935 !important}#bx-preview-insert .red.darken-2{background-color:#d32f2f !important}#bx-preview-insert .red-text.text-darken-2{color:#d32f2f !important}#bx-preview-insert .red.darken-3{background-color:#c62828 !important}#bx-preview-insert .red-text.text-darken-3{color:#c62828 !important}#bx-preview-insert .red.darken-4{background-color:#b71c1c !important}#bx-preview-insert .red-text.text-darken-4{color:#b71c1c !important}#bx-preview-insert .red.accent-1{background-color:#ff8a80 !important}#bx-preview-insert .red-text.text-accent-1{color:#ff8a80 !important}#bx-preview-insert .red.accent-2{background-color:#ff5252 !important}#bx-preview-insert .red-text.text-accent-2{color:#ff5252 !important}#bx-preview-insert .red.accent-3{background-color:#ff1744 !important}#bx-preview-insert .red-text.text-accent-3{color:#ff1744 !important}#bx-preview-insert .red.accent-4{background-color:#d50000 !important}#bx-preview-insert .red-text.text-accent-4{color:#d50000 !important}#bx-preview-insert .pink{background-color:#e91e63 !important}#bx-preview-insert .pink-text{color:#e91e63 !important}#bx-preview-insert .pink.lighten-5{background-color:#fce4ec !important}#bx-preview-insert .pink-text.text-lighten-5{color:#fce4ec !important}#bx-preview-insert .pink.lighten-4{background-color:#f8bbd0 !important}#bx-preview-insert .pink-text.text-lighten-4{color:#f8bbd0 !important}#bx-preview-insert .pink.lighten-3{background-color:#f48fb1 !important}#bx-preview-insert .pink-text.text-lighten-3{color:#f48fb1 !important}#bx-preview-insert .pink.lighten-2{background-color:#f06292 !important}#bx-preview-insert .pink-text.text-lighten-2{color:#f06292 !important}#bx-preview-insert .pink.lighten-1{background-color:#ec407a !important}#bx-preview-insert .pink-text.text-lighten-1{color:#ec407a !important}#bx-preview-insert .pink.darken-1{background-color:#d81b60 !important}#bx-preview-insert .pink-text.text-darken-1{color:#d81b60 !important}#bx-preview-insert .pink.darken-2{background-color:#c2185b !important}#bx-preview-insert .pink-text.text-darken-2{color:#c2185b !important}#bx-preview-insert .pink.darken-3{background-color:#ad1457 !important}#bx-preview-insert .pink-text.text-darken-3{color:#ad1457 !important}#bx-preview-insert .pink.darken-4{background-color:#880e4f !important}#bx-preview-insert .pink-text.text-darken-4{color:#880e4f !important}#bx-preview-insert .pink.accent-1{background-color:#ff80ab !important}#bx-preview-insert .pink-text.text-accent-1{color:#ff80ab !important}#bx-preview-insert .pink.accent-2{background-color:#ff4081 !important}#bx-preview-insert .pink-text.text-accent-2{color:#ff4081 !important}#bx-preview-insert .pink.accent-3{background-color:#f50057 !important}#bx-preview-insert .pink-text.text-accent-3{color:#f50057 !important}#bx-preview-insert .pink.accent-4{background-color:#c51162 !important}#bx-preview-insert .pink-text.text-accent-4{color:#c51162 !important}#bx-preview-insert .purple{background-color:#9c27b0 !important}#bx-preview-insert .purple-text{color:#9c27b0 !important}#bx-preview-insert .purple.lighten-5{background-color:#f3e5f5 !important}#bx-preview-insert .purple-text.text-lighten-5{color:#f3e5f5 !important}#bx-preview-insert .purple.lighten-4{background-color:#e1bee7 !important}#bx-preview-insert .purple-text.text-lighten-4{color:#e1bee7 !important}#bx-preview-insert .purple.lighten-3{background-color:#ce93d8 !important}#bx-preview-insert .purple-text.text-lighten-3{color:#ce93d8 !important}#bx-preview-insert .purple.lighten-2{background-color:#ba68c8 !important}#bx-preview-insert .purple-text.text-lighten-2{color:#ba68c8 !important}#bx-preview-insert .purple.lighten-1{background-color:#ab47bc !important}#bx-preview-insert .purple-text.text-lighten-1{color:#ab47bc !important}#bx-preview-insert .purple.darken-1{background-color:#8e24aa !important}#bx-preview-insert .purple-text.text-darken-1{color:#8e24aa !important}#bx-preview-insert .purple.darken-2{background-color:#7b1fa2 !important}#bx-preview-insert .purple-text.text-darken-2{color:#7b1fa2 !important}#bx-preview-insert .purple.darken-3{background-color:#6a1b9a !important}#bx-preview-insert .purple-text.text-darken-3{color:#6a1b9a !important}#bx-preview-insert .purple.darken-4{background-color:#4a148c !important}#bx-preview-insert .purple-text.text-darken-4{color:#4a148c !important}#bx-preview-insert .purple.accent-1{background-color:#ea80fc !important}#bx-preview-insert .purple-text.text-accent-1{color:#ea80fc !important}#bx-preview-insert .purple.accent-2{background-color:#e040fb !important}#bx-preview-insert .purple-text.text-accent-2{color:#e040fb !important}#bx-preview-insert .purple.accent-3{background-color:#d500f9 !important}#bx-preview-insert .purple-text.text-accent-3{color:#d500f9 !important}#bx-preview-insert .purple.accent-4{background-color:#a0f !important}#bx-preview-insert .purple-text.text-accent-4{color:#a0f !important}#bx-preview-insert .deep-purple{background-color:#673ab7 !important}#bx-preview-insert .deep-purple-text{color:#673ab7 !important}#bx-preview-insert .deep-purple.lighten-5{background-color:#ede7f6 !important}#bx-preview-insert .deep-purple-text.text-lighten-5{color:#ede7f6 !important}#bx-preview-insert .deep-purple.lighten-4{background-color:#d1c4e9 !important}#bx-preview-insert .deep-purple-text.text-lighten-4{color:#d1c4e9 !important}#bx-preview-insert .deep-purple.lighten-3{background-color:#b39ddb !important}#bx-preview-insert .deep-purple-text.text-lighten-3{color:#b39ddb !important}#bx-preview-insert .deep-purple.lighten-2{background-color:#9575cd !important}#bx-preview-insert .deep-purple-text.text-lighten-2{color:#9575cd !important}#bx-preview-insert .deep-purple.lighten-1{background-color:#7e57c2 !important}#bx-preview-insert .deep-purple-text.text-lighten-1{color:#7e57c2 !important}#bx-preview-insert .deep-purple.darken-1{background-color:#5e35b1 !important}#bx-preview-insert .deep-purple-text.text-darken-1{color:#5e35b1 !important}#bx-preview-insert .deep-purple.darken-2{background-color:#512da8 !important}#bx-preview-insert .deep-purple-text.text-darken-2{color:#512da8 !important}#bx-preview-insert .deep-purple.darken-3{background-color:#4527a0 !important}#bx-preview-insert .deep-purple-text.text-darken-3{color:#4527a0 !important}#bx-preview-insert .deep-purple.darken-4{background-color:#311b92 !important}#bx-preview-insert .deep-purple-text.text-darken-4{color:#311b92 !important}#bx-preview-insert .deep-purple.accent-1{background-color:#b388ff !important}#bx-preview-insert .deep-purple-text.text-accent-1{color:#b388ff !important}#bx-preview-insert .deep-purple.accent-2{background-color:#7c4dff !important}#bx-preview-insert .deep-purple-text.text-accent-2{color:#7c4dff !important}#bx-preview-insert .deep-purple.accent-3{background-color:#651fff !important}#bx-preview-insert .deep-purple-text.text-accent-3{color:#651fff !important}#bx-preview-insert .deep-purple.accent-4{background-color:#6200ea !important}#bx-preview-insert .deep-purple-text.text-accent-4{color:#6200ea !important}#bx-preview-insert .indigo{background-color:#3f51b5 !important}#bx-preview-insert .indigo-text{color:#3f51b5 !important}#bx-preview-insert .indigo.lighten-5{background-color:#e8eaf6 !important}#bx-preview-insert .indigo-text.text-lighten-5{color:#e8eaf6 !important}#bx-preview-insert .indigo.lighten-4{background-color:#c5cae9 !important}#bx-preview-insert .indigo-text.text-lighten-4{color:#c5cae9 !important}#bx-preview-insert .indigo.lighten-3{background-color:#9fa8da !important}#bx-preview-insert .indigo-text.text-lighten-3{color:#9fa8da !important}#bx-preview-insert .indigo.lighten-2{background-color:#7986cb !important}#bx-preview-insert .indigo-text.text-lighten-2{color:#7986cb !important}#bx-preview-insert .indigo.lighten-1{background-color:#5c6bc0 !important}#bx-preview-insert .indigo-text.text-lighten-1{color:#5c6bc0 !important}#bx-preview-insert .indigo.darken-1{background-color:#3949ab !important}#bx-preview-insert .indigo-text.text-darken-1{color:#3949ab !important}#bx-preview-insert .indigo.darken-2{background-color:#303f9f !important}#bx-preview-insert .indigo-text.text-darken-2{color:#303f9f !important}#bx-preview-insert .indigo.darken-3{background-color:#283593 !important}#bx-preview-insert .indigo-text.text-darken-3{color:#283593 !important}#bx-preview-insert .indigo.darken-4{background-color:#1a237e !important}#bx-preview-insert .indigo-text.text-darken-4{color:#1a237e !important}#bx-preview-insert .indigo.accent-1{background-color:#8c9eff !important}#bx-preview-insert .indigo-text.text-accent-1{color:#8c9eff !important}#bx-preview-insert .indigo.accent-2{background-color:#536dfe !important}#bx-preview-insert .indigo-text.text-accent-2{color:#536dfe !important}#bx-preview-insert .indigo.accent-3{background-color:#3d5afe !important}#bx-preview-insert .indigo-text.text-accent-3{color:#3d5afe !important}#bx-preview-insert .indigo.accent-4{background-color:#304ffe !important}#bx-preview-insert .indigo-text.text-accent-4{color:#304ffe !important}#bx-preview-insert .blue{background-color:#2196f3 !important}#bx-preview-insert .blue-text{color:#2196f3 !important}#bx-preview-insert .blue.lighten-5{background-color:#e3f2fd !important}#bx-preview-insert .blue-text.text-lighten-5{color:#e3f2fd !important}#bx-preview-insert .blue.lighten-4{background-color:#bbdefb !important}#bx-preview-insert .blue-text.text-lighten-4{color:#bbdefb !important}#bx-preview-insert .blue.lighten-3{background-color:#90caf9 !important}#bx-preview-insert .blue-text.text-lighten-3{color:#90caf9 !important}#bx-preview-insert .blue.lighten-2{background-color:#64b5f6 !important}#bx-preview-insert .blue-text.text-lighten-2{color:#64b5f6 !important}#bx-preview-insert .blue.lighten-1{background-color:#42a5f5 !important}#bx-preview-insert .blue-text.text-lighten-1{color:#42a5f5 !important}#bx-preview-insert .blue.darken-1{background-color:#1e88e5 !important}#bx-preview-insert .blue-text.text-darken-1{color:#1e88e5 !important}#bx-preview-insert .blue.darken-2{background-color:#1976d2 !important}#bx-preview-insert .blue-text.text-darken-2{color:#1976d2 !important}#bx-preview-insert .blue.darken-3{background-color:#1565c0 !important}#bx-preview-insert .blue-text.text-darken-3{color:#1565c0 !important}#bx-preview-insert .blue.darken-4{background-color:#0d47a1 !important}#bx-preview-insert .blue-text.text-darken-4{color:#0d47a1 !important}#bx-preview-insert .blue.accent-1{background-color:#82b1ff !important}#bx-preview-insert .blue-text.text-accent-1{color:#82b1ff !important}#bx-preview-insert .blue.accent-2{background-color:#448aff !important}#bx-preview-insert .blue-text.text-accent-2{color:#448aff !important}#bx-preview-insert .blue.accent-3{background-color:#2979ff !important}#bx-preview-insert .blue-text.text-accent-3{color:#2979ff !important}#bx-preview-insert .blue.accent-4{background-color:#2962ff !important}#bx-preview-insert .blue-text.text-accent-4{color:#2962ff !important}#bx-preview-insert .light-blue{background-color:#03a9f4 !important}#bx-preview-insert .light-blue-text{color:#03a9f4 !important}#bx-preview-insert .light-blue.lighten-5{background-color:#e1f5fe !important}#bx-preview-insert .light-blue-text.text-lighten-5{color:#e1f5fe !important}#bx-preview-insert .light-blue.lighten-4{background-color:#b3e5fc !important}#bx-preview-insert .light-blue-text.text-lighten-4{color:#b3e5fc !important}#bx-preview-insert .light-blue.lighten-3{background-color:#81d4fa !important}#bx-preview-insert .light-blue-text.text-lighten-3{color:#81d4fa !important}#bx-preview-insert .light-blue.lighten-2{background-color:#4fc3f7 !important}#bx-preview-insert .light-blue-text.text-lighten-2{color:#4fc3f7 !important}#bx-preview-insert .light-blue.lighten-1{background-color:#29b6f6 !important}#bx-preview-insert .light-blue-text.text-lighten-1{color:#29b6f6 !important}#bx-preview-insert .light-blue.darken-1{background-color:#039be5 !important}#bx-preview-insert .light-blue-text.text-darken-1{color:#039be5 !important}#bx-preview-insert .light-blue.darken-2{background-color:#0288d1 !important}#bx-preview-insert .light-blue-text.text-darken-2{color:#0288d1 !important}#bx-preview-insert .light-blue.darken-3{background-color:#0277bd !important}#bx-preview-insert .light-blue-text.text-darken-3{color:#0277bd !important}#bx-preview-insert .light-blue.darken-4{background-color:#01579b !important}#bx-preview-insert .light-blue-text.text-darken-4{color:#01579b !important}#bx-preview-insert .light-blue.accent-1{background-color:#80d8ff !important}#bx-preview-insert .light-blue-text.text-accent-1{color:#80d8ff !important}#bx-preview-insert .light-blue.accent-2{background-color:#40c4ff !important}#bx-preview-insert .light-blue-text.text-accent-2{color:#40c4ff !important}#bx-preview-insert .light-blue.accent-3{background-color:#00b0ff !important}#bx-preview-insert .light-blue-text.text-accent-3{color:#00b0ff !important}#bx-preview-insert .light-blue.accent-4{background-color:#0091ea !important}#bx-preview-insert .light-blue-text.text-accent-4{color:#0091ea !important}#bx-preview-insert .cyan{background-color:#00bcd4 !important}#bx-preview-insert .cyan-text{color:#00bcd4 !important}#bx-preview-insert .cyan.lighten-5{background-color:#e0f7fa !important}#bx-preview-insert .cyan-text.text-lighten-5{color:#e0f7fa !important}#bx-preview-insert .cyan.lighten-4{background-color:#b2ebf2 !important}#bx-preview-insert .cyan-text.text-lighten-4{color:#b2ebf2 !important}#bx-preview-insert .cyan.lighten-3{background-color:#80deea !important}#bx-preview-insert .cyan-text.text-lighten-3{color:#80deea !important}#bx-preview-insert .cyan.lighten-2{background-color:#4dd0e1 !important}#bx-preview-insert .cyan-text.text-lighten-2{color:#4dd0e1 !important}#bx-preview-insert .cyan.lighten-1{background-color:#26c6da !important}#bx-preview-insert .cyan-text.text-lighten-1{color:#26c6da !important}#bx-preview-insert .cyan.darken-1{background-color:#00acc1 !important}#bx-preview-insert .cyan-text.text-darken-1{color:#00acc1 !important}#bx-preview-insert .cyan.darken-2{background-color:#0097a7 !important}#bx-preview-insert .cyan-text.text-darken-2{color:#0097a7 !important}#bx-preview-insert .cyan.darken-3{background-color:#00838f !important}#bx-preview-insert .cyan-text.text-darken-3{color:#00838f !important}#bx-preview-insert .cyan.darken-4{background-color:#006064 !important}#bx-preview-insert .cyan-text.text-darken-4{color:#006064 !important}#bx-preview-insert .cyan.accent-1{background-color:#84ffff !important}#bx-preview-insert .cyan-text.text-accent-1{color:#84ffff !important}#bx-preview-insert .cyan.accent-2{background-color:#18ffff !important}#bx-preview-insert .cyan-text.text-accent-2{color:#18ffff !important}#bx-preview-insert .cyan.accent-3{background-color:#00e5ff !important}#bx-preview-insert .cyan-text.text-accent-3{color:#00e5ff !important}#bx-preview-insert .cyan.accent-4{background-color:#00b8d4 !important}#bx-preview-insert .cyan-text.text-accent-4{color:#00b8d4 !important}#bx-preview-insert .teal{background-color:#009688 !important}#bx-preview-insert .teal-text{color:#009688 !important}#bx-preview-insert .teal.lighten-5{background-color:#e0f2f1 !important}#bx-preview-insert .teal-text.text-lighten-5{color:#e0f2f1 !important}#bx-preview-insert .teal.lighten-4{background-color:#b2dfdb !important}#bx-preview-insert .teal-text.text-lighten-4{color:#b2dfdb !important}#bx-preview-insert .teal.lighten-3{background-color:#80cbc4 !important}#bx-preview-insert .teal-text.text-lighten-3{color:#80cbc4 !important}#bx-preview-insert .teal.lighten-2{background-color:#4db6ac !important}#bx-preview-insert .teal-text.text-lighten-2{color:#4db6ac !important}#bx-preview-insert .teal.lighten-1{background-color:#26a69a !important}#bx-preview-insert .teal-text.text-lighten-1{color:#26a69a !important}#bx-preview-insert .teal.darken-1{background-color:#00897b !important}#bx-preview-insert .teal-text.text-darken-1{color:#00897b !important}#bx-preview-insert .teal.darken-2{background-color:#00796b !important}#bx-preview-insert .teal-text.text-darken-2{color:#00796b !important}#bx-preview-insert .teal.darken-3{background-color:#00695c !important}#bx-preview-insert .teal-text.text-darken-3{color:#00695c !important}#bx-preview-insert .teal.darken-4{background-color:#004d40 !important}#bx-preview-insert .teal-text.text-darken-4{color:#004d40 !important}#bx-preview-insert .teal.accent-1{background-color:#a7ffeb !important}#bx-preview-insert .teal-text.text-accent-1{color:#a7ffeb !important}#bx-preview-insert .teal.accent-2{background-color:#64ffda !important}#bx-preview-insert .teal-text.text-accent-2{color:#64ffda !important}#bx-preview-insert .teal.accent-3{background-color:#1de9b6 !important}#bx-preview-insert .teal-text.text-accent-3{color:#1de9b6 !important}#bx-preview-insert .teal.accent-4{background-color:#00bfa5 !important}#bx-preview-insert .teal-text.text-accent-4{color:#00bfa5 !important}#bx-preview-insert .green{background-color:#4caf50 !important}#bx-preview-insert .green-text{color:#4caf50 !important}#bx-preview-insert .green.lighten-5{background-color:#e8f5e9 !important}#bx-preview-insert .green-text.text-lighten-5{color:#e8f5e9 !important}#bx-preview-insert .green.lighten-4{background-color:#c8e6c9 !important}#bx-preview-insert .green-text.text-lighten-4{color:#c8e6c9 !important}#bx-preview-insert .green.lighten-3{background-color:#a5d6a7 !important}#bx-preview-insert .green-text.text-lighten-3{color:#a5d6a7 !important}#bx-preview-insert .green.lighten-2{background-color:#81c784 !important}#bx-preview-insert .green-text.text-lighten-2{color:#81c784 !important}#bx-preview-insert .green.lighten-1{background-color:#66bb6a !important}#bx-preview-insert .green-text.text-lighten-1{color:#66bb6a !important}#bx-preview-insert .green.darken-1{background-color:#43a047 !important}#bx-preview-insert .green-text.text-darken-1{color:#43a047 !important}#bx-preview-insert .green.darken-2{background-color:#388e3c !important}#bx-preview-insert .green-text.text-darken-2{color:#388e3c !important}#bx-preview-insert .green.darken-3{background-color:#2e7d32 !important}#bx-preview-insert .green-text.text-darken-3{color:#2e7d32 !important}#bx-preview-insert .green.darken-4{background-color:#1b5e20 !important}#bx-preview-insert .green-text.text-darken-4{color:#1b5e20 !important}#bx-preview-insert .green.accent-1{background-color:#b9f6ca !important}#bx-preview-insert .green-text.text-accent-1{color:#b9f6ca !important}#bx-preview-insert .green.accent-2{background-color:#69f0ae !important}#bx-preview-insert .green-text.text-accent-2{color:#69f0ae !important}#bx-preview-insert .green.accent-3{background-color:#00e676 !important}#bx-preview-insert .green-text.text-accent-3{color:#00e676 !important}#bx-preview-insert .green.accent-4{background-color:#00c853 !important}#bx-preview-insert .green-text.text-accent-4{color:#00c853 !important}#bx-preview-insert .light-green{background-color:#8bc34a !important}#bx-preview-insert .light-green-text{color:#8bc34a !important}#bx-preview-insert .light-green.lighten-5{background-color:#f1f8e9 !important}#bx-preview-insert .light-green-text.text-lighten-5{color:#f1f8e9 !important}#bx-preview-insert .light-green.lighten-4{background-color:#dcedc8 !important}#bx-preview-insert .light-green-text.text-lighten-4{color:#dcedc8 !important}#bx-preview-insert .light-green.lighten-3{background-color:#c5e1a5 !important}#bx-preview-insert .light-green-text.text-lighten-3{color:#c5e1a5 !important}#bx-preview-insert .light-green.lighten-2{background-color:#aed581 !important}#bx-preview-insert .light-green-text.text-lighten-2{color:#aed581 !important}#bx-preview-insert .light-green.lighten-1{background-color:#9ccc65 !important}#bx-preview-insert .light-green-text.text-lighten-1{color:#9ccc65 !important}#bx-preview-insert .light-green.darken-1{background-color:#7cb342 !important}#bx-preview-insert .light-green-text.text-darken-1{color:#7cb342 !important}#bx-preview-insert .light-green.darken-2{background-color:#689f38 !important}#bx-preview-insert .light-green-text.text-darken-2{color:#689f38 !important}#bx-preview-insert .light-green.darken-3{background-color:#558b2f !important}#bx-preview-insert .light-green-text.text-darken-3{color:#558b2f !important}#bx-preview-insert .light-green.darken-4{background-color:#33691e !important}#bx-preview-insert .light-green-text.text-darken-4{color:#33691e !important}#bx-preview-insert .light-green.accent-1{background-color:#ccff90 !important}#bx-preview-insert .light-green-text.text-accent-1{color:#ccff90 !important}#bx-preview-insert .light-green.accent-2{background-color:#b2ff59 !important}#bx-preview-insert .light-green-text.text-accent-2{color:#b2ff59 !important}#bx-preview-insert .light-green.accent-3{background-color:#76ff03 !important}#bx-preview-insert .light-green-text.text-accent-3{color:#76ff03 !important}#bx-preview-insert .light-green.accent-4{background-color:#64dd17 !important}#bx-preview-insert .light-green-text.text-accent-4{color:#64dd17 !important}#bx-preview-insert .lime{background-color:#cddc39 !important}#bx-preview-insert .lime-text{color:#cddc39 !important}#bx-preview-insert .lime.lighten-5{background-color:#f9fbe7 !important}#bx-preview-insert .lime-text.text-lighten-5{color:#f9fbe7 !important}#bx-preview-insert .lime.lighten-4{background-color:#f0f4c3 !important}#bx-preview-insert .lime-text.text-lighten-4{color:#f0f4c3 !important}#bx-preview-insert .lime.lighten-3{background-color:#e6ee9c !important}#bx-preview-insert .lime-text.text-lighten-3{color:#e6ee9c !important}#bx-preview-insert .lime.lighten-2{background-color:#dce775 !important}#bx-preview-insert .lime-text.text-lighten-2{color:#dce775 !important}#bx-preview-insert .lime.lighten-1{background-color:#d4e157 !important}#bx-preview-insert .lime-text.text-lighten-1{color:#d4e157 !important}#bx-preview-insert .lime.darken-1{background-color:#c0ca33 !important}#bx-preview-insert .lime-text.text-darken-1{color:#c0ca33 !important}#bx-preview-insert .lime.darken-2{background-color:#afb42b !important}#bx-preview-insert .lime-text.text-darken-2{color:#afb42b !important}#bx-preview-insert .lime.darken-3{background-color:#9e9d24 !important}#bx-preview-insert .lime-text.text-darken-3{color:#9e9d24 !important}#bx-preview-insert .lime.darken-4{background-color:#827717 !important}#bx-preview-insert .lime-text.text-darken-4{color:#827717 !important}#bx-preview-insert .lime.accent-1{background-color:#f4ff81 !important}#bx-preview-insert .lime-text.text-accent-1{color:#f4ff81 !important}#bx-preview-insert .lime.accent-2{background-color:#eeff41 !important}#bx-preview-insert .lime-text.text-accent-2{color:#eeff41 !important}#bx-preview-insert .lime.accent-3{background-color:#c6ff00 !important}#bx-preview-insert .lime-text.text-accent-3{color:#c6ff00 !important}#bx-preview-insert .lime.accent-4{background-color:#aeea00 !important}#bx-preview-insert .lime-text.text-accent-4{color:#aeea00 !important}#bx-preview-insert .yellow{background-color:#ffeb3b !important}#bx-preview-insert .yellow-text{color:#ffeb3b !important}#bx-preview-insert .yellow.lighten-5{background-color:#fffde7 !important}#bx-preview-insert .yellow-text.text-lighten-5{color:#fffde7 !important}#bx-preview-insert .yellow.lighten-4{background-color:#fff9c4 !important}#bx-preview-insert .yellow-text.text-lighten-4{color:#fff9c4 !important}#bx-preview-insert .yellow.lighten-3{background-color:#fff59d !important}#bx-preview-insert .yellow-text.text-lighten-3{color:#fff59d !important}#bx-preview-insert .yellow.lighten-2{background-color:#fff176 !important}#bx-preview-insert .yellow-text.text-lighten-2{color:#fff176 !important}#bx-preview-insert .yellow.lighten-1{background-color:#ffee58 !important}#bx-preview-insert .yellow-text.text-lighten-1{color:#ffee58 !important}#bx-preview-insert .yellow.darken-1{background-color:#fdd835 !important}#bx-preview-insert .yellow-text.text-darken-1{color:#fdd835 !important}#bx-preview-insert .yellow.darken-2{background-color:#fbc02d !important}#bx-preview-insert .yellow-text.text-darken-2{color:#fbc02d !important}#bx-preview-insert .yellow.darken-3{background-color:#f9a825 !important}#bx-preview-insert .yellow-text.text-darken-3{color:#f9a825 !important}#bx-preview-insert .yellow.darken-4{background-color:#f57f17 !important}#bx-preview-insert .yellow-text.text-darken-4{color:#f57f17 !important}#bx-preview-insert .yellow.accent-1{background-color:#ffff8d !important}#bx-preview-insert .yellow-text.text-accent-1{color:#ffff8d !important}#bx-preview-insert .yellow.accent-2{background-color:#ff0 !important}#bx-preview-insert .yellow-text.text-accent-2{color:#ff0 !important}#bx-preview-insert .yellow.accent-3{background-color:#ffea00 !important}#bx-preview-insert .yellow-text.text-accent-3{color:#ffea00 !important}#bx-preview-insert .yellow.accent-4{background-color:#ffd600 !important}#bx-preview-insert .yellow-text.text-accent-4{color:#ffd600 !important}#bx-preview-insert .amber{background-color:#ffc107 !important}#bx-preview-insert .amber-text{color:#ffc107 !important}#bx-preview-insert .amber.lighten-5{background-color:#fff8e1 !important}#bx-preview-insert .amber-text.text-lighten-5{color:#fff8e1 !important}#bx-preview-insert .amber.lighten-4{background-color:#ffecb3 !important}#bx-preview-insert .amber-text.text-lighten-4{color:#ffecb3 !important}#bx-preview-insert .amber.lighten-3{background-color:#ffe082 !important}#bx-preview-insert .amber-text.text-lighten-3{color:#ffe082 !important}#bx-preview-insert .amber.lighten-2{background-color:#ffd54f !important}#bx-preview-insert .amber-text.text-lighten-2{color:#ffd54f !important}#bx-preview-insert .amber.lighten-1{background-color:#ffca28 !important}#bx-preview-insert .amber-text.text-lighten-1{color:#ffca28 !important}#bx-preview-insert .amber.darken-1{background-color:#ffb300 !important}#bx-preview-insert .amber-text.text-darken-1{color:#ffb300 !important}#bx-preview-insert .amber.darken-2{background-color:#ffa000 !important}#bx-preview-insert .amber-text.text-darken-2{color:#ffa000 !important}#bx-preview-insert .amber.darken-3{background-color:#ff8f00 !important}#bx-preview-insert .amber-text.text-darken-3{color:#ff8f00 !important}#bx-preview-insert .amber.darken-4{background-color:#ff6f00 !important}#bx-preview-insert .amber-text.text-darken-4{color:#ff6f00 !important}#bx-preview-insert .amber.accent-1{background-color:#ffe57f !important}#bx-preview-insert .amber-text.text-accent-1{color:#ffe57f !important}#bx-preview-insert .amber.accent-2{background-color:#ffd740 !important}#bx-preview-insert .amber-text.text-accent-2{color:#ffd740 !important}#bx-preview-insert .amber.accent-3{background-color:#ffc400 !important}#bx-preview-insert .amber-text.text-accent-3{color:#ffc400 !important}#bx-preview-insert .amber.accent-4{background-color:#ffab00 !important}#bx-preview-insert .amber-text.text-accent-4{color:#ffab00 !important}#bx-preview-insert .orange{background-color:#ff9800 !important}#bx-preview-insert .orange-text{color:#ff9800 !important}#bx-preview-insert .orange.lighten-5{background-color:#fff3e0 !important}#bx-preview-insert .orange-text.text-lighten-5{color:#fff3e0 !important}#bx-preview-insert .orange.lighten-4{background-color:#ffe0b2 !important}#bx-preview-insert .orange-text.text-lighten-4{color:#ffe0b2 !important}#bx-preview-insert .orange.lighten-3{background-color:#ffcc80 !important}#bx-preview-insert .orange-text.text-lighten-3{color:#ffcc80 !important}#bx-preview-insert .orange.lighten-2{background-color:#ffb74d !important}#bx-preview-insert .orange-text.text-lighten-2{color:#ffb74d !important}#bx-preview-insert .orange.lighten-1{background-color:#ffa726 !important}#bx-preview-insert .orange-text.text-lighten-1{color:#ffa726 !important}#bx-preview-insert .orange.darken-1{background-color:#fb8c00 !important}#bx-preview-insert .orange-text.text-darken-1{color:#fb8c00 !important}#bx-preview-insert .orange.darken-2{background-color:#f57c00 !important}#bx-preview-insert .orange-text.text-darken-2{color:#f57c00 !important}#bx-preview-insert .orange.darken-3{background-color:#ef6c00 !important}#bx-preview-insert .orange-text.text-darken-3{color:#ef6c00 !important}#bx-preview-insert .orange.darken-4{background-color:#e65100 !important}#bx-preview-insert .orange-text.text-darken-4{color:#e65100 !important}#bx-preview-insert .orange.accent-1{background-color:#ffd180 !important}#bx-preview-insert .orange-text.text-accent-1{color:#ffd180 !important}#bx-preview-insert .orange.accent-2{background-color:#ffab40 !important}#bx-preview-insert .orange-text.text-accent-2{color:#ffab40 !important}#bx-preview-insert .orange.accent-3{background-color:#ff9100 !important}#bx-preview-insert .orange-text.text-accent-3{color:#ff9100 !important}#bx-preview-insert .orange.accent-4{background-color:#ff6d00 !important}#bx-preview-insert .orange-text.text-accent-4{color:#ff6d00 !important}#bx-preview-insert .deep-orange{background-color:#ff5722 !important}#bx-preview-insert .deep-orange-text{color:#ff5722 !important}#bx-preview-insert .deep-orange.lighten-5{background-color:#fbe9e7 !important}#bx-preview-insert .deep-orange-text.text-lighten-5{color:#fbe9e7 !important}#bx-preview-insert .deep-orange.lighten-4{background-color:#ffccbc !important}#bx-preview-insert .deep-orange-text.text-lighten-4{color:#ffccbc !important}#bx-preview-insert .deep-orange.lighten-3{background-color:#ffab91 !important}#bx-preview-insert .deep-orange-text.text-lighten-3{color:#ffab91 !important}#bx-preview-insert .deep-orange.lighten-2{background-color:#ff8a65 !important}#bx-preview-insert .deep-orange-text.text-lighten-2{color:#ff8a65 !important}#bx-preview-insert .deep-orange.lighten-1{background-color:#ff7043 !important}#bx-preview-insert .deep-orange-text.text-lighten-1{color:#ff7043 !important}#bx-preview-insert .deep-orange.darken-1{background-color:#f4511e !important}#bx-preview-insert .deep-orange-text.text-darken-1{color:#f4511e !important}#bx-preview-insert .deep-orange.darken-2{background-color:#e64a19 !important}#bx-preview-insert .deep-orange-text.text-darken-2{color:#e64a19 !important}#bx-preview-insert .deep-orange.darken-3{background-color:#d84315 !important}#bx-preview-insert .deep-orange-text.text-darken-3{color:#d84315 !important}#bx-preview-insert .deep-orange.darken-4{background-color:#bf360c !important}#bx-preview-insert .deep-orange-text.text-darken-4{color:#bf360c !important}#bx-preview-insert .deep-orange.accent-1{background-color:#ff9e80 !important}#bx-preview-insert .deep-orange-text.text-accent-1{color:#ff9e80 !important}#bx-preview-insert .deep-orange.accent-2{background-color:#ff6e40 !important}#bx-preview-insert .deep-orange-text.text-accent-2{color:#ff6e40 !important}#bx-preview-insert .deep-orange.accent-3{background-color:#ff3d00 !important}#bx-preview-insert .deep-orange-text.text-accent-3{color:#ff3d00 !important}#bx-preview-insert .deep-orange.accent-4{background-color:#dd2c00 !important}#bx-preview-insert .deep-orange-text.text-accent-4{color:#dd2c00 !important}#bx-preview-insert .brown{background-color:#795548 !important}#bx-preview-insert .brown-text{color:#795548 !important}#bx-preview-insert .brown.lighten-5{background-color:#efebe9 !important}#bx-preview-insert .brown-text.text-lighten-5{color:#efebe9 !important}#bx-preview-insert .brown.lighten-4{background-color:#d7ccc8 !important}#bx-preview-insert .brown-text.text-lighten-4{color:#d7ccc8 !important}#bx-preview-insert .brown.lighten-3{background-color:#bcaaa4 !important}#bx-preview-insert .brown-text.text-lighten-3{color:#bcaaa4 !important}#bx-preview-insert .brown.lighten-2{background-color:#a1887f !important}#bx-preview-insert .brown-text.text-lighten-2{color:#a1887f !important}#bx-preview-insert .brown.lighten-1{background-color:#8d6e63 !important}#bx-preview-insert .brown-text.text-lighten-1{color:#8d6e63 !important}#bx-preview-insert .brown.darken-1{background-color:#6d4c41 !important}#bx-preview-insert .brown-text.text-darken-1{color:#6d4c41 !important}#bx-preview-insert .brown.darken-2{background-color:#5d4037 !important}#bx-preview-insert .brown-text.text-darken-2{color:#5d4037 !important}#bx-preview-insert .brown.darken-3{background-color:#4e342e !important}#bx-preview-insert .brown-text.text-darken-3{color:#4e342e !important}#bx-preview-insert .brown.darken-4{background-color:#3e2723 !important}#bx-preview-insert .brown-text.text-darken-4{color:#3e2723 !important}#bx-preview-insert .blue-grey{background-color:#607d8b !important}#bx-preview-insert .blue-grey-text{color:#607d8b !important}#bx-preview-insert .blue-grey.lighten-5{background-color:#eceff1 !important}#bx-preview-insert .blue-grey-text.text-lighten-5{color:#eceff1 !important}#bx-preview-insert .blue-grey.lighten-4{background-color:#cfd8dc !important}#bx-preview-insert .blue-grey-text.text-lighten-4{color:#cfd8dc !important}#bx-preview-insert .blue-grey.lighten-3{background-color:#b0bec5 !important}#bx-preview-insert .blue-grey-text.text-lighten-3{color:#b0bec5 !important}#bx-preview-insert .blue-grey.lighten-2{background-color:#90a4ae !important}#bx-preview-insert .blue-grey-text.text-lighten-2{color:#90a4ae !important}#bx-preview-insert .blue-grey.lighten-1{background-color:#78909c !important}#bx-preview-insert .blue-grey-text.text-lighten-1{color:#78909c !important}#bx-preview-insert .blue-grey.darken-1{background-color:#546e7a !important}#bx-preview-insert .blue-grey-text.text-darken-1{color:#546e7a !important}#bx-preview-insert .blue-grey.darken-2{background-color:#455a64 !important}#bx-preview-insert .blue-grey-text.text-darken-2{color:#455a64 !important}#bx-preview-insert .blue-grey.darken-3{background-color:#37474f !important}#bx-preview-insert .blue-grey-text.text-darken-3{color:#37474f !important}#bx-preview-insert .blue-grey.darken-4{background-color:#263238 !important}#bx-preview-insert .blue-grey-text.text-darken-4{color:#263238 !important}#bx-preview-insert .grey{background-color:#9e9e9e !important}#bx-preview-insert .grey-text{color:#9e9e9e !important}#bx-preview-insert .grey.lighten-5{background-color:#fafafa !important}#bx-preview-insert .grey-text.text-lighten-5{color:#fafafa !important}#bx-preview-insert .grey.lighten-4{background-color:#f5f5f5 !important}#bx-preview-insert .grey-text.text-lighten-4{color:#f5f5f5 !important}#bx-preview-insert .grey.lighten-3{background-color:#eee !important}#bx-preview-insert .grey-text.text-lighten-3{color:#eee !important}#bx-preview-insert .grey.lighten-2{background-color:#e0e0e0 !important}#bx-preview-insert .grey-text.text-lighten-2{color:#e0e0e0 !important}#bx-preview-insert .grey.lighten-1{background-color:#bdbdbd !important}#bx-preview-insert .grey-text.text-lighten-1{color:#bdbdbd !important}#bx-preview-insert .grey.darken-1{background-color:#757575 !important}#bx-preview-insert .grey-text.text-darken-1{color:#757575 !important}#bx-preview-insert .grey.darken-2{background-color:#616161 !important}#bx-preview-insert .grey-text.text-darken-2{color:#616161 !important}#bx-preview-insert .grey.darken-3{background-color:#424242 !important}#bx-preview-insert .grey-text.text-darken-3{color:#424242 !important}#bx-preview-insert .grey.darken-4{background-color:#212121 !important}#bx-preview-insert .grey-text.text-darken-4{color:#212121 !important}#bx-preview-insert .black{background-color:#000 !important}#bx-preview-insert .black-text{color:#000 !important}#bx-preview-insert .white{background-color:#fff !important}#bx-preview-insert .white-text{color:#fff !important}#bx-preview-insert .transparent{background-color:transparent !important}#bx-preview-insert .transparent-text{color:transparent !important}#bx-preview-insert html{box-sizing:border-box}#bx-preview-insert *,#bx-preview-insert *:before,#bx-preview-insert *:after{box-sizing:inherit}#bx-preview-insert button,#bx-preview-insert input,#bx-preview-insert optgroup,#bx-preview-insert select,#bx-preview-insert textarea{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif}#bx-preview-insert ul:not(.browser-default){padding-left:0;list-style-type:none}#bx-preview-insert ul:not(.browser-default)>li{list-style-type:none}#bx-preview-insert a{color:#039be5;text-decoration:none;-webkit-tap-highlight-color:transparent}#bx-preview-insert .valign-wrapper{display:flex;align-items:center}#bx-preview-insert .clearfix{clear:both}#bx-preview-insert .z-depth-0{box-shadow:none !important}#bx-preview-insert .z-depth-1,#bx-preview-insert .sidenav,#bx-preview-insert .collapsible,#bx-preview-insert .dropdown-content,#bx-preview-insert .btn-floating,#bx-preview-insert .btn,#bx-preview-insert .btn-small,#bx-preview-insert .btn-large,#bx-preview-insert .toast{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2)}#bx-preview-insert .z-depth-1-half,#bx-preview-insert .btn-floating:hover,#bx-preview-insert .btn:hover,#bx-preview-insert .btn-small:hover,#bx-preview-insert .btn-large:hover{box-shadow:0 3px 3px 0 rgba(0,0,0,.14),0 1px 7px 0 rgba(0,0,0,.12),0 3px 1px -1px rgba(0,0,0,.2)}#bx-preview-insert .z-depth-2{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.3)}#bx-preview-insert .z-depth-3{box-shadow:0 8px 17px 2px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12),0 5px 5px -3px rgba(0,0,0,.2)}#bx-preview-insert .z-depth-4{box-shadow:0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12),0 8px 10px -7px rgba(0,0,0,.2)}#bx-preview-insert .z-depth-5{box-shadow:0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12),0 11px 15px -7px rgba(0,0,0,.2)}#bx-preview-insert .hoverable{transition:box-shadow .25s}#bx-preview-insert .hoverable:hover{box-shadow:0 8px 17px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}#bx-preview-insert .divider{height:1px;overflow:hidden;background-color:#e0e0e0}#bx-preview-insert blockquote{margin:20px 0;padding-left:1.5rem;border-left:5px solid #ee6e73}#bx-preview-insert i{line-height:inherit}#bx-preview-insert i.left{float:left;margin-right:15px}#bx-preview-insert i.right{float:right;margin-left:15px}#bx-preview-insert i.tiny{font-size:1rem}#bx-preview-insert i.small{font-size:2rem}#bx-preview-insert i.medium{font-size:4rem}#bx-preview-insert i.large{font-size:6rem}#bx-preview-insert img.responsive-img,#bx-preview-insert video.responsive-video{max-width:100%;height:auto}#bx-preview-insert .pagination li{display:inline-block;border-radius:2px;text-align:center;vertical-align:top;height:30px}#bx-preview-insert .pagination li a{color:#444;display:inline-block;font-size:1.2rem;padding:0 10px;line-height:30px}#bx-preview-insert .pagination li.active a{color:#fff}#bx-preview-insert .pagination li.active{background-color:#ee6e73}#bx-preview-insert .pagination li.disabled a{cursor:default;color:#999}#bx-preview-insert .pagination li i{font-size:2rem}#bx-preview-insert .pagination li.pages ul li{display:inline-block;float:none}@media only screen and (max-width : 992px){#bx-preview-insert .pagination{width:100%}#bx-preview-insert .pagination li.prev,#bx-preview-insert .pagination li.next{width:10%}#bx-preview-insert .pagination li.pages{width:80%;overflow:hidden;white-space:nowrap}}#bx-preview-insert .breadcrumb{font-size:18px;color:rgba(255,255,255,.7)}#bx-preview-insert .breadcrumb i,#bx-preview-insert .breadcrumb [class^=mdi-],#bx-preview-insert .breadcrumb [class*=mdi-],#bx-preview-insert .breadcrumb i.material-icons{display:inline-block;float:left;font-size:24px}#bx-preview-insert .breadcrumb:before{content:"";color:rgba(255,255,255,.7);vertical-align:top;display:inline-block;font-family:"Material Icons";font-weight:normal;font-style:normal;font-size:25px;margin:0 10px 0 8px;-webkit-font-smoothing:antialiased}#bx-preview-insert .breadcrumb:first-child:before{display:none}#bx-preview-insert .breadcrumb:last-child{color:#fff}#bx-preview-insert .parallax-container{position:relative;overflow:hidden;height:500px}#bx-preview-insert .parallax-container .parallax{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1}#bx-preview-insert .parallax-container .parallax img{opacity:0;position:absolute;left:50%;bottom:0;min-width:100%;min-height:100%;transform:translate3d(0, 0, 0);transform:translateX(-50%)}#bx-preview-insert .pin-top,#bx-preview-insert .pin-bottom{position:relative}#bx-preview-insert .pinned{position:fixed !important}#bx-preview-insert ul.staggered-list li{opacity:0}#bx-preview-insert .fade-in{opacity:0;transform-origin:0 50%}@media only screen and (max-width : 600px){#bx-preview-insert .hide-on-small-only,#bx-preview-insert .hide-on-small-and-down{display:none !important}}@media only screen and (max-width : 992px){#bx-preview-insert .hide-on-med-and-down{display:none !important}}@media only screen and (min-width : 601px){#bx-preview-insert .hide-on-med-and-up{display:none !important}}@media only screen and (min-width: 600px)and (max-width: 992px){#bx-preview-insert .hide-on-med-only{display:none !important}}@media only screen and (min-width : 993px){#bx-preview-insert .hide-on-large-only{display:none !important}}@media only screen and (min-width : 1201px){#bx-preview-insert .hide-on-extra-large-only{display:none !important}}@media only screen and (min-width : 1201px){#bx-preview-insert .show-on-extra-large{display:block !important}}@media only screen and (min-width : 993px){#bx-preview-insert .show-on-large{display:block !important}}@media only screen and (min-width: 600px)and (max-width: 992px){#bx-preview-insert .show-on-medium{display:block !important}}@media only screen and (max-width : 600px){#bx-preview-insert .show-on-small{display:block !important}}@media only screen and (min-width : 601px){#bx-preview-insert .show-on-medium-and-up{display:block !important}}@media only screen and (max-width : 992px){#bx-preview-insert .show-on-medium-and-down{display:block !important}}@media only screen and (max-width : 600px){#bx-preview-insert .center-on-small-only{text-align:center}}#bx-preview-insert .page-footer{padding-top:20px;color:#fff;background-color:#ee6e73}#bx-preview-insert .page-footer .footer-copyright{overflow:hidden;min-height:50px;display:flex;align-items:center;justify-content:space-between;padding:10px 0px;color:rgba(255,255,255,.8);background-color:rgba(51,51,51,.08)}#bx-preview-insert table,#bx-preview-insert th,#bx-preview-insert td{border:none}#bx-preview-insert table{width:100%;display:table;border-collapse:collapse;border-spacing:0}#bx-preview-insert table.striped tr{border-bottom:none}#bx-preview-insert table.striped>tbody>tr:nth-child(odd){background-color:rgba(242,242,242,.5)}#bx-preview-insert table.striped>tbody>tr>td{border-radius:0}#bx-preview-insert table.highlight>tbody>tr{transition:background-color .25s ease}#bx-preview-insert table.highlight>tbody>tr:hover{background-color:rgba(242,242,242,.5)}#bx-preview-insert table.centered thead tr th,#bx-preview-insert table.centered tbody tr td{text-align:center}#bx-preview-insert tr{border-bottom:1px solid rgba(0,0,0,.12)}#bx-preview-insert td,#bx-preview-insert th{padding:15px 5px;display:table-cell;text-align:left;vertical-align:middle;border-radius:2px}@media only screen and (max-width : 992px){#bx-preview-insert table.responsive-table{width:100%;border-collapse:collapse;border-spacing:0;display:block;position:relative}#bx-preview-insert table.responsive-table td:empty:before{content:" "}#bx-preview-insert table.responsive-table th,#bx-preview-insert table.responsive-table td{margin:0;vertical-align:top}#bx-preview-insert table.responsive-table th{text-align:left}#bx-preview-insert table.responsive-table thead{display:block;float:left}#bx-preview-insert table.responsive-table thead tr{display:block;padding:0 10px 0 0}#bx-preview-insert table.responsive-table thead tr th::before{content:" "}#bx-preview-insert table.responsive-table tbody{display:block;width:auto;position:relative;overflow-x:auto;white-space:nowrap}#bx-preview-insert table.responsive-table tbody tr{display:inline-block;vertical-align:top}#bx-preview-insert table.responsive-table th{display:block;text-align:right}#bx-preview-insert table.responsive-table td{display:block;min-height:1.25em;text-align:left}#bx-preview-insert table.responsive-table tr{border-bottom:none;padding:0 10px}#bx-preview-insert table.responsive-table thead{border:0;border-right:1px solid rgba(0,0,0,.12)}}#bx-preview-insert .collection{margin:.5rem 0 1rem 0;border:1px solid #e0e0e0;border-radius:2px;overflow:hidden;position:relative}#bx-preview-insert .collection .collection-item{background-color:#fff;line-height:1.5rem;padding:10px 20px;margin:0;border-bottom:1px solid #e0e0e0}#bx-preview-insert .collection .collection-item.avatar{min-height:84px;padding-left:72px;position:relative}#bx-preview-insert .collection .collection-item.avatar:not(.circle-clipper)>.circle,#bx-preview-insert .collection .collection-item.avatar :not(.circle-clipper)>.circle{position:absolute;width:42px;height:42px;overflow:hidden;left:15px;display:inline-block;vertical-align:middle}#bx-preview-insert .collection .collection-item.avatar i.circle{font-size:18px;line-height:42px;color:#fff;background-color:#999;text-align:center}#bx-preview-insert .collection .collection-item.avatar .title{font-size:16px}#bx-preview-insert .collection .collection-item.avatar p{margin:0}#bx-preview-insert .collection .collection-item.avatar .secondary-content{position:absolute;top:16px;right:16px}#bx-preview-insert .collection .collection-item:last-child{border-bottom:none}#bx-preview-insert .collection .collection-item.active{background-color:#26a69a;color:#eafaf9}#bx-preview-insert .collection .collection-item.active .secondary-content{color:#fff}#bx-preview-insert .collection a.collection-item{display:block;transition:.25s;color:#26a69a}#bx-preview-insert .collection a.collection-item:not(.active):hover{background-color:#ddd}#bx-preview-insert .collection.with-header .collection-header{background-color:#fff;border-bottom:1px solid #e0e0e0;padding:10px 20px}#bx-preview-insert .collection.with-header .collection-item{padding-left:30px}#bx-preview-insert .collection.with-header .collection-item.avatar{padding-left:72px}#bx-preview-insert .secondary-content{float:right;color:#26a69a}#bx-preview-insert .collapsible .collection{margin:0;border:none}#bx-preview-insert .video-container{position:relative;padding-bottom:56.25%;height:0;overflow:hidden}#bx-preview-insert .video-container iframe,#bx-preview-insert .video-container object,#bx-preview-insert .video-container embed{position:absolute;top:0;left:0;width:100%;height:100%}#bx-preview-insert .progress{position:relative;height:4px;display:block;width:100%;background-color:#acece6;border-radius:2px;margin:.5rem 0 1rem 0;overflow:hidden}#bx-preview-insert .progress .determinate{position:absolute;top:0;left:0;bottom:0;background-color:#26a69a;transition:width .3s linear}#bx-preview-insert .progress .indeterminate{background-color:#26a69a}#bx-preview-insert .progress .indeterminate:before{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite}#bx-preview-insert .progress .indeterminate:after{content:"";position:absolute;background-color:inherit;top:0;left:0;bottom:0;will-change:left,right;animation:indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;animation-delay:1.15s}#bx-preview-insert .hide{display:none !important}#bx-preview-insert .left-align{text-align:left}#bx-preview-insert .right-align{text-align:right}#bx-preview-insert .center,#bx-preview-insert .center-align{text-align:center}#bx-preview-insert .left{float:left !important}#bx-preview-insert .right{float:right !important}#bx-preview-insert .no-select,#bx-preview-insert input[type=range],#bx-preview-insert input[type=range]+.thumb{user-select:none}#bx-preview-insert .circle{border-radius:50%}#bx-preview-insert .center-block{display:block;margin-left:auto;margin-right:auto}#bx-preview-insert .truncate{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#bx-preview-insert .no-padding{padding:0 !important}#bx-preview-insert span.badge{min-width:3rem;padding:0 6px;margin-left:14px;text-align:center;font-size:1rem;line-height:22px;height:22px;color:#757575;float:right;box-sizing:border-box}#bx-preview-insert span.badge.new{font-weight:300;font-size:.8rem;color:#fff;background-color:#26a69a;border-radius:2px}#bx-preview-insert span.badge.new:after{content:" new"}#bx-preview-insert span.badge[data-badge-caption]::after{content:" " attr(data-badge-caption)}#bx-preview-insert nav ul a span.badge{display:inline-block;float:none;margin-left:4px;line-height:22px;height:22px;-webkit-font-smoothing:auto}#bx-preview-insert .collection-item span.badge{margin-top:calc(0.75rem - 11px)}#bx-preview-insert .collapsible span.badge{margin-left:auto}#bx-preview-insert .sidenav span.badge{margin-top:calc(24px - 11px)}#bx-preview-insert table span.badge{display:inline-block;float:none;margin-left:auto}#bx-preview-insert .material-icons{text-rendering:optimizeLegibility;font-feature-settings:"liga"}#bx-preview-insert .container{margin:0 auto;max-width:1280px;width:90%}@media only screen and (min-width : 601px){#bx-preview-insert .container{width:85%}}@media only screen and (min-width : 993px){#bx-preview-insert .container{width:70%}}#bx-preview-insert .col .row{margin-left:-0.75rem;margin-right:-0.75rem}#bx-preview-insert .section{padding-top:1rem;padding-bottom:1rem}#bx-preview-insert .section.no-pad{padding:0}#bx-preview-insert .section.no-pad-bot{padding-bottom:0}#bx-preview-insert .section.no-pad-top{padding-top:0}#bx-preview-insert .row{margin-left:auto;margin-right:auto;margin-bottom:20px}#bx-preview-insert .row:after{content:"";display:table;clear:both}#bx-preview-insert .row .col{float:left;box-sizing:border-box;padding:0 .75rem;min-height:1px}#bx-preview-insert .row .col[class*=push-],#bx-preview-insert .row .col[class*=pull-]{position:relative}#bx-preview-insert .row .col.s1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.s2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.s3{width:25%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.s4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.s5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.s6{width:50%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.s7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.s8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.s9{width:75%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.s10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.s11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.s12{width:100%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.offset-s1{margin-left:8.3333333333%}#bx-preview-insert .row .col.pull-s1{right:8.3333333333%}#bx-preview-insert .row .col.push-s1{left:8.3333333333%}#bx-preview-insert .row .col.offset-s2{margin-left:16.6666666667%}#bx-preview-insert .row .col.pull-s2{right:16.6666666667%}#bx-preview-insert .row .col.push-s2{left:16.6666666667%}#bx-preview-insert .row .col.offset-s3{margin-left:25%}#bx-preview-insert .row .col.pull-s3{right:25%}#bx-preview-insert .row .col.push-s3{left:25%}#bx-preview-insert .row .col.offset-s4{margin-left:33.3333333333%}#bx-preview-insert .row .col.pull-s4{right:33.3333333333%}#bx-preview-insert .row .col.push-s4{left:33.3333333333%}#bx-preview-insert .row .col.offset-s5{margin-left:41.6666666667%}#bx-preview-insert .row .col.pull-s5{right:41.6666666667%}#bx-preview-insert .row .col.push-s5{left:41.6666666667%}#bx-preview-insert .row .col.offset-s6{margin-left:50%}#bx-preview-insert .row .col.pull-s6{right:50%}#bx-preview-insert .row .col.push-s6{left:50%}#bx-preview-insert .row .col.offset-s7{margin-left:58.3333333333%}#bx-preview-insert .row .col.pull-s7{right:58.3333333333%}#bx-preview-insert .row .col.push-s7{left:58.3333333333%}#bx-preview-insert .row .col.offset-s8{margin-left:66.6666666667%}#bx-preview-insert .row .col.pull-s8{right:66.6666666667%}#bx-preview-insert .row .col.push-s8{left:66.6666666667%}#bx-preview-insert .row .col.offset-s9{margin-left:75%}#bx-preview-insert .row .col.pull-s9{right:75%}#bx-preview-insert .row .col.push-s9{left:75%}#bx-preview-insert .row .col.offset-s10{margin-left:83.3333333333%}#bx-preview-insert .row .col.pull-s10{right:83.3333333333%}#bx-preview-insert .row .col.push-s10{left:83.3333333333%}#bx-preview-insert .row .col.offset-s11{margin-left:91.6666666667%}#bx-preview-insert .row .col.pull-s11{right:91.6666666667%}#bx-preview-insert .row .col.push-s11{left:91.6666666667%}#bx-preview-insert .row .col.offset-s12{margin-left:100%}#bx-preview-insert .row .col.pull-s12{right:100%}#bx-preview-insert .row .col.push-s12{left:100%}@media only screen and (min-width : 601px){#bx-preview-insert .row .col.m1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.m2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.m3{width:25%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.m4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.m5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.m6{width:50%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.m7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.m8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.m9{width:75%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.m10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.m11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.m12{width:100%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.offset-m1{margin-left:8.3333333333%}#bx-preview-insert .row .col.pull-m1{right:8.3333333333%}#bx-preview-insert .row .col.push-m1{left:8.3333333333%}#bx-preview-insert .row .col.offset-m2{margin-left:16.6666666667%}#bx-preview-insert .row .col.pull-m2{right:16.6666666667%}#bx-preview-insert .row .col.push-m2{left:16.6666666667%}#bx-preview-insert .row .col.offset-m3{margin-left:25%}#bx-preview-insert .row .col.pull-m3{right:25%}#bx-preview-insert .row .col.push-m3{left:25%}#bx-preview-insert .row .col.offset-m4{margin-left:33.3333333333%}#bx-preview-insert .row .col.pull-m4{right:33.3333333333%}#bx-preview-insert .row .col.push-m4{left:33.3333333333%}#bx-preview-insert .row .col.offset-m5{margin-left:41.6666666667%}#bx-preview-insert .row .col.pull-m5{right:41.6666666667%}#bx-preview-insert .row .col.push-m5{left:41.6666666667%}#bx-preview-insert .row .col.offset-m6{margin-left:50%}#bx-preview-insert .row .col.pull-m6{right:50%}#bx-preview-insert .row .col.push-m6{left:50%}#bx-preview-insert .row .col.offset-m7{margin-left:58.3333333333%}#bx-preview-insert .row .col.pull-m7{right:58.3333333333%}#bx-preview-insert .row .col.push-m7{left:58.3333333333%}#bx-preview-insert .row .col.offset-m8{margin-left:66.6666666667%}#bx-preview-insert .row .col.pull-m8{right:66.6666666667%}#bx-preview-insert .row .col.push-m8{left:66.6666666667%}#bx-preview-insert .row .col.offset-m9{margin-left:75%}#bx-preview-insert .row .col.pull-m9{right:75%}#bx-preview-insert .row .col.push-m9{left:75%}#bx-preview-insert .row .col.offset-m10{margin-left:83.3333333333%}#bx-preview-insert .row .col.pull-m10{right:83.3333333333%}#bx-preview-insert .row .col.push-m10{left:83.3333333333%}#bx-preview-insert .row .col.offset-m11{margin-left:91.6666666667%}#bx-preview-insert .row .col.pull-m11{right:91.6666666667%}#bx-preview-insert .row .col.push-m11{left:91.6666666667%}#bx-preview-insert .row .col.offset-m12{margin-left:100%}#bx-preview-insert .row .col.pull-m12{right:100%}#bx-preview-insert .row .col.push-m12{left:100%}}@media only screen and (min-width : 993px){#bx-preview-insert .row .col.l1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.l2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.l3{width:25%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.l4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.l5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.l6{width:50%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.l7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.l8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.l9{width:75%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.l10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.l11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.l12{width:100%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.offset-l1{margin-left:8.3333333333%}#bx-preview-insert .row .col.pull-l1{right:8.3333333333%}#bx-preview-insert .row .col.push-l1{left:8.3333333333%}#bx-preview-insert .row .col.offset-l2{margin-left:16.6666666667%}#bx-preview-insert .row .col.pull-l2{right:16.6666666667%}#bx-preview-insert .row .col.push-l2{left:16.6666666667%}#bx-preview-insert .row .col.offset-l3{margin-left:25%}#bx-preview-insert .row .col.pull-l3{right:25%}#bx-preview-insert .row .col.push-l3{left:25%}#bx-preview-insert .row .col.offset-l4{margin-left:33.3333333333%}#bx-preview-insert .row .col.pull-l4{right:33.3333333333%}#bx-preview-insert .row .col.push-l4{left:33.3333333333%}#bx-preview-insert .row .col.offset-l5{margin-left:41.6666666667%}#bx-preview-insert .row .col.pull-l5{right:41.6666666667%}#bx-preview-insert .row .col.push-l5{left:41.6666666667%}#bx-preview-insert .row .col.offset-l6{margin-left:50%}#bx-preview-insert .row .col.pull-l6{right:50%}#bx-preview-insert .row .col.push-l6{left:50%}#bx-preview-insert .row .col.offset-l7{margin-left:58.3333333333%}#bx-preview-insert .row .col.pull-l7{right:58.3333333333%}#bx-preview-insert .row .col.push-l7{left:58.3333333333%}#bx-preview-insert .row .col.offset-l8{margin-left:66.6666666667%}#bx-preview-insert .row .col.pull-l8{right:66.6666666667%}#bx-preview-insert .row .col.push-l8{left:66.6666666667%}#bx-preview-insert .row .col.offset-l9{margin-left:75%}#bx-preview-insert .row .col.pull-l9{right:75%}#bx-preview-insert .row .col.push-l9{left:75%}#bx-preview-insert .row .col.offset-l10{margin-left:83.3333333333%}#bx-preview-insert .row .col.pull-l10{right:83.3333333333%}#bx-preview-insert .row .col.push-l10{left:83.3333333333%}#bx-preview-insert .row .col.offset-l11{margin-left:91.6666666667%}#bx-preview-insert .row .col.pull-l11{right:91.6666666667%}#bx-preview-insert .row .col.push-l11{left:91.6666666667%}#bx-preview-insert .row .col.offset-l12{margin-left:100%}#bx-preview-insert .row .col.pull-l12{right:100%}#bx-preview-insert .row .col.push-l12{left:100%}}@media only screen and (min-width : 1201px){#bx-preview-insert .row .col.xl1{width:8.3333333333%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.xl2{width:16.6666666667%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.xl3{width:25%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.xl4{width:33.3333333333%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.xl5{width:41.6666666667%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.xl6{width:50%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.xl7{width:58.3333333333%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.xl8{width:66.6666666667%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.xl9{width:75%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.xl10{width:83.3333333333%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.xl11{width:91.6666666667%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.xl12{width:100%;margin-left:auto;left:auto;right:auto}#bx-preview-insert .row .col.offset-xl1{margin-left:8.3333333333%}#bx-preview-insert .row .col.pull-xl1{right:8.3333333333%}#bx-preview-insert .row .col.push-xl1{left:8.3333333333%}#bx-preview-insert .row .col.offset-xl2{margin-left:16.6666666667%}#bx-preview-insert .row .col.pull-xl2{right:16.6666666667%}#bx-preview-insert .row .col.push-xl2{left:16.6666666667%}#bx-preview-insert .row .col.offset-xl3{margin-left:25%}#bx-preview-insert .row .col.pull-xl3{right:25%}#bx-preview-insert .row .col.push-xl3{left:25%}#bx-preview-insert .row .col.offset-xl4{margin-left:33.3333333333%}#bx-preview-insert .row .col.pull-xl4{right:33.3333333333%}#bx-preview-insert .row .col.push-xl4{left:33.3333333333%}#bx-preview-insert .row .col.offset-xl5{margin-left:41.6666666667%}#bx-preview-insert .row .col.pull-xl5{right:41.6666666667%}#bx-preview-insert .row .col.push-xl5{left:41.6666666667%}#bx-preview-insert .row .col.offset-xl6{margin-left:50%}#bx-preview-insert .row .col.pull-xl6{right:50%}#bx-preview-insert .row .col.push-xl6{left:50%}#bx-preview-insert .row .col.offset-xl7{margin-left:58.3333333333%}#bx-preview-insert .row .col.pull-xl7{right:58.3333333333%}#bx-preview-insert .row .col.push-xl7{left:58.3333333333%}#bx-preview-insert .row .col.offset-xl8{margin-left:66.6666666667%}#bx-preview-insert .row .col.pull-xl8{right:66.6666666667%}#bx-preview-insert .row .col.push-xl8{left:66.6666666667%}#bx-preview-insert .row .col.offset-xl9{margin-left:75%}#bx-preview-insert .row .col.pull-xl9{right:75%}#bx-preview-insert .row .col.push-xl9{left:75%}#bx-preview-insert .row .col.offset-xl10{margin-left:83.3333333333%}#bx-preview-insert .row .col.pull-xl10{right:83.3333333333%}#bx-preview-insert .row .col.push-xl10{left:83.3333333333%}#bx-preview-insert .row .col.offset-xl11{margin-left:91.6666666667%}#bx-preview-insert .row .col.pull-xl11{right:91.6666666667%}#bx-preview-insert .row .col.push-xl11{left:91.6666666667%}#bx-preview-insert .row .col.offset-xl12{margin-left:100%}#bx-preview-insert .row .col.pull-xl12{right:100%}#bx-preview-insert .row .col.push-xl12{left:100%}}#bx-preview-insert a{text-decoration:none}#bx-preview-insert html{line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;font-weight:normal;color:rgba(0,0,0,.87)}@media only screen and (min-width: 0){#bx-preview-insert html{font-size:14px}}@media only screen and (min-width: 992px){#bx-preview-insert html{font-size:14.5px}}@media only screen and (min-width: 1200px){#bx-preview-insert html{font-size:15px}}#bx-preview-insert h1,#bx-preview-insert h2,#bx-preview-insert h3,#bx-preview-insert h4,#bx-preview-insert h5,#bx-preview-insert h6{font-weight:400;line-height:1.3}#bx-preview-insert h1 a,#bx-preview-insert h2 a,#bx-preview-insert h3 a,#bx-preview-insert h4 a,#bx-preview-insert h5 a,#bx-preview-insert h6 a{font-weight:inherit}#bx-preview-insert h1{font-size:4.2rem;line-height:110%;margin:2.8rem 0 1.68rem 0}#bx-preview-insert h2{font-size:3.56rem;line-height:110%;margin:2.3733333333rem 0 1.424rem 0}#bx-preview-insert h3{font-size:2.92rem;line-height:110%;margin:1.9466666667rem 0 1.168rem 0}#bx-preview-insert h4{font-size:2.28rem;line-height:110%;margin:1.52rem 0 .912rem 0}#bx-preview-insert h5{font-size:1.64rem;line-height:110%;margin:1.0933333333rem 0 .656rem 0}#bx-preview-insert h6{font-size:1.15rem;line-height:110%;margin:.7666666667rem 0 .46rem 0}#bx-preview-insert em{font-style:italic}#bx-preview-insert strong{font-weight:500}#bx-preview-insert small{font-size:75%}#bx-preview-insert .light{font-weight:300}#bx-preview-insert .thin{font-weight:200}@media only screen and (min-width: 360px){#bx-preview-insert .flow-text{font-size:1.2rem}}@media only screen and (min-width: 390px){#bx-preview-insert .flow-text{font-size:1.224rem}}@media only screen and (min-width: 420px){#bx-preview-insert .flow-text{font-size:1.248rem}}@media only screen and (min-width: 450px){#bx-preview-insert .flow-text{font-size:1.272rem}}@media only screen and (min-width: 480px){#bx-preview-insert .flow-text{font-size:1.296rem}}@media only screen and (min-width: 510px){#bx-preview-insert .flow-text{font-size:1.32rem}}@media only screen and (min-width: 540px){#bx-preview-insert .flow-text{font-size:1.344rem}}@media only screen and (min-width: 570px){#bx-preview-insert .flow-text{font-size:1.368rem}}@media only screen and (min-width: 600px){#bx-preview-insert .flow-text{font-size:1.392rem}}@media only screen and (min-width: 630px){#bx-preview-insert .flow-text{font-size:1.416rem}}@media only screen and (min-width: 660px){#bx-preview-insert .flow-text{font-size:1.44rem}}@media only screen and (min-width: 690px){#bx-preview-insert .flow-text{font-size:1.464rem}}@media only screen and (min-width: 720px){#bx-preview-insert .flow-text{font-size:1.488rem}}@media only screen and (min-width: 750px){#bx-preview-insert .flow-text{font-size:1.512rem}}@media only screen and (min-width: 780px){#bx-preview-insert .flow-text{font-size:1.536rem}}@media only screen and (min-width: 810px){#bx-preview-insert .flow-text{font-size:1.56rem}}@media only screen and (min-width: 840px){#bx-preview-insert .flow-text{font-size:1.584rem}}@media only screen and (min-width: 870px){#bx-preview-insert .flow-text{font-size:1.608rem}}@media only screen and (min-width: 900px){#bx-preview-insert .flow-text{font-size:1.632rem}}@media only screen and (min-width: 930px){#bx-preview-insert .flow-text{font-size:1.656rem}}@media only screen and (min-width: 960px){#bx-preview-insert .flow-text{font-size:1.68rem}}@media only screen and (max-width: 360px){#bx-preview-insert .flow-text{font-size:1.2rem}}#bx-preview-insert .scale-transition{transition:transform .3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important}#bx-preview-insert .scale-transition.scale-out{transform:scale(0);transition:transform .2s !important}#bx-preview-insert .scale-transition.scale-in{transform:scale(1)}#bx-preview-insert #toast-container{display:block;position:fixed;z-index:10000}@media only screen and (max-width : 600px){#bx-preview-insert #toast-container{min-width:100%;bottom:0%}}@media only screen and (min-width : 601px)and (max-width : 992px){#bx-preview-insert #toast-container{left:5%;bottom:7%;max-width:90%}}@media only screen and (min-width : 993px){#bx-preview-insert #toast-container{top:10%;right:7%;max-width:86%}}#bx-preview-insert .toast{border-radius:2px;top:35px;width:auto;margin-top:10px;position:relative;max-width:100%;height:auto;min-height:48px;line-height:1.5em;background-color:#323232;padding:10px 25px;font-size:1.1rem;font-weight:300;color:#fff;display:flex;align-items:center;justify-content:space-between;cursor:default}#bx-preview-insert .toast .toast-action{color:#eeff41;font-weight:500;margin-right:-25px;margin-left:3rem}#bx-preview-insert .toast.rounded{border-radius:24px}@media only screen and (max-width : 600px){#bx-preview-insert .toast{width:100%;border-radius:0}}#bx-preview-insert .material-tooltip{padding:10px 8px;font-size:1rem;z-index:2000;background-color:transparent;border-radius:2px;color:#fff;min-height:36px;line-height:120%;opacity:0;position:absolute;text-align:center;max-width:calc(100% - 4px);overflow:hidden;left:0;top:0;pointer-events:none;visibility:hidden;background-color:#323232}#bx-preview-insert .backdrop{position:absolute;opacity:0;height:7px;width:14px;border-radius:0 0 50% 50%;background-color:#323232;z-index:-1;transform-origin:50% 0%;visibility:hidden}#bx-preview-insert .btn,#bx-preview-insert .btn-small,#bx-preview-insert .btn-large,#bx-preview-insert .btn-flat{border:none;border-radius:2px;display:inline-block;height:36px;line-height:36px;padding:0 16px;text-transform:uppercase;vertical-align:middle;-webkit-tap-highlight-color:transparent}#bx-preview-insert .btn.disabled,#bx-preview-insert .btn-floating.disabled,#bx-preview-insert .btn-large.disabled,#bx-preview-insert .btn-small.disabled,#bx-preview-insert .btn-flat.disabled,#bx-preview-insert .btn:disabled,#bx-preview-insert .btn-floating:disabled,#bx-preview-insert .btn-large:disabled,#bx-preview-insert .btn-small:disabled,#bx-preview-insert .btn-flat:disabled,#bx-preview-insert .btn[disabled],#bx-preview-insert .btn-floating[disabled],#bx-preview-insert .btn-large[disabled],#bx-preview-insert .btn-small[disabled],#bx-preview-insert .btn-flat[disabled]{pointer-events:none;background-color:#dfdfdf !important;box-shadow:none;color:#9f9f9f !important;cursor:default}#bx-preview-insert .btn.disabled:hover,#bx-preview-insert .btn-floating.disabled:hover,#bx-preview-insert .btn-large.disabled:hover,#bx-preview-insert .btn-small.disabled:hover,#bx-preview-insert .btn-flat.disabled:hover,#bx-preview-insert .btn:disabled:hover,#bx-preview-insert .btn-floating:disabled:hover,#bx-preview-insert .btn-large:disabled:hover,#bx-preview-insert .btn-small:disabled:hover,#bx-preview-insert .btn-flat:disabled:hover,#bx-preview-insert .btn[disabled]:hover,#bx-preview-insert .btn-floating[disabled]:hover,#bx-preview-insert .btn-large[disabled]:hover,#bx-preview-insert .btn-small[disabled]:hover,#bx-preview-insert .btn-flat[disabled]:hover{background-color:#dfdfdf !important;color:#9f9f9f !important}#bx-preview-insert .btn,#bx-preview-insert .btn-floating,#bx-preview-insert .btn-large,#bx-preview-insert .btn-small,#bx-preview-insert .btn-flat{font-size:14px;outline:0}#bx-preview-insert .btn i,#bx-preview-insert .btn-floating i,#bx-preview-insert .btn-large i,#bx-preview-insert .btn-small i,#bx-preview-insert .btn-flat i{font-size:1.3rem;line-height:inherit}#bx-preview-insert .btn:focus,#bx-preview-insert .btn-small:focus,#bx-preview-insert .btn-large:focus,#bx-preview-insert .btn-floating:focus{background-color:#1d7d74}#bx-preview-insert .btn,#bx-preview-insert .btn-small,#bx-preview-insert .btn-large{text-decoration:none;color:#fff;background-color:#26a69a;text-align:center;letter-spacing:.5px;transition:background-color .2s ease-out;cursor:pointer}#bx-preview-insert .btn:hover,#bx-preview-insert .btn-small:hover,#bx-preview-insert .btn-large:hover{background-color:#2bbbad}#bx-preview-insert .btn-floating{display:inline-block;color:#fff;position:relative;overflow:hidden;z-index:1;width:40px;height:40px;line-height:40px;padding:0;background-color:#26a69a;border-radius:50%;transition:background-color .3s;cursor:pointer;vertical-align:middle}#bx-preview-insert .btn-floating:hover{background-color:#26a69a}#bx-preview-insert .btn-floating:before{border-radius:0}#bx-preview-insert .btn-floating.btn-large{width:56px;height:56px;padding:0}#bx-preview-insert .btn-floating.btn-large.halfway-fab{bottom:-28px}#bx-preview-insert .btn-floating.btn-large i{line-height:56px}#bx-preview-insert .btn-floating.btn-small{width:32.4px;height:32.4px}#bx-preview-insert .btn-floating.btn-small.halfway-fab{bottom:-16.2px}#bx-preview-insert .btn-floating.btn-small i{line-height:32.4px}#bx-preview-insert .btn-floating.halfway-fab{position:absolute;right:24px;bottom:-20px}#bx-preview-insert .btn-floating.halfway-fab.left{right:auto;left:24px}#bx-preview-insert .btn-floating i{width:inherit;display:inline-block;text-align:center;color:#fff;font-size:1.6rem;line-height:40px}#bx-preview-insert button.btn-floating{border:none}#bx-preview-insert .fixed-action-btn{position:fixed;right:23px;bottom:23px;padding-top:15px;margin-bottom:0;z-index:997}#bx-preview-insert .fixed-action-btn.active ul{visibility:visible}#bx-preview-insert .fixed-action-btn.direction-left,#bx-preview-insert .fixed-action-btn.direction-right{padding:0 0 0 15px}#bx-preview-insert .fixed-action-btn.direction-left ul,#bx-preview-insert .fixed-action-btn.direction-right ul{text-align:right;right:64px;top:50%;transform:translateY(-50%);height:100%;left:auto;width:500px}#bx-preview-insert .fixed-action-btn.direction-left ul li,#bx-preview-insert .fixed-action-btn.direction-right ul li{display:inline-block;margin:7.5px 15px 0 0}#bx-preview-insert .fixed-action-btn.direction-right{padding:0 15px 0 0}#bx-preview-insert .fixed-action-btn.direction-right ul{text-align:left;direction:rtl;left:64px;right:auto}#bx-preview-insert .fixed-action-btn.direction-right ul li{margin:7.5px 0 0 15px}#bx-preview-insert .fixed-action-btn.direction-bottom{padding:0 0 15px 0}#bx-preview-insert .fixed-action-btn.direction-bottom ul{top:64px;bottom:auto;display:flex;flex-direction:column-reverse}#bx-preview-insert .fixed-action-btn.direction-bottom ul li{margin:15px 0 0 0}#bx-preview-insert .fixed-action-btn.toolbar{padding:0;height:56px}#bx-preview-insert .fixed-action-btn.toolbar.active>a i{opacity:0}#bx-preview-insert .fixed-action-btn.toolbar ul{display:flex;top:0;bottom:0;z-index:1}#bx-preview-insert .fixed-action-btn.toolbar ul li{flex:1;display:inline-block;margin:0;height:100%;transition:none}#bx-preview-insert .fixed-action-btn.toolbar ul li a{display:block;overflow:hidden;position:relative;width:100%;height:100%;background-color:transparent;box-shadow:none;color:#fff;line-height:56px;z-index:1}#bx-preview-insert .fixed-action-btn.toolbar ul li a i{line-height:inherit}#bx-preview-insert .fixed-action-btn ul{left:0;right:0;text-align:center;position:absolute;bottom:64px;margin:0;visibility:hidden}#bx-preview-insert .fixed-action-btn ul li{margin-bottom:15px}#bx-preview-insert .fixed-action-btn ul a.btn-floating{opacity:0}#bx-preview-insert .fixed-action-btn .fab-backdrop{position:absolute;top:0;left:0;z-index:-1;width:40px;height:40px;background-color:#26a69a;border-radius:50%;transform:scale(0)}#bx-preview-insert .btn-flat{box-shadow:none;background-color:transparent;color:#343434;cursor:pointer;transition:background-color .2s}#bx-preview-insert .btn-flat:focus,#bx-preview-insert .btn-flat:hover{box-shadow:none}#bx-preview-insert .btn-flat:focus{background-color:rgba(0,0,0,.1)}#bx-preview-insert .btn-flat.disabled,#bx-preview-insert .btn-flat.btn-flat[disabled]{background-color:transparent !important;color:#b3b3b3 !important;cursor:default}#bx-preview-insert .btn-large{height:54px;line-height:54px;font-size:15px;padding:0 28px}#bx-preview-insert .btn-large i{font-size:1.6rem}#bx-preview-insert .btn-small{height:32.4px;line-height:32.4px;font-size:13px}#bx-preview-insert .btn-small i{font-size:1.2rem}#bx-preview-insert .btn-block{display:block}#bx-preview-insert .dropdown-content{background-color:#fff;margin:0;display:none;min-width:100px;overflow-y:auto;opacity:0;position:absolute;left:0;top:0;z-index:9999;transform-origin:0 0}#bx-preview-insert .dropdown-content:focus{outline:0}#bx-preview-insert .dropdown-content li{clear:both;color:rgba(0,0,0,.87);cursor:pointer;min-height:50px;line-height:1.5rem;width:100%;text-align:left}#bx-preview-insert .dropdown-content li:hover,#bx-preview-insert .dropdown-content li.active{background-color:#eee}#bx-preview-insert .dropdown-content li:focus{outline:none}#bx-preview-insert .dropdown-content li.divider{min-height:0;height:1px}#bx-preview-insert .dropdown-content li>a,#bx-preview-insert .dropdown-content li>span{font-size:16px;color:#26a69a;display:block;line-height:22px;padding:14px 16px}#bx-preview-insert .dropdown-content li>span>label{top:1px;left:0;height:18px}#bx-preview-insert .dropdown-content li>a>i{height:inherit;line-height:inherit;float:left;margin:0 24px 0 0;width:24px}#bx-preview-insert body.keyboard-focused .dropdown-content li:focus{background-color:#dadada}#bx-preview-insert .input-field.col .dropdown-content [type=checkbox]+label{top:1px;left:0;height:18px;transform:none}#bx-preview-insert .dropdown-trigger{cursor:pointer}#bx-preview-insert .waves-effect{position:relative;cursor:pointer;display:inline-block;overflow:hidden;user-select:none;-webkit-tap-highlight-color:transparent;vertical-align:middle;z-index:1;transition:.3s ease-out}#bx-preview-insert .waves-effect .waves-ripple{position:absolute;border-radius:50%;width:20px;height:20px;margin-top:-10px;margin-left:-10px;opacity:0;background:rgba(0,0,0,.2);transition:all .7s ease-out;transition-property:transform,opacity;transform:scale(0);pointer-events:none}#bx-preview-insert .waves-effect.waves-light .waves-ripple{background-color:rgba(255,255,255,.45)}#bx-preview-insert .waves-effect.waves-red .waves-ripple{background-color:rgba(244,67,54,.7)}#bx-preview-insert .waves-effect.waves-yellow .waves-ripple{background-color:rgba(255,235,59,.7)}#bx-preview-insert .waves-effect.waves-orange .waves-ripple{background-color:rgba(255,152,0,.7)}#bx-preview-insert .waves-effect.waves-purple .waves-ripple{background-color:rgba(156,39,176,.7)}#bx-preview-insert .waves-effect.waves-green .waves-ripple{background-color:rgba(76,175,80,.7)}#bx-preview-insert .waves-effect.waves-teal .waves-ripple{background-color:rgba(0,150,136,.7)}#bx-preview-insert .waves-effect input[type=button],#bx-preview-insert .waves-effect input[type=reset],#bx-preview-insert .waves-effect input[type=submit]{border:0;font-style:normal;font-size:inherit;text-transform:inherit;background:none}#bx-preview-insert .waves-effect img{position:relative;z-index:-1}#bx-preview-insert .waves-notransition{transition:none !important}#bx-preview-insert .waves-circle{transform:translateZ(0);-webkit-mask-image:-webkit-radial-gradient(circle, white 100%, black 100%)}#bx-preview-insert .waves-input-wrapper{border-radius:.2em;vertical-align:bottom}#bx-preview-insert .waves-input-wrapper .waves-button-input{position:relative;top:0;left:0;z-index:1}#bx-preview-insert .waves-circle{text-align:center;width:2.5em;height:2.5em;line-height:2.5em;border-radius:50%;-webkit-mask-image:none}#bx-preview-insert .waves-block{display:block}#bx-preview-insert .waves-effect .waves-ripple{z-index:-1}#bx-preview-insert .collapsible{border-top:1px solid #ddd;border-right:1px solid #ddd;border-left:1px solid #ddd;margin:.5rem 0 1rem 0}#bx-preview-insert .collapsible-header{display:flex;cursor:pointer;-webkit-tap-highlight-color:transparent;line-height:1.5;padding:1rem;background-color:#fff;border-bottom:1px solid #ddd}#bx-preview-insert .collapsible-header:focus{outline:0}#bx-preview-insert .collapsible-header i{width:2rem;font-size:1.6rem;display:inline-block;text-align:center;margin-right:1rem}#bx-preview-insert .keyboard-focused .collapsible-header:focus{background-color:#eee}#bx-preview-insert .collapsible-body{display:none;border-bottom:1px solid #ddd;box-sizing:border-box;padding:2rem}#bx-preview-insert .sidenav .collapsible,#bx-preview-insert .sidenav.fixed .collapsible{border:none;box-shadow:none}#bx-preview-insert .sidenav .collapsible li,#bx-preview-insert .sidenav.fixed .collapsible li{padding:0}#bx-preview-insert .sidenav .collapsible-header,#bx-preview-insert .sidenav.fixed .collapsible-header{background-color:transparent;border:none;line-height:inherit;height:inherit;padding:0 16px}#bx-preview-insert .sidenav .collapsible-header:hover,#bx-preview-insert .sidenav.fixed .collapsible-header:hover{background-color:rgba(0,0,0,.05)}#bx-preview-insert .sidenav .collapsible-header i,#bx-preview-insert .sidenav.fixed .collapsible-header i{line-height:inherit}#bx-preview-insert .sidenav .collapsible-body,#bx-preview-insert .sidenav.fixed .collapsible-body{border:0;background-color:#fff}#bx-preview-insert .sidenav .collapsible-body li a,#bx-preview-insert .sidenav.fixed .collapsible-body li a{padding:0 23.5px 0 31px}#bx-preview-insert .collapsible.popout{border:none;box-shadow:none}#bx-preview-insert .collapsible.popout>li{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);margin:0 24px;transition:margin .35s cubic-bezier(0.25, 0.46, 0.45, 0.94)}#bx-preview-insert .collapsible.popout>li.active{box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);margin:16px 0}#bx-preview-insert .materialboxed{display:block;cursor:zoom-in;position:relative;transition:opacity .4s;-webkit-backface-visibility:hidden}#bx-preview-insert .materialboxed:hover:not(.active){opacity:.8}#bx-preview-insert .materialboxed.active{cursor:zoom-out}#bx-preview-insert #materialbox-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background-color:#292929;z-index:1000;will-change:opacity}#bx-preview-insert .materialbox-caption{position:fixed;display:none;color:#fff;line-height:50px;bottom:0;left:0;width:100%;text-align:center;padding:0% 15%;height:50px;z-index:1000;-webkit-font-smoothing:antialiased}#bx-preview-insert select:focus{outline:1px solid #c9f3ef}#bx-preview-insert button:focus{outline:none;background-color:#2ab7a9}#bx-preview-insert label{font-size:.8rem;color:#9e9e9e}#bx-preview-insert ::placeholder{color:#d1d1d1}#bx-preview-insert input:not([type]),#bx-preview-insert input[type=text]:not(.browser-default),#bx-preview-insert input[type=password]:not(.browser-default),#bx-preview-insert input[type=email]:not(.browser-default),#bx-preview-insert input[type=url]:not(.browser-default),#bx-preview-insert input[type=time]:not(.browser-default),#bx-preview-insert input[type=date]:not(.browser-default),#bx-preview-insert input[type=datetime]:not(.browser-default),#bx-preview-insert input[type=datetime-local]:not(.browser-default),#bx-preview-insert input[type=tel]:not(.browser-default),#bx-preview-insert input[type=number]:not(.browser-default),#bx-preview-insert input[type=search]:not(.browser-default),#bx-preview-insert textarea.materialize-textarea{background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;border-radius:0;outline:none;height:3rem;width:100%;font-size:16px;margin:0 0 8px 0;padding:0;box-shadow:none;box-sizing:content-box;transition:box-shadow .3s,border .3s}#bx-preview-insert input:not([type]):disabled,#bx-preview-insert input:not([type])[readonly=readonly],#bx-preview-insert input[type=text]:not(.browser-default):disabled,#bx-preview-insert input[type=text]:not(.browser-default)[readonly=readonly],#bx-preview-insert input[type=password]:not(.browser-default):disabled,#bx-preview-insert input[type=password]:not(.browser-default)[readonly=readonly],#bx-preview-insert input[type=email]:not(.browser-default):disabled,#bx-preview-insert input[type=email]:not(.browser-default)[readonly=readonly],#bx-preview-insert input[type=url]:not(.browser-default):disabled,#bx-preview-insert input[type=url]:not(.browser-default)[readonly=readonly],#bx-preview-insert input[type=time]:not(.browser-default):disabled,#bx-preview-insert input[type=time]:not(.browser-default)[readonly=readonly],#bx-preview-insert input[type=date]:not(.browser-default):disabled,#bx-preview-insert input[type=date]:not(.browser-default)[readonly=readonly],#bx-preview-insert input[type=datetime]:not(.browser-default):disabled,#bx-preview-insert input[type=datetime]:not(.browser-default)[readonly=readonly],#bx-preview-insert input[type=datetime-local]:not(.browser-default):disabled,#bx-preview-insert input[type=datetime-local]:not(.browser-default)[readonly=readonly],#bx-preview-insert input[type=tel]:not(.browser-default):disabled,#bx-preview-insert input[type=tel]:not(.browser-default)[readonly=readonly],#bx-preview-insert input[type=number]:not(.browser-default):disabled,#bx-preview-insert input[type=number]:not(.browser-default)[readonly=readonly],#bx-preview-insert input[type=search]:not(.browser-default):disabled,#bx-preview-insert input[type=search]:not(.browser-default)[readonly=readonly],#bx-preview-insert textarea.materialize-textarea:disabled,#bx-preview-insert textarea.materialize-textarea[readonly=readonly]{color:rgba(0,0,0,.42);border-bottom:1px dotted rgba(0,0,0,.42)}#bx-preview-insert input:not([type]):disabled+label,#bx-preview-insert input:not([type])[readonly=readonly]+label,#bx-preview-insert input[type=text]:not(.browser-default):disabled+label,#bx-preview-insert input[type=text]:not(.browser-default)[readonly=readonly]+label,#bx-preview-insert input[type=password]:not(.browser-default):disabled+label,#bx-preview-insert input[type=password]:not(.browser-default)[readonly=readonly]+label,#bx-preview-insert input[type=email]:not(.browser-default):disabled+label,#bx-preview-insert input[type=email]:not(.browser-default)[readonly=readonly]+label,#bx-preview-insert input[type=url]:not(.browser-default):disabled+label,#bx-preview-insert input[type=url]:not(.browser-default)[readonly=readonly]+label,#bx-preview-insert input[type=time]:not(.browser-default):disabled+label,#bx-preview-insert input[type=time]:not(.browser-default)[readonly=readonly]+label,#bx-preview-insert input[type=date]:not(.browser-default):disabled+label,#bx-preview-insert input[type=date]:not(.browser-default)[readonly=readonly]+label,#bx-preview-insert input[type=datetime]:not(.browser-default):disabled+label,#bx-preview-insert input[type=datetime]:not(.browser-default)[readonly=readonly]+label,#bx-preview-insert input[type=datetime-local]:not(.browser-default):disabled+label,#bx-preview-insert input[type=datetime-local]:not(.browser-default)[readonly=readonly]+label,#bx-preview-insert input[type=tel]:not(.browser-default):disabled+label,#bx-preview-insert input[type=tel]:not(.browser-default)[readonly=readonly]+label,#bx-preview-insert input[type=number]:not(.browser-default):disabled+label,#bx-preview-insert input[type=number]:not(.browser-default)[readonly=readonly]+label,#bx-preview-insert input[type=search]:not(.browser-default):disabled+label,#bx-preview-insert input[type=search]:not(.browser-default)[readonly=readonly]+label,#bx-preview-insert textarea.materialize-textarea:disabled+label,#bx-preview-insert textarea.materialize-textarea[readonly=readonly]+label{color:rgba(0,0,0,.42)}#bx-preview-insert input:not([type]):focus:not([readonly]),#bx-preview-insert input[type=text]:not(.browser-default):focus:not([readonly]),#bx-preview-insert input[type=password]:not(.browser-default):focus:not([readonly]),#bx-preview-insert input[type=email]:not(.browser-default):focus:not([readonly]),#bx-preview-insert input[type=url]:not(.browser-default):focus:not([readonly]),#bx-preview-insert input[type=time]:not(.browser-default):focus:not([readonly]),#bx-preview-insert input[type=date]:not(.browser-default):focus:not([readonly]),#bx-preview-insert input[type=datetime]:not(.browser-default):focus:not([readonly]),#bx-preview-insert input[type=datetime-local]:not(.browser-default):focus:not([readonly]),#bx-preview-insert input[type=tel]:not(.browser-default):focus:not([readonly]),#bx-preview-insert input[type=number]:not(.browser-default):focus:not([readonly]),#bx-preview-insert input[type=search]:not(.browser-default):focus:not([readonly]),#bx-preview-insert textarea.materialize-textarea:focus:not([readonly]){border-bottom:1px solid #26a69a;box-shadow:0 1px 0 0 #26a69a}#bx-preview-insert input:not([type]):focus:not([readonly])+label,#bx-preview-insert input[type=text]:not(.browser-default):focus:not([readonly])+label,#bx-preview-insert input[type=password]:not(.browser-default):focus:not([readonly])+label,#bx-preview-insert input[type=email]:not(.browser-default):focus:not([readonly])+label,#bx-preview-insert input[type=url]:not(.browser-default):focus:not([readonly])+label,#bx-preview-insert input[type=time]:not(.browser-default):focus:not([readonly])+label,#bx-preview-insert input[type=date]:not(.browser-default):focus:not([readonly])+label,#bx-preview-insert input[type=datetime]:not(.browser-default):focus:not([readonly])+label,#bx-preview-insert input[type=datetime-local]:not(.browser-default):focus:not([readonly])+label,#bx-preview-insert input[type=tel]:not(.browser-default):focus:not([readonly])+label,#bx-preview-insert input[type=number]:not(.browser-default):focus:not([readonly])+label,#bx-preview-insert input[type=search]:not(.browser-default):focus:not([readonly])+label,#bx-preview-insert textarea.materialize-textarea:focus:not([readonly])+label{color:#26a69a}#bx-preview-insert input:not([type]):focus.valid~label,#bx-preview-insert input[type=text]:not(.browser-default):focus.valid~label,#bx-preview-insert input[type=password]:not(.browser-default):focus.valid~label,#bx-preview-insert input[type=email]:not(.browser-default):focus.valid~label,#bx-preview-insert input[type=url]:not(.browser-default):focus.valid~label,#bx-preview-insert input[type=time]:not(.browser-default):focus.valid~label,#bx-preview-insert input[type=date]:not(.browser-default):focus.valid~label,#bx-preview-insert input[type=datetime]:not(.browser-default):focus.valid~label,#bx-preview-insert input[type=datetime-local]:not(.browser-default):focus.valid~label,#bx-preview-insert input[type=tel]:not(.browser-default):focus.valid~label,#bx-preview-insert input[type=number]:not(.browser-default):focus.valid~label,#bx-preview-insert input[type=search]:not(.browser-default):focus.valid~label,#bx-preview-insert textarea.materialize-textarea:focus.valid~label{color:#4caf50}#bx-preview-insert input:not([type]):focus.invalid~label,#bx-preview-insert input[type=text]:not(.browser-default):focus.invalid~label,#bx-preview-insert input[type=password]:not(.browser-default):focus.invalid~label,#bx-preview-insert input[type=email]:not(.browser-default):focus.invalid~label,#bx-preview-insert input[type=url]:not(.browser-default):focus.invalid~label,#bx-preview-insert input[type=time]:not(.browser-default):focus.invalid~label,#bx-preview-insert input[type=date]:not(.browser-default):focus.invalid~label,#bx-preview-insert input[type=datetime]:not(.browser-default):focus.invalid~label,#bx-preview-insert input[type=datetime-local]:not(.browser-default):focus.invalid~label,#bx-preview-insert input[type=tel]:not(.browser-default):focus.invalid~label,#bx-preview-insert input[type=number]:not(.browser-default):focus.invalid~label,#bx-preview-insert input[type=search]:not(.browser-default):focus.invalid~label,#bx-preview-insert textarea.materialize-textarea:focus.invalid~label{color:#f44336}#bx-preview-insert input:not([type]).validate+label,#bx-preview-insert input[type=text]:not(.browser-default).validate+label,#bx-preview-insert input[type=password]:not(.browser-default).validate+label,#bx-preview-insert input[type=email]:not(.browser-default).validate+label,#bx-preview-insert input[type=url]:not(.browser-default).validate+label,#bx-preview-insert input[type=time]:not(.browser-default).validate+label,#bx-preview-insert input[type=date]:not(.browser-default).validate+label,#bx-preview-insert input[type=datetime]:not(.browser-default).validate+label,#bx-preview-insert input[type=datetime-local]:not(.browser-default).validate+label,#bx-preview-insert input[type=tel]:not(.browser-default).validate+label,#bx-preview-insert input[type=number]:not(.browser-default).validate+label,#bx-preview-insert input[type=search]:not(.browser-default).validate+label,#bx-preview-insert textarea.materialize-textarea.validate+label{width:100%}#bx-preview-insert .select-wrapper.valid>input.select-dropdown,#bx-preview-insert input:not([type]).valid,#bx-preview-insert input:not([type]):focus.valid,#bx-preview-insert input[type=text]:not(.browser-default).valid,#bx-preview-insert input[type=text]:not(.browser-default):focus.valid,#bx-preview-insert input[type=password]:not(.browser-default).valid,#bx-preview-insert input[type=password]:not(.browser-default):focus.valid,#bx-preview-insert input[type=email]:not(.browser-default).valid,#bx-preview-insert input[type=email]:not(.browser-default):focus.valid,#bx-preview-insert input[type=url]:not(.browser-default).valid,#bx-preview-insert input[type=url]:not(.browser-default):focus.valid,#bx-preview-insert input[type=time]:not(.browser-default).valid,#bx-preview-insert input[type=time]:not(.browser-default):focus.valid,#bx-preview-insert input[type=date]:not(.browser-default).valid,#bx-preview-insert input[type=date]:not(.browser-default):focus.valid,#bx-preview-insert input[type=datetime]:not(.browser-default).valid,#bx-preview-insert input[type=datetime]:not(.browser-default):focus.valid,#bx-preview-insert input[type=datetime-local]:not(.browser-default).valid,#bx-preview-insert input[type=datetime-local]:not(.browser-default):focus.valid,#bx-preview-insert input[type=tel]:not(.browser-default).valid,#bx-preview-insert input[type=tel]:not(.browser-default):focus.valid,#bx-preview-insert input[type=number]:not(.browser-default).valid,#bx-preview-insert input[type=number]:not(.browser-default):focus.valid,#bx-preview-insert input[type=search]:not(.browser-default).valid,#bx-preview-insert input[type=search]:not(.browser-default):focus.valid,#bx-preview-insert textarea.materialize-textarea.valid,#bx-preview-insert textarea.materialize-textarea:focus.valid{border-bottom:1px solid #4caf50;box-shadow:0 1px 0 0 #4caf50}#bx-preview-insert .select-wrapper.invalid>input.select-dropdown,#bx-preview-insert .select-wrapper.invalid>input.select-dropdown:focus,#bx-preview-insert input:not([type]).invalid,#bx-preview-insert input:not([type]):focus.invalid,#bx-preview-insert input[type=text]:not(.browser-default).invalid,#bx-preview-insert input[type=text]:not(.browser-default):focus.invalid,#bx-preview-insert input[type=password]:not(.browser-default).invalid,#bx-preview-insert input[type=password]:not(.browser-default):focus.invalid,#bx-preview-insert input[type=email]:not(.browser-default).invalid,#bx-preview-insert input[type=email]:not(.browser-default):focus.invalid,#bx-preview-insert input[type=url]:not(.browser-default).invalid,#bx-preview-insert input[type=url]:not(.browser-default):focus.invalid,#bx-preview-insert input[type=time]:not(.browser-default).invalid,#bx-preview-insert input[type=time]:not(.browser-default):focus.invalid,#bx-preview-insert input[type=date]:not(.browser-default).invalid,#bx-preview-insert input[type=date]:not(.browser-default):focus.invalid,#bx-preview-insert input[type=datetime]:not(.browser-default).invalid,#bx-preview-insert input[type=datetime]:not(.browser-default):focus.invalid,#bx-preview-insert input[type=datetime-local]:not(.browser-default).invalid,#bx-preview-insert input[type=datetime-local]:not(.browser-default):focus.invalid,#bx-preview-insert input[type=tel]:not(.browser-default).invalid,#bx-preview-insert input[type=tel]:not(.browser-default):focus.invalid,#bx-preview-insert input[type=number]:not(.browser-default).invalid,#bx-preview-insert input[type=number]:not(.browser-default):focus.invalid,#bx-preview-insert input[type=search]:not(.browser-default).invalid,#bx-preview-insert input[type=search]:not(.browser-default):focus.invalid,#bx-preview-insert textarea.materialize-textarea.invalid,#bx-preview-insert textarea.materialize-textarea:focus.invalid{border-bottom:1px solid #f44336;box-shadow:0 1px 0 0 #f44336}#bx-preview-insert .select-wrapper.valid .helper-text[data-success],#bx-preview-insert .select-wrapper.invalid~.helper-text[data-error],#bx-preview-insert input:not([type]).valid~.helper-text[data-success],#bx-preview-insert input:not([type]):focus.valid~.helper-text[data-success],#bx-preview-insert input:not([type]).invalid~.helper-text[data-error],#bx-preview-insert input:not([type]):focus.invalid~.helper-text[data-error],#bx-preview-insert input[type=text]:not(.browser-default).valid~.helper-text[data-success],#bx-preview-insert input[type=text]:not(.browser-default).invalid~.helper-text[data-error],#bx-preview-insert input[type=password]:not(.browser-default).valid~.helper-text[data-success],#bx-preview-insert input[type=password]:not(.browser-default).invalid~.helper-text[data-error],#bx-preview-insert input[type=email]:not(.browser-default).valid~.helper-text[data-success],#bx-preview-insert input[type=email]:not(.browser-default).invalid~.helper-text[data-error],#bx-preview-insert input[type=url]:not(.browser-default).valid~.helper-text[data-success],#bx-preview-insert input[type=url]:not(.browser-default).invalid~.helper-text[data-error],#bx-preview-insert input[type=time]:not(.browser-default).valid~.helper-text[data-success],#bx-preview-insert input[type=time]:not(.browser-default).invalid~.helper-text[data-error],#bx-preview-insert input[type=date]:not(.browser-default).valid~.helper-text[data-success],#bx-preview-insert input[type=date]:not(.browser-default).invalid~.helper-text[data-error],#bx-preview-insert input[type=datetime]:not(.browser-default).valid~.helper-text[data-success],#bx-preview-insert input[type=datetime]:not(.browser-default).invalid~.helper-text[data-error],#bx-preview-insert input[type=datetime-local]:not(.browser-default).valid~.helper-text[data-success],#bx-preview-insert input[type=datetime-local]:not(.browser-default).invalid~.helper-text[data-error],#bx-preview-insert input[type=tel]:not(.browser-default).valid~.helper-text[data-success],#bx-preview-insert input[type=tel]:not(.browser-default).invalid~.helper-text[data-error],#bx-preview-insert input[type=number]:not(.browser-default).valid~.helper-text[data-success],#bx-preview-insert input[type=number]:not(.browser-default).invalid~.helper-text[data-error],#bx-preview-insert input[type=search]:not(.browser-default).valid~.helper-text[data-success],#bx-preview-insert input[type=search]:not(.browser-default).invalid~.helper-text[data-error],#bx-preview-insert textarea.materialize-textarea.valid~.helper-text[data-success],#bx-preview-insert textarea.materialize-textarea:focus.valid~.helper-text[data-success],#bx-preview-insert textarea.materialize-textarea.invalid~.helper-text[data-error],#bx-preview-insert textarea.materialize-textarea:focus.invalid~.helper-text[data-error]{color:transparent;user-select:none;pointer-events:none}#bx-preview-insert .select-wrapper.valid~.helper-text:after,#bx-preview-insert input:not([type]).valid~.helper-text:after,#bx-preview-insert input:not([type]):focus.valid~.helper-text:after,#bx-preview-insert input[type=text]:not(.browser-default).valid~.helper-text:after,#bx-preview-insert input[type=text]:not(.browser-default):focus.valid~.helper-text:after,#bx-preview-insert input[type=password]:not(.browser-default).valid~.helper-text:after,#bx-preview-insert input[type=password]:not(.browser-default):focus.valid~.helper-text:after,#bx-preview-insert input[type=email]:not(.browser-default).valid~.helper-text:after,#bx-preview-insert input[type=email]:not(.browser-default):focus.valid~.helper-text:after,#bx-preview-insert input[type=url]:not(.browser-default).valid~.helper-text:after,#bx-preview-insert input[type=url]:not(.browser-default):focus.valid~.helper-text:after,#bx-preview-insert input[type=time]:not(.browser-default).valid~.helper-text:after,#bx-preview-insert input[type=time]:not(.browser-default):focus.valid~.helper-text:after,#bx-preview-insert input[type=date]:not(.browser-default).valid~.helper-text:after,#bx-preview-insert input[type=date]:not(.browser-default):focus.valid~.helper-text:after,#bx-preview-insert input[type=datetime]:not(.browser-default).valid~.helper-text:after,#bx-preview-insert input[type=datetime]:not(.browser-default):focus.valid~.helper-text:after,#bx-preview-insert input[type=datetime-local]:not(.browser-default).valid~.helper-text:after,#bx-preview-insert input[type=datetime-local]:not(.browser-default):focus.valid~.helper-text:after,#bx-preview-insert input[type=tel]:not(.browser-default).valid~.helper-text:after,#bx-preview-insert input[type=tel]:not(.browser-default):focus.valid~.helper-text:after,#bx-preview-insert input[type=number]:not(.browser-default).valid~.helper-text:after,#bx-preview-insert input[type=number]:not(.browser-default):focus.valid~.helper-text:after,#bx-preview-insert input[type=search]:not(.browser-default).valid~.helper-text:after,#bx-preview-insert input[type=search]:not(.browser-default):focus.valid~.helper-text:after,#bx-preview-insert textarea.materialize-textarea.valid~.helper-text:after,#bx-preview-insert textarea.materialize-textarea:focus.valid~.helper-text:after{content:attr(data-success);color:#4caf50}#bx-preview-insert .select-wrapper.invalid~.helper-text:after,#bx-preview-insert input:not([type]).invalid~.helper-text:after,#bx-preview-insert input:not([type]):focus.invalid~.helper-text:after,#bx-preview-insert input[type=text]:not(.browser-default).invalid~.helper-text:after,#bx-preview-insert input[type=text]:not(.browser-default):focus.invalid~.helper-text:after,#bx-preview-insert input[type=password]:not(.browser-default).invalid~.helper-text:after,#bx-preview-insert input[type=password]:not(.browser-default):focus.invalid~.helper-text:after,#bx-preview-insert input[type=email]:not(.browser-default).invalid~.helper-text:after,#bx-preview-insert input[type=email]:not(.browser-default):focus.invalid~.helper-text:after,#bx-preview-insert input[type=url]:not(.browser-default).invalid~.helper-text:after,#bx-preview-insert input[type=url]:not(.browser-default):focus.invalid~.helper-text:after,#bx-preview-insert input[type=time]:not(.browser-default).invalid~.helper-text:after,#bx-preview-insert input[type=time]:not(.browser-default):focus.invalid~.helper-text:after,#bx-preview-insert input[type=date]:not(.browser-default).invalid~.helper-text:after,#bx-preview-insert input[type=date]:not(.browser-default):focus.invalid~.helper-text:after,#bx-preview-insert input[type=datetime]:not(.browser-default).invalid~.helper-text:after,#bx-preview-insert input[type=datetime]:not(.browser-default):focus.invalid~.helper-text:after,#bx-preview-insert input[type=datetime-local]:not(.browser-default).invalid~.helper-text:after,#bx-preview-insert input[type=datetime-local]:not(.browser-default):focus.invalid~.helper-text:after,#bx-preview-insert input[type=tel]:not(.browser-default).invalid~.helper-text:after,#bx-preview-insert input[type=tel]:not(.browser-default):focus.invalid~.helper-text:after,#bx-preview-insert input[type=number]:not(.browser-default).invalid~.helper-text:after,#bx-preview-insert input[type=number]:not(.browser-default):focus.invalid~.helper-text:after,#bx-preview-insert input[type=search]:not(.browser-default).invalid~.helper-text:after,#bx-preview-insert input[type=search]:not(.browser-default):focus.invalid~.helper-text:after,#bx-preview-insert textarea.materialize-textarea.invalid~.helper-text:after,#bx-preview-insert textarea.materialize-textarea:focus.invalid~.helper-text:after{content:attr(data-error);color:#f44336}#bx-preview-insert .select-wrapper+label:after,#bx-preview-insert input:not([type])+label:after,#bx-preview-insert input[type=text]:not(.browser-default)+label:after,#bx-preview-insert input[type=password]:not(.browser-default)+label:after,#bx-preview-insert input[type=email]:not(.browser-default)+label:after,#bx-preview-insert input[type=url]:not(.browser-default)+label:after,#bx-preview-insert input[type=time]:not(.browser-default)+label:after,#bx-preview-insert input[type=date]:not(.browser-default)+label:after,#bx-preview-insert input[type=datetime]:not(.browser-default)+label:after,#bx-preview-insert input[type=datetime-local]:not(.browser-default)+label:after,#bx-preview-insert input[type=tel]:not(.browser-default)+label:after,#bx-preview-insert input[type=number]:not(.browser-default)+label:after,#bx-preview-insert input[type=search]:not(.browser-default)+label:after,#bx-preview-insert textarea.materialize-textarea+label:after{display:block;content:"";position:absolute;top:100%;left:0;opacity:0;transition:.2s opacity ease-out,.2s color ease-out}#bx-preview-insert .input-field{position:relative;margin-top:1rem;margin-bottom:1rem}#bx-preview-insert .input-field.inline{display:inline-block;vertical-align:middle;margin-left:5px}#bx-preview-insert .input-field.inline input,#bx-preview-insert .input-field.inline .select-dropdown{margin-bottom:1rem}#bx-preview-insert .input-field.col label{left:.75rem}#bx-preview-insert .input-field.col .prefix~label,#bx-preview-insert .input-field.col .prefix~.validate~label{width:calc(100% - 3rem - 1.5rem)}#bx-preview-insert .input-field>label{color:#9e9e9e;position:absolute;top:0;left:0;font-size:1rem;cursor:text;transition:transform .2s ease-out,color .2s ease-out;transform-origin:0% 100%;text-align:initial;transform:translateY(12px)}#bx-preview-insert .input-field>label:not(.label-icon).active{transform:translateY(-14px) scale(0.8);transform-origin:0 0}#bx-preview-insert .input-field>input[type]:-webkit-autofill:not(.browser-default):not([type=search])+label,#bx-preview-insert .input-field>input[type=date]:not(.browser-default)+label,#bx-preview-insert .input-field>input[type=time]:not(.browser-default)+label{transform:translateY(-14px) scale(0.8);transform-origin:0 0}#bx-preview-insert .input-field .helper-text{position:relative;min-height:18px;display:block;font-size:12px;color:rgba(0,0,0,.54)}#bx-preview-insert .input-field .helper-text::after{opacity:1;position:absolute;top:0;left:0}#bx-preview-insert .input-field .prefix{position:absolute;width:3rem;font-size:2rem;transition:color .2s;top:.5rem}#bx-preview-insert .input-field .prefix.active{color:#26a69a}#bx-preview-insert .input-field .prefix~input,#bx-preview-insert .input-field .prefix~textarea,#bx-preview-insert .input-field .prefix~label,#bx-preview-insert .input-field .prefix~.validate~label,#bx-preview-insert .input-field .prefix~.helper-text,#bx-preview-insert .input-field .prefix~.autocomplete-content{margin-left:3rem;width:92%;width:calc(100% - 3rem)}#bx-preview-insert .input-field .prefix~label{margin-left:3rem}@media only screen and (max-width : 992px){#bx-preview-insert .input-field .prefix~input{width:86%;width:calc(100% - 3rem)}}@media only screen and (max-width : 600px){#bx-preview-insert .input-field .prefix~input{width:80%;width:calc(100% - 3rem)}}#bx-preview-insert .input-field input[type=search]{display:block;line-height:inherit;transition:.3s background-color}.nav-wrapper #bx-preview-insert .input-field input[type=search]{height:inherit;padding-left:4rem;width:calc(100% - 4rem);border:0;box-shadow:none}#bx-preview-insert .input-field input[type=search]:focus:not(.browser-default){background-color:#fff;border:0;box-shadow:none;color:#444}#bx-preview-insert .input-field input[type=search]:focus:not(.browser-default)+label i,#bx-preview-insert .input-field input[type=search]:focus:not(.browser-default)~.mdi-navigation-close,#bx-preview-insert .input-field input[type=search]:focus:not(.browser-default)~.material-icons{color:#444}#bx-preview-insert .input-field input[type=search]+.label-icon{transform:none;left:1rem}#bx-preview-insert .input-field input[type=search]~.mdi-navigation-close,#bx-preview-insert .input-field input[type=search]~.material-icons{position:absolute;top:0;right:1rem;color:transparent;cursor:pointer;font-size:2rem;transition:.3s color}#bx-preview-insert textarea{width:100%;height:3rem;background-color:transparent}#bx-preview-insert textarea.materialize-textarea{line-height:normal;overflow-y:hidden;padding:.8rem 0 .8rem 0;resize:none;min-height:3rem;box-sizing:border-box}#bx-preview-insert .hiddendiv{visibility:hidden;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word;padding-top:1.2rem;position:absolute;top:0;z-index:-1}#bx-preview-insert .autocomplete-content li .highlight{color:#444}#bx-preview-insert .autocomplete-content li img{height:40px;width:40px;margin:5px 15px}#bx-preview-insert .character-counter{min-height:18px}#bx-preview-insert [type=radio]:not(:checked),#bx-preview-insert [type=radio]:checked{position:absolute;opacity:0;pointer-events:none}#bx-preview-insert [type=radio]:not(:checked)+span,#bx-preview-insert [type=radio]:checked+span{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;transition:.28s ease;user-select:none}#bx-preview-insert [type=radio]+span:before,#bx-preview-insert [type=radio]+span:after{content:"";position:absolute;left:0;top:0;margin:4px;width:16px;height:16px;z-index:0;transition:.28s ease}#bx-preview-insert [type=radio]:not(:checked)+span:before,#bx-preview-insert [type=radio]:not(:checked)+span:after,#bx-preview-insert [type=radio]:checked+span:before,#bx-preview-insert [type=radio]:checked+span:after,#bx-preview-insert [type=radio].with-gap:checked+span:before,#bx-preview-insert [type=radio].with-gap:checked+span:after{border-radius:50%}#bx-preview-insert [type=radio]:not(:checked)+span:before,#bx-preview-insert [type=radio]:not(:checked)+span:after{border:2px solid #5a5a5a}#bx-preview-insert [type=radio]:not(:checked)+span:after{transform:scale(0)}#bx-preview-insert [type=radio]:checked+span:before{border:2px solid transparent}#bx-preview-insert [type=radio]:checked+span:after,#bx-preview-insert [type=radio].with-gap:checked+span:before,#bx-preview-insert [type=radio].with-gap:checked+span:after{border:2px solid #26a69a}#bx-preview-insert [type=radio]:checked+span:after,#bx-preview-insert [type=radio].with-gap:checked+span:after{background-color:#26a69a}#bx-preview-insert [type=radio]:checked+span:after{transform:scale(1.02)}#bx-preview-insert [type=radio].with-gap:checked+span:after{transform:scale(0.5)}#bx-preview-insert [type=radio].tabbed:focus+span:before{box-shadow:0 0 0 10px rgba(0,0,0,.1)}#bx-preview-insert [type=radio].with-gap:disabled:checked+span:before{border:2px solid rgba(0,0,0,.42)}#bx-preview-insert [type=radio].with-gap:disabled:checked+span:after{border:none;background-color:rgba(0,0,0,.42)}#bx-preview-insert [type=radio]:disabled:not(:checked)+span:before,#bx-preview-insert [type=radio]:disabled:checked+span:before{background-color:transparent;border-color:rgba(0,0,0,.42)}#bx-preview-insert [type=radio]:disabled+span{color:rgba(0,0,0,.42)}#bx-preview-insert [type=radio]:disabled:not(:checked)+span:before{border-color:rgba(0,0,0,.42)}#bx-preview-insert [type=radio]:disabled:checked+span:after{background-color:rgba(0,0,0,.42);border-color:#949494}#bx-preview-insert [type=checkbox]:not(:checked),#bx-preview-insert [type=checkbox]:checked{position:absolute;opacity:0;pointer-events:none}#bx-preview-insert [type=checkbox]+span:not(.lever){position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:25px;line-height:25px;font-size:1rem;user-select:none}#bx-preview-insert [type=checkbox]+span:not(.lever):before,#bx-preview-insert [type=checkbox]:not(.filled-in)+span:not(.lever):after{content:"";position:absolute;top:0;left:0;width:18px;height:18px;z-index:0;border:2px solid #5a5a5a;border-radius:1px;margin-top:3px;transition:.2s}#bx-preview-insert [type=checkbox]:not(.filled-in)+span:not(.lever):after{border:0;transform:scale(0)}#bx-preview-insert [type=checkbox]:not(:checked):disabled+span:not(.lever):before{border:none;background-color:rgba(0,0,0,.42)}#bx-preview-insert [type=checkbox].tabbed:focus+span:not(.lever):after{transform:scale(1);border:0;border-radius:50%;box-shadow:0 0 0 10px rgba(0,0,0,.1);background-color:rgba(0,0,0,.1)}#bx-preview-insert [type=checkbox]:checked+span:not(.lever):before{top:-4px;left:-5px;width:12px;height:22px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #26a69a;border-bottom:2px solid #26a69a;transform:rotate(40deg);backface-visibility:hidden;transform-origin:100% 100%}#bx-preview-insert [type=checkbox]:checked:disabled+span:before{border-right:2px solid rgba(0,0,0,.42);border-bottom:2px solid rgba(0,0,0,.42)}#bx-preview-insert [type=checkbox]:indeterminate+span:not(.lever):before{top:-11px;left:-12px;width:10px;height:22px;border-top:none;border-left:none;border-right:2px solid #26a69a;border-bottom:none;transform:rotate(90deg);backface-visibility:hidden;transform-origin:100% 100%}#bx-preview-insert [type=checkbox]:indeterminate:disabled+span:not(.lever):before{border-right:2px solid rgba(0,0,0,.42);background-color:transparent}#bx-preview-insert [type=checkbox].filled-in+span:not(.lever):after{border-radius:2px}#bx-preview-insert [type=checkbox].filled-in+span:not(.lever):before,#bx-preview-insert [type=checkbox].filled-in+span:not(.lever):after{content:"";left:0;position:absolute;transition:border .25s,background-color .25s,width .2s .1s,height .2s .1s,top .2s .1s,left .2s .1s;z-index:1}#bx-preview-insert [type=checkbox].filled-in:not(:checked)+span:not(.lever):before{width:0;height:0;border:3px solid transparent;left:6px;top:10px;transform:rotateZ(37deg);transform-origin:100% 100%}#bx-preview-insert [type=checkbox].filled-in:not(:checked)+span:not(.lever):after{height:20px;width:20px;background-color:transparent;border:2px solid #5a5a5a;top:0px;z-index:0}#bx-preview-insert [type=checkbox].filled-in:checked+span:not(.lever):before{top:0;left:1px;width:8px;height:13px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #fff;border-bottom:2px solid #fff;transform:rotateZ(37deg);transform-origin:100% 100%}#bx-preview-insert [type=checkbox].filled-in:checked+span:not(.lever):after{top:0;width:20px;height:20px;border:2px solid #26a69a;background-color:#26a69a;z-index:0}#bx-preview-insert [type=checkbox].filled-in.tabbed:focus+span:not(.lever):after{border-radius:2px;border-color:#5a5a5a;background-color:rgba(0,0,0,.1)}#bx-preview-insert [type=checkbox].filled-in.tabbed:checked:focus+span:not(.lever):after{border-radius:2px;background-color:#26a69a;border-color:#26a69a}#bx-preview-insert [type=checkbox].filled-in:disabled:not(:checked)+span:not(.lever):before{background-color:transparent;border:2px solid transparent}#bx-preview-insert [type=checkbox].filled-in:disabled:not(:checked)+span:not(.lever):after{border-color:transparent;background-color:#949494}#bx-preview-insert [type=checkbox].filled-in:disabled:checked+span:not(.lever):before{background-color:transparent}#bx-preview-insert [type=checkbox].filled-in:disabled:checked+span:not(.lever):after{background-color:#949494;border-color:#949494}#bx-preview-insert .switch,#bx-preview-insert .switch *{-webkit-tap-highlight-color:transparent;user-select:none}#bx-preview-insert .switch label{cursor:pointer}#bx-preview-insert .switch label input[type=checkbox]{opacity:0;width:0;height:0}#bx-preview-insert .switch label input[type=checkbox]:checked+.lever{background-color:#84c7c1}#bx-preview-insert .switch label input[type=checkbox]:checked+.lever:before,#bx-preview-insert .switch label input[type=checkbox]:checked+.lever:after{left:18px}#bx-preview-insert .switch label input[type=checkbox]:checked+.lever:after{background-color:#26a69a}#bx-preview-insert .switch label .lever{content:"";display:inline-block;position:relative;width:36px;height:14px;background-color:rgba(0,0,0,.38);border-radius:15px;margin-right:10px;transition:background .3s ease;vertical-align:middle;margin:0 16px}#bx-preview-insert .switch label .lever:before,#bx-preview-insert .switch label .lever:after{content:"";position:absolute;display:inline-block;width:20px;height:20px;border-radius:50%;left:0;top:-3px;transition:left .3s ease,background .3s ease,box-shadow .1s ease,transform .1s ease}#bx-preview-insert .switch label .lever:before{background-color:rgba(38,166,154,.15)}#bx-preview-insert .switch label .lever:after{background-color:#f1f1f1;box-shadow:0px 3px 1px -2px rgba(0,0,0,.2),0px 2px 2px 0px rgba(0,0,0,.14),0px 1px 5px 0px rgba(0,0,0,.12)}#bx-preview-insert input[type=checkbox]:checked:not(:disabled)~.lever:active::before,#bx-preview-insert input[type=checkbox]:checked:not(:disabled).tabbed:focus~.lever::before{transform:scale(2.4);background-color:rgba(38,166,154,.15)}#bx-preview-insert input[type=checkbox]:not(:disabled)~.lever:active:before,#bx-preview-insert input[type=checkbox]:not(:disabled).tabbed:focus~.lever::before{transform:scale(2.4);background-color:rgba(0,0,0,.08)}#bx-preview-insert .switch input[type=checkbox][disabled]+.lever{cursor:default;background-color:rgba(0,0,0,.12)}#bx-preview-insert .switch label input[type=checkbox][disabled]+.lever:after,#bx-preview-insert .switch label input[type=checkbox][disabled]:checked+.lever:after{background-color:#949494}#bx-preview-insert select{display:none}#bx-preview-insert select.browser-default{display:block}#bx-preview-insert select{background-color:rgba(255,255,255,.9);width:100%;padding:5px;border:1px solid #f2f2f2;border-radius:2px;height:3rem}#bx-preview-insert .select-label{position:absolute}#bx-preview-insert .select-wrapper{position:relative}#bx-preview-insert .select-wrapper.valid+label,#bx-preview-insert .select-wrapper.invalid+label{width:100%;pointer-events:none}#bx-preview-insert .select-wrapper input.select-dropdown{position:relative;cursor:pointer;background-color:transparent;border:none;border-bottom:1px solid #9e9e9e;outline:none;height:3rem;line-height:3rem;width:100%;font-size:16px;margin:0 0 8px 0;padding:0;display:block;user-select:none;z-index:1}#bx-preview-insert .select-wrapper input.select-dropdown:focus{border-bottom:1px solid #26a69a}#bx-preview-insert .select-wrapper .caret{position:absolute;right:0;top:0;bottom:0;margin:auto 0;z-index:0;fill:rgba(0,0,0,.87)}#bx-preview-insert .select-wrapper+label{position:absolute;top:-26px;font-size:.8rem}#bx-preview-insert select:disabled{color:rgba(0,0,0,.42)}#bx-preview-insert .select-wrapper.disabled+label{color:rgba(0,0,0,.42)}#bx-preview-insert .select-wrapper.disabled .caret{fill:rgba(0,0,0,.42)}#bx-preview-insert .select-wrapper input.select-dropdown:disabled{color:rgba(0,0,0,.42);cursor:default;user-select:none}#bx-preview-insert .select-wrapper i{color:rgba(0,0,0,.3)}#bx-preview-insert .select-dropdown li.disabled,#bx-preview-insert .select-dropdown li.disabled>span,#bx-preview-insert .select-dropdown li.optgroup{color:rgba(0,0,0,.3);background-color:transparent}#bx-preview-insert body.keyboard-focused .select-dropdown.dropdown-content li:focus{background-color:rgba(0,0,0,.08)}#bx-preview-insert .select-dropdown.dropdown-content li:hover{background-color:rgba(0,0,0,.08)}#bx-preview-insert .select-dropdown.dropdown-content li.selected{background-color:rgba(0,0,0,.03)}#bx-preview-insert .prefix~.select-wrapper{margin-left:3rem;width:92%;width:calc(100% - 3rem)}#bx-preview-insert .prefix~label{margin-left:3rem}#bx-preview-insert .select-dropdown li img{height:40px;width:40px;margin:5px 15px;float:right}#bx-preview-insert .select-dropdown li.optgroup{border-top:1px solid #eee}#bx-preview-insert .select-dropdown li.optgroup.selected>span{color:rgba(0,0,0,.7)}#bx-preview-insert .select-dropdown li.optgroup>span{color:rgba(0,0,0,.4)}#bx-preview-insert .select-dropdown li.optgroup~li.optgroup-option{padding-left:1rem}#bx-preview-insert .file-field{position:relative}#bx-preview-insert .file-field .file-path-wrapper{overflow:hidden;padding-left:10px}#bx-preview-insert .file-field input.file-path{width:100%}#bx-preview-insert .file-field .btn,#bx-preview-insert .file-field .btn-large,#bx-preview-insert .file-field .btn-small{float:left;height:3rem;line-height:3rem}#bx-preview-insert .file-field span{cursor:pointer}#bx-preview-insert .file-field input[type=file]{position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:0;padding:0;font-size:20px;cursor:pointer;opacity:0;filter:alpha(opacity=0)}#bx-preview-insert .file-field input[type=file]::-webkit-file-upload-button{display:none}#bx-preview-insert .range-field{position:relative}#bx-preview-insert input[type=range],#bx-preview-insert input[type=range]+.thumb{cursor:pointer}#bx-preview-insert input[type=range]{position:relative;background-color:transparent;border:none;outline:none;width:100%;margin:15px 0;padding:0}#bx-preview-insert input[type=range]:focus{outline:none}#bx-preview-insert input[type=range]+.thumb{position:absolute;top:10px;left:0;border:none;height:0;width:0;border-radius:50%;background-color:#26a69a;margin-left:7px;transform-origin:50% 50%;transform:rotate(-45deg)}#bx-preview-insert input[type=range]+.thumb .value{display:block;width:30px;text-align:center;color:#26a69a;font-size:0;transform:rotate(45deg)}#bx-preview-insert input[type=range]+.thumb.active{border-radius:50% 50% 50% 0}#bx-preview-insert input[type=range]+.thumb.active .value{color:#fff;margin-left:-1px;margin-top:8px;font-size:10px}#bx-preview-insert input[type=range]{-webkit-appearance:none}#bx-preview-insert input[type=range]::-webkit-slider-runnable-track{height:3px;background:#c2c0c2;border:none}#bx-preview-insert input[type=range]::-webkit-slider-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;transition:box-shadow .3s;-webkit-appearance:none;background-color:#26a69a;transform-origin:50% 50%;margin:-5px 0 0 0}#bx-preview-insert .keyboard-focused input[type=range]:focus:not(.active)::-webkit-slider-thumb{box-shadow:0 0 0 10px rgba(38,166,154,.26)}#bx-preview-insert input[type=range]{border:1px solid #fff}#bx-preview-insert input[type=range]::-moz-range-track{height:3px;background:#c2c0c2;border:none}#bx-preview-insert input[type=range]::-moz-focus-inner{border:0}#bx-preview-insert input[type=range]::-moz-range-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;transition:box-shadow .3s;margin-top:-5px}#bx-preview-insert input[type=range]:-moz-focusring{outline:1px solid #fff;outline-offset:-1px}#bx-preview-insert .keyboard-focused input[type=range]:focus:not(.active)::-moz-range-thumb{box-shadow:0 0 0 10px rgba(38,166,154,.26)}#bx-preview-insert input[type=range]::-ms-track{height:3px;background:transparent;border-color:transparent;border-width:6px 0;color:transparent}#bx-preview-insert input[type=range]::-ms-fill-lower{background:#777}#bx-preview-insert input[type=range]::-ms-fill-upper{background:#ddd}#bx-preview-insert input[type=range]::-ms-thumb{border:none;height:14px;width:14px;border-radius:50%;background:#26a69a;transition:box-shadow .3s}#bx-preview-insert .keyboard-focused input[type=range]:focus:not(.active)::-ms-thumb{box-shadow:0 0 0 10px rgba(38,166,154,.26)}#bx-preview-insert .sidenav{position:fixed;width:300px;left:0;top:0;margin:0;transform:translateX(-100%);height:100%;height:calc(100% + 60px);height:-moz-calc(100%);padding-bottom:60px;background-color:#fff;z-index:999;overflow-y:auto;will-change:transform;backface-visibility:hidden;transform:translateX(-105%)}#bx-preview-insert .sidenav.right-aligned{right:0;transform:translateX(105%);left:auto;transform:translateX(100%)}#bx-preview-insert .sidenav .collapsible{margin:0}#bx-preview-insert .sidenav li{float:none;line-height:48px}#bx-preview-insert .sidenav li.active{background-color:rgba(0,0,0,.05)}#bx-preview-insert .sidenav li>a{color:rgba(0,0,0,.87);display:block;font-size:14px;font-weight:500;height:48px;line-height:48px;padding:0 32px}#bx-preview-insert .sidenav li>a:hover{background-color:rgba(0,0,0,.05)}#bx-preview-insert .sidenav li>a.btn,#bx-preview-insert .sidenav li>a.btn-small,#bx-preview-insert .sidenav li>a.btn-large,#bx-preview-insert .sidenav li>a.btn-flat,#bx-preview-insert .sidenav li>a.btn-floating{margin:10px 15px}#bx-preview-insert .sidenav li>a.btn,#bx-preview-insert .sidenav li>a.btn-small,#bx-preview-insert .sidenav li>a.btn-large,#bx-preview-insert .sidenav li>a.btn-floating{color:#fff}#bx-preview-insert .sidenav li>a.btn-flat{color:#343434}#bx-preview-insert .sidenav li>a.btn:hover,#bx-preview-insert .sidenav li>a.btn-small:hover,#bx-preview-insert .sidenav li>a.btn-large:hover{background-color:#2bbbad}#bx-preview-insert .sidenav li>a.btn-floating:hover{background-color:#26a69a}#bx-preview-insert .sidenav li>a>i,#bx-preview-insert .sidenav li>a>[class^=mdi-],#bx-preview-insert .sidenav li>a li>a>[class*=mdi-],#bx-preview-insert .sidenav li>a>i.material-icons{float:left;height:48px;line-height:48px;margin:0 32px 0 0;width:24px;color:rgba(0,0,0,.54)}#bx-preview-insert .sidenav .divider{margin:8px 0 0 0}#bx-preview-insert .sidenav .subheader{cursor:initial;pointer-events:none;color:rgba(0,0,0,.54);font-size:14px;font-weight:500;line-height:48px}#bx-preview-insert .sidenav .subheader:hover{background-color:transparent}#bx-preview-insert .sidenav .user-view{position:relative;padding:32px 32px 0;margin-bottom:8px}#bx-preview-insert .sidenav .user-view>a{height:auto;padding:0}#bx-preview-insert .sidenav .user-view>a:hover{background-color:transparent}#bx-preview-insert .sidenav .user-view .background{overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1}#bx-preview-insert .sidenav .user-view .circle,#bx-preview-insert .sidenav .user-view .name,#bx-preview-insert .sidenav .user-view .email{display:block}#bx-preview-insert .sidenav .user-view .circle{height:64px;width:64px}#bx-preview-insert .sidenav .user-view .name,#bx-preview-insert .sidenav .user-view .email{font-size:14px;line-height:24px}#bx-preview-insert .sidenav .user-view .name{margin-top:16px;font-weight:500}#bx-preview-insert .sidenav .user-view .email{padding-bottom:16px;font-weight:400}#bx-preview-insert .drag-target{height:100%;width:10px;position:fixed;top:0;z-index:998}#bx-preview-insert .drag-target.right-aligned{right:0}#bx-preview-insert .sidenav.sidenav-fixed{left:0;transform:translateX(0);position:fixed}#bx-preview-insert .sidenav.sidenav-fixed.right-aligned{right:0;left:auto}@media only screen and (max-width : 992px){#bx-preview-insert .sidenav.sidenav-fixed{transform:translateX(-105%)}#bx-preview-insert .sidenav.sidenav-fixed.right-aligned{transform:translateX(105%)}#bx-preview-insert .sidenav>a{padding:0 16px}#bx-preview-insert .sidenav .user-view{padding:16px 16px 0}}#bx-preview-insert .sidenav .collapsible-body>ul:not(.collapsible)>li.active,#bx-preview-insert .sidenav.sidenav-fixed .collapsible-body>ul:not(.collapsible)>li.active{background-color:#ee6e73}#bx-preview-insert .sidenav .collapsible-body>ul:not(.collapsible)>li.active a,#bx-preview-insert .sidenav.sidenav-fixed .collapsible-body>ul:not(.collapsible)>li.active a{color:#fff}#bx-preview-insert .sidenav .collapsible-body{padding:0}#bx-preview-insert .sidenav-overlay{position:fixed;top:0;left:0;right:0;opacity:0;height:120vh;background-color:rgba(0,0,0,.5);z-index:997;display:none}#bx-preview-insert .pulse{overflow:visible;position:relative}#bx-preview-insert .pulse::before{content:"";display:block;position:absolute;width:100%;height:100%;top:0;left:0;background-color:inherit;border-radius:inherit;transition:opacity .3s,transform .3s;animation:pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;z-index:-1}
   `;

    var styleId = 'style-bx-preview-material';
    var existingStyleTag = document.getElementById(styleId);
    if (existingStyleTag) {
        document.getElementById(styleId).innerHTML = materialCss;
    } else {
        var styleNode = document.createElement('style');
        styleNode.setAttribute("id", styleId);
        styleNode.innerHTML = materialCss;
        document.head.appendChild(styleNode);
    }

})();

(function () {


    function init() {
        function sendEvent(eventName) {
            var url = `https://api.boxever.com/v1.2/event/create.json?client_key=pqsWXjI3lw12v5a9rrHPW1c4hET73GxQ&boxever_version=eefc95721c5eb49559869b2c95d65fb8&message=`;
            var message = `{"type":"${eventName}","channel":"WEB","language":"EN","currency":"EUR","page":"${unsafeWindow.location.pathname}","pos":"spinair.com","utm_medium":"","utm_source":"","utm_campaign":"","browser_id":"${unsafeWindow.Boxever.storage.getItem('bid_pqsWXjI3lw12v5a9rrHPW1c4hET73GxQ')}"}`;
            unsafeWindow.Boxever.get(url + encodeURIComponent(message), function (data) { });
        }

        const bxEndpoint = 'https://api.boxever.com';
        let bxQATool = sessionStorage.getItem('bxQATool');
        let flowRef = sessionStorage.getItem('bxFlowRef');
        let variantRef = sessionStorage.getItem('bxVariantRef');
        let guestRef = sessionStorage.getItem('bxGuestRef');
        let guestName = sessionStorage.getItem('bxGuestName');
        Boxever.webFlowDebug = unsafeWindow.Boxever.webFlowDebug || {};

        if (getUrlParameter('bxQATool')) {
            bxQATool = getUrlParameter('bxQATool');
            sessionStorage.setItem('bxQATool', getUrlParameter('bxQATool'));
        }
        if (getUrlParameter('bxFlowRef')) {
            flowRef = getUrlParameter('bxFlowRef');
            sessionStorage.setItem('bxFlowRef', getUrlParameter('bxFlowRef'));
        }
        if (getUrlParameter('bxVariantRef')) {
            variantRef = getUrlParameter('bxVariantRef');
            sessionStorage.setItem('bxVariantRef', getUrlParameter('bxVariantRef'));
        }
        if (location.href.indexOf('bxGuestRef') !== -1) {
            let guestRefUrlParam = getUrlParameter('bxGuestRef');
            if (guestRefUrlParam) {
                sessionStorage.removeItem('bxBID');
                sessionStorage.setItem('bxGuestRef', getUrlParameter('bxGuestRef'));
            } else {
                sessionStorage.removeItem('bxGuestRef');
                sessionStorage.setItem('bxBID', unsafeWindow.Boxever.storage.getItem('bid_pqsWXjI3lw12v5a9rrHPW1c4hET73GxQ'));
            }
        } else if (!guestRef) {
            sessionStorage.setItem('bxBID', unsafeWindow.Boxever.storage.getItem('bid_pqsWXjI3lw12v5a9rrHPW1c4hET73GxQ'));
        }

        if (location.href.indexOf('bxGuestName') !== -1) {
            let guestNameUrlParam = getUrlParameter('bxGuestName');
            if (guestNameUrlParam) {
                sessionStorage.setItem('bxGuestName', getUrlParameter('bxGuestName'));
            } else {
                sessionStorage.removeItem('bxGuestName', getUrlParameter('bxGuestName'));
            }
        }

        if (bxQATool) {
            var url = window.location.href;
            url = url.split('?')[0];
            if (window.location.href !== url) {
                window.location.href = url;
            }
            setAndRunPreviewExperience(flowRef, variantRef);
        }

        function callFlow(url) {
            let context = {
                channel: 'WEB',
                language: 'en',
                currencyCode: 'EUR',
                pointOfSale: 'spinair.com',
                browserId: unsafeWindow.Boxever.storage.getItem('bid_pqsWXjI3lw12v5a9rrHPW1c4hET73GxQ'),
                clientKey: 'pqsWXjI3lw12v5a9rrHPW1c4hET73GxQ',
                uri: 'test',
                region: 'test'
            };
            if (guestRef) {
                context.guestRef = guestRef;
            }
            return fetch(url, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    context: context
                })
            })
        }

        function setAndRunPreviewExperience(previewFlowRef, previewVariantRef, ignoreInfoBar) {
            const infoUrl = bxEndpoint + '/v2/flowInfo/' + previewFlowRef + '/variants/' + previewVariantRef + '?test=true';
            fetch(infoUrl, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ clientKey: 'pqsWXjI3lw12v5a9rrHPW1c4hET73GxQ' })
            }).then(function (response) {
                response.json().then(function (flow) {
                    if (flow.code < 200 || flow.code > 299) {
                        Boxever.webFlowDebug.stageError = 1;
                        Boxever.webFlowDebug.errorMessage = flow.message;
                        setInfoBar(Boxever.webFlowDebug);
                    } else {
                        const selectedVariant = flow.variants.filter(variant => variant.ref === previewVariantRef)[0];
                        previewRunCondition(flow, selectedVariant, ignoreInfoBar);
                    }
                });
            });
        }

        function previewRunCondition(flow, selectedVariant, ignoreInfoBar) {
            function onPopState() {
                Boxever.webFlowDebug.stageError = Boxever.webFlowDebug.debugMessage = Boxever.webFlowDebug.errorMessage = '';
                var flowAndSelectedVariantObj = Object.assign(flow, { selectedVariant });
                flowAndSelectedVariantObj.stageError = flowAndSelectedVariantObj.debugMessage = flowAndSelectedVariantObj.errorMessage = '';
                console.log('POP STATE CHANGED');
                if (!selectedVariant) {
                    Boxever.webFlowDebug.errorMessage = `The supplied variant reference wasn't found on this flow.`;
                } else {
                    function triggerVariant() {
                        if (flow.ref && selectedVariant.ref) {
                            // Make second api call here to get latest freemarker result
                            callFlow(bxEndpoint + '/v2/callFlows/' + flow.ref + '/variants/' + selectedVariant.ref + '?test=true').then(function (res) {
                                res.json().then(function (data) {
                                    console.log('call flows', data);
                                    if ((data.code < 200 || data.code > 299) ||
                                        ['FLOW_VARIANT_NOT_FOUND', 'AUDIENCE_FILTER_CODE_NOT_PASSED', 'AUDIENCE_SEGMENT_NOT_MATCHED', 'FLOW_CURRENTLY_NOT_SCHEDULED'].indexOf(data.category) !== -1) {
                                        if (data.category.indexOf('AUDIENCE_FILTER') !== -1) {
                                            Boxever.webFlowDebug.stageError = 3;
                                        } else {
                                            Boxever.webFlowDebug.stageError = 4;
                                        }
                                        if (data.category === 'AUDIENCE_SEGMENT_NOT_MATCHED') {
                                            Boxever.webFlowDebug.errorMessage = 'The guest is not in the segment';
                                        } else if (data.category === 'AUDIENCE_FILTER_CODE_NOT_PASSED') {
                                            Boxever.webFlowDebug.errorMessage = 'The custom audience code does not return truthy for this guest';
                                        } else if (data.category === 'AUDIENCE_FILTER_CODE_ERROR') {
                                            Boxever.webFlowDebug.errorMessage = 'The custom audience code is invalid and cannot execute';
                                        } else if (data.category === 'DECISION_MODEL_FAILED') {
                                            Boxever.webFlowDebug.errorMessage = 'The decision model did not execute successfully';
                                        } else if (data.category === 'API_RESPONSE_TRANSFORM_ERROR') {
                                            Boxever.webFlowDebug.errorMessage = 'The templating code in the API designer is invalid';
                                        } else if (data.category === 'API_RESPONSE_RETURN_ERROR') {
                                            Boxever.webFlowDebug.errorMessage = 'The API does not return valid JSON';
                                        } else {
                                            Boxever.webFlowDebug.errorMessage = data.message;
                                        }
                                        Boxever.webFlowDebug.debugMessage = data.developerMessage;
                                        const infoBarObj = Object.assign(flow, Boxever.webFlowDebug);
                                        setInfoBar(infoBarObj);
                                    } else {
                                        const assets = ['html', 'css', 'js'];
                                        for (let property in selectedVariant.assets) {
                                            if (assets.includes(property) && selectedVariant.assets.hasOwnProperty(property)) {
                                                selectedVariant.assets[property] = Mustache.render(selectedVariant.assets[property], data);
                                            }
                                        }
                                        const infoBarObj = Object.assign(flowAndSelectedVariantObj, { context: data });
                                        if (ignoreInfoBar !== true) {
                                            setInfoBar(infoBarObj);
                                        }
                                        bxRenderLocally(Object.assign(selectedVariant, {context: data}));
                                    }
                                });
                            });
                        }
                    }

                    if ((flow.target && flow.target.targetPages.length) || (flow.target && flow.target.script)) {
                        if (flow.target.targetPages.length && flow.target.script) {
                            if (checkTargetPageViewConditions(flow.target.targetPages)) {
                                if (!eval(flow.target.script)) {
                                    Boxever.webFlowDebug.stageError = 2;
                                    Boxever.webFlowDebug.errorMessage = 'The custom targeting code does not return truthy for this page/browser/etc';
                                    const infoBarObj = Object.assign(flowAndSelectedVariantObj, Boxever.webFlowDebug);
                                    setInfoBar(infoBarObj);
                                }
                            } else {
                                Boxever.webFlowDebug.stageError = 2;
                                Boxever.webFlowDebug.errorMessage = 'The target pages are not valid for this page';
                                const infoBarObj = Object.assign(flowAndSelectedVariantObj, Boxever.webFlowDebug);
                                setInfoBar(infoBarObj);
                            }
                        } else if (flow.target.targetPages.length && !flow.target.script) {
                            if (checkTargetPageViewConditions(flow.target.targetPages)) {
                                triggerVariant();
                            } else {
                                Boxever.webFlowDebug.stageError = 2;
                                Boxever.webFlowDebug.errorMessage = 'The target pages are not valid for this page';
                                const infoBarObj = Object.assign(flowAndSelectedVariantObj, Boxever.webFlowDebug);
                                setInfoBar(infoBarObj);
                            }
                        } else if (!flow.target.targetPages.length && flow.target.script) {
                            if (!eval(flow.target.script)) {
                                Boxever.webFlowDebug.stageError = 2;
                                Boxever.webFlowDebug.errorMessage = 'The custom targeting code does not return truthy for this page/browser/etc';
                                const infoBarObj = Object.assign(flowAndSelectedVariantObj, Boxever.webFlowDebug);
                                setInfoBar(infoBarObj);
                            }
                        } else {
                            console.log("fall through targeting");
                            triggerVariant();
                        }
                    } else {
                        // Boxever.webFlowDebug[selectedVariant] = { noPageTargetingConditions: true, pageTargeting: true };
                        triggerVariant();
                    }


                }
            }
            // To be updated without overwriting existing onpop state
            window.onpopstate = onPopState;
            onPopState();
        }

        function bxRenderLocally(result) {
            var styleId = 'style-' + result.ref;
            var existingStyleTag = document.getElementById(styleId);
            if (existingStyleTag) {
                document.getElementById(styleId).innerHTML = result.assets.css;
            } else {
                var styleNode = document.createElement('style');
                styleNode.setAttribute("id", styleId);
                styleNode.innerHTML = result.assets.css;
                document.body.appendChild(styleNode);
            }
            var htmlId = 'div-' + result.ref;
            var existingHtmlTag = document.getElementById(htmlId);
            if (existingHtmlTag) {
                document.getElementById(htmlId).innerHTML = result.assets.html;
            } else {
                var htmlNode = document.createElement('div');
                htmlNode.setAttribute("id", "div-" + result.ref);
                htmlNode.innerHTML = result.assets.html;
                document.body.prepend(htmlNode);
            }
            function evalFinalJS() {
                eval(result.assets.js);
            }
            setTimeout(evalFinalJS, 100);
        }

        function checkTargetPageViewConditions(targetPages) {
            if (targetPages && targetPages.length) {
                return targetPages.some(item => {
                    if (item.operator === 'Equals' && window.location.href === item.value) return true;
                    if (item.operator === 'Contains' && window.location.href.indexOf(item.value) !== -1) return true;
                    if (item.operator === 'Starts with' && new RegExp('^' + item.value).test(window.location.href)) return true;
                    if (item.operator === 'Ends with' && new RegExp(item.value + '$').test(window.location.href)) return true;
                    if (item.operator === 'Matches Regex' && new RegExp(item.value).test(window.location.href)) return true;
                    if (item.operator === 'Matches Regex (Ignore Case)' && new RegExp(item.value, 'i').test(window.location.href)) return true;
                    if (item.operator === 'Does not equal' && window.location.href !== item.value) return true;
                    if (item.operator === 'Does not contain' && window.location.href.indexOf(item.value) === -1) return true;
                    if (item.operator === 'Does not start with' && !new RegExp('^' + item.value).test(window.location.href)) return true;
                    if (item.operator === 'Does not end with' && !new RegExp(item.value + '$').test(window.location.href)) return true;
                    if (item.operator === 'Does not match Regex' && !new RegExp(item.value).test(window.location.href)) return true;
                    if (item.operator === 'Does not match Regex (Ignore Case)' && !new RegExp(item.value, 'i').test(window.location.href)) return true;
                })
            } else {
                return true;
            }
        }

        function getUrlParameter(name) {
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            var results = regex.exec(location.href);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        }

        function setInfoBar(result) {
            result = result || {};
            console.log(result);

            var css = `#bxpreview {
                width: 360px;
                z-index: 9999999 !important;
                }
                #bxpreview a {
                color: #41abcb;
                cursor: pointer;
                }
                #bx-preview-insert .row.variant-row {

                }
                #bx-preview-insert .sidenav .top-section {
                    color: #000;
                    padding: 0 12px;
                    margin-top: 20px;
                }
                #bx-preview-insert .sidenav .top-section .flow-title {
                    color: #000;
                    font-size: 18px;
                    font-weight: 500;
                    margin-bottom: 0;
                    margin-top: 0;
                }
                #bx-preview-insert .sidenav .top-section .version {
                    color: #95A5A6;
                    font-size: 12px;
                }
                #bx-preview-insert .sidenav .top-section p {
                    color: #000;
                    margin-bottom: 0;
                }
                #bx-preview-insert .sidenav .top-section .button-group {
                    display: inline-flex;
                    margin-top: 12px;
                }
                #bx-preview-insert .sidenav .top-section .icon-links {
                    float: right;
                    margin-top: 14px;
                }
                #bx-preview-insert .sidenav .top-section .button-group a {
                    border: 1px solid #C1C9D0;
                    padding: 3px 12px 4px;
                }
                #bx-preview-insert .sidenav .top-section .button-group a:first-of-type {
                    border-radius: 4px 0 0 4px;
                    border-right: 0;
                }
                #bx-preview-insert .sidenav .top-section .button-group a:last-of-type {
                    background-color: #f7f7f7;
                    border-radius: 0 4px 4px 0;
                }
                #bx-preview-insert .sidenav .top-section a {
                    color: #000;
                }
                #boxever-preview-frame .stages {
                    padding-top: 10px;
                    text-align: center;
                }
                #boxever-preview-frame .stages > i {
                    cursor: pointer;
                    margin-bottom: 10px;
                }
                #boxever-preview-frame .expand-stages {
                }
                #bx-preview-insert .expand-stages i {
                    vertical-align: middle;
                }
                #bx-preview-insert .expand-stages .stage-section {
                    margin: 3px 0;
                    padding: 6px;
                    background-color: #f7f7f7;
                }
                #bx-preview-insert .expand-stages .stage-section i {
                    color: #ccc;
                    font-size: 16px;
                }
                #boxever-preview-frame .stage {
                    height: 34px;
                    width: 32px;
                    text-align: center;
                    margin-left: 4px;
                    margin-bottom: 6px;
                    background-color: rgba(204, 204, 204, .2);
                }
                #boxever-preview-frame .stage.pass, #bx-preview-insert .expand-stages .stage-section.pass {
                    background-color: rgba(92, 195, 149, .2);
                }
                #boxever-preview-frame .stage i {
                    font-size: 21px;
                    margin-top: 2px;
                    color: #ccc;
                }
                #boxever-preview-frame .stage.pass i, #bx-preview-insert .expand-stages .stage-section.pass i {
                    color: #5CC395;
                }
                #boxever-preview-frame .stage.fail i, #bx-preview-insert .expand-stages .stage-section.fail i {
                    color: #ED9E21;
                }
                #boxever-preview-frame .stage.fail, #bx-preview-insert .expand-stages .stage-section.fail {
                    background-color: rgba(243, 156, 18, .2);
                }
                #bx-preview-insert .expand-stages .stage-section.fail.stage-section-detail {
                    background-color: rgba(243, 156, 18, .1);
                    margin-top: -3px;
                    font-size: 90%;
                    padding: 12px;
                }
                #boxever-preview-frame a {
                    cursor: pointer;
                }
                #bx-preview-insert #bxpreview .row.no-border {
                    border: 0;
                }
                #bx-preview-insert #bxpreview .tabs-wrapper {
                    padding: 0;
                    background-color: #F7F7F7;
                    border-bottom: 1px solid #E6EAEB;
                    border-top: 1px solid #E6EAEB;
                    margin: 20px 0;
                }
                #bx-preview-insert #bxpreview .tabs-wrapper .tab.col {
                    padding: 0;
                }
                #bx-preview-insert #bxpreview #status .col {
                    padding: 0 12px;
                }
                #bxpreview a:focus, #boxever-preview-frame a:focus {
                border: 0;
                box-shadow: none;
                }
                #bxpreview .collapsible-header i {
                    width: auto;
                    font-size: 2.4rem;
                }
                #bxpreview .collapsible-header, #bxpreview .collapsible-body {
                padding: 0 12px !important;
                }
                #boxever-preview-tabs {
                    margin: 0;
                }
                #boxever-preview-tabs .tab a {
                    text-align: center;
                }
                #boxever-preview-tabs .tab a.active {
                    border-bottom: 2px solid #41abcb;
                }
                #bxpreview a i, #bxpreview span i {
                    vertical-align: text-top;
                    margin-top: -8px;
                }
                #bxpreview .collapsible-body {
                line-height: 1.5;
                padding: 12px !important;
                }
                #boxever-preview-logo {
                width: 100%;
                height: 40px;
                display: block;
                background-color: #40495B;
                padding: 6px 7px;
                }
                .boxever-preview-wrapper {
                background: #fff;
                box-shadow: 0 2px 10px 0 rgba(206,206,206,0.5);
                position: fixed;
                left: 0;
                width: 40px;
                height: 100vh;
                border-radius: 0 4px 4px 0;
                z-index: 999999;
                }
                .boxever-preview-wrapper a:hover, #bxpreview a:hover {
                background: transparent;
                }
                .boxever-preview-wrapper-full {
                background: #40495b;
                width: 100%;
                height: 55px;
                padding: 14px 10px 0 10px;
                }
                .bx-preview-icon {
                color: #fff;
                float: right;
                }
                #bxpreview .sub-bar i {
                cursor: pointer;
                }
                #toast-container {
                left: 145px !important;
                bottom: inherit !important;
                margin-top: 15px;
                max-width: none!important;
                right: inherit!important;
                top: inherit!important;
                }
                .toast {
                background: #40495b;
                padding: 12px 18px;
                min-height: 0 !important;
                }
                .bx-panel-left {
                left: 0 !important;
                right: auto !important;
                }
                .bx-panel-right {
                left: auto !important;
                right: 0 !important;
                }
                #bxpreview pre {
                    display: block;
                    padding: 6.5px;
                    margin: 0 0 7px;
                    font-size: 11px;
                    line-height: 1.2;
                    word-break: break-all;
                    word-wrap: break-word;
                    color: #333333;
                    background-color: #f5f5f5;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    white-space: pre-wrap;
                }
                `;

            var styleId = 'style-bx-preview';
            var existingStyleTag = document.getElementById(styleId);
            if (existingStyleTag) {
                document.getElementById(styleId).innerHTML = css;
            } else {
                var styleNode = document.createElement('style');
                styleNode.setAttribute("id", styleId);
                styleNode.innerHTML = css;
                document.body.appendChild(styleNode);
            }

            var html = `<div id="bxpreview" class="sidenav"></div>
                <div id="boxever-preview-frame" class="boxever-preview-wrapper" style="display: none;">
                    <a id="boxever-preview-logo" data-target="bxpreview" class="sidenav-trigger">
                        <img class="boxever-infobar-image" src="https://12srx721o1511t9hhb1yc05f-wpengine.netdna-ssl.com/wp-content/uploads/cropped-boxever-yellow-transparent-favicon-512px-192x192.png" style="height: 25px;width: 25px;"/>
                    </a>
                    <div class="stages">
                        <i class="material-icons sidenav-trigger" data-target="bxpreview">
                        chevron_right</i>
                        <div class="stage stage-1">
                            <i class="material-icons">block</i>
                        </div>
                        <div class="stage stage-2">
                            <i class="material-icons">block</i>
                        </div>
                        <div class="stage stage-3">
                            <i class="material-icons">block</i>
                        </div>
                        <div class="stage stage-4">
                            <i class="material-icons">block</i>
                        </div>
                    </div>
                </div>`;

            var htmlId = 'bx-preview-insert';
            var existingHtmlTag = document.getElementById(htmlId);
            if (existingHtmlTag) {
                document.getElementById(htmlId).innerHTML = html;
            } else {
                var htmlNode = document.createElement('div');
                htmlNode.setAttribute("id", "bx-preview-insert");
                htmlNode.innerHTML = html;
                document.body.prepend(htmlNode);
            }

            var template = `<div class="boxever-preview-wrapper-full">
        <a id="boxever-full-logo" data-target="bxpreview" class="sidenav-close">
        <img class="boxever-infobar-image" src="https://12srx721o1511t9hhb1yc05f-wpengine.netdna-ssl.com/wp-content/uploads/boxever-logotype-white-yellow.svg" style="width:110px;"/>
        <i class="material-icons bx-preview-icon">close</i>
        </a>
    </div>
    <div class="top-section">
        <div class="flow-title">{{name}}{{^name}}Flow Error <a class="right" id="exit-qa-tool"><i class="material-icons" style="vertical-align:bottom;">power_settings_new</i></a>{{/name}}</div>
        {{#revision}}
        <span class="version">Version {{revision}} - viewing as {{#guestRef}} <a target="_blank" rel="noopener" href="https://app.boxever.com/#/guests/show/{{guestRef}}"><b>{{guestName}}{{^guestName}}{{guestRef}}{{/guestName}}</b></a>{{/guestRef}}{{^guestRef}}{{#bxBID}} <a target="_blank" rel="noopener" href="https://app.boxever.com/#/guests/list?offset=0&limit=10&sort=lastSeen::DESC&filter=all&q=bid:{{bxBID}}"><b>current user</b></a>{{/bxBID}}{{/guestRef}}</span>
        <br/>
        <p class="button-group">
            <a>Sandbox</a>
            <a disabled="disabled">Production</a>
        </p>
        <span class="icon-links">
            <a id="bx-share-link"><i class="material-icons">content_copy</i></a>
            <a id="exit-qa-tool"><i class="material-icons">power_settings_new</i></a>
        </span>
        {{/revision}}
    </div>
    <div class="row no-border">
        <div class="col s12 tabs-wrapper">
            <ul id="boxever-preview-tabs" class="tabs">
                <li class="tab col s6"><a class="active" href="#status">Status</a></li>
                <li class="tab col s6"><a href="#api">API</a></li>
            </ul>
        </div>
        <div id="status" class="col s12">
            <div class="row variant-row">
                <b class="col s12">
                    Select Variant
                </b>
                <div class="col s8">
                    <select id="bx-variant-dropdown" style="display:block;">
                        {{#variants}}
                        <option value="{{ref}}" {{#selected}}selected="selected"{{/selected}}>{{name}}</option>
                        {{/variants}}
                    </select>
                </div>
                <div class="col s4">
                    <span class="left" style="margin-top:2px">
                    <a class="triggerVariantFunc" data-ref="{{ref}}"><i class="material-icons">play_arrow</i></a>
                    <a class="reloadVariantFunc" data-ref="{{ref}}"><i class="material-icons">refresh</i></a>
                    </span>
                </div>
            </div>

            <div class="row expand-stages">
                <div class="col s12">
                    <p class="stage-section stage-1"><i class="material-icons">block</i> Flow & variant references</p>
                    <p class="stage-section stage-1 fail stage-section-detail" style="display: none;">{{errorMessage}}</p>
                </div>
                <div class="col s12">
                    <p class="stage-section stage-2"><i class="material-icons">block</i> Page targeting</p>
                    <p class="stage-section stage-2 fail stage-section-detail" style="display: none;">{{errorMessage}}</p>
                </div>
                <div class="col s12">
                    <p class="stage-section stage-3"><i class="material-icons">block</i> Audience</p>
                    <p class="stage-section stage-3 fail stage-section-detail" style="display: none;">{{errorMessage}}</p>
                </div>
                <div class="col s12">
                    <p class="stage-section stage-4"><i class="material-icons">block</i> API response</p>
                    <p class="stage-section stage-4 fail stage-section-detail" style="display: none;">{{errorMessage}}</p>
                </div>
            </div>

            {{#error}}
                <pre class="red-text">{{message}}</pre>
            {{/error}}
        </div>
        <div id="api" class="col s12">
        {{^error}}
            {{#jsonContent}}
                <pre id="bx-jsoneditor">{{{jsonContent}}}</pre>
            {{/jsonContent}}
            {{^jsonContent}}
                <div>{{#debugMessage}}<pre><small>{{debugMessage}}</small></pre>{{/debugMessage}}{{^debugMessage}}No API response to show{{/debugMessage}}</div>
            {{/jsonContent}}
        {{/error}}
        </div>
    </div>
    `;


            if (result.developerMessage || result.message) {
                result.error = { message: result.developerMessage || 'No flow was executed' };
            } else {
                result.fullResponse = JSON.stringify(result, undefined, 2);
                result.jsonContent = JSON.stringify(result.context, undefined, 2);
            }

            if (guestRef) {
                result.guestRef = guestRef;
            }
            if (guestName) {
                result.guestName = guestName;
            }

            if (sessionStorage.getItem('bxBID')) {
                result.bxBID = sessionStorage.getItem('bxBID');
            }

            if (sessionStorage.getItem('bxVariantRef')) {
                var sessionVariant = result.variants.filter(variant => variant.ref === sessionStorage.getItem('bxVariantRef'))[0];
                if (sessionVariant) {
                    sessionVariant.selected = true;
                }
            }

            var htmlToRender = Mustache.render(template, result);
            document.getElementById('bxpreview').innerHTML = htmlToRender;

            var collapse = document.querySelectorAll('#boxever-preview-collapsible');
            var collapseInit = M.Collapsible.init(collapse, {});

            var sidenav = document.getElementById('bxpreview');
            var sidenavOpenBtn = document.getElementById('boxever-preview-frame');
            var sidenavInit = M.Sidenav.init(sidenav, { preventScrolling: false });
            // var sidenavTrigger = document.querySelectorAll('.sidenav-trigger');
            // sidenavTrigger.click();

            var tabs = document.querySelectorAll('#boxever-preview-tabs');
            var tabsInit = M.Tabs.init(tabs, {});

            var tooltips = document.querySelectorAll('.tooltipped');
            for (i = 0; i < tooltips.length; i++) {
                M.Tooltip.init(tooltips[i], {
                    html: 'Move panel'
                });
            }

            var bxVariantSelect = document.querySelector('#bx-variant-dropdown');
            bxVariantSelect.addEventListener('change', function(event) {
                var variantRef = event.target.value;
                var options = document.querySelectorAll('#bx-variant-dropdown option');
                options.forEach(function(option) {
                    option.removeAttribute('selected');
                    if (option.value === variantRef) {
                        option.setAttribute('selected', 'selected');
                        sessionStorage.setItem('bxVariantRef', variantRef);
                    }
                })
            });
            // document.querySelector('#bx-variant-dropdown [selected="selected"').value;

            var variantTriggers = document.querySelectorAll('.triggerVariantFunc');
            for (i = 0; i < variantTriggers.length; i++) {
                variantTriggers[i].onclick = function () {
                    var variantRef = document.querySelector('#bx-variant-dropdown [selected="selected"]').value;
                    setAndRunPreviewExperience(result.ref, variantRef);
                }
            }

            var variantReloads = document.querySelectorAll('.reloadVariantFunc');
            for (i = 0; i < variantReloads.length; i++) {
                variantReloads[i].onclick = function () {
                    var variantRef = document.querySelector('#bx-variant-dropdown [selected="selected"]').value;
                    sessionStorage.setItem('bxVariantRef', variantRef);
                    location.reload(true);
                }
            }

            var shareId = document.getElementById('bx-share-link');
            if (shareId) {
                shareId.onclick = function copyToClipboard() {
                    var el = document.createElement('textarea');
                    el.value = document.location.href;
                    document.body.appendChild(el);
                    el.select();
                    document.execCommand('copy');
                    document.body.removeChild(el);
                    var toastContainer = document.createElement('div');
                    toastContainer.innerHTML = `<div id="toast-container">
                    <div class="toast">Link copied</div>
                    </div>`;
                    document.getElementById('bxpreview').prepend(toastContainer);
                    setTimeout(function () {
                        document.getElementById('toast-container').remove();
                    }, 2000);
                };
            }
            var exitQATool = document.getElementById('exit-qa-tool');
            if (exitQATool) {
                var bxQaCloseButton = document.getElementById('boxever-full-logo');
                bxQaCloseButton.click();
                exitQATool.onclick = function exitbxQaTool() {
                    sessionStorage.removeItem('bxQATool');
                    sessionStorage.removeItem('bxFlowRef');
                    sessionStorage.removeItem('bxVariantRef');
                    sessionStorage.removeItem('bxGuestRef');
                    sessionStorage.removeItem('bxGuestName');
                    window.location.href = location.origin;
                };
            }


            var stage1Closed = document.querySelector('#boxever-preview-frame .stages .stage-1');
            var stage1ClosedIcon = document.querySelector('#boxever-preview-frame .stages .stage-1 i');
            var stage1Expand = document.querySelector('#bxpreview .stage-section.stage-1');
            var stage1ExpandIcon = document.querySelector('#bxpreview .stage-section.stage-1 i');
            var stage1ErrorDetail = document.querySelector('#bxpreview .stage-section.stage-1.fail.stage-section-detail');

            var stage2Closed = document.querySelector('#boxever-preview-frame .stages .stage-2');
            var stage2ClosedIcon = document.querySelector('#boxever-preview-frame .stages .stage-2 i');
            var stage2Expand = document.querySelector('#bxpreview .stage-section.stage-2');
            var stage2ExpandIcon = document.querySelector('#bxpreview .stage-section.stage-2 i');
            var stage2ErrorDetail = document.querySelector('#bxpreview .stage-section.stage-2.fail.stage-section-detail');

            var stage3Closed = document.querySelector('#boxever-preview-frame .stages .stage-3');
            var stage3ClosedIcon = document.querySelector('#boxever-preview-frame .stages .stage-3 i');
            var stage3Expand = document.querySelector('#bxpreview .stage-section.stage-3');
            var stage3ExpandIcon = document.querySelector('#bxpreview .stage-section.stage-3 i');
            var stage3ErrorDetail = document.querySelector('#bxpreview .stage-section.stage-3.fail.stage-section-detail');

            var stage4Closed = document.querySelector('#boxever-preview-frame .stages .stage-4');
            var stage4ClosedIcon = document.querySelector('#boxever-preview-frame .stages .stage-4 i');
            var stage4Expand = document.querySelector('#bxpreview .stage-section.stage-4');
            var stage4ExpandIcon = document.querySelector('#bxpreview .stage-section.stage-4 i');
            var stage4ErrorDetail = document.querySelector('#bxpreview .stage-section.stage-4.fail.stage-section-detail');

            if (result.stageError) {
                if (result.stageError === 1) {
                    stage1Closed.classList.add("fail");
                    stage1Expand.classList.add("fail");
                    stage1ClosedIcon.innerHTML = stage1ExpandIcon.innerHTML = 'warning';
                    stage1ErrorDetail.style.display = "block";
                } else if (result.stageError === 2) {
                    stage1Closed.classList.add("pass");
                    stage1Expand.classList.add("pass");
                    stage1ClosedIcon.innerHTML = stage1ExpandIcon.innerHTML = 'check_circle';

                    stage2Closed.classList.add("fail");
                    stage2Expand.classList.add("fail");
                    stage2ClosedIcon.innerHTML = stage2ExpandIcon.innerHTML = 'warning';
                    stage2ErrorDetail.style.display = "block";
                } else if (result.stageError === 3) {
                    stage1Closed.classList.add("pass");
                    stage1Expand.classList.add("pass");
                    stage1ClosedIcon.innerHTML = stage1ExpandIcon.innerHTML = 'check_circle';
                    stage2Closed.classList.add("pass");
                    stage2Expand.classList.add("pass");
                    stage2ClosedIcon.innerHTML = stage2ExpandIcon.innerHTML = 'check_circle';

                    stage3Closed.classList.add("fail");
                    stage3Expand.classList.add("fail");
                    stage3ClosedIcon.innerHTML = stage3ExpandIcon.innerHTML = 'warning';
                    stage3ErrorDetail.style.display = "block";
                } else if (result.stageError === 4) {
                    stage1Closed.classList.add("pass");
                    stage1Expand.classList.add("pass");
                    stage1ClosedIcon.innerHTML = stage1ExpandIcon.innerHTML = 'check_circle';
                    stage2Closed.classList.add("pass");
                    stage2Expand.classList.add("pass");
                    stage2ClosedIcon.innerHTML = stage2ExpandIcon.innerHTML = 'check_circle';
                    stage3Closed.classList.add("pass");
                    stage3Expand.classList.add("pass");
                    stage3ClosedIcon.innerHTML = stage3ExpandIcon.innerHTML = 'check_circle';

                    stage4Closed.classList.add("fail");
                    stage4Expand.classList.add("fail");
                    stage4ClosedIcon.innerHTML = stage4ExpandIcon.innerHTML = 'warning';
                    stage4ErrorDetail.style.display = "block";
                }
            } else {
                stage1Closed.classList.add("pass");
                stage1Expand.classList.add("pass");
                stage1ClosedIcon.innerHTML = stage1ExpandIcon.innerHTML = 'check_circle';

                stage2Closed.classList.add("pass");
                stage2Expand.classList.add("pass");
                stage2ClosedIcon.innerHTML = stage2ExpandIcon.innerHTML = 'check_circle';

                stage3Closed.classList.add("pass");
                stage3Expand.classList.add("pass");
                stage3ClosedIcon.innerHTML = stage3ExpandIcon.innerHTML = 'check_circle';

                stage4Closed.classList.add("pass");
                stage4Expand.classList.add("pass");
                stage4ClosedIcon.innerHTML = stage4ExpandIcon.innerHTML = 'check_circle';
            }



            console.log('Show QA Tool');
            document.getElementById('boxever-preview-frame').style.display = "block";
        }
    }

    function onBoxeverReady() {
        if (unsafeWindow.Boxever) {
            init();
        } else {
            setTimeout(onBoxeverReady, 250);
        }
    }
    onBoxeverReady();
})();