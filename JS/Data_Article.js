let Data_Article = [
    Article_1={
        Publieur: "Complot Facile",
        Photo: "contact_android.png",
        Titre: "Ce que le gouvernement vous cache sur les pains aux chocolats !",
        Contenu: "En fait ce sont des CHOCOLATINES !! OMG ..."
    },
    Article_2={
        Publieur: "La verite",
        Photo: "contact_android.png",
        Titre: "On va tous mourir, la raison va vous surprendre",
        Contenu: "On est pas immortel connard !"
    },
    Article_3={
        Publieur: "Les vrais sachent",
        Photo: "contact_android.png",
        Titre: "Sachiez vous comment sachoir ?",
        Contenu: "Il vous suffit de sacher"
    },
    Article_4={
        Publieur: "Trop fake",
        Photo: "contact_android.png",
        Titre: "Je vous dit la verité sur moi !",
        Contenu: "GET PRANKED !"
    }
];

function chargementDesArticles(){
    
    document.write(
        '<div id="Gauche" class="d-inline-block"></div>'+
        '<div id="Liste_Articles" class="bg-warning px-5 d-inline-block">'
    );

    for (var j=0; j<Data_Article.length;j++) {
            document.write(
            '<div class="Article mx-5 my-3 bg-primary border">'+
                '<div class="Article_Header d-flex flex-row border-bottom">'+
                    '<div class="d-inline-block">'+
                        '<img src="../'+ Data_Article[j].Photo +'" class="Photo_posteur" />'+
                    '</div>'+
                    '<div class="Titre_Article d-inline-block">'+ Data_Article[j].Titre +
                    '</div>'+
                    '</div>'+
                '<p>' + Data_Article[j].Contenu + '</p>'+
            '</div>'
            );
    }
    document.write(
        '</div>'+
        '<div id="Droite" class="d-inline-block"></div>'
    );
}
