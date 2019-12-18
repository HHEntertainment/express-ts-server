import { Sequelize } from 'sequelize';
import Market from './market';

const sequelize = new Sequelize();

const models = {
  Market: Market(sequelize),
};

Object.values(models)
  .filter(model => typeof model.associate === "function")
  .forEach(model => model.associate(models));

export default {
  ...models,
  sequelize,
}