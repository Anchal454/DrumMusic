const allInstrument = document.querySelectorAll('button')

for(const node of allInstrument){
  node.addEventListener('click',()=>{
    playAudio(node.innerHTML)
    detectedPressed(node)
  })
}

document.addEventListener('keypress',(e)=>{
  playAudio(e.key)
  const node = document.querySelector('.'+e.key)
  detectedPressed(node)
})

const detectedPressed = (node) =>{
  node.classList.add('pressed')
  setTimeout(()=>{
    node.classList.remove('pressed')
  },100)
}

const playAudio = (name)=>{
switch (name){
  case 'w':
    var audio = new Audio('sounds/tom-1.mp3')
    audio.play()
    break;
    case 'a':
    var audio = new Audio('sounds/tom-2.mp3')
    audio.play()
    break;
    case 's':
    var audio = new Audio('sounds/tom-3.mp3')
    audio.play()
    break;
    case 'd':
    var audio = new Audio('sounds/tom-4.mp3')
    audio.play()
    break;
    case 'j':
    var audio = new Audio('sounds/crash.mp3')
    audio.play()
    break;
    case 'k':
    var audio = new Audio('sounds/kick-bass.mp3')
    audio.play()
    break;
    case 'l':
    var audio = new Audio('sounds/snare.mp3')
    audio.play()
    break;
    default:
      break;
}
}