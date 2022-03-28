import React,{Component} from 'react';
import axios from 'axios';

const url ='https://pomato-api.herokuapp.com/filter';

class SortFilter extends Component {

    filtersort = (event) => {
        let mealId = this.props.mealId;
        let cuisineId=sessionStorage.getItem("cusID")
        let sort = event.target.value;
        let lhcost=1;
        let hlcost=-1;
        let sortUrl = ""
        // if(event.target.value === ""){
        //     sortUrl = `${url}/${mealId}`
        // }
        console.log("<<<<",cuisineId)
        if(sort === "1"){
            sortUrl = `${url}/${mealId}?cuisine_id=${cuisineId}&sort=${lhcost}`
        }
        else{
            sortUrl = `${url}/${mealId}?cuisine_id=${cuisineId}&sort=${hlcost}`
        }
        axios.get(sortUrl)
        .then((res) => {this.props.restPersort(res.data)})
    }


    render(){
        return(
            <>
                <center>Sort Filter</center>
                <div style={{marginLeft:'15%'}} onChange={this.filtersort}>
                    <label className="radio">
                        <input type="radio" value="1" name="cuisine"/>Low - High
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="cuisine"/>High - Low
                    </label>
                </div>
            </>
        )
    }
}


export default SortFilter