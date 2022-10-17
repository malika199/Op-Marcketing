"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var fs = require("fs");

var excelToJson = require("convert-excel-to-json");

var result = excelToJson({
  sourceFile: "./fixtures/PromoS22.xlsx",
  columnToKey: {
    E: "ACCOM",
    D: "Type",
    B: "UnitName",
    H: "date0401",
    I: "date0408",
    J: "date0415",
    K: "date0422",
    L: "date0429",
    M: "date0506",
    N: "date0513",
    O: "date0520",
    P: "date0527",
    Q: "date0603",
    R: "date0610",
    S: "date0617",
    T: "date0624",
    U: "date0701",
    V: "date0708",
    W: "date0715",
    X: "date0722",
    Y: "date0729",
    Z: "date0805",
    AA: "date0812",
    AB: "date0819",
    AC: "date0826",
    AD: "date0902",
    AE: "date0909",
    AF: "date0916",
    AG: "date0923",
    AH: "date0930",
    AI: "date01007",
    AJ: "date01014",
    AK: "date01021",
    AL: "date01028"
  },
  sheets: ["Montagne", "Méditerrannée", "Côte Ouest", "Campagne"]
});
var res = [];
res = result; // console.log("res", typeof res);

/**
 *  reformuler les resultats d'une feuille 
**/

var Browse = function Browse(sheets) {
  // console.log("sheets",sheets);
  var bg = sheets.reduce(function (acc, curr) {
    var item = {
      accom: "",
      dates: [],
      range: []
    }; // .match(/\d{4}/gmi)
    //  console.log(curr)

    if (curr.hasOwnProperty("ACCOM") && curr["ACCOM"] !== "ACCOM") {
      var indexAccom = acc.findIndex(function (el) {
        if (el.accom == curr["ACCOM"]) {
          // console.log("el ", el);
          return el;
        }
      });

      if (indexAccom == -1) {
        item = {
          accom: curr["ACCOM"],
          dates: [{
            Type: curr["Type"],
            UnitName: curr["UnitName"],
            range: [{
              date0401: curr["date0401"]
            }, {
              date0408: curr["date0408"]
            }, {
              date0415: curr["date0415"]
            }, {
              date0422: curr["date0422"]
            }, {
              date0429: curr["date0429"]
            }, {
              date0506: curr["date0506"]
            }, {
              date0513: curr["date0513"]
            }, {
              date0520: curr["date0520"]
            }, {
              date0527: curr["date0527"]
            }, {
              date0603: curr["date0603"]
            }, {
              date0610: curr["date0610"]
            }, {
              date0617: curr["date0617"]
            }, {
              date0624: curr["date0624"]
            }, {
              date0701: curr["date0701"]
            }, {
              date0708: curr["date0708"]
            }, {
              date0715: curr["date0715"]
            }, {
              date0722: curr["date0722"]
            }, {
              date0729: curr["date0729"]
            }, {
              date0805: curr["date0805"]
            }, {
              date0812: curr["date0812"]
            }, {
              date0819: curr["date0819"]
            }, {
              date0826: curr["date0826"]
            }, {
              date0902: curr["date0902"]
            }, {
              date0909: curr["date0909"]
            }, {
              date0916: curr["date0916"]
            }, {
              date0923: curr["date0923"]
            }, {
              date0930: curr["date0930"]
            }, {
              date01007: curr["date01007"]
            }, {
              date01014: curr["date01014"]
            }, {
              date01021: curr["date01021"]
            }, {
              date01028: curr["date01028"]
            }]
          }]
        }; //  console.log('Type 0',item.dates[0].Type)
      } else {
        acc[indexAccom].dates.push({
          Type: curr["Type"],
          UnitName: curr["UnitName"],
          range: [{
            date0401: curr["date0401"]
          }, {
            date0408: curr["date0408"]
          }, {
            date0415: curr["date0415"]
          }, {
            date0422: curr["date0422"]
          }, {
            date0429: curr["date0429"]
          }, {
            date0506: curr["date0506"]
          }, {
            date0513: curr["date0513"]
          }, {
            date0520: curr["date0520"]
          }, {
            date0527: curr["date0527"]
          }, {
            date0603: curr["date0603"]
          }, {
            date0610: curr["date0610"]
          }, {
            date0617: curr["date0617"]
          }, {
            date0624: curr["date0624"]
          }, {
            date0701: curr["date0701"]
          }, {
            date0708: curr["date0708"]
          }, {
            date0715: curr["date0715"]
          }, {
            date0722: curr["date0722"]
          }, {
            date0729: curr["date0729"]
          }, {
            date0805: curr["date0805"]
          }, {
            date0812: curr["date0812"]
          }, {
            date0819: curr["date0819"]
          }, {
            date0826: curr["date0826"]
          }, {
            date0902: curr["date0902"]
          }, {
            date0909: curr["date0909"]
          }, {
            date0916: curr["date0916"]
          }, {
            date0923: curr["date0923"]
          }, {
            date0930: curr["date0930"]
          }, {
            date01007: curr["date1007"]
          }, {
            date01014: curr["date1014"]
          }, {
            date01021: curr["date1021"]
          }, {
            date01028: curr["date1028"]
          }]
        });
      }

      acc = [].concat(_toConsumableArray(acc), [item]);
    }

    return acc;
  }, []);
  /**
   *  passer la première valeur de formule
   **/

  var bb = bg.map(function (e) {
    e.dates.filter(function (el) {
      el.Type = e.dates[0].Type;
      return el;
    });
    return e;
  });
  /**
   * modifier le format des dates
   */

  var obj;
  table_updated = bb.map(function (value) {
    if (value.dates.length != 0) {
      return value.dates.filter(function (val) {
        // if (val.hasOwnProperty("UnitName")) {
        var g = val.range.filter(function (el) {
          if (el != undefined && el[Object.keys(el)] != undefined && el[Object.keys(el)] != "") {
            // console.log("ell ====>", el, Object.keys(el)[0], "\n\n");
            // console.log("el key", el[Object.keys(el)]);
            date_enter = Object.keys(el)[0]; // split les dates pour recupérer le jour et le mois

            var dd = date_enter.split("date");
            dd1 = dd[1];
            var mois = dd1.toString().substr(0, 2);
            var jour = dd1.toString().substr(2);
            var start_spt = "2022/".concat(mois, "/").concat(jour);
            var start = new Date(start_spt).getTime(); // le end = start + 7

            var end = start + 7 * 24 * 60 * 60 * 1000;
            start = new Date(start).toLocaleDateString();
            end = new Date(end).toLocaleDateString();
            obj = {
              start: start,
              end: end
            };
            val.range.push(obj);
          }

          return obj;
        });
        return g; // }
        // return g;
      });
    }
  }); // console.log("table_updated",table_updated);

  var lg = bb.filter(function (el) {
    return el.accom;
  }); // console.log("lllll",lg);

  var gh = lg.map(function (el) {
    //  console.log("eeeellllllll", el, "\n\n\n");
    el.dates.shift();

    if (el.dates.length != 0) {
      var g = el.dates.filter(function (item) {
        if (item.hasOwnProperty("UnitName") && item.UnitName && item.length != 0) {
          // console.log("ittttteeeeemmm", item);
          item.range = item.range.filter(function (elem) {
            // console.log("elem", elem);
            if (Object.keys(elem) != undefined) {
              return /start/gim.test(JSON.stringify(elem));
            }
          });
          return item;
        }
      });
      el.dates = g;
      return el;
    }
  }); // console.log(gh)
  // console.log(lg);

  gh = gh.filter(function (el) {
    return el.dates.length != 0;
  });
  return gh;
};
/**
 *  regrouper les resultats de toutes les feuilles
**/


var tab = [];

var PileUp = function PileUp() {
  for (var key in res) {
    // console.log(res[key]);
    tab = [].concat(_toConsumableArray(tab), _toConsumableArray(Browse(res[key])));
  }

  return tab;
}; // imprimer le résultat dans un fichier


fs.writeFileSync("./fichier_promos.json", JSON.stringify(PileUp(), null, 2));