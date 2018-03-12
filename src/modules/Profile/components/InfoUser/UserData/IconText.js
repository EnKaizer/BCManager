import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const style = {
  text: {
    margin: '0 5px',
  },
};

const IconText = props => {
  const { icon, text } = props;
  return (
    <div>
      <FontAwesomeIcon icon={icon} />
      <span style={style.text}>{text}</span>
    </div>
  );
};

IconText.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  icon: PropTypes.string.isRequired,
};

export default IconText;
