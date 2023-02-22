const qr = require('qr-image');

function generateQr(text, path, type = "svg") {
    const qr_svg = qr.image(text, { type });
    qr_svg.pipe(require('fs').createWriteStream(path));
}

generateQr("#Boris", "BITSEPSb.svg")