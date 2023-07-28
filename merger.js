const PDFMerger = require("pdf-merger-js");

var merger = new PDFMerger();

const MergeFiles = async (f1, f2) => {
    await merger.add(f1);
    await merger.add(f2);

    let d = new Date().getTime();

    await merger.save(`./public/static/${d}.pdf`);
    return d;
}

module.exports = MergeFiles;
