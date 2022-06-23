winterStart = new Date(1900, 11, 01)
winterEnd = new Date(1900, 03, 31)
today = new Date()

var link

if ((today.getMonth() > winterEnd.getMonth()) && (today.getMonth() < winterStart.getMonth())){
    link = "https://skitourentirol.github.io/sommer/"
} else {
  link = "https://skitourentirol.github.io/skitouren.github.io/"
}


