$(function() {
  // limits the number of categories
  $(".chosen_origin_shipper_receivers").chosen();

    $(document).on("change", "#chosen_origin_shipper_receivers0", function() {
      $('#sr_street0, #sr_city0, #sr_state0, #sr_postal0').val(this.value);   

    name = ($('#chosen_origin_shipper_receivers0').find("option:selected").text());
    $("#input_name0").val(name);  

    street = ($('#sr_street0').find("option:selected").text());
    $("#input_street0").val(street);

    city = ($('#sr_city0').find("option:selected").text());
    $("#input_city0").val(city);

    state = ($('#sr_state0').find("option:selected").text());
    $("#input_state0").val(state); 

    postal_code = ($('#sr_postal0').find("option:selected").text());
    $("#input_postal0").val(postal_code);

    
  });

  // ---------------
    $(document).on("change", "#chosen_origin_shipper_receivers1", function() {
      $('#sr_street1, #sr_city1, #sr_state1, #sr_postal1').val(this.value);   

    name = ($('#chosen_origin_shipper_receivers1').find("option:selected").text());
    $("#input_name1").val(name);  

    street = ($('#sr_street1').find("option:selected").text());
    $("#input_street1").val(street);

    city = ($('#sr_city1').find("option:selected").text());
    $("#input_city1").val(city);

    state = ($('#sr_state1').find("option:selected").text());
    $("#input_state1").val(state); 

    postal_code = ($('#sr_postal1').find("option:selected").text());
    $("#input_postal1").val(postal_code); 

    $("#origin_count1").val(2);
  });

  // ---------------
    $(document).on("change", "#chosen_origin_shipper_receivers2", function() {
      $('#sr_street2, #sr_city2, #sr_state2, #sr_postal2').val(this.value);   

    name = ($('#chosen_origin_shipper_receivers2').find("option:selected").text());
    $("#input_name2").val(name);  

    street = ($('#sr_street2').find("option:selected").text());
    $("#input_street2").val(street);

    city = ($('#sr_city2').find("option:selected").text());
    $("#input_city2").val(city);

    state = ($('#sr_state2').find("option:selected").text());
    $("#input_state2").val(state); 

    postal_code = ($('#sr_postal2').find("option:selected").text());
    $("#input_postal2").val(postal_code); 

    $("#origin_count2").val(3);
  });
  // ---------------
  $(document).on("change", "#chosen_origin_shipper_receivers3", function() {
      $('#sr_street3, #sr_city3, #sr_state3, #sr_postal3').val(this.value);   

    name = ($('#chosen_origin_shipper_receivers3').find("option:selected").text());
    $("#input_name3").val(name);  

    street = ($('#sr_street3').find("option:selected").text());
    $("#input_street3").val(street);

    city = ($('#sr_city3').find("option:selected").text());
    $("#input_city3").val(city);

    state = ($('#sr_state3').find("option:selected").text());
    $("#input_state3").val(state); 

    postal_code = ($('#sr_postal3').find("option:selected").text());
    $("#input_postal3").val(postal_code); 

    $("#origin_count3").val(4);
  });
  // ---------------

  $(document).on("change", "#chosen_origin_shipper_receivers4", function() {
      $('#sr_street4, #sr_city4, #sr_state4, #sr_postal4').val(this.value);   

    name = ($('#chosen_origin_shipper_receivers4').find("option:selected").text());
    $("#input_name4").val(name);  

    street = ($('#sr_street4').find("option:selected").text());
    $("#input_street4").val(street);

    city = ($('#sr_city4').find("option:selected").text());
    $("#input_city4").val(city);

    state = ($('#sr_state4').find("option:selected").text());
    $("#input_state4").val(state); 

    postal_code = ($('#sr_postal4').find("option:selected").text());
    $("#input_postal4").val(postal_code); 

    $("#origin_count4").val(5); 
  });
  // ---------------


  // ---------------

  $( ".chosen_origin_shipper_receivers" ).each(function( i ) {
  $(this).attr('id', 'chosen_origin_shipper_receivers' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var script=document.createElement('script');
    script.type='text/javascript';
  // script.innerHTML=" alert('"+i+"');";
    $(this).find('select').append(script);
  });

  $( ".origin_count" ).each(function( i ) {
  $(this).attr('id', 'origin_count' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var origin_count = document.createElement('origin_count');
    origin_count.type='text/javascript';
  // script.innerHTML=" alert('"+i+"');";
    $(this).find('origin_count').append(origin_count);  
  });

  $( ".sr_street" ).each(function( i ) {
  $(this).attr('id', 'sr_street' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var sr_street = document.createElement('sr_street');
    sr_street.type='text/javascript';
  // script.innerHTML=" alert('"+i+"');";
    $(this).find('sr_street').append(sr_street); 
  });

  $( ".sr_city" ).each(function( i ) {
  $(this).attr('id', 'sr_city' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var sr_city = document.createElement('sr_city');
    sr_city.type='text/javascript';
  // script.innerHTML=" alert('"+i+"');";
    $(this).find('sr_city').append(sr_city); 
  });

  $( ".sr_state" ).each(function( i ) {
  $(this).attr('id', 'sr_state' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var sr_state = document.createElement('sr_state');
    sr_state.type='text/javascript';
  // script.innerHTML=" alert('"+i+"');";
    $(this).find('sr_state').append(sr_state); 
  });

  $( ".sr_postal" ).each(function( i ) {
  $(this).attr('id', 'sr_postal' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var sr_postal = document.createElement('sr_postal');
    sr_postal.type='text/javascript';
  // script.innerHTML=" alert('"+i+"');";
    $(this).find('sr_postal').append(sr_postal); 
  });

  $( ".input_name" ).each(function( i ) {
  $(this).attr('id', 'input_name' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var script_name = document.createElement('script_name');
    script_name.type='text/javascript';
    $(this).find('input_name').append(script_name); 
  });


  $( ".input_street" ).each(function( i ) {
  $(this).attr('id', 'input_street' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var script_street = document.createElement('script_street');
    script_street.type='text/javascript';
    $(this).find('input_street').append(script_street);
  });

  $( ".input_city" ).each(function( i ) {
  $(this).attr('id', 'input_city' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var script_city = document.createElement('script_city');
    script_city.type='text/javascript';
    $(this).find('input_city').append(script_city);
  });

  $( ".input_state" ).each(function( i ) {
  $(this).attr('id', 'input_state' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var script_state = document.createElement('script_state');
    script_state.type='text/javascript';
    $(this).find('input_state').append(script_state);
  });

  $( ".input_postal" ).each(function( i ) {
  $(this).attr('id', 'input_postal' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var script_postal = document.createElement('script_postal');
    script_postal.type='text/javascript';
    $(this).find('input_postal').append(script_postal);
  });

  // -----------------------------
    $( ".origin_date" ).each(function( i ) {
    $(this).attr('id', 'origin_date' + i);
    $(this).append('<select id=\"text' +i+'\"></select>');
      var origin_date = document.createElement('origin_date');
      origin_date.type='text/javascript';
      $(this).find('origin_date').append(origin_date);
    });



    $( ".hide_enter_manually" ).each(function( i ) {
      $(this).attr('id', 'hide_enter_manually' + i);
      $(this).append('<span id=\"text' +i+'\"></span>');
        var hide_enter_manually = document.createElement('hide_enter_manually');
        hide_enter_manually.type='text/javascript';
      // script.innerHTML=" alert('"+i+"');";
        $(this).find('hide_enter_manually').append(hide_enter_manually);   
      });

    $( ".hide_drop" ).each(function( i ) {
    $(this).attr('id', 'hide_drop' + i);
    $(this).append('<span id=\"text' +i+'\"></span>');
      var hide_drop = document.createElement('hide_drop');
      hide_drop.type='text/javascript';
    // script.innerHTML=" alert('"+i+"');";
      $(this).find('hide_drop').append(hide_drop);   
    });

    $( ".hide_count" ).each(function( i ) {
    $(this).attr('id', 'hide_count' + i);
    $(this).append('<span id=\"text' +i+'\"></span>');
      var hide_count = document.createElement('hide_count');
      hide_count.type='text/javascript';
    // script.innerHTML=" alert('"+i+"');";
      $(this).find('hide_count').append(hide_count);  
    });

    $( ".hide_name" ).each(function( i ) {
    $(this).attr('id', 'hide_name' + i);
    $(this).append('<span id=\"text' +i+'\"></span>');
      var hide_name = document.createElement('hide_name');
      hide_name.type='text/javascript';
    // script.innerHTML=" alert('"+i+"');";
      $(this).find('hide_name').append(hide_name);  
    }); 

    $( ".hide_street" ).each(function( i ) {
    $(this).attr('id', 'hide_street' + i);
    $(this).append('<span id=\"text' +i+'\"></span>');
      var hide_street = document.createElement('hide_street');
      hide_street.type='text/javascript';
    // script.innerHTML=" alert('"+i+"');";
      $(this).find('hide_street').append(hide_street);  
    }); 

    $( ".hide_city" ).each(function( i ) {
    $(this).attr('id', 'hide_city' + i);
    $(this).append('<span id=\"text' +i+'\"></span>');
      var hide_city = document.createElement('hide_city');
      hide_city.type='text/javascript';
    // script.innerHTML=" alert('"+i+"');";
      $(this).find('hide_city').append(hide_city);  
    });

    $( ".hide_state" ).each(function( i ) {
    $(this).attr('id', 'hide_state' + i);
    $(this).append('<span id=\"text' +i+'\"></span>');
      var hide_state = document.createElement('hide_state');
      hide_state.type='text/javascript';
    // script.innerHTML=" alert('"+i+"');";
      $(this).find('hide_state').append(hide_state);  
    });

    $( ".hide_zip" ).each(function( i ) {
    $(this).attr('id', 'hide_zip' + i);
    $(this).append('<span id=\"text' +i+'\"></span>');
      var hide_zip = document.createElement('hide_zip');
      hide_zip.type='text/javascript';
    // script.innerHTML=" alert('"+i+"');";
      $(this).find('hide_zip').append(hide_zip);  
    });  


  // -----------------------------

  $('.shipment_origins').on('cocoon:after-insert', function() {
    check_to_hide_or_show_add_link();
  });

  $('.shipment_origins').on('cocoon:after-remove', function() {
    check_to_hide_or_show_add_link();
  });

  check_to_hide_or_show_add_link();

  function check_to_hide_or_show_add_link() {
    if ($('.shipment_origins .nested-fields').length == 5) {
      $('.add_origin_address').hide();
    } else {
      $('.add_origin_address').show();
    }
  }
})


$(document).on("change", "#origin_date0", function() {
  date = ($('#origin_date0').val());
  // alert(date);  
  var ids0 = "#hide_count0, #hide_drop0, #hide_name0, #hide_street0, #hide_city0, #hide_state0, #hide_zip0, #origin-rows, #hide_enter_manually0"; 

  if (date == '') { 
  $(ids0).addClass("hidden"); 
  } else {
  $(ids0).removeClass("hidden"); 
  } 
});



  $(document).on("change", "#origin_date1", function() {
   date = ($('#origin_date1').val());
  // alert(date);  
  var ids1 = "#hide_count1, #hide_drop1, #hide_name1, #hide_street1, #hide_city1, #hide_state1, #hide_zip1, #hide_enter_manually1";

  if (date == '') { 
  $(ids1).addClass("hidden"); 
  } else {
  $(ids1).removeClass("hidden"); 
  } 
});

  $(document).on("change", "#origin_date2", function() {
   date = ($('#origin_date2').val());
  // alert(date);  
  var ids2 = "#hide_count2, #hide_drop2, #hide_name2, #hide_street2, #hide_city2, #hide_state2, #hide_zip2, #hide_enter_manually2";

  if (date == '') { 
  $(ids2).addClass("hidden"); 
  } else {
  $(ids2).removeClass("hidden"); 
  } 
});

  $(document).on("change", "#origin_date3", function() {
   date = ($('#origin_date3').val());
  // alert(date);  
  var ids3 = "#hide_count3, #hide_drop3, #hide_name3, #hide_street3, #hide_city3, #hide_state3, #hide_zip3, #hide_enter_manually3";

  if (date == '') { 
  $(ids3).addClass("hidden"); 
  } else {
  $(ids3).removeClass("hidden"); 
  } 
}); 


  $(document).on("change", "#origin_date4", function() {
   date = ($('#origin_date4').val());
  // alert(date);  
  var ids4 = "#hide_count4, #hide_drop4, #hide_name4, #hide_street4, #hide_city4, #hide_state4, #hide_zip4, #hide_enter_manually4";

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
  // script.innerHTML=" alert('"+i+"');";
    $(this).find('enter_manually').append(enter_manually);   
  }); 


// #enter_manually0 click
$(function(){
  ids_0 = '#input_name0, #input_street0, #input_city0, #input_state0,       #input_postal0' 
  $('#enter_manually0').click(function() {
      if($(this).is(':checked')) 
        $(ids_0).attr('readonly', false);
      else
        $(ids_0).attr('readonly', true); 
  });
});

$(function(){
  $('#enter_manually0').click(function() {
      if($(this).is(':checked')) 
      $( "#hide_drop0" ).addClass( "hidden" );
      // alert('0checked');
      else
      $( "#hide_drop0" ).removeClass( "hidden" );
  });
});


// #enter_manually1 click
$(function(){
  ids_1 = '#input_name1, #input_street1, #input_city1, #input_state1,       #input_postal1' 
  $('#enter_manually1').click(function() {
      if($(this).is(':checked')) 
        $(ids_1).attr('readonly', false);
      else
        $(ids_1).attr('readonly', true); 
  });
});

$(function(){
  $('#enter_manually1').click(function() {
      if($(this).is(':checked')) 
      $( "#hide_drop1" ).addClass( "hidden" );
      // alert('1checked');
      else
      $( "#hide_drop1" ).removeClass( "hidden" );
  });
});

// #enter_manually2
$(function(){
  ids_2 = '#input_name2, #input_street2, #input_city2, #input_state2,       #input_postal2' 
  $('#enter_manually2').click(function() {
      if($(this).is(':checked')) 
        $(ids_2).attr('readonly', false);
      else
        $(ids_2).attr('readonly', true); 
  });
});

$(function(){
  $('#enter_manually2').click(function() {
      if($(this).is(':checked')) 
      $( "#hide_drop2" ).addClass( "hidden" );
      // alert('2checked');
      else
      $( "#hide_drop2" ).removeClass( "hidden" );
  });
});


// #enter_manually3
$(function(){
  ids_3 = '#input_name3, #input_street3, #input_city3, #input_state3,       #input_postal3' 
  $('#enter_manually3').click(function() {
      if($(this).is(':checked')) 
        $(ids_3).attr('readonly', false);
      else
        $(ids_3).attr('readonly', true); 
  });
});

$(function(){
  $('#enter_manually3').click(function() {
      if($(this).is(':checked')) 
      $( "#hide_drop3" ).addClass( "hidden" );
      // alert('3checked');
      else
      $( "#hide_drop3" ).removeClass( "hidden" );
  });
});


// #enter_manually4
$(function(){
  ids_4 = '#input_name4, #input_street4, #input_city4, #input_state4,       #input_postal4' 
  $('#enter_manually4').click(function() {
      if($(this).is(':checked')) 
        $(ids_4).attr('readonly', false);
      else
        $(ids_4).attr('readonly', true); 
  });
});

$(function(){
  $('#enter_manually4').click(function() {
      if($(this).is(':checked')) 
      $( "#hide_drop4" ).addClass( "hidden" );
      // alert('4checked');
      else
      $( "#hide_drop4" ).removeClass( "hidden" );
  });
});

