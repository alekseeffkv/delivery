import './contacts.scss';

import { useHistory } from 'react-router-dom';
import { noSpace } from '../../utils';

import contactItems from './contact-items';

import Button from '../button';
import { ReactComponent as LocationIcon } from '../../icons/location.svg';
import { ReactComponent as MessageIcon } from '../../icons/message.svg';
import { ReactComponent as VkIcon } from '../../icons/vk.svg';
import { ReactComponent as YoutubeIcon } from '../../icons/youtube.svg';

const Contacts = () => {
  const history = useHistory();
  const goToMenu = () => {
    history.push('/categories');
  };

  return (
    <div className="contacts">
      <div className="contacts__body">
        <div className="contacts__title">КОНТАКТЫ</div>

        <div className="contacts__inner">
          <div className="contacts__address">
            <LocationIcon />
            <div className="contacts__address-inner">
              <div className="contacts__address-title">Наш адрес:</div>
              <div className="contacts__address-street">{contactItems.address}</div>
            </div>
          </div>

          <div className="contacts__mail">
            <MessageIcon />
            <div className="contacts__mail-inner">
              <div className="contacts__mail-title">Наша почта:</div>
              <a href={`mailto:${contactItems.email}`} className="contacts__mail-address">
                {contactItems.email}
              </a>
            </div>
          </div>
        </div>

        <div className="contacts__reservation">
          <Button type="button" title="ПОСМОТРЕТЬ МЕНЮ" large onClick={goToMenu} />
          <div className="contacts__phone">
            <a href={`tel:${noSpace(contactItems.phone)}`} className="contacts__number">
              {contactItems.phone}
            </a>
            <div className="contacts__description">Звоните или оставляйте заявку</div>
          </div>
        </div>

        <div className="contacts__social">
          <div className="contacts__social-title">Мы в соц сетях:</div>
          <div className="contacts__social-inner">
            <a href={contactItems.vk} target="blank">
              <VkIcon />
            </a>
            <a href={contactItems.youtube} target="blank">
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
