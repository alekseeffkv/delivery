import './up-button.scss';

import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';

const UpButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset > 80;
      setVisible(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <CSSTransition in={visible} unmountOnExit timeout={500} classNames="up-button">
      <button type="button" className="up-button" onClick={scrollToTop}>
        <ArrowIcon />
      </button>
    </CSSTransition>
  );
};

export default UpButton;
