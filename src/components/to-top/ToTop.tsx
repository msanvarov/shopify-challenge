import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import './ToTop.scss';

type ToTopProps = {
  scrollStepInPx: number;
  delayInMs: number;
};

const ToTop: React.FC<ToTopProps> = ({ scrollStepInPx, delayInMs }) => {
  const [thePosition, setThePosition] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    });
  }, []);

  const onScrollStep = () => {
    if (window.pageYOffset === 0) {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    }
    window.scroll(0, window.pageYOffset - scrollStepInPx);
  };

  const scrollToTop = () => {
    timeoutRef.current = setInterval(onScrollStep, delayInMs);
  };

  const renderGoTopIcon = () => {
    return (
      <div className={`go-top ${thePosition ? 'active' : ''}`} onClick={scrollToTop}>
        <i>
          <FontAwesomeIcon icon={faCaretUp} />
        </i>
        <i>
          <FontAwesomeIcon icon={faAngleUp} />
        </i>
      </div>
    );
  };

  return <React.Fragment>{renderGoTopIcon()}</React.Fragment>;
};

export default ToTop;
