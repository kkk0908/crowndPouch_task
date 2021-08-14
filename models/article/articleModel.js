
// Create your Article model's schema here and export it.
const mongoose = require("kvell-db-plugin-mongoose").dbLib

const articleSchema = new mongoose.Schema({
    sportName: { type: String, required: true },
    article: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String, required: true },
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        },
    },
})


const Article = mongoose.model("Article", articleSchema)

module.exports = Article