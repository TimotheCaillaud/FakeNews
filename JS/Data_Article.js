let Data_Article = [
    {
        Publieur: "Paul ",
        Photo: "contact_android.png",
        Image: "KoreaChristianityPreview.jpg",
        Link: "articleTest",
        Contenu: "Wow.. North Korea is more open that I thought &#128559",
        Likes: 27,
        Comments: 10,
        Shares: 2
    },
    {
        Publieur: "Cynthiiia <3",
        Photo: "contact_android.png",
        Contenu: "OMG !!!! pls share or your loved ones risk to die &#128561 &#128561 &#128557 &#128557 &#128557 !!!! ",
        Image: "banana_egg.jpg",
        Likes: 10,
        Comments: 4,
        Shares: 0
    },

    {
        Publieur: "Momo ",
        Photo: "contact_android.png",
        Contenu: "Very interesting article if your looking for information for a proper diet &#129488",
        Image: "optimalWellnessCenterPreview.jpg",
        Link: "articleTest",
        Likes: 15,
        Comments: 1,
        Shares: 2
    },

    {
        Publieur: "Mario",
        Photo: "contact_android.png",
        Contenu: "Finally the true about Obama, I was sure all those news were not reliable &#128527",
        Image: "snopeObamaPreview.jpg",
        Link: "articleTest",
        Likes: 21,
        Comments: 6,
        Shares: 1

    },

    {
        Publieur: "Rami-kun",
        Photo: "contact_android.png",
        Contenu: "I know why I didn't vote for him thought...  &#128528 &#128528",
        Image: "ObamaFakeNewsReview.jpg",
        Link: "articleTest",
        Likes: 1,
        Comments: 0,
        Shares: 0
    },

    {
        Publieur: "Mathéo",
        Photo: "contact_android.png",
        Contenu: "Germans take to the streets chanting \"Germany Stands With You France\" after terrorist attacks &#128557 &#129321",
        Image: "germanyTerroristAttack.jpg",
        Likes: 12,
        Comments: 0,
        Shares: 1
    },

    {
        Publieur: "Piki chan",
        Photo: "contact_android.png",
        Contenu: "I just learned that my boyfriend was cheated on me for months.. I feel devastated.. &#128557 ",
        Likes: 3,
        Comments: 76,
        Shares: 0
    },

    {
        Publieur: "xXxTimothéKillerxXx",
        Photo: "contact_android.png",
        Contenu: "My parents just took my xbox and I cant play fortnite anymore !!  I HATE MY PARENTS !!!!! &#129324  ",
        Likes: 0,
        Comments: 0,
        Shares: 0
    },

    {
        Publieur: "God",
        Photo: "contact_android.png",
        Contenu: "Felt cute, might delete later &#128536 ",
        Image: "theRock.jpg",
        Likes: 15052,
        Comments: 4358,
        Shares: 34578
    },

    {
        Publieur: "Reliable Statistic Agency",
        Photo: "contact_android.png",
        Contenu: "Like for Qwerty Comment for Azerty ",
        Likes: 0,
        Comments: 854,
        Shares: 3
    },

    {
        Publieur: "Polo",
        Photo: "contact_android.png",
        Contenu: "Putain je parle pas anglais moi je comprends rien sérieux..",
        Likes: 0,
        Comments: 0,
        Shares: 1
    },

    {
        Publieur: "Verlaine",
        Photo: "contact_android.png",
        Contenu: "Museums are soooooooo funny wtf !!! &#128562 &#128562 &#128562",
        Likes: 101,
        Comments: 3,
        Shares: 2
    },

    {
        Publieur: "Karine",
        Photo: "contact_android.png",
        Contenu: "I want to marry Jimin from BTS.. his blue hairs are so... &#128525 &#128525 &#128525",
        Likes: 45,
        Comments: 4,
        Shares: 0
    }



];

function chargementDesArticles(){


    document.write(
        '<div id="Gauche" class=" d-inline-block"></div>'+
        '<div id="Liste_Articles" class=" px-5 d-inline-block">'
    );

    shuffle(Data_Article);
    for (var j=0; j<Data_Article.length;j++) {

            let image;

            if(Data_Article[j].Image){
              if(Data_Article[j].Link){
                image = '<div class="ArticleImagePreview">'+
                  '<img  src="../ImageSources/'+ Data_Article[j].Image + '" onclick="addArticleWindow(\'' + Data_Article[j].Link + '\');" />'+
                '</div>';
              }else{
                image = '<div class="PublicationImage">'+
                  '<img  src="../ImageSources/'+ Data_Article[j].Image + '" />'+
                '</div>';
              }
            }else{
              image = '';
            }

            document.write(
            '<div class="Article bg-primary border">'+
                '<div class="Article_Header d-flex flex-row border-bottom">'+
                    '<div class=" d-inline-block">'+
                      '<img src="../ImageSources/'+ Data_Article[j].Photo +'" class="Photo_posteur" />'+
                    '</div>'+
                    '<div class="Publieur ">'+ Data_Article[j].Publieur +
                    '</div>'+
                    '</div>'+
                    '<div class="Contenu ">'+ Data_Article[j].Contenu +
                    '</div>'+
                    image +
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

//copied from stackoverflow
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
