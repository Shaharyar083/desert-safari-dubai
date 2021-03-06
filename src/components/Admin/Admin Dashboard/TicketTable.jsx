import React, { useState, useEffect } from "react";

// import packages
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import GuideModal from "./GuideModal";

// import components
// import InputSearch from "../Input Search/input-search";

// import images
// import searchImg from "../../assets/images/dashboard/search.png";
// import stripe from "../../assets/images/dashboard/stripe.png";
// import paypal from "../../assets/images/dashboard/paypal.png";

const columns = [
  { id: "ticket", label: "Ticket", minWidth: 150 },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
  },

  {
    id: "person",
    label: "Person",
    minWidth: 170,
  },
  {
    id: "guide",
    label: "Guide",
  },
];

const TicketTable = ({ data, fetchData }) => {
  const [rows, setRows] = useState([]);

  // Pagination Functionality Start
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    let temp = [];

    data?.map((ele) => {
      if (ele?.ticket) temp = [...temp, ele];
    });
    setRows(temp);
  }, [data]);

  return (
    <div className="table-component">
       <div className="Heading_tab">Ticket Detail</div>
      <Paper sx={{ width: "100%" }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    // align={column.align}
                    // style={{ top: 57, minWidth: column.minWidth }}
                    className="header-root"
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, rowIndex) => {
                  return (
                    <TableRow role="checkbox" tabIndex={-1} key={rowIndex}>
                      <TableCell>{row?.ticket?.ticket}</TableCell>
                      <TableCell>{row?.ticket?.date}</TableCell>

                      <TableCell>{row?.ticket?.person}</TableCell>
                      <TableCell>
                        {row?.ticket?.guide ? (
                          <div>{row?.ticket?.guide}</div>
                        ) : (
                          <GuideModal
                            id={row?._id}
                            data={row}
                            objectKey={"ticket"}
                            fetchData={fetchData}
                          >
                            Assign Guide
                          </GuideModal>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default TicketTable;
