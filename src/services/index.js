var uuid = require('uuid');

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

export const getVisibleproducts = (data, { brand, color, value, sortBy, catagory}) => {

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


const POS = "spinshop.com";
const CHANNEL = "WEB";


export const bxAddProductToCart = (product) => {
    console.log("bxAddProductToCart");
    console.log(product);
    var event =
    {
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
            "type": "OTHER",
            "name": product.name,
            "currency": "USD",
            "price": parseFloat(parseFloat(Math.round(product.price * product.discount) / 100).toFixed(2)),
            "quantity": 1
        }
    };
    window.Boxever.eventCreate(event, function (data) { }, 'json');
}


export const bxView = (page) => {
    if(page == null){
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

export const bxIdenfify = (email,fname,lname) => {
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

        window.Boxever.eventCreate(identifyEvent, function (data) { }, 'json');
    });
}

export const bxCheckout = (cartItems) => {
    
    let checkoutProducts = [];
    cartItems.forEach(function (cartItem) {
        console.log(cartItem);
        checkoutProducts.push(
            {
                "item_id": JSON.stringify(cartItem.id)
            }
        );
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
        window.Boxever.eventCreate(confirmEvent, function (data) { }, 'json');
    });

    //payment
    window._boxeverq.push(function () {    
        var payment =    {
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


   
}



// get("Add Confirm Event", {
//     url: "https://{{apiEndpoint}}/v1.2/event/create.json?client_key={{clientKey}}&message={{message}}",
//     prepare: function (context) {
//         var event = {
//             "browser_id": "{{browserId}}",
//             "channel": "APP",
//             "type": "CONFIRM",
//             "language": "{{language}}",
//             "currency": "{{currencyCode}}",
//             "page": "/home",
//             "pos": "mannings.com.hk",
//             "product": [{ "item_id": "15" }] //need to put


//         };
//         context.sessionVariables.message = JSON.stringify(chainsaw.replaceAllVariables(event, context));
//     }
// }).
// get("Add Checkout Event", {
//     url: "https://{{apiEndpoint}}/v1.2/event/create.json?client_key={{clientKey}}&message={{message}}",
//     prepare: function (context) {
//         var event = {
//             "browser_id": "{{browserId}}",
//             "channel": "APP",
//             "type": "CHECKOUT",
//             "language": "{{language}}",
//             "currency": "{{currencyCode}}",
//             "page": "/home",
//             "pos": "mannings.com.hk",
//             "reference_id": "{{$guid}}",
//         };
//         context.sessionVariables.message = JSON.stringify(chainsaw.replaceAllVariables(event, context));
//     }
// }).

