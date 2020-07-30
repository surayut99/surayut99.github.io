var schedule, detail

function readFile() {
    fetch('../data/subject-schedule.json')
        .then(response => response.json())
        .then(data => {
            schedule = data
        })

    fetch('../data/subject-detail.json')
        .then(response => response.json())
        .then(data => {
            detail = data
        })
}

function findContent(collection, attr, content) {
    for (var i = 0; i < collection.length; i++) {
        if (collection[i][attr].includes(content)) {
            return collection[i]
        }
    }
}

function createTag(tag, text) {
    var newTag = document.createElement(tag)
    var newText = document.createTextNode(text)
    newTag.appendChild(newText)

    return newTag
}

function clickOnSubjectOnTable(subject) {
    document.getElementById('list-subject').innerHTML = ""
    document.getElementById('topic').innerHTML = "Here's What I Learn"
    document.getElementById('topic').style.color = "white"
    showDetail(subject)
}

function showDetail(subject) {
    document.getElementById('content-subject').scrollTop = 0

    var subjectObj = findContent(detail, "title", subject)
    var contentSubject = document.getElementById('content-subject')
    var fullName = createTag('h1', subjectObj.subject + " (" + subjectObj.id + ")")
    var des = createTag('p', subjectObj.des)
    var ref = createTag('a', "See Reference")

    ref.href = subjectObj.ref
    ref.target = "_blank"

    var creditObj = subjectObj.credit.split(', ')
    var sectionObj = subjectObj.section.split(', ')

    var credit
    var section

    if (creditObj.length == 1 || subject.includes('Lec')) {
        credit = createTag('h2', "Credit: " + creditObj[0])
        section = createTag('h2', "Section: " + sectionObj[0])
    } else {
        credit = createTag('h2', "Credit: " + creditObj[1])
        section = createTag('h2', "Section: " + sectionObj[1])
    }

    contentSubject.innerHTML = ""
    contentSubject.appendChild(fullName)
    contentSubject.appendChild(credit)
    contentSubject.appendChild(section)
    contentSubject.appendChild(des)
    contentSubject.appendChild(ref)
}

function showSubjectList(obj) {
    var day = obj.innerHTML
    var classStyle = "list-group-item list-group-item-action"
    var details = findContent(schedule, "day", day).detail
    var listSubject = document.getElementById('list-subject')

    document.getElementById('topic').innerHTML = day
    document.getElementById('topic').style.color = obj.style.color
    listSubject.innerHTML = ""

    if (details.length == 0) {
        document.getElementById('content-subject').innerHTML = ""
        document.getElementById('content-subject').appendChild(createTag('h1', "Sorry, There's no subject in this day."))
        return
    }

    document.getElementById('content-subject').innerHTML = ""
    document.getElementById('content-subject').appendChild(createTag('h1', "Let's see subject detail"))
    details = details.split(', ')

    for (var i = 0; i < details.length; i++) {
        var newTag = createTag('a', details[i])
        newTag.className += classStyle
        newTag.addEventListener('click', function () { showDetail(this.innerHTML) })
        newTag.addEventListener('mouseover', function () { changeColorMouseOver(this, obj.style.color) })
        newTag.addEventListener('mouseout', function () { changeColorMouseOut(this) })
        listSubject.appendChild(newTag)
    }

    window.scrollTo(0, document.body.scrollHeight)
}
