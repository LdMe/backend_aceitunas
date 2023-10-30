import aceitunasModel from "../../models/aceitunasModel.js";


const getAll = async() => {
    try{
        
        const aceitunas = await aceitunasModel.findAll();
        return [null, aceitunas];
    }catch(e){
        return [e.message,null];
    }
}

const getById = async (id) => {
    try {
        const aceituna = await aceitunasModel.findByPk(id);
        return [null, aceituna];
    }
    catch (e) {
        return [e.message, null];
    }
}
const create = async (tipo, peso) => {
    if (tipo === undefined || peso === undefined) {
        const error = "Tipo y peso deben ser definidos";
        return [error, null];
    }
    try {
        const aceituna = await aceitunasModel.create({tipo,peso});
        return [null, aceituna];
    }
    catch (e) {
        return [e.message, null];
    }
}

const update = async(id,tipo,peso) => {
    
    if(id == undefined){
        const error = "Tienes que especificar un ID válido";
        return [error,null];
    }
    if (tipo === undefined || peso === undefined) {
        const error = "Tipo y peso deben ser definidos";
        return [error, null];
    }
    try {
        console.log("id",id);
        await aceitunasModel.update({tipo,peso},id);
        const aceituna= await aceitunasModel.findByPk(id);
        return [null,aceituna];
    }
    catch (e) {
        console.log(e)
        return [e.message,null];
    }
};

const remove = async (id) => {
    try {
        const aceituna = await aceitunasModel.remove(id);
        if(!aceituna){
            const error = "No se ha encontrado ningún elemento con ese ID";
            return[error,null];
        }
        return [null,aceituna];
    }
    catch (e) {
        return [e.message,null];
    }
}

export {
    getAll,
    getById,
    create,
    update,
    remove
};



export default {
    getAll,
    getById,
    create,
    update,
    remove
};




