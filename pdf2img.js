const gm = require('gm').subClass({ imageMagick: '7+' });

const PDF2PNG = (pdf_File_path) => {

    const d = new Date().getTime();

    gm(pdf_File_path)
        .resize(500, 500)
        .write(`./public/static/${d}.png`, (err) => {
            if (!err)
                console.log("Done!");
            else
                console.log({ err: err.message });
        });
}

module.exports = PDF2PNG;
