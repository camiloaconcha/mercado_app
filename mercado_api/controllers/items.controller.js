const urlItems = 'https://api.mercadolibre.com/items/';
const urlSearch = 'https://api.mercadolibre.com/sites/MLA/search?q=';

const fetch = require('node-fetch');

const mapDetails = (item, description) => {
    console.log(description ? description.plain_text : '');
    const newItem = {
        author: {
            name: 'camilo',
            lastName: 'concha',
        },
        item: {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: 2,
            },
            picture: item.pictures[0].url,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            sold_quantity: item.sold_quantity,
            description: description[0].plain_text,
        },
    };

    return newItem;
};

const mapItems = (results) => {
    const mappedResults = results.map((item) => {
        return {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: 2,
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            sold_quantity: item.sold_quantity,
            address: item.seller_address.city.name,
        };
    });

    return mappedResults;
};

const mapCategories = (response) => {
    return response.filters[0].values[0].path_from_root.map(
        (category) => category.name
    );
};

const mapResults = (response) => {
    const searchResult = {
        author: {
            name: 'camilo',
            lastName: 'concha',
        },
        categories: mapCategories(response),
        results: mapItems(response.results),
    };

    return searchResult;
};

exports.search = (req, res) => {
    const param = req.query.q;

    const encodedURI = encodeURI(`${urlSearch}${param}&limit=4`);

    const getData = async () => {
        try {
            const response = await fetch(encodedURI);
            const json = await response.json();
            const mappedResponse = mapResults(json);

            res.send(mappedResponse);
        } catch (error) {
            console.log(error);
        }
    };
    getData();
};

exports.searchById = (req, res) => {
    const getData = async (urlItems) => {
        try {
            const response = await fetch(urlItems + req.params.id);
            const descReq = await fetch(
                urlItems + req.params.id + '/descriptions'
            );
            const jsonRespose = await response.json();
            const description = await descReq.json();
            const mappedResponse = mapDetails(jsonRespose, description);

            res.send(mappedResponse);
        } catch (error) {
            console.log(error);
        }
    };

    getData(urlItems);
};
