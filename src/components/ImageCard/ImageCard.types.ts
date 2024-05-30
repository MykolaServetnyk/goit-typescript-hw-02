export type Urls = {
  small: string;
  [key: string]: string; 
}

export type Props = {
  alt_description: string;
  urls: Urls;
}
