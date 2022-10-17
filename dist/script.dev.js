"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var OPE76 = function (nsp) {
  var params = {
    id: 751432,
    order: 1,
    excludedClubsIds: [// liste des clubs exclus du dispositif
    ],
    minDuration: 7,
    aplliedClubs: [{
      accom: "10013",
      // arc 1800
      dates: [{
        type: "PCDP",
        unitName: "Chambre | Vue imprenable	2 adultes et 1 enfant",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Vue imprenable | Communicante	2 adultes et 1 enfant",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Junior suite | Vue imprenable	4 pers",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre	2 pers",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre	2 adultes et 1 enfant",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Communicante	2 adultes et 1 enfant",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre	3 pers",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres	4 pers",
        range: [{
          start: "25-06-2022",
          end: "02-07-2022"
        }, {
          start: "16-07-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Vue Mont Blanc	2 pers",
        range: [{
          start: "25-06-2022",
          end: "02-07-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }, {
          start: "30-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Vue Mont Blanc	3 pers",
        range: [{
          start: "25-06-2022",
          end: "23-07-2022"
        }, {
          start: "30-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Coin nuit | Vue Mont Blanc	4 pers",
        range: [{
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }]
    }, {
      accom: "10083",
      //Avoriaz
      dates: [{
        type: "PCDP",
        unitName: "1 Chambre | Vue imprenable | suite	3 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre	2 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre Communicante	2 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Vue imprenable | PMR	2 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre	3 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Vue imprenable	3 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Vue	3 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | Vue	4 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Vue imprenable	2 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Vue	2 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Vue imprenable | Communicante	2 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Vue imprenable	3 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Vue imprenable | Communicante	3 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | PMR	4 pers",
        range: [{
          start: "02-07-2022",
          end: "30-07-2022"
        }]
      }]
    }, {
      accom: "10030",
      // les 2 alpes oréee
      dates: [{
        type: "PCDP",
        unitName: "Chambre | balcon	3 adultes et 1 enfant",
        range: [{
          start: "16-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | balcon	2 pers",
        range: [{
          start: "16-07-2022",
          end: "30-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | balcon	3 adultes et 1 enfant",
        range: [{
          start: "16-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre	2 pers",
        range: [{
          start: "16-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | balcon	3 pers",
        range: [{
          start: "16-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Vue | balcon	2 pers",
        range: [{
          start: "16-07-2022",
          end: "06-08-2022"
        }]
      }]
    }, {
      accom: "10040",
      // les ménuires neige et ciel
      dates: [{
        type: "PCDP",
        unitName: "1 Chambre | Vue imprenable | balcon	2 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 2 Chambres | Vue imprenable | balcon	5 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " Logement 2 Chambres | Vue imprenable | balcon	7 pers",
        range: [{
          start: "02-07-2022",
          end: "09-07-2022"
        }, {
          start: "30-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre	2 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre	2 adultes et 1 enfant",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 2 Chambres	4 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre | Vue imprenable	2 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 2 Chambres | Vue imprenable	5 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }]
    }, {
      accom: "10043",
      // les ménuires les bruyeres
      dates: [{
        type: "PCDP",
        unitName: "1 Chambre | Vue imprenable | balcon	2 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Vue imprenable | balcon | Communicante	3 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | balcon	2 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | balcon	3 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | balcon | Communicante	3 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Coin nuit | balcon	4 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Vue imprenable | balcon | PMR	2 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre	3 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Vue imprenable	2 pers",
        range: [{
          start: "09-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Vue imprenable	3 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }]
    }, {
      accom: "10045",
      dates: [{
        type: "LOC",
        unitName: "Studio | Vue | balcon	2 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | Vue | balcon	2 adultes et 2 enfants",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 2 Chambres | Vue | balcon	4 adultes et 2 enfants",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex 3 Chambres | Vue | balcon	6 adultes et 2 enfants",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | balcon	2 adultes et 2 enfants",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | Coin nuit | Vue | balcon	4 adultes et 2 enfants",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 2 Chambres | balcon	4 adultes et 2 enfants",
        range: [{
          start: "02-07-2022",
          end: "09-07-2022"
        }, {
          start: "16-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 2 Chambres | balcon | PMR	4 adultes et 2 enfants",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex 3 Chambres | Vue imprenable | balcon	6 adultes et 2 enfants",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | Vue imprenable | balcon	2 adultes et 2 enfants",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 2 Chambres | Vue imprenable | balcon	4 adultes et 2 enfants",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Studio | Coin nuit | Vue | balcon	2 adultes et 2 enfants",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }]
    }, {
      accom: "10050",
      // les saisies les embrumes
      dates: [{
        type: "LOC",
        unitName: "Studio | Vue	2 pers",
        range: [{
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre	4 à 6 pers",
        range: [{
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Studio | Vue | balcon	2 pers",
        range: [{
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }]
    }, {
      accom: "10051",
      // les embrumes pcdp
      dates: [{
        type: "PCDP",
        unitName: "1 Chambre | balcon	2 pers",
        range: [{
          start: "09-07-2022",
          end: "23-07-2022"
        }, {
          start: "30-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 1 Chambre | balcon	4 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 2 chambres | balcon	6 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Studio | Vue	2 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | PMR	2 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement 1 Chambre	4 à 6 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Vue imprenable | balcon	2 pers",
        range: [{
          start: "02-07-2022",
          end: "09-07-2022"
        }, {
          start: "16-07-2022",
          end: "23-07-2022"
        }, {
          start: "30-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Vue | balcon	2 pers",
        range: [{
          start: "02-07-2022",
          end: "09-07-2022"
        }, {
          start: "16-07-2022",
          end: "23-07-2022"
        }, {
          start: "30-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 1 Chambre | Vue | balcon	5 pers",
        range: [{
          start: "16-07-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 2 Chambres | Vue imprenable | balcon	6 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 2 Chambres | Vue | balcon	7 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Studio | Vue | balcon	2 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }]
    }, {
      accom: "10080",
      // praz
      dates: [{
        type: "PCDP",
        unitName: "1 Chambre | balcon	1 pers",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | balcon	4 pers",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre	2 pers",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | PMR	2 pers",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre	2 adultes et 1 enfant",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres	4 pers",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | PMR	4 pers",
        range: [{
          start: "25-06-2022",
          end: "09-07-2022"
        }, {
          start: "23-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | balcon	5 pers",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "3 Chambres | balcon	5 pers",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | terrasse	4 pers",
        range: [{
          start: "25-06-2022",
          end: "02-07-2022"
        }, {
          start: "23-07-2022",
          end: "30-07-2022"
        }]
      }]
    }, {
      accom: "10210",
      // orcières loc
      dates: [{
        type: "LOC",
        unitName: "Appartement 1 Chambre | Vue	4 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | Vue imprenable | balcon	4 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | Vue imprenable | balcon	5 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | Vue imprenable | balcon	6 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | Vue imprenable	4 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | Vue imprenable	5 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | Vue imprenable	6 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Studio | Vue imprenable	2 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }]
    }, {
      accom: "10211",
      // orcière pcdp
      dates: [{
        type: "PCDP",
        unitName: "Appartement 1 Chambre | Vue	4 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement 1 Chambre | Vue imprenable | balcon	4 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement 1 Chambre | Vue imprenable | balcon	5 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement 1 Chambre | Vue imprenable | balcon	6 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement 1 Chambre | Vue imprenable	4 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement 1 Chambre | Vue imprenable	5 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement 1 Chambre | Vue imprenable	6 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Studio | Vue imprenable	2 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }]
    }, {
      accom: "10500",
      // super besse
      dates: [{
        type: "PCDP",
        unitName: "Chambre | Vue imprenable | balcon	4 pers",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Coin nuit | Vue imprenable | balcon	4 pers",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 1 Chambre | Coin nuit | Vue imprenable | balcon	4 pers",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 1 Chambre | Vue imprenable | balcon	4 pers",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | balcon	2 pers",
        range: [{
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | balcon	4 pers",
        range: [{
          start: "25-06-2022",
          end: "09-07-2022"
        }, {
          start: "16-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Coin nuit | balcon	4 pers",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 1 Chambre | balcon	5 pers",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 2 Chambres | Coin nuit | balcon	6 pers",
        range: [{
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 1 Chambre | balcon	4 pers",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 1 Chambre | Coin nuit | balcon	4 pers",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 1 Chambre | Coin nuit	6 pers",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | PMR	3 pers",
        range: [{
          start: "25-06-2022",
          end: "06-08-2022"
        }]
      }]
    }, {
      accom: "10400",
      // gourette
      dates: [{
        type: "PCDP",
        unitName: "Logement Duplex 1 Chambre | 2 Coins nuit | balcon	8 adultes et 2 enfants",
        range: [{
          start: "02-07-2022",
          end: "23-07-2022"
        }, {
          start: "30-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre	2 pers",
        range: [{
          start: "02-07-2022",
          end: "16-07-2022"
        }, {
          start: "30-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | balcon	2 adultes et 1 enfant",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 1 Chambre | balcon | PMR	3 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 1 Chambre | balcon	3 adultes et 1 enfant",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 1 Chambre | balcon	4 adultes et 1 enfant",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 2 Chambres | balcon	4 pers",
        range: [{
          start: "09-07-2022",
          end: "16-07-2022"
        }, {
          start: "30-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 1 Chambre | balcon	5 adultes et 1 enfant",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre	2 pers",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 2 Chambres | balcon	6 adultes et 1 enfant",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 2 Chambres | balcon	7 adultes et 1 enfant",
        range: [{
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }]
    }, {
      accom: "12300",
      // belgodère
      dates: [{
        type: "LOC",
        unitName: "Bungalow 2 Chambres | terrasse | Climatisé	5 pers",
        range: [{
          start: "09-04-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow 2 Chambres | terrasse | Climatisé	6 pers",
        range: [{
          start: "09-04-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow Duplex 2 Chambres | terrasse | Climatisé	5 pers",
        range: [{
          start: "09-04-2022",
          end: "09-07-2022"
        }]
      }]
    }, {
      accom: "12301",
      // belgodère pcdp
      dates: [{
        type: "PCDP",
        unitName: "Bungalow 2 Chambres | terrasse | Climatisé	5 pers",
        range: [{
          start: "09-04-2022",
          end: "02-07-2022"
        }, {
          start: "16-07-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow 2 Chambres | terrasse | Climatisé	6 pers",
        range: [{
          start: "09-04-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre	2 pers",
        range: [{
          start: "09-04-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow 2 Chambres | Vue imprenable | terrasse | Front de mer | Climatisé	6 pers",
        range: [{
          start: "09-04-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow 2 Chambres | terrasse | Front de mer | Climatisé	6 pers",
        range: [{
          start: "09-04-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow Duplex 2 Chambres | terrasse | Climatisé	5 pers",
        range: [{
          start: "09-04-2022",
          end: "02-07-2022"
        }, {
          start: "16-07-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow Duplex 2 Chambres | Vue | terrasse | Climatisé	5 pers",
        range: [{
          start: "09-04-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow Duplex 2 Chambres | terrasse | Climatisé	6 pers",
        range: [{
          start: "09-04-2022",
          end: "02-07-2022"
        }, {
          start: "16-07-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow Duplex 2 Chambres | Vue imprenable | terrasse | Climatisé	6 pers",
        range: [{
          start: "09-04-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Vue imprenable	2 pers",
        range: [{
          start: "09-04-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Vue	2 pers",
        range: [{
          start: "09-04-2022",
          end: "02-07-2022"
        }, {
          start: "16-07-2022",
          end: "23-07-2022"
        }]
      }]
    }, {
      accom: "12310",
      dates: [{
        type: "LOC",
        unitName: "Bungalow 2 Chambres | terrasse | Climatisé	4 à 5 pers",
        range: [{
          start: "07-05-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow 3 Chambres | terrasse | Climatisé	6 pers",
        range: [{
          start: "07-05-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow 2 Chambres | terrasse | Front de mer | Climatisé	4 à 5 pers",
        range: [{
          start: "07-05-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow 2 Chambres | terrasse | Climatisé	5 pers",
        range: [{
          start: "07-05-2022",
          end: "23-07-2022"
        }, {
          start: "30-07-2022",
          end: "06-08-2022"
        }]
      }]
    }, {
      accom: "12311",
      dates: [{
        type: "PCDP",
        unitName: "Bungalow 2 Chambres | terrasse | jardin | Climatisé	4 à 5 pers",
        range: [{
          start: "07-05-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow 2 Chambres | terrasse | Climatisé	4 à 5 pers",
        range: [{
          start: "07-05-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow 2 Chambres | terrasse | Climatisé | PMR	4 à 5 pers",
        range: [{
          start: "07-05-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow 3 Chambres | terrasse | Climatisé	6 pers",
        range: [{
          start: "07-05-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow 2 Chambres | terrasse | Front de mer | Climatisé	4 à 5 pers",
        range: [{
          start: "07-05-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow 2 Chambres | terrasse | Climatisé	5 pers",
        range: [{
          start: "07-05-2022",
          end: "09-07-2022"
        }, {
          start: "16-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow 2 Chambres | Vue | terrasse | Climatisé	4 à 5 pers",
        range: [{
          start: "07-05-2022",
          end: "09-07-2022"
        }, {
          start: "23-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow 3 Chambres | terrasse | Front de mer | Climatisé	6 pers",
        range: [{
          start: "07-05-2022",
          end: "06-08-2022"
        }]
      }]
    }, {
      accom: "12320",
      dates: [{
        type: "PCDP",
        unitName: "Chambre | Vue imprenable | terrasse | Climatisé	2 pers",
        range: [{
          start: "16-04-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Vue imprenable | terrasse | Climatisé	3 pers",
        range: [{
          start: "16-04-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }, {
          start: "09-07-2022",
          end: "23-07-2022"
        }, {
          start: "30-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Vue imprenable | balcon	2 pers",
        range: [{
          start: "16-04-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }, {
          start: "09-07-2022",
          end: "23-07-2022"
        }, {
          start: "30-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Vue imprenable | balcon	3 pers",
        range: [{
          start: "16-04-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }, {
          start: "02-07-2022",
          end: "23-07-2022"
        }, {
          start: "30-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Vue imprenable | balcon	4 pers",
        range: [{
          start: "16-04-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre	2 pers",
        range: [{
          start: "16-04-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "23-07-2022"
        }, {
          start: "30-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Vue imprenable | terrasse | Front de mer | Climatisé	2 pers",
        range: [{
          start: "16-04-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "23-07-2022"
        }, {
          start: "30-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Vue | balcon	2 pers",
        range: [{
          start: "16-04-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "23-07-2022"
        }, {
          start: "30-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Vue imprenable	2 pers",
        range: [{
          start: "16-04-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "23-07-2022"
        }, {
          start: "30-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Vue balcon	3 pers",
        range: [{
          start: "16-04-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "23-07-2022"
        }, {
          start: "30-07-2022",
          end: "06-08-2022"
        }]
      }]
    }, {
      accom: "12410",
      dates: [{
        type: "LOC",
        unitName: "Appartement | Duplex | 1 Chambre | terrasse | Climatisé	5 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "1 Chambre  Terrasse | Climatisé	2 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow | 1 Chambre | terrasse | Climatisé	5 adultes et 1 enfant",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow Duplex | 1 Chambre | terrasse | Climatisé	5 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "16-07-2022"
        }]
      }]
    }, {
      accom: "12412",
      dates: [{
        type: "PCDP",
        unitName: "Appartement | Duplex | 1 Chambre | terrasse | Climatisé	5 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "02-07-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Climatisé	2 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Studio | terrasse | Climatisé	2 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "02-07-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement | 1 Chambre | terrasse PMR | Climatisé	4 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "02-07-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow | 1 Chambre | terrasse | Climatisé	5 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow | 1 Chambre | terrasse | Climatisé	5 adultes et 1 enfant",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "02-07-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement | 1 Chambre | Vue | terrasse | Climatisé	5 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "02-07-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement | 1 Chambre | terrasse | Climatisé	5 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "02-07-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | terrasse | Climatisé	2 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow Duplex |1 Chambre | terrasse | Climatisé	5 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "02-07-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }]
      }]
    }, {
      accom: "12420",
      dates: [{
        type: "PCDP",
        unitName: "2 Chambres | terrasse | Climatisé	4 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "23-04-2022",
          end: "02-07-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Duplex 3 Chambres | terrasse | Climatisé	6 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "23-04-2022",
          end: "02-07-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre	2 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "23-04-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | PMR	2 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "23-04-2022",
          end: "02-07-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres	4 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "23-04-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Duplex 2 Chambres	4 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "23-04-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | balcon | Climatisé	1 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "23-04-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | balcon | Climatisé	2 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "23-04-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | balcon | Climatisé	2 adultes et 1 enfant",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "23-04-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Duplex 2 Chambres | terrasse | Climatisé	4 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "23-04-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | terrasse	4 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "23-04-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | terrasse	2 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "23-04-2022",
          end: "16-07-2022"
        }]
      }]
    }, {
      accom: "12421",
      dates: [{
        type: "LOC",
        unitName: "Appartement 1 Chambre | terrasse | Climatisé	4 pers",
        range: [{
          start: "09-04-2022",
          end: "18-05-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | terrasse	4 pers",
        range: [{
          start: "09-04-2022",
          end: "18-05-2022"
        }, {
          start: "02-07-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex 1 Chambre | terrasse | Climatisé	4 pers",
        range: [{
          start: "09-04-2022",
          end: "18-05-2022"
        }, {
          start: "02-07-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex 1 Chambre | terrasse	4 pers",
        range: [{
          start: "09-04-2022",
          end: "18-05-2022"
        }, {
          start: "02-07-2022",
          end: "23-07-2022"
        }]
      }]
    }, {
      accom: "12435",
      dates: [{
        type: "PCDP",
        unitName: "2 Chambres | terrasse | Climatisé | LES PALMIERS	5 à 6 pers",
        range: [{
          start: "16-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement 1 Chambre | terrasse | Climatisé | LES PINS	4 à 5 pers",
        range: [{
          start: "16-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement 1 Chambre | terrasse | Communicante | Climatisé | LES PINS	4 à 5 pers",
        range: [{
          start: "16-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement 2 Chambres | terrasse | Climatisé | LES PINS	6 pers",
        range: [{
          start: "16-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement Duplex 2 Chambres | terrasse | Climatisé | LES PINS	6 pers",
        range: [{
          start: "16-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement Duplex 3 Chambres | terrasse | Climatisé | LES PINS	8 pers",
        range: [{
          start: "16-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre terrasse | Climatisé | LES PALMIERS	2 pers",
        range: [{
          start: "16-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Coin nuit | terrasse | Climatisé| LES PALMIERS	4 pers",
        range: [{
          start: "16-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | terrasse | Climatisé | LES PALMIERS	5 à 6 pers",
        range: [{
          start: "16-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Studio | terrasse | Climatisé | LES PINS	2 pers",
        range: [{
          start: "16-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement 3 Chambres | terrasse | climatisé | LES PINS	8 pers",
        range: [{
          start: "16-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }]
    }, {
      accom: "12436",
      dates: [{
        type: "LOC",
        unitName: "Appartement 1 Chambre | terrasse | Climatisé| LES PINS	4 à 5 pers",
        range: [{
          start: "16-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | terrasse | Communicante | Climatisé | LES PINS	4 à 5 pers",
        range: [{
          start: "16-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 2 Chambres | terrasse | Climatisé | LES PINS	6 pers",
        range: [{
          start: "16-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex 2 Chambres | terrasse | Climatisé | LES PINS	6 pers",
        range: [{
          start: "16-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex 3 Chambres | terrasse |Climatisé | LES PINS	8 pers",
        range: [{
          start: "16-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Studio | terrasse | Climatisé | LES PINS	2 pers",
        range: [{
          start: "16-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 3 Chambres | terrasse | climatisé | LES PINS	8 pers",
        range: [{
          start: "16-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "09-07-2022"
        }]
      }]
    }, {
      accom: "14507",
      dates: [{
        type: "PCDP",
        unitName: " 1 Chambre | Vue imprenable | terrasse | Climatisé	2 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 2 Chambres | Vue imprenable | terrasse | Climatisé	3 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre | terrasse | Climatisé	1 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre | terrasse | Climatisé	2 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre | Climatisé	1 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre | Climatisé	2 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre | Climatisé	3 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre | Vue | Climatisé	2 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre | Vue imprenable | Climatisé	2 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }]
    }, {
      accom: "12800",
      dates: [{
        type: "PCDP",
        unitName: "2 Chambres | Vue | balcon | Climatisé	4 pers",
        range: [{
          start: "09-04-2022",
          end: "07-05-2022"
        }, {
          start: "21-05-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow 1 Chambre | terrasse	2 pers",
        range: [{
          start: "09-04-2022",
          end: "07-05-2022"
        }, {
          start: "21-05-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre	1 pers",
        range: [{
          start: "09-04-2022",
          end: "07-05-2022"
        }, {
          start: "21-05-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre	2 pers",
        range: [{
          start: "09-04-2022",
          end: "07-05-2022"
        }, {
          start: "21-05-2022",
          end: "25-06-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | RDC	4 pers",
        range: [{
          start: "09-04-2022",
          end: "07-05-2022"
        }, {
          start: "21-05-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | balcon	4 pers",
        range: [{
          start: "09-04-2022",
          end: "07-05-2022"
        }, {
          start: "21-05-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | Vue | balcon	4 pers",
        range: [{
          start: "09-04-2022",
          end: "07-05-2022"
        }, {
          start: "21-05-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | balcon | Climatisé	4 pers",
        range: [{
          start: "09-04-2022",
          end: "07-05-2022"
        }, {
          start: "21-05-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow 1 Chambre | Vue | terrasse	2 pers",
        range: [{
          start: "09-04-2022",
          end: "07-05-2022"
        }, {
          start: "21-05-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow Duplex 1 Chambre | terrasse	2 pers",
        range: [{
          start: "09-04-2022",
          end: "07-05-2022"
        }, {
          start: "21-05-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }]
    }, {
      accom: "12801",
      dates: [{
        type: "LOC",
        unitName: "Appartement Bungalow 1 Chambre | Vue | terrasse	2 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Bungalow 2 Chambres | Vue | terrasse	4 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Bungalow Duplex 1 Chambre | terrasse	2 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Bungalow 1 Chambre | terrasse	2 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Bungalow Duplex 2 Chambres | terrasse	4 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Bungalow 2 Chambres | terrasse	4 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Bungalow Duplex 2 Chambres | terrasse	6 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Bungalow Duplex 3 Chambres | terrasse	6 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Bungalow Duplex 2 Chambres | terrasse	4 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }]
    }, {
      accom: "12820",
      dates: [{
        type: "LOC",
        unitName: "Bungalow 1 Chambre | terrasse	2 pers",
        range: [{
          start: "14-05-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "18-06-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow 2 Chambres | terrasse	4 adultes et 1 enfant",
        range: [{
          start: "14-05-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "18-06-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow 2 Chambres | terrasse	5 pers",
        range: [{
          start: "14-05-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "18-06-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow 2 Chambres | terrasse	5 pers",
        range: [{
          start: "14-05-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "18-06-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow 2 Chambres | terrasse | PMR	5 pers",
        range: [{
          start: "14-05-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "18-06-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow 2 Chambres | terrasse	4 pers",
        range: [{
          start: "14-05-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "18-06-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow Duplex 2 Chambres | terrasse	6 pers",
        range: [{
          start: "14-05-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "18-06-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow Duplex 2 Chambres | terrasse	6 pers",
        range: [{
          start: "14-05-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "18-06-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }]
    }, {
      accom: "12830",
      dates: [{
        type: "LOC",
        unitName: "Appartement 1 Chambre | Vue imprenable | terrasse | Front de mer | étage	4 pers",
        range: [{
          start: "18-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | terrasse | Front de mer | RDC	5 pers",
        range: [{
          start: "18-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Villa 2 Chambres | terrasse | jardin	7 pers",
        range: [{
          start: "18-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement  2 Chambres | terrasse | Front de mer | RDC	7 pers",
        range: [{
          start: "18-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Studio | Coin nuit | terrasse | étage	3 pers",
        range: [{
          start: "18-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | terrasse | étage	4 pers",
        range: [{
          start: "18-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | terrasse | RDC	4 ou 5 pers",
        range: [{
          start: "18-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | terrasse | PMR | RDC	5 pers",
        range: [{
          start: "18-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow 2 Chambres | terrasse	2 adultes et 2 enfants",
        range: [{
          start: "18-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement | 2 Chambres | terrasse | RDC	7 pers",
        range: [{
          start: "18-06-2022",
          end: "16-07-2022"
        }]
      }]
    }, {
      accom: "12840",
      dates: [{
        type: "PCDP",
        unitName: "Bungalow 1 Chambre | terrasse	4 pers",
        range: [{
          start: "09-04-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow 1 Chambre | terrasse	5 pers",
        range: [{
          start: "09-04-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow Duplex 2 Chambres | terrasse	6 à 7 pers",
        range: [{
          start: "09-04-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | balcon	2 pers",
        range: [{
          start: "09-04-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | balcon	4 pers",
        range: [{
          start: "09-04-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow 1 Chambre | terrasse | Climatisé	5 pers",
        range: [{
          start: "09-04-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow 1 Chambre | terrasse | Front de mer | Climatisé	5 pers",
        range: [{
          start: "09-04-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Bungalow Duplex 2 Chambres | terrasse | Front de mer | Climatisé	7 pers",
        range: [{
          start: "09-04-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | balcon | Climatisée	2 pers",
        range: [{
          start: "09-04-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Vue balcon | Climatisée	2 pers",
        range: [{
          start: "09-04-2022",
          end: "25-06-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Vue imprenable | balcon | Climatisée	2 pers",
        range: [{
          start: "09-04-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | Vue | balcon	4 pers",
        range: [{
          start: "09-04-2022",
          end: "25-06-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | balcon | PMR	2 pers",
        range: [{
          start: "09-04-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | balcon | PMR	4 pers",
        range: [{
          start: "09-04-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }]
    }, {
      accom: "12842",
      dates: [{
        type: "LOC",
        unitName: "Bungalow 1 Chambre | terrasse	3 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow 1 Chambre | terrasse	4 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "21-05-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow 1 Chambre | terrasse	5 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow Duplex 2 Chambres | terrasse	6 à 7 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "21-05-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow 1 Chambre | terrasse | Front de mer	5 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow Duplex 2 Chambres | terrasse | Front de mer	7 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "21-05-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow 1 Chambre | terrasse | PMR	4 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }]
    }, {
      accom: "12850",
      dates: [{
        type: "LOC",
        unitName: " Appartement 1 Chambre | terrasse	4 pers",
        range: [{
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: " Appartement 2 Chambres | terrasse	6 pers",
        range: [{
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: " Appartement 1 Chambre | Vue imprenable | balcon	4 pers",
        range: [{
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: " Appartement 1 Chambre | balcon	4 pers",
        range: [{
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: " Appartement 1 Chambre | terrasse	4 pers",
        range: [{
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: " Appartement 2 Chambres | balcon	6 pers",
        range: [{
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: " Appartement 2 Chambres | terrasse	6 pers",
        range: [{
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: " Appartement 1 Chambre | Vue | balcon	4 pers",
        range: [{
          start: "30-04-2022",
          end: "21-05-2022"
        }, {
          start: "28-05-2022",
          end: "09-07-2022"
        }]
      }]
    }, {
      accom: "12852",
      dates: [{
        type: "LOC",
        unitName: "Studio | Coin nuit | Terrasse | Climatisé	4 pers",
        range: [{
          start: "07-05-2022",
          end: "21-05-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex | 1 Chambre | Coin nuit | Terrasse | Climatisé	6 pers",
        range: [{
          start: "07-05-2022",
          end: "21-05-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Studio | Coin nuit | Balcon | Climatisé	4 pers",
        range: [{
          start: "07-05-2022",
          end: "21-05-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Studio | Coin nuit | Climatisé	4 pers",
        range: [{
          start: "07-05-2022",
          end: "21-05-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex | 1 Chambre | Coin nuit | Climatisé	6 pers",
        range: [{
          start: "07-05-2022",
          end: "21-05-2022"
        }]
      }]
    }, {
      accom: "12853",
      dates: [{
        type: "PCDP",
        unitName: "Appartement | 2 Chambres | Vue imprenable | Rooftop | Climatisé	6 pers",
        range: [{
          start: "07-05-2022",
          end: "14-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Studio | Coin nuit | Terrasse | Climatisé	4 pers",
        range: [{
          start: "07-05-2022",
          end: "14-06-2022"
        }, {
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement Duplex | 1 Chambre | Coin nuit | Terrasse | Climatisé	6 pers",
        range: [{
          start: "07-05-2022",
          end: "14-06-2022"
        }, {
          start: "02-07-2022",
          end: "06-08-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Studio | Coin nuit | Balcon | Climatisé	4 pers",
        range: [{
          start: "07-05-2022",
          end: "14-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Studio | Coin nuit | Climatisé	4 pers",
        range: [{
          start: "07-05-2022",
          end: "14-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement | Duplex | 1 Chambre | Coin nuit | Climatisé	6 pers",
        range: [{
          start: "07-05-2022",
          end: "14-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement | 2 Chambres | Coin nuit | Terrasse | PMR | Climatisé	6 pers",
        range: [{
          start: "07-05-2022",
          end: "14-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement | Duplex | 1 Chambre | Coin nuit | Rooftop | Climatisé	6 pers",
        range: [{
          start: "07-05-2022",
          end: "14-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }]
    }, {
      accom: "12900",
      dates: [{
        type: "LOC",
        unitName: "Bungalow 2 Chambres | Vue | terrasse	5 pers",
        range: [{
          start: "09-04-2022",
          end: "30-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "28-05-2022",
          end: "04-06-2022"
        }, {
          start: "18-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow 2 Chambres | Vue | terrasse	6 pers",
        range: [{
          start: "09-04-2022",
          end: "30-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "28-05-2022",
          end: "04-06-2022"
        }, {
          start: "18-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Studio | terrasse	2 pers",
        range: [{
          start: "09-04-2022",
          end: "30-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "28-05-2022",
          end: "04-06-2022"
        }, {
          start: "18-06-2022",
          end: "02-07-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | balcon | etage	4 pers",
        range: [{
          start: "09-04-2022",
          end: "30-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "28-05-2022",
          end: "04-06-2022"
        }, {
          start: "18-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow 1 Chambre | terrasse	4 pers",
        range: [{
          start: "09-04-2022",
          end: "30-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "28-05-2022",
          end: "04-06-2022"
        }, {
          start: "18-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow 2 Chambres | terrasse	5 pers",
        range: [{
          start: "09-04-2022",
          end: "30-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "28-05-2022",
          end: "04-06-2022"
        }, {
          start: "18-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow 2 Chambres | terrasse	6 pers",
        range: [{
          start: "09-04-2022",
          end: "30-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "28-05-2022",
          end: "04-06-2022"
        }, {
          start: "18-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Bungalow 3 Chambres | terrasse	7 pers",
        range: [{
          start: "09-04-2022",
          end: "30-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "28-05-2022",
          end: "04-06-2022"
        }, {
          start: "18-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | terrasse	5 pers",
        range: [{
          start: "09-04-2022",
          end: "30-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "28-05-2022",
          end: "04-06-2022"
        }, {
          start: "18-06-2022",
          end: "16-07-2022"
        }]
      }]
    }, {
      accom: "12060",
      dates: [{
        type: "PCDP",
        unitName: "2 Chambres | PMR	4 pers",
        range: [{
          start: "09-04-2022",
          end: "30-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Duplex 3 Chambres	6 pers",
        range: [{
          start: "09-04-2022",
          end: "30-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre	2 pers",
        range: [{
          start: "09-04-2022",
          end: "30-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | PMR	2 pers",
        range: [{
          start: "09-04-2022",
          end: "30-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Duplex 2 Chambres	3 pers",
        range: [{
          start: "09-04-2022",
          end: "30-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Duplex 2 Chambres	4 pers",
        range: [{
          start: "09-04-2022",
          end: "30-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Duplex 3 Chambres	5 pers",
        range: [{
          start: "09-04-2022",
          end: "30-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }]
    }, {
      accom: "12090",
      dates: [{
        type: "PCDP",
        unitName: "Chambre | Vue imprenable | balcon	2 pers",
        range: [{
          start: "09-04-2022",
          end: "07-05-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Vue imprenable | balcon	3 pers",
        range: [{
          start: "09-04-2022",
          end: "07-05-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Vue imprenable	2 pers",
        range: [{
          start: "09-04-2022",
          end: "07-05-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Vue imprenable | PMR	2 pers",
        range: [{
          start: "09-04-2022",
          end: "07-05-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Vue imprenable	3 pers",
        range: [{
          start: "09-04-2022",
          end: "07-05-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre	2 pers",
        range: [{
          start: "09-04-2022",
          end: "07-05-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre	3 pers",
        range: [{
          start: "09-04-2022",
          end: "07-05-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | balcon	2 pers",
        range: [{
          start: "09-04-2022",
          end: "07-05-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | Communicante	2 pers",
        range: [{
          start: "09-04-2022",
          end: "07-05-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }]
    }, {
      accom: "12121",
      dates: [{
        type: "PCDP",
        unitName: "Studio | Vue Mer | CASTEL	2 pers",
        range: [{
          start: "21-05-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement 2 Chambres | Vue Mer | CASTEL	4 ou 6 pers",
        range: [{
          start: "21-05-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement 2 Chambres | terrasse | PENNTI	4 adultes et 1 enfant",
        range: [{
          start: "21-05-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement Duplex 3 Chambres | Coin nuit | terrasse | PENNTI	6 adultes et 1 enfant",
        range: [{
          start: "21-05-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Studio | CASTEL	2 pers",
        range: [{
          start: "21-05-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement 1 Chambre | terrasse | PENNTI	2 pers",
        range: [{
          start: "21-05-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement 2 Chambres | CASTEL | PMR	4 pers",
        range: [{
          start: "21-05-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement 2 Chambres | CASTEL	4 ou 6 pers",
        range: [{
          start: "21-05-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Chambre | terrasse | PENNTI	2 adultes et 1 enfant",
        range: [{
          start: "21-05-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement 2 Chambres | balcon | PENNTI	4 adultes et 1 enfant",
        range: [{
          start: "21-05-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement 2 Chambres | balcon | PMR | PENNTI	4 adultes et 1 enfant",
        range: [{
          start: "21-05-2022",
          end: "04-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }]
    }, {
      accom: "12750",
      dates: [{
        type: "LOC",
        unitName: "Appartement 1 Chambre | Coin nuit | terrasse | RDC DUNE	3 pers",
        range: [{
          start: "16-04-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Studio | coin nuit | terrasse | FORET	2 adultes et 2 enfants",
        range: [{
          start: "16-04-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | Coin nuit | terrasse | FORET	5 pers",
        range: [{
          start: "16-04-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Studio | Coin nuit | balcon | TOUR	2 pers",
        range: [{
          start: "16-04-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Studio | Coin nuit | balcon | FORET	3 pers",
        range: [{
          start: "16-04-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Studio | TOUR	4 pers",
        range: [{
          start: "16-04-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Studio | Coin nuit | balcon | FORET	4 pers",
        range: [{
          start: "16-04-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement | 1 Chambre | terrasse | rdc | FORET	4 pers",
        range: [{
          start: "16-04-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | Vue imprenable | balcon | TOUR	4 pers",
        range: [{
          start: "16-04-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex 1 Chambre | Vue imprenable | balcon | TOUR	3 pers",
        range: [{
          start: "16-04-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 2 Chambres | Vue imprenable | balcon | TOUR	5 pers",
        range: [{
          start: "16-04-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 2 Chambres | balcon | ETAGE DUNE	3 adultes et 2 enfants",
        range: [{
          start: "16-04-2022",
          end: "09-07-2022"
        }]
      }]
    }, {
      accom: "12751",
      dates: [{
        type: "PCDP",
        unitName: "Appartement 2 Chambres | terrasse | RDC DUNE	3 adultes et 2 enfants",
        range: [{
          start: "16-04-2022",
          end: "04-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Studio | coin nuit | terrasse | FORET	2 adultes et 2 enfants",
        range: [{
          start: "16-04-2022",
          end: "04-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Studio | PMR	3 pers",
        range: [{
          start: "16-04-2022",
          end: "04-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Studio | Coin nuit | balcon | FORET	3 pers",
        range: [{
          start: "16-04-2022",
          end: "04-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Studio | TOUR	4 pers",
        range: [{
          start: "16-04-2022",
          end: "04-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Studio | Coin nuit | balcon | FORET	4 pers",
        range: [{
          start: "16-04-2022",
          end: "04-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement | 1 Chambre | terrasse | rdc | FORET	4 pers",
        range: [{
          start: "16-04-2022",
          end: "04-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement Duplex 1 Chambre | Coin nuit | terrasse | FORET	5 pers",
        range: [{
          start: "16-04-2022",
          end: "04-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Studio | Vue imprenable | balcon | TOUR	2 pers",
        range: [{
          start: "16-04-2022",
          end: "04-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement 1 Chambre | Vue imprenable | balcon | TOUR	4 pers",
        range: [{
          start: "16-04-2022",
          end: "04-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }]
    }, {
      accom: "12200",
      dates: [{
        type: "LOC",
        unitName: "Appartement Duplex 1 Chambre | terrasse | jardin | Cyprès	4 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex 2 Chambres | terrasse | jardin | Cyprès	6 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex 1 Chambre | terrasse | Cyprès	4 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 2 Chambres | terrasse | Acacias	3 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 2 Chambres | terrasse | Acacias	4 à 5 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 2 Chambres | terrasse | PMR | Acacias	5 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 2 Chambres | terrasse | Acacias	6 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 3 Chambres | terrasse | Acacias	8 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Chalet non rénové 2 Chambres | terrasse	4 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 2 Chambres | terrasse | jardin | Cyprès	6 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex 2 Chambres | terrasse | Acacias	4 à 6 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Studio | terrasse | Cyprès	2 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex 3 Chambres | terrasse | Cyprès	8 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex 2 Chambres | terrasse | Cyprès	6 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | terrasse | Cyprès	4 pers",
        range: [{
          start: "09-04-2022",
          end: "23-04-2022"
        }, {
          start: "30-04-2022",
          end: "02-07-2022"
        }]
      }]
    }, {
      accom: "12202",
      dates: [{
        type: "PCDP",
        unitName: "Appartement Duplex 1 Chambre | terrasse | jardin | Cyprès	4 pers",
        range: [{
          start: "09-04-2022",
          end: "30-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement Duplex 2 Chambres | terrasse | jardin | Cyprès	6 pers",
        range: [{
          start: "09-04-2022",
          end: "30-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "25-06-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement Duplex 1 Chambre | terrasse | Cyprès	4 pers",
        range: [{
          start: "09-04-2022",
          end: "30-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Appartement 2 Chambres | terrasse | jardin | Cyprès	6 pers",
        range: [{
          start: "09-04-2022",
          end: "30-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "25-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }]
    }, {
      accom: "12500",
      dates: [{
        type: "PCDP",
        unitName: "1 Chambre | Vue imprenable	2 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "02-07-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | Vue imprenable	4 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "09-07-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | Vue	5 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "09-07-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "3 Chambres | Vue	6 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "02-07-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre	2 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "02-07-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | Coin nuit | PMR	3 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "09-07-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | Vue	3 adultes et 1 enfant",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "02-07-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | Vue imprenable	5 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "09-07-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "2 Chambres | Vue imprenable	4 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "09-07-2022"
        }, {
          start: "28-05-2022",
          end: "11-06-2022"
        }]
      }]
    }, {
      accom: "12600",
      dates: [{
        type: "PCDP",
        unitName: " 2 Chambres | terrasse | Climatisé	5 pers",
        range: [{
          start: "11-06-2022",
          end: "18-06-2022"
        }, {
          start: "25-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 2 Chambres | terrasse | PMR | Climatisé	5 pers",
        range: [{
          start: "11-06-2022",
          end: "18-06-2022"
        }, {
          start: "25-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 3 Chambres | terrasse | Climatisé	6 pers",
        range: [{
          start: "11-06-2022",
          end: "18-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 3 Chambres | terrasse | PMR | Climatisé	6 pers",
        range: [{
          start: "11-06-2022",
          end: "18-06-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre | terrasse	2 pers",
        range: [{
          start: "11-06-2022",
          end: "18-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 2 Chambres | terrasse	4 pers",
        range: [{
          start: "11-06-2022",
          end: "18-06-2022"
        }, {
          start: "25-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre | terrasse	2 pers",
        range: [{
          start: "11-06-2022",
          end: "18-06-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 2 Chambres | terrasse | PMR	3 pers",
        range: [{
          start: "11-06-2022",
          end: "18-06-2022"
        }, {
          start: "25-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 3 Chambres | terrasse	6 pers",
        range: [{
          start: "11-06-2022",
          end: "18-06-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }]
    }, {
      accom: "12620",
      dates: [{
        type: "LOC",
        unitName: "Appartement Duplex 1 Chambre | Coin nuit | terrasse | FORET	6 pers",
        range: [{
          start: "25-05-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Studio Duplex | Coin nuit | terrasse | PMR | FORET	4 pers",
        range: [{
          start: "25-05-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex 1 Chambre | Coin nuit | FORET	5 pers",
        range: [{
          start: "25-05-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Chalet 2 Chambres | FORET	4 pers",
        range: [{
          start: "25-05-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex 1 Chambre | Coin nuit | terrasse | FORET	5 pers",
        range: [{
          start: "25-05-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex 1 Chambre | Coin nuit | terrasse | FORET	6 pers",
        range: [{
          start: "25-05-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Studio Duplex | Coin nuit | terrasse | PMR | FORET	4 pers",
        range: [{
          start: "25-05-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex 1 Chambre | Coin nuit | FORET	5 pers",
        range: [{
          start: "25-05-2022",
          end: "02-07-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Chalet 2 Chambres | FORET	4 pers",
        range: [{
          start: "25-05-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex 1 Chambre | Coin nuit | terrasse | FORET	5 pers",
        range: [{
          start: "25-05-2022",
          end: "16-07-2022"
        }]
      }]
    }, {
      accom: "12621",
      dates: [{
        type: "LOC",
        unitName: "Studio | terrasse | 1ère ligne Mer	2 pers",
        range: [{
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | terrasse | 1ère ligne Mer	5 pers",
        range: [{
          start: "25-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex 1 Chambre | Coin nuit | terrasse | 1ère ligne Mer	4 pers",
        range: [{
          start: "25-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 2 Chambres | terrasse | 1ère ligne Mer	6 pers",
        range: [{
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Studio | terrasse 	2 pers",
        range: [{
          start: "25-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | terrasse 	5 pers",
        range: [{
          start: "25-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | terrasse | PMR 	5 pers",
        range: [{
          start: "25-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex 1 Chambre | Coin nuit | animé	4 pers",
        range: [{
          start: "25-06-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 2 Chambres | terrasse 	6 pers",
        range: [{
          start: "25-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement Duplex 1 Chambre | Coin nuit | terrasse 	4 pers",
        range: [{
          start: "25-06-2022",
          end: "16-07-2022"
        }]
      }]
    }, {
      accom: "12622",
      dates: [{
        type: "PCDP",
        unitName: "Logement 2 Chambres | Vue imprenable | terrasse | Climatisé	6 pers",
        range: [{
          start: "16-04-2022",
          end: "11-06-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | balcon | Climatisé	2 pers",
        range: [{
          start: "16-04-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 1 Chambre | terrasse	4 pers",
        range: [{
          start: "16-04-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 1 Chambre | terrasse	5 pers",
        range: [{
          start: "16-04-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "1 Chambre | balcon	2 pers",
        range: [{
          start: "16-04-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 1 Chambre | coin nuit | terrasse	3 pers",
        range: [{
          start: "16-04-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: "Logement 2 Chambres | terrasse | PMR	6 pers",
        range: [{
          start: "16-04-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }]
    }, {
      accom: "12623",
      dates: [{
        type: "LOC",
        unitName: "Appartement 2 Chambres | Vue imprenable | terrasse | Climatisé	6 pers",
        range: [{
          start: "16-04-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "28-05-2022"
        }, {
          start: "04-06-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | terrasse	4 pers",
        range: [{
          start: "16-04-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "28-05-2022"
        }, {
          start: "04-06-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | terrasse	5 pers",
        range: [{
          start: "16-04-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "28-05-2022"
        }, {
          start: "04-06-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 2 Chambres | terrasse | PMR	6 pers",
        range: [{
          start: "16-04-2022",
          end: "14-05-2022"
        }, {
          start: "21-05-2022",
          end: "28-05-2022"
        }, {
          start: "04-06-2022",
          end: "11-06-2022"
        }]
      }]
    }, {
      accom: "14450",
      dates: [{
        type: "PCDP",
        unitName: " 1 Chambre | Vue imprenable | terrasse | Climatisé	2 pers",
        range: [{
          start: "09-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }, {
          start: "09-07-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " Duplex 2 Chambres | Coin nuit | Vue imprenable | terrasse | Climatisé	7 pers",
        range: [{
          start: "09-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre | Climatisé	2 pers",
        range: [{
          start: "09-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " Duplex 1 Chambre | Coin nuit | Climatisé	3 pers",
        range: [{
          start: "09-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "09-07-2022"
        }, {
          start: "16-07-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre	2 pers",
        range: [{
          start: "09-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }, {
          start: "09-07-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 2 Chambres | Vue imprenable | terrasse | Climatisé	3 pers",
        range: [{
          start: "09-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }, {
          start: "09-07-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 3 Chambres | Vue | terrasse | Climatisé	4 pers",
        range: [{
          start: "09-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 2 Chambres | terrasse | Climatisé	3 pers",
        range: [{
          start: "09-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "02-07-2022"
        }, {
          start: "09-07-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 2 Chambres | Coin nuit | terrasse | Climatisé	5 pers",
        range: [{
          start: "09-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "16-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre | Vue imprenable | Climatisé	2 pers",
        range: [{
          start: "09-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 3 Chambres | Vue imprenable | terrasse	5 pers",
        range: [{
          start: "09-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre | Coin nuit | terrasse	4 pers",
        range: [{
          start: "09-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 2 Chambres | terrasse	3 pers",
        range: [{
          start: "09-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 2 Chambres | Coin nuit | terrasse	4 à 5 pers",
        range: [{
          start: "09-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 3 Chambres | terrasse	5 pers",
        range: [{
          start: "09-04-2022",
          end: "11-06-2022"
        }, {
          start: "25-06-2022",
          end: "23-07-2022"
        }]
      }]
    }, {
      accom: "14501",
      dates: [{
        type: "PCDP",
        unitName: " 2 Chambres | terrasse | Climatisé	4 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "11-06-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 3 Chambres | terrasse | Climatisé	6 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre | Climatisé	2 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre | balcon | Climatisé	3 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 2 Chambres | balcon | Climatisé	4 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "11-06-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre | PMR	2 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre | balcon	3 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "11-06-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " Duplex 2 chambres | balcon	4 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }, {
        type: "PCDP",
        unitName: " 1 Chambre | terrasse | Climatisé	2 pers",
        range: [{
          start: "09-04-2022",
          end: "16-04-2022"
        }, {
          start: "07-05-2022",
          end: "11-06-2022"
        }, {
          start: "02-07-2022",
          end: "09-07-2022"
        }]
      }]
    }, {
      accom: "14465",
      dates: [{
        type: "LOC",
        unitName: "Cottage 1 Chambre | Coin nuit | Vue imprenable | terrasse | Climatisé	2 adultes et 1 enfant",
        range: [{
          start: "09-04-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Cottage 1 Chambre | Coin nuit | terrasse | Climatisé	4 adultes et 1 enfant",
        range: [{
          start: "09-04-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Cottage Duplex 2 Chambres | Vue imprenable | terrasse | Climatisé	4 pers",
        range: [{
          start: "09-04-2022",
          end: "09-07-2022"
        }, {
          start: "16-07-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Appartement 1 Chambre | terrasse	2 pers",
        range: [{
          start: "09-04-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Studio Duplex | Coin nuit | terrasse	2 pers",
        range: [{
          start: "09-04-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Cottage 1 Chambre | Coin nuit | terrasse | PMR | Climatisé	4 pers",
        range: [{
          start: "09-04-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Cottage 1 Chambre | Coin nuit | terrasse | Climatisé	4 adultes et 1 enfant",
        range: [{
          start: "09-04-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Cottage Duplex 2 Chambres | terrasse | Climatisé	2 adultes et 2 enfants",
        range: [{
          start: "09-04-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Cottage Duplex 3 Chambres | terrasse | Climatisé	4 adultes et 2 enfants",
        range: [{
          start: "09-04-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Cottage Duplex 3 Chambres | terrasse | PMR | Climatisé	4 adultes et 2 enfants",
        range: [{
          start: "09-04-2022",
          end: "23-07-2022"
        }]
      }, {
        type: "LOC",
        unitName: "Studio Duplex | Coin nuit | terrasse | Climatisé	2 pers",
        range: [{
          start: "09-04-2022",
          end: "23-07-2022"
        }]
      }]
    }],
    texts: {
      accroche: "<strong>operation marketing 1:</strong>",
      mentions: " hello world",
      tag: "7 jours au prix de 6"
    },
    icon: {
      info: "<svg class=\"icon info\" height=\"30px\" viewBox=\"0 0 24 24\" width=\"30px\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"m12 1a11 11 0 1 0 11 11 11.013 11.013 0 0 0 -11-11zm0 20a9 9 0 1 1 9-9 9.011 9.011 0 0 1 -9 9z\"></path>\n          <path d=\"m12 9a1 1 0 0 0 -1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0 -1-1z\"></path>\n          <circle cx=\"12\" cy=\"7\" r=\"1\"></circle></svg>",
      promo: '<svg class="" xmlns="http://www.w3.org/2000/svg" class="" id="Capa_1" enable-background="new 0 0 512 512" height="30px" viewBox="0 0 512 512" width="30px"><g><path d="m232.655 178.763c1.561-46.238-9.66-113.157-46.416-149.585-17.526-17.369-38.682-25.648-62.909-24.616-21.93.925-43.667 10.635-62.859 28.079-4.087 3.715-4.389 10.04-.675 14.127 3.714 4.086 10.041 4.389 14.127.674 15.683-14.254 33.059-22.172 50.255-22.897 18.423-.788 34.572 5.55 47.981 18.84 30.113 29.845 42.041 89.159 40.504 134.717-.276 8.563-.816 17.388-1.481 26.281-17.675-24.308-41.529-46.172-69.921-63.95l-2.516-19.832c-1.009-7.93-5.051-14.995-11.384-19.895-6.33-4.897-14.185-7.041-22.113-6.029-16.379 2.09-28.006 17.105-25.92 33.464l2.517 19.834c-24.88 26.287-43.448 55.853-54.202 86.179-1.483-8.309-2.625-16.464-3.745-24.506-.782-5.615-1.591-11.42-2.502-17.17-3.367-21.201-.651-46.835 7.649-72.18 1.72-5.249-1.143-10.897-6.391-12.617-5.248-1.718-10.897 1.142-12.616 6.392-9.27 28.305-12.252 57.265-8.396 81.539.882 5.56 1.677 11.272 2.446 16.795 2.827 20.291 5.763 41.259 13.872 64.334-2.742 28.172 1.952 55.514 14.001 80.469 3.463 7.194 9.537 12.61 17.102 15.251.07.024.141.04.21.064 2.292 15.304 4.714 34.425 7.462 56.121 5.808 45.528 44.745 78.876 89.46 78.876 3.786 0 7.618-.239 11.471-.731 49.37-6.264 84.438-51.546 78.172-100.946l-7.131-55.993c.164-.105.332-.204.494-.313 6.667-4.454 11.189-11.221 12.731-19.036 6.483-32.518 1.926-65.697-13.149-96.931 1.649-18.197 3.293-36.909 3.872-54.809zm-133.138-20.304c2.137-2.183 3.158-5.224 2.775-8.255l-3.119-24.587c-.692-5.426 3.17-10.405 8.606-11.099.425-.054.849-.081 1.27-.081 2.19 0 4.309.722 6.075 2.088 2.105 1.629 3.449 3.972 3.782 6.596l3.118 24.581c.386 3.035 2.138 5.727 4.758 7.306 55.994 33.761 110.497 96.565 95.536 171.601-.51 2.581-2.01 4.818-4.224 6.297-2.221 1.484-4.875 2.018-7.448 1.511-5.378-1.076-8.879-6.328-7.801-11.716 5.759-28.927-.532-58.901-18.194-86.681-18.372-28.897-44.228-48.918-62.685-60.626-4.053-2.573-9.368-1.898-12.654 1.606-14.947 15.95-34.981 41.803-45.537 74.388-10.145 31.319-8.722 61.916 4.107 88.468 2.381 4.947.297 10.919-4.625 13.303-2.381 1.147-5.08 1.295-7.599.416-2.514-.877-4.528-2.668-5.676-5.052-33.247-68.856 3.789-143.329 49.535-190.064zm55.628 328.491c-38.42 4.899-73.662-22.392-78.565-60.826-2.606-20.57-4.921-38.848-7.128-53.894.843-.317 1.679-.662 2.501-1.058 14.845-7.189 21.103-25.128 13.944-40.002-26.7-55.262 12.468-111.042 32.378-134.209 25.064 17.455 76.931 61.672 64.954 121.827-3.239 16.194 7.3 32.004 23.518 35.247.792.156 1.585.272 2.378.364l6.872 53.967c4.879 38.456-22.417 73.708-60.852 78.584z"/><path d="m156.773 384.287c-.005 0-.009.001-.014.002l-28.877 3.684c-17.14 2.169-29.319 17.892-27.149 35.049 2.003 15.828 15.535 27.429 31.093 27.429 1.308 0 2.632-.083 3.962-.251l28.908-3.685c17.142-2.169 29.321-17.905 27.149-35.077-2.169-17.137-17.904-29.319-35.072-27.151zm5.402 42.387-28.908 3.685c-6.221.79-11.905-3.632-12.691-9.847-.786-6.216 3.617-11.911 9.827-12.697l28.879-3.685c6.229-.787 11.935 3.621 12.719 9.819.789 6.232-3.615 11.94-9.826 12.725z"/><path d="m384.123 387.975-28.887-3.686c-.003 0-.007-.001-.011-.001-17.15-2.17-32.878 10.01-35.044 27.129-1.068 8.289 1.175 16.516 6.318 23.165 5.142 6.648 12.539 10.887 20.818 11.934l28.898 3.687c1.327.168 2.645.25 3.95.25 15.533 0 29.083-11.595 31.125-27.43 2.17-17.156-10.022-32.878-27.167-35.048zm7.326 32.513c-.804 6.229-6.515 10.656-12.714 9.873l-28.897-3.687c-2.981-.377-5.651-1.915-7.518-4.33-1.869-2.416-2.687-5.388-2.299-8.393.724-5.719 5.623-9.91 11.256-9.91.471 0 .947.029 1.427.089l28.897 3.687c6.215.786 10.632 6.481 9.848 12.671z" /><path d="m32.746 86.723c1.429.714 2.947 1.052 4.446 1.052 3.68 0 7.23-2.042 8.986-5.553 2.47-4.94.468-10.948-4.473-13.418-4.94-2.471-10.947-.468-13.417 4.473l-.028.057c-2.47 4.94-.454 10.919 4.486 13.389z" /><path d="m501.952 114.065c-1.723-5.247-7.37-8.102-12.623-6.379-5.247 1.724-8.103 7.376-6.378 12.623 8.307 25.282 11.022 50.913 7.645 72.174-.91 5.746-1.719 11.552-2.501 17.166-1.119 8.034-2.26 16.181-3.741 24.481-10.758-30.325-29.327-59.881-54.206-86.155l2.516-19.826c1.01-7.919-1.132-15.764-6.032-22.092-4.9-6.329-11.964-10.37-19.887-11.378-7.932-1.014-15.795 1.138-22.133 6.055-6.325 4.909-10.352 11.974-11.335 19.861l-2.539 19.837c-28.385 17.781-52.236 39.643-69.911 63.947-.674-9.004-1.21-17.799-1.497-26.285-1.518-45.561 10.43-104.886 40.543-134.718 13.407-13.282 29.554-19.621 47.976-18.83 17.417.735 34.314 8.438 50.222 22.897 4.087 3.715 10.411 3.413 14.127-.674 3.714-4.087 3.412-10.412-.675-14.127-19.193-17.446-40.92-27.155-62.825-28.079-24.212-1.034-45.378 7.243-62.901 24.604-36.756 36.412-47.998 103.342-46.457 149.599.59 17.426 2.159 35.856 3.89 54.78-15.091 31.245-19.657 64.435-13.17 96.964 1.657 8.285 6.614 15.088 13.23 19.33l-7.107 56.006c-3.038 23.836 3.437 47.492 18.235 66.609 14.799 19.119 36.075 31.314 59.903 34.338 3.843.49 7.68.732 11.495.732 19.845 0 39.073-6.562 55.11-18.981 19.116-14.804 31.308-36.078 34.331-59.895l.084-.651c2.975-23.298 5.24-41.024 7.41-55.49 7.317-2.503 13.678-7.797 17.306-15.288 12.048-24.974 16.737-52.328 13.988-80.508 8.101-23.062 11.036-44.02 13.861-64.302.77-5.523 1.565-11.235 2.445-16.792 3.866-24.343.883-53.305-8.399-81.553zm-66.537 312.057c-2.351 18.523-11.846 35.076-26.736 46.607-14.894 11.535-33.299 16.585-51.834 14.221-18.531-2.351-35.084-11.847-46.61-26.738-11.526-14.892-16.574-33.301-14.209-51.843l6.849-53.972c.798-.092 1.597-.207 2.398-.365 16.208-3.241 26.76-19.051 23.523-35.239-12.009-60.167 39.875-104.379 64.949-121.831 19.899 23.171 59.048 78.958 32.384 134.202-7.195 14.861-.953 32.809 13.934 40.019.826.398 1.663.742 2.506 1.058-2.08 14.16-4.26 31.226-7.069 53.222zm26.633-77.608c-1.654 3.415-5.014 5.462-8.558 5.622-.001 0-.003 0-.004 0-1.584.071-3.205-.234-4.726-.965-4.941-2.393-7.017-8.356-4.622-13.303 12.821-26.565 14.236-57.16 4.09-88.479-10.554-32.58-30.575-58.434-45.513-74.385-1.948-2.081-4.612-3.165-7.303-3.165-1.844 0-3.701.509-5.351 1.555-18.465 11.706-44.335 31.728-62.708 60.628-17.662 27.78-23.945 57.756-18.17 86.689 1.075 5.377-2.439 10.629-7.807 11.703-5.376 1.059-10.625-2.45-11.7-7.822-14.953-74.996 39.55-137.808 95.542-171.583 2.615-1.578 4.367-4.264 4.754-7.294l3.151-24.614c.325-2.608 1.658-4.94 3.754-6.566 2.108-1.636 4.721-2.351 7.341-2.016 2.627.334 4.971 1.678 6.601 3.783 1.627 2.101 2.339 4.7 2.004 7.322l-3.118 24.581c-.384 3.032.639 6.073 2.777 8.257 45.748 46.713 82.793 121.175 49.566 190.052z" /><path d="m465.845 82.279c1.749 3.497 5.262 5.508 8.919 5.508 1.509 0 3.042-.342 4.485-1.064 4.94-2.47 6.928-8.506 4.458-13.446-2.471-4.941-8.48-6.943-13.417-4.473-4.941 2.47-6.943 8.477-4.473 13.418z"/></g></svg>'
    },
    dateRange: {
      start: "02-07-2022",
      end: "26-09-2022"
    }
  };
  var helpers = {
    formatName: function formatName(el) {
      // modifie le format d'un nom pour supprimer ce qui est inutile
      return el.replace(/[|\s\n\t'"’éàù-]*/gim, "").toLowerCase();
    },
    getEaTag: function getEaTag(paramsName) {
      // récupère la valeur du datalayer Eulerian
      var EA = Eulerian_data;
      var index = EA.findIndex(function (el) {
        return el == paramsName;
      });
      return EA[index + 1];
    },
    getClubList: function getClubList() {
      // récupère la liste des clubs
      return params.aplliedClubs.map(function (el) {
        return el.accom;
      });
    },
    getClubAccom: function getClubAccom(elemTosearch) {
      // récupère le code accom d'un club sur la page liste
      var id = elemTosearch.split("_")[1];
      return id;
    },
    historyChange: function historyChange() {
      history.pushState = function (f) {
        return function pushState() {
          var ret = f.apply(this, arguments);
          window.dispatchEvent(new Event("pushstate"));
          window.dispatchEvent(new Event("locationchange"));
          return ret;
        };
      }(history.pushState);

      history.replaceState = function (f) {
        return function replaceState() {
          var ret = f.apply(this, arguments);
          window.dispatchEvent(new Event("replacestate"));
          window.dispatchEvent(new Event("locationchange"));
          return ret;
        };
      }(history.replaceState);

      window.addEventListener("popstate", function () {
        window.dispatchEvent(new Event("locationchange"));
      });
    },
    getDate: function getDate(datas) {// récupère la date depuis le tag
    },
    htmlPastille: function htmlPastille(id) {
      // génère une pastille
      return "<div class=\"pubdi badge d-flex\" id=\"pastiche_".concat(id, "\"><div class=\"tag\">").concat(params.texts.tag, "</div></div>");
    },
    toggleModal: function toggleModal(elemClicked, elemToToggle) {
      // affiche le modal
      $(elemClicked).on("click", function () {
        if ($(elemToToggle).is(":visible")) {
          $(elemToToggle).hide();
        } else {
          $(elemToToggle).show();
        }
      });
    },
    isDateInrange: function isDateInrange(from, to, check) {
      //dateCheck("02/05/2021","02/09/2021","02/07/2021")
      var fDate, lDate, cDate;
      fDate = Date.parse(from);
      lDate = Date.parse(to);
      cDate = Date.parse(check);
      if (cDate <= lDate && cDate >= fDate) return true;
      return false;
    },
    dateToFrench: function dateToFrench(data) {
      // converti une date en français
      var arr = data.split("-");
      var newDate = arr[1] + "/" + arr[0] + "/" + arr[2];
      return newDate;
    },
    displayOffer: function displayOffer(accomToSearch) {
      var display = false; // vérifie si on affiche dans le tunnel l'opé ou non
      // vérifier la date départ

      var startD = helpers.getEaTag("prdparam-date-debut-sejour");

      if (startD === "path") {
        startD = helpers.getEaTag("prd1param-date-debut-sejour");
      } // vérifier la date retour


      var endD = helpers.getEaTag("prdparam-date-fin-sejour");

      if (endD === "path") {
        endD = helpers.getEaTag("prd1param-date-fin-sejour");
      } // console.log({ startD, endD });
      // on trouve toutes les dates


      var isInRangeStart = helpers.isDateInrange(helpers.dateToFrench(params.dateRange.start), helpers.dateToFrench(params.dateRange.end), helpers.dateToFrench(startD));
      var isInRangeEnd = helpers.isDateInrange(helpers.dateToFrench(params.dateRange.start), helpers.dateToFrench(params.dateRange.end), helpers.dateToFrench(endD));
      var formule = helpers.getEaTag("prdparam-formule");

      if (formule === "path") {
        formule = helpers.getEaTag("prd1param-formule");
      } // vérifier la durée


      var duration = helpers.getEaTag("prdparam-duree-de-sejour");

      if (duration === "path") {
        duration = helpers.getEaTag("prd1param-duree-de-sejour");
      } // on vérifie si le club est inclus dans l'offre


      var accomId = helpers.getEaTag("prdparam-accom");

      if (accomId === "path") {
        accomId = helpers.getEaTag("prd1param-accom");
      }

      if (parseInt(duration) >= params.minDuration && isInRangeStart && isInRangeEnd && !params.excludedClubsIds.includes(accomId)) {
        display = true;
      }

      return display;
    },
    htmlAds: function htmlAds() {
      // bannière à afficher sur la page liste
      var html = "<div class=\"field_item item_service row pubdi ads\"><div class=\"col-12 d-flex align-center\">".concat(params.icon.promo, " <span class=\"ml-1\">").concat(params.texts.accroche, "</span> <button href=\"#\" class=\"seeconds\" id=\"see").concat(params.id, "\" type=\"button\">Voir conditions</button><div></div>"); // const container = $("#resultArea");

      var count = $(".field_item");
      var container;

      if (count < params.order) {
        container = $(".field_item:eq(0)");
        container.before(html); // ajout du banner en haut de liste
      } else {
        container = $(".field_item:eq(".concat(params.order, ")"));
        container.after(html); // ajout du banner en haut de liste
      } // container.prepend(html); // ajout du banner en haut de liste


      helpers.htmlMention();
      helpers.toggleModal("#see".concat(params.id), "#nativeMentionsids".concat(params.id)); // toggle l'affichage des mentions
      // gestion de l'affichage de la pastille

      var elem = $(".field_item.item_service");
      elem.each(function () {
        // récupération de l'accom id
        var accomId = "";
        var accom = $(this).find(".club-info-title").attr("id");

        if (accom !== undefined) {
          accomId = helpers.getClubAccom(accom);
          console.log("helpers.getClubList()", helpers.getClubList(), accomId, helpers.getClubList().includes(accomId));
          var badgeContainer = $(this).find(".club-info-wrapper");

          if (helpers.getClubList().includes(accomId) && badgeContainer.find(".badge").length == 0) {
            // on affiche l'élément en question
            badgeContainer.prepend(helpers.htmlPastille(accomId));
          }
        }
      });
    },
    htmlBanner: function htmlBanner() {
      // bannière affichée sous la zapette
      var html = "<div class=\"row pubdi\" id=\"bannercarburant\"><div class=\"col-10 offset-1 accroche\" id=\"openMention".concat(params.id, "\">").concat(params.texts.accroche, " <span  class=\"openMention\">").concat(params.icon.info, "</span></div></div>");
      var heading = $(".club-search_title");
      var body = $("body");
      body.find(".club-search_title").addClass("mb-0");
      body.find(heading).after(html);
      helpers.htmlMention();
      helpers.toggleModal("#openMention".concat(params.id), "#nativeMentionsids".concat(params.id)); // toggle l'affichage des mentions
    },
    htmlMention: function htmlMention() {
      // mentions légales affichées en modal
      var zone = $("body");
      var modal = "<div class=\"pubdi modal-container-jo\" id=\"nativeMentionsids".concat(params.id, "\" style=\"display:none;\"><div class=\"modal\"><div class=\"close\" id=\"closeMentionsids").concat(params.id, "\">&times;</div><div class=\"modal-content p-1\"><div class=\"row d-flex pt-0 pr-0 pl-0 pb-1\" style=\"color:#484848; font-size:0.8rem;\" ><div class=\"col-10 offset-1 mt-1 pl-1 pr-1 text-left mentionfooter\">").concat(params.texts.mentions, "</div></div></div></div><div class=\"backdrop\" id=\"backdropId").concat(params.id, "\" ></div></div>");
      zone.append(modal);
      helpers.toggleModal("#closeMentionsids".concat(params.id), "#nativeMentionsids".concat(params.id)); // toggle l'affichage des mentions

      helpers.toggleModal("#backdropId".concat(params.id), "#nativeMentionsids".concat(params.id)); // toggle l'affichage des mentions
    },
    htmlTicket: function htmlTicket() {
      var zone = $(".reass");
      var html = "<div class=\" mt-1 mt-xs-0 pt-1 pb-1 pubdi nono\" style=\"\" id=\"nativeTicketous".concat(params.id, "\">\n                <div class=\"row d-flex pt-0 pr-0 pl-0\">\n                    <div class=\"d-flex justify-center align-center col-2\" style=\"\"> ").concat(params.icon.promo, " </div>\n                    <div class=\"col-10 pl-1 pr-1 text-left d-flex align-center \">\n                      <p class=\"d-inline justify-center\">").concat(params.texts.ticket, " <span class=\"ml-05\">").concat(params.icon.info, "</span></p>\n                    </div>\n                </div>\n            </div>");

      if ($("body").find(".pubdi.nono").length == 0) {
        zone.before(html);
        helpers.htmlMention();
        helpers.toggleModal("#nativeTicketous".concat(params.id), "#nativeMentionsids".concat(params.id)); // toggle l'affichage des mentions
      }
    },
    htmlBadge: function htmlBadge() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return "<div class=\"pubdi badge pricing badgino d-flex mt-xs-0\"><div class=\"picto d-none\">".concat(params.icon.promo, "</div><div class=\"tag\">").concat(params.texts.tag, "</div></div>"); // vérifie tous les logements disponibles et affiche la pastille associée
      // const item = $(".field_item");
    },
    htmlBadgeOnUnit: function htmlBadgeOnUnit() {
      // vérification de la durée minimale de séjour
      var minDuree = helpers.getEaTag("prdparam-duree-de-sejour");

      if (minDuree === "path") {
        minDuree = helpers.getEaTag("prd1param-duree-de-sejour");
      } // si durée de séjour inférieure à durée mini, on affiche pas


      if (minDuree < params.minDuration) {
        return;
      } // affiche la pastille sur une unit ou pas
      //1/ vérifie le club accom


      var currentAccom = helpers.getEaTag("prdparam-accom");

      if (currentAccom === "path") {
        currentAccom = helpers.getEaTag("prd1param-accom");
      }

      var formule = helpers.getEaTag("prdparam-formule");

      if (formule === "path") {
        formule = helpers.getEaTag("prd1param-formule");
      }

      var currentFormule = "";

      if (formule == "loc") {
        currentFormule = "LOC";
      } else {
        currentFormule = "PCDP";
      }

      var startD = helpers.getEaTag("prdparam-date-debut-sejour");

      if (startD === "path") {
        startD = helpers.getEaTag("prd1param-date-debut-sejour");
      } // vérifier la date retour


      var endD = helpers.getEaTag("prdparam-date-fin-sejour");

      if (endD === "path") {
        endD = helpers.getEaTag("prd1param-date-fin-sejour");
      }

      var isInRangeStart = "";
      var isInRangeEnd = ""; // filtre la liste des clubs suivant le codeaccom et la formule

      var getListOfdates = params.aplliedClubs.filter(function (el) {
        if (el.accom === currentAccom) {
          return el.dates.map(function (el) {
            return el.type === currentFormule;
          });
        }
      }); // pour chaque élément du tableau, vérifier si les dates choisies par le client sont inclues dans l'offre

      var finallistOfUnit = getListOfdates[0].dates.reduce(function (acc, el) {
        var item = el.range.filter(function (elem) {
          var displayDates = false;
          isInRangeStart = helpers.isDateInrange(helpers.dateToFrench(elem.start), helpers.dateToFrench(elem.end), helpers.dateToFrench(startD));
          isInRangeEnd = helpers.isDateInrange(helpers.dateToFrench(elem.start), helpers.dateToFrench(elem.end), helpers.dateToFrench(endD));
          console.log("11111111111", {
            isInRangeStart: isInRangeStart,
            isInRangeEnd: isInRangeEnd
          });

          if (isInRangeStart && isInRangeEnd) {
            displayDates = true;
          }

          console.log("2222222222", {
            displayDates: displayDates
          });
          return displayDates;
        }); // console.log({ item });

        if (item.length != 0) {
          acc = [].concat(_toConsumableArray(acc), [helpers.formatName(el.unitName)]);
          console.log("acc1", acc);
        } else {
          acc = _toConsumableArray(acc);
          console.log("acc2", acc);
        }

        console.log("3333333", {
          acc: acc
        });
        return acc;
      }, []); // appliquer le badge à chaque unit en se basant sur son libellé concaténé

      var tile = $(".field_item");
      $(".field_item-soldOut").find(".form_choices.pricing").each(function () {
        $(this).addClass("flex-column");
      });
      tile.each(function () {
        var _self = $(this);

        var formatedItemName = helpers.formatName(_self.find(".content_field .top.title.superficie h4").text());

        if (finallistOfUnit.includes(formatedItemName)) {
          if (_self.find(".badgino").length == 0) {
            if (helpers.getViewportWidth() <= 576) {
              _self.find(".contentarea").prepend(helpers.htmlBadge());
            } else {
              _self.find(".form_choices.pricing").prepend(helpers.htmlBadge());
            }
          }
        }
      }); // console.log({ finallistOfUnit }, finallistOfUnit.length);

      if (finallistOfUnit.length > 0) {
        helpers.htmlTicket();
      }
    },
    getViewportWidth: function getViewportWidth() {
      return $(window).width();
    }
  }; // génère le html nécessaire

  nsp.renderHtml = function () {
    helpers.getClubList();
    console.log('espaaaaaaaaaa', helpers.getClubList());
    helpers.getEaTag("prd1param-accom");
    console.log('code accom de ce club', helpers.getEaTag("prd1param-accom"));
    console.log('code accom de ce club 2', helpers.getEaTag("prdparam-accom"));
    console.log('historyChange', helpers.historyChange());
    helpers.htmlPastille(accomId); // 1. check la page sur laquelle on se trouve

    var currentPage = helpers.getEaTag("pagegroup");
    var accomId = helpers.getEaTag("prdparam-accom");

    if (accomId === "path") {
      accomId = helpers.getEaTag("prd1param-accom");
    } // récupération de la saison


    var season = helpers.getEaTag("prdparam-seasonname");

    if (season === "path") {
      season = helpers.getEaTag("prdparam-seasonname");
    }

    var path = helpers.getEaTag("path");

    if (currentPage === "club") {
      // page club
      // if (season === "w22") return;
      // 1. vérifie si le club fait partie du
      // console.log("getClubList", helpers.getClubList());
      // modification pour intégrer le 7=6
      if (!params.excludedClubsIds.includes(accomId)) {
        // affiche la banner sous la zapette
        helpers.htmlBanner();
      }
    } else if (currentPage === "checkout") {
      // page du tunnel
      // helpers.htmlTicket();
      // affiche la pastille sur une unit
      helpers.htmlBadgeOnUnit();
      /* let displayStatus = helpers.displayOffer(accomId);
      console.log("ùùùùùùùù=======", displayStatus);
      if (displayStatus) {
      } */
    } else if (currentPage === "list&content") {
      // if (season !== "w22" && path !== "list&content/vacances_de_paques") {
      // page de listes
      // ajout du banner sur la liste
      helpers.htmlAds(); // gestion de la partie SPA

      $("#paginationLinks").on("click", function (e) {
        $(document).ajaxComplete(function () {
          // console.log("la query ajax la fini mounoir ::::::");
          $("body").find(".pubdi.ads").remove();
          helpers.htmlAds();
        });
        window.addEventListener("locationchange", function () {
          // console.log("location changed");
          $("body").find(".pubdi.ads").remove();
          helpers.htmlAds();
        });
      }); // }
    }
  };

  return nsp;
}(OPE76 || {});

Kameleoon.API.Core.runWhenConditionTrue(function () {
  return window.$;
}, function () {
  $(document).ready(function () {
    // variables
    // variables
    var variationId = "#ops7=6";
    var version = 0.0002;
    console.log("%cid du test ".concat(variationId, " et version ").concat(version), "color: yellow; font-family:monospace; font-size: 20px");
    OPE76.renderHtml();
  });
}, 100);