// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect('mongodb://localhost:27017/dress-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

const dressSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});

const Dress = mongoose.model('Dress', dressSchema);

const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.get('/dresses', (req, res) => {
  Dress.find()
    .then((dresses) => {
      res.json(dresses);
    })
    .catch((error) => {
      console.error('Error fetching dresses:', error);
      res.status(500).json({ error: 'Failed to fetch dresses' });
    });
});
app.post('/dresses', upload.single('image'), async (req, res) => {
    const { name, price } = req.body;
    const imagePath = req.file.path;
  
    try {
      const dress = new Dress({ name, price, image: imagePath });
      const savedDress = await dress.save();
      res.status(201).json({ message: 'Dress created successfully', dress: savedDress });
    } catch (error) {
      console.error('Error creating dress:', error);
      res.status(500).json({ error: 'Failed to create dress' });
    }
  });
  
  
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
