// In una sottocartella handlebars fate una pagina semplice con un input e un pulsante e inviate un messaggio a cui segue una risposta come avete fatto per boolzapp, usando però handlebars.

$(document).ready(function () {
$('.invio').click(
  function() {
    // stampa invio msg
    var text = $('.send').val();

    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);

    var context = {
      'text': text,
      'invioricevi': 'invio',
    };

    var html = template(context);
    $('#prova').append(html);
   // stampa msg ricevuto
    setTimeout(function() {
      var replay = 'come stai?';
      var source = $('#entry-template').html();
      var template = Handlebars.compile(source);

      var context = {
        'text': replay,
        'invioricevi': 'ricevi'
      };
      var html = template(context);
      $('#prova').append(html);

    },1000);
  }
)
});
