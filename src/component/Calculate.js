import React,{Component} from 'react'

class Calculate extends Component{
  render(){
    const {sign, onButtonClick} = this.props;
    const body = sign.string.map((article) =>
      <button 
        type="button"
        className="btn btn-primary"
        key={article.id}
        onClick={()=>onButtonClick(article.id)}>
          {article.text}
      </button>
    );
    return( 
        <div>
          {body}
        </div>
    );
  }
}

export default Calculate