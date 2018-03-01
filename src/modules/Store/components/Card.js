import React, {Component} from 'react'
import '../cardStyle.css'

class Card extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const {img, points, title, description, fontSize, width} = this.props
        return(
            <div className="container">
                <div className="card-profile">
                    <div className="card-profile_visual">
                        <img src={img} alt={!img && 'logo'}/>
                    </div>
                    <div className="card-profile_user-infos">
                        <button>
                            <span><i className="fa fa-cart-plus" style={{fontSize: fontSize || '36px', marginTop: '-4px'}}></i></span>
                            <span>{points || 0}&nbsp;Pt</span>
                        </button>
                    </div>
                    <div className="card-profile_user-stats">
                        <div style={{width: width || '100%'}}>
                            <span className="product">{title || <i>Sem título</i>}</span>
                        </div>
                        <div className="stats-holder">  
                            <div className="user-stats">
                                <strong>{description || <i>Sem Descrição</i>}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card