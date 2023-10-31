import connection from "../config/mysql.js";


const findAll= async ()=>{
    const queryString = "SELECT * FROM aceituna;";
    const [rows,fields] = await connection.query(queryString);
    console.log(rows);
    console.log(fields);
    return rows;
}

const findByPk = async (pk) =>{
    const queryString = "SELECT * FROM aceituna WHERE aceituna_id=?;";
    const [rows,fields] = await connection.query(queryString,[pk]);
    console.log(rows);
    console.log(fields);
    return rows[0];
}

const update = async(data,pk) =>{
    let queryString = "UPDATE aceituna SET tipo=?, peso=? WHERE aceituna_id=?;";
    const [rows,fields] = await connection.query(queryString,[data.tipo,data.peso,pk]);
    console.log("rows",rows);
    console.log("fields",fields);
    return rows;
}

const create = async(data) =>{
    let queryString = "INSERT INTO aceituna (tipo,peso) VALUES (?,?);";
    const [rows,fields] = await connection.query(queryString,[data.tipo,data.peso]);
    console.log("rows",rows);
    console.log("fields",fields);
    return rows;
}

const remove = async(pk) =>{
    let queryString = "DELETE FROM aceituna WHERE aceituna_id=?;";
    const [rows,fields] = await connection.query(queryString,[pk]);
    console.log("rows",rows);
    console.log("fields",fields);
    return rows;
}

export default {
    findAll,
    findByPk,
    update,
    create,
    remove
    
}