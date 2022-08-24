import React, { useState, useEffect } from "react";

const Table = ({ products }) => {
  const [sortProduct, setSortProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const onSortClick = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return a.price - b.price;
    });

    setSortProduct(res);

    console.log({ res });
  };
  const onSortClick2 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.price - a.price;
    });

    setSortProduct(res);

    console.log({ res });
  };
  const onSortClick3 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return a.stock - b.stock;
    });

    setSortProduct(res);
  };
  const onSortClick4 = () => {
    console.log("click");

    const tempProducts = [...products];
    const res = tempProducts.sort((a, b) => {
      return b.stock - a.stock;
    });

    setSortProduct(res);
  };
  const onSortClick5 = () => {
    setSortProduct(products);
  };
  const onHandleSearch = (event) => {
    setSearchTerm(event.target.value);
    const tempProducts = [...products];

    const filterProducts = tempProducts.filter((item) => {
      return item.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    console.log({ filterProducts });

    setSortProduct(filterProducts);
  };

  useEffect(() => {
    setSortProduct(products);
  }, [products]);

  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          search
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="search..."
          value={searchTerm}
          onChange={onHandleSearch}
        />
      </div>

      <table className="table table-warning table-striped shadow">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col"></th>
            <th scope="col">Province</th>
            <th scope="col">New_case</th>
            <th scope="col">New_death</th>
            <th scope="col">Total_case</th>
            <th scope="col">Total_death</th>
            <th scope="col">Total_case_excludeabroad</th>
            <th scope="col">txn_date</th>

            <th scope="col">update_date</th>
            <th scope="col" style={{ width: "200px" }}>
              Run_New_case{" "}
              <span role="button" className="" onClick={onSortClick}>
                🔼
              </span>
              <span role="button" className="" onClick={onSortClick2}>
                🔽
              </span>
            </th>
            <th scope="col">
              Run_Total_case
              <span role="button" className="" onClick={onSortClick3}>
                🔼
              </span>
              <span role="button" className="" onClick={onSortClick4}>
                🔽
              </span>
            </th>
            <th scope="col" style={{ width: "200px" }}>
              Reset{" "}
              <span role="button" className="" onClick={onSortClick5}>
                ⏪
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortProduct.map((items, index) => {
            return (
              <tr className="table-success">
                <td>{index + 1}</td>
                <td></td>
                <td>{items.province}</td>

                <td>{items.new_case}</td>
                <td>{items.new_death}</td>
                <td>{items.total_case}</td>
                <td>{items.total_death}</td>
                <td>{items.total_case_excludeabroad}</td>
                <td>{items.txn_date}</td>
                <td>{items.update_date}</td>
                <td>{items.Run_New_case}</td>
                <td>{items.Run_Total_case}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
