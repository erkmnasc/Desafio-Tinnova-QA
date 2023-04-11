/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type home_page = typeof import('./pages/home_page.js');
type create_user_page = typeof import('./pages/create_user_page.js');
type validacao_cadastro_com_sucesso_page = typeof import('./pages/validacao_cadastro_com_sucesso_page.js');
type validacao_editar_cadastro_com_sucesso_page = typeof import('./pages/validacao_editar_cadastro_com_sucesso_page.js');
type edit_user_page = typeof import('./pages/edit_user_page.js');
type delete_user_page = typeof import('./pages/delete_user_page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, home_page: home_page, create_user_page: create_user_page, validacao_cadastro_com_sucesso_page: validacao_cadastro_com_sucesso_page, validacao_editar_cadastro_com_sucesso_page: validacao_editar_cadastro_com_sucesso_page, edit_user_page: edit_user_page, delete_user_page: delete_user_page }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
