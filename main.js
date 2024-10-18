/** variables tag */
const list_mensajes = document.getElementById("mensajes");
const form = document.getElementById("formulario");
const input = document.getElementById("message")

const channel = new BroadcastChannel("Chat")

form.addEventListener("submit", e => {
    e.preventDefault()
    const value = input.value
    channel.postMessage(value)
})

const colors = ["#3cb371", "#ffa500", "#0000ff", "#ccc", "#ff0000"];

channel.onmessage = event => {
    const data = event.data 
    const rmnum = Math.round(Math.random() * 5)
    const tag_ = document.createElement("li");
    tag_.textContent = data
    tag_.style = `background: ${colors[rmnum]};`
    list_mensajes.appendChild(tag_)
}