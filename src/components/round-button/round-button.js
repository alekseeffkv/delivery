import './round-button.scss';

import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';

const icons = {
  arrow: ArrowIcon,
};

const RoundButton = ({ icon, rotate, onClick }) => {
  const Icon = icons[icon];

  return (
    <button type="button" className="round-button" onClick={onClick}>
      <Icon style={{ transform: `rotate(${rotate}deg)` }} />
    </button>
  );
};

export default RoundButton;
