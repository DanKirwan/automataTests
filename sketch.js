var numSoldiers = 10;

/*var soldiers = [-1]
for(i = 0; i < numSoldiers; i++) {
  soldiers.push(Math.round(Math.random()));
}
soldiers.push(-1);*/

var soldiers = [-1,0,0,0,0,1,0,0,0,0,0,-1]

var layers = [];
layers.push(soldiers)
for(i = 0; i < numSoldiers; i++) {
  var o = layers[i]
  var n = [-1];
  for(j = 1; j < numSoldiers - 1; j++) {
    n.push(basicAutomata(o[j-1], o[j], o[j+1]));
  }
  n.push(-1);

  layers.push(n);
}


function setup() {
  createCanvas(720, 540);


}

function draw() {
  strokeWeight(0);
  var split = numSoldiers + 2;
  for(x = 0; x < layers.length; x++) {
    for(i = 0; i < numSoldiers; i++) {
      fill(layers[x][i] * 255);
      rect((width/split) * (i + 1), (height/ (layers.length + 2)) * (x + 1),
            (width/split), (height/layers.length));
    }
  }

}


function basicAutomata(left, me, right) {
  //Boundary Condition
  if(left == -1 ||right == -1) {
    return 0;
  }

  var val = "" + left + "" + me + "" + right;


  switch (val) {
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


  }

}
