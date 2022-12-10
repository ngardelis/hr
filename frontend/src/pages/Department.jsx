import React, { useState } from 'react'
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import AddDepartment from '../components/AddDepartment';

const Department = () => {

  const muiCache = createCache({
    key: "mui-datatables",
    prepend: true
  });

  const [open, setOpen] = useState(false);
  
  const responsive = useState("vertical");
  const tableBodyHeight = useState("400px");
  const tableBodyMaxHeight = useState("");
  const searchBtn = useState(true);
  const downloadBtn = useState(true);
  const printBtn = useState(true);
  const viewColumnBtn = useState(true);
  const filterBtn = useState(true);

  const columns = [
      { name: "DEPARTMENT NAME", options: { filterOptions: { fullWidth: true } } },
      "DEPARTMENT HEAD",
      "TOTAL EMPLOYEE"
  ];

  const options = {
      search: searchBtn,
      download: downloadBtn,
      print: printBtn,
      viewColumns: viewColumnBtn,
      filter: filterBtn,
      filterType: "dropdown",
      responsive,
      tableBodyHeight,
      tableBodyMaxHeight,
      onTableChange: (action, state) => {
      console.log(action);
      console.dir(state);
      }
  };

  const data = [
    ["Web Development", "Rick Sanchez", "50"],
    ["App Development", "Morty Smith", "13"],
    ["Marketing", "Bruce Banner", "21"],
    ["IT Support", "Groot", "85"],
  ];


  return (
    <div className='u-container'>
      <div className="u-row">
        <button className="u-btn" onClick={() => setOpen(true)}>Add New</button>
      </div>
      <div className="u-row">
        <CacheProvider value={muiCache}>
            <ThemeProvider theme={createTheme()}>
                <MUIDataTable
                title={"DEPARTMENTS LIST"}
                data={data}
                columns={columns}
                options={options}
                />
            </ThemeProvider>
        </CacheProvider>
      </div>
      {open && <AddDepartment setOpen={setOpen} />}
    </div>
  )
}

export default Department