// In una sottocartella handlebars fate una pagina semplice con un input e un pulsante e inviate un messaggio a cui segue una risposta come avete fatto per boolzapp, usando però handlebars.

$(document).ready(function () {
$('.invio').click(
  function() {
    // stampa invio msg
    var text = $('.send').val();

    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    // object invio
    var context = {
      'text': text,
      'invioricevi': 'invio',
    };
    // stampo su html
    var html = template(context);
    $('#prova').append(html);
   // stampa msg ricevuto
    setTimeout(function() {
      var replay = 'come stai?';
      var source = $('#entry-template').html();
      var template = Handlebars.compile(source);
      // object receveid
      var context = {
        'text': replay,
        'invioricevi': 'ricevi'
      };
      // stampo su html
      var html = template(context);
      $('#prova').append(html);

    },1000);
  }
)
});
