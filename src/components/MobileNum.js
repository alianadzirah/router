import React, { Component } from 'react';
import { Link } from 'react-router-dom';

var data = [
    {
        num: ""
    }
]



class MobileNum extends Component {
    storeNum = event => {
        data[0].num = event.target.value;
    }

    render() {
        return <div>
                <label>Mobile Number:</label>
                            <input 
                                type="text" 
                            
                                onChange={this.storeNum}
                            />
                        <Link to ={{pathname: "detail", data: data
                    }}>Submit</Link>
            </div>
        
    }
}
export default MobileNum;