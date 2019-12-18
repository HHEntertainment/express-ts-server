import { Model, DataTypes, Sequelize } from 'sequelize';

export default (sequelize: Sequelize) => {
  class Market extends Model {
    public base!: string;
    public counter!: string;
    static associate;
  };
  
  Market.init({
    base: DataTypes.STRING,
    counter: DataTypes.STRING,
  }, {
    sequelize,
    tableName: "Market",
  });

  Market.associate = (models: [Model]) => {
    // setup table association
  };

  return Market;
}

