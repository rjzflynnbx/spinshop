(function () {
    try {
        var eventIDtoActivate = [-5, -2];
        var promoCodeValidationError = 4;
        !!window.QuantumMetricAPI &&
            window.QuantumMetricAPI.addEventListener(eventIDtoActivate, function (event, type) {
                console.log("rage/frustration detected");
                var rageFrustEvent = {
                    channel: "WEB",
                    type: "QM_RAGE_FRUST",
                    page: window.location.pathname,
                    pos: "spinshop.com",
                    browser_id: Boxever.getID(),
                    cartTotal: localStorage.getItem("bxCartTotal")
                }
                window._boxeverq.push(function () {
                    Boxever.eventCreate(rageFrustEvent, function (data) { }, 'json');
                });
            });
        !!window.QuantumMetricAPI &&
            window.QuantumMetricAPI.addEventListener(promoCodeValidationError, function (event, type) {
                console.log("promoCodeValidationError detected");
                let _event = new Event("QM", { bubbles: true });
                document.dispatchEvent(_event);
            });
    } catch (err) { };
})();



//addition --------------------------------------

// add spippet to QM
let event = new Event("QM", { bubbles: true });
document.dispatchEvent(event);

// listner in Boxever Web Exp
document.addEventListener("QM", function (event) {
    alert("Hello from QM");
});

// web exp ---------------------------------------


//wait 10 seconds and check if still invalid promo code


document.addEventListener("QM", function (event) {
    setTimeout(function () {
        if (isInvalidPromoCode()) {
            Swal.fire({
                title: 'Richard - as a valued SpinShop customer...',
                text: 'We noticed you are having some issues with your promocode - please use promocode "PXYP" for 20% off your entire order',
                confirmButtonText: 'Click to copy promocode',
                confirmButtonColor: '#ff4c3b',
                imageUrl: 'https://www.verdict.co.uk/wp-content/uploads/2018/11/shutterstock_712915198-e1542045457155.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            }).then((result) => {
                copyToClipboard("PXYP")
            })
        }
    }, 10000);

    function isInvalidPromoCode() {
        return true;
    }
});

function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}



function main() {
    var dataExtension =
        getDataExtensionWithName(guest, '[[Data Extension Name | enum(smartScores, propensityScores) | smartScores]]');
    //print(dataExtension);
    //print(dataExtension.values.CLV);
    return dataExtension.values.;
}

function getDataExtensionWithName(guest, extensionName) {
    var toReturn = null;
    //print('extensionName: ' + extensionName);
    guest.dataExtensions.forEach(function (dataExtension) {
        //print(dataExtension.name);
        if (dataExtension.name === extensionName) {
            toReturn = dataExtension;
        }
    });
    return toReturn;
}

main();
