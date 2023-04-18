/*Base de datos Saga (Inventario)*/

CREATE TABLE [Activos] (
	id_activo int identity(1,1) NOT NULL,
	nombre varchar(100) NOT NULL,
	id_tipo_activo int NOT NULL,
	marca varchar(100) NOT NULL,
	modelo varchar(100) NOT NULL,
	caracteristicas text NOT NULL,
  CONSTRAINT [PK_ACTIVOS] PRIMARY KEY CLUSTERED
  (
  [iid_activod] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [TipoActivos] (
	id_tipoActivo int identity(1,1) NOT NULL,
	tipo varchar(100) NOT NULL,
  CONSTRAINT [PK_TIPOACTIVOS] PRIMARY KEY CLUSTERED
  (
  [id_tipoActivo] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [Sedes] (
		id_sede int identity(1,1) NOT NULL,
	nombre varchar(100) NOT NULL,
	direccion text NOT NULL,
  CONSTRAINT [PK_SEDES] PRIMARY KEY CLUSTERED
  (
  [id_sede] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [Proyectos] (
		id_proyecto int identity(1,1) NOT NULL,
	nombre varchar(100) NOT NULL,
	fecha_inicio date NOT NULL,
	fecha_final date NOT NULL,
	id_lugar int NOT NULL,
  CONSTRAINT [PK_PROYECTOS] PRIMARY KEY CLUSTERED
  (
  [id_proyecto] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [Estados] (
	id_estado int identity(1,1) NOT NULL,
	estado varchar(100) NOT NULL,
	id_municipio int NOT NULL,
  CONSTRAINT [PK_ESTADOS] PRIMARY KEY CLUSTERED
  (
  [id_estado] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [Municipios] (
	id_municipio int identity(1,1) NOT NULL,
	municipio varchar(100) NOT NULL,
  CONSTRAINT [PK_MUNICIPIOS] PRIMARY KEY CLUSTERED
  (
  [id_municipio] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [Proyecto_Lugares] (
	id_proyectoLugar int identity(1,1) NOT NULL,
	id_lugares int NOT NULL
)
GO
CREATE TABLE [Empleados] (
	id_empleado int identity(1,1) NOT NULL,
	num_empleado varchar(255) NOT NULL,
	nombre varchar(255) NOT NULL,
	apellido varchar(255) NOT NULL,
	fecha_nac date NOT NULL,
	telefono varchar(255) NOT NULL,
	estado int NOT NULL,
	id_area int NOT NULL,
  CONSTRAINT [PK_EMPLEADOS] PRIMARY KEY CLUSTERED
  (
  [id_empleado] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [Areas] (
	id_area int identity(1,1) NOT NULL,
	nombre varchar(255) NOT NULL,
	id_puesto int NOT NULL,
  CONSTRAINT [PK_AREAS] PRIMARY KEY CLUSTERED
  (
  [id_area] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [Puestos] (
	id_puesto int identity(1,1) NOT NULL,
	nombre varchar(255) NOT NULL,
  CONSTRAINT [PK_PUESTOS] PRIMARY KEY CLUSTERED
  (
  [id_puestod] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [Mantenimientos] (
	id_mantenimiento int identity(1,1) NOT NULL,
	id_inventario int NOT NULL,
	fecha_inicio date NOT NULL,
	fecha_fin date NOT NULL,
	responsable varchar(255) NOT NULL,
	id_empleado int NOT NULL,
	observaciones text NOT NULL,
  CONSTRAINT [PK_MANTENIMIENTOS] PRIMARY KEY CLUSTERED
  (
  [id_mantenimiento] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
CREATE TABLE [Inventario] (
	id_inventario int identity(1,1) NOT NULL,
	id_inventario varchar(255) NOT NULL,
	no_serie varchar(255) NOT NULL,
	id_tipo int NOT NULL,
	id_empleado int NOT NULL,
	estado int NOT NULL,
	id_proyecto int NOT NULL,
	id_sede int NOT NULL,
  CONSTRAINT [PK_INVENTARIO] PRIMARY KEY CLUSTERED
  (
  [id_inventario] ASC
  ) WITH (IGNORE_DUP_KEY = OFF)

)
GO
ALTER TABLE [Activos] WITH CHECK ADD CONSTRAINT [Activos_fk0] FOREIGN KEY ([id_tipo_activo]) REFERENCES [TipoActivos]([id_activo])
ON UPDATE CASCADE
GO
ALTER TABLE [Activos] CHECK CONSTRAINT [Activos_fk0]
GO




ALTER TABLE [Estados] WITH CHECK ADD CONSTRAINT [Estados_fk0] FOREIGN KEY ([id_municipio]) REFERENCES [Municipios]([id_municipio])
ON UPDATE CASCADE
GO
ALTER TABLE [Estados] CHECK CONSTRAINT [Estados_fk0]
GO


ALTER TABLE [Proyecto_Lugares] WITH CHECK ADD CONSTRAINT [Proyecto_Lugares_fk0] FOREIGN KEY ([id_proyecto]) REFERENCES [Proyectos]([id_proyecto])
ON UPDATE CASCADE
GO
ALTER TABLE [Proyecto_Lugares] CHECK CONSTRAINT [Proyecto_Lugares_fk0]
GO
ALTER TABLE [Proyecto_Lugares] WITH CHECK ADD CONSTRAINT [Proyecto_Lugares_fk1] FOREIGN KEY ([id_lugares]) REFERENCES [Estados]([id_estado])
ON UPDATE CASCADE
GO
ALTER TABLE [Proyecto_Lugares] CHECK CONSTRAINT [Proyecto_Lugares_fk1]
GO

ALTER TABLE [Empleados] WITH CHECK ADD CONSTRAINT [Empleados_fk0] FOREIGN KEY ([id_area]) REFERENCES [Areas]([id_area])
ON UPDATE CASCADE
GO
ALTER TABLE [Empleados] CHECK CONSTRAINT [Empleados_fk0]
GO

ALTER TABLE [Areas] WITH CHECK ADD CONSTRAINT [Areas_fk0] FOREIGN KEY ([id_puesto]) REFERENCES [Puestos]([id_puesto])
ON UPDATE CASCADE
GO
ALTER TABLE [Areas] CHECK CONSTRAINT [Areas_fk0]
GO


ALTER TABLE [Mantenimientos] WITH CHECK ADD CONSTRAINT [Mantenimientos_fk0] FOREIGN KEY ([id_empleado]) REFERENCES [Empleados]([id_empleado])
ON UPDATE CASCADE
GO
ALTER TABLE [Mantenimientos] CHECK CONSTRAINT [Mantenimientos_fk0]
GO

ALTER TABLE [Inventario] WITH CHECK ADD CONSTRAINT [Inventario_fk0] FOREIGN KEY ([id_tipo]) REFERENCES [TipoActivos]([id_tipoActivo])
ON UPDATE CASCADE
GO
ALTER TABLE [Inventario] CHECK CONSTRAINT [Inventario_fk0]
GO
ALTER TABLE [Inventario] WITH CHECK ADD CONSTRAINT [Inventario_fk1] FOREIGN KEY ([id_empleado]) REFERENCES [Empleados]([id_empleado])
ON UPDATE CASCADE
GO
ALTER TABLE [Inventario] CHECK CONSTRAINT [Inventario_fk1]
GO
ALTER TABLE [Inventario] WITH CHECK ADD CONSTRAINT [Inventario_fk2] FOREIGN KEY ([id_proyecto]) REFERENCES [Proyectos]([id_proyecto])
ON UPDATE CASCADE
GO
ALTER TABLE [Inventario] CHECK CONSTRAINT [Inventario_fk2]
GO
ALTER TABLE [Inventario] WITH CHECK ADD CONSTRAINT [Inventario_fk3] FOREIGN KEY ([id_sede]) REFERENCES [Sedes]([id_sede])
ON UPDATE CASCADE
GO
ALTER TABLE [Inventario] CHECK CONSTRAINT [Inventario_fk3]
GO
