import {pool} from "../config/dataBase/db";
// MOSTRAR TODOS LOS DATOS
export const findAllUser = async (req, res) =>{
    try {
        const [rows] = await pool.query("CALL SpfindAllUser();");
        res.json(rows);
    } catch (error) {
        console.error("ha ocurrido un  error"+error);
    }
};
// BUSCAR UN SOLO DATO
export const findUser = async (req, res)=>{
    const id = req.params.id ;
    try {
        const [rows] = await pool.query(`CALL SpfindUser(${id});`);
        res.json(rows);
    } catch (error) {
        console.error("ha ocurrido un  error"+error);
    }
}
// INSERTAR DATOS
export const insertUser = async (req, res)=>{
    const name = req.body.NAME;
    try {
        const result = await pool.query(`CALL SpinsertUser('${name}');`);
        res.json(result);
    } catch (error) {
        console.error("ha ocurrido un  error"+error);
    }
};
// ACTUALIZAR DATOS
export const updateUser = async(req, res)=>{
    const id = req.body.id
    const NAME = req.body.NAME;
    try {
        console.log("hola")
        const result = await pool.query(`CALL SpUpdateUser(${id},'${NAME}');`);
        if(result[0].affectedRows !=0)
        res.json(result);
        else
          res.json({"ERROR":"no actualizo"});
    } catch (error) {
        console.error(error);
    }
}
// ELIMINAR DATOS
export const deleteUser = async(req, res)=>{
    const id = req.params.id;
    try {
        const result = await pool.query(`CALL SpDeleteUser(${id})`);
        if(result[0].affectedRows==1)
        res.json(result);
        else
        res.json({"ERROR":"No lo borro"});
    } catch (error) {
        console.error(error);


        
    }
}