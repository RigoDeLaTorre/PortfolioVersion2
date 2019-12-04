snapfit.add(document.getElementById("img"));

console.log("this ran");
if (typeof $ == "undefined") {
  console.log("its undefineed wtf");
  function $(v) {
    console.log("vvvvvvvv", v);
    return document.getElementById(v);
  }
}
console.log(snapfit.add);
snapfit.add($("img"));
snapfit.add($("img"), { level: 0, bwide: 1, simple: true });
// snapfit.defaultSnap = 0;

snapfit.reset($("img"), 1);
alert("snapfit: " + snapfit.version + " (" + snapfit.released + ")");
snapfit.admix($("img"), true);
snapfit.solve($("img"));
snapfit.remove($("img"));
