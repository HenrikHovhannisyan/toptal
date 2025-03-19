@extends('layouts.app')
@section('title')
    - Resources
@endsection

@section('content')
    <!-- Breadcrumb -->
    <div class="breadcrumb-bar text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <h2 class="breadcrumb-title mb-2">Frequently Asked Questions</h2>
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
                <div class="row faq-content justify-content-center">
                    <!-- Faq List -->
                    <div class="col-md-10 mx-auto faq">
                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                            aria-controls="panelsStayOpen-collapseOne">
                                        How can I initiate a dispute regarding freelancer charges?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                    <div class="accordion-body">
                                        <p>
                                            Clients may file a dispute through the <a href="https://app.toptal.ai/disputes"
                                                                                      class="text-primary"
                                                                                      target="_blank">Toptal.ai</a>
                                            Dispute Center within 5 days of payment
                                            processing. To initiate a dispute, navigate to your Dashboard, select the
                                            "Disputes" section,
                                            and click "Start a New Dispute." Ensure that all relevant details are
                                            provided for a thorough
                                            review
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                        What options do I have if I miss the dispute filing deadline?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>
                                            Disputes must be submitted within 5 days after the freelancer's payment has
                                            been
                                            processed. If this deadline has passed, we recommend discussing the matter
                                            directly with
                                            the freelancer to seek a mutual resolution. If no agreement is reached, <a
                                                href="{{ route('resources') }}#ContactUs" class="text-primary" target="_blank">Toptal.ai</a>
                                            Support may
                                            assist with mediation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapse4" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                        Can I request a refund due to dissatisfaction with the quality of work?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapse4" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>
                                            <a href="https://app.toptal.ai/disputes" class="text-primary"
                                               target="_blank">Toptal.ai</a> disputes
                                            apply strictly to billed hours rather than work quality. If you are
                                            dissatisfied
                                            with the freelancer’s deliverables, we encourage direct negotiation with the
                                            freelancer to
                                            request a refund. If necessary, <a href="{{ route('resources') }}#ContactUs" class="text-primary" target="_blank">Toptal.ai</a>
                                            Support can facilitate mediation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapse5" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                        What steps should I take if my freelancer is unresponsive?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapse5" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>
                                            If a freelancer is unresponsive, first pause the contract via your Dashboard
                                            to prevent
                                            additional charges. Attempt to contact them through <a
                                                href="https://app.toptal.ai/messages" class="text-primary"
                                                target="_blank">Toptal.ai</a>’s messaging
                                            system. If the
                                            freelancer remains unavailable, please reach out to <a
                                                href="{{ route('resources') }}#ContactUs" class="text-primary" target="_blank">Toptal.ai</a>
                                            Support for
                                            further assistance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapse6" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                        Why has my account been placed on hold?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapse6" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>
                                            Account holds may occur due to policy violations, including but not limited
                                            to payments
                                            conducted outside the <a href="{{ route('home') }}" class="text-primary"
                                                                     target="_blank">Toptal.ai</a>
                                            system, repeated instances of contract non-performance,
                                            spam or harassment, and overdue balances. If your account has been placed on
                                            hold, please
                                            check for any outstanding issues or contact
                                            <a href="{{ route('resources') }}#ContactUs" class="text-primary" target="_blank">
                                                Toptal.ai
                                            </a>
                                            Support for clarification.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapse7" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                        How can I update or change my billing method?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapse7" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>
                                            To update your billing details, navigate to "Account" → "Billing." Note that
                                            once a billing
                                            method has been added, it cannot be modified - instead, the existing method
                                            must be
                                            removed, and a new one added
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapse8" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                        What payment methods are supported on <a href="{{ route('home') }}"
                                                                                 class="text-primary" target="_blank">Toptal.ai</a>?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapse8" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>
                                            <a href="{{ route('home') }}" class="text-primary"
                                               target="_blank">Toptal.ai</a> currently
                                            supports Visa, MasterCard, and verified PayPal accounts. Payments are
                                            processed automatically based on the selected billing cycle.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapse9" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                        How can I download an invoice for my transactions?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapse9" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        {{--<p>
                                            Invoices can be accessed and downloaded from the "Contracts" → "Payments"
                                            section or
                                            through the "Contracts" page. “Invoices can be accessed and downloaded from the "Contracts" page.
                                        </p>--}}
                                        <p>
                                            “Invoices can be accessed and downloaded from the "Contracts" page.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapse10" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                        How do I report a freelancer for misconduct or policy violations?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapse10" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>
                                            If a freelancer engages in conduct that violates <a
                                                href="{{ route('terms-condition') }}" class="text-primary"
                                                target="_blank">Toptal.ai</a>’s Terms of Service - such as
                                            fraudulent activity, poor-quality work, or failure to meet contractual
                                            obligations - clients may
                                            submit a report to <a href="{{ route('resources') }}#ContactUs" class="text-primary"
                                                                  target="_blank">Toptal.ai</a> Support along with
                                            supporting documentation for investigation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapse11" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseThree">
                                        What should I do if I notice an unfamiliar charge on my account?
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapse11" class="accordion-collapse collapse">
                                    <div class="accordion-body">
                                        <p>
                                            If you detect an unexpected charge, first review your "Contracts" →
                                            "Payments" section to verify transaction details and confirm whether the
                                            charge is associated with an active contract or invoice. If the charge
                                            appears incorrect or unauthorized, contact
                                            <a href="{{ route('resources') }}#ContactUs" class="text-primary" target="_blank">
                                                Toptal.ai
                                            </a> Support immediately for resolution.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- /Faq List -->
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-5">
                        <div class="text-center">
                            <h5 class="mb-2">Still have a question?</h5>
                            <p class="fs-14">If you can’t find the answer you're looking for in our FAQ, reach out to
                                us. We’ll get back to you shortly!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Page Wrapper -->

    <!-- Breadcrumb -->
    <div class="breadcrumb-bar text-center" id="ContactUs">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <h2 class="breadcrumb-title mb-2">Contact Us</h2>
                </div>
            </div>
        </div>
    </div>
    <!-- /Breadcrumb -->

    <!-- Page Wrapper -->
    <div class="page-wrapper">
        <div class="content">
            <div class="container">
                <div class="contacts">
                    <div class="contacts-overlay-img d-none d-lg-block">
                        <img src="{{ asset('assets/img/bg/bg-07.png') }}" alt="img" class="img-fluid">
                    </div>
                    <div class="contacts-overlay-sm d-none d-lg-block">
                        <img src="{{ asset('assets/img/bg/bg-08.png') }}" alt="img" class="img-fluid">
                    </div>
                    <!-- Get In Touch -->
                    <div class="row">
                        <div class="col-md-6 d-flex align-items-center">
                            <div class="contact-img flex-fill">
                                <img src="{{ asset('assets/img/services/service-76.jpg') }}" class="img-fluid"
                                     alt="img">
                            </div>
                        </div>
                        <div class="col-md-6 d-flex align-items-center justify-content-center">
                            <div class="contact-queries flex-fill">
                                <h2>Get in Touch</h2>
                                <p>
                                    Have a question? Send us a message, and our team will get back to you shortly!
                                </p>
                                <form id="contactForm">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <input class="form-control" type="text" id="name" name="name"
                                                       placeholder="Name" required>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <input class="form-control" type="email" id="email" name="email"
                                                       placeholder="Email Address" required>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="mb-3">
                                                <textarea class="form-control" rows="7" id="message" name="message"
                                                          placeholder="Message" required></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12 submit-btn">
                                            <button class="btn btn-dark" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <!-- /Get In Touch -->
                </div>

            </div>
        </div>
    </div>
    <!-- /Page Wrapper -->

    @include('vendor.modal.email-successfully')

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $('#contactForm').on('submit', function (e) {
            e.preventDefault();

            let formData = new FormData(this);

            $.ajax({
                type: 'POST',
                url: '{{ route("send.mail") }}',
                data: formData,
                processData: false,
                contentType: false,
                headers: {
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                },
                success: function (response) {
                    let modal = new bootstrap.Modal(document.getElementById('responseModal'));
                    $('#responseMessage').text(response.message);
                    modal.show();

                    if (response.status === 'success') {
                        $('#contactForm')[0].reset();
                    }
                },
                error: function (xhr) {
                    let modal = new bootstrap.Modal(document.getElementById('responseModal'));
                    $('#responseMessage').text('An error occurred. Please try again.');
                    modal.show();
                }
            });
        });
    </script>
@endsection
