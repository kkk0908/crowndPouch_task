// eslint-disable-next-line no-unused-vars
const Cities = require("./citiesModel");

exports.fetchCities = (queryParams) => {
    let defaultPaginationOption = {
        skip: 0, limit: 10, sortField: "city", sortValue: 1
    }
    let paginationOption = Object.assign(defaultPaginationOption, queryParams)
    paginationOption.sort = { [paginationOption.sortField]: paginationOption.sortValue }
    let query = {}
    if (paginationOption.searchText) {
        query = {
            $or: [{ city: { $regex: "^" + paginationOption.searchText } }, { state: { $regex: "^" + paginationOption.searchText } }]
        }
    }

    delete paginationOption.searchText
    console.log("paginationOption", paginationOption,)
    console.log("QUERY", query,)
    return Cities.paginate(query, paginationOption)
}

exports.fetchCitiesByMaxPop = () => Cities.find().sort({ pop: -1 }).select(["city", "pop"]).lean()
// used lean for fast fetch the data

exports.fetchAllCitiesWithNoCond = () => Cities.find().lean()

