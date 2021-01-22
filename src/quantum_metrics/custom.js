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