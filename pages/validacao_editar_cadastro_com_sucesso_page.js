const { I } = inject();

module.exports = {

  button: {
    botaoAtualizar: './/*[@id="root"]/div/div[6]',
  },

  atualizarCadastro(){
    I.click(this.button.botaoAtualizar)  
    I.wait(2);
  }
}
