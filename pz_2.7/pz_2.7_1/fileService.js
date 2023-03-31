function getExtension(filePath) {
    let dotIndex = filePath.lastIndexOf(".")
    if (dotIndex === -1) {
        return null;
    }

    return filePath.substring(dotIndex + 1).toLowerCase();
}

module.exports = { getExtension }