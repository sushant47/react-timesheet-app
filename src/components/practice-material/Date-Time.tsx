import React from 'react';
var timeOfDay = '';
function DateTime() {
    const date = new Date();
    const hours = date.getHours();
    calculateTimeOfDay(hours);

    const styles = {
        color: "#FFC200",
        backgroundColor: "FF2D00",
        fontSize: "20px"
    }
    return (
        <h1 style={styles}>{timeOfDay}</h1>
    )
}
function calculateTimeOfDay(hours: any) {
    if (hours < 12) {
        timeOfDay = 'Good Morning';
    } else if (hours < 12) {
        timeOfDay = 'Good Evening';
    } else {
        timeOfDay = 'Good Night';
    }
}
export default DateTime;