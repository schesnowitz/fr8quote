$(function() {
  // limits the number of categories
  $(".chosen_destination_shipper_receivers").chosen();

    $(document).on("change", "#chosen_destination_shipper_receivers0", function() {
      $('#sr_street_destination0, #sr_city_destination0, #sr_state_destination0, #sr_postal_destination0').val(this.value);   

    name = ($('#chosen_destination_shipper_receivers0').find("option:selected").text());
    $("#input_name_destination0").val(name);  

    street = ($('#sr_street_destination0').find("option:selected").text());
    $("#input_street_destination0").val(street);

    city = ($('#sr_city_destination0').find("option:selected").text());
    $("#input_city_destination0").val(city);

    state = ($('#sr_state_destination0').find("option:selected").text());
    $("#input_state_destination0").val(state); 

    postal_code = ($('#sr_postal_destination0').find("option:selected").text());
    $("#input_postal_destination0").val(postal_code);

    
  });

  // ---------------
    $(document).on("change", "#chosen_destination_shipper_receivers1", function() {
      $('#sr_street_destination1, #sr_city_destination1, #sr_state_destination1, #sr_postal_destination1').val(this.value);   

    name = ($('#chosen_destination_shipper_receivers1').find("option:selected").text());
    $("#input_name_destination1").val(name);  

    street = ($('#sr_street_destination1').find("option:selected").text());
    $("#input_street_destination1").val(street);

    city = ($('#sr_city_destination1').find("option:selected").text());
    $("#input_city_destination1").val(city);

    state = ($('#sr_state_destination1').find("option:selected").text());
    $("#input_state_destination1").val(state); 

    postal_code = ($('#sr_postal_destination1').find("option:selected").text());
    $("#input_postal_destination1").val(postal_code); 

    // $("#destination_count1").val(2);
  });

  // ---------------
    $(document).on("change", "#chosen_destination_shipper_receivers2", function() {
      $('#sr_street_destination2, #sr_city_destination2, #sr_state_destination2, #sr_postal_destination2').val(this.value);   

    name = ($('#chosen_destination_shipper_receivers2').find("option:selected").text());
    $("#input_name_destination2").val(name);  

    street = ($('#sr_street_destination2').find("option:selected").text());
    $("#input_street_destination2").val(street);

    city = ($('#sr_city_destination2').find("option:selected").text());
    $("#input_city_destination2").val(city);

    state = ($('#sr_state_destination2').find("option:selected").text());
    $("#input_state_destination2").val(state); 

    postal_code = ($('#sr_postal_destination2').find("option:selected").text());
    $("#input_postal_destination2").val(postal_code); 

    // $("#destination_count2").val(3);
  });
  // ---------------
  $(document).on("change", "#chosen_destination_shipper_receivers3", function() {
      $('#sr_street_destination3, #sr_city_destination3, #sr_state_destination3, #sr_postal_destination3').val(this.value);   

    name = ($('#chosen_destination_shipper_receivers3').find("option:selected").text());
    $("#input_name_destination3").val(name);  

    street = ($('#sr_street_destination3').find("option:selected").text());
    $("#input_street_destination3").val(street);

    city = ($('#sr_city_destination3').find("option:selected").text());
    $("#input_city_destination3").val(city);

    state = ($('#sr_state_destination3').find("option:selected").text());
    $("#input_state_destination3").val(state); 

    postal_code = ($('#sr_postal_destination3').find("option:selected").text());
    $("#input_postal_destination3").val(postal_code); 

    // $("#destination_count3").val(4);
  });
  // ---------------

  $(document).on("change", "#chosen_destination_shipper_receivers4", function() {
      $('#sr_street_destination4, #sr_city_destination4, #sr_state_destination4, #sr_postal_destination4').val(this.value);   

    name = ($('#chosen_destination_shipper_receivers4').find("option:selected").text());
    $("#input_name_destination4").val(name);  

    street = ($('#sr_street_destination4').find("option:selected").text());
    $("#input_street_destination4").val(street);

    city = ($('#sr_city_destination4').find("option:selected").text());
    $("#input_city_destination4").val(city);

    state = ($('#sr_state_destination4').find("option:selected").text());
    $("#input_state_destination4").val(state); 

    postal_code = ($('#sr_postal_destination4').find("option:selected").text());
    $("#input_postal_destination4").val(postal_code); 

    // $("#destination_count4").val(5); 
  });
  // ---------------


  // ---------------

  $( ".chosen_destination_shipper_receivers" ).each(function( i ) {
  $(this).attr('id', 'chosen_destination_shipper_receivers' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var script=document.createElement('script');
    script.type='text/javascript';
  // script.innerHTML=" alert('"+i+"');";
    $(this).find('select').append(script);
  });

  $( ".destination_count" ).each(function( i ) {
  $(this).attr('id', 'destination_count' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var destination_count = document.createElement('destination_count');
    destination_count.type='text/javascript';
  // script.innerHTML=" alert('"+i+"');";
    $(this).find('destination_count').append(destination_count);  
  });

  $( ".sr_street_destination" ).each(function( i ) {
  $(this).attr('id', 'sr_street_destination' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var sr_street_destination = document.createElement('sr_street_destination');
    sr_street_destination.type='text/javascript';
  // script.innerHTML=" alert('"+i+"');";
    $(this).find('sr_street_destination').append(sr_street_destination); 
  });

  $( ".sr_city_destination" ).each(function( i ) {
  $(this).attr('id', 'sr_city_destination' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var sr_city_destination = document.createElement('sr_city_destination');
    sr_city_destination.type='text/javascript';
  // script.innerHTML=" alert('"+i+"');";
    $(this).find('sr_city_destination').append(sr_city_destination); 
  });

  $( ".sr_state_destination" ).each(function( i ) {
  $(this).attr('id', 'sr_state_destination' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var sr_state_destination = document.createElement('sr_state_destination');
    sr_state_destination.type='text/javascript';
  // script.innerHTML=" alert('"+i+"');";
    $(this).find('sr_state_destination').append(sr_state_destination); 
  });

  $( ".sr_postal_destination" ).each(function( i ) {
  $(this).attr('id', 'sr_postal_destination' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var sr_postal_destination = document.createElement('sr_postal_destination');
    sr_postal_destination.type='text/javascript';
  // script.innerHTML=" alert('"+i+"');";
    $(this).find('sr_postal_destination').append(sr_postal_destination); 
  });

  $( ".input_name_destination" ).each(function( i ) {
  $(this).attr('id', 'input_name_destination' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var script_name = document.createElement('script_name');
    script_name.type='text/javascript';
    $(this).find('input_name_destination').append(script_name); 
  });


  $( ".input_street_destination" ).each(function( i ) {
  $(this).attr('id', 'input_street_destination' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var script_street = document.createElement('script_street');
    script_street.type='text/javascript';
    $(this).find('input_street_destination').append(script_street);
  });

  $( ".input_city_destination" ).each(function( i ) {
  $(this).attr('id', 'input_city_destination' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var script_city = document.createElement('script_city');
    script_city.type='text/javascript';
    $(this).find('input_city_destination').append(script_city);
  });

  $( ".input_state_destination" ).each(function( i ) {
  $(this).attr('id', 'input_state_destination' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var script_state = document.createElement('script_state');
    script_state.type='text/javascript';
    $(this).find('input_state_destination').append(script_state);
  });

  $( ".input_postal_destination" ).each(function( i ) {
  $(this).attr('id', 'input_postal_destination' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var script_postal = document.createElement('script_postal');
    script_postal.type='text/javascript';
    $(this).find('input_postal_destination').append(script_postal);
  });

  // -----------------------------

    $( ".destination_checkbox_text" ).each(function( i ) {
    $(this).attr('id', 'destination_checkbox_text' + i);
    $(this).append('<span id=\"text' +i+'\"></span>');
      var destination_checkbox_text = document.createElement('destination_checkbox_text');
      destination_checkbox_text.type='text/javascript';
    // script.innerHTML=" alert('"+i+"');";
      $(this).find('destination_checkbox_text').append(destination_checkbox_text);  
    });


    $( ".destination_date" ).each(function( i ) {
    $(this).attr('id', 'destination_date' + i);
    $(this).append('<select id=\"text' +i+'\"></select>');
      var destination_date = document.createElement('destination_date');
      destination_date.type='text/javascript';
      $(this).find('destination_date').append(destination_date);
    });



    $( ".hide_enter_manually_destination" ).each(function( i ) {
      $(this).attr('id', 'hide_enter_manually_destination' + i);
      $(this).append('<span id=\"text' +i+'\"></span>');
        var hide_enter_manually_destination = document.createElement('hide_enter_manually_destination');
        hide_enter_manually_destination.type='text/javascript';
      // script.innerHTML=" alert('"+i+"');";
        $(this).find('hide_enter_manually_destination').append(hide_enter_manually_destination);   
      });

    $( ".hide_drop_destination" ).each(function( i ) {
    $(this).attr('id', 'hide_drop_destination' + i);
    $(this).append('<span id=\"text' +i+'\"></span>');
      var hide_drop_destination = document.createElement('hide_drop_destination');
      hide_drop_destination.type='text/javascript';
    // script.innerHTML=" alert('"+i+"');";
      $(this).find('hide_drop_destination').append(hide_drop_destination);   
    });

    $( ".hide_count_destination" ).each(function( i ) {
    $(this).attr('id', 'hide_count_destination' + i);
    $(this).append('<span id=\"text' +i+'\"></span>');
      var hide_count_destination = document.createElement('hide_count_destination');
      hide_count_destination.type='text/javascript';
    // script.innerHTML=" alert('"+i+"');";
      $(this).find('hide_count_destination').append(hide_count_destination);  
    });

    $( ".hide_name_destination" ).each(function( i ) {
    $(this).attr('id', 'hide_name_destination' + i);
    $(this).append('<span id=\"text' +i+'\"></span>');
      var hide_name_destination = document.createElement('hide_name_destination');
      hide_name_destination.type='text/javascript';
    // script.innerHTML=" alert('"+i+"');";
      $(this).find('hide_name_destination').append(hide_name_destination);  
    }); 

    $( ".hide_street_destination" ).each(function( i ) {
    $(this).attr('id', 'hide_street_destination' + i);
    $(this).append('<span id=\"text' +i+'\"></span>');
      var hide_street_destination = document.createElement('hide_street_destination');
      hide_street_destination.type='text/javascript';
    // script.innerHTML=" alert('"+i+"');";
      $(this).find('hide_street_destination').append(hide_street_destination);  
    }); 

    $( ".hide_city_destination" ).each(function( i ) {
    $(this).attr('id', 'hide_city_destination' + i);
    $(this).append('<span id=\"text' +i+'\"></span>');
      var hide_city_destination = document.createElement('hide_city_destination');
      hide_city_destination.type='text/javascript';
    // script.innerHTML=" alert('"+i+"');";
      $(this).find('hide_city_destination').append(hide_city_destination);  
    });

    $( ".hide_state_destination" ).each(function( i ) {
    $(this).attr('id', 'hide_state_destination' + i);
    $(this).append('<span id=\"text' +i+'\"></span>');
      var hide_state_destination = document.createElement('hide_state_destination');
      hide_state_destination.type='text/javascript';
    // script.innerHTML=" alert('"+i+"');";
      $(this).find('hide_state_destination').append(hide_state_destination);  
    });

    $( ".hide_zip_destination" ).each(function( i ) {
    $(this).attr('id', 'hide_zip_destination' + i);
    $(this).append('<span id=\"text' +i+'\"></span>');
      var hide_zip_destination = document.createElement('hide_zip_destination');
      hide_zip_destination.type='text/javascript';
    // script.innerHTML=" alert('"+i+"');";
      $(this).find('hide_zip_destination').append(hide_zip_destination);  
    });  


  // -----------------------------

  $('.shipment_destinations').on('cocoon:after-insert', function() {
    check_to_hide_or_show_add_link();
  });

  $('.shipment_destinations').on('cocoon:after-remove', function() {
    check_to_hide_or_show_add_link();
  });

  check_to_hide_or_show_add_link();

  function check_to_hide_or_show_add_link() {
    if ($('.shipment_destinations .nested-fields').length == 5) {
      $('.add_destination_address').hide();
    } else {
      $('.add_destination_address').show();
    }
  }
})


$(document).on("change", "#destination_date0", function() {
  date = ($('#destination_date0').val());
  // alert(date);  
  var ids0 = "#hide_count_destination0, #hide_drop_destination0, #hide_name_destination0, #hide_street_destination0, #hide_city_destination0, #hide_state_destination0, #hide_zip_destination0, #destination-rows, #hide_enter_manually_destination0"; 

  if (date == '') { 
  $(ids0).addClass("hidden"); 
  } else {
  $(ids0).removeClass("hidden"); 
  } 
});



  $(document).on("change", "#destination_date1", function() {
   date = ($('#destination_date1').val());
  // alert(date);  
  var ids1 = "#hide_count_destination1, #hide_drop_destination1, #hide_name_destination1, #hide_street_destination1, #hide_city_destination1, #hide_state_destination1, #hide_zip_destination1, #hide_enter_manually_destination1";

  if (date == '') { 
  $(ids1).addClass("hidden"); 
  } else {
  $(ids1).removeClass("hidden"); 
  } 
});

  $(document).on("change", "#destination_date2", function() {
   date = ($('#destination_date2').val());
  // alert(date);  
  var ids2 = "#hide_count_destination2, #hide_drop_destination2, #hide_name_destination2, #hide_street_destination2, #hide_city_destination2, #hide_state_destination2, #hide_zip_destination2, #hide_enter_manually_destination2";

  if (date == '') { 
  $(ids2).addClass("hidden"); 
  } else {
  $(ids2).removeClass("hidden"); 
  } 
});

  $(document).on("change", "#destination_date3", function() {
   date = ($('#destination_date3').val());
  // alert(date);  
  var ids3 = "#hide_count_destination3, #hide_drop_destination3, #hide_name_destination3, #hide_street_destination3, #hide_city_destination3, #hide_state_destination3, #hide_zip_destination3, #hide_enter_manually_destination3";

  if (date == '') { 
  $(ids3).addClass("hidden"); 
  } else {
  $(ids3).removeClass("hidden"); 
  } 
}); 


  $(document).on("change", "#destination_date4", function() {
   date = ($('#destination_date4').val());
  // alert(date);  
  var ids4 = "#hide_count_destination4, #hide_drop_destination4, #hide_name_destination4, #hide_street_destination4, #hide_city_destination4, #hide_state_destination4, #hide_zip_destination4, #hide_enter_manually_destination4";

  if (date == '') { 
  $(ids4).addClass("hidden"); 
  } else {
  $(ids4).removeClass("hidden"); 
  } 
});


$( ".enter_manually" ).each(function( i ) {
  $(this).attr('id', 'enter_manually' + i);
  $(this).append('<input id=\"text' +i+'\"></input>');
    var enter_manually = document.createElement('enter_manually');
    enter_manually.type='text/javascript';
    $(this).find('enter_manually').append(enter_manually);   
  }); 


// #enter_manually0 click
$(function(){
  ids_0 = '#input_name_destination0, #input_street_destination0, #input_city_destination0, #input_state_destination0,       #input_postal_destination0' 
  $('#enter_manually0').click(function() {
      if($(this).is(':checked')) 
        $(ids_0).attr('readonly', false);
      else
        $(ids_0).attr('readonly', true); 
  });
});

$(function(){
  ids_0 = '#input_name_destination0, #input_street_destination0, #input_city_destination0, #input_state_destination0,       #input_postal_destination0' 
  $('#enter_manually0').click(function() {
      if($(this).is(':checked')) 
        $(ids_0).val('');
      else
        $(ids_0).val('');
  });
});

$(function(){
  $('#enter_manually0').click(function() {
      if($(this).is(':checked')) 
        $( "#hide_drop_destination0" ).addClass( "hidden" );
      else
        $( "#hide_drop_destination0" ).removeClass( "hidden" );
  });
});

$(function(){
  $('#enter_manually0').click(function() {
      if($(this).is(':checked')) 
        $( "#destination_checkbox_text0" ).html( "Enter the Shippers info." );
      else
        $( "#destination_checkbox_text0" ).html( "Can't find the shipper?" + "<br>" +
        "Select to enter the info manually." );
  });

});
// #enter_manually1 click
$(function(){
  ids_1 = '#input_name_destination1, #input_street_destination1, #input_city_destination1, #input_state_destination1,       #input_postal_destination1' 
  $('#enter_manually1').click(function() {
      if($(this).is(':checked')) 
        $(ids_1).attr('readonly', false);
      else
        $(ids_1).attr('readonly', true); 
  });
});

$(function(){
  ids_1 = '#input_name_destination1, #input_street_destination1, #input_city_destination1, #input_state_destination1,       #input_postal_destination1' 
  $('#enter_manually1').click(function() {
      if($(this).is(':checked')) 
        $(ids_1).val('');
      else
        $(ids_1).val('');
  });
});

$(function(){
  $('#enter_manually1').click(function() {
      if($(this).is(':checked')) 
        $( "#hide_drop_destination1" ).addClass( "hidden" );
      else
        $( "#hide_drop_destination1" ).removeClass( "hidden" );
  });
});

$(function(){
  $('#enter_manually1').click(function() {
      if($(this).is(':checked')) 
        $( "#destination_checkbox_text1" ).html( "Enter the Shippers info." );
      else
        $( "#destination_checkbox_text1" ).html( "Can't find the shipper?" + "<br>" +
        "Select to enter the info manually." );
  });
});

// #enter_manually2
$(function(){
  ids_2 = '#input_name_destination2, #input_street_destination2, #input_city_destination2, #input_state_destination2,       #input_postal_destination2' 
  $('#enter_manually2').click(function() {
      if($(this).is(':checked')) 
        $(ids_2).attr('readonly', false);
      else
        $(ids_2).attr('readonly', true); 
  });
});

$(function(){
  ids_2 = '#input_name_destination2, #input_street_destination2, #input_city_destination2, #input_state_destination2,       #input_postal_destination2' 
  $('#enter_manually2').click(function() {
      if($(this).is(':checked')) 
        $(ids_2).val('');
      else
        $(ids_2).val('');
  });
});

$(function(){
  $('#enter_manually2').click(function() {
      if($(this).is(':checked')) 
        $( "#hide_drop_destination2" ).addClass( "hidden" );
      else
        $( "#hide_drop_destination2" ).removeClass( "hidden" );
  });
});

$(function(){
  $('#enter_manually2').click(function() {
      if($(this).is(':checked')) 
        $( "#destination_checkbox_text2" ).html( "Enter the Shippers info." );
      else
        $( "#destination_checkbox_text2" ).html( "Can't find the shipper?" + "<br>" +
        "Select to enter the info manually." );
  });
});
// #enter_manually3
$(function(){
  ids_3 = '#input_name_destination3, #input_street_destination3, #input_city_destination3, #input_state_destination3,       #input_postal_destination3' 
  $('#enter_manually3').click(function() {
      if($(this).is(':checked')) 
        $(ids_3).attr('readonly', false);
      else
        $(ids_3).attr('readonly', true); 
  });
});
$(function(){
  ids_3 = '#input_name_destination3, #input_street_destination3, #input_city_destination3, #input_state_destination3,       #input_postal_destination3' 
  $('#enter_manually3').click(function() {
      if($(this).is(':checked')) 
        $(ids_3).val('');
      else
        $(ids_3).val('');
  });
});
$(function(){
  $('#enter_manually3').click(function() {
      if($(this).is(':checked')) 
        $( "#hide_drop_destination3" ).addClass( "hidden" );
      else
        $( "#hide_drop_destination3" ).removeClass( "hidden" );
  });
});

$(function(){
  $('#enter_manually3').click(function() {
      if($(this).is(':checked')) 
        $( "#destination_checkbox_text3" ).html( "Enter the Shippers info." );
      else
        $( "#destination_checkbox_text3" ).html( "Can't find the shipper?" + "<br>" +
        "Select to enter the info manually." );
  });
});
// #enter_manually4
$(function(){
  ids_4 = '#input_name_destination4, #input_street_destination4, #input_city_destination4, #input_state_destination4,       #input_postal_destination4' 
  $('#enter_manually4').click(function() {
      if($(this).is(':checked')) 
        $(ids_4).attr('readonly', false);
      else
        $(ids_4).attr('readonly', true); 
  });
});
$(function(){
  ids_4 = '#input_name_destination4, #input_street_destination4, #input_city_destination4, #input_state_destination4,       #input_postal_destination4' 
  $('#enter_manually4').click(function() {
      if($(this).is(':checked')) 
        $(ids_4).val('');
      else
        $(ids_4).val('');
  });
});
$(function(){
  $('#enter_manually4').click(function() {
      if($(this).is(':checked')) 
        $( "#hide_drop_destination4" ).addClass( "hidden" );
      else
        $( "#hide_drop_destination4" ).removeClass( "hidden" );
  });
});

$(function(){
  $('#enter_manually4').click(function() {
      if($(this).is(':checked')) 
        $( "#destination_checkbox_text4" ).html( "Enter the Shippers info." );
      else
        $( "#destination_checkbox_text4" ).html( "Can't find the shipper?" + "<br>" +
        "Select to enter the info manually." );
  });
});

// if date present set the destination count field
$(document).on("change", "#destination_date0", function() {
  date = ($('#destination_date0').val());


  if (date == '') { 
  $("#destination_count0").val(''); 
  } else {
  $("#destination_count0").val(1);
  } 
  });

  $(document).on("change", "#destination_date1", function() {
  date = ($('#destination_date1').val());


  if (date == '') { 
  $("#destination_count1").val(''); 
  } else {
  $("#destination_count1").val(2);
  } 
  });

  $(document).on("change", "#destination_date2", function() {
  date = ($('#destination_date2').val());


  if (date == '') { 
  $("#destination_count2").val(''); 
  } else {
  $("#destination_count2").val(3);
  } 
  });

  $(document).on("change", "#destination_date3", function() {
  date = ($('#destination_date3').val());

 
  if (date == '') { 
  $("#destination_count3").val(''); 
  } else {
  $("#destination_count3").val(4);
  } 
  });

  $(document).on("change", "#destination_date4", function() {
  date = ($('#destination_date4').val());


  if (date == '') { 
  $("#destination_count4").val(''); 
  } else {
  $("#destination_count4").val(5);
  } 
  });
// end -- if date present set the destination count field