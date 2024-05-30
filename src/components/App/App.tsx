import { useState, useEffect } from 'react';
import { fetchImages } from '../../image-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import {Tag, Image, SelectedImage} from "./App.types";
import './App.css';

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<SelectedImage>(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getImages = async () => {
      try {
        setError(false);
        setLoader(true);
        const newImages = await fetchImages(page, query);
        setImages((prevImages) => [...prevImages, ...newImages]);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getImages();
  }, [query, page]);

  const handleSubmit = (query: string) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageUrl: string, altDescription: string, imageTags: { title: string; type: string }[], authorName: string, likes: number) => {
  setSelectedImage({ imageUrl, altDescription, imageTags, authorName, likes });
  setIsOpen(true);
};


  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal} />
      )}
      {error && <ErrorMessage />}
      {loader && <Loader />}
      {images.length > 0 && !loader && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageInfo={selectedImage}
      />
    </>
  );
}
