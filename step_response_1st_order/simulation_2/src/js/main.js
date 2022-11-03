var mto=0.5;
var lab=[],dat=[];
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
dat=[];
var nums,dens;
var a= "0";
var b= "1";
//var c= document.getElementById("numc").value;
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
var a3=a2+a1;
var b3 = b2+b1;
var s = a3.toFixed(0);
var t = b3.toFixed(0);
var c1 = b1/(b1+b2);
var c2 = 1/a3;
var c3 = -1*(b3/a3);
console.log(typeof c1);
console.log(c1);
var maxl,stepl;
if((Math.pow(Math.E,c3*10)*c2).toFixed(4)==(Math.pow(Math.E,c3*9.8)*c2).toFixed(4))
{maxl=10;
stepl=0.2;}
else if((Math.pow(Math.E,c3*25)*c2).toFixed(4)==(Math.pow(Math.E,c3*24.5)*c2).toFixed(4))
{
maxl=25;
stepl=0.5;}
else if((Math.pow(Math.E,c3*50)*c2).toFixed(4)==(Math.pow(Math.E,c3*49)*c2).toFixed(4))
{
maxl=50;
stepl=1;}
else if((Math.pow(Math.E,c3*100)*c2).toFixed(4)==(Math.pow(Math.E,c3*98)*c2).toFixed(4))
{
  maxl=100;
  stepl=2;
}
else if((Math.pow(Math.E,c3*200)*c2).toFixed(4)==(Math.pow(Math.E,c3*196)*c2).toFixed(4))
{
  maxl=200;
  stepl=4;
}
else{
maxl=1;
stepl=0.02;
}
for(let i=0;i<=maxl;i=i+stepl)
{
  let cal = Math.pow(Math.E,c3*i)*c2;
  console.log(cal.toFixed(4));
  dat.push(cal);
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
if(c1==Infinity || c1==-Infinity || isNaN(c1))
{
  mto=0;
  alert("Please check the values of coeffecients as the combination leads to non determinant values");
}
else if(c2===Infinity || c2==-Infinity || isNaN(c2))
{mto=0;
  alert("Please check the values of coeffecients as the combination leads to non determinant values");
}
else if(c3==Infinity || c3==-Infinity || isNaN(c3))
{mto=0;
  alert("Please check the values of coeffecients as the combination leads to non determinant values");}

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
if(a3!=0)
denominator=denominator+a3.toFixed()+"s";
if(b3!=0)
  if(a3!=0)
denominator=denominator+ " + " + b3.toFixed();
  else
    denominator=denominator+ b3.toFixed();
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
denominator=denominator+"}}$$";
eqn = numerator + denominator;

document.getElementById("generated_eqn").innerHTML = eqn;
var output;
document.getElementById("out3").innerHTML=eqn;
eqn = "$${"+"e^{"+c3.toFixed(2)+"*t}*"+c2.toFixed(4)+"}$$";
document.getElementById("tanswer").innerHTML=eqn;
var j,k;

document.getElementById("line1values").innerHTML=a + " " + b ;
document.getElementById("line2values").innerHTML=p + " " + q ;

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
//genval("denc","lr");
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
    label:"Amplitude",
    data: dat,
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
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