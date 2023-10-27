const nombresAceitunas = [
    "Manzanilla",
    "Gordal",
    "Verdial",
    "Hojiblanca",
    "Lechín",
    "Picual",
    "Arbequina",
    "Cornicabra",
    "Empeltre",
    "Cacereña",
    "Changlot Real",
    "Chetoui",
    "Frantoio",
];
let aceitunas = [];
let maxId = 1;

for (let i = 0; i < 5; i++) {
    const newAceituna = {
        id: i + 1,
        tipo: nombresAceitunas[i],
        peso: Math.floor(Math.random() * 256),
    }
    aceitunas.push(newAceituna);
    maxId++;
}

const getAll = () => {
    // falta la parte de conseguir los datos de la base de datos
    return [null, aceitunas];
}

const getById = (id) => {
    try {
        const aceituna = aceitunas.find(element => element.id == id);
        return [null, aceituna];
    }
    catch (e) {
        return [e.message, null];
    }
}
const create = (tipo, peso) => {
    if (tipo === undefined || peso === undefined) {
        const error = "Tipo y peso deben ser definidos";
        return [error, null];
    }
    const aceituna = {
        id: maxId++,
        tipo: tipo,
        peso
    };
    aceitunas.push(aceituna);
    return [null, aceituna];
}

const update = (id,tipo,peso) => {
    
    if(id === undefined){
        const error = "Tienes que especificar un ID válido";
        return [error,null];
    }
    if (tipo === undefined || peso === undefined) {
        const error = "Tipo y peso deben ser definidos";
        return [error, null];
    }
    try {
        const aceituna = aceitunas.find(element => element.id == id);
        aceituna.tipo = tipo;
        aceituna.peso = peso;
        return [null,aceituna];
    }
    catch (e) {
        return [e.message,null];
    }
};

const remove = (id) => {
    try {
        const aceituna = aceitunas.find(element => element.id == id);
        aceitunas = aceitunas.filter(element => element.id != id);
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




