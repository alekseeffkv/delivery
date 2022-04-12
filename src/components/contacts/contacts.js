import './contacts.scss';

import Button from '../button';

import contactItems from './contact-items';

import { ReactComponent as LocationIcon } from '../../icons/location.svg';
import { ReactComponent as MessageIcon } from '../../icons/message.svg';
import { ReactComponent as VkIcon } from '../../icons/vk.svg';
import { ReactComponent as YoutubeIcon } from '../../icons/youtube.svg';

const Contacts = () => {
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
              <div className="contacts__mail-address">{contactItems.email}</div>
            </div>
          </div>
        </div>

        <div className="contacts__reservation">
          <Button type="button" title="ПОСМОТРЕТЬ МЕНЮ" large />
          <div className="contacts__phone">
            <div className="contacts__number">{contactItems.phone}</div>
            <div className="contacts__description">Звоните или оставляйте заявку</div>
          </div>
        </div>

        <div className="contacts__social">
          <div className="contacts__social-title">Мы в соц сетях:</div>
          <div className="contacts__social-inner">
            <VkIcon />
            <YoutubeIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
