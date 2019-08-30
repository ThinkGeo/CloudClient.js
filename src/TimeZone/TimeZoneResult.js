class TimeZoneResult{
    constructor(timeZone, countryName, countryCode, comment, currentLocalTime, currentUtcTime, offsetSeconds, daylightSavingsActive, geometry){
        /**
         * @type {string}
         */
        this.timeZone = timeZone;
        /**
         * @type {string}
         */
        this.countryName = countryName;
        /**
         * @type {string}
         */
        this.countryCode = countryCode;
        /**
         * @type {string}
         */
        this.comment = comment;
        /**
         * @type {string}
         */
        this.currentLocalTime = currentLocalTime;
        /**
         * @type {string}
         */
        this.currentUtcTime = currentUtcTime;
        /**
         * @type {number}
         */
        this.offsetSeconds = offsetSeconds;
        /**
         * @type {boolean}
         */
        this.daylightSavingsActive = daylightSavingsActive;
        /**
         * @type {string}
         */
        this.geometry = geometry;
    }
}

export default TimeZoneResult;