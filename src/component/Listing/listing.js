import React,{Component} from "react";
import axios from 'axios';
import './Listing.css';
import ListingDisplay from './listingDisplay'
import CusineFilter from '../filters/CusineFilter';
import CostFilter from '../filters/CostFilter';
import SortFilter from '../filters/SortFilter'

let resturl='https://pomato-api.herokuapp.com/restaurant_data?meal_id='

class Listing extends Component{
    constructor(props){
        super(props);

        this.state={
            restaurantList:''
        }
    }

    setDataFilter=(data)=>{
        this.setState({restaurantList:data})
    }

    render(){
        return(
            <>
                <div className="row">
                    <div id="mainListing">
                        <div id="filter">
                            <center>
                                <h3>Filter</h3>
                            </center>
                            <hr/>
                            <CusineFilter mealId={this.props.match.params.mealId}
                            restPerCusine={(data)=>{this.setDataFilter(data)}}/>
                            <hr/>
                            <CostFilter mealId={this.props.match.params.mealId}
                            restPercost={(data)=>{this.setDataFilter(data)}}/>
                            <hr/>
                            <SortFilter mealId={this.props.match.params.mealId}
                            restPersort={(data)=>{this.setDataFilter(data)}}/>
                        </div>
                    </div>
                    <ListingDisplay listData={this.state.restaurantList}/>
                </div>
            </>
        )
    }
    componentDidMount(){
        let mealid = this.props.match.params.mealId;
        axios.get(`${resturl}${mealid}`)
        .then((res)=>{this.setState({restaurantList:res.data})})
    }
    
}


export default Listing