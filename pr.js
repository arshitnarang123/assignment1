var x=0;
var y=10;
var r=1;
var x1=0;
var x2=0;
var last_click="+"
var god="+";
var last;
function func1(){
  x=x*y+1*r;
  
document.getElementById("demo").innerHTML = x;
}
function func2(){
x=x*y+2*r;

document.getElementById("demo").innerHTML = x;
}
function func3(){
x=x*y+3*r;

document.getElementById("demo").innerHTML = x;
}
function func4(){
x=x*y+4*r;

document.getElementById("demo").innerHTML = x;
}
function func5(){
x=x*y+5*r;

document.getElementById("demo").innerHTML = x;
}
function func6(){
x=x*y+6*r;

document.getElementById("demo").innerHTML = x;
}
function func7(){
x=x*y+7*r;

document.getElementById("demo").innerHTML = x;
}
function func8(){
x=x*y+8*r;

document.getElementById("demo").innerHTML = x;
}
function func9(){
x=x*y+9*r;

document.getElementById("demo").innerHTML = x;
}
function func0(){
x=x*y+0*r;

document.getElementById("demo").innerHTML = x;
}

function operation(x1,x,x2,last_click){
   if(last_click=='+'){
     return x1+x;}
   if(last_click=='-'){
     return x1-x;}
   if(last_click=='*'){
     if(god=='+'){
     return x1+x2*x;}
     if(god=='-'){
     return x1-x2*x;}
/*     
if(last=='*'){
     return x1*x2*x;}
     if(last=='/'){
     return (x1/x2)*x;}
*/
   
}
   if(last_click=='/'){
     if(god=='+'){
     return x1+x2/x;}
     if(god=='-'){
     return x1-x2/x;}
/*
     if(last=='*'){
     return x1*(x2/x);}
     if(last=='/'){
     return (x1/x2)/x;}
*/
}
   if(last_click=='!'){
     return x1;}
   if(last_click=='//'){
     return Math.pow(x1,x);}
}





function func10(){
y=10;
r=1;
if(last_click=='+'){
god="+";}
else if(last_click=='-'){
god="-";}
document.getElementById("demo").innerHTML = "+";
x1=operation(x1,x,x2,last_click);
x=0;
last_click="+";

}
function func11(){
y=10;
r=1;
if(last_click=='+'){
god="+";}
else if(last_click=='-'){
god="-";}

document.getElementById("demo").innerHTML = "-";
x1=operation(x1,x,x2,last_click);

last_click="-";
x=0;

}function func12(){
y=10;
r=1;
if(last_click=='+'){
god="+";}
else if(last_click=='-'){
god="-";}

document.getElementById("demo").innerHTML = "*";
if(last_click=='/'){
x2=x2/x;}
else if(last_click=='*'){
x2=x2*x;}
else{
x2=x;
}
x=0;
last=last_click;
last_click="*";


}function func13(){
y=10;
r=1;
if(last_click=='+'){
god="+";}
else if(last_click=='-'){
god="-";}

document.getElementById("demo").innerHTML = "/";
if(last_click=='/'){
x2=x2/x;}
else if(last_click=='*'){
x2=x2*x;}
else{
x2=x;
}

x=0;
last=last_click;
last_click="/";

}

function func14(){
y=10;
r=1;
x1=operation(x1,x,x2,last_click);
document.getElementById("demo").innerHTML = x1;
last_click="!";


x1=0;
x=0;
x2=0;
document.getElementById("arshit").disabled = true;
} 
function func15(){
y=10;
r=1;
x1=0;
x=0;
document.getElementById("demo").innerHTML = "ENTER ANY VALUE";
last_click="+";
document.getElementById("arshit").disabled = false;
}
function func16(){
x1=operation(x1,x,x2,last_click);
x1=Math.sin(x1);
document.getElementById("demo").innerHTML = x1;
last_click="!"
x=0;}

function func17(){
x1=operation(x1,x,x2,last_click);
x1=Math.cos(x1);
document.getElementById("demo").innerHTML = x1;
last_click="!"
x=0;
}

function func18(){
x1=operation(x1,x,x2,last_click);
x1=Math.tan(x1);
document.getElementById("demo").innerHTML = x1;
last_click="!"
x=0;
}
function func19(){
x1=operation(x1,x,x2,last_click);
x1=Math.log(x1);
document.getElementById("demo").innerHTML = x1;
last_click="!"
x=0;
}
function func20(){
x1=operation(x1,x,x2,last_click);

document.getElementById("demo").innerHTML = "//";
last_click="//"
x=0;
}

