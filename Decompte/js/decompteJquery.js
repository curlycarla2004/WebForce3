$(function(){
    var note = $('#note'),
    ts = new Date(2020, 2, 19);
});

$('#countdown').countdown({
    timestamp : ts,
    callback : function(days, hours, minutes, seconds){
    
    var message = "";
    message += days + " day" + ( days==1 ? '':'s' ) + ", ";
    message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
    message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
    message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
    message += "left for 2nd February 2020!";
    note.html(message);
    }
    });
    