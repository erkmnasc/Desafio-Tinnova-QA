var validacao = require('assert')
var faker = require('faker');
var faker = require('faker-br');
var name = faker.name.findName();
var email = faker.internet.email();
var randomcpf = faker.br.cpf();


const { I, home_page, create_user_page, validacao_cadastro_com_sucesso_page, delete_user_page } = inject()

Feature('Delete User');

Scenario('test something', async () => {

    //Home
    I.amOnPage('/');

    //Entrar
    home_page.entrarNaPagina();

    //Criando Novo Usuário
    home_page.adicionarNovoUser();
    var title = await I.grabTitle();
    validacao.equal(title, 'React App');
    create_user_page.criandoUsuarioComSucesso();
    home_page.guardarUsuario();

    //Validação do Cadastro
    validacao_cadastro_com_sucesso_page.entrarNaPagina();
    validacao_cadastro_com_sucesso_page.voltarPagina();

    //Deletar Usuário com sucesso
    delete_user_page.botaoDeletar();
    delete_user_page.botaoConfirmarRemocao();

});
