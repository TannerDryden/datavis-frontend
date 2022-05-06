import React, { Component } from "react";
import "./DataVis.css";

function DataVis() {
  return (
    <div className="DataVis">
      <h2 className="Title"> Navigate the Reports</h2>
      <div className="TextBox">
        <p>
          The following data represents current and past information focused on
          bars, restaurants, and other food establishments. These reports allow
          you to visualize the performance of the hospitality industry across
          Washington State up until the given year. You can view this data
          either as a single region alone or as a comparison of regions. Being
          able to view the regions individually is useful in that it could help
          you make better, more informed business decisions. The dashboards
          availabe include region comparison, restaurant type comparison, region
          industry benchmarks, and region compared to statewide statistics.
          Several Dashboards are within each report. Click the > to move to the
          next dashboard. Explore the dashbaords to find what suits your needs.
        </p>
      </div>
      <h2 className="Title"> Region Comparison</h2>
      <div className="TextBox">
        <p>
          The following dashboards give an overview of the regions. Here you can
          compare the regions against each other.
        </p>
      </div>
      <iframe
        title="WHA-Regions - All Regions"
        width="1300"
        height="600"
        src="https://app.powerbi.com/view?r=eyJrIjoiMjg4NTEzMGYtNWZkZi00YWI4LWIwYjktZDAwMTI3ZWJkOGU0IiwidCI6ImI1MmJlNDcxLWY3ZjEtNDdiNC1hODc5LTBjNzk5YmI1M2RiNSIsImMiOjZ9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
      <h2 className="Title"> Restaurant Comparison</h2>
      <div className="TextBox">
        <p>
          The following dashboard allow for the comparison of different
          Restaurant Types. The Restaurant Types that are availabe are Full
          Service and Limited Service. A limited service restaurant would be
          considered fast food restaurants. A full service restaurant would be a
          sit down restaurant.
        </p>
      </div>
      <iframe
        title="WHA-2 - Restaurant Service Comparison"
        width="1300"
        height="600"
        src="https://app.powerbi.com/view?r=eyJrIjoiMWJjOTViNTUtMzhmYy00NTVhLTg1OTUtZTMyZmVjOWEwM2I2IiwidCI6ImI1MmJlNDcxLWY3ZjEtNDdiNC1hODc5LTBjNzk5YmI1M2RiNSIsImMiOjZ9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>

      <h2 className="Title"> Restaurant Benchmarks</h2>
      <div className="TextBox">
        <p>
          The following dashboards display data regarding industry benchmarks in
          the restaurant industry.
        </p>
      </div>
      <iframe
        title="WHA-1 - Benchmarks"
        width="1300"
        height="600"
        src="https://app.powerbi.com/view?r=eyJrIjoiNzg2NThlOGMtNzE1ZC00ZTM3LWJlNzktOGQyMmIyN2U2NmY2IiwidCI6ImI1MmJlNDcxLWY3ZjEtNDdiNC1hODc5LTBjNzk5YmI1M2RiNSIsImMiOjZ9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
      <h2 className="Title"> Region Statistics</h2>
      <div className="TextBox">
        <p>
          If you are interested in a single region, the following dashboards
          that a closer look at each region individually. Each report contains
          yearly percent change and yearly totals.
        </p>
      </div>

      <iframe
        title="WHA-Spokane - Spokane"
        width="1300"
        height="600"
        src="https://app.powerbi.com/view?r=eyJrIjoiNzk0NzE2YzQtODQyYi00YWE0LWE2MzMtNjQ5ZWZjNzkwNDM3IiwidCI6ImI1MmJlNDcxLWY3ZjEtNDdiNC1hODc5LTBjNzk5YmI1M2RiNSIsImMiOjZ9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
      <iframe
        title="WHA-9"
        width="1300"
        height="600"
        src="https://app.powerbi.com/view?r=eyJrIjoiMzEyYWM4ZmEtMzIzZC00YjUyLTkwMDUtNWQwY2EwZTMwYjA4IiwidCI6ImI1MmJlNDcxLWY3ZjEtNDdiNC1hODc5LTBjNzk5YmI1M2RiNSIsImMiOjZ9&pageName=ReportSection6ff639c6d6cc405029a4"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
      <iframe
        title="WHA-10 - Clark"
        width="1300"
        height="600"
        src="https://app.powerbi.com/view?r=eyJrIjoiNDU1NWUyM2MtMzc3Mi00MGY3LThkNTgtYjY1NDNkMTU3YTQ5IiwidCI6ImI1MmJlNDcxLWY3ZjEtNDdiNC1hODc5LTBjNzk5YmI1M2RiNSIsImMiOjZ9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
      <iframe
        title="WHA-King - King"
        width="1300"
        height="600"
        src="https://app.powerbi.com/view?r=eyJrIjoiNTA0ZjEzMWYtOWZlZC00Zjc0LWJkMmMtMTkyNGU3Yjk2N2RhIiwidCI6ImI1MmJlNDcxLWY3ZjEtNDdiNC1hODc5LTBjNzk5YmI1M2RiNSIsImMiOjZ9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
      <iframe
        title="WHA-7 - Northwest"
        width="1300"
        height="600"
        src="https://app.powerbi.com/view?r=eyJrIjoiYTUzZTQ5MDMtYWRjYS00NzMxLTkzM2EtNzBiYWVmM2IwZGFhIiwidCI6ImI1MmJlNDcxLWY3ZjEtNDdiNC1hODc5LTBjNzk5YmI1M2RiNSIsImMiOjZ9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
      <iframe
        title="WHA-6 - Peninsula"
        width="1300"
        height="600"
        src="https://app.powerbi.com/view?r=eyJrIjoiYWUxNTk3NGUtMzhhMi00NWE5LThlNGItMmRmNTE2MDg3YTAwIiwidCI6ImI1MmJlNDcxLWY3ZjEtNDdiNC1hODc5LTBjNzk5YmI1M2RiNSIsImMiOjZ9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
      <iframe
        title="WHA-5 - Peirce"
        width="1300"
        height="600"
        src="https://app.powerbi.com/view?r=eyJrIjoiNzFmZjY3MmItZjVmMy00MDhhLWJlMzgtYjk0NWMzNGVlMjRhIiwidCI6ImI1MmJlNDcxLWY3ZjEtNDdiNC1hODc5LTBjNzk5YmI1M2RiNSIsImMiOjZ9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
      <iframe
        title="WHA-4 - Seattle"
        width="1300"
        height="600"
        src="https://app.powerbi.com/view?r=eyJrIjoiMGQ5NDIwMWQtNzhmMy00ZjE0LWFiMWQtYzU0MzJiODBjYTI1IiwidCI6ImI1MmJlNDcxLWY3ZjEtNDdiNC1hODc5LTBjNzk5YmI1M2RiNSIsImMiOjZ9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}

export default DataVis;
