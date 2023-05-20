import { useState } from 'react';
import PropTypes from 'prop-types';

import { Item, Image } from './ImageGalleryItem.styled';
import Modal from '../Modal/Modal';

export default function ImageGalleryItem({ url, tag, large }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Item onClick={toggleModal}>
      <Image src={url} alt={tag} />

      {showModal && <Modal onClose={toggleModal} src={large} alt={tag} />}
    </Item>
  );
}

ImageGalleryItem.propTypes = {
  showModal: PropTypes.bool,
};
