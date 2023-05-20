import PropTypes from 'prop-types';


import { Button, Container } from './Button.styled';

export const MoreButton = ({ onClick }) => {
  return (
    <Container>
      <Button type="button" onClick={onClick} >
        Load more
      </Button>
    </Container>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};