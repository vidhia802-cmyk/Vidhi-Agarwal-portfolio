
export interface Review {
  id: string;
  name: string;
  content: string;
  date: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}
