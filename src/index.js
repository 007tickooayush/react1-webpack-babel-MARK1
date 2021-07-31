import React,{useState} from 'react';
import ReactDOM from 'react-dom';

// function App(props) {
//     console.log(props.name);
//     return (<div>
//         <Product name={props.name} />
//         <Cart name={props.name} />
//     </div>);
// }

class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            id: 'cs0000',
            name: 'New User',
            email: 'newuser@gmail.com',
            rank: 'silver'  
        };

        // this.handleChange = this.handleChangeId.bind(this);
        // this.handleChange = this.handleChangeName.bind(this);
        // this.handleChange = this.handleChangeEmail.bind(this);
        // this.handleChange = this.handleChangeRank.bind(this);

        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeRank = this.handleChangeRank.bind(this);
    }

    handleChangeId(e){
        console.log('handleChangeId() called');
        this.setState({id: e.target.value});
    }
    handleChangeName(){
        console.log('handleChangeName() called');
    }
    handleChangeEmail(){
        console.log('handleChangeEmail() called');
    }
    handleChangeRank(){
        console.log('handleChangeRank() called');
    }

    addUser(){
        console.log('addUser() called');
    }
    
    render() {
        console.log(this.props.names);    

        let names = this.props.names.map(i =>{
            return <li key={i.id}> <b>Name: </b> {i.name} <b>E-mail: </b> {i.email} <b>Profile: </b> {i.rank} </li>
        });
        
        return (<React.Fragment>
            <input type="text" name="id" placeholder="enter id" onChange={this.handleChangeId} />
            <br/>
            <input type="text" name="name" placeholder="enter name" onChange={this.handleChangeName} />
            <br/>
            <input type="email" name="email" placeholder="enter email" onChange={this.handleChangeEmail} />
            <br/>
            <input type="text" name="rank" placeholder="enter rank" onChange={this.handleChangeRank} />
            <br/>
            <button onClick={this.addUser} >ADD</button>
            <ul> {names} </ul>
        </React.Fragment>);
    }
}

const names= [
    {
        id: 'cs1176',
        name: 'Hellsent',
        email: 'hellsent@gmail.com',
        rank: 'elite'
    },
    {
        id: 'cs8176',
        name: 'Creston',
        email: 'crestonzyne@gmail.com',
        rank: 'silver'
    },
    {
        id: 'cs2176',
        name: 'Rose',
        email: 'rosewilson@gmail.com',
        rank: 'elite'
    },
    {
        id: 'cs1576',
        name: 'Grovester',
        email: 'grovesterzyne@gmail.com',
        rank: 'nova'
    },
];

ReactDOM.render(<App names={names} />, document.getElementById('root'));
