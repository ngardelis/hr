import React, { useState } from 'react'

import MUIDataTable from "mui-datatables";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const Projects = () => {

    const muiCache = createCache({
        key: "mui-datatables",
        prepend: true
    });
      
    const responsive = useState("vertical");
    const tableBodyHeight = useState("400px");
    const tableBodyMaxHeight = useState("");
    const searchBtn = useState(true);
    const downloadBtn = useState(true);
    const printBtn = useState(true);
    const viewColumnBtn = useState(true);
    const filterBtn = useState(true);
    
    const columns = [
        { name: "CLIENT NAME", options: { filterOptions: { fullWidth: true } } },
        "PROJECT",
        "PROJECT COST",
        "PAYMENT",
        "STATUS"
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
        ["Elon Musk", "Badges for Twitter", "$1000", "Completed", "Delivered"],
        ["Apple", "Page for iPhone 15", "$1500", "Pending", "Submit"],
        ["NVIDIA", "Page for GTX50 Series", "$900", "Pending", "Submit"],
        ["Eiichiro Oda", "One Piece Website", "$2000", "Completed", "Delivered"],
        ["Athtech", 'Industrial Project', "$1300", "Pending", "Submit"],
    ];

  return (
    <div className='pr-container'>
        <div className="pr-row">
            <CacheProvider value={muiCache}>
                <ThemeProvider theme={createTheme()}>
                    <MUIDataTable
                    title={"Projects"}
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

export default Projects