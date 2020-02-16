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

    ajout = "";
    document.getElementById('input_text').value = "";
};


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

  document.onkeyup = function(){
    if(event.key == "Enter" && (document.activeElement === document.getElementById('input_text'))){
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

        ajout = "";
        document.getElementById('input_text').value = "";
    }
};