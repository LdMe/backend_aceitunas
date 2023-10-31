import { DataTypes } from "sequelize";

import sequelize from "../config/sequelize.js";

const usuariosModel = sequelize.define("usuario",
{
    usuario_id:{
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    email : {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false
    },
    rol: {
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue:"usuario"
    }
})

export default usuariosModel;