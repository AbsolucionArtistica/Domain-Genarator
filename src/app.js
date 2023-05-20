/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our"];
  var adjetive = ["great", "big"];
  var noun = ["jogger", "racoon"];

  for (
    let pronounSelector = 0;
    pronounSelector < pronoun.length;
    pronounSelector++
  ) {
    for (
      let adjetiveSelector = 0;
      adjetiveSelector < adjetive.length;
      adjetiveSelector++
    ) {
      for (let nounSelector = 0; nounSelector < noun.length; nounSelector++) {
        console.log(
          pronoun[pronounSelector] +
            adjetive[adjetiveSelector] +
            noun[nounSelector] +
            ".com"
        );
      }
    }
  }
};
};
