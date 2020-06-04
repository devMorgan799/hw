import React, { Component } from 'react';
import axios from "axios";
import Hobbies from "./components/Hobbies"


console.log("this is my key", process.env.REACT_APP_PRIVATEKEY);

class App extends Component {
constructor (props) {
    super(props);

    this.state= {
        info:[],
        apiNames:""
    }
    //State is like a mini database with all of the information that was requested
    //all api info is not in the state. its now add to the info array

}
componentDidMount() {
    axios.get("http://myapi-profstream.herokuapp.com/api/413ca6/persons")


    // .post is to add
    // axios.post("http://myapi-profstream.herokuapp.com/api/413ca6/persons", {"firstname": "brian",
    // "lastname": "H",
    // "email": "kholmes@yahoo.com",
    // "username": "kholmes"})


    .then(response =>{ 
        //all info from .get goes into persondata
        const personsdata = response.data;
        console.log( "personsdata", personsdata);
        //grab the third array and their multiple keys and pull only the first name info
        const person= response.data[3].firstname;
        console.log("person",person);
        //the .data here is mandatory from the api. 
        


    //  //info key is an empty array with the variable persondata information added
    // this.setState({info: personsdata})
    // console.log(this.state.info);

    // //apiName key is an empty string with the variable person information added
    // this.setState({apiNames: person});
    // console.log(this.state.apiNames);

    //this could also be combined. and both work
    this.setState({info: personsdata, apiNames: person})
    console.log("info", this.state.info, "apiNames",this.state.apiNames );
    })


    //State is like a mini database with all of the information that was requested
    //all api info is not in the state

    .catch(error => {
        console.log('there is an error', error)
    })
}

    render() {
        return (
            <div>
                {/* import Hobbies add props and it fills in from component */}
                <Hobbies name= "hiking" place= "utah" />


                {/* this shows that props in Hobbies could be updated from app JS file.
                so multiple response could be updated here */}
                {/* <h4>My second favorite hobby is</h4>
                <Hobbies name="cooking" place= "kitchen"/> */}


                {/* Hobbies is again updated with new parameter/prop. However,
                this parameter is variable since its a state. states 
                have lifecycles which allows updating */}
                <h1>{this.state.apiNames}</h1>
                <Hobbies name={this.state.apiNames}/>
            
            
                {/* <Hobbies hiking/> */} */}
            </div>
        )
    }
}

export default App;

