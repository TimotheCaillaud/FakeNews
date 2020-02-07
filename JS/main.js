
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

let listOnglet = ["Corps", "Article_Premier"];

function changeVisibility(NameDiv) {
    listOnglet.forEach(element => {
        if (element == NameDiv) {
            document.getElementById(element).classList.add('d-flex');
            document.getElementById(element).classList.add('flex-row');
            document.getElementById(element).classList.add('Page_Up');
            document.getElementById(element).classList.remove('Page_Down');
        } else {
            document.getElementById(element).classList.remove('d-flex');
            document.getElementById(element).classList.remove('flex-row');
            document.getElementById(element).classList.remove('Page_Up');
            document.getElementById(element).classList.add('Page_Down');
        }
    });
}