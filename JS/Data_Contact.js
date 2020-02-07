let Data_Contact = [
    Contact_A = {
        Nom: "Elle Dean",
        Ref: "Conversation_A",
        Photo: "contact_android.png",
        Echange: {
            M1: "salut",
            M2: "c'est Elle",
            N3: "salut",
            M4: "ca va",
            N5: "oui",
            N6: "et toi",
            Q7: "super, j'ai une question ... A"
            //R3 : ["toot","dgdg","dggg"],
        }
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
            Q7: "super, j'ai une question ... B"
        }
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
            Q7: "super, j'ai une question ... C"
        }
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
            '<img src="../' + Data_Contact[j].Photo + '" class="Photo_posteur" />' +
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
                '<div id ="ajout_message_'+Data_Contact[k].Ref+'" class=" p-2 d-inline-flex flex-column bd-highlight">'
            );
        }
        else {
            document.write(
                '<div id="' + Data_Contact[k].Ref + '" class="Conversation tab-pane fade text-center">' +
                '<div class="Correspondant">' + Data_Contact[k].Nom +
                '</div>' +
                '<div class="Echange bg-primary">' +
                '<div id ="ajout_message_'+Data_Contact[k].Ref+'" class=" p-2 d-inline-flex flex-column bd-highlight">'
            );
        }



        for (var key in Data_Contact[k].Echange) {

            switch (key.substr(0, 1)) {
                //cas message classique du contact
                case 'M':
                    document.write(
                        '<div class="d-flex align-items-start flex-column">' +
                        '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-right bg-secondary rounded">' + Data_Contact[k].Echange[key] +
                        '</div>' +
                        '</div>'
                    );
                    break;
                //cas message classique du joueur
                case "N":
                    document.write(
                        '<div class="d-flex align-items-end flex-column">' +
                        '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-left bg-white rounded">' + Data_Contact[k].Echange[key] +
                        '</div>' +
                        '</div>'
                    );
                    break;
                //cas question du contact
                case "Q":
                    document.write(
                        '<div class="d-flex align-items-start flex-column">' +
                        '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-right bg-secondary rounded">' + Data_Contact[k].Echange[key] +
                        '</div>' +
                        '</div>'
                    );
                    //La gestion du temps devra surement etre prise en compte ici
                    break;
                default:
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
