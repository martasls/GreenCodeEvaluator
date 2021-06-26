import sysdata from '../json/sysinfo.json';
import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/SysinfoStyle.css';

class TableComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            json: sysdata
        }
    }
   
    // componentDidMount() {
    //     this.setState((prevState) => {
    //         return {
    //             json: tampildata()
    //         }
    //     })
    // }

    render() {
        return (
            <div>
                <table style={{
 border: "1px solid black"
}}>
                    <tbody style={{color:"blue"}}>
                    <tr>
  <td>Platform</td>
  <td>{this.state.json.platform}</td>
</tr>
<tr>
  <td>platform_release</td>
  <td>{this.state.json.platform_release}</td>
</tr>
<tr>
  <td>platform_version</td>
  <td>{this.state.json.platform_version}</td>
</tr>
<tr>
  <td>processor</td>
  <td>{this.state.json.processor}</td>
</tr>
<tr>
  <td>ram</td>
  <td>{this.state.json.ram}</td>
</tr>
                        {/* {this.state.json.map((data, i) => {
                            return (
                                <tr key={i}>
                                    <td>{data.platform}</td>
                                    <td>{data.lastname}</td>
                                </tr>
                            )
                        })} */}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default TableComponent;