let Data_Article = [
    {
        Publieur: "Paul",
        Photo: "Paul.png",
        Image: "KoreaChristianityPreview.jpg",
        Link: "Charisma Magazine",
        ArticleTitle: "North Korea Will Open Its Doors to Christianity",
        ArticlePublisher: "CHARISMA",
        Url: "http://www.charismamag.com/blogs/fire-in-my-bones/36789-north-korea-will-open-its-doors-to-christianity",
        Contenu: "Wow.. North Korea is more open that I thought &#128559",
        Likes: 27,
        Comments: 10,
        Shares: 2
    },
    {
        Publieur: "Cynthiiia_Coeur",
        Photo: "Cynthia.png",
        Contenu: "OMG !!!! pls share or your loved ones risk to die &#128561 &#128561 &#128557 &#128557 &#128557 !!!! ",
        Image: "banana_egg.jpg",
        Likes: 10,
        Comments: 4,
        Shares: 0
    },

    {
        Publieur: "Momo",
        Photo: "Momo.png",
        Contenu: "Very interesting article if your looking for information for a proper diet &#129488",
        Image: "optimalWellnessCenterPreview.jpg",
        Link: "Reaching for Optimal...",
        ArticleTitle: "Reaching for Optimal Wellness",
        ArticlePublisher: "Optimal Wellness Center",
        Url: "https://web.archive.org/web/20000831061431/http://www.mercola.com/forms/wellness_condensed.htm",
        Likes: 15,
        Comments: 1,
        Shares: 2
    },

    {
        Publieur: "Jibé",
        Photo: "Jibé.png",
        Contenu: "As a big fan of bananas, I'm happy to finnaly find answer to my questions ",
        Image: "timesBananaPreview.jpg",
        Link: "Examining the banana",
        ArticleTitle: "Are Bananas Really Worth the Calories?",
        ArticlePublisher: "Time",
        Url: "https://time.com/4017962/banana-nutrition",
        Likes: 11,
        Comments: 2,
        Shares: 3
    },

    {
        Publieur: "Mario",
        Photo: "Mario.png",
        Contenu: "Finaly the truth about this story ! &#128527",
        Image: "snopeObamaPreview.png",
        ArticleTitle: "Did Michelle Obama File For Divorce After Barack Admitted He Was Gay?",
        ArticlePublisher: "Snopes",
        Url: "https://www.snopes.com/fact-check/michelle-obama-divorce-barack",
        Link: "Did Michelle Obama...",
        Likes: 21,
        Comments: 6,
        Shares: 1

    },

    {
        Publieur: "Rami",
        Photo: "Rami.png",
        Contenu: "I know why I didn't vote for him thought...  &#128528 &#128528",
        Image: "ObamaFakeNewsReview.jpg",
        ArticleTitle: "Michelle Obama Files For Divorce After Shocking Revelation; Barack Obama Admits: ‘I’m Gay!’",
        ArticlePublisher: "Wit The Shit",
        Url: "https://wittheshit.com/michelle-obama-files-for-divorce-after-shocking-revelation-barack-obama-admits-im-gay/",
        Link: "Michelle Obama Files...",
        Likes: 1,
        Comments: 0,
        Shares: 0
    },

    {
        Publieur: "Maria",
        Photo: "Maria.png",
        Contenu: "Germans take to the streets chanting \"Germany Stands With You France\" after terrorist attacks &#128557 &#129321",
        Image: "germanyTerroristAttack.jpg",
        Likes: 12,
        Comments: 0,
        Shares: 1
    },

    {
        Publieur: "Piki_chan",
        Photo: "Piki.png",
        Contenu: "I just learned that my boyfriend was cheating on me for months... I feel devastated... ",
        Likes: 3,
        Comments: 76,
        Shares: 0
    },

    {
        Publieur: "xXxTimothéKillerxXx",
        Photo: "Thimothé.png",
        Contenu: "My parents just took my xbox and I cant play fortnite anymore !!  I HATE MY PARENTS !!!!! &#129324  ",
        Likes: 0,
        Comments: 0,
        Shares: 0
    },

    {
        Publieur: "God",
        Photo: "theRock.png",
        Contenu: "Felt cute, might delete later &#128536 ",
        Image: "theRock.jpg",
        Likes: 15052,
        Comments: 4358,
        Shares: 34578
    },

    {
        Publieur: "Reliable_Statistic_Agency",
        Photo: "RSA.png",
        Contenu: "Like for Qwerty Comment for Azerty ",
        Likes: 0,
        Comments: 854,
        Shares: 3
    },

    {
        Publieur: "Polo",
        Photo: "Polo.png",
        Contenu: "Putain je parle pas anglais moi je comprends rien sérieux..",
        Likes: 0,
        Comments: 0,
        Shares: 1
    },

    {
        Publieur: "Verlaine",
        Photo: "Verlaine.png",
        Contenu: "Poesy are soooooooo funny wtf !!! &#128562 &#128562 &#128562",
        Likes: 101,
        Comments: 3,
        Shares: 2
    },

    {
        Publieur: "Karine",
        Photo: "Karine.png",
        Contenu: "I want to marry Jimin from BTS.. his blue hairs are so... &#128525 &#128525 &#128525",
        Likes: 45,
        Comments: 4,
        Shares: 0
    },
    {
        Publieur: "Lucien_Bramart",
        Photo: "oss117.png",
        Contenu: "How is your blanquette ?",
        Likes: 153,
        Comments: 22,
        Shares: 15
    }



];

function chargementDesArticles(){

    document.write(
        '<div id="Gauche" class=" d-inline-block"></div>'+
        '<div id="Liste_Articles" class=" px-5 d-inline-block" >'
    );

    shuffle(Data_Article);
    for (var j=0; j<Data_Article.length;j++) {

            let image = "";
            let articleDescription = "";

            if(Data_Article[j].Image){
              if(Data_Article[j].Link){
                image = '<div class="ArticleImagePreview">'+
                  '<img class="ArticleImagePreview" src="../ImageSources/'+ Data_Article[j].Image + '" onclick="addArticleWindow(\'' + Data_Article[j].Link + '\',\'' + Data_Article[j].Url + '\');" />'+
                '</div>';
                articleDescription = '<div class="articleDescription" onclick="addArticleWindow(\'' + Data_Article[j].Link + '\');">'+
                  '<div class="articlePublisher">'+ Data_Article[j].ArticlePublisher +'</div>' +
                  '<div class="articleTitle">'+ Data_Article[j].ArticleTitle +'</div>' +
                '</div>';

              }else{
                image = '<div class="PublicationImage">'+
                  '<img  src="../ImageSources/'+ Data_Article[j].Image + '" />'+
                '</div>';
              }
            }

            document.write(
            '<div class="Article border">'+
                '<div class="Article_Header d-flex flex-row ">'+
                    '<div id="photo'+ Data_Article[j].Publieur +'" class=" d-inline-block">'+
                      '<img src="../ImageSources/'+ Data_Article[j].Photo +'" class="Photo_posteur" data-toggle="modal" data-target="#popUpInformation" onclick="changeInfoPopUp(Data_Article[1])"/>'+
                    '</div>'+
                    '<div class="Publieur ">'+ Data_Article[j].Publieur +
                    '</div>'+
                '</div>'+
                '<div class="Contenu ">'+ Data_Article[j].Contenu +
                '</div>'+
                    image +
                    articleDescription +
                    '<div class= "d-flex Publication_Statistiques ">'+
                      '<img class="Stat_Logo" src="../ImageSources/like_logo.png" class="Image" />'+
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

function changeInfoPopUp(ArticleNumber){
  let popUp = document.getElementById("popUpInformation");
  console.log(popUp);
  let photoPopUp = document.getElementById("PosteurPhoto");
  console.log(photoPopUp);
  photoPopUp.setAttribute("src", "../ImageSources/Mario.png");
  let namePopUp = document.getElementById("PosteurName");
  namePopUp.innerHTML = "Toto";
  console.log(namePopUp);
  let infoPopUp = document.getElementById("PosteurInformations");
  console.log(infoPopUp);
}

/*
onscroll="scrollErase()"
//onclick="openPopUpInfo(photo'+ Data_Article[j].Publieur +')"

function openPopUpInfo(id){
  window.setTimeout(function(){
    let popUpInfo = document.createElement('div');
    popUpInfo.id = "popUp";
    popUpInfo.style.backgroundColor = "black";
    popUpInfo.style.position = "absolute";
    popUpInfo.style.width = "100px";
    popUpInfo.style.height = "100px";
    id.appendChild(popUpInfo);
  }, 10);
  
}


function scrollErase(){
  let popUp = document.getElementById("popUp");
  if(popUp != null){
    popUp.remove();
  }
}


document.onclick = function(){
  let popUp = document.getElementById("popUp");
  if(popUp != null){
    popUp.remove();
  }
}*/