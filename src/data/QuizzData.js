const DATAS = [{
    title: "Burger Quizz",
    id: "1",
    questions: [
        {
            title: "Que veulent dire les chiffres au fond des verres de cantine ?",
            answers: [
                'C’est l’âge que vous avez et le plus jeune va chercher l’eau.', 'C’est la note que vous aurez à l’interro de cet après-midi.','C’est le nombre de filles avec qui vous sortirez dans la vie.', "On sait pas, ça reste un mystère mais on est tous sur le coup…"
            ],
            correct:"On sait pas, ça reste un mystère mais on est tous sur le coup…"
        },
        {
            title: "Si on avait persuadé Elvis Presley et Bob Marley de s'accoupler, on aurait pu obtenir :",
            answers: [
                'Elvis Marley, le rasta king.', 'Une baleine blanche avec des dreads.','Des tubes comme « Spliff me tender » ou « Could you be cruel »', "Oui mais alors on dit n’importe quoi et toutes les réponses sont possibles."
            ],
            correct:"Oui mais alors on dit n’importe quoi et toutes les réponses sont possibles."
        },
        {
            title: "Selon la légende, pourquoi la ligne ferroviaire Moscou - St Petersbourg fait-elle un détour de 17km ?",
            answers: [
                'Parce que les ouvriers étaient bourrés.', 'Parce que le froid a tordu les rails.','Parce que le Tsar avait laissé un doigt dépasser de sa règle.', "Parce qu’avant il y avait un village qui a disparu depuis."
            ],
            correct:"Parce que le Tsar avait laissé un doigt dépasser de sa règle."
        },
        {
            title: "Quel est le vice caché de Sherlock Holmes",
            answers: [
                'Il est zoophile.', 'Il est pigiste au Figaro.','Il est cocaïnomane.', "Il mange ses crottes de nez."
            ],
            correct:"Il est cocaïnomane."
        },
        {
            title: "Quand la série Derrick s'est arrêtée, son scénariste avait :",
            answers: [
                '74 ans.', '84 ans.','94 ans.', "Honte."
            ],
            correct:"84 ans."
        },
        {
            title: "Quel est le cri de l'aigle Milan ?",
            answers: [
                'Il huit.', 'Il neuf.','Il dix.', "Il deux-cent-cinquante."
            ],
            correct:"Il huit."
        },
        {
            title: "Qui a dit: je vis mon quotidien au jour le jour ?",
            answers: [
                'Jacques Chirac, nu sur la terrasse du fort de Brégançon.', 'Jean-Jacques Goldman, passant faire un retrait à la SACEM.','Valéry Giscard-d’Estaing, avant de se coucher.', "Aziz du loft, avec 50 micros pour l’enregistrer."
            ],
            correct:"Aziz du loft, avec 50 micros pour l’enregistrer."
        },
        {
            title: "Laquelle de ces phrases contient toutes les lettres de l'alphabet ?",
            answers: [
                'Servez ce whisky aux petits juges blonds qui fument.', 'Goldorak a pété mon xylophone en peau de zèbre.','Zorro et Xéna la guerrière font du kung-fu au Quatar.', "Wolfgang a crié « AZTYPOQGFGMSXVBUUU!! »"
            ],
            correct:"Servez ce whisky aux petits juges blonds qui fument."
        },
        {
            title: "Quel tatouage Johnny Depp a-t-il sur le bras droit ?",
            answers: [
                'Un tatouage « Winona Forever ».', 'Un tatouage « Wine Forever » qui veut dire « ivrogne pour toujours ».','Un tatouage « Willow Forever ».', "Un tatouage « Oui-Go Forever », en hommage à la SNCF."
            ],
            correct:"Un tatouage « Wine Forever » qui veut dire « ivrogne pour toujours »."
        },
        {
            title: "A quel âge est mort ce bon vieux Mathusalem ?",
            answers: [
                '123 ans.', '578 ans.','969 ans', "Il est toujours vivant et aurait été aperçu au VIP ROOM de St Tropez l’été dernier."
            ],
            correct:"969 ans"
        }
    ]
   
}, {
    title: "N'Golo Kanté",
    id: "2",
    questions: [
        {
            title: "Quel numéro porte actuellement N’Golo avec son club de Chelsea ?",
            answers: [
                '1', '2','7', "4"
            ],
            correct:"7"
        },
        {
            title: "En quelle année débarque-t-il à Chelsea ?",
            answers: [
                '2014', '2015','2016', "2017"
            ],
            correct:"2016"
        },
        {
            title: "Au sein de quel club professionnel français a-t-il commencé sa carrière ?",
            answers: [
                'US Orléans', 'US Créteil','Le Red Star', "US Boulogne"
            ],
            correct:"US Boulogne"
        },
        {
            title: "Combien de Premier League a-t-il remporté à l’issue de la saison 2019-2020 ?",
            answers: [
                '1', '5','2', "4"
            ],
            correct:"2"
        },
        {
            title: "Quelle est son année de naissance ?",
            answers: [
                '1989', '1990','1991', "1992"
            ],
            correct:"1991"
        },
        {
            title: "A l’issue de l’année 2020, combien de sélection en EDF compte-t-il ?",
            answers: [
                '34', '44','54', "64"
            ],
            correct:"44"
        },
        {
            title: "Quel entraineur l’a dirigé à Leicester ?",
            answers: [
                'Claudio Ranieri', 'Marco Simone','Zinedine Zidane', "Ulrich Ramé"
            ],
            correct:"Claudio Ranieri"
        },
        {
            title: "Quelle compétition remporte Kanté en 2019 avec Chelsea ?",
            answers: [
                'La Cup', 'La Premier League','La Ligue des Champions', "La Ligue Europa"
            ],
            correct:"La Ligue Europa"
        },
        {
            title: "Combien de but a-t-il inscrit en Equipe de France à l’issue de l’année 2020 ?",
            answers: [
                '1', '2','3', "4"
            ],
            correct:"2"
        },
        {
            title: "NG a fait ses classes dans un club amateur de la région parisienne. Lequel ?",
            answers: [
                'Levallois-Perret', 'Issy les Moulineaux','JS Suresnes', "FC Boissy saint Léger"
            ],
            correct:"JS Suresnes"
        }
    ]
   
},
{
    title: "THOR",
    id: "3",
    questions: [
        {
            title: "Odin est le père de .... ?",
            answers: [
                'toutes choses', 'd Asgard','tous les univers', "d'Yggdrasil"
            ],
            correct:"toutes choses"
        },
        {
            title: "Qui est le compagnon gourmand de Thor ?",
            answers: [
                'Hogun', 'Fandral','Sif', "Volstagg"
            ],
            correct:"Volstagg"
        },
        {
            title: "Comment s’appelle le scientifique qui vient en aide à Jane Foster ?",
            answers: [
                'Abraham Erskine', 'Erik Selvig','Roger Dooley', "John Flynn"
            ],
            correct:"Erik Selvig"
        },
        {
            title: "De quelle origine est Loki ?",
            answers: [
                'Terrienne', 'Asgardienne','Dökkalfars', "Jotun"
            ],
            correct:"Jotun"
        },
        {
            title: "Qui est le roi de Jötunheim ?",
            answers: [
                'Algrim', 'Malekith','Raze', "Laufey"
            ],
            correct:"Laufey"
        },
        {
            title: "Que célèbre Asgard au début du film ?",
            answers: [
                'Le couronnement de Thor', 'L anniversaire d Odin','La fin de la Guerre Asgard-Jotunheim', "La création de Mjolnir"
            ],
            correct:"Le couronnement de Thor"
        },
        {
            title: "Dans Thor, sur quelle planète Laufey inflige t-il une sérieuse blessure à l’œil d'Odin ?",
            answers: [
                'Jötunheim', 'Midgard','Asgard', "Vanaheim"
            ],
            correct:"Jötunheim"
        },
        {
            title: "Pourquoi Thor se retrouve sur Terre ?",
            answers: [
                'Pour un voyage initiatique', "Parce qu'il s'est fait exilé par Odin",'Pour aller chercher Mjolnir perdu là-bas', "Pour aller chercher Loki"
            ],
            correct:"Parce qu'il s'est fait exilé par Odin"
        },
        {
            title: "Dans Thor, un Avenger fait sa première apparition. Lequel ?",
            answers: [
                'Wanda', 'Madame Web','The Punisher', "Hawkeye"
            ],
            correct:"Hawkeye"
        },
        {
            title: "Qui est Coulson ?",
            answers: [
                'Le directeur du S.H.I.E.L.D.', "Le Secrétaire d'État des États-Unis",'Un agent du S.H.I.E.L.D.', "Un agent du F.B.I."
            ],
            correct:"Un agent du S.H.I.E.L.D."
        }
    ]
   
},
{
    title: "Calcul mental",
    id: "4",
    questions: [
        {
            title: "1 + 1",
            answers: [
                '1', '2','3', "4"
            ],
            correct:"2"
        },
        {
            title: "1 + 2",
            answers: [
                '1', '2','3', "4"
            ],
            correct:"3"
        },
        {
            title: "4 + 2",
            answers: [
                '1', '2','6', "4"
            ],
            correct:"6"
        },
        {
            title: "8 + 8",
            answers: [
                '16', '2','3', "4"
            ],
            correct:"16"
        },
        {
            title: "1 - 1 + 1 - 1",
            answers: [
                '1', '0','3', "4"
            ],
            correct:"0"
        },
        {
            title: "1 + 1 + 1",
            answers: [
                '1', '2','3', "4"
            ],
            correct:"3"
        },
        {
            title: "2 + 2",
            answers: [
                '1', '2','3', "4"
            ],
            correct:"4"
        },
        {
            title: "0 + 0",
            answers: [
                '1', 'La tête à Toto','3', "4"
            ],
            correct:"La tête à Toto"
        },
        {
            title: "3 + 3 + 3",
            answers: [
                '1', '2','9', "4"
            ],
            correct:"9"
        },
        {
            title: "1 + 2 + 3",
            answers: [
                '1', '2','6', "4"
            ],
            correct:"6"
        }
    ]
   
}]

const QuizzData = {
    getDATAS () {
        return DATAS
    },
    getDATA(id) {
        return DATAS.find(q =>q.id === id)
    }
}
export default QuizzData