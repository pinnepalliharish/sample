import React,{Component} from 'react';
import axios from 'axios';

const url = 'https://pomato-api.herokuapp.com/filter'

class CusineFilter extends Component{

    filterCuisine=(event)=>{
        let cusineId=event.target.value;
        sessionStorage.setItem("cusID", cusineId);
        let mealId=this.props.mealId;
        let cusineurl=""
        if(cusineId===''){
            cusineurl=`${url}/${mealId}`
        }
        else{
            cusineurl=`${url}/${mealId}?cuisine_id=${cusineId}`
        }
        axios.get(cusineurl)
        .then((res)=>{this.props.restPerCusine(res.data)})
    }

    render(){
        return(
            <>
                <center>Cuisine Filter</center>
                    <div style={{marginLeft:'15%'}} onChange={this.filterCuisine}>
                        <label className="radio">
                            <input type="radio" value="" name="cuisine"/>All
                        </label>
                        <label className="radio">
                            <input type="radio" value="1" name="cuisine"/>North Indian
                        </label>
                        <label className="radio">
                            <input type="radio" value="2" name="cuisine"/>South Indian
                        </label>
                        <label className="radio">
                            <input type="radio" value="3" name="cuisine"/>Chinese
                        </label>
                        <label className="radio">
                            <input type="radio" value="4" name="cuisine"/>Fast Food
                        </label>
                        <label className="radio">
                            <input type="radio" value="5" name="cuisine"/>Street Food
                        </label>
                    </div>
            </>
        )
    }
}

export default CusineFilter