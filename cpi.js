function myFunctiona(){
    let num1=document.getElementById("sub1").value;
    let num2=document.getElementById("sub2").value;
    let num3=document.getElementById("sub3").value;
    let num4=document.getElementById("sub4").value;
    let num5=document.getElementById("sub5").value;
    let num6=document.getElementById("sub6").value;
    function grade(num1){
    if(num1>=85){
     return 10;
    }
    else if(num1>=75){
return 9;
    }
    else if(num1>=65){
       return 8;
            }
            else if(num1>=55){
              return 7;
                    }
                    else if(num1>=45){
                       return 6;
                            }
                            else if(num1>=30){
                               return 4;
                                    }
                                    else if(num1>=15){
                                       return 2;
                                            }
                                            else{
                                               return 0;
                                            }

    }
    num1=grade(num1);
num2=grade(num2);
num3=grade(num3);
num4=grade(num4);
num5=grade(num5);
num6=grade(num6);
num1=num1*4;
num2=num2*4;
num3=num3*3;
num4=num4*2;
num5=num5*3;
num6=num6*4;
var x=num1+num2+num3+num4+num5+num6;
var c=3+3+3+3+4+4;
var ans=x/c;
document.getElementById("display-a").innerHTML = ans;
}
function myFunctionb(){
    let numA=document.getElementById("subA").value;
    let numB=document.getElementById("subB").value;
    let numC=document.getElementById("subC").value;
    let numD=document.getElementById("subD").value;
    let numF=document.getElementById("subE").value;
    let numE=document.getElementById("subF").value;
    function grade(numA){
    if(numA>=85){
     return 10;
    }
    else if(numA>=75){
return 9;
    }
    else if(numA>=65){
       return 8;
            }
            else if(numA>=55){
              return 7;
                    }
                    else if(numA>=45){
                       return 6;
                            }
                            else if(numA>=30){
                               return 4;
                                    }
                                    else if(numA>=15){
                                       return 2;
                                            }
                                            else{
                                               return 0;
                                            }

    }
    numA=grade(numA);
numB=grade(numB);
numC=grade(numC);
numD=grade(numD);
numE=grade(numE);
numF=grade(numF);
numA=numA*4;
numB=numB*3;
numC=numC*4;
numD=numD*3;
numE=numE*2;
numF=numF*4;
var y=numA+numB+numC+numD+numE+numF;
var a=3+3+3+3+4+4;
var ansb=y/a;
document.getElementById("display-b").innerHTML = ansb;
}
