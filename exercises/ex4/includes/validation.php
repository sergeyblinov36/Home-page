<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <section>
    <?php 
        $mail=$_GET["mail"];
        $pass=$_GET["pass"];
        if($mail=="example@mail.com" && $pass=="123456")
            echo "<h1>Вроде работает " . $mail . "</h1>";
        else
            echo "<h1>the email '' " . $mail . " '' or the password is incorrect <br> try entering ''example@mail.com'' and ''123456''<br>   because f**k security<h1>"
  ?>     
  </section> 
</body>
</html>