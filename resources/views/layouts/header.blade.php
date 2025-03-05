<!-- Header -->
<header class="header header-new">
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg header-nav">
            <div class="navbar-header">
                <a id="mobile_btn" href="javascript:void(0);">
                  <span class="bar-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </a>
                <a href="{{ route('home') }}" class="navbar-brand logo">
                    <img src="{{ asset('assets/img/logo.svg') }}" class="img-fluid" alt="Logo"/>
                </a>
                <a href="{{ route('home') }}" class="navbar-brand logo-small">
                    <img src="{{ asset('assets/img/logo-small.svg') }}" class="img-fluid" alt="Logo"/>
                </a>
            </div>
            <div class="main-menu-wrapper">
                <div class="menu-header">
                    <a href="{{ route('home') }}" class="menu-logo">
                        <img src="{{ asset('assets/img/logo.svg') }}" class="img-fluid" alt="Logo"/>
                    </a>
                    <a id="menu_close" class="menu-close" href="javascript:void(0);">
                        <i class="fas fa-times"></i>
                    </a>
                </div>
                <ul class="main-nav align-items-lg-center">
                    <li class="nav-item {{isActiveRoute('home')}}">
                        <a class="nav-link" href="{{ route('home') }}">Home</a>
                    </li>
                    <li class="nav-item {{isActiveRoute('product')}}">
                        <a class="nav-link" href="{{ route('product') }}">Product</a>
                    </li>
                    <li class="nav-item {{isActiveRoute('resources')}}">
                        <a class="nav-link" href="{{ route('resources') }}">Resources</a>
                    </li>
                    <li class="nav-item d-sm-none">
                        <a class="nav-link" href="https://app.toptal.ai/sign-in">Sign In</a>
                    </li>
                    <li class="nav-item d-sm-none">
                        <a class="nav-link" href="https://app.toptal.ai/sign-up-as-client">Join Us</a>
                    </li>
                </ul>
            </div>
            <ul class="nav header-navbar-rht">
                <li class="nav-item pe-1">
                    <a class="nav-link btn btn-light" href="https://app.toptal.ai/sign-in">
                        <i class="ti ti-lock me-2"></i>Sign In
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn btn-linear-primary" href="https://app.toptal.ai/sign-up-as-client">
                        <i class="ti ti-user-filled me-2"></i>
                        Join Us
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</header>
<!-- /Header -->
