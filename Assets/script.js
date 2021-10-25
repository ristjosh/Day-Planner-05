var saveButton = $('.saveBtn');
var hourEl = $('.hour');


//Detects when the page is ready for the javascript
$(document).ready(function() {
    //Current date displayed at top
    var currentDate = moment().format('dddd MMM Do, YYYY');
    $('#currentDay').text(currentDate);

    var currentHour = moment().hours();

    $('.time-block').each(function(){
        var id = $(this).attr('id');
        var getId = localStorage.getItem(id);
        console.log(getId);
        //this is the .time-block class
        //grab t
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
        //this is the .saveBtn class
        //Get the value of the sibling of the schedule class and make it the value of value
        var value = $(this).siblings('.schedule').val();
        //grabbed the id from the parent element
        var parentValue = $(this).parent().attr('id');
        //Saved to localStorage
        localStorage.setItem(parentValue, value)
        console.log(value);
        console.log(parentValue);
    })

})