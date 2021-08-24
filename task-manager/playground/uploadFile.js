const multer = require('multer')
const upload = multer({
    dest: 'images'
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})



const multer = require('multer')
const upload = multer({
  dest: 'images',
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    // if (!file.originalname.endsWith('.pdf')) {
    //     return cb(new Error('Please upload a PDF'))
    // }
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error('Please upload a word document'))
    }
    cb(undefined, true)
  },
})

app.post(
  '/upload',
  upload.single('upload'),
  (req, res) => {
    res.send()
  },
  (error, req, res, next) => {
    res.status(400).send({
      error: error.message,
    })
  }
)