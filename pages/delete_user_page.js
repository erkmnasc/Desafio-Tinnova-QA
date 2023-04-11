const { I } = inject();

module.exports = {

  fields: {
    
  },
  
  button: {
    botaoDeletar: './/*[@id="root"]/div/div[2]/div[2]/div[2]/div[5]/div[3]',
    botaoConfirmarRemocao: './html/body/div[2]/div/div[3]/div[2]',

  },

  messages: {
  
  },

  botaoDeletar(){
    I.click(this.button.botaoDeletar)
    I.wait(3);
  },
  botaoConfirmarRemocao(){
    I.click(this.button.botaoConfirmarRemocao)
    I.wait(3);
  },
}
