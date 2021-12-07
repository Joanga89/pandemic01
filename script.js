const profiles = document.getElementById('profiles')
const amount = 12;

const template = profile => {
  return `
    <div class="profile-card">
      <div class="profile-card__content">
        <div class="profile-card__image">
          <img src="${profile.picture.large}" />
        </div>
        <h2 class="profile-card__name">${profile.name.first} ${profile.name.last}</h2>
        <p class="profile-card__handle">@${profile.login.username}</p>
      </div>
      <button class="profile-card__button">Meet ${profile.name.first}</button>
    </div>
  `
}

fetch(`https://randomuser.me/api/?results=${amount}`, { method: 'get' })
  .then(response => response.json())
  .then(data => data.results.forEach(result => profiles.innerHTML += template(result)))
  .catch(error => console.log(error));