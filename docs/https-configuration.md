## Description
Doc de setting du site web d'Arvest en lien avec la configutation DNS d'OVH pour l'obtention d'un accès web sécurisé en https.

## Procedure

La marche à suivre et les problèmes pouvant être rencontrés pour mettre en place un accès web sécurisé en https à son site via github pages est expliqué en détail ici :
- https://docs.github.com/fr/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https

Pour Arvest, nous avons en résumé réalisés les étapes de mise en place suivante :
1. Configuration DNS du domaine personnalisé arvest.app d'Arvest chez OVH :
    - Avec l'ajout des 4 enregistrements de type A suivants :
      - Cible OVH : `185.199.108.153` (domaine=`arvest.app` et TTL=`0`) ;
      - Cible OVH : `185.199.109.153` (domaine=`arvest.app` et TTL=`0`) ;
      - Cible OVH : `185.199.110.153` (domaine=`arvest.app` et TTL=`0`) ;
      - Cible OVH : `185.199.111.153` (domaine=`arvest.app` et TTL=`0`).
    - Avec l'ajout de l'enregistrement CNAME suivant :
      - Cible OVH : arvest-data-in-context.github.io (domaine=`www.arvest.app` et TTL=`0`).
    - Avec la suppression d'un enregistrement de type TXT prédéfini sur le sous domaine `www.arvest.app`
      - Celui-ci, prédéfini pour une raison inconnu, était bloquant pour la demande de certificat TLS à l'étape suivante
2. Configuration du site web dans la sectionassocié dans les settings Demande de certificat gratuite à partir de Let's Encrypt via les settings de github pages (cf. étape suivante)   

ajouter l'url dans un fichier de config sur githubpages (retrouvé où)
paramétrer le sous domaine dans la page des settings et activé la demande de certificat au même endroits (indication + explication à donner pour finir)
