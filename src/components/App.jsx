import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';

import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { GetImage } from './Api/Api';
import { Loader } from './Loader/Loader';
import { MoreButton } from './Button/Button';
import { Container } from './App.styled';

export const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    try {
      if (!search) {
        return;
      }
      setLoading(true);
      GetImage(search.search, page)
        .then(response => {
          if (!response.hits.length) {
            toast.error(`${search.search} not found`);
          }
          setImages(prevState => [...prevState, ...response.hits]);
          setLoadMore(page < Math.ceil(response.totalHits / 12));
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  }, [page, search]);

  const handleChange = search => {
    if (search.search === '') {
      return toast.error('Please, use your keyboard');
    }
    setSearch(search);
    setImages([]);
    setPage(1);
    setLoadMore(false);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <Container >
      <Searchbar onSubmit={handleChange} />
      {loading && <Loader load={loading} />}
      {images && <ImageGallery value={images} />}
      {loadMore && <MoreButton onClick={handleLoadMore} />}
      <Toaster toastOptions={{ duration: 1500 }} position="top-right" />
    </Container>
  );
};
App.propTypes = {
  search: PropTypes.string,
  images: PropTypes.array,
  loading: PropTypes.bool,
  page: PropTypes.number,
  loadMore: PropTypes.bool,
};
