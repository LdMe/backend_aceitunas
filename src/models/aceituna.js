import connection from "../config/mysql.js";

async function getAllAceitunas() {
    try {
        const [rows, fields] = await connection.execute("SELECT * FROM aceituna");
        return rows;
    } catch (error) {
        console.log(error);
    }
}

async function getAceitunaById(id) {
    try {
        const [rows, fields] = await connection.execute("SELECT * FROM aceituna WHERE aceituna_id=?", [id]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
}

async function createAceituna(aceituna) {
    try {
        const [result] = await connection.execute("INSERT INTO aceituna (nombre,descripcion,imagen) VALUES (?,?,?)", [aceituna.nombre, aceituna.descripcion, aceituna.imagen]);
        return result.insertId;
    } catch (error) {
        console.log(error);
    }
}

async function updateAceitunaById(id, aceituna) {
    try {
        const [result] = await connection.execute("UPDATE aceituna SET nombre=?,descripcion=?,imagen=? WHERE id=?", [aceituna.nombre, aceituna.descripcion, aceituna.imagen, id]);
        return result.affectedRows;
    } catch (error) {
        console.log(error);
    }
}

async function deleteAceitunaById(id) {
    try {
        const [result] = await connection.execute("DELETE FROM aceituna WHERE id=?", [id]);
        return result.affectedRows;
    } catch (error) {
        console.log(error);
    }
}

export default {
    getAllAceitunas,
    getAceitunaById,
    createAceituna,
    updateAceitunaById,
    deleteAceitunaById
}

