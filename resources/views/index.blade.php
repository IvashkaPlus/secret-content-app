<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
        <title>Secret Content App</title>
    </head>
    <body>
        <div class="container-fluid text-center">
            <h1>Secret content app</h1>
            <p>Зашифруйте информацию при помощи пароля</p>
        </div>
        <div id="root"></div>
        <script src="{{mix('js/app.js')}}" ></script>
    </body>
</html>
