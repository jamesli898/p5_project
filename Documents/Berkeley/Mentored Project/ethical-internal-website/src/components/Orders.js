import React from "react";
import DataTable from "./DataTable";

class Orders extends React.Component {
  render() {
    const headings = ["Name", "Item", "Quantity", "Size"];

    const rows = [
      ["Trevor Aquino", "The Shirt", 2, "M"],
      ["Parth Shah", "The Other Shirt", 1, "L"]
    ];
    return (
      <div className="Orders">
        <h1>Orders</h1>
        <DataTable headings={headings} rows={rows} />
      </div>
    );
  }
}

export default Orders;
