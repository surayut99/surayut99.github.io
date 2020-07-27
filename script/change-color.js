function changeCourseColor() {
    var td = document.getElementsByTagName("td")
    var dictColor = {
        "Seminar": " rgb(153, 0, 153, .6)", "WebTech - Lec": "rgb(0, 150, 136, 0.6)",
        "WebTech - Lab": "rgb(0, 150, 136,0.6)", "IP": "rgb(0, 188, 212,.6)", "SE - Lec": "rgb(139, 195, 74,.6)",
        "SE - Lab": "rgb(139, 195, 74,.6)", "OS": "rgb(255, 193, 7,.6)", "SA - Lec": "rgb(229, 28, 35,.6)",
        "SA - Lab": "rgb(229, 28, 35,.6)"
    }
    for (var i = 0; i < td.length; i++) {
        if (td[i].textContent.length != 0) {
            td[i].style.backgroundColor = dictColor[td[i].textContent]
            td[i].style.textShadow = "0px 2px 5px black"
        }
    }
}

function changeDayColor() {
    var th = document.getElementsByTagName("th")
    var dictColor = {
        "Monday": "rgb(255, 255, 0,.8)", "Tuesday": "rgb(253, 159, 253,.8)", "Wednesday": "rgb(102, 204, 102,.8)",
        "Thursday": "rgb(255, 153, 0,.8)", "Friday": "rgb(102, 153, 255,.8)"
    }

    for (var i = 1; i < 11; i++) {
        th[i].style.textShadow = "0px 2px 5px black"
    }

    for (var i = 11; i < 16; i++) {
        th[i].style.color = dictColor[th[i].textContent]
        th[i].style.textShadow = "0px 2px 5px black"
    }
}