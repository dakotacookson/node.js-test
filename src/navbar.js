let nav = document.querySelector('#NavBarSet')
let url = document.URL
let page = ''
let page2 = ''

if (url = 'http://127.0.0.1:3000/') {
 page = '/'
 page2 = './about'
}
else if (url = 'http://127.0.0.1:3000/about') {
  page = '/'
  page2 = './about'
}
else{
  page = ''
  page2 = '' 
}

nav.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href=${page}>Test</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="${page2}">About</a>
      </li>
    </ul>
  </div>
</div>
</nav>`
