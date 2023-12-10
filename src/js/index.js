const verificacao = () => {
    const inputVerificado = document.querySelector(".item")
if (inputVerificado.value === 0){
  inputVerificado.classList.add('campo-obrigatotio')

}else {
    inputVerificado.classList.add('campo-preechido')
}
}

verificacao()