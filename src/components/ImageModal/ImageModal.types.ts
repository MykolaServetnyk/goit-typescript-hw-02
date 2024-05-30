export type ImageInfo = {
  imageUrl: string;
  altDescription: string;
  imageTags: { title: string }[];
  authorName: string;
  likes: number;
};

export type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
  imageInfo?: ImageInfo | null;
};