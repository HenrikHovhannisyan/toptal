@extends('layouts.app')

@section('content')
    <!-- Hero Section -->
    <section class="hero-section" id="home">
        <div class="hero-content position-relative overflow-hidden">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div
                            class="wow fadeInUp"
                            data-wow-duration="1s"
                            data-wow-delay=".25s"
                        >
                            <h1 class="mb-2">
                                Get expert developers, on your terms, for your next
                                <span class="typed" data-type-text="Website"></span>
                            </h1>
                            <p class="mb-3 sub-title">
                                Access a network of vetted, highly skilled developers ready to
                                tackle your business challenges. No long-term commitments,
                                just the talent you need when you need it.
                            </p>
                            <div class="mb-2">
                                <a
                                    href="https://app.toptal.ai/sign-up-as-client"
                                    class="btn btn-linear-primary d-inline-flex align-items-center"
                                >
                                    Hire Talent Now
                                </a>
                            </div>
                            <div class="d-flex align-items-center flex-wrap banner-info">
                                <div class="d-flex align-items-center me-4 mt-4">
                                    <img src="{{ asset('assets/img/icons/success-01.svg') }}" alt="icon" />
                                    <div class="ms-2">
                                        <h6>500 +</h6>
                                        <p>Developers Available</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center me-4 mt-4">
                                    <img src="{{ asset('assets/img/icons/success-02.svg') }}" alt="icon" />
                                    <div class="ms-2">
                                        <h6>1,200</h6>
                                        <p>Projects Delivered</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center me-4 mt-4">
                                    <img src="{{ asset('assets/img/icons/success-03.svg') }}" alt="icon" />
                                    <div class="ms-2">
                                        <h6>4.9/5</h6>
                                        <p>Average Client Rating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="banner-img wow fadeInUp" data-wow-duration="1s" data-wow-delay=".25s">
                        <img src="{{ asset('assets/img/banner.png') }}" alt="img" class="img-fluid animation-float"/>
                    </div>
                </div>
            </div>
            <div class="hero-image">
                <img src="{{ asset('assets/img/bg/bg-03.svg') }}" alt="img" class="shape-03" />
                <img src="{{ asset('assets/img/bg/bg-04.svg') }}" alt="img" class="shape-04" />
                <img src="{{ asset('assets/img/bg/bg-05.svg') }}" alt="img" class="shape-05" />
            </div>
        </div>
    </section>
    <!-- /Hero Section -->

    <!-- Category Section -->
    <section class="section category-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 text-center wow fadeInUp" data-wow-delay="0.2s">
                    <div class="section-header text-center">
                        <h2 class="mb-1">
                            Pick Developers by
                            <span class="text-linear-primary">Category</span>
                        </h2>
                        <p class="sub-title">
                            Whether you need front-end specialists, mobile app developers,
                            or AI experts, explore the different skill sets available.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row g-4 row-cols-xxl-6 row-cols-xl-6 row-cols-md-4 row-cols-sm-2 row-cols-1 justify-content-center">
                <div class="col d-flex">
                    <div class="category-item text-center flex-fill wow fadeInUp" data-wow-delay="0.2s">
                        <div class="mx-auto mb-3">
                            <img src="{{ asset('assets/img/icons/category/js.png') }}" class="img-fluid" alt="img"/>
                        </div>
                        <h6 class="fs-14 mb-1">JavaScript</h6>
                    </div>
                </div>
                <div class="col d-flex">
                    <div class="category-item text-center flex-fill wow fadeInUp" data-wow-delay="0.2s">
                        <div class="mx-auto mb-3">
                            <img src="{{ asset('assets/img/icons/category/html-css.png') }}" class="img-fluid" alt="img"/>
                        </div>
                        <h6 class="fs-14 mb-1">HTML/CSS</h6>
                    </div>
                </div>
                <div class="col d-flex">
                    <div class="category-item text-center flex-fill wow fadeInUp" data-wow-delay="0.2s">
                        <div class="mx-auto mb-3">
                            <img src="{{ asset('assets/img/icons/category/php.png') }}" class="img-fluid" alt="img"/>
                        </div>
                        <h6 class="fs-14 mb-1">PHP</h6>
                    </div>
                </div>
                <div class="col d-flex">
                    <div class="category-item text-center flex-fill wow fadeInUp" data-wow-delay="0.2s">
                        <div class="mx-auto mb-3">
                            <img src="{{ asset('assets/img/icons/category/typescript.png') }}" class="img-fluid" alt="img"/>
                        </div>
                        <h6 class="fs-14 mb-1">TypeScript</h6>
                    </div>
                </div>
                <div class="col d-flex">
                    <div class="category-item text-center flex-fill wow fadeInUp" data-wow-delay="0.2s">
                        <div class="mx-auto mb-3">
                            <img src="{{ asset('assets/img/icons/category/ruby.png') }}" class="img-fluid" alt="img"/>
                        </div>
                        <h6 class="fs-14 mb-1">Ruby</h6>
                    </div>
                </div>
                <div class="col d-flex">
                    <div class="category-item text-center flex-fill wow fadeInUp" data-wow-delay="0.2s">
                        <div class="mx-auto mb-3">
                            <img src="{{ asset('assets/img/icons/category/swift.png') }}" class="img-fluid" alt="img"/>
                        </div>
                        <h6 class="fs-14 mb-1">Swift</h6>
                    </div>
                </div>
                <div class="col d-flex">
                    <div class="category-item text-center flex-fill wow fadeInUp" data-wow-delay="0.2s">
                        <div class="mx-auto mb-3">
                            <img src="{{ asset('assets/img/icons/category/kotlin.png') }}" class="img-fluid" alt="img"/>
                        </div>
                        <h6 class="fs-14 mb-1">Kotlin</h6>
                    </div>
                </div>
                <div class="col d-flex">
                    <div class="category-item text-center flex-fill wow fadeInUp" data-wow-delay="0.2s">
                        <div class="mx-auto mb-3">
                            <img src="{{ asset('assets/img/icons/category/python.png') }}" class="img-fluid" alt="img"/>
                        </div>
                        <h6 class="fs-14 mb-1">Python</h6>
                    </div>
                </div>
                <div class="col d-flex">
                    <div class="category-item text-center flex-fill wow fadeInUp" data-wow-delay="0.2s">
                        <div class="mx-auto mb-3">
                            <img src="{{ asset('assets/img/icons/category/c.png') }}" class="img-fluid" alt="img"/>
                        </div>
                        <h6 class="fs-14 mb-1">C++</h6>
                    </div>
                </div>
                <div class="col d-flex">
                    <div class="category-item text-center flex-fill wow fadeInUp" data-wow-delay="0.2s">
                        <div class="mx-auto mb-3">
                            <img src="{{ asset('assets/img/icons/category/rust.pn') }}g" class="img-fluid" alt="img"/>
                        </div>
                        <h6 class="fs-14 mb-1">Rust</h6>
                    </div>
                </div>
                <div class="col d-flex">
                    <div class="category-item text-center flex-fill wow fadeInUp" data-wow-delay="0.2s">
                        <div class="mx-auto mb-3">
                            <img src="{{ asset('assets/img/icons/category/go.png') }}" class="img-fluid" alt="img"/>
                        </div>
                        <h6 class="fs-14 mb-1">Golang (Go)</h6>
                    </div>
                </div>
                <div class="col d-flex">
                    <div class="category-item text-center flex-fill wow fadeInUp" data-wow-delay="0.2s">
                        <div class="mx-auto mb-3">
                            <img src="{{ asset('assets/img/icons/category/sql.png') }}" class="img-fluid" alt="img"/>
                        </div>
                        <h6 class="fs-14 mb-1">SQL</h6>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Category Section -->

    <!-- Why Choose Us -->
    <section class="choose-nine-section section">
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <div class="section-heading section-heading-nine aos" data-aos="fade-up" >
                        <span class="title-badge">Trusted & Quality Developers</span>
                        <h2>Why Partner With <span>Us?</span></h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center g-4 aos" data-aos="fade-up">
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 d-flex">
                    <div class="reasonable-wrap bg-primary w-100">
                        <img src="{{ asset('assets/img/icons/choose-icon-3.svg') }}" alt="image" />
                        <h5>Expert Developers</h5>
                        <p>
                            Our team of developers brings deep expertise to every project,
                            delivering high-quality, tailored solutions that meet your
                            unique business needs.
                        </p>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 d-flex">
                    <div class="reasonable-wrap bg-secondary w-100">
                        <img src="{{ asset('assets/img/icons/choose-icon-4.svg') }}" alt="image" />
                        <h5>Flexible Solutions</h5>
                        <p>
                            We understand that every business is different. That’s why we
                            offer flexible engagement models, ensuring that you get the
                            right developers for your specific project and budget.
                        </p>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 d-flex">
                    <div class="reasonable-wrap bg-dark w-100">
                        <img src="{{ asset('assets/img/icons/choose-icon-2.svg') }}" alt="image" />
                        <h5>Fast Turnaround</h5>
                        <p>
                            With a customer-first approach, we prioritize your timelines and
                            ensure quick deployment of the right talent to get your project
                            moving forward without delays.
                        </p>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 d-flex">
                    <div class="reasonable-wrap w-100">
                        <img src="{{ asset('assets/img/icons/choose-icon-1.svg') }}" alt="image" />
                        <h5 class="text-gray-9">Proven Results</h5>
                        <p class="text-default">
                            Our developers have a track record of delivering impactful
                            solutions. From transparent processes to detailed service
                            descriptions, we ensure clarity and satisfaction at every step.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Why Choose Us? -->

    <!-- Work Section-->
    <section class="section">
        <div class="container">
            <div class="work-section bg-black m-0">
                <div class="row align-items-center bg-01">
                    <div class="col-md-12 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="section-header text-center">
                            <h2 class="text-white">
                                How Toptal <span class="text-linear-primary">Works</span>
                            </h2>
                            <p class="text-light">
                                See how our developers have made a difference for our clients.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row gx-0 gy-4">
                    <div class="col-lg-4 d-flex">
                        <div class="work-item text-center flex-fill">
                            <div class="mb-3">
                                <img src="{{ asset('assets/img/icons/work-01.svg') }}" alt="img" />
                            </div>
                            <h6 class="text-white mb-2">1. Submit Your Project Needs</h6>
                            <p>
                                Fill out a simple form outlining your project and developer
                                requirements.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 d-flex">
                        <div class="work-item text-center flex-fill">
                            <div class="mb-3">
                                <img src="{{ asset('assets/img/icons/work-02.svg') }}" alt="img" />
                            </div>
                            <h6 class="text-white mb-2">2. We Match You With Developers</h6>
                            <p>
                                Our team will carefully select the best developers based on
                                your needs and tech stack.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 d-flex">
                        <div class="work-item work-03 text-center flex-fill">
                            <div class="mb-3">
                                <img src="{{ asset('assets/img/icons/work-03.svg') }}" alt="img" />
                            </div>
                            <h6 class="text-white mb-2">
                                3. Start Working with Your Developer
                            </h6>
                            <p>
                                Once you're matched, start collaborating with your developer
                                immediately.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="work-bg1">
                    <img src="{{ asset('assets/img/bg/work-bg-01.svg') }}" class="img-fluid" alt="img"
                    />
                </div>
                <div class="work-bg2">
                    <img src="{{ asset('assets/img/bg/work-bg-02.svg') }}" class="img-fluid" alt="img"
                    />
                </div>
            </div>
        </div>
    </section>
    <!-- /Work Section -->

    <!-- Testimonial Section -->
    <section class="section testimonial-section">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6 text-center wow fadeInUp" data-wow-delay="0.2s">
                    <div class="section-header text-center">
                        <h2 class="mb-1">
                            Genuine Feedback from
                            <span class="text-linear-primary">Our Clients</span>
                        </h2>
                        <p class="sub-title">
                            See how our developers have made a difference for our clients.
                        </p>
                    </div>
                </div>
            </div>
            <div class="testimonial-slider owl-carousel nav-center">
                <div class="testimonial-item wow fadeInUp" data-wow-delay="0.2s">
                    <div class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-1"></i>
                        <i class="fa-solid fa-star text-warning me-1"></i>
                        <i class="fa-solid fa-star text-warning me-1"></i>
                        <i class="fa-solid fa-star text-warning me-1"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                    </div>
                    <h5 class="mb-2">Smooth Hiring Process</h5>
                    <p class="mb-4">
                        “Great company! The hiring process was smooth, and we found
                        amazing developers.“
                    </p>
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center overflow-hidden">
                <span class="avatar avatar-lg flex-shrink-0">
                  <img src="{{ asset('assets/img/profiles/avatar-14.jpg') }}" class="img-fluid rounded-circle" alt="img"/>
                </span>
                            <h6 class="text-truncate ms-2">Anna Scott</h6>
                        </div>
                        <p>3 Days Ago</p>
                    </div>
                </div>
                <div class="testimonial-item wow fadeInUp" data-wow-delay="0.2s">
                    <div class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-1"></i>
                        <i class="fa-solid fa-star text-warning me-1"></i>
                        <i class="fa-solid fa-star text-warning me-1"></i>
                        <i class="fa-solid fa-star text-warning me-1"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                    </div>
                    <h5 class="mb-2">Reliable and Professional</h5>
                    <p class="mb-4">
                        “Very professional and reliable. They made it easy to get the
                        right talent.“
                    </p>
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center overflow-hidden">
                <span class="avatar avatar-lg flex-shrink-0">
                  <img src="{{ asset('assets/img/profiles/avatar-15.jpg') }}" class="img-fluid rounded-circle" alt="img"/>
                </span>
                            <h6 class="text-truncate ms-2">John Miller</h6>
                        </div>
                        <p>3 Days Ago</p>
                    </div>
                </div>
                <div class="testimonial-item wow fadeInUp" data-wow-delay="0.2s">
                    <div class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-1"></i>
                        <i class="fa-solid fa-star text-warning me-1"></i>
                        <i class="fa-solid fa-star text-warning me-1"></i>
                        <i class="fa-solid fa-star text-warning me-1"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                    </div>
                    <h5 class="mb-2">Skilled Developers</h5>
                    <p class="mb-4">
                        “The developers were skilled and fast. They did exactly what we
                        needed!“
                    </p>
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center overflow-hidden">
                            <span class="avatar avatar-lg flex-shrink-0">
                              <img src="{{ asset('assets/img/profiles/avatar-13.jpg') }}" class="img-fluid rounded-circle" alt="img"/>
                            </span>
                            <h6 class="text-truncate ms-2">Lisa Brown</h6>
                        </div>
                        <p>5 Days Ago</p>
                    </div>
                </div>
                <div class="testimonial-item wow fadeInUp" data-wow-delay="0.2s">
                    <div class="d-flex align-items-center mb-3">
                        <i class="fa-solid fa-star text-warning me-1"></i>
                        <i class="fa-solid fa-star text-warning me-1"></i>
                        <i class="fa-solid fa-star text-warning me-1"></i>
                        <i class="fa-solid fa-star text-warning me-1"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                    </div>
                    <h5 class="mb-2">High-Quality Work</h5>
                    <p class="mb-4">
                        “Great experience! The team was helpful, efficient, and delivered
                        high-quality work.“
                    </p>
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center overflow-hidden">
                <span class="avatar avatar-lg flex-shrink-0">
                  <img src="{{ asset('assets/img/profiles/avatar-12.jpg') }}" class="img-fluid rounded-circle" alt="img"/>
                </span>
                            <h6 class="text-truncate ms-2">David Wilson</h6>
                        </div>
                        <p>7 Days Ago</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Testimonial Section -->

    <!-- Provider Section -->
    <section class="section provide-section bg-black">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="section-header mb-md-0 mb-3">
                        <p class="sub-title fw-medium text-light mb-1">
                            Access Top Developers for Your Business
                        </p>
                        <h2 class="text-white">
                            Become Our <span class="text-linear-primary">Partner</span>
                        </h2>
                    </div>
                </div>
                <div class="col-md-6 text-md-end wow fadeInUp" data-wow-delay="0.2s">
                    <a
                        href="https://app.toptal.ai/sign-up-as-client"
                        class="btn btn-linear-primary"
                    >Join Us</a
                    >
                </div>
            </div>
        </div>
        <div class="provider-bg1">
            <img src="{{ asset('assets/img/bg/provide-bg-01.svg') }}" class="img-fluid" alt="img"/>
        </div>
        <div class="provider-bg2">
            <img src="{{ asset('assets/img/bg/provide-bg-02.svg') }}" class="img-fluid" alt="img"/>
        </div>
    </section>
    <!-- /Provider Section -->

    <!-- Business Section -->
    <section class="section business-section">
        <div class="container">
            <div class="row align-items-center bg-01">
                <div class="col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                    <div class="section-header mb-md-0 mb-4">
                        <h2 class="display-4">
                            Hire a developer or team tailored to your project needs and
                            scale as
                            <span class="text-linear-primary">your business grows.</span>
                        </h2>
                        <p class="sub-title">
                            Click below to get started and find the right talent for your
                            project.
                        </p>
                    </div>
                </div>
                <div class="col-md-6 text-md-end wow fadeInUp" data-wow-delay="0.2s">
                    <div class="business-img">
                        <img src="{{ asset('assets/img/business.jpg') }}" class="img-fluid" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /Business Section -->
@endsection
