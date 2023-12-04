# 1- Mise en place du projet
- Créer un fichier .env selon le .env.exemple
- Télécharger les node_modules/
- Télécharger l'interface MongoDB Compass
- Lancer la BDD directement dans le navigateur avec l'URL de la forme : mongodb+srv://xxxxxxxxx.mongodb.net/xxxxxxx 

# 2- Lancement du serveur
### Installations et dépendances
**Commandes à réaliser :**

- npm init 
- npm install
*npm install permet d'installer toutes les dépendances visibles dans le package.json*
---
- Faire un node app.js pour lancer le serveur

## 3- Créer un compte avec son nom, son email et un mot de passe.
- Ouvrir Postman
- Se mettre en POST puis choisir l'URL sous forme http://localhost:XXXX/api/v1/user
- Choisir raw et JSON
- Mettre un user dans le body sous la forme :
```
{
    "name":"nom", "email":"mail@mail.com", "password":"xxxx"
}
```
- Cliquer sur SEND
- Vérifier la bonne intégration dans la BDD (*Rafraichir la BDD si besoin*)

### *Informations* : 
- le mot de passe est chiffré et salé.
- Les users arrivent dans la table ero-users
- l'email est unique - en cas de création d'un user avec le même email, cela ne passe pas mais le serveur doit être relancé.

## 4- Se connecter
- Ouvrir Postman
- Se mettre en POST puis choisir l'URL sous forme http://localhost:XXXX/api/v1/user
- Choisir raw et JSON
- Mettre un user dans le body sous la forme :
```
{
    "name":"nom", "email":"mail@mail.com", "password":"xxxx"
}
```
- Cliquer sur SEND
- Vérifier le message de retour

### *Informations* : 
- Si les données correspondent à un user, cela renvoie "user connecté"
- Si le mot de passe est éronné, cela renvoie "mot de passe incorrect"
- Si le mail ne correspond pas, cela renvoie "utilisateur inconnu"