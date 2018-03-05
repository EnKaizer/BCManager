import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './components/Card';
import GridContainer from './components/GridContainer';
import { actionStore } from './actions/action';
import Container from '../../components/Container/Container';
import './cardStyleVertical.css';

class Store extends Component {
  componentWillMount = async () => {
    await this.props.actionStore();
  };

  render = () => {
    const { listStore } = this.props.StoreReducer;
    return (
      <Container link="Home" to="/">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div
            style={{
              width: '80%',
              height: '120px',
              backgroundColor: '#fff',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                overflow: 'hidden',
                position: 'relative',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px',
              }}
            >
              <img
                style={{
                  maxWidth: '150px',
                  height: '170px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0PDw0NDQ0NDQ8NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhMSkrOi4uFx8/ODMsNyg5LisBCgoKDQ0NFQ8PFS0dFR0rKy0tLSstLS0tLSsrLS0tKy03LSstMCs3LS0rLSsrLSs3Ny0rLS0tLTc3Ky0rLSsrK//AABEIAKgBLAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIG/8QAGRABAQEAAwAAAAAAAAAAAAAAAAERMUHx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEG/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/AOxgDEMUYYEAIAAABAAAAAAoAFRQAAAVAAUEBQQAAACgAAoCAAYGACyIAAABQBFEBayK0ioAqQAhTCgAAAABQAVAKAAAIAAACioAAAAaAqQAAAAAAEABSAAKhAFQAAEABSgAAAFAANBAAUBAUACBF9AJnaGlKAQAAAFBAAAMAAgAAgAAqAotRQRUAAABUAAAAACgAABAAAABQQgIACgqABoAAAAAKgBoAAAAqABAAAAAFEAAAAAKBgCoAAAAAqAAAiBQVUi0AAAABAAU0pQAgAAAEAAAAAAgQAVAAoAuIoIIqIAKALBUAARURFCCqAAAAAAVFAAAABFQBRUUEFxAAAVKAAKCLENBFRUQVBVAIABAABABAAUVAFFEoLSIAAAAQAFBF1AFtQAAAAAAAEVQQBEAFAAUoAKgUAAQAAAooAAACoAAAAACoAaAAUAABAFFEADRFiIBooUCAKgKFAAAQIAoKmAsEIAt4QgEAACLASgABoCpAgAABAAFQAARFgIAAAAAoCCiqIAgAKAAAAKAiAAQACigqACAABQAAAAAUBX/2Q=="
              />
            </div>
          </div>

          <div
            style={{
              width: '80%',
              height: '120px',
              backgroundColor: '#fff',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div
              style={{
                overflow: 'hidden',
                position: 'relative',
                borderTopLeftRadius: '10px',
                borderBottomLeftRadius: '10px',
              }}
            >
              <img
                style={{
                  maxWidth: '150px',
                  height: '170px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
                src="http://tedium.imgix.net/2017/03/0322_purple.jpg"
              />
            </div>
          </div>
        </div>

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
