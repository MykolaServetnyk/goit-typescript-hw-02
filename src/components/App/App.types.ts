export type Tag = {
  source?: Record<string, any>; 
  title: string;
  type: string;
};


export type Image = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
    [key: string]: string;
  };
  likes: number;
  user: {
    name: string;
    [key: string]: any;
  };
  tags: Tag[]; 
};


export type SelectedImage = {
  imageUrl: string;
  altDescription: string;
  imageTags: Tag[];
  authorName: string;
  likes: number;
} | null;