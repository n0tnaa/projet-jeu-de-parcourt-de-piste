// WorldMap.js
import React from "react";
import styled from "styled-components";

const WorldMapContainer = styled.div`
  /* Styles pour la carte du monde */
  background-image: url("https://www.google.com/search?q=image+monde+du+jeu+farming+simulator+22&tbm=isch&chips=q:image+monde+du+jeu+farming+simulator+22,online_chips:autre+monde:RTf8pvbdhC0%3D&rlz=1C1CHZN_frTN936TN937&hl=en&sa=X&ved=2ahUKEwix99aorbyAAxXCmCcCHXbPCWkQ4lYoAnoECAEQNA&biw=1349&bih=689#imgrc=ZvFBGq--MW64OM&imgdii=tkK3gjAbmDGo6M");
  background-size: cover;
  color: #0000;
  font-family: "Arial", sans-serif;
  padding: 20px;
  text-align: center;

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  button {
    background-color: #4caf50;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
  }
`;

const WorldMap = () => {
  return (
    <WorldMapContainer>
      <h1>World Map</h1>
      <button>Click Me</button>
      {/* Contenu de la carte du monde */}
    </WorldMapContainer>
  );
};

export default WorldMap;
