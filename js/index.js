$(document).ready(
    function(){
        alert('Pagina Inicial');
    }
);
$("#bt_inicio").click(
    function(){
        alert('Voce clicou no inicio!');
    }
);
$("#bt_sobre").click(
    function(){
        $("#corpo").load("Pages/sobre.html");
    }
);
$("#bt_cadastro").click(
    function(){
        $("#corpo").load("Pages/cadastro.html");
    }
);