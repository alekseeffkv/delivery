import './round-button.scss';

import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';

const icons = {
  arrow: ArrowIcon,
};

const RoundButton = ({ icon, rotate }) => {
  const Icon = icons[icon];

  return (
    <button className="round-button">
      <Icon style={{ transform: `rotate(${rotate}deg)` }} />
    </button>
  );
};

export default RoundButton;
