
// Create your Article model's schema here and export it.
const mongoose = require("kvell-db-plugin-mongoose").dbLib
var mongoosePaginate = require('mongoose-paginate');

const citySchema = new mongoose.Schema({
    _id: { type: String, },
    city: { type: String, },
    loc: { type: Array },
    pop: { type: Number, },
    state: { type: String },
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            ret.loc = ret.loc[0] + ', ' + ret.loc[1];
            // delete ret._id;
            delete ret.__v;
            return ret;
        },
    },
})

// { "_id" : "01001", "city" : "AGAWAM", "loc" : [ -72.622739, 42.070206 ], "pop" : 15338, "state" : "MA" }
citySchema.plugin(mongoosePaginate);
const Cities = mongoose.model("cities", citySchema)

module.exports = Cities