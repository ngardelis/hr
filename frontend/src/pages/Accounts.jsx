import React, { useState } from 'react'
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const Accounts = () => {

  const muiCache = createCache({
    key: "mui-datatables",
    prepend: true
  });

  // const setOpen = useState(false);
  
  const responsive = useState("vertical");
  const tableBodyHeight = useState("400px");
  const tableBodyMaxHeight = useState("");
  const searchBtn = useState(true);
  const downloadBtn = useState(true);
  const printBtn = useState(true);
  const viewColumnBtn = useState(true);
  const filterBtn = useState(true);

  const columns = [
      { name: "INVOICE NO.", options: { filterOptions: { fullWidth: true } } },
      "CLIENTS",
      "DATE"
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
    ["qwerty-7565", "Rick Sanchez", "21.11.2022"],
    ["qwerty-5434", "Morty Smith", "29.10.2022"],
    ["qwerty-7958", "Bruce Banner", "15.09.2022"],
    ["qwerty-9675", "Groot", "21.03.2021"],
  ];


  return (
    <div className='u-container'>
      <div className="u-row accounts">
        <div className="u-badge">
          <span className='u-total'>Total Accounts</span>
          <h1 className="u-totalNumber">420</h1>
        </div>
      </div>
      <div className="u-row">
        <CacheProvider value={muiCache}>
            <ThemeProvider theme={createTheme()}>
                <MUIDataTable
                title={"CLIENTS"}
                data={data}
                columns={columns}
                options={options}
                />
            </ThemeProvider>
        </CacheProvider>
      </div>
    </div>
  )
}

export default Accounts