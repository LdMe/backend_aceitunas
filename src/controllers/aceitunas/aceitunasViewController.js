import aceitunasController from "./aceitunasController.js";

 const getAll = async(req,res) =>{
    const [error, aceitunas] = await aceitunasController.getAll();
    res.render("aceitunas/list",{error,aceitunas});
}

const getById = (req,res) =>{
    const id = req.params.id;
    const [error,aceituna] = aceitunasController.getById(id);
    res.render("aceitunas/show",{error,aceituna});   
}

const createForm = (req,res)=>{
    const error = req.query.error;
    res.render("aceitunas/new",{error});
}

const create = (req,res) =>{
    const {tipo,peso} = req.body;
    const [error,aceituna] = aceitunasController.create(tipo,peso);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/aceitunas/new?error=${uriError}`)
    }
    res.redirect("/aceitunas");
}

const updateForm = (req,res) =>{
    const errorMessage = req.query.error;
    const id = req.params.id;
    const [error,aceituna] = aceitunasController.getById(id);
    if(error){
        res.redirect("/aceitunas");
    }
    res.render("aceitunas/edit",{error:errorMessage,aceituna});
}

const update = (req,res) =>{
    const id = req.params.id;
    const {tipo, peso} = req.body;
    const [error,aceituna] = aceitunasController.update(id,tipo,peso);
    if(error){
        const uriError = encodeURIComponent(error);
        return res.redirect(`/aceitunas/${id}/edit?error=${uriError}`)
    }
    res.redirect(`/aceitunas/${id}`);
};

const remove = (req,res)=>{
    const id = req.params.id;
    const [error,aceituna] = aceitunasController.remove(id);
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