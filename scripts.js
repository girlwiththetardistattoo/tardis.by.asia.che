let audioKnock = document.getElementById('knock')
let audioSpeech = document.getElementById('speech')
let titles = document.getElementById('theme11')
let music = [audioKnock, audioSpeech, titles]
let btnKnock = document.getElementById('section4')

btnKnock.onclick = function () {
	music[0].play()
}
music[0].onended = function () {
	music[1].play()
}
music[1].onended = function () {
	let answer = prompt('Where you want to start (no matter time of space)?')
	answer.onended = music[2].play ()
}
