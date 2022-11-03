var menu_score = -1; 
function dispmenu()
{
 
  var ms =window.matchMedia("(max-width:850px)"); 
    if(ms.matches)
    {
      if(menu_score==0)
      {
        menu_score=-1;
    document.getElementById("main-sec").setAttribute("style","width:100%");
   // document.getElementById("des").setAttribute("style","min-height:450px");
    document.getElementById("navbar").setAttribute("style","display:block");
   // document.getElementById("csec").setAttribute("style","min-height:450px");
    document.body.style.backgroundColor="rgba(0,0,0,0.1)";
    window.addEventListener('mouseup', function(event){
      var box = document.getElementById('navbar');
      if (event.target != box && event.target.parentNode != box){
        box.style.display = 'none';
        document.body.style.backgroundColor="white";
        if(event.target != document.getElementById("head-btn"))
          menu_score=0;
      document.getElementById("csec").setAttribute("style","min-height:150px");
      document.getElementById("main-sec").setAttribute("style","width:100%");
      document.getElementById("des").setAttribute("style","min-height:150px");
        }});
  }
  else{
    document.getElementById("navbar").setAttribute("style","display:none");
         document.getElementById("csec").setAttribute("style","min-height:150px");
      document.getElementById("main-sec").setAttribute("style","width:100%");
      document.getElementById("des").setAttribute("style","min-height:150px");
      menu_score=0;
  }
      }

else
{
  if(menu_score==0)
      {
    document.getElementById("navbar").setAttribute("style","display:block");
    document.getElementById("csec").setAttribute("style","min-height:250px");
    document.getElementById("main-sec").setAttribute("style","width:75vw");
        document.getElementById("des").setAttribute("style","min-height:250px");
   menu_score = -1;
  }
  else{
    document.getElementById("navbar").setAttribute("style","display:none");
         document.getElementById("csec").setAttribute("style","min-height:150px");
      document.getElementById("main-sec").setAttribute("style","width:100%");
      document.getElementById("des").setAttribute("style","min-height:150px");
      menu_score=0;
  }
      }
}

    


function myFunction(x) {
  x.classList.toggle("change");
}