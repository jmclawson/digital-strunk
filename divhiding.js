function showonlyone(thechosenone) {
     $('.newboxes').each(function(index) {
          if ($(this).attr("id") == thechosenone) {
               if ($(this).is(':visible')) {
                     $(this).hide(600);
               }
               else {
                     $(this).show(200);
               }
          }
          else {
               $(this).hide(600);
          }
     });
}
// adapted from http://www.randomsnippets.com/2011/04/10/how-to-hide-show-or-toggle-your-div-with-jquery/
