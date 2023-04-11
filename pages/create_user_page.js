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

  criandoUsuarioComSucesso() {
    I.fillField(this.fields.registrarNome, name);
    I.fillField(this.fields.registrarEmail, email);
    I.fillField(this.fields.registrarCPF, randomcpf);
    I.fillField(this.fields.registrarTelefone, telefone);
  }
}