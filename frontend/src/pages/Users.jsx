import React, { useState } from 'react'
import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import AddUser from '../components/AddUser';

const Users = () => {


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
      { name: "NAME", options: { filterOptions: { fullWidth: true } } },
      "DATE CREATED",
      "ROLE",
      "ROLE TYPE"
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
      ["Tony Stark", "29.11.2022", "CEO", "SUPER ADMIN"],
      ["Peter Parker", "25.11.2022", "Full-Stack Web Developer", "EMPLOYEE"],
      ["Bruce Wayne", "20.11.2022", "HR", "HR ADMIN"]
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
                title={"USER LIST"}
                data={data}
                columns={columns}
                options={options}
                />
            </ThemeProvider>
        </CacheProvider>
      </div>
      {open && <AddUser setOpen={setOpen} />}
    </div>
  )
}

export default Users