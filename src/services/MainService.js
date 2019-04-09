import React ,{ Component } from 'react';
import axios from 'axios';
import RuasList from './RuasList';

class MainService extends Component {

        constructor () {
            super()
            
            
            // this.handleClick = this.handleClick.bind(this)
        }

    render () {
       return(
           <RuasList />
       )
    }
    
}

export default MainService
