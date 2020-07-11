import React from "react";

//================================MENGGUNAKAN TEKNIK LIFTING STATE UP==================================

class SuhuInput extends React.Component {
  _handleChange = e => {
    this.props.onChangeSuhu(e.target.value);
  };
  render() {
    const { suhuLabel, suhu } = this.props;
    return (
      <>
        <label>
          {suhuLabel === "C" ? "Celcius " : " Fahrenheit "} :
          <input type="number" value={suhu} onChange={this._handleChange} />
        </label>
      </>
    );
  }
}

export class Konversi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      celcius: 0,
      fahrenheit: 0
    };
  }

  onSubmit = e => {
    e.preventDefault();
    alert(
      ` ${this.state.celcius} celcius sama dengan ${
        this.state.fahrenheit
      } fahrenheit`
    );
  };

  onChangeC = celcius => {
    let fahrenheit = (parseFloat(celcius) * (9 / 5) + 32).toString();
    this.setState({ celcius, fahrenheit });
  };

  onChangeF = fahrenheit => {
    let celcius = (parseFloat(fahrenheit) - 32 * (5 / 9)).toString();
    this.setState({ celcius, fahrenheit });
  };

  render() {
    const { celcius, fahrenheit } = this.state;
    return (
      <>
      <center>
      <h3>Konversi suhu Celcius dan Fahrenheit</h3>
      <h6>mempermudah Anda ketika ingin konversi suhu</h6>
      <br /><br />
      <form onSubmit={this.onSubmit}>
        <SuhuInput suhuLabel="C" suhu={celcius} onChangeSuhu={this.onChangeC} />
        <br />
        <SuhuInput
          suhuLabel="F"
          suhu={fahrenheit}
          onChangeSuhu={this.onChangeF}
        />
        <br />
        <button type="submit">Convert</button>
      </form>
      </center>
      </>
    );
  }
}
