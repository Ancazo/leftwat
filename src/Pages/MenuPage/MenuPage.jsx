import React from "react";
import { PageContainer, MenuButton, Title } from "../../Components";
import "./MenuPage.scss";
import { Link } from "react-router-dom";

export const MenuPage = () => {
  return (
    <PageContainer navlink="/menu">
      <div id="menuButtonsContainer">
        <Link to="/dashboard">
          <div className="buttonTitleContainer">
            <MenuButton
              type="chart"
              colour="#85D1D8"
              width="128px"
              height="128px"
            />
            <Title
              title="Price Comparison"
              comment="Search for your item to compare prices"
            />
          </div>
        </Link>
        <Link to="/upload">
          <div className="buttonTitleContainer">
            <MenuButton
              type="upload"
              colour="#FC791F"
              width="128px"
              height="128px"
            />
            <Title
              title="Price Comparison"
              comment="Search for your item to compare prices"
            />
          </div>
        </Link>

        <Link to="/inventory">
          <div className="buttonTitleContainer">
            <MenuButton
              type="fridge"
              colour="#FEEA50"
              width="128px"
              height="128px"
            />
            <Title
              title="Price Comparison"
              comment="Search for your item to compare prices"
            />
          </div>
        </Link>
      </div>
    </PageContainer>
  );
};
