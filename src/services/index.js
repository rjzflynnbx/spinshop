var uuid = require('uuid');

export const addToDataLayer = (eventData) => {
    if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push(eventData)
    }
}

// Get Unique Brands from Json Data
export const getBrands = (products) => {
    var uniqueBrands = [];
    products.map((product, index) => {
        if (product.tags) {
            product.tags.map((tag) => {
                if (uniqueBrands.indexOf(tag) === -1) {
                    uniqueBrands.push(tag);
                }
            })
        }
    })
    //console.log(uniqueBrands)
    return uniqueBrands;
}

// Get Unique Colors from Json Data
export const getColors = (products) => {
    var uniqueColors = [];
    products.map((product, index) => {
        if (product.colors) {
            product.colors.map((color) => {
                if (uniqueColors.indexOf(color) === -1) {
                    uniqueColors.push(color);
                }
            })
        }
    })
    //console.log(uniqueBrands)
    return uniqueColors;
}

// Get Minimum and Maximum Prices from Json Data
export const getMinMaxPrice = (products) => {
    let min = 100, max = 1000;

    products.map((product, index) => {
        let v = product.price;
        min = (v < min) ? v : min;
        max = (v > max) ? v : max;
    })

    return { 'min': min, 'max': max };
}

export const getVisibleproducts = (data, { brand, color, value, sortBy, catagory }) => {

    return data.products.filter(product => {

        let catagoryMatch = true;
        if (catagory) {
            if (product.catagories) {
                catagoryMatch = product.catagories.includes(catagory);
            } else {
                catagoryMatch = false;
            }
        }


        let brandMatch;
        if (product.tags) {
            brandMatch = product.tags.some(tag => brand.includes(tag))
        } else {
            brandMatch = true;
        }

        let colorMatch;
        if (color && product.colors) {
            colorMatch = product.colors.includes(color)
        } else {
            colorMatch = true;
        }

        const startPriceMatch = typeof value.min !== 'number' || value.min <= product.price;
        const endPriceMatch = typeof value.max !== 'number' || product.price <= value.max;

        return brandMatch && colorMatch && startPriceMatch && endPriceMatch && catagoryMatch;
    }).sort((product1, product2) => {
        if (sortBy === 'HighToLow') {
            return product2.price < product1.price ? -1 : 1;
        } else if (sortBy === 'LowToHigh') {
            return product2.price > product1.price ? -1 : 1;
        } else if (sortBy === 'Newest') {
            return product2.id < product1.id ? -1 : 1;
        } else if (sortBy === 'AscOrder') {
            return product1.name.localeCompare(product2.name);
        } else if (sortBy === 'DescOrder') {
            return product2.name.localeCompare(product1.name);
        } else {
            return product2.id > product1.id ? -1 : 1;
        }
    });
}

export const getCartTotal = cartItems => {
    var total = 0;
    for (var i = 0; i < cartItems.length; i++) {
        total += parseInt(cartItems[i].qty, 10) * parseInt((cartItems[i].price * cartItems[i].discount / 100), 10);
    }
    return total;
}

// Get Trending Tag wise Collection
export const getTrendingTagCollection = (products, type, tag) => {
    const items = products.filter(product => {
        return product.category === type && product.tags.includes(tag);
    })
    return items.slice(0, 8)
}

// Get Trending Collection
export const getTrendingCollection = (products, type) => {
    const items = products.filter(product => {
        return product.category === type;
    })
    return items.slice(0, 8)
}

// Get Special 5 Collection
export const getSpecialCollection = (products, type) => {
    const items = products.filter(product => {
        return product.category === type;
    })
    return items.slice(0, 5)
}

// Get TOP Collection
export const getTopCollection = products => {
    const items = products.filter(product => {
        return product.rating > 4;
    })
    return items.slice(0, 8)
}

// Get New Products
export const getNewProducts = (products, type) => {
    const items = products.filter(product => {
        return product.new === true && product.category === type;
    })

    return items.slice(0, 8)
}


// Get Related Items
export const getRelatedItems = (products, type) => {
    const items = products.filter(product => {
        return product.category === type;
    })

    return items.slice(0, 4)

}

const NIKE_AF1 = 1;
const ADIDAS_ORIGINALS_WOMENS_ZX_2K_BOOST = 2;
const NIKE_WOMENS_AF1_SHADOW = 602;
const ADIDAS_ORIGINALS_3_STRIPES_TREFOIL_LEGGINGS = 27;
const NIKE_WOMENS_PADDED_JACKET = 30;
const ASICS_WOMENS_NOVABLAST = 23
const ADIDAS_WOMENS_SUPERNOVA_PLUS = 605;

const ADIDAS_KARLIE_KLOSS_HIGHWAIST_LEGGINGS = 603;
const UNDER_ARMOUR_WOMENS_MERIDIAN_LEGGINGS = 604;


const DEFAULT =
    [NIKE_AF1, ADIDAS_ORIGINALS_3_STRIPES_TREFOIL_LEGGINGS, NIKE_WOMENS_PADDED_JACKET,
        ASICS_WOMENS_NOVABLAST, ADIDAS_WOMENS_SUPERNOVA_PLUS, UNDER_ARMOUR_WOMENS_MERIDIAN_LEGGINGS];

const AF1_PERSONALIZED_ITEMS =
    [NIKE_AF1, ADIDAS_ORIGINALS_WOMENS_ZX_2K_BOOST, NIKE_WOMENS_AF1_SHADOW,
        ADIDAS_ORIGINALS_3_STRIPES_TREFOIL_LEGGINGS, NIKE_WOMENS_PADDED_JACKET, ASICS_WOMENS_NOVABLAST];

const ADIDAS_ORIGINALS_3_STRIPES_TREFOIL_LEGGINGS_PERSONALIZED_ITEMS =
    [ADIDAS_ORIGINALS_3_STRIPES_TREFOIL_LEGGINGS, ADIDAS_KARLIE_KLOSS_HIGHWAIST_LEGGINGS, UNDER_ARMOUR_WOMENS_MERIDIAN_LEGGINGS,
        NIKE_AF1, ADIDAS_ORIGINALS_3_STRIPES_TREFOIL_LEGGINGS, ADIDAS_ORIGINALS_WOMENS_ZX_2K_BOOST, NIKE_WOMENS_AF1_SHADOW];

const NIKE_WOMENS_AF1_SHADOW_PERSONALIZED_ITEMS =
    [NIKE_WOMENS_AF1_SHADOW, NIKE_AF1, ADIDAS_ORIGINALS_WOMENS_ZX_2K_BOOST,
        ADIDAS_WOMENS_SUPERNOVA_PLUS, ADIDAS_KARLIE_KLOSS_HIGHWAIST_LEGGINGS, UNDER_ARMOUR_WOMENS_MERIDIAN_LEGGINGS];


function compareA(a, b) {
    if (a.primaryCategory < b.primaryCategory) {
        return -1;
    }
    if (a.primaryCategory > b.primaryCategory) {
        return 1;
    }
    return 0;
}

function compareB(a, b) {
    if (a.primaryCategory > b.primaryCategory) {
        return -1;
    }
    if (a.primaryCategory < b.primaryCategory) {
        return 1;
    }
    return 0;
}


export const getPersonalizedProducts = (products, id) => {
    // console.log("getPersonalizedProducts from id " + id);
    //await sleep(5000);
    if (id == 0 || id == undefined) {
        const items = products.filter(product => {
            return DEFAULT.includes(product.id);
        })
        //items.sort(compare);
        return items.slice(0, 8)
    }

    if ("1" == NIKE_AF1) {
        const items = products.filter(product => {
            return AF1_PERSONALIZED_ITEMS.includes(product.id);
        })
        items.sort((compareB));
        return items.slice(0, 8)
    }

    if ("2" == ADIDAS_ORIGINALS_3_STRIPES_TREFOIL_LEGGINGS) {
        const items = products.filter(product => {
            return ADIDAS_ORIGINALS_3_STRIPES_TREFOIL_LEGGINGS_PERSONALIZED_ITEMS.includes(product.id);
        })
        items.sort(compareA);
        return items.slice(0, 8)
    }
    if (id == NIKE_WOMENS_AF1_SHADOW) {
        const items = products.filter(product => {
            return NIKE_WOMENS_AF1_SHADOW_PERSONALIZED_ITEMS.includes(product.id);
        })
        items.sort(compareB);
        return items.slice(0, 8)
    }

    //return items.slice(0, 8)
}

// Get Best Seller Furniture
export const getBestSellerProducts = (products, type) => {
    const items = products.filter(product => {
        return product.sale === true && product.category === type;
    })

    return items.slice(0, 8)
}

// Get Best Seller
export const getBestSeller = products => {
    const items = products.filter(product => {
        return product.sale === true;
    })

    return items.slice(0, 8)
}

// Get Mens Wear
export const getMensWear = products => {
    const items = products.filter(product => {
        return product.category === 'men';
    })

    return items.slice(0, 8)
}

// Get Womens Wear
export const getWomensWear = products => {
    const items = products.filter(product => {
        return product.category === 'women';
    })

    return items.slice(0, 8)
}

// Get Single Product
export const getSingleItem = (products, id) => {

    const items = products.find((element) => {
        return element.id === id;
    })
    return items;
}


// Get Products In Collection
export const getCollectionProducts = (products, collectionId) => {
    const items = products.filter(product => {
        return product.collectionId === collectionId;
    })
    return items.slice(0, 8)
}


// Get Related Products
export const getRelatedProducts = (products, productId) => {
    const items = products.filter(product => {
        return product.relatedIds != null && product.relatedIds.includes(productId);
    })
    return items.slice(0, 8)
}

// Get Products By Catagory
export const getProductsWithCatagory = (products, catagory) => {
    const items = products.filter(product => {
        return product.catagories != null && product.catagories.includes(catagory);
    })
    return items.slice(0, 8)
}



// Boxever services ********************************************************************************************************************************


const POS = window._boxever_settings.pointOfSale;
const CHANNEL = "WEB";
const BX_SPINSHOP_BASEURL = "https://spinshop.herokuapp.com/";


export const bxAddProductToCart = (product) => {

    var event = {
        "channel": CHANNEL,
        "type": "ADD",
        "language": "EN",
        "currency": "USD",
        "page": "",
        "pos": POS,
        "browser_id": window.Boxever.getID(),
        "product": {
            "item_id": JSON.stringify(product.id),
            "product_id": JSON.stringify(product.id),
            "type": "PRODUCT",
            "name": product.name,
            "currency": "USD",
            "price": parseFloat(parseFloat(Math.round(product.price * product.discount) / 100).toFixed(2)),
            "quantity": 1
        }
    };
    window.Boxever.eventCreate(event, function (data) { }, 'json');
}


export const bxView = (page) => {
    if (page == null) {
        page = window.location.pathname;
    }
    var viewEvent = {
        "browser_id": window.Boxever.getID(),
        "channel": CHANNEL,
        "type": "VIEW",
        "language": "EN",
        "currency": "USD",
        "page": page,
        "pos": POS,
        "session_data": { "uri": page }
    };
    window.Boxever.eventCreate(viewEvent, function (data) { }, 'json');
}

export const bxIdenfify = (email, fname, lname) => {    
    window._boxeverq.push(function () {
        var identifyEvent = {
            "browser_id": window.Boxever.getID(),
            "channel": CHANNEL,
            "type": "IDENTITY",
            "language": "EN",
            "currency": "USD",
            "page": "CHEKOUT",
            "pos": POS,
            "email": email,
            "firstname": fname,
            "lastname": lname
        };

        window.Boxever.eventCreate(identifyEvent, function (data) {
            if(bxIsClientKeyOurSpinShop()){
                var qmLinkSessionEvent = {
                    "browser_id": window.Boxever.getID(),
                    "channel": CHANNEL,
                    "type": "QM_SESSION_LINK",
                    "language": "EN",
                    "currency": "USD",
                    "pos": POS,
                    "Link": "https://boxever.quantummetric.com/#/users/search?qmusercookie=" + window.QuantumMetricAPI.getUserID()
                };
                window.Boxever.eventCreate(qmLinkSessionEvent, function (data) { }, 'json');
            }
        }, 'json');

        var myRequestObject = {
            clientKey: window.Boxever.client_key,
            language: "EN",
            currencyCode: "EUR",
            channel: "WEB",
            browserId: window.Boxever.getID(),
            pointOfSale: POS,
            friendlyId: "acxiom_data_enrichment"
        }
        window.Boxever.callFlows(myRequestObject, function (response) {
            console.log(response)
        });

    });
}

export const bxCheckout = (cartItems) => {

    let checkoutProducts = [];
    cartItems.forEach(function (cartItem) {
        checkoutProducts.push({
            "item_id": JSON.stringify(cartItem.id)
        }
        );
    });

    //payment
    window._boxeverq.push(function () {
        var payment = {
            "channel": CHANNEL,
            "type": "PAYMENT",
            "language": "EN",
            "currency": "USD",
            "page": "/order-success",
            "pos": POS,
            "browser_id": window.Boxever.getID(),
            "pay_type": "Card"
        }
        window.Boxever.eventCreate(payment, function (data) { }, 'json');
    });

    //confirm
    window._boxeverq.push(function () {
        var confirmEvent = {
            "browser_id": window.Boxever.getID(),
            "channel": CHANNEL,
            "type": "CONFIRM",
            "language": "EN",
            "currency": "USD",
            "page": "/order-success",
            "pos": POS,
            "product": checkoutProducts

        };
        window.Boxever.eventCreate(confirmEvent, function (data) {
            //checkout
            window._boxeverq.push(function () {
                var checkoutEvent = {
                    "browser_id": window.Boxever.getID(),
                    "channel": CHANNEL,
                    "type": "CHECKOUT",
                    "language": "EN",
                    "currency": "USD",
                    "page": "/order-success",
                    "pos": POS,
                    "reference_id": uuid.v4(),
                };
                window.Boxever.eventCreate(checkoutEvent, function (data) { }, 'json');
            });
        }, 'json');
    });
}


const sleep = (milliseconds) => {
     return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export const bxIsClientKeyOurSpinShop = () => {
    return window._demo_settings.baseURL === BX_SPINSHOP_BASEURL;
}


export const bxStartAsAnon = () => {
    window.localStorage.removeItem("state");
    window.Boxever.reset();
}

export const bxCloseSession = () => {
    ("bxCloseSession")
    window._boxeverq.push(function () {
        var closeSessionEvent = {
            browser_id: window.Boxever.getID(),
            channel: CHANNEL,
            language: "EN",
            currency: "EUR",
            pos: POS,
            type: "FORCE_CLOSE",
            _bx_extended_message: "1"
        };
        window.Boxever.eventCreate(closeSessionEvent, function (data) { }, 'json');
    });
}

export const bxStartAsJaneLedger = () => {
    var janeLedgerEmail = bxGetJaneLedgerEmail();
    var currentlySelectedUser = localStorage.getItem('BX_DEMO_USER_EMAIL');
    var userJaneLedgerEmail = window._demo_settings.demoUsers[currentlySelectedUser];
    if (userJaneLedgerEmail != null & userJaneLedgerEmail != undefined
        && userJaneLedgerEmail != 'undefined') {
        janeLedgerEmail = userJaneLedgerEmail;
    }
    bxIdenfify(janeLedgerEmail, 'Jane', 'Ledger');
}

export const bxGetJaneLedgerEmail = () => {
    let janeLedgerEmail = ""
    if (bxIsClientKeyOurSpinShop()){
        janeLedgerEmail = "janeledger2020@gmail.com";
    } else {
        janeLedgerEmail = "janeledger@acxiom.com";
    }
    return janeLedgerEmail;
}


