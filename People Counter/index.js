let count_element = document.getElementById("count")
let count = 0

function increment() {
    count += 1
    count_element.textContent = count
    console.log(count, " people in")
}



function save() {
    let save_element = count + " - "
    document.getElementById("entries").textContent += save_element
    console.log("Saved: ", count, "people")
    count_element.textContent = 0
    count = 0
}
