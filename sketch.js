var numSoldiers = 41;

/*var soldiers = [-1]
for(i = 0; i < numSoldiers; i++) {
  soldiers.push(Math.round(Math.random()));
}
soldiers.push(-1);*/

var soldiers = [-1];
for(i = 0; i < 20; i++) soldiers.push(0);
soldiers.push(3);
for(i = 0; i < 20; i++) soldiers.push(0);
soldiers.push(-1);

var layers = [];
layers.push(soldiers)
for(i = 0; i < 50; i++) {
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
  createCanvas(numSoldiers * 10, layers.length*10);


}

function draw() {
  strokeWeight(0);
  var split = numSoldiers + 2;
  for(x = 0; x < layers.length; x++) {
    for(i = 1; i < numSoldiers+1; i++) {
      fill(layers[x][i] * 10, 100, 100);
      rect((width/split) * (i + 1), (width/split) * (x + 1),
            (width/split), (width/split));
    }
  }

}


function basicAutomata(l, c, r) {

  var val = "" + l + "" + c + "" + r;

  if(val == "100" || val == "001") return 1;
  if(val == "300" || val == "003") return 1; //3 is M
  if(val == "-101" || val == "10-1") return 6;
  if(val == "030") return 3;
  if(val == "131") return 2;
  if(val == "221" || val == "122") return 5;
  if(val == "052" || val == "250") return 4;
  if(val == "042" || val == "240") return 4;
  if(val == "204" || val == "004" || val == "402" || val == "400") return 5;
  if(val == "040") return 4;
  if(val == "054" || val == "450") return 5;
  if(val == "050") return 4;
  if(val == "540" || val == "045" || val == "542" || val == "245") return 2;
  if(val == "520" || val == "025" || val == "522" || val == "225") return 2;
  if(val == "420" || val == "024") return 2;

  if(val == "013" || val == "310") return 2;
  if(val == "012" || val == "210") return 2; //2 is the barrier to maintain 1's direction

  //Reflection
  if(val == "-162" || val == "26-1") return 1;
  if(val == "-110" || val == "01-1") return 2;

  //Intersection
  if(val == "104" || val == "401") return 3;
  if(val == "234" || val == "432") return 3;
  if(val == "501" || val == "105") return 3;
  if(val == "235" || val == "532") return 3;

  if(val == "302" || val == "203") return 1;


//  if(me == 5) return 1; //This is the edge case, 5 acts as R



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
