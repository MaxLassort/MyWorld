


si modal se ferme alors position du perso+20 vers le bas et la variable "je suis dedans" passe a false

Il faut que je fasse la même chose avec les collisions

09/03: 

J'ai créer un objet blackBoxs qui contiens toutes les coordonées des boites de collisions, j'ai ensuite créer un founction qui loop sur cet objet pour créer les rectangles avec ctx.fillRect. 
Enfin j'ai modifié la fonction collisions pour qu'elle corresponde avec le nouvel objet. 
Je n'ai plus besoin d'avoir chaque fonction création de rectangles d'afficher. 



Pour les maisons: 

J'ai fait une condition avec dans le premier if, si la variable "je suis à l'extérieur" est vrai, alors creer les rectangles noir (collision extérieur), si la variable est fausse (je suis à l'intérieur), alors créer les rectangles verts (collisions intérieur). 
J'ai ensuite créer une fonction qui sert à intervertir la variable "je suis à l'extérieur" lorsque le personnage traverser les portes. cette fonction affiche aussi la maison. 


10/03:  js. 638 
 J'ai créé une fonction qui loop sur le tableau blueBoxs contenant la position de la boite bleau et les propriétés de l'image background des maisons. 
//  j'ai rajouté la condition travers le carré bleu pour activer la variable inHouse. 
//  Si inHouse est vrai, tu affiche le background avec les propriétés données à l'index i. 

14/03 : 
fin des intérieurs avec collisions, j'essaye maintenant d'organiser mon code en créant des modules, notamment des variables, et des tableaus.

15/03 : 
Ajout du background du modal, 
technique de mettre une width et un ::after avec margin bottom à 100% pour que le carré reste un carré en responsive. 