<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conexión a PHP</title>
</head>
<body>
    <!-- procesar php -->
    <!-- 
        1. <form action="procesar.php" method="post">
        2. crear el archivo php
        
    -->
    <?php
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    echo "¡Gracias por tu solicitud a nuestra billetera virtual, ${nombre} ${apellido}! 
    <br> Nos pondremos en contacto via ${email}"?>

</body>
</html>