# Digital Clock

## About The Project:
This is a JavaScript project that displays the current time in real-time using hours, minutes, and seconds along with date. The clock updates automatically every second without refreshing the webpage.

## Flow:
- Page loads in browser
- JavaScript gets current system time and date using new Date()
- Hours, minutes, and seconds are extracted
- Time is formatted properly (for example leading zeroes like 09:05:02)
- Clock display updates on screen
- setInterval() runs every 1 second to refresh the time continuously
