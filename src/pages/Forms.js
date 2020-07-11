import React from "react";

//=================================INI ADALAH FORM (UNCONTROLLED)========================================

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      saran: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    alert(`Namaku adalah ${this.state.name}, Saranku : ${this.state.saran}`);
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { name, saran } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Nama :
            <input
              name="name"
              type="text"
              onChange={this.onChange}
              value={name} />
          </label>
          <br />
          <label>
            Saran :
            <textarea
              name="saran"
              type="text"
              row="5"
              onChange={this.onChange}
              value={saran} >
              {" "}
            </textarea>
          </label>
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Forms;
