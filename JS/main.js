
document.getElementById("button-addon2").onclick = function () { 

    var tmp = $('.nav-tabs .active').text();
    var conv = "";
    
    if(tmp ==""){
        tmp = Data_Contact[0].Nom;
    }
    for (var j = 0; j < Data_Contact.length; j++) {
        if(Data_Contact[j].Nom == tmp){
            conv = Data_Contact[j].Ref;
        }
    }

    var ajout = document.getElementById('input_text').value;

    if(ajout != ""){
        document.getElementById("ajout_message_"+conv).innerHTML +=  
        '<div class="d-flex align-items-start p-2 flex-column"><div class="Text_Conv p-2 bd-highlight d-inline-flex px-4 text-left bg-white rounded">'+ajout+'</div></div>'; 
    }
    
    ajout = "";
    document.getElementById('input_text').value = "";
};