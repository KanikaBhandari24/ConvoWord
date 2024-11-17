const express = require('express')
const multer = require('multer') 
const cors = require("cors")
const docxConverter = require('docx-pdf');
const path =require('path')

const app = express()
const port = 3000

//CORS AS A MIDDLEWARE
app.use(cors())

//setting up the file storage
const storage = multer.diskStorage({
    //UPLOADS
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
const upload = multer({ storage: storage });
app.post('/convoFile', upload.single('file'),(req, res, next)=> {
    try {
            if(!req.file){
                return res.status(400).json({
                    message: "No file was uploaded"
                })
            }
        //defining output file path
        //File convert hoke yha pe save
        let outputPath=path.join(__dirname, 'files',`${req.file.originalname}.pdf`)
        docxConverter(req.file.path,outputPath, (err,result)=>{
            if(err){
              console.log(err);
              return res.status(500).json({
                message: "Error converting DOCX to PDF"
              })
            }
            res.download(outputPath,()=>{
                console.log("File downloaded");
            })
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error"
        })
        
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})