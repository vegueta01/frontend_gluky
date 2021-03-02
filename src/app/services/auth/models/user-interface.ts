export interface UserInterface {
    id: string;
    name: string;
    email: string;
    photoUrl: string;
    firstName: string;
    lastName: string;
    response: Response;
    authToken: string;
    idToken: string;
    provider: string;
  }
export interface Response {
    wR: string;
    sd: string;
    bT: string;
    dR: string;
    fI: string;
    kt: string;
  }
