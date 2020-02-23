let Data_Contact = [
    /*
    How to read this database :
    - Contact_*     = The different conversation
    - Nom           = The name of the conversation / group
    - Ref           = The reference of the linked conversation
    - Photo         = The picture of the conversation / group
    - Echange       = The list of messages to display on the conversation
    - Etape_Conv    = Track the number of message in the conversation

    How to read the Echange part :
    - Letter    = Used to differentiate who is talking or the type of message
        - O = The first correspondant
        - M = The second correspondant
        - N = The player
        - R = The different answer the player can enter
        - Q =
    - Number    = Used to debug, to know what message we are
    */
    Contact_A = {
        Nom: "Boris, Mary",
        Ref: "Conversation_A",
        Photo: "group.png",
        Echange: {
            O1: "Hey guys !",
            M2: "Hey, what's up Mary? Are you still sick?",
            O3: "Yes.. I'm stuck in my bed! &#128557",
            M4: "Maybe, you should take care about your alimentation &#128527, last time I saw you I felt you eat to much bananas",
            M5: "I'm not an expert, but I guess it's not very healthy, isn't it Alexis? ",
            R6: ["1 - Yes you right, Mary you should avoid it as it's very concentrated in sugar. Also,try to avoid eating more than 3 fruits a day! ",
                "2 - No, actually, it's pretty good to refuel your organism and plenty of vitamins!",
                "3 - I don't know, but you should avoid eating bananas with eggs, it could kill you!"],
            O7: ["1 - I guess you red the article that Momo shared right ? You shouldn't trust what is written in articles that easily. This article gives a lot of scientific opinions, but it never rely on sources to prove it. In addition, this article is written on a website trying to sell you diets, so there is definitely a conflict of interest, you should have take care." +
                "However I saw a nice article on the Time saying that bananas are a realy good fruit, plenty of  &#127820, the article cite all its sources, so you should give it a try &#128077" +
                "Also take care, Cynthia shared a crazy fakenews about the fact that eating banana with eggs could kill you, this news is based on no studies. It clearly plays on your empathy to make you share, it's generally a hint that it's not a reliable news&#128553",
            "2 - Yes you right &#127820, I guess you red the article on the Time as me. The article cite all its sources it seems  trustable, you should give it a try Boris &#128077" +
            "It's all the contrary as the article that Momo shared.. The article gives a lot of scientific opinions, but it never relies on sources to prove it. In addition, this article is written on a website trying to sell you diets, so there is definitely a conflict of interest." +
            "Also take care, Cynthia shared a crazy fakenews about the fact that eating banana with eggs could kill you, this news is based on no sources. It clearly plays on your empathy to make you share, I warned her that it's generally a hint that it's not a reliable news &#128553",
            "3 - No you shouldn't truts the article that Cynthia shared, this news is based on no sources. It clearly plays on your empathy to make you share, I warned her that it's generally a hint that it's not a reliable news. &#128553" +
            "However I saw a nice article on the Time saying that bananas are a realy good fruit, plenty of vitamin, the article cite all its sources, so you should give it a try &#128077" +
            "It's all the contrary as the article that Momo shared.. The article gives a lot of scientific opinions, but it never relies on sources to prove it. In addition, this article is written on a website trying to sell you diets, so there is definitely a conflict of interest"],
            M8: "Wow I should have been more carrefull haha !",
            M9: "Otherwise Mary, how your stay in Russia is going? &#128064",
            O10: "uuuh it's getting a bit boring honneslty &#128530 ..",
            O11: "There is not that much to do in Siberia.. I'm considering moving..",
            M12: "It's just next to North Korea right ? You could move there it seems to be more open recently &#128521",
            M13: "I saw in an article that Paul shared that they open its doors to Christianity recently",
            M14: "Alexis, Kim Jung-Un accepts your religion now isn't it nice ? &#128523",
            R15: ["1 - Actually the article doesn't say that North Korea opened its doors to Christianity", "2 - That's a nice step forward for freedom of worship !"],
            O16: ["1 - Yes you're right, Mary you should have read the whole article, not only the title &#128527. Actually, it only expresses religious views about ongoing developments on the Korean peninsula and hopes that Christians will make inroads soon. There is a lot of articles like this one, which are distording reality in their titles in order to create catchy titles",
                "2 - No, it's a fake news guys, you should have read the whole article, not only the title &#128527. Actually, it only expresses religious views about ongoing developments on the Korean peninsula and hopes that Christians will make inroads soon. There is a lot of articles like this one, which are distording reality in their titles in order to create catchy titles"],
            M17: "Ah upsi &#128528, I will take care next time thanks !!",
            O18: "Instead of North Korea I was more considering Germany, I find German is a beautifull language I would love to learn it &#128525",
            M19: "Yes ! And also, have you seen the picture Maria shared of Germans marching to express solidarity with France after attacks? Those guys seem cool",
            M20: "don't you think Alexis! &#128512",
            R21: ["1 - Yes you right, that's cool to see people supports each other ! ", "2 - Not saying that Germans are not cool, but the photo that Maria shared is out of context"],
            O22: ["1 - You guys should take care of the actual context of the photo, actually this picture was take in an anti-Islan march. Changing the context of a picture is a realy common source of desinformation, you can check it by doing a quick search of the photo on the internet &#128519",
                "2 - Yes you right, actually this picture was take in an anti-Islan march. Changing the context of a picture is a realy common source of desinformation. boris, you can check it by doing a quick search of the photo on the internet &#128519"],
            M23: "Wow, it makes me feel bad to share that much fake news to you.. Even more than the Obamas divorce &#128533",
            M24: "Have you seen it Alexis ?",
            R25: ["1 - Yes I saw it, that's sad for them! ", 
                "2 - I think you get trap again by a fake news"],
            O26: ["1 - Nooo ! I was testing you &#128517, the article shared by Rami that you maybe saw is fake, actually that's from a forum, everyone can write the article he wants, so that's deffinitely not reliable as there is no external sources. In addition it uses a catchy title, so you should have mistrust it even more? Everything is well explained in the article of Snopes, that's a website specialised in fake news debunking, it's interesting to check sometimes ",
                "2 - Yes you right, for this one I was testing you &#128517, I wanted to know if you would trust the article shared by Rami, I saw quickly that its from a forum, everyone can write the article he wants, so that's deffinitely not reliable as there is no external sources. In addition it uses a catchy title, so I directly mistrusted it even more. Everything is well explained in the article of Snopes, that's a website specialised in fake news debunking, it's interesting to check sometimes "],
            O27: "I'm happy that you finaly get good routines Boris &#128513 !",
            M28: "That was not that hard with a good teacher &#128536",
            O29: "Haha tanks ! &#128556, ok I have to go guys cya !",
            M30: "See you !",
        },
        Etape_Conv: 0
    },
    Contact_B = {
        Nom: "God",
        Ref: "Conversation_B",
        Photo: "theRock.png",
        Echange: {
            M1: "Hey men wassup? ",
            M2: "What about going to the gym this afternoon? &#x1F4AA; ",
            N3: "But we just went this morning bro",
            M4: "But we didn't train legs men",
            M5: "I need to feel my muscles congested to feel alive 	&#128293",
            N6: "Ok.. I prepare my protein shaker and I come  ",
        },
        Etape_Conv: 0
    },
    Contact_C = {
        Nom: "Momo",
        Photo: "Momo.png",
        Ref: "Conversation_C",
        Echange: {
            M1: "Hey men! How r you?",
            M2: "Do you remember that I lend you some money last week?",
            M3: "???",
            N4: "I know you saw the message..",
            M5: "come one it's just 5€..",
            M6: "I can't eat today because of you..",
        },
        Etape_Conv: 0
    }
];

//Write the HTML on the messaging system
async function chargementDesContacts() {

    // Messaging system
    document.write(
        '<div id="Messagerie" class="d-inline-block">' +
        '<div  id="Liste_Contact">' +
        '<ul class="nav nav-tabs flex-column">'
    );

    // Contact part
    for (var j = 0; j < Data_Contact.length; j++) {
        document.write(
            '<li class="nav-item d-flex flex-row">' +
            '<img width: auto;" src="../ImageSources/' + Data_Contact[j].Photo + '" class="Photo_posteur" />' +
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
        '<div id="Echange_Contact" class="tab-content ">'
    );

    // Conversation part
    for (var k = 0; k < Data_Contact.length; k++) {

        // Show the first conversation
        if (k == 0) {
            document.write(
                '<div id="' + Data_Contact[k].Ref + '" class="Conversation tab-pane active text-center">' +
                '<div class="Correspondant">' + Data_Contact[k].Nom +
                '</div>' +
                '<div id="scroller1" class="Echange bg-primary">' +
                '<div id ="ajout_message_' + Data_Contact[k].Ref + '" class="ajout-message p-2 d-inline-flex flex-column bd-highlight">'
            );
        }

        // Hide the other conversation
        else {
            document.write(
                '<div id="' + Data_Contact[k].Ref + '" class="Conversation tab-pane fade text-center">' +
                '<div class="Correspondant">' + Data_Contact[k].Nom +
                '</div>' +
                '<div class="Echange bg-primary">' +
                '<div id ="ajout_message_' + Data_Contact[k].Ref + '" class="ajout-message p-2 d-inline-flex flex-column bd-highlight">'
            );
        }

        // Write every message of inactive conversation
        // Display according to the letter
        if (k > 0) {
            for (var key in Data_Contact[k].Echange) {
                if (key.substr(0, 1) == 'M') {
                    document.write(
                        '<div class="d-flex align-items-start flex-column">' +
                        '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-left bg-secondary rounded">' + Data_Contact[k].Echange[key] +
                        '</div>' +
                        '</div>'
                    );
                    Data_Contact[k].Etape_Conv += 1;
                }
                else if (key.substr(0, 1) == 'O') {
                    document.write(
                        '<div class="d-flex align-items-start flex-column">' +
                        '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-left bg-success rounded">' + Data_Contact[k].Echange[key] +
                        '</div>' +
                        '</div>'
                    );
                    Data_Contact[k].Etape_Conv += 1;
                }
                else if (key.substr(0, 1) == 'N') {
                    document.write(
                        '<div class="d-flex align-items-end flex-column">' +
                        '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-right bg-white rounded">' + Data_Contact[k].Echange[key] +
                        '</div>' +
                        '</div>'
                    );
                    Data_Contact[k].Etape_Conv += 1;
                }
                else if (key.substr(0, 1) == 'Q') {
                    var e = Data_Contact[k].Echange[key];
                    var conv = Data_Contact[k].Ref;
                    Data_Contact[k].Etape_Conv += 1;
                    document.write(
                        '<div class="d-flex align-items-start flex-column">' +
                        '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-left bg-secondary rounded">' + e +
                        '</div>' +
                        '</div>'
                    );
                }
                else if (key.substr(0, 1) == 'R') {
                    var conv = Data_Contact[k].Ref;
                    Data_Contact[k].Etape_Conv += 1;
                    document.write('<div id ="choix_message_' + conv + '" class="d-flex align-items-center flex-column">');
                    for (var p = 0; p < Data_Contact[k].Echange[key].length; p++) {
                        document.write(
                            '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-center bg-warning rounded">' + Data_Contact[k].Echange[key][p] + '</div>'
                        );
                    }
                    document.write("</div>");
                    break;
                } else {
                    break;
                }
            }
        }

        document.write(
            '</div>' +
            '</div>' +
            '</div>'
        );
    }

    // Create the input text part
    document.getElementById('Echange_Contact').innerHTML +=
        '<div id="Zone_de_saisie" class="Zone_de_saisie bg-dark">' +
        '<div class="input-group">' +
        '<input id="input_text" type="text" class="form-control" placeholder="..." aria-label="Recipient s text message"' +
        'aria-describedby="button-addon2">' +
        '<div class="input-group-append">' +
        '<button class="btn btn-outline-secondary" type="button" id="button-addon2">Send</button>' +
        '</div>' +
        '</div>' +
        '</div>'


    document.getElementById('Messagerie').innerHTML +=
        '</div>' +
        '</div>';

    // Create a timer
    function timer(ms) {
        return new Promise(res => setTimeout(res, ms));
    }

    k = 0;
    let id = 'ajout_message_' + Data_Contact[k].Ref;

    // Write every message of active conversation
    // Display according to the letter
    for (var key in Data_Contact[k].Echange) {

        // Wait 3 sec to display the next message
        await timer(3000);
        if (key.substr(0, 1) == 'M') {
            document.getElementById(id).innerHTML +=
                '<div class="d-flex align-items-start flex-column">' +
                '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-left bg-secondary rounded">' + Data_Contact[k].Echange[key] +
                '</div>' +
                '</div>'
            Data_Contact[k].Etape_Conv += 1;
        }
        else if (key.substr(0, 1) == 'O') {
            document.getElementById(id).innerHTML +=
                '<div class="d-flex align-items-start flex-column">' +
                '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-left bg-success rounded">' + Data_Contact[k].Echange[key] +
                '</div>' +
                '</div>'
            Data_Contact[k].Etape_Conv += 1;
        }
        else if (key.substr(0, 1) == 'N') {
            document.getElementById(id).innerHTML +=
                '<div class="d-flex align-items-end flex-column">' +
                '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-right bg-white rounded">' + Data_Contact[k].Echange[key] +
                '</div>' +
                '</div>'
            Data_Contact[k].Etape_Conv += 1;
        }
        else if (key.substr(0, 1) == 'Q') {
            var e = Data_Contact[k].Echange[key];
            var conv = Data_Contact[k].Ref;
            Data_Contact[k].Etape_Conv += 1;
            document.getElementById("ajout_message_" + conv).innerHTML +=
                '<div class="d-flex align-items-start flex-column">' +
                '<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-left bg-secondary rounded">' + e +
                '</div>' +
                '</div>';
        }
        else if(key.substr(0, 1) == 'R'){
            var conv = Data_Contact[k].Ref;
            Data_Contact[k].Etape_Conv+=1;
            var mess = '<div id ="choix_message_' + conv +'" class="d-flex align-items-center flex-column">';
            for(var p = 0;p<Data_Contact[k].Echange[key].length;p++){
              mess+='<div class="Text_Conv p-2 bd-highlight d-inline-flex px-3 mb-1 text-center bg-warning rounded">' + Data_Contact[k].Echange[key][p] + '</div>';
              }
             mess+="</div>";
             document.getElementById(id).innerHTML += mess;
            break;
        } else {
            break;
        }

    }

}
