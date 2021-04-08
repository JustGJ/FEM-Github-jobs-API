## The challenge

**To do this challenge, you need a solid understanding of HTML, CSS, and JavaScript.**

Votre défi consiste à créer ce tableau d'emplois en utilisant les données [GitHub Jobs API](https://jobs.github.com/api) et à le rendre aussi proche que possible de la conception (maquette figma).

Vous pouvez utiliser tous les outils que vous aimez pour vous aider à relever le défi. Donc, si vous avez quelque chose que vous aimeriez pratiquer, n'hésitez pas à l'essayer.

Vos utilisateurs doivent pouvoir :

- Affichez la mise en page optimale pour chaque page en fonction de la taille de l'écran de leur appareil
- Voir les états de survol pour tous les éléments interactifs du site
- Afficher tous les emplois actuellement en cours sur l'API GitHub Jobs
- Être en mesure de cliquer sur un emploi dans la page d'index afin qu'ils puissent lire plus d'informations et postuler à l'emploi
- ** Bonus **: Choisissez le bon jeu de couleurs pour eux en fonction des préférences de leur ordinateur. _Hint_: Recherchez `prefers-color-scheme` dans CSS.

⚠️ ** IMPORTANT ** ⚠️: L'API GitHub Jobs génère une erreur CORS lorsque vous essayez d'en extraire des données dans votre projet. Pour éviter cela, vous pouvez utiliser [cors.bridged.cc] (https://app.cors.bridged.cc/). Cela vous permet de préfixer votre URL de requête avec 
`https: // cors.bridged.cc /` et la requête reviendra comme prévu. Donc, si vous vouliez demander tous les postes, 
votre demande ressemblerait à ceci:

```javascript
fetch(
  'https://cors.bridged.cc/https://jobs.github.com/positions.json'
)
  .then((res) => res.json())
  .then((data) => console.log(data));
```
