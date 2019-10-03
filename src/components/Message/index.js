import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

import './Message.scss';
import Item from 'antd/lib/list/Item';

const Message = ({ avatar, user, text, date, isMe, attachments  }) => (
    <div className={classNames('message', {'message--isme': isMe, 'message--friend': !isMe })}>
        <div className="message__avatar">
            <img src={avatar} alt={`Avatar ${user.username}`}  />
        </div>
        <div className="message__content">
            <div className="message__bubble">
                <p className="message__text">{text}</p>
            </div>
            <div className="message__attachments">
                <div className="message__attachments-item">
                    {attachments && attachments.map(item => (
                            <img src={item.url} alt={item.filename} />
                        ))
                    }
                </div>
            </div>
            <span className="message__date">
                {distanceInWordsToNow(date, { addSuffix: true })}
            </span>
        </div>
    </div>
);

Message.defaultProps = {
    user: {}
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    user: PropTypes.object,
    attachments: PropTypes.array,
};

export default Message;