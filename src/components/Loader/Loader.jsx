import { RotatingLines } from 'react-loader-spinner';
import PropTypes from 'prop-types';


import { Container } from './Loader.styled';

export const Loader = load => {
  return (
    <Container>
      <RotatingLines
        strokeColor="black"
        strokeWidth="3"
        animationDuration="1.2"
        width="100"
        visible={load.load}
      />
    </Container>
  );
};

Loader.propTypes = {
  load: PropTypes.bool,
};