const axios = require("axios");
const jsdom = require("jsdom");

(async () => {
  // Parse HTML page using axios
  const resp = await axios.default.get(
    "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/"
  );
  const dom = new jsdom.JSDOM(resp.data);

  var str2 = "",
    str1 = "",
    tit = "";

  const docs = dom.window.document.querySelectorAll("table tr");

  for (var i = 0; i < docs.length; i++) {
    try {
      if (docs[i].children[1].textContent === "Problem") continue;
      tit += docs[i].children[1].textContent + "\n";
    } catch (err) {
      tit += "\n";
    }

    try {
      str1 += docs[i].children[2].querySelectorAll("a")[0].href + "\n";
    } catch (err) {
      str1 += "\n";
    }
    try {
      str2 += docs[i].children[4].querySelectorAll("a")[0].href + "\n";
    } catch (err) {
      str2 += "\n";
    }
  }

  console.log(tit);
  console.log(str1);
  console.log(str2);


})();


