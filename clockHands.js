/* 
    Clock hands
    Write a function that returns the acute angle between two clock hands, with two integers for the number of hours and number of minutes.
    
    E.g. For 3:00, the acute angle would be 90°. For 6:00, it would be 180°.

    ------------------------
    Note:
        Clock hour hands typically reflect a percentage towards the next hour dependent upon the minute hand.
        E.g. 1:55 pm has the hour hand nearly on "2" rather than "1"
*/

/* Design: 
    class for the clock-face object
        - constructor: allow the user to initially set the time 
        - methods: getTime, getAngle
*/

class Clock {
    // assumed string input formatted: HH:MM
    constructor(timeString) {
        let splitTime = timeString.split(':');
        this.hour = parseInt(splitTime[0]);
        this.minute = parseInt(splitTime[1]);
    }

    getTime() {
        return `Time - ${this.hour}:${this.minute}`;
    }

    getAngle() {
        // hour hand will circle the clock (360°) in 12 hours -> 30 deg per hour -> .5 deg per min
        // minute hand will circles the clock (360°) in 60minutes -> 6 deg per min

        // NOTE: hour hand does depend upon the minute hand's position!
        let hrHand = (this.minute + this.hour * 60) / 2;

        let minHand = (this.minute * 6);

        // return the acute angle
        let angDiff = Math.abs(hrHand - minHand);
        return Math.min(360 - angDiff, angDiff);
    }

}


// Basic Testing
let s = "06:45";
let c = new Clock(s);
c.getAngle();

let s = "02:10";
let c = new Clock(s);
c.getAngle();

let s = "06:01";
let c = new Clock(s);
c.getAngle();