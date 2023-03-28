let note_do = new Audio('notes/do.mp3')
let note_re = new Audio('notes/re.mp3')
let note_mi = new Audio('notes/mi.mp3')
let note_fa = new Audio('notes/fa.mp3')
let note_sol = new Audio('notes/sol.mp3')
let note_lia = new Audio('notes/lia.mp3')
let note_si = new Audio('notes/si.mp3')

function playNote(audio) {
    audio.pause()
    audio.currentTime = 0
    audio.play()
}

document.addEventListener('keydown', function(event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }

   let tappedNote = document.getElementById('tappedNote')

    switch (event.key) {
        case "s":
            playNote(note_do)
            tappedNote.innerText = 'До'
            break;
        case "d":
            playNote(note_re)
            tappedNote.innerText = 'Ре'
            break;
        case "f":
            playNote(note_mi)
            tappedNote.innerText = 'Мі'
            break;
        case "g":
            playNote(note_fa)
            tappedNote.innerText = 'Фа'
            break;
        case "h":
            playNote(note_sol)
            tappedNote.innerText = 'Соль'
            break;
        case "j":
            playNote(note_lia)
            tappedNote.innerText = 'Ля'
            break;
        case "k":
            playNote(note_si)
            tappedNote.innerText = 'Сі'
            break;
        default:
            return;
    }

    tappedNote.style.color = '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
});