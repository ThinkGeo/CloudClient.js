class TimeZoneResult{
    constructor(timeZone, countryName, countryCode, comment, currentLocalTime, currentUtcTime, offsetSeconds){
        this.timeZone = timeZone;
        this.countryName = countryName;
        this.countryCode = countryCode;
        this.comment = comment;
        this.currentLocalTime = currentLocalTime;
        this.currentUtcTime = currentUtcTime;
        this.offsetSeconds = offsetSeconds;
    }
}

export default TimeZoneResult;