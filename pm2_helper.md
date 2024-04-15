# Commandes utiles 
L'ensemble des commandes débute par pm2. Par souci de concision, seul la suite est indiquée ici :

- flush : nettoie l'ensemble des logs
- delete app1 : supprime l'appli visée
- delete all : supprime toutes les applis 
- list : tableau simple listant l'ensemble des apps
- monit : tableau élaboré listant l'ensemble des apps
- show app1 : très pratique, donne l'ensemble des metadatas pour une appli

## TIPS

Lorsque l'on souhaite mettre à jour les options de pm2, tels que les varEnv ou les arguments passés en paramètre, il faut ajouter --update-env :
    - pm2 restart app1 --update-env