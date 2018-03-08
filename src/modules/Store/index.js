import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './components/Card';
import GridContainer from './components/GridContainer';
import { actionStore } from './actions/action';
import Container from '../../components/Container/Container';
import ContainerPromotion from './components/GridContainerPromotion';
import CardPromotion from './components/CardPromotion';
import UnlockAchievement from './components/UnlockAchievement';

class Store extends Component {
  componentWillMount = async () => {
    await this.props.actionStore();
  };

  render = () => {
    const { listStore } = this.props.StoreReducer;
    return (
      <Container link="Home" to="/">
        <UnlockAchievement />
        <ContainerPromotion>
          <CardPromotion
            points="5.000 Pt"
            subtitle="Escolha até 5 ingredientes e faça uma bela torta"
            title="Monte sua torta"
            img="http://www.hypebot.com/.a/6a00d83451b36c69e201bb090a7847970d-600wi"
          />
          <CardPromotion
            points="2.000 Pt"
            subtitle="Faça você mesmo o seu chaveiro"
            title="Chaveiro Personalizado"
            img="http://www.hypebot.com/.a/6a00d83451b36c69e201bb090a7847970d-600wi"
          />
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
