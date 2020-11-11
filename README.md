Projet de Quentin Herpoel

Réaliser un dashboard de gestion des stocks

On simule l'utilisation d'une gestion de stocks.

Avec un menu latéral gauche, je peux cliquer sur un des stocks que je veux contrôler. J'aurai dans le bandeau de droite une overview avec l'évolution des stocks dans le temps, le détail des stocks et éventuellement d'autres stocks.

Dans l'overview je peux cliquer sur un bouton pour faire une entrée ou une sortie des stocks (POST). Post car en réalité cela crée une ligne dans la table avec la nouvelle valeur de stocks ainsi que les infos de logs (date, etc). Il faudra en réalité calculer la différence entre le mouvement de stock entré et la dernière ligne de stock (exemple, entrée user de -15 litres sur le stock actuel de 355, donc POST de 340 litres)

Dans l'overview je peux modifier le nom du stock (PUT), et modifier une des modifications de stocks (PUT, à voir). Je peux également supprimer un état de stocks (DELETE, à voir).

Dans l'overview je peux supprimer un stock entièrement. (DELETE)

Dans le bandeau de droite je peux créer un nouveau stock.

TABLE Stocks_list
id: int
stock_id : int

TABLE Stock_name
id : int
name : string
stock : int


TABLE logs
id : int
Stock_id : int
stock_value : int
log : date

Utiliser d3.js pour la représentation du stock.