var mto=0.5;
var lab=[],dats=[],dati=[];
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
lab=[];
dats=[];
dati=[];
var nums,dens;
var a= "0";
var b= "1";
var r= document.getElementById("denc").value;
var p= document.getElementById("dena").value;
var q= document.getElementById("denb").value;
roots=[];
poles=[];
var x1,y1;
var ni=0,di=0;
a1=parseInt(a);
b1=parseInt(b);
a2=parseInt(p);
b2=parseInt(q);
c2=parseInt(r)+1;
var as1 = 1/c2;
var cs1 = -1*b2/2/a2;
var bs1 = -1/c2;
var cs0 = c2-b2*b2/4/a2;
console.log(cs0);
if(cs0<0)
{ 
  cs2 = Math.sqrt(-1*cs0);
}
else
cs2 = Math.sqrt(cs0);
bs2 = -1*as1*b2/2/a2/cs2;

var maxls,stepls;
if(amplitudes(as1,bs1,bs2,cs0,cs1,cs2,10)==amplitudes(as1,bs1,bs2,cs0,cs1,cs2,9.8))
{maxls=10;
stepls=0.05;}
else if(amplitudes(as1,bs1,bs2,cs0,cs1,cs2,25)==amplitudes(as1,bs1,bs2,cs0,cs1,cs2,25.5))
{
maxls=25;
stepls=0.125;}
else if(amplitudes(as1,bs1,bs2,cs0,cs1,cs2,50)==amplitudes(as1,bs1,bs2,cs0,cs1,cs2,49))
{
maxls=50;
stepls=0.25;}
else if(amplitudes(as1,bs1,bs2,cs0,cs1,cs2,100)==amplitudes(as1,bs1,bs2,cs0,cs1,cs2,98))
{
  maxls=100;
  stepls=0.5;
}
else if(amplitudes(as1,bs1,bs2,cs0,cs1,cs2,200)==amplitudes(as1,bs1,bs2,cs0,cs1,cs2,196))
{
  maxls=200;
  stepls=1;
}
else{
maxls=1;
stepls=0.005;
}
for(let i=0;i<=maxl;i=i+stepl)
{
 
  lab.push(i.toFixed(1));
}
//IMPULSE
var ci1 = -1*b2/2/a2;
var ci0 = c2-b2*b2/4/a2;
console.log(ci0);
if(ci0<0)
{ 
  ci2 = Math.sqrt(-1*ci0);
}
else
ci2 = Math.sqrt(ci0);
var ai1=1/a2/ci2;

var maxli,stepli;
if(amplitudei(ai1,ci0,ci1,ci2,10)==amplitudei(ai1,ci0,ci1,ci2,9.8))
{maxli=10;
stepli=0.05;}
else if(amplitudei(ai1,ci0,ci1,ci2,25)==amplitudei(ai1,ci0,ci1,ci2,25.5))
{
maxli=25;
stepli=0.125;}
else if(amplitudei(ai1,ci0,ci1,ci2,50)==amplitudei(ai1,ci0,ci1,ci2,49))
{
maxli=50;
stepli=0.25;}
else if(amplitudei(ai1,ci0,ci1,ci2,100)==amplitudei(ai1,ci0,ci1,ci2,98))
{
  maxli=100;
  stepli=0.5;
}
else if(amplitudei(ai1,ci0,ci1,ci2,200)==amplitudei(ai1,ci0,ci1,ci2,196))
{
  maxli=200;
  stepli=1;
}
else{
maxli=300;
stepli=1.5;
}
var maxl,stepl;
if(maxls>maxli)
  {maxl=maxls;
    stepl=stepls;}
    else
    {maxl=maxli;
    stepl=stepli;
    }
for(let i=0;i<=maxl;i=i+stepl)
{
   dats.push(amplituds(as1,bs1,bs2,cs0,cs1,cs2,i));
  dati.push(amplitudi(ai1,ci0,ci1,ci2,i));
  lab.push(i.toFixed(1));
}
lc = 1;
document.getElementById("line1").setAttribute("style","color:blue");
document.getElementById("chartcont").setAttribute("style","display:none");
document.getElementById("tanswer").setAttribute("style","display:none;");
document.getElementById("chartcont1").setAttribute("style","display:none;");
for(let i=1;i<5;i++)
{
 let out = "out" + i;
 let ln = "line" + (i+1);
 document.getElementById(ln).setAttribute("Style","color:black");
 document.getElementById(out).setAttribute("style","display:none");
}
/*if(cs0==Infinity || cs0==-Infinity || isNaN(cs0))
{
  mto=0;
  alert("Please check the values of coeffecients as the combination leads to non determinant values");
}
else if(c2===Infinity || c2==-Infinity || isNaN(c2))
{mto=0;
  alert("Please check the values of coeffecients as the combination leads to non determinant values");
}
else if(cs1==Infinity || cs1==-Infinity || isNaN(cs1))
{mto=0;
  alert("Please check the values of coeffecients as the combination leads to non determinant values");}
*/
if(mto){
  document.getElementById("matwork").title="";
document.getElementById("mrun").disabled = false;
document.getElementById("matwork").setAttribute("style","opacity:1");
document.getElementById("mrun").classList.remove("mrundisabled","mrunenabled");
document.getElementById("mrun").classList.add("mrunenabled");
document.getElementById("matwork").classList.remove('mat');
var numerator = "$${\\frac{";
if(a!=0)
numerator=numerator+a+"s";
if(b!=0)
  if(a!=0)
numerator=numerator+" + " + b;
  else
  numerator=numerator+ b;
numerator=numerator+"}";
var denominator = "{";
if(a2!=0)
denominator=denominator+a2.toFixed()+"s";
if(b2!=0)
  if(a2!=0)
denominator=denominator+ " + " + b2.toFixed();
  else
    denominator=denominator+ b2.toFixed();
if(c2!=0)
  if(b2!=0)
denominator=denominator+ " + " + c2.toFixed();
  else
    denominator=denominator+ c2.toFixed();
denominator=denominator+"}}$$";
var eqn = numerator + denominator;
document.getElementById("fgenerated_eqn").innerHTML = eqn;
document.getElementById("out4").innerHTML=eqn;
var numerator = "$${\\frac{";
if(a!=0)
numerator=numerator+a+"s";
if(b!=0)
  if(a!=0)
numerator=numerator+" + " + b;
  else
  numerator=numerator+ b;
numerator=numerator+"}";
var denominator = "{";
if(p!=0)
denominator=denominator+p+"s";
if(q!=0)
  if(p!=0)
denominator=denominator+ " + " + q;
  else
    denominator=denominator+ q;
if(r!=0)
  if(q!=0)
denominator=denominator+ " + " + r;
  else
    denominator=denominator+ r;
denominator=denominator+"}}$$";
eqn = numerator + denominator;

document.getElementById("generated_eqn").innerHTML = eqn;
var output;
document.getElementById("out3").innerHTML=eqn;
if(cs0>0)
eqn = "$${"+as1.toFixed(5) +bs1.toFixed(4)+ " * e^{"+cs1.toFixed(2)+"*t} * "+"cos({"+cs2.toFixed(2)+"}) " +bs2.toFixed(4)+ " *  e^{"+cs1.toFixed(2)+"*t} * "+"sin({"+cs2.toFixed(2)+"}) "+"}$$";
else
eqn ="$${"+as1.toFixed(5) +bs1.toFixed(4)+ " * e^{"+cs1.toFixed(2)+"*t} * "+"cosh({"+cs2.toFixed(2)+"}) " +bs2.toFixed(4)+ " * e^{"+cs1.toFixed(2)+"*t} * "+"sinh({"+cs2.toFixed(2)+"}) "+"}$$";
document.getElementById("tanswer").innerHTML=eqn;
var j,k;

document.getElementById("line1values").innerHTML=a + " 0 " + b ;
document.getElementById("line2values").innerHTML=p + " " + q + " " + r;

var ms =window.matchMedia("(max-width:950px)"); 
    cwidth(ms);
    ms.addListener(cwidth);
MathJax.Hub.Queue(["Typeset",MathJax.Hub,"generated_eqn"]);
MathJax.Hub.Queue(["Typeset",MathJax.Hub,"fgenerated_eqn"]);
MathJax.Hub.Queue(["Typeset",MathJax.Hub,"out3"]);
MathJax.Hub.Queue(["Typeset",MathJax.Hub,"out4"]);
MathJax.Hub.Queue(["Typeset",MathJax.Hub,"tanswer"]);
}
else
{
  mto=1;
document.getElementById("generated_eqn").innerHTML ="$${ \\frac{ 1}{  ps + q} }$$";
MathJax.Hub.Queue(["Typeset",MathJax.Hub,"generated_eqn"]);
document.getElementById("fgenerated_eqn").innerHTML ="$${ \\frac{ 1}{  ps + q+1} }$$";
MathJax.Hub.Queue(["Typeset",MathJax.Hub,"fgenerated_eqn"]);
document.getElementById("mrun").disabled = true;
document.getElementById("mrun").classList.remove('mrunenabled','mrundisabled');
document.getElementById("tanswer").setAttribute("style","display:none");
document.getElementById("mrun").classList.add('mrundisabled');
document.getElementById("matwork").classList.add('mat');
document.getElementById("matwork").setAttribute("style","opacity:0.5");
document.getElementById("matwork").title="Please enter the values of coeffecients of the equation first";
}
};

function discriminant( a, b, c)
{
  return b*b-4*a*c;
};


function showval()
{
//genval("numa","la");
//genval("numb","lb");
//genval("numc","lc");
genval("dena","lp");
genval("denb","lq");
genval("denc","lr");
};

function genval(idofinput,idofspan){
var x ;
x = document.getElementById(idofinput).value;
//var x1 = x.toFixed(2);
document.getElementById(idofspan).innerHTML=x;
};

var lc=1;

function runprog(i)
{
lc=lc+1;
if(lc<=5)
highlightline(lc);
else
{ document.getElementById("line5").setAttribute("style","color:black;");
  document.getElementById("mrun").disabled = true;
  var ms = window.matchMedia("screen and (max-width:950px)");
  console.log(ms);
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
const labels = lab;
const data = {
  labels: labels,

  datasets: [{
    label:"Step Response",
    data: dats,
    fill: false,
    pointRadius:1,
    borderColor: 'rgba(75, 192, 192,0.7)',
    tension: 0.1
  },
  {
    label:"Impulse Response",
    data: dati,
    fill: false,
    pointRadius:1,
    borderColor: 'rgba(192, 75, 192,0.7)',
    tension: 0.1
  }]
};
window.ch = new Chart(chartplot, {
  type:"line",
  data:data,
   options: {
        title: {
          display: true,
          text: "Step Response",
          fontSize: 14,
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            scaleLabel: {
              display:"Time"!==' ',
              labelString: "Time"
            },
            
          }],
          yAxes: [{
            stacked: false, // `true` for stacked area chart, `false` otherwise
            beginAtZero: false,
            scaleLabel: {
              display: "Amplitude" !== '',
              labelString: "Amplitude"
            },
            
            
          }]
        },}
});
/*window.ch = new Chart(chartplot, {
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
});*/
}
function widthcheck(ms){
if(ms.matches)
  document.getElementById("chartcont").setAttribute("style","display:block;");
else
  {document.getElementById("chartcont1").setAttribute("style","display:block;");
  document.getElementById("tanswer").setAttribute("style","display:block");
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

function amplitudes(as1,bs1,bs2,cs0,cs1,cs2,t)
{
  var cal;
if(cs0<0){
cal = as1+bs1*Math.pow(Math.E,cs1*t)*Math.cosh(cs2*t)+bs2*Math.pow(Math.E,cs1*t)*Math.sinh(cs2*t)
}
else{
cal = as1+bs1*Math.pow(Math.E,cs1*t)*Math.cos(cs2*t)+bs2*Math.pow(Math.E,cs1*t)*Math.sin(cs2*t)
}
cal = cal.toFixed(4);
return cal;
}
function amplituds(as1,bs1,bs2,cs0,cs1,cs2,t)
{
  var cal;
if(cs0<0){
cal = as1+bs1*Math.pow(Math.E,cs1*t)*Math.cosh(cs2*t)+bs2*Math.pow(Math.E,cs1*t)*Math.sinh(cs2*t)
}
else
{
cal = as1+bs1*Math.pow(Math.E,cs1*t)*Math.cos(cs2*t)+bs2*Math.pow(Math.E,cs1*t)*Math.sin(cs2*t)
}
return cal;
}
//For impulse
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

function amplitudei(ai1,ci0,ci1,ci2,t)
{
  var cal;
if(ci0<0){
cal = ai1*Math.pow(Math.E,ci1*t)*Math.sinh(ci2*t)
}
else{
cal = ai1*Math.pow(Math.E,ci1*t)*Math.sin(ci2*t)
}
cal = cal.toFixed(4);
return cal;
}
function amplitudi(ai1,ci0,ci1,ci2,t)
{
  var cal;
if(ci0<0){
cal = ai1*Math.pow(Math.E,ci1*t)*Math.sinh(ci2*t)
}
else
{
cal = ai1*Math.pow(Math.E,ci1*t)*Math.sin(ci2*t)
}
return cal;
}