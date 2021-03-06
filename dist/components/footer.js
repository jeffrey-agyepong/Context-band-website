class Footer extends HTMLElement {
  constructor(){
    super();
  }

  connectedCallback(){
  this.innerHTML=`<div class="footer bg-dark section">
  <div class="grid-container center" id="social-mob">
    <a href="https://www.facebook.com/cntxtband/" target="_blank"><i class="fab fa-facebook fa-3x white-text"></i></a>

    <a href=" https://www.instagram.com/cntxtband/" target=_blank id="profile-link"><i
        class="fab fa-instagram fa-3x white-text"></i></a>

    <a href="https://www.youtube.com/channel/UCuy3VfYPSf4j3AdpTdG6rDw" target="_blank"><i
        class="fab fa-youtube fa-3x white-text"></i></a>

  </div>

  <footer class="white-text">
    <div class="section"></div>
    <div class="grid-container">
      <p class="center"><a href="cookies-policy.html" target="_blank">Cookies Policy</a></p>
      <p class="center">© 2021 Context</p>
      <p class="center">Developed by <a href="https://conciseweb.netlify.app/" target="_blank"
          rel="noopener noreferrer">Concise Web Designs</a>
      </p>
    </div>

  </footer>
</div>`;
  }
}

customElements.define
('footer-component', Footer);
