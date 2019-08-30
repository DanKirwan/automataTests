var numSoldiers = 17;

/*var soldiers = [-1]
for(i = 0; i < numSoldiers; i++) {
  soldiers.push(Math.round(Math.random()));
}
soldiers.push(-1);*/

var soldiers = [-1];
//for(i = 0; i < (numSoldiers-1)/2; i++) soldiers.push(0);
soldiers.push(3);
for(i = 0; i < (numSoldiers-1); i++) soldiers.push(0);
soldiers.push(-1);

var layers = [];
layers.push(soldiers)
for(i = 0; i < 100; i++) {
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
  strokeWeight(1);
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


  //creating first branches
  if(val == "300" || val == "003") return 1;//When it first branches

  if(val == "100" || val == "001") return 1;
  if(val == "302" || val == "203") return 1;

  if(val == "105" || val == "501") return 1; //Case for when breaking up odd numbered spaces just before intersection
  //if(val == "320" || val == "023") return 1; //edge case for two wide




  //Direction barrier for first branches
  if(val == "013" || val == "310") return 2;
  if(val == "012" || val == "210") return 2;
  if(val == "215" || val == "512") return 2; //case when meeting odd numbered split




  //start of slower branch
  if(val == "030" || val == "-130" || val == "03-1") return 3;
  if(val == "131" || val == "-131" || val == "13-1") return 2;
  if(val == "221" || val == "122") return 5;
  if(val == "052" || val == "250") return 4;
  if(val == "040") return 4;



  if(val == "042" || val == "240") return 4;
  if(val == "204" || val == "004" || val == "402" || val == "400") return 5;
  if(val == "054" || val == "450") return 5;


  if(val == "540" || val == "045" || val == "542" || val == "245") return 2;
  if(val == "520" || val == "025" || val == "522" || val == "225") return 2;
  if(val == "420" || val == "024") return 2;
  if(val == "426" || val == "624") return 2;


  //Reflection
  if(val == "-162" || val == "26-1") return 1;
  if(val == "-110" || val == "01-1") return 2;

  if(val == "-101" || val == "10-1") return 6;

  //Non edge reflections
  if(val == "101") return 6;
  if(val == "262") return 1;
  if(val == "010") return 2;

  //Closest reflections
  if(val == "622" || val == "226") return 8;



  //Intersection
  //Odd numbered spaces
  if(val == "152" || val == "251") return 3;
  if(val == "232") return 3;

  //Even numbered spaces
  if(val == "104" || val == "401") return 2;//2 acts just as a placeholder here as 3 doesnt work
  if(val == "022" || val == "220") return 6; //this lines upt he two branches

  if(val == "224" || val == "422") return 3;
  if(val == "242") return 3;//creates 2 nodes next to eachother

  if(val == "633" || val == "336") return 3;
  if(val == "332" || val == "233") return 3; //extend down one









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
