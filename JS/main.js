document.getElementById("button-addon2").onclick = function () {
  console.log("test");
  var tmp = $('.nav-tabs .active').text();
  var conv = "";
  var numConv = 0;

  if (tmp == "") {
      tmp = Data_Contact[0].Nom;
  }
  for (var j = 0; j < Data_Contact.length; j++) {
      if (Data_Contact[j].Nom == tmp) {
          conv = Data_Contact[j].Ref;
          numConv = j;
      }
  }

  var ajout = document.getElementById('input_text').value;
 

  responseOfContacts(ajout, numConv,conv);

  ajout = "";
  document.getElementById('input_text').value = "";

  
};

document.onkeyup = function(){
  console.log("1");
  if(event.key == "Enter" && (document.activeElement === document.getElementById('input_text'))){
    console.log("2");
      var tmp = $('.nav-tabs .active').text();
      var conv = "";
      var numConv = 0;

      if (tmp == "") {
          tmp = Data_Contact[0].Nom;
      }
      for (var j = 0; j < Data_Contact.length; j++) {
          if (Data_Contact[j].Nom == tmp) {
              conv = Data_Contact[j].Ref;
              numConv = j;
          }
      }

      var ajout = document.getElementById('input_text').value;

      console.log(Data_Contact[numConv].Etape_Conv);
      console.log(Object.keys(Data_Contact[numConv].Echange).length);

      console.log("test");
      responseOfContacts(ajout, numConv,conv);

      console.log("test2");
      ajout = "";
      document.getElementById('input_text').value = "";

  }
};

function responseOfContacts(rep,numConv,conv){

  
  if(Data_Contact[numConv].Etape_Conv < Object.keys(Data_Contact[numConv].Echange).length){
      //le scenario n'est pas terminé avec ce contact
      var etape = "R"+Data_Contact[numConv].Etape_Conv;
      var etapeSuivante = "O"+ (Data_Contact[numConv].Etape_Conv+1) ;
      var reponseTess = "Je n'ai pas compris, peux tu repeter";
      for(var x = 0;x<Data_Contact[numConv].Echange[etape].length; x++){
          if( rep == Data_Contact[numConv].Echange[etape][x].substr(0,1)){
              reponseTess = Data_Contact[numConv].Echange[etapeSuivante][x].substr(4);
              rep = Data_Contact[numConv].Echange[etape][x].substr(4);
          }
      }
      
      //reponse de l'utilisateur
      if (rep != "") {
          document.getElementById("ajout_message_" + conv).innerHTML +=
              '<div class="d-flex align-items-end flex-column"><div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-right bg-white rounded">' + rep + '</div></div>';
      }

      //reponse de Tess
      document.getElementById("ajout_message_" + conv).innerHTML +=
      '<div class="d-flex align-items-start flex-column"><div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-left bg-success rounded">' + reponseTess + '</div></div>';

      if(reponseTess != "Je n'ai pas compris, peux tu repeter"){
          var elemAEnlever = "choix_message_"+Data_Contact[numConv].Ref;
          console.log(elemAEnlever);
          var child = document.getElementById("choix_message_"+Data_Contact[numConv].Ref);
          child.parentNode.removeChild(child);

          //passage à l'étape suivante
          Data_Contact[numConv].Etape_Conv +=1;
          affichageMessageDeContexte(numConv);
      } 
  }
  else{
      //Le scenario est terminé avec ce contact
      if (rep != "") {
          document.getElementById("ajout_message_" + conv).innerHTML +=
              '<div class="d-flex align-items-end flex-column"><div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-left bg-white rounded">' + rep + '</div></div>';
      }
  }
  


}


function affichageMessageDeContexte(numConv){
  
  for (var key in Data_Contact[numConv].Echange) {
      if(parseInt(key.substr(1))>Data_Contact[numConv].Etape_Conv){
          
          var e = Data_Contact[numConv].Echange[key];
          var conv = Data_Contact[numConv].Ref;

          if(key.substr(0, 1) == 'M') {
              document.getElementById("ajout_message_" + conv).innerHTML +=
                  '<div class="d-flex align-items-start flex-column">' +
                  '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-right bg-secondary rounded">' + Data_Contact[numConv].Echange[key] +
                  '</div>' +
                  '</div>'
              ;
              Data_Contact[numConv].Etape_Conv+=1;
          }
          else if(key.substr(0, 1) == 'O'){
              document.getElementById("ajout_message_" + conv).innerHTML +=
                  '<div class="d-flex align-items-start flex-column">' +
                  '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-right bg-success rounded">' + Data_Contact[numConv].Echange[key] +
                  '</div>' +
                  '</div>'
              ;
              Data_Contact[numConv].Etape_Conv+=1;
          }
          else if(key.substr(0, 1) == 'N'){
              document.getElementById("ajout_message_" + conv).innerHTML +=
                  '<div class="d-flex align-items-end flex-column">' +
                  '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-left bg-white rounded">' + Data_Contact[numConv].Echange[key] +
                  '</div>' +
                  '</div>'
              ;
              Data_Contact[numConv].Etape_Conv+=1;
          }
          else if(key.substr(0, 1) == 'Q'){
              Data_Contact[numConv].Etape_Conv+=1;
  
              document.getElementById("ajout_message_" + conv).innerHTML +=
                  '<div class="d-flex align-items-start flex-column">' +
                  '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-right bg-secondary rounded">' + e +
                  '</div>' +
                  '</div>';
          }
          else if(key.substr(0, 1) == 'R'){
  
            var conv = Data_Contact[numConv].Ref;
            Data_Contact[numConv].Etape_Conv+=1;
            let str = "";
            for(var p = 0;p<Data_Contact[numConv].Echange[key].length;p++){
              str +=
              '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-center bg-warning rounded">' + Data_Contact[numConv].Echange[key][p] + '</div>'
              ;
            }
            document.getElementById("ajout_message_" + conv).innerHTML += '<div id ="choix_message_' + conv +'" class="d-flex align-items-end flex-column">' + str ;

            
            break;
        }
        else{
            break;
        }
      }
  }
}

function addWindows(article){
  document.getElementById("button-addon2").onclick = function () {

      var tmp = $('.nav-tabs .active').text();
      var conv = "";

      if (tmp == "") {
          tmp = Data_Contact[0].Nom;
      }
      for (var j = 0; j < Data_Contact.length; j++) {
          if (Data_Contact[j].Nom == tmp) {
              conv = Data_Contact[j].Ref;
          }
      }

      var ajout = document.getElementById('input_text').value;

      if (ajout != "") {
          document.getElementById("ajout_message_" + conv).innerHTML +=
              '<div class="d-flex align-items-end flex-column"><div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-left bg-white rounded">' + ajout + '</div></div>';
      }
      console.log("ok" +  ajout);
      ajout = "";
      document.getElementById('input_text').value = "";
  };
}


let listOnglet = [{name:"FakeBook", url: "https://fakebook.com"}];

function changeVisibility(NameDiv) {
    listOnglet.forEach(element => {

        if (element.name == NameDiv) {

          document.getElementById(element.name).classList.add('d-flex');
          document.getElementById(element.name).classList.add('flex-row');
          if(element != "FakeBook"){
            document.getElementById(element.name).classList.add('Page_Up');
          }
          document.getElementById(element.name).classList.remove('Page_Down');
          document.getElementById(element.name+"Trigger").classList.add('active');
          document.getElementById("urlBar").value = element.url;
          if(document.getElementById(element.name+"Remove")){
            document.getElementById(element.name+"Remove").src = "../ImageSources/removeMain.png";
          }

        } else {
          document.getElementById(element.name).classList.remove('d-flex');
          document.getElementById(element.name).classList.remove('flex-row');
          document.getElementById(element.name).classList.remove('Page_Up');
          document.getElementById(element.name).classList.add('Page_Down');
          document.getElementById(element.name+"Trigger").classList.remove('active');
          if(document.getElementById(element.name+"Remove")){
            document.getElementById(element.name+"Remove").src = "../ImageSources/removeHidden.png";
          }
        }
    });
}

function removeTab(tabName){
  for( var i = 0; i < listOnglet.length; i++){
   if ( i.name === tabName) {
     listOnglet.splice( i, 1 );
   }
 }

  listOnglet.splice( listOnglet.indexOf(tabName), 1 );
  document.getElementById(tabName +"Tab").remove();
  document.getElementById(tabName).remove();
  document.getElementById('FakeBookTrigger').click();
}

function addArticleWindow(articleTitle,url){
  if(listOnglet.includes({name:articleTitle, url: url})) {
    document.getElementById(articleTitle + 'Trigger').click();
    return;
  }

  listOnglet.push({name:articleTitle, url: url})
  let navBar = document.getElementById("navBar");
  navBar.innerHTML +=
    '<li id="' + articleTitle +'Tab" class="nav-item">'+
      '<a id="' + articleTitle +'Trigger" class="d-inline-block nav-link" onclick="changeVisibility(\'' + articleTitle + '\');" href="#' + articleTitle + '">' + articleTitle + '</a>'+
      '<input id="' + articleTitle +'Remove" type="image" src="../ImageSources/removeMain.png"  onclick="removeTab(\'' + articleTitle + '\');" alt="Submit" width="10" height="10">' +
    '</li>'

  console.log(articleTitle + '.png')
  let site = document.getElementById("Total");
  site.innerHTML +=
   '<div class="ArticlePage" id="' + articleTitle + '" class="Page_Up d-flex flex-row">' +
      '<img  src="../Articles/' + articleTitle + '.png"/>'+
    '</div>'


  //console.log(site.innerHTML)
  document.getElementById(articleTitle + 'Trigger').click();

  }