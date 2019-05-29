import React, { Component } from "react";
import { MDBDataTable } from "mdbreact";

class Buttontest extends Component {
  componentDidMount() {
    const url = "http://tools.grimco.com:81/get/location";
    fetch(url, {
      crossDomain: true,
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(res =>
        this.setState({ res }, () => console.log("locations...", res))
      );
  }

  state = {
    data: {
      columns: [
        {
          label: "Name",
          field: "name",
          sort: "asc",
          width: 150
        },
        {
          label: "Position",
          field: "position",
          sort: "asc",
          width: 270
        },
        {
          label: "Office",
          field: "office",
          sort: "asc",
          width: 200
        },
        {
          label: "Age",
          field: "age",
          sort: "asc",
          width: 100
        },
        {
          label: "Start date",
          field: "date",
          sort: "asc",
          width: 150
        },
        {
          label: "Salary",
          field: "salary",
          sort: "asc",
          width: 100
        }
      ],
      rows: [
        {
          name: "Tiger Nixon",
          position: "System Architect",
          office: "Edinburgh",
          age: "61",
          date: "2011/04/25",
          salary: "$320"
        }
      ]
    },
    locations: null
  };
  render() {
    return (
      <div className="container">
        <MDBDataTable striped bordered hover data={this.state.data} />
      </div>
    );
  }
}

export default Buttontest;
