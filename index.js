const kits = ['crash', 'kick', 'snare', 'tom'];
const containerEl = document.querySelector('.drum-kit-container');


kits.forEach(kit => {
  // const btnEl = document.createElement('button');
  // btnEl.classList.add('btn');
  // btnEl.innerHTML = `${kits}`
  // const containerEl = document.getElementsByClassName('drum-kit-container');
  // containerEl.appendChild(btnEl);

  const btnEl = document.createElement('button');
  btnEl.classList.add('btn');
  btnEl.innerText = `${kit}`
  btnEl.style.backgroundImage = 'url(images/' + kit + '.png)'
  btnEl.addEventListener('click', ()=>{
    audioEl.play()
  })

  containerEl.appendChild(btnEl);
  const audioEl = document.createElement('audio');
  audioEl.src = 'sounds/' + kit + '.mp3'
  containerEl.appendChild(audioEl);

  window.addEventListener('keydown', (event)=>{
    if(event.key === kit.slice(0,1)){
      audioEl.play()
      btnEl.style.transform = 'scale(0.9)';
      setTimeout(()=>{
      btnEl.style.trasnsform = 'scale(1)'
      }, 100)
    };
  })
})

