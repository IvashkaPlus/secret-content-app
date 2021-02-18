<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
        <title>Secret Content App</title>
    </head>
    <body>
        <div class="container-fluid">
            <h1>Secret content app</h1>
        </div>
        <div id="root"></div>
        <script src="{{mix('js/app.js')}}" ></script>
    </body>
</html>
