import React from 'react'

const Navbar = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="co col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <nav class="navbar bg-dark  navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Home</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <a class="nav-link active" aria-current="page" href="/addtodo">Add ToDo</a>
                        <a class="nav-link" href="/completed">Completed</a>
                        <a class="nav-link" href="/incomplete">Incomplete</a>
                        <a class="nav-link " href="/">All Todos</a>
                    </div>
                    </div>
                </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar