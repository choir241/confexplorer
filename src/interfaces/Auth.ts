export interface IUser {
  user_id: string;
  connected_users: [];
  first_name: string;
  last_name: string;
  id: string;
  email: string;
  linkedin_link: string;
  had_coffee_chat: boolean;
  bookmark_connection: boolean;
  curr_attending_conf: string;
  attended_conf: string[];
  labels: string[];
  notes: string[];
  curr_company: string;
  curr_role: string;
}

interface ILabel{
  id: string,
  label: string,
}

interface INote{
  id: string,
  note: string
}

export interface ISelectedConnection {
  id: string;
  had_coffee_chat: boolean;
  bookmark_connection: boolean;
  labels: ILabel[];
  notes: INote[];
}

