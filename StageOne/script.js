document.addEventListener("DOMContentLoaded", function() {
    const slackUserName = document.querySelector('[data-testid="slackUserName"]');

    const slackDisplayImage = document.querySelector('[data-testid="slackDisplayImage"]');

    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');

    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

    const myTrack = document.querySelector('[data-testid="myTrack"]');

    // ***Get the current day of the week .. //
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getDay()];

    // ***Get the current UTC time in milliseconds .. //
    const utcTime = Date.now();

    // ***Update the page content .. //
    slackUserName.textContent = "Hafizaaah";
    slackDisplayImage.src = "images/hafizah.jpg";
    currentDayOfTheWeek.textContent = `Current Day of the Week: ${dayOfWeek}`;
    currentUTCTime.textContent = `Current UTC Time (ms): ${utcTime}`;
    myTrack.textContent = "Track: Frontend";
});
