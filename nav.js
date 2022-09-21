const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="img/YASSO.png" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
            <input type="text" class = "search-box" placeholder= "search brand, product">
            <button class="search-btn">search</button>
        </div>
        <a href="#"><img src="img/user.png" alt=""></a>
        <a href="#"><img src="img/cart.png" alt=""></a>
    </div>
</div>
<ul class="links-container">
    <li class="link-item"><a href="#" class="link">home</a></li>
    <li class="link-item"><a href="#Aboutus" class="link">About us</a></li>
    <li class="link-item"><a href="#category" class="link">Certificates</a></li>
    <li class="link-item"><a href="#Ourmessage" class="link">Our message</a></li>

</ul>
    `;
}

createNav();