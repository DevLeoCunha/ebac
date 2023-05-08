$(document).ready(function() {
    $('#carrosel-imagens').slick({
        autoplay: true,
    }); /*coloca as imagens para passar auto*/
    
    $('.menu-hamburguer').click(function() {
    $('nav').slideToggle();
    }) /*permite esconder e mostrar o menu*/

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true,
            },
            veiculoDeInteresse: {
                required: false,
            }
        },
        messages: {
            nome: 'Insira seu nome',
            email: 'Insira seu e-mail',
            telefone: 'Insira seu telefone'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos ou não preenchidos`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top}, 1000)
        })
    })