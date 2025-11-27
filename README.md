# Projet AFOR (Backend et Frontend)

Ce projet est une application web permettant de gérer l'authentification des utilisateurs, avec des fonctionnalités d'inscription et de connexion. L'application utilise un backend **Node.js** avec **Express** et une base de données **PostgreSQL**, le tout géré dans un environnement Docker. Le frontend est construit avec React.

---

## Description

L'application permet aux utilisateurs de :

- S'inscrire avec un email et un mot de passe
- Se connecter via un système d'authentification par token JWT
- Accéder à un tableau de bord** sécurisé après connexion

L'application backend est construite avec Express et Prisma, avec une base de données PostgreSQL. Le frontend est développé avec React.

---

## Installation

### Prérequis

Avant de commencer, assurez-vous que vous avez installé les outils suivants :

- Docker Desktop pour exécuter PostgreSQL dans un conteneur
- Node.js (version 14 ou supérieure) et npm pour gérer les dépendances
- Git pour cloner le repository

### Cloner le repository

```bash
git clone https://github.com/henry1T/projet-afor.git
cd projet-afor

-Installation du backend

.Accédez au dossier backend :

cd backend


.Installez les dépendances backend :

npm install


.Créez le fichier .env à la racine du dossier backend et ajoutez la configuration suivante :

DATABASE_URL="postgresql://postgres:password@localhost:5434/mydb?schema=public"


.Lancer PostgreSQL dans Docker (si ce n'est pas déjà fait) :

docker-compose up -d postgres


.Générer le client Prisma et appliquer les migrations de la base de données :

npx prisma generate
npx prisma migrate dev --name init


.Démarrer le serveur backend :

npm run dev


Le backend sera accessible sur http://localhost:5000
.

- Installation du frontend

.Accédez au dossier frontend :

cd frontend


.Installez les dépendances frontend :

npm install


.Lancer le frontend :

npm start


Le frontend sera accessible sur http://localhost:3000
.

- Documentation API

L'API du backend permet deux principales fonctionnalités : l'inscription et la connexion. Toutes les routes sont protégées par des tokens JWT.

1. POST /auth/register

Description : Permet à un utilisateur de s'inscrire avec un email et un mot de passe.

Request Body :

{
  "email": "user@example.com",
  "password": "password123"
}


Réponse :

200 OK : L'utilisateur est créé avec succès.

400 Bad Request : Si l'email est déjà utilisé.

2. POST /auth/login

Description : Permet à un utilisateur de se connecter et de recevoir un token JWT.

Request Body :

{
  "email": "user@example.com",
  "password": "password123"
}


Réponse :

200 OK : Le token JWT est retourné.

401 Unauthorized : Si l'email ou le mot de passe est incorrect.

Exemple de réponse :

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

3. Accès protégé à /dashboard

Après s'être connecté avec succès via login, l'utilisateur est redirigé vers le tableau de bord. Ce tableau de bord est protégé par un token JWT qui doit être envoyé avec chaque requête pour y accéder.

Architecture du projet
1. Backend

Le backend est construit avec Express et utilise Prisma pour la gestion de la base de données PostgreSQL.

/src/server.js : Point d'entrée de l'application backend, qui initialise le serveur Express.

/src/controllers/authController.js : Contrôleur pour gérer l'inscription et la connexion des utilisateurs.

/src/routes/authRoutes.js : Routes pour l'authentification (inscription et connexion).

/prisma/schema.prisma : Le schéma Prisma qui définit les modèles de données pour PostgreSQL.

2. Frontend

Le frontend est une application React qui communique avec le backend via fetch et gère les états des utilisateurs.

Pages :

Register : Formulaire d'inscription.

Login : Formulaire de connexion.

Dashboard : Page protégée, accessible après connexion.

src/api.js : Fichier contenant l'URL de l'API backend.

src/pages/Register.jsx : Page d'inscription.

src/pages/Login.jsx : Page de connexion.

src/pages/Dashboard.jsx : Page protégée, accessible après connexion.

3. Docker

Le projet utilise Docker pour faire tourner PostgreSQL dans un conteneur, ce qui simplifie l'installation et la gestion de la base de données.

docker-compose.yml : Fichier de configuration Docker qui définit les services du projet, y compris PostgreSQL.

docker-compose up -d postgres : Commande pour démarrer PostgreSQL dans un conteneur Docker.

Contribuer

Fork ce repository

Clone ton fork

Crée une nouvelle branche pour ta fonctionnalité ou correction de bug

Fais tes modifications et commite

Ouvre une pull request

Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE
 pour plus de détails.


---

### Résumé de chaque section :
1. **Description du projet** : explique ce que fait l'application.
2. **Instructions d'installation** : détaille les étapes pour installer et faire fonctionner le backend et le frontend.
3. **Documentation de l'API** : décrit les routes de l'API pour l'inscription et la connexion.
4. **Architecture du projet** : explique l'architecture du projet, à la fois côté frontend et backend.

---





