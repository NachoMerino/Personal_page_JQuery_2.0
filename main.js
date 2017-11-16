$(document).ready(function() {
  var button;
  var counter = 0;
  var whereAmI = '#aboutme1';
  var whereIWas;
  var whereIWasButton;
  var navigationNum = $("nav ul li a").length;
  buttonBGColor = "rgba(192,192,192,0.3)";
  buttonBGColorDefault = "transparent";
  buttonColor = "white";
  baseButtonColor = "#9d9d9d";
  $('nav,footer,#favcity1,#favsong1,#cotactg1').hide();
  $('nav,footer,#aboutme1').show('slow');
  $('#aboutme').css({ "color": buttonColor });
  $('nav').on('click', function(e) {

    var target = e.target;
    var button = target.getAttribute('id');
    whereAmI = `#${button +1}`;
    if (whereIWas == null) {
      $('#aboutme').css({ "color": baseButtonColor,"background-color": buttonBGColorDefault });
      $('#aboutme1').hide('slow');
    }
    $(`#${button}`).css({ "color": buttonColor,"background-color": buttonBGColor });
    $(`${whereAmI}`).show('slow');
    $(`#${whereIWasButton}`).css({ "color": baseButtonColor,"background-color": buttonBGColorDefault });
    $(`${whereIWas}`).hide('slow');
    whereIWas = whereAmI;
    whereIWasButton = button;
  });

  $(document).keyup(function(event) {
    button = whereAmI.slice(0, -1);
    if (event.keyCode == 39) {
      if (counter + 1 === navigationNum) {
        $(`${whereAmI}`).hide('slow');
        whereAmI = '#aboutme1';
        counter = 0;
        $(`${whereAmI}`).show('slow');
        $(`${button}`).css({ "color": baseButtonColor,"background-color": buttonBGColorDefault});
        return;
      }
      $(`${whereAmI}`).hide('slow');
      $(`${button}`).css({ "color": baseButtonColor,"background-color": buttonBGColorDefault});
      $(`${whereAmI}`).next().show('slow');
      $(`${button}`).next().css({ "color": buttonColor,"background-color": buttonBGColor });
      whereAmI = $(`${whereAmI}`).next()[0].id;
      whereAmI = '#' + whereAmI;
      counter++;
    } else if (event.keyCode == 37) {
      if (counter === navigationNum) {
        $(`${whereAmI}`).hide('slow');
        whereAmI = '#cotactg1';
        counter = navigationNum-1;
        $(`${whereAmI}`).show('slow');
        $(`${button}`).css({ "color": baseButtonColor,"background-color": buttonBGColorDefault});
        return;
      }
      $(`${whereAmI}`).hide('slow');
      $(`${button}`).css({ "color": baseButtonColor,"background-color": buttonBGColorDefault});
      $(`${whereAmI}`).prev().show('slow');
      $(`${button}`).prev().css({ "color": buttonColor,"background-color": buttonBGColor });

      whereAmI = $(`${whereAmI}`).prev()[0].id;
      whereAmI = '#' + whereAmI;
      counter--;
      if (counter == 0) {
        counter = navigationNum;
      }

    }
  });
});