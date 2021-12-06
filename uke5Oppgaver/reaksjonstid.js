// model
const app = document.getElementById('app'); ''
let startTime = new Date().getTime();
let spentSeconds = 0;
let spentTimeDiv = "";
let averageTime = 0;
let timesPressed = -1;
let totalTimeSpent = 0;
let timeOutVar;
let lampList = [
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", ""];
let onClickState = [
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", ""];
// view
changeActiveLamp(1)
updateview();
//updates the view of all the lamps and text whenever it's called
function updateview() {
    let html = "";
    html = `
    <div class="grid-container">
        <div class="lamp ${lampList[0]}" onclick="${onClickState[0]}"></div>
        <div class="lamp ${lampList[1]}" onclick="${onClickState[1]}"></div>
        <div class="lamp ${lampList[2]}" onclick="${onClickState[2]}"></div>
        <div class="lamp ${lampList[3]}" onclick="${onClickState[3]}"></div>
        <div class="lamp ${lampList[4]}" onclick="${onClickState[4]}"></div>
        <div class="lamp ${lampList[5]}" onclick="${onClickState[5]}"></div>
        <div class="lamp ${lampList[6]}" onclick="${onClickState[6]}"></div>
        <div class="lamp ${lampList[7]}" onclick="${onClickState[7]}"></div>
        <div class="lamp ${lampList[8]}" onclick="${onClickState[8]}"></div>
        <div class="lamp ${lampList[9]}" onclick="${onClickState[9]}"></div>
        <div class="lamp ${lampList[10]}" onclick="${onClickState[10]}"></div>
        <div class="lamp ${lampList[11]}" onclick="${onClickState[11]}"></div>
        <div class="lamp ${lampList[12]}" onclick="${onClickState[12]}"></div>
        <div class="lamp ${lampList[13]}" onclick="${onClickState[13]}"></div>
        <div class="lamp ${lampList[14]}" onclick="${onClickState[14]}"></div>
        <div class="lamp ${lampList[15]}" onclick="${onClickState[15]}"></div>
        <div class="lamp ${lampList[16]}" onclick="${onClickState[16]}"></div>
        <div class="lamp ${lampList[17]}" onclick="${onClickState[17]}"></div>
        <div class="lamp ${lampList[18]}" onclick="${onClickState[18]}"></div>
        <div class="lamp ${lampList[19]}" onclick="${onClickState[19]}"></div>
        <div class="lamp ${lampList[20]}" onclick="${onClickState[20]}"></div>
        <div class="lamp ${lampList[21]}" onclick="${onClickState[21]}"></div>
        <div class="lamp ${lampList[22]}" onclick="${onClickState[22]}"></div>
        <div class="lamp ${lampList[23]}" onclick="${onClickState[23]}"></div>
        <div class="lamp ${lampList[24]}" onclick="${onClickState[24]}"></div>
    </div>
    <button onclick="resetTimes()">Restart</button>
    <div>${spentTimeDiv}</div>
    `

    //app.innerHTML = html
}
// controller
// Changes the active lamp to a random one, and checks how long you took to press the last lamp
function changeActiveLamp(initialLoad) {
    //calculates how much time was spent between when a light turned on,
    //and when it was clicked
    spentSeconds = Math.floor(new Date().getTime() - startTime) / 1000;
    console.log(spentSeconds);
    //updates the average time spent to click each light
    updateAverageTime();
    //clears everything in the 'lampList' and 'onClickState' arrays to turn all the lamps off
    lampList.fill("");
    onClickState.fill("");
    //clears timeout if it was currently running
    clearTimeout(timeOutVar);
    //sets random timeout between 0.2 and 3 sec before the next one activates
    timeOutVar = setTimeout(activateRandomLamp, generateRandomNumber(200, 3000))
    //makes sure the text doesn't appear when you initially load the page
    if (initialLoad != 1) {
        spentTimeDiv = `
            You spent: ${spentSeconds} seconds to press the lamp! 
            </br>Average time spent: ${averageTime} seconds.
            `;
    }
    updateview()
}
//turns on a random lamp and saves the time for when it last did
function activateRandomLamp() {
    //generates a random number between 0 and 24
    let selectedLampIndex = generateRandomNumber(0, 25)
    console.log("randonumber: ", selectedLampIndex);
    //turns on the lamp with the index of the chosen random number above, and makes it clickable 
    lampList[selectedLampIndex] = "lightOn";
    onClickState[selectedLampIndex] = "changeActiveLamp()";
    //updates the start time so it's the same time as the light turned on
    startTime = new Date().getTime();
    updateview();
}

//updates the average time spent from when a light appeared until it was clicked
function updateAverageTime() {
    timesPressed++;
    totalTimeSpent += spentSeconds;
    averageTime = (totalTimeSpent / timesPressed).toFixed(3);
}
//resets everything so you can start over
function resetTimes() {
    changeActiveLamp();
    spentSeconds = 0;
    spentTimeDiv = "";
    averageTime = 0;
    timesPressed = 0;
    totalTimeSpent = 0;
    updateview();
}
function generateRandomNumber(min = 0, max) {
    return Math.floor(min + Math.random() * (max - min));
}