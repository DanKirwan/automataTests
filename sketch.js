var numSoldiers = 11;

/*var soldiers = [-1]
for(i = 0; i < numSoldiers; i++) {
  soldiers.push(Math.round(Math.random()));
}
soldiers.push(-1);*/

var soldiers = [-1,0,0,0,0,0,3,0,0,0,0,0,-1]

var layers = [];
layers.push(soldiers)
for(i = 0; i < numSoldiers; i++) {
  var o = layers[i]
  var n = [-1];
  for(j = 1; j < numSoldiers + 1; j++) {
    n.push(basicAutomata(o[j-1], o[j], o[j+1]));
  }
  n.push(-1);

  layers.push(n);
}


function setup() {
  colorMode(HSB,100)
  createCanvas(720, 540);


}

function draw() {
  strokeWeight(0);
  var split = numSoldiers + 2;
  for(x = 0; x < layers.length; x++) {
    for(i = 1; i < numSoldiers+1; i++) {
      fill(layers[x][i] * 10, 100, 100);
      rect((width/split) * (i + 1), (height/ (layers.length + 2)) * (x + 1),
            (width/split), (height/layers.length));
    }
  }

}


function basicAutomata(left, me, right) {


  var val = "" + left + "" + me + "" + right;

  if(val == "100" || val == "001") return 1;
  if(val == "300" || val == "003") return 1;
  if(me == 1) return 2;
  if(me == 3) return 4;
  if(me == 4) return 3;



  return 0;



  /*switch (val) {
    case "000" :
        return 0;

    case "001" :
        return 1;

    case "010" :
        return 1;

    case "011" :
        return 1;

    case "100" :
        return 1;

    case "101" :
        return 0;

    case "110" :
        return 1;

    case "111" :
        return 0;

      }*/


  }
