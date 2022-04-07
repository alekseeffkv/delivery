import './round-button.scss';

import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../icons/minus.svg';

const icons = {
  arrow: ArrowIcon,
  plus: PlusIcon,
  minus: MinusIcon,
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
