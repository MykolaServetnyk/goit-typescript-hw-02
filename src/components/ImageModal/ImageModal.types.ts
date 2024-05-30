type ImageInfo = {
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

export type CustomStyles = {
  content: {
    top: string;
    left: string;
    right: string;
    bottom: string;
    marginRight: string;
    transform: string;
  };
};