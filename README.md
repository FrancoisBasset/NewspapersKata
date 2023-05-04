# Requirements
This repository uses yarn so please install it globally

```npm install -g yarn```

## Install

````
> yarn install
````

NB: if you have an error referring to cpu-features please ignore it.

## Develop

````
> turbo develop
````

## Tests

To launch all unit test
````
> turbo test
````

# Development process

Pour faire ce test, j'ai d'abord :
- Fait fonctionner le projet sur ma machine
- Essayé toutes les routes d'API pour comprendre ce que fait le projet
- Lu la lambda de la route /newspaper/offers
- Refactorisé la lambda pour faire la même focntionnalité mais différemment

J'ai ajouté 4 méthodes pour séparer ce que fait cette lambda :
-   `getOfferStrings`: Encapsule l'appel réseau de la route `/dev/offers`
-   `getNewspapers`: Récupère la liste des noms des newspapers. Cette méthode est réutilisé à la fois dans la route `/dev/newspapers/offers` et `/dev/newspapers/names`
-   `getTypes`: Récupère la liste des types des abonnements. Cette méthode est réutilisé à la fois dans la route `/dev/newspapers/offers` et `/dev/newspapers/offers/types`
-   `getDurations`: Récupère la liste des durées des abonnements. Cette méthode est réutilisé à la fois dans la route `/dev/newspapers/offers` et `/dev/newspapers/offers/durations`

J'ai crée les interfaces Newspaper avec un id et un nom
Et OffersCatalog avec les propriétés newspapers, type, duration, pour matcher avec les résultats de l'appel réseau.

J'ai crée des tests unitaires qui va tester si un objet de bon type est utilisé : Object ou Array, si l'object a les propriétés qu'il faut, ou si l'array possède bien quelques valeurs attendues.

Pour le Step 3, j'ai utilisé le plugin serverless-s3-local pour simuler une base S3 en local.
J'ai crée une lambda pour créer directement le fichier CSV qui contient les données `newspaper_id,offer_type,offer_duration`

J'ai regardé si j'ai bien le fichier CSV de crée en appellant la route issue de la lambda. 
Cela fonctionne bien et il a fallu que ce soit un CRON pour appeler automatiquement cette lambda à 6 heure du matin.
J'ai ajouté `- schedule: cron(0 6 * * ? *)` dans les events et supprimé la route API car plus besoin.
Et bien sûr j'ai testé en premier avec un CRON `* * * * * *` toutes les minutes pour être sûr que cette lambda soit bien appelé.

Si un développeur reprend le projet, cela sera beaucoup plus simple car il y a aura des tests, et des méthodes beaucoup moins longues et plus compréhensibles.
