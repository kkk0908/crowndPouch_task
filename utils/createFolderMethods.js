const fs = require("fs")
const path = require("path")
exports.createFolder = async (folderName) => {
    try {
        let dir = path.join(__dirname, "..", "public");
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        dir = path.join(__dirname, "..", "public", folderName);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}