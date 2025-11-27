
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config(); // charge les variables du fichier .env

const app = express();
const PORT = process.env.PORT || 5000;

// Autoriser le front (localhost:3000) à appeler l'API
app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(express.json());

// Routes d'authentification
app.use('/auth', authRoutes);

// Route de test
app.get('/', (req, res) => {
  res.send('API AFOR RUNNING');
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
