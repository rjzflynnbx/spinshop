var rq = {
    "channel": "WEB",
    "language": "en",
    "currencyCode": "EUR",
    "pointOfSale": "spinbet.com",
    "browserId": Boxever.getID(),
    "clientKey": _boxever_settings.client_key,
    "friendlyId": "sbg_marketing_data_manipulation_1"
};

Boxever.callFlows(rq, function (response) {
    console.log(response);
}, 'json');


// trigger event


var customEvent = {
    browser_id: Boxever.getID(),
    channel: "WEB",
    language: "EN",
    type: "SBG_SOME_CUSTOM_TRIGGER",
    pos: _boxever_settings.pointOfSale
};
Boxever.eventCreate(customEvent, function (data) {}, 'json');