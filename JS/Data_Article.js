let Data_Article = [
    Article_1={
        Publieur: "Complot Facile",
        Photo: "contact_android.png",
        Image: "coronavirus.jpg",
        Link: "articleTest",
        Contenu: "En fait ce sont des CHOCOLATINES !! OMG ...",
        Likes: 27,
        Comments: 10,
        Shares: 2
    },
    Article_2={
        Publieur: "La verite",
        Photo: "contact_android.png",
        Image: "coronavirus.jpg",
        Link: "articleTest",
        Contenu: "On est pas immortel connard !",
        Likes: 10,
        Comments: 4,
        Shares: 0
    },
    Article_3={
        Publieur: "Les vrais sachent",
        Photo: "contact_android.png",
        Image: "coronavirus.jpg",
        Link: "articleTest",
        Contenu: "Il vous suffit de sacher",
        Likes: 70,
        Comments: 3,
        Shares: 2
    },
    Article_4={
        Publieur: "Trop fake",
        Photo: "contact_android.png",
        Image: "coronavirus.jpg",
        Link: "articleTest",
        Contenu: "GET PRANKED !",
        Likes: 154,
        Comments: 32,
        Shares: 8
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
                    '<div class=" d-inline-block">'+
                      '<img src="../ImageSources/'+ Data_Article[j].Photo +'" class="Photo_posteur" />'+
                    '</div>'+
                    '<div class="Publieur ">'+ Data_Article[j].Publieur +
                    '</div>'+
                    '</div>'+
                    '<div class="Contenu ">'+ Data_Article[j].Contenu +
                    '</div>'+

                    '<div class="ArticleImagePreview">'+
                      '<img  src="../ImageSources/'+ Data_Article[j].Image + '" onclick="addArticleWindow(\'' + Data_Article[j].Link + '\');" />'+
                    '</div>'+

                    '<div class= "d-flex Publication_Statistiques ">'+
                      '<img class="Stat_Logo" src="../ImageSources/like_logo.svg" class="Image" />'+
                      '<div class="Stat_Num">'+ Data_Article[j].Likes +'</div>'+
                      '<img class="Stat_Logo" src="../ImageSources/comment_logo.png" class="Image" />'+
                      '<div class="Stat_Num">' + Data_Article[j].Comments + '</div>'+
                      '<img class="Stat_Logo" src="../ImageSources/share_logo.png" class="Image" />'+
                      '<div class="Stat_Num">' + Data_Article[j].Shares + '</div>'+
                    '</div>'+
            '</div>'
            );
    }
    document.write(
        '</div>'+
        '<div id="Droite" class="d-inline-block"></div>'
    );
}
