<?php

if (isset($_REQUEST['nome']) and isset($_REQUEST['email'])) {
    
    $m = 'Olá! Gostaria de saber mais sobre os produtos Casa Mineira! Meu nome é *' . $_REQUEST['nome'] . '*,' . "\r\n";
    $m .= 'Email: *' . $_REQUEST['email'] . '*,';
    
    if (isset($_REQUEST['opcoes'])) {
        $m .= "\r\nMotivo: " . $_REQUEST['opcoes'];
    }
    
    if (isset($_REQUEST['telefone'])) {
        $m .= "\r\nTelefone: " . $_REQUEST['telefone'];
    }
    
    if (isset($_REQUEST['mensagem'])) {
        $m .= "\r\nMensagem: " . $_REQUEST['mensagem'];
    }
    $link = 'https://api.whatsapp.com/send?phone=+5519995377375&text=' . urlencode($m);
} else {
    $mensagem = 'Olá! Gostaria de saber mais sobre os produtos Casa Mineira';
    $link = 'https://api.whatsapp.com/send?phone=+5519995377375&text=' . urlencode($mensagem);
}
?>
<!DOCTYPE html>
<html>
    <head>
             
<meta charset="UTF-8">
        <title>Pão de Queijo Casa Mineira │ O verdadeiro sabe de Minas!</title>
        <link rel="icon" type="image/png" href="assets/img/favicon.webp">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <style>
            body{
                background: #ffffff;
            }
            .loader {
                border: 16px solid #ffffff;
                border-radius: 50%;
                border-top: 16px solid rgb(149 57 33);
                width: 200px;
                height: 200px;
                top: calc(50% - 100px - 16px);
                left: calc(50% - 100px - 16px);
                position: absolute;
                -webkit-animation: spin 2s linear infinite; /* Safari */
                animation: spin 2s linear infinite;
                background: #ffffff;
            }
            @-webkit-keyframes spin {
                0% { -webkit-transform: rotate(0deg); }
                100% { -webkit-transform: rotate(360deg); }
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    </head>
    <body>
        <div class="loader"></div>
        <script>
            setTimeout(function () {
                window.location = '<?= $link; ?>';
            }, 1000);
        </script>
    </body>
</html>

