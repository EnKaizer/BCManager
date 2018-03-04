import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import HTML5Backend from 'react-dnd-html5-backend';
import MouseBackEnd from 'react-dnd-mouse-backend';
import { Link } from 'react-router-dom';

import Card from './components/Card';
import GridContainer from './components/GridContainer';
import DataFake from './fake';
import Container from '../../components/Container/Container';

class Store extends Component {
  render = () => {
    return (
      <Container link="Home" to="/">
        <GridContainer columns={['18%', '18%', '18%', '18%']}>
          {DataFake &&
            DataFake.map(data => (
              <Card
                img={data.img}
                points={data.points}
                title={data.title}
                description={data.description}
                backgroundColor={data.backgroundColor}
              />
            ))}
        </GridContainer>
      </Container>
    );
  };
}
export default Store;
