//.Config totalmente de prevencion para evitar error a consultas hhtps estilo fetch, debido al paquete no utilizado
// whatwg-fetch, mientras funcionen las consultas hhtps no es necesario descomentar esta cfg

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles:['./jest.setup.js']
}