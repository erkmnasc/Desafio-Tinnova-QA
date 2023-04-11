const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  name: 'desafio_tinnova_qa',
  tests: './steps/*test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://tinnova-teste-qa.vercel.app/',
      browser: 'chrome',
      waitForTimeout: 5000,
      windowSize: "maximize",
      desiredCapabilities: {
        chromeOptions: {}
      }
    }
  },
  include: {
    I: './steps_file.js',
    home_page: "./pages/home_page.js",
    create_user_page: "./pages/create_user_page.js",
    validacao_cadastro_com_sucesso_page: "./pages/validacao_cadastro_com_sucesso_page.js",
    validacao_editar_cadastro_com_sucesso_page: "./pages/validacao_editar_cadastro_com_sucesso_page.js",
    edit_user_page: "./pages/edit_user_page.js",
    delete_user_page: "./pages/delete_user_page.js",
    cenarios_negativos_page: "./pages/cenarios_negativos_page.js"
  },

  bootstrap: null,
  teardown: null,
  mocha: {},
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    mocha: {
      reporterOptions: {}
    },
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: false
    },
    stepByStepReport: {
      "enabled": false,
      deleteSuccessful: false,
      screenshotsForAllureReport: true,
    },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    }
  }

}