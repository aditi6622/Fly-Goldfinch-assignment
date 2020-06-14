function updateClock() {
    var now = new Date(); // current date
     var months = ['January', 'February', 'March','April','May','June','July','August','September','October','November','December']; // you get the idea
      var time = now.getHours() + ':' + now.getMinutes()+':'+now.getSeconds();

        // a cleaner way than string concatenation
        date = [now.getDate(),
                months[now.getMonth()],
                now.getFullYear()].join(' ');

    // set the content of the element with the ID time to the formatted string
    var res=[date, time].join(' ')
    document.getElementById('time').innerHTML =res ;

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
updateClock();
console.log("hii");