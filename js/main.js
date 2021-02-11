function showDiv(){
  document.getElementById('Info').innerHTML=`<p>
  <big>
  <br />   <br />
    Nous espérons que vous trouverez ici à la
    <span class="orange">Maternelle de nos jardins</span>
    <br />
    tout ce dont vous avez besoin.
    <br />
    <br />
    Le but de notre
    <span class="orange">crèche</span>
    est de fournir une éducation de qualité en diffusant un enseignement
    <br />
    et une formation appropriés dans le domaine de la
    <span class="orange">petite enfance et du préscolaire.</span>
    <br />
    nous ferons tout notre possible pour être à la hauteur de vos
    attentes.
    <br />
    <br />
    Nous accueillons les enfants de 24 mois jusqu’à 5 ans.
    <br />
    <br />
    Cette
    <span class="orange">école du préscolaire</span>
    est aujourd’hui considérée comme une part normale du
    <br />
    cursus des élèves. Les enfants y développent leurs facultés
    fondamentales, perfectionnent leur langage et commencent à <br>
    découvrir l’univers de l’écrit, celui des nombres et d’autres domaines d’apprentissage. 
  </big>
</p>`  ;
  
}

$(function() {
  

  $("#contact-form").validator();

  // when the form is submitted
  $("#contact-form").on("submit", function(e) {
    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
      var url = "test.html";


      var messageAlert = "alert-success";
      var messageText =
        "Votre message a été bien envoyé, merci.";

      // let's compose Bootstrap alert box HTML
      var alertBox =
        '<div class="alert ' +
        messageAlert +
        ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>' +
        messageText +
        "</div>";

      // If we have messageAlert and messageText
      if (messageAlert && messageText) {
        // inject the alert to .messages div in our form
        $("#contact-form").find(".messages").html(alertBox);
        // empty the form
        $("#contact-form")[0].reset();
      }

      return false;
    }
  });
});