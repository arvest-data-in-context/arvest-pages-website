## Description
Doc de setting du website github pages d'Arvest en lien avec la configuration DNS OVH pour obtention d'un accès web sécurisé https.

## Procedure

Marche à suivre détaillée (avec pbs/solutions) liée à ce genre de mise en place - sous nom de domaine propre (ici : `arvest.app`) :
- https://docs.github.com/fr/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https

## Résumé des étapes suivies dans notre cas

1. Configuration DNS du domaine personnalisé `arvest.app` dans OVH :
    - Avec l'ajout des 4 enregistrements de type `A` suivants :
    - Cible OVH : `185.199.108.153` (domaine=`arvest.app` et TTL=`0`) ;
      - Cible OVH : `185.199.109.153` (domaine=`arvest.app` et TTL=`0`) ;
      - Cible OVH : `185.199.110.153` (domaine=`arvest.app` et TTL=`0`) ;
      - Cible OVH : `185.199.111.153` (domaine=`arvest.app` et TTL=`0`).
    - Avec l'ajout de l'enregistrement de type `CNAME` suivant :
      - Cible OVH : `arvest-data-in-context.github.io` (domaine=`www.arvest.app` et TTL=`0`).
    - Avec la suppression d'un enregistrement de type `TXT` prédéfini sur le sous domaine `www.arvest.app`
      - Celui-ci, prédéfini pour une raison inconnu, était bloquant pour la demande de certificat TLS à l'étape suivante
    - Attendre que la propogation automatique des settings chez OVH et en dehors soit opérée et fonctionne
      - Jusqu'à 48h d'attente parfois. 
2. Configuration du site web dans github pages :
    - Ajout de l'url XXX dans le fichier YYY sur github pages
    - Dans la section [Setting > Pages](https://github.com/arvest-data-in-context/arvest-pages-website/settings/pages) associé au dépôt du site web (`arvest-data-in-context`) :
        - Renseigner `arvest.app` dans le champ `Custom domain`
    - Attendre que le DNS checking automatique de github se fasse (jusqu'à 72h d'attente).
    - Dans le cas positif, le Custom domain est indiqué validé et il est alors possible de cocher la case `Enforce HTTPS` située sous le champ `Custom domain`.
    - Cocher alors `Enforce HTTPS` pour demander gratuitement un certificat TLS à partir de [Let's Encrypt](https://letsencrypt.org/about/)
        - Attendre 48-72h que la propagation nécessaire opère avant de pouvoir accéder au site web de manière sécurisée. 

Si l'ensemble de la procédure a bien fonctionné, quelque soit l'url tapée dans votre navigateur préféré (p. ex. http://www.arvest.app, https://arvest.app, arvest.app), doit vous faire entrer sur le site web d'Arvest (https://arvest.app/fr) par une connexion sécurisée, marquée "Vérifié par : Let's Encrypt" au niveau du petit cadenas situé à gauche de l'URL sur Firefox par exemple.
