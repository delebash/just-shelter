/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('purchase_order_status', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'purchase_order_status'
  });
};
