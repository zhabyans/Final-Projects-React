import React from "react";
import styled from "styled-components";

//=======================================INI ADALAH LIST==========================================

const Styles = styled.div`
  * {
    box-sizing: border-box;
  }

  img {
    width: 100%;
  }

  body {
    margin: 0;
    font-family: Arial;
  }

  .header {
    text-align: center;
    padding: 32px;
  }

  .row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    padding: 0 4px;
  }

  /* Create four equal columns that sits next to each other */
  .column {
    -ms-flex: 100%; /* IE10 */
    flex: 100%;
    max-width: 100%;
    padding: 0 4px;
  }

  .column img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
  }
`;

function Gambar(props) {
  const isi = props.isinya.map(post => (
    <div key={post.id}>
      <img src={post.url} alt={post.alt} />
    </div>
  ));
  return (
    <div>
      <div>{isi}</div>
    </div>
  );
}

const contents = [
  {
    id: 1,
    url:
      "https://insights.daffodilsw.com/hs-fs/hubfs/Archna/instagram-app.png?width=711&name=instagram-app.png",
    alt: "photos"
  },
  {
    id: 2,
    url:
      "https://insights.daffodilsw.com/hs-fs/hubfs/Archna/discord-app.png?width=711&name=discord-app.png",
    alt: "photos"
  },
  {
    id: 3,
    url:
      "https://insights.daffodilsw.com/hs-fs/hubfs/Archna/Facebook-ads-manager.png?width=711&name=Facebook-ads-manager.png",
    alt: "photos"
  }
];

export default class List extends React.Component {
  render() {
    return (
      <Styles>
        <div>
          <br />
          <h3>Contoh Aplikasi</h3>
          <div className="row">
            <div className="column">
              <Gambar isinya={contents} />
            </div>
          </div>
        </div>
      </Styles>
    );
  }
}
