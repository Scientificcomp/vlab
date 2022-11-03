var mto=1;

var eqn;
var poles=[],roots=[];
function changepage() {
  var x= document.getElementById("pagechanger").value;
  if(x==1)
    document.getElementById("sm1").click();
  else
    document.getElementById("sm2").click();
}
function addval(){

var a= document.getElementById("z1r").value;
var b= document.getElementById("z1i").value;
var c= document.getElementById("z2r").value;
var p= document.getElementById("z2i").value;
var q= document.getElementById("p1r").value;
var r= document.getElementById("p1i").value;
var s= document.getElementById("p2r").value;
var t= document.getElementById("p2i").value;
var u= document.getElementById("gk").value;
roots=[];
poles=[];
var x1,y1;
var ni=0,di=0;
if(a=="")
var z1r=0;
else
var z1r=parseFloat(a);
if(b=="")
var z1i=0;
else
var z1i=parseFloat(b);
if(c=="")
var z2r=0;
else
var z2r=parseFloat(c);
if(p=="")
var z2i=0;
else
var z2i=parseFloat(p);
if(q=="")
  var p1r=0;
else
var p1r=parseFloat(q);
if(r=="")
var p1i=0;
else
var p1i=parseFloat(r);
if(s=="")
  var p2r=0;
else
var p2r=parseFloat(s);
if(t=="")
var p2i=0;
else
var p2i=parseFloat(t);
if(u=="")
var gk=0;
else
var gk=parseFloat(u);
var a1,b1,c1,a2,b2,c2;
lc = 1;
document.getElementById("line1").setAttribute("style","color:blue");
document.getElementById("chartcont").setAttribute("style","display:none");
document.getElementById("chartcont1").setAttribute("style","display:none;");
document.getElementById("generated_eqn").setAttribute("style","display:none");
for(let i=1;i<5;i++)
{
 let out = "out" + i;
 let ln = "line" + (i+1);
 document.getElementById(ln).setAttribute("Style","color:black");
 document.getElementById(out).setAttribute("style","display:none");
}
if(p1r==0 && p1i==0 && p2r==0 && p2i==0)
{
  alert("Poles cannot be zero, improper transfer function");
  mto=0;
}
else if(gk==0)
{
alert("gain cannot be zero");
mto=0;
}
if(mto==1)
{
 document.getElementById("matwork").title="";
document.getElementById("mrun").disabled = false;
document.getElementById("matwork").setAttribute("style","opacity:1");
document.getElementById("mrun").classList.remove("mrundisabled","mrunenabled");
document.getElementById("mrun").classList.add("mrunenabled");
document.getElementById("matwork").classList.remove('mat');
if(z1r!=0 || z1i!=0 || z2r!=0 || z2i!=0)
a1 = gk;
else
a1=0;
b1 = -1*gk*(z1r+z2r);
if((z1r*z2r-z1i*z2i)!=0)
c1 = gk*(z1r*z2r-z1i*z2i);
else
c1=gk;
if(p1r!=0 || p1i!=0 || p2r!=0 || p2i!=0)
a2 = 1;
else
a2=0;
b2 =-1*(p1r+p2r);
c2 = (p1r*p2r-p1i*p2i);
num1=a1.toFixed(2);
num2=b1.toFixed(2);
num3=c1.toFixed(2);
den1=a2.toFixed(2);
den2=b2.toFixed(2);
den3=c2.toFixed(2);
if(a!="" || b!="")
roots.push({x:z1r,y:z1i});
if(c!="" || p!="")
roots.push({x:z2r,y:z2i});
if(q!="" || r!="")
poles.push({x:p1r,y:p1i});
if(s!="" || t!="")
poles.push({x:p2r,y:p2i});
var numerator = "$${\\frac{";
if(num1!=0)
numerator=numerator+num1+"s^2";
if(num2!=0)
  if(num1!=0)
numerator=numerator+" + " + num2+"s";
  else
 numerator=numerator+ num2+"s";
if(num3!=0)
  if(num1!=0 || num2!=0)
numerator=numerator + " + " +num3+"}";
  else
  numerator=numerator +num3+"}";
var denominator = "{";
if(den1!=0)
denominator=denominator+den1+"s^2";
if(den2!=0)
  if(den1!=0)
denominator=denominator+ " + " + den2+"s";
else
denominator=denominator+ den2+"s";
if(den3!=0)
  if(den1!=0 || den2!==0)
denominator=denominator+" + " + den3;
else
denominator=denominator+ den3;
denominator=denominator+"}}$$";
eqn = numerator + denominator;
document.getElementById("generated_eqn").innerHTML="Generated Equation=<br>"+eqn;
MathJax.Hub.Queue(["Typeset",MathJax.Hub,"generated_eqn"]);
document.getElementById("Zeroes").innerHTML="$${Z_1 = &emsp;" + z1r.toFixed(2) + "&emsp;+&emsp;" +z1i.toFixed(2) + "i}$$$${Z_2 = &emsp;" + z2r.toFixed(2) + "&emsp;+&emsp;" + z2i.toFixed(2)+"i}$$";
MathJax.Hub.Queue(["Typeset",MathJax.Hub,"Zeroes"]);
document.getElementById("Poles").innerHTML="$${P_1 = &emsp;" + p1r.toFixed(2) + "&emsp;+&emsp;" +p1i.toFixed(2) + "i}$$$${P_2 = &emsp;" + p2r.toFixed(2) + "&emsp;+&emsp;" + p2i.toFixed(2)+"i}$$";
MathJax.Hub.Queue(["Typeset",MathJax.Hub,"Poles"]);
document.getElementById("Gain").innerHTML="$${K = &emsp;" + u + " }$$";
MathJax.Hub.Queue(["Typeset",MathJax.Hub,"Gain"]);
var output;
var linev;
output =  "";
if(a!="")
output= output +a +" ";
if(b!="")
  if(a!="")
    output=output +"+ " + b +"i ";
  else
     output=output  + b +"i ";
if((a!="" || b!="") && (c!="" || p!=""))
output = output + "; ";
if(c!="")
  output=output + c + " ";
if(p!="")
  if(c!=0)
    output=output+ "+ " + p+"i";
  else
     output=output + p +"i ";
document.getElementById("line1values").innerHTML=output;
output =  "";
if(q!="")
output= output +q +" ";
if(r!="")
  if(q!=0)  
    output=output +"+ " + r +"i ";
  else
     output=output + r +"i ";
if((q!="" || r!="") && (s!="" || t!=""))
output = output + "; ";
if(s!="")
  output=output + s + " ";
if(t!="")
  if(s!="")
    output=output+ "+ " + t+"i";
  else
     output=output + t +"i ";
document.getElementById("line2values").innerHTML=output;
document.getElementById("line3values").innerHTML=u;
output = "g = <br>"+eqn;
document.getElementById("out5").innerHTML=output;
MathJax.Hub.Queue(["Typeset",MathJax.Hub,"out5"]);
var j,k;
output = "num = <em>1x3</em> <br><br>"+"&emsp;&emsp;&emsp;" + num1 +" " + num2 +" "+num3 + "<br><br>den = <em>1x3</em><br><br>&emsp;&emsp;&emsp;"+den1+" "+den2+" "+den3 ;
document.getElementById("output1").innerHTML="&emsp;&emsp;&emsp;"+z1r.toFixed(2)+" + " + z1i.toFixed(2)+"i" + "<br>"+"&emsp;&emsp;&emsp;"+z2r.toFixed(2)+" + "+z2i.toFixed(2)+"i";
document.getElementById("output2").innerHTML="&emsp;&emsp;&emsp;"+p1r.toFixed(2)+" + " + p1i.toFixed(2)+"i" + "<br>"+"&emsp;&emsp;&emsp;"+p2r.toFixed(2)+" + "+p2i.toFixed(2)+"i";
document.getElementById("output3").innerHTML="<br>&emsp;&emsp;&emsp;" + gk.toFixed(2);
document.getElementById("out4").innerHTML=output;
var ms =window.matchMedia("(max-width:950px)"); 
    cwidth(ms);
    ms.addListener(cwidth);}
else
{
mto=1;
document.getElementById("mrun").disabled = true;
document.getElementById("mrun").classList.remove('mrunenabled','mrundisabled');
document.getElementById("mrun").classList.add('mrundisabled');
document.getElementById("generated_eqn").setAttribute("style","display:none");
document.getElementById("matwork").classList.add('mat');
document.getElementById("Zeroes").innerHTML="$${Z_1=}$$$${Z_2=}$$";
document.getElementById("Poles").innerHTML="$${P_1=}$$$${P_2=}$$";
document.getElementById("Gain").innerHTML="$${K}$$";
MathJax.Hub.Queue(["Typeset",MathJax.Hub,"Zeroes"]);
MathJax.Hub.Queue(["Typeset",MathJax.Hub,"Poles"]);
MathJax.Hub.Queue(["Typeset",MathJax.Hub,"Gain"]);
document.getElementById("matwork").setAttribute("style","opacity:0.5");
document.getElementById("matwork").title="Please enter the values of coeffecients of the equation first";
}
};

function discriminant( a, b, c)
{
  return b*b-4*a*c;
};


function showval(num)
{
if(num==1)
  {genval("z1i","z2i",0);
    genval("z1r","z2r",1);
  }
  else if(num==2)
  {
    genval("z2i","z1i",0);
    genval("z2r","z1r",1);
  }
  else if(num==3)
  {
  genval("p1i","p2i",0);
    genval("p1r","p2r",1);
  }
  else if(num==4){
  genval("p2i","p1i",0);
    genval("p2r","p1r",1);}
  else if(num==5){
    if(document.getElementById("z1i").value!="" || document.getElementById("z1i").value!= 0 )
       genval("z1r","z2r",1);
  }
  else if(num==6){
    if(document.getElementById("z1i").value!="" || document.getElementById("z1i").value!= 0 )
       genval("z2r","z1r",1);
  }
  else if(num==7){
    if(document.getElementById("p1i").value!="" || document.getElementById("p1i").value!= 0 )
       genval("p1r","p2r",1);
  }
  else{
    if(document.getElementById("p1i").value!="" || document.getElementById("p1i").value!= 0 )
       genval("p2r","p1r",1);
  }
};

function genval(idofinput,idofspan,num){
var x ;
x = document.getElementById(idofinput).value;
//var x1 = x.toFixed(2);
if(num)
document.getElementById(idofspan).value=x;
else
{ x=parseFloat(x);
  x=x*-1;
  document.getElementById(idofspan).value=x.toFixed(2);
}
};

var lc=1;

function runprog(i)
{
lc=lc+1;
if(lc<=6)
highlightline(lc);
else
{ mto=1;
  document.getElementById("line6").setAttribute("style","color:black;");
  document.getElementById("mrun").disabled = true;
  var ms = window.matchMedia("screen and (max-width:950px)");
  widthcheck(ms);
  ms.addListener(widthcheck);
  document.getElementById("mrun").disabled=true;
  document.getElementById("mrun").classList.remove("mrunenabled");
  document.getElementById("mrun").classList.add("mrundisabled");
}
};

function cwidth(ms) {
  if(ms.matches)
      var chartplot = document.getElementById("chartmine").getContext("2d");
    else
      var chartplot = document.getElementById("myChart").getContext("2d");
    if(window.ch!=undefined)
  window.ch.destroy();

window.ch = new Chart(chartplot, {
  type: "scatter",
  data: {
    datasets: [{
      pointStyle:'cross',
      rotation:45,
      borderWidth: 1,
      borderColor: "rgb(0,0,255)",
      pointRadius: 6,
      data: poles,
      label:"Poles"
    },
    {
      pointStyle: 'circle',
      pointRadius: 6,
      pointBackgroundColor: "rgb(0,255,0)",
      data: roots,
      label: "Zeroes"
    }
    ]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display:true,
      labels : {
        usePointStyle: true
      },

    },
    scales: {
     
      yAxes: [
      {
        scaleLabel:{
                  display:true,
                  labelString: "Imaginary Axis"
                }
      }
      ],
      xAxes: [
              {
                scaleLabel:{
                  display:true,
                  labelString: "Real Axis"
                }
              }
      ],
    }
  }
});
}
function widthcheck(ms){
if(ms.matches)
  document.getElementById("chartcont").setAttribute("style","display:block;");
else
  {document.getElementById("chartcont1").setAttribute("style","display:block;");
    document.getElementById("generated_eqn").setAttribute("style","display:block;");
}}

function highlightline(l)
{
var ln = "line"+l;
var out = "out"+(l-1);
document.getElementById(ln).setAttribute("style","color:blue;");
document.getElementById(out).setAttribute("style","display:block;");
if(lc!=1)
ln = "line"+(l-1);
document.getElementById(ln).setAttribute("style","color:black;");
};

var menu_score = 0; 
function dispmenu(val)
{
   val.classList.toggle("change");
  menu_score = menu_score+1;
  if(menu_score==1)
  {
    document.getElementById("navbar").setAttribute("style","display:block");
    document.getElementById("simulation-cont").setAttribute("style","opacity:0.5");
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:1");
    menu_score=-1;
    document.body.style.backgroundColor="black";
  }
  else
    {
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:0.5");
         document.body.style.backgroundColor="white";
          document.getElementById("simulation-cont").setAttribute("style","opacity:01");
      document.getElementById("navbar").setAttribute("style","display:none");}
}
