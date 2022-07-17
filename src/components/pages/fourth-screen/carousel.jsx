import { Box } from '@mui/system';
import { useState } from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Container } from '../../container';

const PAGE_WIDTH = 1312;

const styles = {
  window: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  pagesContainer: {
    display: 'flex',
    height: '100%',
    transitionProperty: 'transform',
    transitionDuration: '500ms',
    transitionTimingFunction: 'ease',
  },
};

const Carousel = ({ children }) => {
  const [offset, setOffset] = useState('0');

  const handleBackClick = () => {
    setOffset((currentOffset) => Math.min(currentOffset + PAGE_WIDTH, 0));
  };

  const handleForwardClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;

      const maxOffset = -(PAGE_WIDTH * (children.length - 1));

      return Math.max(newOffset, maxOffset);
    });
  };
  return (
    <Container flexStyles={{ display: 'flex', alignItems: 'center' }}>
      <ArrowBackIosIcon onClick={handleBackClick} />
      <Box sx={{ ...styles.window }}>
        <Box sx={{ ...styles.pagesContainer, transform: `translateX(${offset}px)` }}>{children}</Box>;
      </Box>
      <ArrowForwardIosIcon onClick={handleForwardClick} />
    </Container>
  );
};

export { Carousel };
