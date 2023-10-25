const nombresAceitunas =[
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
let aceitunas =[];
let maxId = 1;

for(let i = 0; i < 5;i++){
    const newAceituna = {
        id:i+1,
        tipo:nombresAceitunas[i],
        peso: Math.floor(Math.random()*256),
    }
    aceitunas.push(newAceituna);
    maxId++;
}

const getAll =(req,res) =>{
    // falta la parte de conseguir los datos de la base de datos
    res.json(aceitunas);
}

const getById = (req,res) =>{
    const id = req.params.id;
    console.log("id",id);
    try{
        const aceituna = aceitunas.find(element => element.id==id);
        console.log("aceituna",aceituna)
        res.json(aceituna);
    }
    catch(e){
        res.status(400).send("Algo ha fallado, asegúrate de que el id existe.");
    }
}
const create = (req,res) =>{
    const {tipo,peso} = req.body;
    if(tipo === undefined || peso === undefined){
        return res.status(400).send("falta el 'tipo' y/o el 'peso'");
    }
    const aceituna = {
        id: maxId++,
        tipo: tipo,
        peso
    };
    aceitunas.push(aceituna);
    res.json(aceituna);
}

const update = (req,res) =>{
    const id = req.params.id;
    const {tipo, peso} = req.body;
    if(tipo === undefined || peso === undefined){
        return res.status(400).send("falta el 'tipo' y/o el 'peso'");
    }
    try{
        const aceituna = aceitunas.find(element=> element.id==id);
        aceituna.tipo = tipo;
        aceituna.peso = peso;
        res.json(aceituna);
    }
    catch(e){
        res.status(400).send("Algo ha fallado, asegúrate de que el id existe, y de que envías los datos de 'tipo' y 'peso'.");
    }
};

const remove = (req,res)=>{
    const id = req.params.id;
    console.log(id);
    try{
       const aceituna = aceitunas.find(element=> element.id==id);
       aceitunas = aceitunas.filter(element=> element.id!=id);
       console.log(aceitunas);
       res.json(aceituna);
    }
    catch(e){
        res.status(400).send("Algo ha fallado, asegúrate de que el id existe.");
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




