// eslint-disable-next-line no-unused-vars
const Cities = require("./citiesModel");

exports.fetchCities = ({ skip, limit, sortField, sortValue, searchText }) => {
    let query = {}
    if (searchText) {
        query = {
            $or: [{ city: `/${searchText}/` }, { state: `/${searchText}/` }]
        }
    }
    return Cities.paginate(query, { skip, limit, lean: true, sort: { [sortField]: sortValue } })
}
