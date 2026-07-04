import './Style/Header.css'
export function Header(){
    return(
        <>
        <header class="header">

    <div class="logo">
        <span class="logo-icon">
            <i class="fa-solid fa-graduation-cap"></i>
        </span>

        <h1>LearnTube</h1>
    </div>

    <nav class="nav-links">
        <a href="#">Learn</a>
        <a href="#">Notes</a>
    </nav>

    <div class="menu-btn">
        <i class="fa-solid fa-bars"></i>
    </div>

</header>
        </>

    );

}