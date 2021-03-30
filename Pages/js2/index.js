function submit_form_cadastro() {
    if (document.form_cadastro.input_email.value == 'usuario@gmail.com') {
        if (document.form_cadastro.input_senha.value == '123456') {
            alert('Cadastro realizado com Sucesso!');
        } else {
            alert('Senha Muito Fraca!')
        }
    } else {
        alert('Este diretório não existe!')
    }
}