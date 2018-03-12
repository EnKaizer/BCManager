import React from 'react';
import PropTypes from 'prop-types';

const style = {
  number: {
    color: '#3e396b',
    fontWeight: 'bold',
    fontSize: 30,
  },
};

const TextNumber = props => {
  const { number, text } = props;
  return (
    <div>
      <span style={style.number}>{number}</span> {text}
    </div>
  );
};

TextNumber.propTypes = {};

export default TextNumber;
