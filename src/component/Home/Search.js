import React,{Component} from "react";
import {withRouter} from 'react-router-dom';
import './Search.css'

const location_url="https://pomato-api.herokuapp.com/location";
const res_url='https://pomato-api.herokuapp.com/restaurant_data?state_id='

class Search extends Component{

    constructor(props){
        super(props);
        this.state={
            location:'',
            res_data:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    handleCity=(event)=>{
        let stateId=event.target.value;
        fetch(`${res_url}${stateId}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({res_data:data})
        })

    }

    handleRest = (event) => {
        let restId = event.target.value;
        this.props.history.push(`/details?restId=${restId}`)
    }

    renderRes = (data) => {
        if(data){
            return data.map((item) => {
                return(
                <option value={item.restaurant_id} key={item.restaurant_id}>{item.restaurant_name}</option>
                )
            })
        }
    }

    

    render(){
        return(
            <>
                {/* <script>                 
                    function CloseDiv(){
                        document.getElementById('coupon').style.visibility="hidden"
                    }
                </script>

                <div id="coupon">
                    <button onClick="CloseDiv()" style={{backgroundColor: 'black',color: 'aliceblue',position: 'absolute', zIndex:1}}>&times;</button>
                    <div id="coupon_image">
                        <img src="https://i.ibb.co/sFrCNyv/coupen.jpg" id="cpn_img" alt="cpn_img"/>
                    </div>
                </div> */}

                <div className="search_box" >
                    <div className="symbol">
                        <h1>P!</h1>
                    </div>
                    <div className="heading">
                        <b>Discover the best restaurants,cafe's and bars. </b> 
                    </div>
                    <div className="dropdown">
                        <select  id="city" onChange={this.handleCity}>
                            <option>--SELECT CITY--</option>
                            {this.renderCity(this.state.location)}
                        </select> 
                        <select  id="restaurant" style={{width: '300px'}}  onChange={this.handleRest}>
                            <option>----------SELECT RESTAURANT----------</option>
                            {this.renderRes(this.state.res_data)}
                        </select>
                    </div>
                </div>
            </>
               


        )
    }

    //calling apis on page load
    componentDidMount(){
        fetch(location_url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({location:data})
        })

    }


    

}

export default withRouter(Search)