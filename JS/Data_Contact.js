let Data_Contact = [
    Contact_A = {
        Nom: "Elle Dean,Toto",
        Ref: "Conversation_A",
        Photo: "contact_android.png",
        Echange: {
            M1: "salut",
            M2: "c'est Elle",
            N3: "salut",
            O4: "salut c'est toto",
            M5: "ca va",
            N6: "oui",
            N7: "et toi",
            // jusqu'a là, c'est les conversations pré-rempli
            Q8: "super, j'ai une question ... A",
            R9 : ["1 - rep correct","2 - rep fausse","3 - autre"],
            O10 : ["1 - oui","2 - non","3 - autre"],
            N11: "suite",
            O12: "suite c'est toto",
            M13: "blabla",
            Q14: "super, j'ai une NOUVELLE question ... A",
            R15 : ["1 - NOUVELLE rep correct ","2 - NOUVELLE rep fausse","3 - NOUVELLE autre"],
            O16 : ["1 - NOUVELLE oui","2 - NOUVELLE non","3 - NOUVELLE autre"],
            M17: "au revoir"
        },
        Etape_Conv: 0
    },
    Contact_B = {
        Nom: "Non-binaire Roux",
        Ref: "Conversation_B",
        Photo: "contact_android.png",
        Echange: {
            M1: "salut",
            M2: "c'est Non-binaire",
            N3: "salut Non-binaire",
            M4: "ca va",
            N5: "oui",
            N6: "et toi",
            Q7: "super, j'ai une question ... B",
            R8 : ["1 - toot","2 - dgdg","3 - dggg"],
            O9 : ["1 - oui","2 - non","3 - non"],
            N10: "suite",
            O11: "suite c'est toto",
            M12: "blabla",
            Q13: "super, j'ai une NOUVELLE question ... B",
            R14 : ["1 - NOUVELLE rep correct ","2 - NOUVELLE rep fausse","3 - NOUVELLE autre"],
            O15 : ["1 - NOUVELLE oui","2 - NOUVELLE non","3 - NOUVELLE autre"],
            M16: "au revoir"
        },
        Etape_Conv: 0
    },
    Contact_C = {
        Nom: "Lui Xor",
        Photo: "contact_android.png",
        Ref: "Conversation_C",
        Echange: {
            M1: "salut",
            M2: "c'est Lui",
            N3: "salut Lui",
            M4: "ca va",
            N5: "oui",
            N6: "et toi",
            Q7: "super, j'ai une question ... C",
            R8 : ["1 - rep correct ","2 - rep fausse","3 - autre"],
            O9 : ["1 - oui","2 - non","3 - autre"],
            N10: "suite",
            O11: "suite c'est toto",
            M12: "blabla",
            Q13: "super, j'ai une NOUVELLE question ... B",
            R14 : ["1 - NOUVELLE rep correct ","2 - NOUVELLE rep fausse","3 - NOUVELLE autre"],
            O15 : ["1 - NOUVELLE oui","2 - NOUVELLE non","3 - NOUVELLE autre"],
            M16: "au revoir"
        },
        Etape_Conv: 0
    }
];


function chargementDesContacts() {

    document.write(
        '<div id="Messagerie" class="bg-success d-inline-block">' +

        '<div id="Liste_Contact">' +
        '<ul class="nav nav-tabs flex-column">'
    );

    for (var j = 0; j < Data_Contact.length; j++) {
        document.write(
            '<li class="nav-item d-flex flex-row">' +
            '<img src="../ImageSources/' + Data_Contact[j].Photo + '" class="Photo_posteur" />' +
            '<a class="nav-link" data-toggle="tab" href="#' + Data_Contact[j].Ref + '">' + Data_Contact[j].Nom +
            '</a>' +
            '</li>'
        );
    }

    document.write(
        '</ul>' +
        '</div>'
    );

    document.write(
        '<div id="Vide_Messagerie"></div>' +
        '<div id="Echange_Contact" class="tab-content bg-danger">'
    );

    for (var k = 0; k < Data_Contact.length; k++) {
        if (k == 0) {
            document.write(
                '<div id="' + Data_Contact[k].Ref + '" class="Conversation tab-pane active text-center">' +
                '<div class="Correspondant">' + Data_Contact[k].Nom +
                '</div>' +
                '<div class="Echange bg-primary">' +
                '<div id ="ajout_message_'+Data_Contact[k].Ref+'" class="ajout-message p-2 d-inline-flex flex-column bd-highlight">'
            );
        }
        else {
            document.write(
                '<div id="' + Data_Contact[k].Ref + '" class="Conversation tab-pane fade text-center">' +
                '<div class="Correspondant">' + Data_Contact[k].Nom +
                '</div>' +
                '<div class="Echange bg-primary">' +
                '<div id ="ajout_message_'+Data_Contact[k].Ref+'" class="ajout-message p-2 d-inline-flex flex-column bd-highlight">'
            );
        }



        for (var key in Data_Contact[k].Echange) {
            if(key.substr(0, 1) == 'M') {
                document.write(
                    '<div class="d-flex align-items-start flex-column">' +
                    '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-right bg-secondary rounded">' + Data_Contact[k].Echange[key] +
                    '</div>' +
                    '</div>'
                );
                Data_Contact[k].Etape_Conv+=1;
            }
            else if(key.substr(0, 1) == 'O'){
                document.write(
                    '<div class="d-flex align-items-start flex-column">' +
                    '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-right bg-success rounded">' + Data_Contact[k].Echange[key] +
                    '</div>' +
                    '</div>'
                );
                Data_Contact[k].Etape_Conv+=1;
            }
            else if(key.substr(0, 1) == 'N'){
                document.write(
                    '<div class="d-flex align-items-end flex-column">' +
                    '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-left bg-white rounded">' + Data_Contact[k].Echange[key] +
                    '</div>' +
                    '</div>'
                );
                Data_Contact[k].Etape_Conv+=1;
            }
            else if(key.substr(0, 1) == 'Q'){
                var e = Data_Contact[k].Echange[key];
                var conv = Data_Contact[k].Ref;
                Data_Contact[k].Etape_Conv+=1;

                document.getElementById("ajout_message_" + conv).innerHTML +=
                    '<div class="d-flex align-items-start flex-column">' +
                    '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-right bg-secondary rounded">' + e +
                    '</div>' +
                    '</div>';
            }
            else if(key.substr(0, 1) == 'R'){

                var conv = Data_Contact[k].Ref;
                Data_Contact[k].Etape_Conv+=1;
                document.write('<div id ="choix_message_' + conv +'" class="d-flex align-items-center flex-column">');
                for(var p = 0;p<Data_Contact[k].Echange[key].length;p++){
                   document.write(
                    '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-center bg-warning rounded">' + Data_Contact[k].Echange[key][p] + '</div>'
                    );
                }
                document.write("</div>");
                break;
            }
            else{
                break;
            }
        }

        document.write(
            '</div>' +
            '</div>' +
            '</div>'
        );
    }
    document.write(
        '<div id="Zone_de_saisie" class="Zone_de_saisie bg-dark">' +
            '<div class="input-group">' +
                '<input id="input_text" type="text" class="form-control" placeholder="..." aria-label="Recipient s text message"' +
                'aria-describedby="button-addon2">' +
                '<div class="input-group-append">' +
                    '<button class="btn btn-outline-secondary" type="button" id="button-addon2">Send</button>' +
                '</div>' +
            '</div>' +
        '</div>'
    );

    document.write(
        '</div>' +
        '</div>'
    );

}
