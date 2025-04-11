@extends('layouts.app')
@section('title')
- Product
@endsection

@section('content')
<!-- Breadcrumb -->
<div class="breadcrumb-bar text-center">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-12">
                <h2 class="breadcrumb-title mb-2">Product</h2>
                <p class="mb-3 sub-title">
                    We simplify the process of finding skilled developers, making it quick, flexible, and
                    stress-free.
                </p>
            </div>
        </div>
        <div class="breadcrumb-bg">
            <img src="{{ asset('assets/img/bg/breadcrumb-bg-01.png') }}" class="breadcrumb-bg-1" alt="Img">
            <img src="{{ asset('assets/img/bg/breadcrumb-bg-02.png') }}" class="breadcrumb-bg-2" alt="Img">
        </div>
    </div>
</div>
<!-- /Breadcrumb -->

<!-- Page Wrapper -->
<div class="page-wrapper">
    <div class="content">
        <div class="container">
            <!-- How it works-->
            <div class="row align-items-center justify-content-center">
                <div class="col-md-8 ">
                    <div class="work-wrap work-wrap-acc">
                        <span>01</span>
                        <h1 class="display-6">Create Your Account</h1>
                        <p>
                            Signing up is quick and easy. Set up your company profile to access a pool of talented
                            developers. Once registered, you’ll be able to browse developers who match your project
                            needs and preferences.
                        </p>
                        <p>
                            Simply enter your name, email, and create a secure password to get started. After
                            registration, you’ll have access to tools for managing your projects, setting developer
                            availability, and tracking payments.
                        </p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="work-img d-none d-md-block">
                        <img src="{{ asset('assets/img/bg/bg-09.png') }}" class="img-fluid" alt="image">
                    </div>
                </div>
                <div class="work-wrap-img d-none d-md-block">
                    <img src="{{ asset('assets/img/bg/bg-12.png') }}" alt="img" class="img-fluid">
                </div>
            </div>

            <div class="row align-items-center justify-content-center">
                <div class="col-md-4  order-last order-md-first">
                    <div class="work-img d-none d-md-block">
                        <img src="{{ asset('assets/img/bg/bg-10.png') }}" class="img-fluid" alt="image">
                    </div>
                </div>
                <div class="col-md-8 d-flex justify-content-center">
                    <div class="work-wrap work-wrap-post">
                        <span>02</span>
                        <h1 class="display-6">Post a Job Listing</h1>
                        <p>
                            Post the specific job or project you need a developer for. Describe the role, required
                            skills, and any specific technologies the developer should be familiar with.
                        </p>
                        <p>
                            Choose the type of work (full-time, part-time, or contract) and any preferences
                            regarding availability or work style. Posting a clear job listing ensures you attract
                            the right talent quickly and efficiently.
                        </p>
                    </div>
                </div>
                <div class="work-wrap-img d-none d-md-block">
                    <img src="{{ asset('assets/img/bg/bg-12.png') }}" alt="img" class="img-fluid">
                </div>
            </div>

            <div class="row align-items-center">
                <div class="col-md-8">
                    <div class="work-wrap work-wrap-earning mb-0">
                        <span>03</span>
                        <h1 class="display-6">Start working with qualified match</h1>
                        <p>
                            We’ll provide you with a list of qualified candidates tailored to your needs. You can chat directly with any candidate to discuss terms and conditions. Once you’ve reached an agreement, simply send them the job offer. After they accept and begin working, you’ll receive detailed reports on their progress and tracked work hours.
                        </p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="work-img mb-0 d-none d-md-block">
                        <img src="{{ asset('assets/img/bg/bg-11.png') }}" class="img-fluid" alt="image">
                    </div>
                </div>
            </div>
            <!-- /How it works -->

        </div>
    </div>
</div>
<!-- /Page Wrapper -->
@endsection