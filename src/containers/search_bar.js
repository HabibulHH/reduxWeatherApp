import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index'

class SearchBar extends Component{
constructor(props)
{
    super(props)
    this.state={
        term:''
    }
    this.onTermChange=this.onTermChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);

}


    onTermChange(event)
    {
        this.setState({term:event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(event.target)
        this.props.fetchWeather(this.state.term);
        this.setState({term:''})
        

    }
 
    render(){
        return(
            <form action="" onSubmit={this.handleSubmit} className="input-group">
            
            <input type="text" value={this.state.term} onChange={this.onTermChange}/>
                    <span className="input-group-btn">
                    <button type="submit"  className="btn btn-secondary">
                      Submit
                    </button>
            </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch)
{
  return bindActionCreators({fetchWeather:fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);