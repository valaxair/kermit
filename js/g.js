
// 3kh0 made most of this its mostly just edited i dont know how to use json files so ummmmmmmmmmmmm

    fetch('/json/g.json')
  .then((lessgooo) => lessgooo.json())
  .then((games) => {
    games.forEach((game) => {
      const gamecontainmentchamber = document.createElement('div');
      const gamerdiv = document.querySelector('.frame-main');
      const gamesbutton = document.querySelector('.classes');
      const gamerNavigaton = gamerdiv.querySelector('.frame-bar');
      const gamerframer = document.getElementById('homework');
      gamecontainmentchamber.className = 'class';
      gamecontainmentchamber.innerHTML = `<img src="${game.gameroot + "/" + game.gameicon}" onerror="this.src='./imgs/noicon.png'"/>`;
      gamecontainmentchamber.innerHTML += `<h1>${game.game}</h1>`;
      gamesbutton.appendChild(gamecontainmentchamber);

      gamecontainmentchamber.onclick = (e) => {
        gamesbutton.classList.add('hidden');
        gamerdiv.classList.remove('hidden');
        gamerframer.src = `${game.gameroot}`;
      };
      gamerNavigaton.querySelector('#close').addEventListener('click', (e) => {
        gamesbutton.classList.remove('hidden');
        gamerdiv.classList.add('hidden');
        gamerframer.src = '';
      });
      gamerNavigaton.querySelector('#fullscreen').addEventListener('click', (e) => {
        if (!document.fullscreenElement) {
            gamerframer.requestFullscreen();
        }
    });
  });
  })
  .catch((e) => {
    alert('Error Classes Not Loaded');
    alert(e);
  });

if (localStorage.getItem("nsf") == "devil") {
  console.log('enjoy 😈')

  fetch('/json/ng.json')
  .then((lessgooo) => lessgooo.json())
  .then((games) => {
    games.forEach((game) => {
      const gamecontainmentchamber = document.createElement('div');
      const gamerdiv = document.querySelector('.frame-main');
      const gamesbutton = document.querySelector('.classes');
      const gamerNavigaton = gamerdiv.querySelector('.frame-bar');
      const gamerframer = document.getElementById('homework');
      gamecontainmentchamber.className = 'class';
      gamecontainmentchamber.innerHTML = `<img src="${game.gameroot + "/" + game.gameicon}" onerror="this.src='./imgs/noicon.png'"/>`;
      gamecontainmentchamber.innerHTML += `<h1>${game.game}</h1>`;
      gamesbutton.appendChild(gamecontainmentchamber);

      gamecontainmentchamber.onclick = (e) => {
        gamesbutton.classList.add('hidden');
        gamerdiv.classList.remove('hidden');
        gamerframer.src = `${game.gameroot}`;
      };
      gamerNavigaton.querySelector('#close').addEventListener('click', (e) => {
        gamesbutton.classList.remove('hidden');
        gamerdiv.classList.add('hidden');
        gamerframer.src = '';
      });
      gamerNavigaton.querySelector('#fullscreen').addEventListener('click', (e) => {
        if (!document.fullscreenElement) {
            gamerframer.requestFullscreen();
        }
    });
  });
  })
  .catch((e) => {
    alert('Error Classes Not Loaded');
    alert(e);
  });
}
