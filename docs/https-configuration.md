## Description
Doc de setting du website github pages d'Arvest en lien avec la configuration DNS OVH pour obtention d'un accès web sécurisé https.

## Procedure

Marche à suivre détaillée (avec pbs/solutions) liée à ce genre de mise en place - sous nom de domaine propre (ici : `arvest.app`) :
- https://docs.github.com/fr/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https

## Settings

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
    - Dans la branche [`gh-pages`](https://github.com/arvest-data-in-context/arvest-pages-website/tree/gh-pages) du dépôt du site web d'Arvest (`arvest-data-in-context`) :
        - Création d'un fichier nommé [`CNAME`](https://github.com/arvest-data-in-context/arvest-pages-website/blob/gh-pages/CNAME)
            - Avec une seule ligne contenant le nom du domaine propre OVH : `arvest.app` <- pas de préfixe `www.` ici (crucial)
    - Dans la section [Setting > Pages](https://github.com/arvest-data-in-context/arvest-pages-website/settings/pages) associé au dépôt du site web :
        - Renseigner `arvest.app` dans le champ `Custom domain`
    - Attendre que le DNS checking automatique de github pages se fasse son office (jusqu'à 72h d'attente).
    - Deux cas de figures possibles arrivé à cette étape :
        - Cas positif : `Custom domain` est validé en vert, il est alors possible de cocher la case `Enforce HTTPS` située dessous.
        - Cas négatif : `Custom domain` est invalidé en rouge, il est alors impossible de cocher la case `Enforce HTTPS`
            - Dans ce cas => lien "marche à suivre détaillé" donné à la section **Procedure** pour tenter de cerner le problème 
    - Le cas échéant, cocher la case `Enforce HTTPS` pour demander gratuitement un certificat TLS à partir de [Let's Encrypt](https://letsencrypt.org/about/)
        - Attendre 48-72h que la propagation nécessaire opère avant de pouvoir accéder au site web de manière sécurisée. 

Si l'ensemble de la procédure a bien fonctionné, quelque soit l'url tapée dans votre navigateur préféré (p. ex. http://www.arvest.app, https://arvest.app, arvest.app), doit vous faire entrer sur le site web d'Arvest (https://arvest.app/fr) par une connexion sécurisée, marquée "Vérifié par : Let's Encrypt" au niveau du petit cadenas situé à gauche de l'URL sur Firefox par exemple.
