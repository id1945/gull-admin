$(document).ready(function() {


    $('#show-todo-items').html(localStorage.getItem('LocalStoragelistItems'));

    $('.create-items').submit(function(event) {
        event.preventDefault();

        var item = $('#todo-list-item').val();

        if (item) {
            $('#show-todo-items').append("<li><label class='checkbox checkbox-outline-success animated  fadeIn'> <input class='checkbox' type ='checkbox'>  <span>" + item + "</span> <span class = 'checkmark' > </span> <a class='remove'><i class='i-Close-Window'></i></a><hr> </label> </li>");

            localStorage.setItem('LocalStoragelistItems', $('#show-todo-items').html());

            $('#todo-list-item').val("");
        }

    });

    $(document).on('change', '.checkbox', function() {
        if ($(this).attr('checked')) {
            $(this).removeAttr('checked');
        } else {
            $(this).attr('checked', 'checked');
        }

        $(this).parent().toggleClass('completed');

        localStorage.setItem('LocalStoragelistItems', $('#show-todo-items').html());
    });

    $(document).on('click', '.remove', function() {
        $(this).parent().addClass('fadeOut');
        setInterval(() => {
            $(this).parent().remove();

            localStorage.setItem('LocalStoragelistItems', $('#show-todo-items').html());
        }, 1000);

    });









});