Back-end NodeJs Configurer pour facilite l'envoie d'un mail pour un froulaire de contact a partir d'un site 
statique.
Configuration : 
-npm i pour l'installation du pakage ;
l'api est configurer pour ecouter sur le port 3000;
L'envoie du formulaire se fait sur la route "/contact";
le corps du json attent 4 parametres =>
-email (l'email de l'expediteur)
-lastName (Nom de famille de l'expediteur)
-firstName (Prenom de l'expediteur)
-message (le corps du message).

enfin le serveur d'envoi est configurer sur le service Gmail , 
pour l'activer il suffit de creer un .env a la racine du repo et d'y indiquer
GMAIL_TEST_ADRESS (votre adresse Gmail);
GMAIL_PASSWORD (le mpd associe a votre Gmail *** attention a compter du 30/05/2022 un mot de passe 
specifique aux application tiers est obligatoire avec les compte gmail ***);

il est biensur possible d'utliser d'autre service + d'info sur https://nodemailer.com/smtp/# forContactFrom
