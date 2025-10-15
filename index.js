const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello everyone, this is vivek kumar soni from amazon india');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});








































// Challenges:
// 1. Docker Hub Authentication (Access Token Issue)
// 2. Node.js Version Mismatch
// 3. Large Docker Image Size
// 5. Kubernetes LoadBalancer on Local Machine