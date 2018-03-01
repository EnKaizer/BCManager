import React, {Component} from 'react'
import Card from './components/Card'
import GridContainer from './components/GridContainer'

class Store extends Component {
    render(){
        return(
            <div>
                <GridContainer>
                    <Card img="https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/c5/d1/5c/c5d15cd4-607d-5eaa-0f3e-7834f8ea22b7/AppIcon-1x_U007emarketing-85-220-0-9.png/246x0w.jpg" points="1.000" title="Curso Alura" description="Parabéns"/>
                    <Card img="https://www.mooclab.club/attachments/udemy-logo-png.250/" points="1.000" title="Curso Udemy" description="Parabéns"/>
                    <Card />
                    <Card />
                    <Card />
                </GridContainer>
            </div>  
        )
    }
}
export default Store 