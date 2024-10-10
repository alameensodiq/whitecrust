import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ThemeProvider, createTheme, styled } from "@mui/material";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

const Tables = ({
  customers,
  transfers,
  investments,
  loans,
  audit,
  airtime,
  overview,
  data,
  account,
  investmentstypes,
  investmentspackages,
  cables
}) => {
  const navigate = useNavigate();
  const theme = createTheme({
    typography: {
      fontFamily: ["inter"].join(",")
    }
  });

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      // fontFamily: `Inter sans-serif`,
      fontWeight: 600,
      fontSize: "8px",
      lineHeight: "13px",
      // fontFamily: "Exo 2, !important",
      /* identical to box height, or 150% */
      alignItems: "center",
      letterSpacing: "0.03em",
      textTransform: "uppercase",
      color: "rgba(104, 113, 130, 1)",
      borderBottom: "1px solid #E2E8F0",
      borderTop: "1px solid #E2E8F0",
      backgroundColor: "rgba(249, 250, 251, 1)",
      fontFamily: theme?.typography?.fontFamily
      //   alignItems: 'center',
      //   textTransform: 'uppercase',
      // border: 0,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: "10px",
      fontWeight: 400,
      fontFamily: theme?.typography?.fontFamily,
      border: 0,
      color: "rgba(90, 99, 118, 1)",
      flexWrap: "wrap"
    }
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: "#ffffff",
      cursor: "pointer",
      borderBottom: "1px solid #E2E8F0",
      fontFamily: theme?.typography?.fontFamily
    },
    "&:nth-of-type(odd)": {
      cursor: "pointer",
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #E2E8F0",
      fontFamily: theme?.typography?.fontFamily
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0
    }
  }));
  return (
    <div>
      {customers ? (
        <TableContainer
          // component={Paper}
          style={{ boxShadow: "none" }}
        >
          <Table
            sx={{ minWidth: 700, tableLayout: "auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={{ paddingRight: "0px" }}>
                <StyledTableCell style={{ width: "5%" }}>S/N</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  DATE OF BIRTH
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  FULL NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  USERNAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  EMAIL ADDRESS
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  PHONE NUMBER
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  GENDER
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item, index) => (
                <StyledTableRow>
                  <StyledTableCell style={{ width: "5%" }}>
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell
                    className="text-dob"
                    style={{ width: "15%" }}
                  >
                    {item?.dob}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.otherName}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}></StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}></StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.phoneNumber}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.gender}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <p
                      className="text-route-color"
                      onClick={() => {
                        navigate("/customers/:id");
                        sessionStorage.setItem(
                          "customerDetails",
                          JSON.stringify(item)
                        );
                      }}
                    >
                      View
                    </p>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              {/* <StyledTableRow>
                <StyledTableCell style={{ width: "5%" }}>2</StyledTableCell>
                <StyledTableCell className="text-dob" style={{ width: "15%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  alameensodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  alameensodiq@yahoo.com
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>Male</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  <p className="text-route-color" onClick={() => navigate('/customers/:id')}>View</p>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell style={{ width: "5%" }}>3</StyledTableCell>
                <StyledTableCell className="text-dob" style={{ width: "15%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  alameensodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  alameensodiq@yahoo.com
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>Male</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  <p className="text-route-color" onClick={() => navigate('/customers/:id')}>View</p>
                </StyledTableCell>
              </StyledTableRow> */}
            </TableBody>
          </Table>
        </TableContainer>
      ) : transfers ? (
        <TableContainer
          // component={Paper}
          style={{ boxShadow: "none" }}
        >
          <Table
            sx={{ minWidth: 700, tableLayout: "auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={{ paddingRight: "0px" }}>
                <StyledTableCell style={{ width: "10%" }}>
                  DATE CREATED
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  SENDER'S NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  SENDER'S ID
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  BENEFICIARY'S NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  BENEFICIARY'S ACCOUNT NUMBER
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  AMOUNT
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  TRANSACTION ID
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  STATUS
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item, index) => (
                <StyledTableRow>
                  <StyledTableCell style={{ width: "10%" }}>
                    <Moment format="DD-MM-YYYY">{item?.dateCreated}</Moment>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}></StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.sentFrom}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.beneficiaryName}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.accountNo}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.amount}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.reference}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <button className="bg-successbg h-[30px] w-[100%] rounded-full text-successtext font-semibold text-[9px]">
                      Successful
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              {/* <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  0040759354
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  200,000
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  WOFUFHKKDDL099
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  <button className="bg-pendingbg h-[30px] w-[100%] rounded-full text-pendingtext font-semibold text-[9px]">
                    Pending
                  </button>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  0040759354
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  200,000
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  WOFUFHKKDDL099
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  <button className="bg-failedbg h-[30px] w-[100%] rounded-full text-failedtext font-semibold text-[9px]">
                    Failed
                  </button>
                </StyledTableCell>
              </StyledTableRow> */}
            </TableBody>
          </Table>
        </TableContainer>
      ) : account ? (
        <TableContainer
          // component={Paper}
          style={{ boxShadow: "none" }}
        >
          <Table
            sx={{ minWidth: 700, tableLayout: "auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={{ paddingRight: "0px" }}>
                <StyledTableCell style={{ width: "10%" }}>S/N</StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  ACCOUNT NUMBER
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  FULL NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  EMAIL
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  PHONE NUMBER
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  DATE OF BIRTH
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  DATE JOINED
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item, index) => (
                <StyledTableRow>
                  <StyledTableCell style={{ width: "10%" }}>
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.accountNo}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.profile?.otherName}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}></StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}></StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.profile?.phoneNumber}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <Moment format="DD/MM/YY">
                      {item?.profile?.dateCreated}
                    </Moment>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <span className="text-[12px] font-semibold text-button-bg">
                      View
                    </span>
                    {/* <button className="bg-successbg h-[30px] w-[100%] rounded-full text-successtext font-semibold text-[9px]">
                    Successful
                  </button> */}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              {/* <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  0040759354
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  200,000
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  WOFUFHKKDDL099
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  <button className="bg-pendingbg h-[30px] w-[100%] rounded-full text-pendingtext font-semibold text-[9px]">
                    Pending
                  </button>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  0040759354
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  200,000
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  WOFUFHKKDDL099
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  <button className="bg-failedbg h-[30px] w-[100%] rounded-full text-failedtext font-semibold text-[9px]">
                    Failed
                  </button>
                </StyledTableCell>
              </StyledTableRow> */}
            </TableBody>
          </Table>
        </TableContainer>
      ) : investments ? (
        <TableContainer
          // component={Paper}
          style={{ boxShadow: "none" }}
        >
          <Table
            sx={{ minWidth: 700, tableLayout: "auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={{ paddingRight: "0px" }}>
                <StyledTableCell style={{ width: "10%" }}>
                  INVESTMENT DATE
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  INVESTOR'S NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  INVESTMENT TYPE
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  DURATION
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  MATURITY DATE
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  AMOUNT(N)
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  INTEREST(N)
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  RO(N)
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  STATUS
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item) => (
                <StyledTableRow>
                  <StyledTableCell
                    className="text-dob"
                    style={{ width: "10%" }}
                  >
                    <Moment format="DD/MM/YY">{item?.dateCreated}</Moment>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.investorName}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.investmentInfo[0]?.name}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.duration} days
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {/* <Moment format="DD/MM/YYY">
                      {item?.investmentInfo?.dateCreated}
                    </Moment> */}
                    ----
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.amount}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.interestAmount}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.currentInterestYeild}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.status === "running" ? (
                      <button
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "80%",
                          height: "20px",
                          background: "#8a8a7d",
                          color: "#e6df19",
                          gap: "6px",
                          borderRadius: "6px"
                        }}
                      >
                        <span
                          style={{
                            background: "#e5e999",
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%"
                          }}
                        ></span>{" "}
                        Pending
                      </button>
                    ) : (
                      <button
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "80%",
                          height: "20px",
                          background: "#ECFDF3",
                          color: "#027A48",
                          gap: "6px",
                          borderRadius: "6px"
                        }}
                      >
                        <span
                          style={{
                            background: "#027A48",
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%"
                          }}
                        ></span>{" "}
                        Active
                      </button>
                    )}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <span style={{ color: "#263BD4" }}>View</span>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : loans ? (
        <TableContainer
          // component={Paper}
          style={{ boxShadow: "none" }}
        >
          <Table
            sx={{ minWidth: 700, tableLayout: "auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={{ paddingRight: "0px" }}>
                <StyledTableCell style={{ width: "10%" }}>
                  DATE REQUESTED
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  DEBTOR'S NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  EMAIL ADDRESS
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  PHONE NUMBER
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  LOAN TYPE
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  AMOUNT(N)
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  BUSINESS TYPE
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  OFFICE ADDRESS
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  STATUS
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item) => (
                <StyledTableRow>
                  <StyledTableCell style={{ width: "10%" }}>
                    <Moment format="DD/MM/YY">{item?.dateCreated}</Moment>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.user?.firstName} {""}
                    {item?.user?.lastName}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.user?.email}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.user?.phoneNumber}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.loanType}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.amount}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.businessType}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.officeAddress}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.loanStatus ? (
                      <button className="bg-failedbg h-[30px] w-[100%] rounded-full text-failedtext font-semibold text-[9px]">
                        Declined
                      </button>
                    ) : (
                      <button className="bg-successbg h-[30px] w-[100%] rounded-full text-successtext font-semibold text-[9px]">
                        Approved
                      </button>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              {/* <StyledTableRow>
                <StyledTableCell style={{ width: "20%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  TYPE A
                </StyledTableCell>
                <StyledTableCell style={{ width: "30%" }}>
                  200,000
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  <button className="bg-pendingbg h-[30px] w-[80%] rounded-full text-pendingtext font-semibold text-[9px]">
                    Awaiting
                  </button>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell style={{ width: "20%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  TYPE A
                </StyledTableCell>
                <StyledTableCell style={{ width: "30%" }}>
                  200,000
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  <button className="bg-failedbg h-[30px] w-[80%] rounded-full text-failedtext font-semibold text-[9px]">
                    Declined
                  </button>
                </StyledTableCell>
              </StyledTableRow> */}
            </TableBody>
          </Table>
        </TableContainer>
      ) : audit ? (
        <TableContainer
          // component={Paper}
          style={{ boxShadow: "none" }}
        >
          <Table
            sx={{ minWidth: 700, tableLayout: "auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={{ paddingRight: "0px" }}>
                <StyledTableCell style={{ width: "20%" }}>
                  DATE & TIME
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>USER</StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  ACTION
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  DEVICE USED
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  BROWSER USED
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item) => (
                <StyledTableRow>
                  <StyledTableCell style={{ width: "20%" }}>
                    <Moment>{item?.created_on}</Moment>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    {item?.user}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    {item?.action}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    {item?.system}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    {item?.browser}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              {/* <StyledTableRow>
                <StyledTableCell style={{ width: "20%" }}>
                  12/04/1975 09:11:04
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Create User
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Macbook Pro 2020
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Chrome
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell style={{ width: "20%" }}>
                  12/04/1975 09:11:04
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Create User
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Macbook Pro 2020
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  Chrome
                </StyledTableCell>
              </StyledTableRow> */}
            </TableBody>
          </Table>
        </TableContainer>
      ) : airtime ? (
        <TableContainer
          // component={Paper}
          style={{ boxShadow: "none" }}
        >
          <Table
            sx={{ minWidth: 700, tableLayout: "auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={{ paddingRight: "0px" }}>
                <StyledTableCell style={{ width: "10%" }}>
                  DATE CREATED
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  SENDER'S NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  SENDER'S ID
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  BENEFICIARY'S NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  SERVICE PROVIDER
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  AMOUNT
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  TRANSACTION ID
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  STATUS
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item) => (
                <StyledTableRow>
                  <StyledTableCell style={{ width: "10%" }}>
                    <Moment format="YYYY-MM-DD">{item?.dateCreated}</Moment>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {`${item?.user?.firstName} ${item?.user?.lastName}`}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.phoneNumber}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    ----------
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.network}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.amount}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.reference}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.status !== "failed" ? (
                      <button className="bg-successbg h-[30px] w-[100%] rounded-full text-successtext font-semibold text-[9px]">
                        Successful
                      </button>
                    ) : (
                      <button className="bg-red-500 h-[30px] w-[100%] rounded-full text-red-300 font-semibold text-[9px]">
                        Failed
                      </button>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              {/* <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  AIRTEL
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  200,000
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  WOFUFHKKDDL099
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  <button className="bg-pendingbg h-[30px] w-[100%] rounded-full text-pendingtext font-semibold text-[9px]">
                    Pending
                  </button>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  ETISALAT
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  200,000
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  WOFUFHKKDDL099
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  <button className="bg-pendingbg h-[30px] w-[100%] rounded-full text-pendingtext font-semibold text-[9px]">
                    Pending
                  </button>
                </StyledTableCell>
              </StyledTableRow> */}
            </TableBody>
          </Table>
        </TableContainer>
      ) : overview ? (
        <TableContainer
          // component={Paper}
          style={{ boxShadow: "none" }}
        >
          <Table
            sx={{ minWidth: 700, tableLayout: "auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={{ paddingRight: "0px" }}>
                <StyledTableCell style={{ width: "10%" }}>S/N</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  ACCOUNT NUMBER
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  FULL NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  EMAIL
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  PHONE NUMBER
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  DATE OF BIRTH
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  DATE JOINED
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item) => (
                <StyledTableRow>
                  <StyledTableCell style={{ width: "10%" }}>1</StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    ----
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.full_name}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    -----
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.phoneNumber}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <Moment format="DD-MM-YYYY">{item?.dob}</Moment>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <Moment format="DD-MM-YYYY">{item?.dateCreated}</Moment>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    <button
                      onClick={() => navigate("/customers/:id")}
                      className="h-[30px] w-[100%] border border-none text-button-bg font-semibold text-[9px]"
                    >
                      View
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              {/* <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>2</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  0124890900
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  AL-AMEEN SODIQ
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  alameensodiq@yahoo.com
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/2003
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  <button
                    onClick={() => navigate("/customers/:id")}
                    className="h-[30px] w-[100%] border border-none text-button-bg font-semibold text-[9px]"
                  >
                    View
                  </button>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>3</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  0124890900
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  AL-AMEEN SODIQ
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  alameensodiq@yahoo.com
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/2003
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  <button
                    onClick={() => navigate("/customers/:id")}
                    className="h-[30px] w-[100%] border border-none text-button-bg font-semibold text-[9px]"
                  >
                    View
                  </button>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>4</StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  0124890900
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  AL-AMEEN SODIQ
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  alameensodiq@yahoo.com
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/2003
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  <button
                    onClick={() => navigate("/customers/:id")}
                    className="h-[30px] w-[100%] border border-none text-button-bg font-semibold text-[9px]"
                  >
                    View
                  </button>
                </StyledTableCell>
              </StyledTableRow> */}
            </TableBody>
          </Table>
        </TableContainer>
      ) : investmentstypes ? (
        <TableContainer
          // component={Paper}
          style={{ boxShadow: "none" }}
        >
          <Table
            sx={{ minWidth: 700, tableLayout: "auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={{ paddingRight: "0px" }}>
                <StyledTableCell style={{ width: "20%" }}>ID</StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>NAME</StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  DURATION
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  DATE CREATED
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  STATUS
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item) => (
                <StyledTableRow>
                  <StyledTableCell
                    className="text-dob"
                    style={{ width: "20%" }}
                  >
                    {item?.id}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    {item?.name}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    ----
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    <Moment format="DD/MM/YY">{item?.dateCreated}</Moment>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    {/* {item?.status === "running" ? (
                      <button
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          height: "100%",
                          background: "#8a8a7d",
                          color: "#e6df19",
                          gap: "6px",
                          borderRadius: "6px"
                        }}
                      >
                        <span
                          style={{
                            background: "#e5e999",
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%"
                          }}
                        ></span>{" "}
                        Pending
                      </button>
                    ) : (
                      <button
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          height: "100%",
                          background: "#ECFDF3",
                          color: "#027A48",
                          gap: "6px",
                          borderRadius: "6px"
                        }}
                      >
                        <span
                          style={{
                            background: "#027A48",
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%"
                          }}
                        ></span>{" "}
                        Active
                      </button>
                    )} */}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : investmentspackages ? (
        <TableContainer
          // component={Paper}
          style={{ boxShadow: "none" }}
        >
          <Table
            sx={{ minWidth: 700, tableLayout: "auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={{ paddingRight: "0px" }}>
                <StyledTableCell style={{ width: "10%" }}>
                  PACKAGE ID
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  INVESTMENT TYPE
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  DURATION
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  AMOUNT(N)
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  INTEREST(P.A)
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  DATE CREATED
                </StyledTableCell>
                <StyledTableCell style={{ width: "20%" }}>
                  STATUS
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item) => (
                <StyledTableRow>
                  <StyledTableCell
                    className="text-dob"
                    style={{ width: "10%" }}
                  >
                    {item?.id}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    {item?.name}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    ----
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.amountFrom}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>--</StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    <Moment format="DD/MM/YY">{item?.dateCreated}</Moment>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "20%" }}>
                    {/* {item?.status === "running" ? (
                      <button
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          height: "100%",
                          background: "#8a8a7d",
                          color: "#e6df19",
                          gap: "6px",
                          borderRadius: "6px"
                        }}
                      >
                        <span
                          style={{
                            background: "#e5e999",
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%"
                          }}
                        ></span>{" "}
                        Pending
                      </button>
                    ) : (
                      <button
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          height: "100%",
                          background: "#ECFDF3",
                          color: "#027A48",
                          gap: "6px",
                          borderRadius: "6px"
                        }}
                      >
                        <span
                          style={{
                            background: "#027A48",
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%"
                          }}
                        ></span>{" "}
                        Active
                      </button>
                    )} */}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : cables ? (
        <TableContainer
          // component={Paper}
          style={{ boxShadow: "none" }}
        >
          <Table
            sx={{ minWidth: 700, tableLayout: "auto" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow style={{ paddingRight: "0px" }}>
                <StyledTableCell style={{ width: "10%" }}>
                  DATE CREATED
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  SENDER'S NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  SENDER'S ID
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  BENEFICIARY'S NAME
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  SERVICE PROVIDER
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  AMOUNT
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  TRANSACTION ID
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  STATUS
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item) => (
                <StyledTableRow>
                  <StyledTableCell style={{ width: "10%" }}>
                    <Moment format="YYYY-MM-DD">{item?.dateCreated}</Moment>
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {`${item?.user?.firstName} ${item?.user?.lastName}`}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.phoneNumber}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    ----------
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.network}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.amount}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "15%" }}>
                    {item?.reference}
                  </StyledTableCell>
                  <StyledTableCell style={{ width: "10%" }}>
                    {item?.status !== "failed" ? (
                      <button className="bg-successbg h-[30px] w-[100%] rounded-full text-successtext font-semibold text-[9px]">
                        Successful
                      </button>
                    ) : (
                      <button className="bg-red-500 h-[30px] w-[100%] rounded-full text-red-300 font-semibold text-[9px]">
                        Failed
                      </button>
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
              {/* <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  AIRTEL
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  200,000
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  WOFUFHKKDDL099
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  <button className="bg-pendingbg h-[30px] w-[100%] rounded-full text-pendingtext font-semibold text-[9px]">
                    Pending
                  </button>
                </StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell style={{ width: "10%" }}>
                  12/04/1975
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  07057007046
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  Al-ameen Sodiq
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  ETISALAT
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  200,000
                </StyledTableCell>
                <StyledTableCell style={{ width: "15%" }}>
                  WOFUFHKKDDL099
                </StyledTableCell>
                <StyledTableCell style={{ width: "10%" }}>
                  <button className="bg-pendingbg h-[30px] w-[100%] rounded-full text-pendingtext font-semibold text-[9px]">
                    Pending
                  </button>
                </StyledTableCell>
              </StyledTableRow> */}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        ""
      )}
    </div>
  );
};

export default Tables;
