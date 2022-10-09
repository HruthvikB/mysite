var myDate = new Date();
var hours= myDate.getHours();
export var greet = "";

if (hours < 12) {
    greet = "Good Morning";
} else if (hours >= 12 && hours < 17) {
    greet = "Good Afternoon";
} else if (hours >= 17 && hours < 19) {
    greet = "Good Evening";
} else {
    greet = "Good Night";
};