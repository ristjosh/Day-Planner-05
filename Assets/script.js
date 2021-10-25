var saveButton = $('.saveBtn');
var hourEl = $('.hour');


//Javascript ready
$(document).ready(function() {
    //Current date
    var currentDate = moment().format('dddd MMM Do, YYYY');
    $('#currentDay').text(currentDate);

    var currentHour = moment().hours();

    $('.time-block').each(function(){
        var id = $(this).attr('id');
        var getId = localStorage.getItem(id);
        console.log(getId);
        $(this).children('.schedule').val(getId);

        if (id > currentHour) {
            $(this).addClass('future')
        }
        else if (id < currentHour) {
            $(this).addClass("past");
        }
        else {
            $(this).addClass('present');
        }
    })

    $(".saveBtn").click(function(){
        var value = $(this).siblings('.schedule').val();
        //Grabbed the id 
        var parentValue = $(this).parent().attr('id');
        //Saved to localStorage
        localStorage.setItem(parentValue, value)
        console.log(value);
        console.log(parentValue);
    })

})