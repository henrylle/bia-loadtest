const { faker } = require("@faker-js/faker");

function gerarTarefa(requestParams, ctx, ee, next) {
  ctx.vars["dia"] = faker.date.future();
  ctx.vars["importante"] = Math.random() < 0.5;

  ctx.vars["titulo"] = faker.lorem.sentence(2);
  return next();
}

module.exports = {
  gerarTarefa,
};
