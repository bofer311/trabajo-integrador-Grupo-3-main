$(document).ready(function(){
    // Ocultar todas las páginas excepto la primera
    $('.page').not(':first').hide();
  });
  
  // Manejar el evento click del botón "Siguiente"
  $('.next').click(function() {
    // Obtener la página actual y la siguiente
    var current = $(this).closest('.page');
    var next = current.next('.page');
    
    // Validar los campos de la página actual
    if (current.find(':input[required]').filter(function(){return this.value==='';}).length > 0) {
      alert('Por favor, complete todos los campos obligatorios.');
      return false;
    }
    
    // Generar campos no editables en la página siguiente
    next.find(':input').each(function() {
      var input = $(this);
      var value = input.val();
      var readonly = '<input type="text" readonly value="' + value + '">';
      input.replaceWith(readonly);
    });
    
    // Mostrar la página siguiente y ocultar la actual
    current.hide();
    next.show();
  });
  
  // Manejar el evento click del botón "Anterior"
  $('.prev').click(function() {
    // Obtener la página actual y la anterior
    var current = $(this).closest('.page');
    var prev = current.prev('.page');
    
    // Mostrar la página anterior y ocultar la actual
    current.hide();
    prev.show();
  });
  