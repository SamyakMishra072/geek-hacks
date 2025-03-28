export interface TeamMember {
  name: string;
  role: string;
  image: string;
  github?: string;  // Make it optional using `?`
  linkedin?: string;
  email: string;
}


export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}