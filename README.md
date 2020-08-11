# Assignement ONE2TEAM

## Enoncé

The goal is to consume a web service that publishes the CAC40 and NASDAQ courses for:
- first, display the __table__ and the __curve__ of the last __20 values__ returned by the service. (see diagram below),
- in a second time, make the cells of the table __editable__. When a table cell is modified, the curve is __updated__.
- in a third time, refresh the data every second and __update__ table and curve while preserving any user modifications.
Propose a relevant way for the user to have enough time to modify the table (eg: suspend the table when we click on a cell)
provided by a small __node.js__ server which can be retrieved at the following url: https://github.com/o2t/tutorial-node-stock-server


## Contenu :

- Components :
    * stock_viz.js
    * stock_table.js
    * stock_chart.js

- index.html + style.css


## Limitations :

- A propos du tableau editable : l'implémentation actuelle ne permet pas de rajouter une __virgule__.

- Babel est utilisé pour __compiler le JSX__ dans le navigateur.

- J'ai utilisé __Recharts__ pour faire le graphe.

- Le résultats renvoyés pas l'API tendent à la longue vers 0, le __serveur d'API__ a donc été légèrement modifié pour renvoyer des valeurs stables en continu (voir server.js:9). J'ai aussi mis un graphe à double entrée pour que les variations soient visibles sur les deux courbes.
