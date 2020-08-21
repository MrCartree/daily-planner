const timeBlockTemp = `
<div class="row">
    <div class="col-md-2 hour">12:00AM</div>
    <div class="col-md-8"><textarea class="time-block"></textarea>
    </div>
    <div class="col-md-2"><button class="saveBtn"></button> </div>
</div>`;
let currentDay = document.querySelector("#currentDay");
// Creating an array to store the hours of the day
const hoursOfDay = [9, 10, 11, 12, 13, 14, 15, 16, 17];

$(document).ready(function () {
    // Establishing the current time and date on the top as well as appending class names to the text area.
    function date() {
        setInterval(function() {
            let now = moment();
            let currentDate = now.format('MMMM Do YYYY, h:mm:ss a');
            currentDay.textContent = currentDate
            let index = 0;
            $(".hour").each(function() {
                let momForm = moment();
                momForm.hours(hoursOfDay[index]);
                momForm.minutes(0);
                if (momForm.hours() < now.hours()) {
                    $(this).parent().find(".time-block").addClass("past")
                } else if (momForm.hours() === now.hours()) {
                    $(this).parent().find(".time-block").addClass("present");
                } else {
                    $(this).parent().find(".time-block").addClass("future")
                }
                index++;
            });

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
        let momForm = moment();
        momForm.hours(hoursOfDay[index]);
        momForm.minutes(0);
        $(this).text(momForm.format("h:mm A"));
        let todoHour = localStorage.getItem(momForm.format("h:mm A"));
        $(this).parent().find(".time-block").val(todoHour);
        index++;
    });
    // save button
    $(".saveBtn").on("click", function() {
        let value = $(this).parent().parent().find(".time-block").val();
        let hourBlock = $(this).parent().parent().find(".hour").text();
        localStorage.setItem(hourBlock, value);
        console.log(value, hourBlock);
    });

});