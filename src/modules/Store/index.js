import React, {Component} from 'react'
import Card from './components/Card'
import GridContainer from './components/GridContainer'

class Store extends Component {
    render(){
        return(
            <div>
                <GridContainer columns={["18%", "18%", "18%", "18%"]}>
                    <Card img="https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/c5/d1/5c/c5d15cd4-607d-5eaa-0f3e-7834f8ea22b7/AppIcon-1x_U007emarketing-85-220-0-9.png/246x0w.jpg" points="1.000" title="Curso Alura" description="Parabéns por adquirir tantos pontos, com essa quantidade você já pode trocar por uma torta deliciosa."/>
                    <Card img="http://esthervelez.net/wp-content/uploads/2016/02/udemy-logo.jpg" points="1.000" title="Curso Udemy" description="Parabéns por adquirir tantos pontos, com essa quantidade você já pode trocar por uma torta deliciosa."/>
                    <Card img="https://www.shareicon.net/data/2015/12/28/694498_food_512x512.png" backgroundColor="#EECBAD" points="1.000" title="Pedaço de Torta" description="Parabéns por adquirir tantos pontos, com essa quantidade você já pode trocar por uma torta deliciosa."/>
                    <Card img="http://www.free-icons-download.net/images/keychain-icon-74033.png" backgroundColor="#E0EEEE" points="1.000" title="Chaveiro" description="Parabéns por adquirir tantos pontos, com essa quantidade você já pode trocar por uma torta deliciosa."/>
                </GridContainer>
            </div>  
        )
    }
}
export default Store 