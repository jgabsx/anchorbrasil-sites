<?php

function enviarEmail($emailRemetente, $emailDestinatario, $assunto, $mensagem) {
    $quebraLinha = "\n";
    $headers = "MIME-Version: 1.1" . $quebraLinha;
    $headers .= "Content-type: text/html; charset=utf-8" . $quebraLinha;
    $headers .= "Content-Transfer-Encoding: 8bit" . $quebraLinha;
    $headers .= "From: " . $emailRemetente . $quebraLinha;
    $headers .= "Reply-To: " . $emailRemetente . $quebraLinha;
    if (!mail($emailDestinatario, '=?utf-8?B?' . base64_encode($assunto) . '?=', $mensagem, $headers, "-r" . $emailRemetente)) { // Se for Postfix
        $headers .= "Return-Path: " . $emailRemetente . $quebraLinha; // Se "não for Postfix"
        if (mail($emailDestinatario, '=?utf-8?B?' . base64_encode($assunto) . '?=', $mensagem, $headers)) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

if (isset($_REQUEST['nome']) and isset($_REQUEST['email'])) {
    /* $h = $pdo->prepare('INSERT INTO `lead` (nome, email, telefone, mensagem, origem, ip, data, hora) VALUES (:nome, :email, :telefone, :mensagem, :origem, :ip, :data, :hora);');
      echo $h->execute(array(
      'nome' => (!empty($_REQUEST['nome']) ? $_REQUEST['nome'] : ''),
      'email' => (!empty($_REQUEST['email']) ? $_REQUEST['email'] : ''),
      'telefone' => (!empty($_REQUEST['telefone']) ? $_REQUEST['telefone'] : ''),
      'mensagem' => (!empty($_REQUEST['mensagem']) ? $_REQUEST['mensagem'] : ''),
      'origem' => (!empty($_REQUEST['origem']) ? $_REQUEST['origem'] : ''),
      'ip' => $_SERVER['REMOTE_ADDR'],
      'data' => date('Y-m-d'),
      'hora' => date('H:i:s')
      ));
     */


    $m = 'Olá, estava visitando o site. Meu nome é *' . $_REQUEST['nome'] . '*,' . "\r\n";
    $m .= 'Email: *' . $_REQUEST['email'] . '*,';
    if (isset($_REQUEST['mensagem'])) {
        $m .= "\r\nMensagem: " . $_REQUEST['mensagem'];
    }
    if (isset($_REQUEST['telefone'])) {
        $m .= "\r\nTelefone: " . $_REQUEST['telefone'];
    }
    #enviarEmail('contato@atelieodontologicomoreira.com.br', 'contato@atelieodontologicomoreira.com.br', 'Novo Lead Claudeir Lopes e Filhos: ' . $_REQUEST['nome'], $m);
    $link = 'https://api.whatsapp.com/send?phone=+5519991072019&text=' . urlencode($m);
} else {
    $mensagem = 'Olá, estava visitando o site.';
    $link = 'https://api.whatsapp.com/send?phone=+5519991072019&text=' . urlencode($mensagem);
    #header('Location: ' . $link);
    #exit();
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Obrigado</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Facebook Pixel Code -->
        <script>
            !function (f, b, e, v, n, t, s)
            {
                if (f.fbq)
                    return;
                n = f.fbq = function () {
                    n.callMethod ?
                            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                };
                if (!f._fbq)
                    f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
            }(window, document, 'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '531854217962647');
            fbq('track', 'PageView');
            fbq('track', 'Lead');
        </script>
        <!-- End Facebook Pixel Code -->
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-204490527-1">
        </script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());

            gtag('config', 'UA-204490527-1');
        </script>
        <style>
            body{
                background: #ffffff;
            }
            .loader {
                border: 16px solid #ffffff;
                border-radius: 50%;
                border-top: 16px solid #ab7338;
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
        <img src="assets/img/favicon.png" alt="logo" style="
             position: absolute;
             top: calc(50% - 100px);
             left: calc(50% - 100px);
             z-index: 1000;
             ">
        <div class="loader"></div>
        <script>
            setTimeout(function () {
                window.location = '<?= $link; ?>';
            }, 3000);
        </script>
    </body>
</html>


