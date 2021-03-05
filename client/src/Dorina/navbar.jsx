import "../App.css";
import LoginFormComponent from '../gabor/LoginComponent/LoginForm.component'

const Navbar = () => {
return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="index.html">Infinit loop</a>
    <button class="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mainMenu">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="/index.html">Planet list</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="index.html">Voting statistics</a>
        </li>

      </ul>
      <form class="d-flex">
        <button class="btn btn-outline-warning me-2 shadow-none " type="submit">Registration</button>
        <button class="btn btn-outline-warning shadow-none " type="submit"><a href="/../../gabor/LoginComponent/LoginForm.component.jsx">Login</a></button>
      </form>
     {/*
 <form class="d-flex">
      
          <button class="nav-link btn btn-outline-warning" type="submit">Registration</button>
        
        <button class="btn btn-outline-warning" type="submit">Login</button>
      </form>
     */}
    </div>
  </div>
</nav>
);

}
  




export default Navbar;