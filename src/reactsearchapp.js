import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './AutoCompleteSearch.css';

export default class ReactAutoCompleteSearch extends React.Component {
    constructor() {
        super();
        this.state ={
            recommendedlist:null,  
            inputText:"" 
        };
    }
    onTextInputChange = (e) => {
        const val = e.target.value;
        this.setState({inputText:val});
        if(val.length>=3){
            const apiUrl = 'https://base.amberstudent.com/api/v0/regions?sort_key=search_name&sort_order=desc&states=active&search_name='+val;
            fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => this.setState({search:data}));
        }
        this.setState({search:null});

    }
    renderRecommendation() {        
        const maxDisplay=5;
        const {search} = this.state;
        const {inputText} =this.state; 
        if(inputText.length>0 & inputText.length<3){
            let minReq=3-inputText.length;
             return (
                <div className="list-container"> 
                    <li className="search-item"> 
                        <div className="map-icon"></div>
                        <div className="list-search-item">
                            <span className="recommend-primary-name">Please type {minReq} more letter to get recommendation</span>
                        </div>
                    </li>)}
                 </div>
         )
        }
        if(search==null){
            return null;
        }
         return (
            <div className="list-container">
                {search.data.result.slice(0, maxDisplay).map((item)=> 
                <li className="search-item"> 
                    <div className="map-icon"><i className="fa fa-map-marker"></i></div>
                    <div className="list-search-item">
                        <span className="recommend-primary-name">{item.name}</span>
                        <span className="recommend-name"> {item.secondary_name}</span>
                    </div>
                </li>)}
             </div>
     )
    }
    render () {
        return  (
            <div>
                <div className="diplay-search">
                <input onChange={this.onTextInputChange} type="search" className="input-text" placeholder="Search by College or City"></input>
                <div className="search-button"><i className="fa fa-search"></i>Search</div>
                </div>
                {this.renderRecommendation()}
            </div>
        );
    }
}