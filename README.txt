SITE NFC COCONUT STREETWEAR — À PART
=====================================

Ce dossier contient un site 100% indépendant, dédié uniquement au streetwear.

Fichiers :
- index.html      → page d'accueil (hero + collection Drop 00 + section qualité + Instagram)
- produit.html    → fiche produit générique (générée automatiquement selon ?id=... dans l'URL)
- static/css/style.css → la même feuille de style que le site principal
- static/js/main.js    → catalogue produits, panier, checkout Shopify, etc.

À FAIRE AVANT DE METTRE EN LIGNE :
1. Copier ton dossier static/images/ (avec toutes les photos : tshirt1.png,
   tshirt2.png, poster1.png, nfccoconut.png, ico.png, streetwearbis.png...)
   dans static/images/ de ce nouveau dossier. Les images n'ont pas été
   fournies dans notre conversation, seulement le code.
2. Héberger ce dossier sur ton nouveau nom de domaine / sous-domaine.

CE QUI A CHANGÉ PAR RAPPORT À LA VERSION "sous-page" :
- Le catalogue (PRODUCTS) ne contient plus que les 4 t-shirts et 3 affiches
  streetwear (les plaques NFC "business" et le cadeau "guide-premium" ont
  été retirés, ils n'ont pas leur place ici).
- Le menu ne renvoie plus vers les autres univers (NFC, Développement Web) :
  juste "Accueil" et "Le Drop" sur ce site.
- Le panier ne demande plus "Nom du commerce" / "Adresse de la boutique"
  (ces champs n'avaient de sens que pour les clients pro NFC). Le clic sur
  "Commander" envoie directement vers le checkout Shopify, qui collecte
  lui-même l'adresse de livraison du client.
- Le checkout utilise la MÊME boutique Shopify (nfc-coconut.myshopify.com)
  et les mêmes shopifyVariantId : pas besoin de recréer les produits côté
  Shopify.
- Le compte à rebours du Drop (11 octobre 2026) est conservé à l'identique.

POUR AJOUTER UN PRODUIT :
Ouvre static/js/main.js et ajoute un objet dans le tableau PRODUCTS, sur le
même modèle que les autres (n'oublie pas le shopifyVariantId une fois le
produit créé dans l'admin Shopify).

POUR ACTIVER LES VENTES (fin du Drop verrouillé) :
Dans static/js/main.js, fonction productActionButton(), remplace le
`return` du bouton verrouillé par le bloc commenté juste en dessous
(bouton "Ajouter au panier" / "Épuisé").
