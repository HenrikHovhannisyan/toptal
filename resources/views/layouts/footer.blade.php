<!-- Footer -->
<footer>
    <div class="footer-top">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-xl-4">
                    <div class="footer-widget">
                        <ul class="footer-menu">
                            <li>
                                <a href="{{ route('home') }}">Home</a>
                            </li>
                            <li>
                                <a href="{{ route('product') }}">Product</a>
                            </li>
                            <li>
                                <a href="{{ route('resources') }}">Resources</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6 col-xl-4">
                    <div class="footer-widget">
                        <ul class="social-icon mb-3">
                            <li>
                                <a href="javascript:void(0);">
                                    <img src="{{ asset('assets/img/icons/fb.svg') }}" class="img" alt="icon"/>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <img src="{{ asset('assets/img/icons/instagram.svg') }}" class="img" alt="icon"/>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <img src="{{ asset('assets/img/icons/twitter.svg') }}" class="img" alt="icon"/>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <img src="{{ asset('assets/img/icons/whatsapp.svg') }}" class="img" alt="icon"/>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <img src="{{ asset('assets/img/icons/youtube.svg') }}" class="img" alt="icon"/>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <img src="{{ asset('assets/img/icons/linkedin.svg') }}" class="img" alt="icon"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-12 col-xl-4">
                    <div class="footer-widget">
                        <div class="card bg-light-200 border-0 mb-3">
                            <div class="card-body">
                                <h5 class="mb-3">SignUp For Subscription</h5>
                                <div id="confirmationAlert" class="alert alert-success mt-3" style="display: none">
                                    You have been subscribed.
                                </div>
                                <form action="">
                                    <div class="mb-3">
                                        <input type="email" class="form-control" id="emailInput" placeholder="Enter Email Address" required/>
                                    </div>
                                    <button type="button" id="subscribeButton" class="btn btn-lg btn-linear-primary w-100">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer Bottom -->
    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="d-flex align-items-center justify-content-between flex-wrap">
                        <p class="mb-2">
                            Copyright &copy; {{ date('Y') }} - All Rights Reserved Toptal
                        </p>
                        <ul class="menu-links mb-2">
                            <li>
                                <a href="{{ route('terms-condition') }}"> Terms and Conditions</a>
                            </li>
                            <li>
                                <a href="{{ route('privacy-policy') }}">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Footer Bottom -->
</footer>
<!-- /Footer -->
