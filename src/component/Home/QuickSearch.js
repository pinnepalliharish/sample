import React,{Component} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';

const url = "https://pomato-api.herokuapp.com/mealtypes"

class QuickSearch extends Component {
    constructor(){
        super()

        this.state={
            mealType:''
        }
    }

    render(){
        return(
            <>
                <div id="Container_id" class="container" >
                    <div class="quick_search">
                        <div class="title">
                            <h2> <b>Quick Search</b> </h2>
                            <h4 style={{color: 'gray', fontSize: '20px'}}>Discover restaurants by type of meal</h4>
                        </div>
                    </div>
                    <QuickDisplay mealData={this.state.mealType}/>
                </div>
            </>
        )
    }

    //api on pageLoad 
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickSearch