
// 3kh0 made most of this its mostly just edited i dont know how to use json files so ummmmmmmmmmmmm

fetch('/json/games.json')
  .then((lessgooo) => lessgooo.json())
  .then((games) => {
    games.forEach((game) => {
      const gamecontainmentchamber = document.createElement('div');
      const gamerdiv = document.querySelector('.frame-main');
      const gamesbutton = document.querySelector('.coolgamergames');
      const gamerNavigaton = gamerdiv.querySelector('.frame-bar');
      const gamerframer = document.getElementById('gamergamerpumkineater');
      gamecontainmentchamber.className = 'GAME4U';
      gamecontainmentchamber.innerHTML = `<img src="${game.gameroot + "/" + game.gameicon}""/>`;
      gamesbutton.appendChild(gamecontainmentchamber);

      gamecontainmentchamber.onclick = (e) => {
        gamesbutton.classList.add('hidden');
        gamerdiv.classList.remove('hidden');
        gamerframer.src = `${game.gameroot}`;
        gamerNavigaton.querySelector('h1').textContent = game.game;
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
    alert('games go brr sorry');
    alert(e);
  });
