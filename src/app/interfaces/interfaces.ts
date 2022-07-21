export interface TLogin {
  usuario: string;
  passwd:  string;
}

export interface TUsuario {
  usuario: string;
  password:  string;
  nombre:  string;
  nivel:   string;
}

export interface TUsuario2 {
  id:       number;
  usuario:  string;
  password: string;
  nombre:   string;
  nivel:    number;
}