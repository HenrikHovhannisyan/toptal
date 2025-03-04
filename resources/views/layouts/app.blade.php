<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Toptal') }} @yield('title') </title>
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="{{ asset('assets/img/favicon.svg') }}"/>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}"/>

    <!-- Animation CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/animate.css') }}"/>

    <!-- Tabler Icon CSS -->
    <link rel="stylesheet" href="{{ asset('assets/plugins/tabler-icons/tabler-icons.css') }}"/>

    <!-- Fontawesome Icon CSS -->
    <link rel="stylesheet" href="{{ asset('assets/plugins/fontawesome/css/fontawesome.min.css') }}"/>
    <link rel="stylesheet" href="{{ asset('assets/plugins/fontawesome/css/all.min.css') }}"/>

    <!-- select CSS -->
    <link rel="stylesheet" href="{{ asset('assets/plugins/select2/css/select2.min.css') }}"/>

    <!-- Owlcarousel CSS -->
    <link rel="stylesheet" href="{{ asset('assets/plugins/owlcarousel/owl.carousel.min.css') }}"/>

    <!-- Mobile CSS-->
    <link rel="stylesheet" href="{{ asset('assets/plugins/intltelinput/css/intlTelInput.css') }}"/>
    <link rel="stylesheet" href="{{ asset('assets/plugins/intltelinput/css/demo.css') }}"/>

    <!-- Feather CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/feather.css') }}"/>

    <!-- Style CSS -->
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}"/>
</head>
<body>

<main>
    @include('layouts.header')
    @yield('content')
    @include('layouts.footer')
    @include('vendor.back-to-top')
    @include('vendor.cursor')
</main>

<!-- Jquery JS -->
<script src="{{ asset('assets/js/jquery-3.7.1.min.js') }}"></script>

<!-- Bootstrap JS -->
<script src="{{ asset('assets/js/bootstrap.bundle.min.js') }}"></script>

<!-- Wow JS -->
<script src="{{ asset('assets/js/wow.min.js') }}"></script>

<!-- Owlcarousel Js -->
<script src="{{ asset('assets/plugins/owlcarousel/owl.carousel.min.js') }}"></script>

<!-- select JS -->
<script src="{{ asset('assets/plugins/select2/js/select2.min.js') }}"></script>

<!-- counterup JS -->
<script src="{{ asset('assets/js/cursor.js') }}"></script>

<!-- Mobile Input -->
<script src="{{ asset('assets/plugins/intltelinput/js/intlTelInput.js') }}"></script>
<script src="{{ asset('assets/plugins/ityped/index.js') }}"></script>

<!-- Validation-->
<script src="{{ asset('assets/js/validation.js') }}"></script>

<!-- Script JS -->
<script src="{{ asset('assets/js/script.js') }}"></script>

</body>
</html>
