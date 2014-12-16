/******************/
/* General Layout */
/******************/

@font-face {
    font-family: 'My Lucida';
    src: url('../font/LucidaGrande.ttf');
    font-style: normal; 
    font-weight: bold;
}

* {
    font-family: 'My Lucida', Console;
}

body {
    background: linear-gradient(to bottom, #efefef, white) no-repeat;
}

a {
    color: black;
    text-decoration: none;
}

.wrapper {
    width: 1280px;
    padding: 25px;
    margin: 0 auto;
}

header .logo-search, header .logo-search img, header .logo-search form, main header aside, main header .name, main header .statistics, main h2, body .wrapper > aside, body .wrapper > main {
    float: left;
}

header .user, main header .links, main .station {
    float: right;
}
