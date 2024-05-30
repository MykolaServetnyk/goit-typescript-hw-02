export type Urls = {
  small: string;
  regular: string;
  [key: string]: string;
};

export type User = {
  name: string;
  [key: string]: any;
};

export type Item = {
  id: string;
  alt_description: string;
  urls: Urls;
  likes: number;
  user: User;
  tags: Tag[];
  
};

export type Tag = {
  title: string;
  type: string;
};

export type Props = {
  items: Item[];
  onImageClick: (url: string, alt: string, tags: Tag[], userName: string, likes: number) => void;
};