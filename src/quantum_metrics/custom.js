(function () {
    try {
        var eventIDtoActivate = [-5, -2];
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
    } catch (err) { };
})();



//addition --------------------------------------

// add spinnet to QM
let event = new Event("QM", { bubbles: true });
document.dispatchEvent(event);

// listner in Boxever Web Exp
document.addEventListener("QM", function (event) {
    alert("Hello from QM");
});

// web exp ---------------------------------------

Swal.fire({
    title: 'Richard - as a valued SpinShop customer...',
    text: 'We noticed you are having some issues with your promocode - please use promocode "PXYP" for 20% off your entire order',
    confirmButtonText: 'Click to copy promocode',
    confirmButtonColor: '#ff4c3b',
    imageUrl: 'https://www.verdict.co.uk/wp-content/uploads/2018/11/shutterstock_712915198-e1542045457155.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
})

