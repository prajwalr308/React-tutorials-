//primitive 
//number
//string
//boolean
//undefined
//null


//non primitive
//object
//function

//non primitive
let a=[0,1,2];
a[0]=2;
console.log(a)

//primitive
let b="adsad";
b[0]="y"
console.log(b)




const c={
    name:"prajwal"
}

c["x"]="prash"

console.log(c)



//fucntions

function add(num){
    var total=0;
    total=num+1;
    console.log(total)
}

add(4);

var num=6;

if(num>5||num==7 ){
console.log("number is larger than 5")
}else{
console.log("its not")
}



//switch
let x="";
function number() {
    x="red";
}
number();
switch (x) {
  case "red":
    text = "blue";
    break;
  case "red":
    text = "red";
    break;


  default:
    text = "No value found";
}


console.log(text)


//loop
var array=["a","b","c","d","e"]
for (let step = 0; step < array.length; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log(array[step]);
  }


  //while loop

  let i=0;
  while(i<5){
      console.log(i)
      i++;
  }
  var xx=1;
  var y="0";
  var z=xx===y
  console.log(z)


  //array methods

  var alpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const result = alpha.findIndex((val)=>val=="c");
  console.log(result)
  
//two inputs if a and d print g

//i and  l => o

function differnce(x,y) {
    const indexValueofX=alpha.findIndex((val)=>val==x);
    const indexValueofY=alpha.findIndex((val)=>val==y);
    const differenc=indexValueofY-indexValueofX;
    console.log(differenc)
    console.log(alpha[indexValueofY+differenc])
 
    
}

differnce("a","d")