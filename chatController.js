module.exports = function(bot){
    bot.on('message',message => {
        var admin = message.author;
        var msg = message.content.toUpperCase();
        var prefix = '+';
    
        ////////////////////////////////////////////////////
        var botdefendtext = [
            'Amare gail dis na othello ke',
            'Aryanna magir pola ase to itare de na',
            'Shob dekhi khankir pola',
            'Bott madacchot bazi tui',
            'Tor mare hoga',
            'Gail dis na bhai',
            'Tomar hoga'
        ];
        var othello = [
            'Othello Bolla j',
            'Othello ke die hobe na',
            'Ita beda majhe majhe shera hoi jaee kemne jeno',
            'Othello kisse j',
            'Ita mair khabe amar thekeeke',
            'Ita bhala pola'
        ];
        var aryan = [
            'Itar shathe brawl kheltisi j ekhon',
            'Itar nak boro',
            'Aryanna koi tui tore gail dicche monee hoe dekh',
            'Itar pad e je gondho oidin dekhsilam obap',
            'Ita tempu ola',
            'Itare sudis na ita bainchod'
        ];
        var emon  = {
            emon01 : [
                'Emon ki obostha tomar',
                'Emon bhai ar poris na baji tui',
                'Emon Tumi amake chinteso na miya',
                'Emon I love you',
                'Emon kire tumi amake patta dao na keno',
                'Emon kitkat khawao',
                'Emon Bhalo aso?'
            ],
            emonkire : [
                'Ki emon chinteso na amake?',
                'Kire bolar ki ase ami detos arki chino na??',
                'Emon emon bhab kortese jeno amake chine na',
                'Ami ke bolo to dekhi'
            ],
            emongail : [
                'Emon gail ken dao bhai',
                'Shuno emon tomar theke ami eta expect kori nai',
                'Emon plz gail dio na',
                'Emon ami dei gail ebar',
                'Mukh kharap korio na emon'
            ],
            emonsana : [
                'Sana marodde na bhai',
                'Eto sana sana koro ken emon',
                'Tomar sanar bhoinere salam'
            ]
        } 
        ////////////////////////////////////////////////////

        ////////////////////////////////Emon /////////////////////
        if(admin === 402377069797048320){
            if(msg.indexOf('KIRE')>-1){
                message.channel.send(emon.emonkire[Math.floor(Math.random()*emon.emonkire.length)]);
            }
            else if(msg.indexOf('FUCK')>-1 || msg.indexOf('TORMARHOGA') || msg.indexOf('MADACCHOT') || msg.indexOf('MOTHERFUCKER')||msg.indexOf('BAAL')){
                message.channel.send(emon.emongail[Math.floor(Math.random()*emon.emongail.length)]);
            }
            else if(msg === 'SANA'){
                message.channel.send(emon.emonsana[Math.floor(Math.random()*emon.emonsana.length)]);
            }
            else {
                message.channel.send(emon.emon01[Math.floor(Math.random()*emon.emon01.length)]);
            }
        }

        if(msg === prefix+'ID'){
            message.channel.send(author);
        }

        if(msg === prefix+'YO'){
            message.channel.send("Whassup nigga");
        }
        else if(msg === prefix+'ADIL'){
            message.channel.send("Itar pasa choto :grin:");
        }
        else if(msg === prefix+'PLAY SONG'){
            message.channel.send("Soupin borhan er gaan chala");
            message.channel.send(";;play jadukor shironamhin");
        }
        else if(msg === prefix+'KI OBOSTHA'){
            message.channel.send(":unamused:");
        }
        else if(msg === prefix+'I LOVE YOU'){
            message.channel.send("Cholo chudi");
        }
        else if(msg === prefix+'HI'){
            message.channel.send("https://xvideos.com ekhane dhuk :yum:");
        }
        else if(msg === 'SUP'){
            message.channel.send("hey");
        }
        else if((msg === prefix + 'BUTTER')|| (msg === prefix + 'TAJWAR') || (msg === prefix + 'ABTAHI')){
            message.channel.send("Will I call my boss?");
        }
        else if(msg.indexOf(prefix)>-1){
            if(msg.indexOf('FUCK')>-1 && msg.indexOf('BOT')>-1){
                message.channel.send(botdefendtext[Math.floor(Math.random()*botdefendtext.length)]);
            }
            if(msg.indexOf('FUCK')>-1 && msg.indexOf('YOU')>-1){
                message.channel.send(botdefendtext[Math.floor(Math.random()*botdefendtext.length)]);
            }
            if(msg.indexOf('OTHELLO')>-1){
                message.channel.send(othello[Math.floor(Math.random()*othello.length)]);
            }
            if(msg.indexOf('ARYAN')>-1 || msg.indexOf('ARIYAN')>-1){
                message.channel.send(aryan[Math.floor(Math.random()*aryan.length)]);
            }
    
            if(msg.indexOf('GOOD NIGHT')>-1){
                message.channel.send("Good Night Bro");
            }
            
        }
    }); 
    
    bot.login(process.env.BOT_TOKEN);
}
