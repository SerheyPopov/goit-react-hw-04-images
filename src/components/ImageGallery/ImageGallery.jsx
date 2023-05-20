import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ value }) => {
  return (
    <List>
      {value &&
        value.map(value => (
          <ImageGalleryItem
            key={value.id}
            url={value.webformatURL}
            tag={value.tags}
            large={value.largeImageURL}
          />
        ))}
    </List>
  );
};

ImageGallery.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      url: PropTypes.string,
      tag: PropTypes.string,
      large: PropTypes.string,
    })
  ),
};
