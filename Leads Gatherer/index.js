let input_el = document.getElementById("input-el")
let leads = []
let myleads = /* [] */ JSON.parse(localStorage.getItem("myleads"))
/* let temp = JSON.parse(localStorage.getItem("myleads")) */

/* if (temp != null) {
    myleads = temp
} */

if ( (myleads != null) && (myleads.length > 0) ) {
    leads = myleads
}
/* else {
    myleads = leads
} */

const ul_el = document.getElementById("leads-list")
const btn_saveinput_el = document.getElementById("btn-saveinput")
const btn_savetab_el = document.getElementById("btn-savetab")
const btn_clear_el = document.getElementById("btn-clear")
btn_saveinput_el.addEventListener("click", saveInput)
btn_savetab_el.addEventListener("click", saveTab)
btn_clear_el.addEventListener("click", clear)

function load() {
    if ( (myleads != null) && (myleads.length > 0) ) {
        render(myleads)
        /* let leads_list = ""
        for(let i = 0; i < myleads.length; i++) {
            leads_list += `
            <li>
                <a href=${myleads[i]}>${myleads[i]}</a>
            </li>
            `
        }
        
        ul_el.innerHTML = leads_list */
    }
}

function saveInput() {
    let lead = input_el.value
    leads.push(lead)
    render(leads)
    input_el.value = ""
    localStorage.setItem("myleads", JSON.stringify(leads))
}

function saveTab() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let tablead = tabs[0].url
        leads.push(tablead)
        render(leads)
        localStorage.setItem("myleads", JSON.stringify(leads))
    })
}

function render(leads) {
    let listitems = ""
    for (let i = 0; i < leads.length; i++) {
        listitems += `
            <li>
                <a target='_blank' href=${leads[i]}>${leads[i]}</a>
            </li>
            `
    }
    ul_el.innerHTML = listitems
}

function clear() {
    localStorage.clear()
    ul_el.innerHTML = ''
    leads = []
}

load(myleads)
