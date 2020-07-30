var holidays = {}
var mon = { "Seminar": [0, 6] }
var tue = { "WebTech - Lec": [0, 4], "WebTech - Lab": [7, 4] }
var wed = { "IP": [4, 3], "OS": [8, 4], "SA - Lec": [12, 4], "SA - Lab": [16, 4] }
var thu = { "SE - Lab": [0, 4], "SE - Lec": [6, 4] }
var fri = { "IP": [4, 3], "OS": [8, 4] }

var week = { "Sunday": holidays, "Monday": mon, "Tuesday": tue, "Wednesday": wed, "Thursday": thu, "Friday": fri, "Saturday": holidays }
var defaultSapn = 2

function addContent(colspan, data) {
    if (data !== "") {
        return "<td colspan=\"" + colspan + "\" style=\"cursor: pointer\" onclick=\"clickOnSubjectOnTable(this.innerHTML)\">" + data + "</td>"
    }
    return "<td colspan=\"" + colspan + "\">" + data + "</td>"
}

function addCourse() {
    for (var day in week) {
        var content = "<th scope = \"row\">" + day.toString() + "</th>"
        var current = 0
        for (var course in week[day]) {
            if (week[day][course][0] == current) {
                content += addContent(week[day][course][1], course.toString())
                current += week[day][course][1]
                continue
            }
            else {
                if (current % 2 != 0 && week[day][course][0] % 2 != 0) {
                    content += addContent(1, "")
                    for (current += 1; current < week[day][course][0]; current += 2) {
                        if (current + 2 > week[day][course][0]) {
                            break
                        }
                        content += addContent(2, "")
                    }
                    content += addContent(1, "")
                    current += 1

                }

                else if (current % 2 != 0 && week[day][course][0] % 2 == 0) {
                    content += addContent(1, "")
                    for (current += 1; current < week[day][course][0]; current += 2) {
                        content += addContent(2, "")

                    }

                }

                else if (current % 2 == 0 && week[day][course][0] % 2 != 0) {
                    for (; current < week[day][course][0]; current += 2) {
                        if (current + 2 > week[day][course][0]) {
                            content += addContent(1, "")
                            current += 1
                            break
                        }
                        content += addContent(2, "")
                    }

                }
                else {
                    for (; current < week[day][course][0]; current += 2) {
                        content += addContent(2, "")
                    }
                }

                content += addContent(week[day][course][1], course.toString())
                current += week[day][course][1]
                continue
            }
        }

        if (current < 20) {
            if (current % 2 == 1) {
                content += addContent(1, "")
                current += 1
            }
            for (; current != 20; current += 2) {
                content += addContent(2, "")
            }
        }
        document.getElementById(day).innerHTML = content
    }
}
