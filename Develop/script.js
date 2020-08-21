const timeBlockTemp = `
<div class="row">
    <div class="col-md-2 hour">12:00AM</div>
    <div class="col-md-8"><textarea class="time-block"></textarea>
    </div>
    <div class="col-md-2"><button class="saveBtn"></button> </div>
</div>`;
let currentDay = document.querySelector("#currentDay");
// Creating an array to store the hours of the day
const hoursOfDay = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];

$(document).ready(function () {
    // Establishing the current time and date on the top
    function date() {
        setInterval(function() {
            let currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
            currentDay.textContent = currentDate
        }, 1000);
    }
    date();
    // For loop creating 8 timeblock containers for the daily planner
    for (let i = 0; i <= 8; i++) {
        const foo = $($.parseHTML(timeBlockTemp));
        $('#timeBlockCont').append(foo);
    };
    // appending the hours of the day to hour block and calling local storage to place what has been already saved.
    let index = 0;
    $(".hour").each(function() {
        $(this).text(hoursOfDay[index]);
        let todoHour = localStorage.getItem(hoursOfDay[index]);
        $(this).parent().find(".time-block").val(todoHour);
        index = index + 1
    });
    // save button
    $(".saveBtn").on("click", function() {
        let value = $(this).parent().parent().find(".time-block").val();
        let hourBlock = $(this).parent().parent().find(".hour").text();
        // debugger;
        localStorage.setItem(hourBlock, value);
        console.log(value, hourBlock);
    })

});