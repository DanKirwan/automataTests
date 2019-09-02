var numSoldiers =33;

/*var soldiers = [-1]
for(i = 0; i < numSoldiers; i++) {
  soldiers.push(Math.round(Math.random()));
}
soldiers.push(-1);*/

var soldiers = [-1];
//for(i = 0; i < (numSoldiers-1)/2; i++) soldiers.push(0);
soldiers.push(1);
for(i = 0; i < (numSoldiers-1); i++) soldiers.push(0);
soldiers.push(-1);

var layers = [];
layers.push(soldiers)
for(i = 0; i < 400; i++) {
  var o = layers[i]
  var n = [-1];
  for(j = 1; j < numSoldiers + 1; j++) {
    n.push(automataTwo(o[j-1], o[j], o[j+1]));
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
      fill(layers[x][i] * 25, 100, layers[x][i] == 4 ? 0 : 100);

      rect((width/split) * (i + 1), (width/split) * (x + 1),
            (width/split), (width/split));
    }
  }

}

function automataTwo(l, c, r) {
  var val = "" + l  + c  + r;
  var valInv = "" + r + c + l;

  for(x = 0; x < 2; x++) {
    //020 or edge is a fork, 1 is fast wave, 3 is return?




    //020 or edge is a fork, 1 is fast wave, 3 is return?
    //Fast wave propagation
    if(val == "300") return 1;

    if(val == "100") return 1;
    if(val == "010") return 1;
    if(val == "111") return 1;
    if(val == "110") return 1;




    //Slow wave

    if(val == "-110") return 2;

    if(val == "-121") return 2;


    if(val == "-133") return 2;

    if(val == "021") return 3;//Now away from the edge so make full one
    if(val == "201") return 2;

    if(val == "321") return 3;

    if(val == "020") return 2;
    if(val == "022") return 2;
    if(val == "221") return 3;
    if(val == "230") return 2;







    //reflection
    //Edge for now
    if(val == "10-1") return 3;
    //if(val == "11-1") return 3;

    if(val == "113") return 3;
    if(val == "13-1") return 2;
    if(val == "132") return 2;

    if(val == "-130") return 2;

    //eachother Odd
    if(val == "101") return 3;
    if(val == "131") return 2;







    //Intersection
    if(val == "013") return 3;
    if(val == "203") return 3;
    if(val == "232") return 3;
    if(val == "030") return 2; //logic applies here but written above
    if(val == "121") return 2;

    if(val == "222") return 3; //This is to allowed 202 used at termination
    if(val == "330") return 2;



    //even
    //if(val == "013") return 2;



    //terminate
    if(val == "303") return 1;
    if(val == "-103") return 1;

    //Dealing with top from -103
    if(val == "120") return 2;














    val = valInv;
  }





  return 0;
}








function basicAutomata(l, c, r) {

  var val = "" + l + "" + c + "" + r;


  //creating first branches
  if(val == "300" || val == "003") return 1;//When it first branches

  if(val == "100" || val == "001") return 1;
  if(val == "302" || val == "203") return 1;

  if(val == "105" || val == "501") return 1; //Case for when breaking up odd numbered spaces just before intersection
  if(val == "320" || val == "023") return 1; //edge case for two wide
  if(val == "360" || val == "063") return 1;
  if(val == "623" || val == "326") return 1; //this is a fix for 1 wide after fix for 2 wide





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

  //start for 2 wide
  if(val == "133" || val == "331") return 2;
  if(val == "543" || val == "345") return 2;

  if(val == "252") return 4; //needed for final layer intersections




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

  //even numbered reflections
  if(val == "211" || val == "112") return 1;
  if(val == "011" || val == "110") return 2;




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

  if(val == "404") return 2;





  //Terminating
  if(val == "30-1" || val == "-103") return 7;//case for 2
  if(val == "-13-1") return 7;//case for 1
  if(val == "-104") return 2;




  if(val == "622" || val == "226") return 7;
  if(val == "511" || val == "115") return 7;
  if(l == 7 || c == 7 || r == 7) return 3.5;


//misc
if(val === "222") return 2;






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
