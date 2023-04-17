//Queries de la tabla Inventarios
export const inventarioQ ={
    getInventarioTodo:'select * from Inventario',
    getInventarioById:'select * from inventario where id=@id',
    addInventario: 
    'insert into inventario (id_inventario,serie,tipo,marca,modelo) values (@id_inventario, @serie, @tipo, @marca, @modelo)',
    updateInventario:
    'update inventario set id_inventario=@id_inventario, serie=@serie, tipo=@tipo, marca=@marca, modelo=@modelo where id=@id;',
    deleteInventarioById:'delete from inventario where id=@id'
}