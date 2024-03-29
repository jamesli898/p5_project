import * as React from "react";
import Cell from "./Cell";
import "./DataTable.css";

export default class DataTable extends React.Component {
  renderHeadingRow(_cell, cellIndex) {
    const { headings } = this.props;

    return (
      <Cell
        key={`heading-${cellIndex}`}
        content={headings[cellIndex]}
        header={true}
      />
    );
  }

  renderRow(_row, rowIndex) {
    const { rows } = this.props;

    return (
      <tr key={`row-${rowIndex}`}>
        {rows[rowIndex].map((_cell, cellIndex) => {
          return (
            <Cell
              key={`${rowIndex}-${cellIndex}`}
              content={rows[rowIndex][cellIndex]}
            />
          );
        })}
      </tr>
    );
  }

  render() {
    const { headings, rows } = this.props;
    this.renderHeadingRow = this.renderHeadingRow.bind(this);
    this.renderRow = this.renderRow.bind(this);

    const theadMarkup = (
      <tr key="heading">{headings.map(this.renderHeadingRow)}</tr>
    );

    const tbodyMarkup = <tr key="body">{rows.map(this.renderRow)}</tr>;

    return (
      <table className="Table">
        <div className="HeaderRow">
          <thead>{theadMarkup}</thead>
        </div>
        <div className="BodyRows">
          <tbody className="per-rows">{tbodyMarkup}</tbody>
        </div>
      </table>
    );
  }
}
