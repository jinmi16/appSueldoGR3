export class Usuario {
  // modelo de datos usuario
  constructor(
    public id: string,
    public nikname: string,
    public password: string,
    public nombre: string,
    public apellido: string,
    public email: string,
    public telefono: string,
    public edad: string,
    public rol: string

  ) { }
}
