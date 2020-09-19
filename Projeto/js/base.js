(() =>{

    const HEADER = `
        <nav class="navbar navbar-expand-sm navbar-dark">
        <!-- Brand -->
        <a class="navbar-brand" href="dashboard.html">Trade</a>

        <!-- Links -->
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" href="dashboard.html">Dashboard</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="controle-usuarios.html">Usuários</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Produtos</a>
        </li>

        <!-- Dropdown -->
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
            Relatórios
            </a>
            <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Usuários</a>
            </div>
        </li>
        </ul>
    </nav>
        `;

    let headerGlobal = document.querySelector('#trade-header');

    headerGlobal.innerHTML = HEADER;
    

})()