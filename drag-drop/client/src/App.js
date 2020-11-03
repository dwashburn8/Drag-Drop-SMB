import React from 'react';
import Board from "./components/Board"
import Header from "./components/Header/Header"
import HeaderContainer from "./components/Header-Container/Header-Container"
import ContentContainer from "./components/Content-Container/Content-Container"
import FooterContainer from "./components/Footer-Container/Footer-Container"
import ContactContainer from "./components/Contact-Container/Contact-Container"
import FeatuersContainer from "./components/Featues/Features-Container/Features-Container"
import Gallery from "./components/Gallery/Gallery-Container/Gallery-Container"

function App() {

  const handleUpArrow = event => {
    event.preventDefault();

    const upArrow = document.getElementsByClassName("upArrow");
    let arrowIndex = upArrow
    console.log("working!!!!")
}


  return (
    <div className="App">
      <Header></Header>
      <main className="flexbox">

        <Board id="board-1" className="board1 fixed">
        <HeaderContainer />
        <ContentContainer/>
        <FeatuersContainer/>
        <Gallery/>
        <ContactContainer onArrow={handleUpArrow}/>
        <FooterContainer/>
        </Board>

        <Board id="board-2" className="board2">
          <a className="btn">Customize Code</a>
        </Board>


        <Board id="board-3" className="board3">

        </Board>




      </main>
    </div>
  );
}

export default App;
