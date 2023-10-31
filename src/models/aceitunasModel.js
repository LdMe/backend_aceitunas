import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const aceitunasModel = sequelize.define("aceituna",
{
    aceituna_id:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    tipo : {
        type: DataTypes.STRING,
        allowNull:false,
    },
    peso: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull:false
    }
})

export default aceitunasModel;