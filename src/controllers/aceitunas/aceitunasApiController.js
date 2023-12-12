import aceitunasController from "./aceitunasController.js";

 const getAll = async (req,res) =>{
    const errorMessage = req.query.error;
    const q = req.query.q;
    const [error, aceitunas] = await aceitunasController.getAll(q);
    if(error){
        res.status(500).send("Error getting aceitunas");
    }
    res.json(aceitunas);
}

const getById = async (req,res) =>{
    const id = req.params.id;
    const [error,aceituna] = await aceitunasController.getById(id);
    res.render("aceitunas/show",{error,aceituna,session:req.session});   
}

const createForm = (req,res)=>{
    const error = req.query.error;
    res.render("aceitunas/new",{error});
}

const create = async(req,res) =>{
    const {tipo,peso} = req.body;
    const [error,aceituna] = await aceitunasController.create(tipo,peso);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/aceitunas/new?error=${uriError}`)
    }
    res.redirect("/aceitunas");
}

const updateForm = async(req,res) =>{
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error,aceituna] = await aceitunasController.getById(id);
    if(error){
        res.redirect("/aceitunas");
    }
    res.render("aceitunas/edit",{error:errorMessage,aceituna,session:req.session});
}

const update = async(req,res) =>{
    const id = req.params.id;
    console.log("params id",id)
    const {tipo, peso} = req.body;
    const [error,aceituna] = await aceitunasController.update(id,tipo,peso);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/aceitunas/${id}/edit?error=${uriError}`)
    }
    res.redirect(`/aceitunas/${id}`);
};

const remove = async (req,res)=>{
    const id = req.params.id;
    const [error,aceituna] = await aceitunasController.remove(id);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/aceitunas?error=${uriError}`);
    }
    res.redirect("/aceitunas");
}

export default{
    getAll,
    getById,
    create,
    createForm,
    update,
    updateForm,
    remove
};