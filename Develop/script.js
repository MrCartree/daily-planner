const timeBlockTemp = `
<div class="row">
    <div class="col-md-2 hour">10:00PM</div>
    <div class="time-block col-md-8">
        hello darkness
    </div>
    <div class="col-md-2"><button class="saveBtn"></button> </div>
</div>`;

const foo = $($.parseHTML(timeBlockTemp));
$('#timeBlockCont').append(foo);
