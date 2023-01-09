import React from 'react';
import './App.css'
 
class Datatable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {employee: []};
        this.headers = [
            { key: 'id', label: 'Id'},
            { key: 'name', label: 'Name' },
            { key: 'place', label: 'Place' }
        ];
    }
     
  
     
     
    componentDidMount() {
        fetch('http://localhost/api/employee.php').then(response => {
            console.log(response);
            return response.json();
          }).then(result => {
            // Work with JSON data here
            console.log(result);
            this.setState({
                employee_rs:result
            }); 
          }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          });
    }
         
    render() {
        const employeeFound = this.state.employee_rs && this.state.employee_rs.length;
        if(employeeFound) {
            return (
                <center>
                <div className="container"><h1>ReactJS Fetch Data from Database with PHP Mysql</h1>
                    <div id="msg" ></div>
                    {/* <button type="button" className="btn btn-danger" onClick={this.deleteEmployees}>Delete Selected Employee(s)</button> */}
                    <table className="table1">
                        <thead className="tr1">
                            <tr className="tr1">
                                {
                                    this.headers.map(function(h) {
                                        return (
                                            <th key={h.key}>{h.label}</th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employee_rs.map(function(item) {
                                return (
                                    <tr  className="tr1">
                                      {/* <td><input type="checkbox" className="selectsingle" value="{item.id}" checked={this.state.checkedBoxes.find((p) => p.id === item.id)} onChange={(e) => this.toggleCheckbox(e, item)}/>
                                        {item.id}
                                      </td> */}
                                      <td className="td1">{item.id}</td>
                                      <td className="td1">{item.name}</td>
                                      <td className="td1">{item.place}</td>
                                    </tr>
                                )})
                            }
                        </tbody>
                    </table>
                </div>
                </center>
            )
        }
    }
}
export default Datatable;