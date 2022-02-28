import React, { Component } from "react";
import "./DataVis.css";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import { getAccessToken } from "./GenerateAccessToken";
import Reports from "./Reports";

class DataVis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      access: "",
      token: "",
      embedId: "",
      uri: "",
    };
  }

  async componentDidMount() {
    this.setState({
      access: getAccessToken(),
      token: "", //await getAccessToken(),
      embedId: "f97c19c2-87be-4be6-a7a5-24b6c3aca493",
      uri: "https://app.powerbi.com/reportEmbed?reportId=f97c19c2-87be-4be6-a7a5-24b6c3aca493&autoAuth=true&ctid=b52be471-f7f1-47b4-a879-0c799bb53db5&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtdXMtYy1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9",
    });
  }

  render() {
    return (
      <div className="allReports">
        <div className="cards">
          <h1>Executive Summary</h1>
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <Reports
                  src="images/WSU-Cougar.jpg"
                  text="Explore the hidden waterfall deep inside the Amazon Jungle"
                  label="Adventure"
                />
              </ul>
            </div>
          </div>
        </div>
        <div className="DataVis">
          <header className="App-backdrop">
            <iframe
              title="CapStoneProject"
              width="1000"
              height="700"
              src="https://app.powerbi.com/view?r=eyJrIjoiNGJiNWY4OTYtYTEwNy00NDI2LTk5YmQtN2Q2NjBjYTg2ZGQ4IiwidCI6ImI1MmJlNDcxLWY3ZjEtNDdiNC1hODc5LTBjNzk5YmI1M2RiNSIsImMiOjZ9&pageName=ReportSection"
              frameborder="0"
              allowFullScreen="true"
            ></iframe>
          </header>
          {/* 
        <p className="App-title"> Report Page </p>
        <PowerBIEmbed
          embedConfig={{
            type: "report", // Supported types: report, dashboard, tile, visual and qna
            id: this.state.embedId,
            embedUrl: this.state.uri,
            accessToken: this.state.token,
            tokenType: models.TokenType.Embed,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false,
                },
              },
              background: models.BackgroundType.Transparent,
            },
          }}
          eventHandlers={
            new Map([
              [
                "loaded",
                function () {
                  console.log("Report loaded");
                },
              ],
              [
                "rendered",
                function () {
                  console.log("Report rendered");
                },
              ],
              [
                "error",
                function (event) {
                  console.log(event?.detail);
                },
              ],
            ])
          }
          cssClassName={"Embed-container"}
          // getEmbeddedComponent={(embeddedReport) => {
          //   this.report = embeddedReport as Report;
          // }}
        />
      </header> */}
        </div>
      </div>
    );
  }
}

export default DataVis;
