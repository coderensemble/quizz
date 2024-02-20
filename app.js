var questions = [
    ["Qu'est-ce que React JS ?", 
     "Une bibliothèque JavaScript pour construire des interfaces utilisateur", 
     "Un framework JavaScript pour créer des applications web", 
     "Un langage de programmation pour développer des applications mobiles", 
     "Un outil de gestion de base de données NoSQL", 
     1],
	 ["Qu'est-ce qu'un composant dans React JS ?", 
     "Un modèle de conception pour gérer les états", 
     "Une fonction qui retourne des éléments JSX", 
     "Une méthode pour définir des styles CSS", 
     "Un fichier de configuration pour les outils de build", 
     2],
	 ["Quelle méthode est utilisée pour mettre à jour l'état d'un composant dans React JS ?", 
     "setState()", 
     "updateState()", 
     "modifyState()", 
     "changeState()", 
     1],
	 ["Quelle est la différence entre les composants de classe et les composants fonctionnels dans React JS ?", 
     "Les composants de classe ont un état, tandis que les composants fonctionnels n'en ont pas", 
     "Les composants fonctionnels sont plus performants que les composants de classe", 
     "Les composants de classe sont déconseillés dans React JS", 
     "Il n'y a pas de différence", 
     1],
	 ["Qu'est-ce que JSX dans React JS ?", 
     "Une extension de syntaxe JavaScript qui permet d'écrire du HTML dans du code JavaScript", 
     "Un langage de programmation spécifique à React JS", 
     "Un outil de test pour les applications React", 
     "Un format de données pour échanger des informations entre les composants", 
     1],
	 ["Qu'est-ce que la virtual DOM dans React JS ?", 
     "Une représentation virtuelle de l'interface utilisateur qui améliore les performances des applications React", 
     "Une bibliothèque JavaScript pour créer des interfaces graphiques", 
     "Un outil de débogage pour les développeurs React", 
     "Un composant de classe pour gérer les états", 
     1],
	 ["Quels sont les cycles de vie d'un composant dans React JS ?", 
     "Montage, Mise à jour, Démontage", 
     "Initialisation, Exécution, Arrêt", 
     "Création, Modification, Suppression", 
     "Ajout, Modification, Suppression", 
     1],
	 ["Qu'est-ce que les propriétés (props) dans React JS ?", 
     "Des valeurs qui sont passées de parent à enfant et qui sont immuables", 
     "Des fonctions utilisées pour modifier l'état d'un composant", 
     "Des styles CSS appliqués à un composant", 
     "Des méthodes de rendu utilisées pour afficher du contenu HTML", 
     1],
	 ["Comment rendre un élément invisible dans React JS ?", 
     "En utilisant la propriété CSS 'display: none;'", 
     "En supprimant l'élément du DOM", 
     "En utilisant la propriété CSS 'visibility: hidden;'", 
     "En définissant la propriété 'hidden' sur true", 
     1],
	 ["Comment ajouter des événements aux éléments dans React JS ?", 
     "En utilisant des attributs d'événement comme 'onClick' et en leur passant une fonction de gestionnaire d'événements", 
     "En utilisant des méthodes de rendu comme 'renderEvent'", 
     "En créant des fonctions globales pour gérer les événements", 
     "En utilisant des bibliothèques externes comme jQuery", 
     1],
    // Ajoutez vos questions suivantes ici...
];

var quiz = document.getElementById("quiz");
var ques = document.getElementById("question");
var opt1 = document.getElementById("option1");
var opt2 = document.getElementById("option2");
var opt3 = document.getElementById("option3");
var opt4 = document.getElementById("option4");
var result = document.getElementById("result");
var nextbutton = document.getElementById("next");
var q = document.getElementById('quit');

var tques = questions.length;
var score = 0;
var quesindex = 0;

function quit() {
    quiz.style.display = 'none';
    result.style.display = '';
    let f = score / tques;
    result.textContent = "SCORE =" + f * 100;
    q.style.display = "none";
}

function give_ques(quesindex) {
    ques.textContent = quesindex + 1 + ". " + questions[quesindex][0];
    opt1.textContent = questions[quesindex][1];
    opt2.textContent = questions[quesindex][2];
    opt3.textContent = questions[quesindex][3];
    opt4.textContent = questions[quesindex][4];
    return;
};

give_ques(0);

function nextques() {
    var selected_ans = document.querySelector('input[type=radio]:checked');
    if (!selected_ans) {
        alert("SELECT AN OPTION");
        return;
    }

    if (selected_ans.value == questions[quesindex][5]) {
        score = score + 1;
    }
    selected_ans.checked = false;
    quesindex++;
    if (quesindex == tques - 1)
        nextbutton.textContent = "Finish";
    var f = score / tques;
    if (quesindex == tques) {
        q.style.display = 'none';
        quiz.style.display = 'none';
        result.style.display = '';
        result.textContent = "SCORED:" + (f * 100).toFixed(2) + "%";
        return;
    }
    give_ques(quesindex);

}
