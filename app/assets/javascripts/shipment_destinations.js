$(function() {
  // limits the number of categories
  

    $(document).on("change", "#chosen_shipper_receivers0", function() {
      $('#sr_destination_street0, #sr_destination_city0, #sr_destination_state0, #sr_destination_postal0').val(this.value);   

    name = ($('#chosen_shipper_receivers0').find("option:selected").text());
    $("#input_name0").val(name);  

    street = ($('#sr_destination_street0').find("option:selected").text());
    $("#input_street0").val(street);

    city = ($('#sr_destination_city0').find("option:selected").text());
    $("#input_city0").val(city);

    state = ($('#sr_destination_state0').find("option:selected").text());
    $("#input_state0").val(state); 

    postal_code = ($('#sr_destination_postal0').find("option:selected").text());
    $("#input_postal0").val(postal_code);
  });

  // ---------------
    $(document).on("change", "#chosen_shipper_receivers1", function() {
      $('#sr_destination_street1, #sr_destination_city1, #sr_destination_state1, #sr_destination_postal1').val(this.value);   

    name = ($('#chosen_shipper_receivers1').find("option:selected").text());
    $("#input_name1").val(name);  

    street = ($('#sr_destination_street1').find("option:selected").text());
    $("#input_street1").val(street);

    city = ($('#sr_destination_city1').find("option:selected").text());
    $("#input_city1").val(city);

    state = ($('#sr_destination_state1').find("option:selected").text());
    $("#input_state1").val(state); 

    postal_code = ($('#sr_destination_postal1').find("option:selected").text());
    $("#input_postal1").val(postal_code); 
  });

  // ---------------
    $(document).on("change", "#chosen_shipper_receivers2", function() {
      $('#sr_destination_street2, #sr_destination_city2, #sr_destination_state2, #sr_destination_postal2').val(this.value);   

    name = ($('#chosen_shipper_receivers2').find("option:selected").text());
    $("#input_name2").val(name);  

    street = ($('#sr_destination_street2').find("option:selected").text());
    $("#input_street2").val(street);

    city = ($('#sr_destination_city2').find("option:selected").text());
    $("#input_city2").val(city);

    state = ($('#sr_destination_state2').find("option:selected").text());
    $("#input_state2").val(state); 

    postal_code = ($('#sr_destination_postal2').find("option:selected").text());
    $("#input_postal2").val(postal_code); 
  });
  // ---------------
  $(document).on("change", "#chosen_shipper_receivers3", function() {
      $('#sr_destination_street3, #sr_destination_city3, #sr_destination_state3, #sr_destination_postal3').val(this.value);   

    name = ($('#chosen_shipper_receivers3').find("option:selected").text());
    $("#input_name3").val(name);  

    street = ($('#sr_destination_street3').find("option:selected").text());
    $("#input_street3").val(street);

    city = ($('#sr_destination_city3').find("option:selected").text());
    $("#input_city3").val(city);

    state = ($('#sr_destination_state3').find("option:selected").text());
    $("#input_state3").val(state); 

    postal_code = ($('#sr_destination_postal3').find("option:selected").text());
    $("#input_postal3").val(postal_code); 
  });
  // ---------------

  $(document).on("change", "#chosen_shipper_receivers4", function() {
      $('#sr_destination_street4, #sr_destination_city4, #sr_destination_state4, #sr_destination_postal4').val(this.value);   

    name = ($('#chosen_shipper_receivers4').find("option:selected").text());
    $("#input_name4").val(name);  

    street = ($('#sr_destination_street4').find("option:selected").text());
    $("#input_street4").val(street);

    city = ($('#sr_destination_city4').find("option:selected").text());
    $("#input_city4").val(city);

    state = ($('#sr_destination_state4').find("option:selected").text());
    $("#input_state4").val(state); 

    postal_code = ($('#sr_destination_postal4').find("option:selected").text());
    $("#input_postal4").val(postal_code); 
  });
  // ---------------


  // ---------------

  $( ".chosen_shipper_receivers" ).each(function( i ) {
  $(this).attr('id', 'chosen_shipper_receivers' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var script=document.createElement('script');
    script.type='text/javascript';
  // script.innerHTML=" alert('"+i+"');";
    $(this).find('select').append(script);
  });



  $( ".sr_destination_street" ).each(function( i ) {
  $(this).attr('id', 'sr_destination_street' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var sr_destination_street = document.createElement('sr_destination_street');
    sr_destination_street.type='text/javascript';
  // script.innerHTML=" alert('"+i+"');";
    $(this).find('sr_destination_street').append(sr_destination_street); 
  });

  $( ".sr_destination_city" ).each(function( i ) {
  $(this).attr('id', 'sr_destination_city' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var sr_destination_city = document.createElement('sr_destination_city');
    sr_destination_city.type='text/javascript';
  // script.innerHTML=" alert('"+i+"');";
    $(this).find('sr_destination_city').append(sr_destination_city); 
  });

  $( ".sr_destination_state" ).each(function( i ) {
  $(this).attr('id', 'sr_destination_state' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var sr_destination_state = document.createElement('sr_destination_state');
    sr_destination_state.type='text/javascript';
  // script.innerHTML=" alert('"+i+"');";
    $(this).find('sr_destination_state').append(sr_destination_state); 
  });

  $( ".sr_destination_postal" ).each(function( i ) {
  $(this).attr('id', 'sr_destination_postal' + i);
  $(this).append('<select id=\"text' +i+'\"></select>');
    var sr_destination_postal = document.createElement('sr_destination_postal');
    sr_destination_postal.type='text/javascript';
  // script.innerHTML=" alert('"+i+"');";
    $(this).find('sr_destination_postal').append(sr_destination_postal); 
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