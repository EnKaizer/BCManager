import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './components/Card';
import GridContainer from './components/GridContainer';
import { actionStore } from './actions/action';
import Container from '../../components/Container/Container';
import ContainerPromotion from './components/GridContainerPromotion';
import './cardStyleVertical.css';

class Store extends Component {
  componentWillMount = async () => {
    await this.props.actionStore();
  };

  render = () => {
    const { listStore } = this.props.StoreReducer;
    return (
      <Container link="Home" to="/">
        <ContainerPromotion />
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
