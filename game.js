$(document).ready(function() {
  $('body').keyup(function(event) {
    if (event.keyCode == 81) {
      var $current_one = $('#player1_race').find('.active');
      var done = false
      $current_one.removeClass('active');
      $current_one.next().addClass('active');
      if ($current_one.index() === 11) {
        done = true
      }
      if (done == true) {
        alert('Player 1 won!');
      }
    }
    if (event.keyCode == 80) {
      var $current_two = $('#player2_race').find('.active');
      $current_two.removeClass('active');
      $current_two.next().addClass('active');
      if ($current_two.index() === 11) {
        done = true
      }
      if (done == true) {
        alert('Player 2 won!')
      }
    }
  });
  $('#restart').click(function() {
    location.reload(true);
  });

  // $('#red-wagon').on('keyup', function(event) {
  //   var $current = $($(this).data('target')).find('.active');
  //   $current.removeClass('active');
  //   $current.next().addClass('active');
  // });
  // $('#yellow-wagon').on('keyup', function(event) {
  //   var $current = $($(this).data('target')).find('.active');
  //   $current.removeClass('active');
  //   $current.next().addClass('active');
  // });

});