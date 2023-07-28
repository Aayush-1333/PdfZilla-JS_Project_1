const express = require('express');
const app = express();
const path = require("path");
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const MergeFiles = require("./merger");
const PDF2PNG = require('./pdf2img');
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public\\static")));

// ============== Endpoints of the web app ==============

// ========== Homepage ============
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "templates\\home.html"));
})

// ============ Merge PDFs ===============
app.get('/merge-tool', (req, res) => {
    res.sendFile(path.join(__dirname, "templates\\mergeTool.html"));
})

app.post('/merge', upload.array('pdfs', 2), async (req, res) => {
    let d = await MergeFiles(
        path.join(__dirname, req.files[0].path), 
        path.join(__dirname, req.files[1].path) 
    );

    res.redirect(`http://localhost:3000/${d}.pdf`);
})

app.get('/pdf2img-tool', (req, res) => {
    res.sendFile(path.join(__dirname, "templates\\pdf2imgTool.html"));
})


app.post('/pdf2img', upload.array('pdfs', 1), (req, res) => {
    try {
        PDF2PNG(req.files[0].path);
        res.send("done");
    } catch (error) {
        res.send({error: error.message});
    }
})

app.listen(PORT, () => {
    console.log("App listening at port", PORT);
})
