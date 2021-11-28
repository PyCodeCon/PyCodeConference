jQuery(document).ready(function($){

  // --------------------------------------------------------------------
  // Timezones
  // --------------------------------------------------------------------

  var DateTime = luxon.DateTime;

  $("#section-agenda time").each(function() {
      var time_el = $(this).text();
      var local = DateTime.fromFormat(time_el + " Europe/Paris", "H:mm z");
      var london = local.setZone("Europe/London");
      var kolkata = local.setZone("Asia/Kolkata");
      var wellington = local.setZone("Pacific/Auckland");


      $(this).parent().after('<div><time>' + wellington.toFormat('H:mm') + '</time>&nbsp<timezone>Pacific/Auckland</timezone></div>');
      $(this).parent().after('<div><time>' + kolkata.toFormat('H:mm') + '</time>&nbsp<timezone>Asia/Kolkata</timezone></div>');
      $(this).parent().before('<div><time>' + london.toFormat('H:mm') + '</time>&nbsp<timezone>Europe/London</timezone></div>');
  });
});
