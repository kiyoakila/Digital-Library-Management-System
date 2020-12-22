module.exports = {
  env: 'production',

  database: {
    username: 'postgres',
    dialect: 'postgres',
    password: 'postgres',
    database: 'postgres',
    host: 'postgres',
    logging: console.log,
    operatorsAliases: false,
  },

  // database: {
  //   username: 'root',
  //   dialect: 'mysql',
  //   password: '',
  //   database: 'production',
  //   host:
  //     '<insert public ip here>',
  //   logging: console.log,
  //   operatorsAliases: false,
  // },

  email: {
    comment: 'See https://nodemailer.com',
    from: '<insert your email here>',
    host: null,
    auth: {
      user: null,
      pass: null,
    },
  },

  graphiql: false,

  clientUrl:
    '<http://localhost:8081>',

  defaultUser: null,

  uploadDir: '/storage',

  authJwtSecret: 'abc',
};
