const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div  class="footer-content">
    <img src="IMG/YASSO WHIT.png" class="logo" alt="">
    
    </div>

</div>
<p class="footer-title">Address:</p>
<p class="info">Alexandria-Cairo Desert Road,
Al-Kablat Street, next to Al-Amreya Central</p>
    <p class="info"> support emails- yassotexegypt@gmail.com, info@yassotexegypt.com</p>
    <p class="info"> Mobile: +201091070016</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms and services</a>
            <a href="#" class="social-link">privacy pages</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
            <a href="#" class="social-link">reddit</a>
        </div>
    </div>

    <p class="footer-credit">Designed by programmer / Essam Mohamed +201206578929</p>
    `;
}

createFooter();