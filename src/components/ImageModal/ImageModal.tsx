import Modal from "react-modal";
import css from "./ImageModal.module.css";
import { AiFillLike } from "react-icons/ai";
import {ImageInfo,CustomStyles,  Props} from "./ImageModal.types";

Modal.setAppElement("#root");

const customStyles:CustomStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


export default function ImageModal({ isOpen, onRequestClose, imageInfo }:Props) {
  const { imageUrl, altDescription, imageTags, authorName, likes } = imageInfo || {};

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style = {customStyles}
      overlayClassName="Overlay"
      className="Modal"
    >
      {imageUrl && (
        <div className={css.container}>
          <img src={imageUrl} alt={altDescription} />
          <ul className={css.list}>
            <li className={css.item}><AiFillLike /> <span className={css.text}>{likes}</span></li>
            <li className={css.item}>Tags:
              <ul className={css.tagList}>
                {imageTags && imageTags.map((tag, index) => (
                  <li className={css.tag} key={index}>#{tag.title}</li>
                ))}
              </ul>
            </li>
            <li className={css.item}>Author:<p className={css.text}> {authorName}</p></li>
          </ul>
        </div>
      )}
    </Modal>
  );
}
