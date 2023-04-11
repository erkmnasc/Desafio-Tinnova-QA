const { I } = inject();

module.exports = {

  fields: {
    
  },
  
  button: {
    botaoEntrar: './/*[@id="root"]/div/div[2]',
    botaoAdicionar: './/*[@id="root"]/div/div[3]',
    botaoGuardar: './/*[@id="root"]/div/div[6]',
    botaoEditar: './/*[@id="root"]/div/div[2]/div[2]/div[3]/div[5]/div[2]',
    //botaoOk: './/html/body/div[2]/div/div[4]/div',
  },

  messages: {
  
  },

  entrarNaPagina(){
    I.click(this.button.botaoEntrar)
    I.wait(2);
  },
  adicionarNovoUser(){
    I.click(this.button.botaoAdicionar)
  },
  guardarUsuario(){
    I.click(this.button.botaoGuardar)
    I.wait(2);
  },
  botaoEditar(){
    I.click(this.button.botaoEditar)
    I.wait(2);
  },
  botaoOk(){
    I.click(this.button.botaoOk)
    I.wait(2);
  }
}
