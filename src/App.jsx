import "bootstrap/dist/css/bootstrap.min.css";
import { Tickets } from "./components/Tickets";
import { Tasks } from "./components/Tasks";
import "./assets/styles/index.css";
// import { useRef, useState } from "react";
import Header from "./components/Header/Header";
import Item from "./components/Item/Item";
import DataNavbar from "./DataNavbar";
import Overview from "./components/Overview/Overview";
import OverviewHeader from "./components/Overview/OverviewHeader/OverviewHeader";
import OverviewCard from "./components/Overview/OverviewCard/OverviewCard";
import DataOverviewCards from "./DataOverviewCards";
import OverviewTrends from "./components/Overview/OverviewTrends/OverviewTrends";
import OverviewTodayTrands from "./components/Overview/OverviewTodayTrends/OverviewTodayTrends";
import OverviewTrandsRating from "./components/Overview/OverviewTrendsRating/OverviewTrandsRating";
import DataOverviewRatings from "./DataOverviewRatings";
import OverviewRatingItem from "./components/Overview/OverviewRatingItem/OverviewRatingItem";
import { Routes, Route } from "react-router-dom";
import { TichketPage } from "./components/pages/Tichket";

function App() {
  return (
    <div className="container">
      <Header>
        {DataNavbar.map((el) => (
          <Item
            borderTop={el.borderTop}
            text={el.text}
            icon={el.icon}
            to={el.to}
            classes={el.classes}
          />
        ))}
      </Header>
      <OverviewHeader />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Overview
                children2={DataOverviewCards.map((el) => (
                  <OverviewCard title={el.title} number={el.number} />
                ))}
                children3={
                  <OverviewTrends
                    children1={<OverviewTodayTrands />}
                    children2={
                      <OverviewTrandsRating>
                        {DataOverviewRatings.map((el) => (
                          <OverviewRatingItem
                            text={el.text}
                            number={el.number}
                          />
                        ))}
                      </OverviewTrandsRating>
                    }
                  ></OverviewTrends>
                }
              ></Overview>
              <div className="container">
                <div className="d-flex justify-content-between mb-5 position-relative">
                  <Tickets />
                  <Tasks />
                </div>
              </div>
            </>
          }
        />

        <Route path="/ticket" element={<TichketPage />} />
      </Routes>
    </div>
  );
}

export default App;
