import React ,{ Component } from 'react';
import axios from 'axios';
import './MainService.css'

class MainService extends Component {
    constructor () {
        super()


        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        axios.get('https://moobi-heremap.herokuapp.com/?key=PIMoobi2019').then(response => console.log(response))
    }

    render () {
        return (
            <div className='button_container'>
                <button className='button' onClick={this.handleClick}>
                    Click Me Clink!
                </button>
            </div>
        )
    }
    
}

export default MainService
