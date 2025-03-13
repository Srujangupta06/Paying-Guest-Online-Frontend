const express = require('express');
// const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// MongoDB connection setup
// mongoose.connect('mongodb://localhost:27017/testdb', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB database'))
// .catch(err => console.error('Error connecting to MongoDB:', err.message));

// app.get('/', (req, res) => {
//     res.send('MongoDB Database Connected!');
// });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
