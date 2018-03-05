import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './components/Card';
import GridContainer from './components/GridContainer';
import { actionStore } from './actions/action';
import Container from '../../components/Container/Container';
import ContainerPromotion from './components/GridContainerPromotion';
import CardPromotion from './components/CardPromotion';
import './cardStyleVertical.css';

class Store extends Component {
  componentWillMount = async () => {
    await this.props.actionStore();
  };

  render = () => {
    const { listStore } = this.props.StoreReducer;
    return (
      <Container link="Home" to="/">
        <ContainerPromotion>
          <CardPromotion img="http://tedium.imgix.net/2017/03/0322_purple.jpg" />
          <CardPromotion img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX//wCKxvRFAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC" />
        </ContainerPromotion>
        <GridContainer columns={['18%', '18%', '18%', '18%']}>
          {listStore &&
            listStore.map(data => (
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

const mapStateToProps = ({ StoreReducer }) => {
  return { StoreReducer };
};

export default connect(mapStateToProps, { actionStore })(Store);
