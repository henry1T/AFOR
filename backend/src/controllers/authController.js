const prisma = require('../prismaClient');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'super_secret_change_me';

exports.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(400).json({ message: 'Email déjà utilisé' });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { email, password: hashed },
    });

    const { password: _, ...safeUser } = user;
    res.status(201).json(safeUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(401).json({ message: 'Identifiants invalides' });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ message: 'Identifiants invalides' });

    const token = jwt.sign(
      { email: user.email, id: user.id },
      SECRET_KEY,
      { expiresIn: '1h' }
    );

    res.json({ token });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
