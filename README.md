## Enoncé

The goal is to consume a web service that publishes the CAC40 and NASDAQ courses for:
* first, display the table and the curve of the last 20 values returned by the service. (see diagram below),
* in a second time, make the cells of the table editable. When a table cell is modified, the curve is updated.
* in a third time, refresh the data every second and update table and curve while preserving any user modifications.
Propose a relevant way for the user to have enough time to modify the table (eg: suspend the table when we click on a cell)
provided by a small node.js server which can be retrieved at the following url: https://github.com/o2t/tutorial-node-stock-server


## Limitations :

- A propos du tableau editable : l'implémentation actuelle ne permet pas de rajouter une virgule.

- On utilise Babel pour compiler le JSX dans le navigateur, en production il faudrait utiliser un pré-compilateur.

- Le résultats renvoyés pas l'API tendent à la longue vers 0, le serveur d'API a donc été légèrement modifié pour renvoyer des valeurs stables en continu (voir server.js:9).
