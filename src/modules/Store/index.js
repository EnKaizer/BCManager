import React, { Component } from 'react';
import Card from './components/Card';
import GridContainer from './components/GridContainer';
import DataFake from './fake';

class Store extends Component {
  componentWillMount = () => {
    console.log(DataFake, 'fake');
  };

  render() {
    return (
      <div>
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
      </div>
    );
  }
}
export default Store;
