export interface contact{
  id?: number;
  nome: string;
  email: string;
  setor: string;
  telefone: number;
  cidade: string;
  created_at?: string;
  update_at?: string;
  comments?: [{text: string; username: string}]
}