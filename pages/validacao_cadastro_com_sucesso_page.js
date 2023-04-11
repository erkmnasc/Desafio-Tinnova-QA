const { I } = inject();

module.exports = {

  button: {
    botaoConsulta: './/*[@id="root"]/div/div[2]/div[2]/div[4]/div[5]/div[1]',
    botaoVoltar: './/*[@id="root"]/div/div[6]',
  },

  entrarNaPagina(){
    I.click(this.button.botaoConsulta)  
    I.wait(2);
  },
  voltarPagina(){
    I.click(this.button.botaoVoltar)  
    I.wait(2);
  },
}
