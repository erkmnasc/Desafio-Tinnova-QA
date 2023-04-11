var faker = require('faker');
var faker = require('faker-br');
var name = faker.name.findName();
var telefone = faker.phone.phoneNumber();
var email = faker.internet.email();
var randomcpf = faker.br.cpf();
const { I } = inject();

module.exports = {

  fields: {
    registrarNome: ({ css: 'input[name=name]'}),
    registrarEmail: ({ css: 'input[name=email]'}),
    registrarCPF: ({ css: 'input[name=cpf]'}),
    registrarTelefone: ({ css: 'input[name=phone]'}),
  },

  editandoInformacoesDoUsuario() {
    I.wait(2);
    I.clearField(this.fields.registrarNome);
    I.wait(1);
    I.fillField(this.fields.registrarNome, name);
    I.wait(1);
    I.clearField(this.fields.registrarEmail);
    I.wait(1);
    I.fillField(this.fields.registrarEmail, email);
    I.wait(1);
    I.clearField(this.fields.registrarCPF);
    I.wait(1);
    I.fillField(this.fields.registrarCPF, randomcpf);
    I.wait(1);
    I.clearField(this.fields.registrarTelefone);
    I.wait(1);
    I.fillField(this.fields.registrarTelefone, telefone);
    I.wait(2);
  },
}