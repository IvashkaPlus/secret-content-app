<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
    <title>Secret Content App</title>
</head>
<body>
    <div class="container-fluid text-center">
        <h1>Secret content app</h1>
        <h2>Зашифруйте информацию при помощи пароля</h2>
        <input hidden value="{{$link}}" id="link"/>
    </div>
    <div id="rootDecryptor">

    </div>
    <script src="{{mix('js/app.js')}}" ></script>
</body>
</html>