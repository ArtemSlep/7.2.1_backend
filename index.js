const express = require('express');
const cors = require('cors');
const app = express();

const port = 3000;

app.use(cors());
app.use(express.json());

let count = 0;

app.get('/', (req, res) => {
    try {
        res.status(200).json({
        count,
    })
    } catch(error) {
        res.status(500).json()
    }
})

app.get('/plus', (req, res) => {
    try{
        res.status(200).json({
        count: ++count,
    })
    } catch(error) {
      res.status(500).json()
  }
})

app.listen(port, () => {
    console.log(`Server has been started on ${port} port...`);
})
