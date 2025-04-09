
/*document.addEventListener('DOMContentLoaded', function(){ // La fonction pour charger le document html et exécuter le code js
    let bouton = this.documentElementById('mybutton'); // Créér une variable bouton, charger l'élément id dans le code html et lo stocker a l'intérieur 
    bouton.addEventListener('click', function(){ // Exécuter le code une foie qu'un clic est détecter
        window.location.href = "cv.html"; // Chargement du lien pour diriger l'utilisateur vers la page
    });
});*/
document.getElementById('mybutton').addEventListener('click',() => {
    window.location.href = 'cv.html'; 
    //alert('clic validé !');
});

function changeColor(color){
    console.log(color);
    // document.documentElement.style.setProperty("--bgcolor", color, "--bgpro", color);
    document.documentElement.style.setProperty("--bgcolor", color);
}

// function telecharger(){
//     const main = document.getElementById('main');
//     html2pdf().from(main).save('cvAK.pdf');
// }
function telecharger() {
    var element = document.getElementById('main');
    document.getElementById('hide').style.display = 'none';
    var opt = {
      margin:       0,
      filename:     'cvAK.pdf',
      image:        { type: 'png', quality: 0.98 },
      html2canvas:  { 
        scale: 2,
        /*scrollX: 250,*/
        scrollY: 0,
        /*windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,*/
        useCORS: true, //pour la securité concernant les liens externes
      },
      jsPDF: { 
        unit: 'px', 
        format: [595,842], 
        orientation: 'portrait' 
      }
    };
    html2pdf().set(opt).from(element).save();
}
