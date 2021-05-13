class Header extends HTMLElement {
constructor(){
  super();
}

connectedCallback(){
this.innerHTML=` <div class="navbar-fixed">
<nav class="black" role="navigation" id="header">
  <div class="nav-wrapper container">
    <a id="logo-container" href="index.html" class="brand-logo "><img src="dist/img/logo2.webp" title="Context Logo"
        class="tri-logo"></a>
    <ul class="right hide-on-med-and-down">
      <li><a href="index.html">Home</a></li>
      <li><a href="music.html">Music</a></li>
      <li><a href="index.html#Bio">Bio</a></li>
      <li><a href="videos.html">Videos</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="https://teespring.com/stores/context" target="_blank">Merch</a>
      </li>
    </ul>
    <ul id="nav-mobile" class="sidenav black center">
      <li><a href="index.html" class="white-text">Home</a></li>
      <li><a href="music.html" class="white-text">Music</a></li>
      <li><a href="index.html#Bio" class="white-text">Bio</a></li>
      <li><a href="videos.html" class="white-text">Videos</a></li>
      <li><a href="contact.html" class="white-text">Contact</a></li>
      <li><a href="https://teespring.com/stores/context" target="_blank" class="white-text">Merch</a>
      </li>
      <div class="grid-container center" id="social-mob">
        <a href="https://www.facebook.com/cntxtband/"><i class="fab fa-facebook fa-2x white-text"
            target="_blank"></i></a>

        <a href="https://www.instagram.com/cntxtband/" target=_blank id="profile-link"><i
            class="fab fa-instagram fa-2x white-text"></i></a>

        <a href="https://www.youtube.com/channel/UCuy3VfYPSf4j3AdpTdG6rDw" target="_blank"><i
            class="fab fa-youtube fa-2x white-text"></i></a>

      </div>
    </ul>
    <a href="#" data-target="nav-mobile" class="sidenav-trigger header_toggle">
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>
</nav>
</div>`
}
}

customElements.define
('header-component', Header);