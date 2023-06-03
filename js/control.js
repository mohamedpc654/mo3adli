/*function calcul() {
   
    //-le nouveau calcul 
    //Récupérer les notes dans des variables
    var math = parseFloat(document.getElementById("math").value),
        physique = parseFloat(document.getElementById("phy").value),
        algo = parseFloat(document.getElementById("algop").value),
        sti = parseFloat(document.getElementById("tic").value),
        français = parseFloat(document.getElementById("fr").value),
        philo = parseFloat(document.getElementById("philo").value),
        arabe = parseFloat(document.getElementById("arab").value),
        sport = parseFloat(document.getElementById("sprt").value),
        option = parseFloat(document.getElementById("mato").value),
        anglais = parseFloat(document.getElementById("en").value),
        checkbox = document.getElementById("dispenserCheckbox"),

        som_notes, som_coef, moy, fg, score7, fb, fs;
if (option > 10)
    option = eval((option - 10))
else
    option = 0

if (checkbox.checked) {
    sport = 10;
}
//calculer la moyenne du session principale nouveau regime
som_notes = eval((math * 3) + (physique * 2) + (algo * 3) + français + (sti * 3) + philo + arabe + sport + option + anglais);
som_coef = 16;
moy = eval(som_notes / som_coef);
//calculer le score nouveau regime
fb = eval(moy * 4);
fs = eval((1.5 * math) + (0.5 * physique) + (1.5 * algo) + (0.5 * sti) + anglais + français);
fg = eval(fb + fs);
score7 = eval(fg + ((fg * 7) / 100));
//affichage des resultas
document.getElementById("moyenne").value = moy.toFixed(2);
document.getElementById("score").value =  fg.toFixed(2);
document.getElementById("score7").value =  score7.toFixed(2);



    var input = document.getElementById("moyenne");
    var image = document.getElementById("img1");
    var img="images/admis.jpg";
    var img2="images/noadmis.png";  
    if (parseFloat(input.value) >= 10) {
      image.src =img; // Change to the new image source
      document.getElementById('admis').play();
    } else {
      image.src = img2; // Change to the default image source
    }
}*//*
function toggleInput() {
    checkbox = document.getElementById("dispenserCheckbox");
    input = document.getElementById("sprt");

   if (checkbox.checked) {
       input.setAttribute("disabled", "disabled");
   } else {
       input.removeAttribute("disabled");
   }
}
 */
// sport disponse
function toggleInput() {
    checkbox = document.getElementById("dispenserCheckbox");
    input = document.getElementById("spNr");

   if (checkbox.checked) {
       input.setAttribute("disabled", "disabled");
   } else {
       input.removeAttribute("disabled");
   }
}


//Session principale nouveau regime
function calculNr() {


   //Récupérer les notes dans des variables
   var math = parseFloat(document.getElementById("maNr").value),
       physique = parseFloat(document.getElementById("phyNr").value),
       algo = parseFloat(document.getElementById("alNr").value),
       sti = parseFloat(document.getElementById("stiNr").value),
       français = parseFloat(document.getElementById("frNr").value),
       philo = parseFloat(document.getElementById("phNr").value),
       arabe = parseFloat(document.getElementById("arNr").value),
       sport = parseFloat(document.getElementById("spNr").value),
       option = parseFloat(document.getElementById("opNr").value),
       anglais = parseFloat(document.getElementById("anNr").value),
       checkbox = document.getElementById("dispenserCheckbox"),

       som_notes, som_coef, moy, fg, score7, fb, fs;
   if (option > 10)
       option = eval((option - 10))
   else
       option = 0

   if (checkbox.checked) {
       sport = 10;
   }
   //calculer la moyenne du session principale nouveau regime
   som_notes = eval((math * 3) + (physique * 2) + (algo * 3) + français + (sti * 3) + philo + arabe + sport + option + anglais);
   som_coef = 16;
   moy = eval(som_notes / som_coef);
   //calculer le score nouveau regime
   fb = eval(moy * 4);
   fs = eval((1.5 * math) + (0.5 * physique) + (1.5 * algo) + (0.5 * sti) + anglais + français);
   fg = eval(fb + fs);
   scor7 = eval(fg + ((fg * 7) / 100));
   //affichage des resultas
   document.getElementById("moyNr").value = moy.toFixed(2);
   document.getElementById("scoreNr").value = fg.toFixed(2);
   document.getElementById("score7Nr").value = scor7.toFixed(2);

   var input = document.getElementById("moyNr");
   var image = document.getElementById("img1");
   var img="images/admis.jpg";
   var img2="images/zokhsin.jpg";  
   if (parseFloat(input.value) >= 10) {
     image.src =img; 
     document.getElementById('admis').play();
   } 
   else {
     image.src = img2; 
   }
}
function resizeIframe() {
    var iframe = document.getElementById('myIframe');
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + '999999px';
  }
  window.addEventListener('DOMContentLoaded', function() {
    var iframe = document.getElementById('myIframe');
    iframe.onload = resizeIframe;
  });
  window.addEventListener('resize', resizeIframe);
    