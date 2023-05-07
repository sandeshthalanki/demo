import React, { useState } from 'react'
import MaterialTable, { Column } from "@material-table/core";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const empList = [
    { id: 1, macroarea: "Trento", servicetype: 'FTTC', f1a: 5, f1u: 3,f2a: 2,f2u: 0,f3a: 6,f3u: 0,f4a: 1,f4u:1  },
    { id: 2, macroarea: "Milan", servicetype: 'FTTH', f1a: 3, f1u: 3,f2a: 2,f2u: 1,f3a: 6,f3u: 5,f4a: 1,f4u:0  },
    { id: 3, macroarea: "Cles", servicetype: 'FTTC', f1a: 4, f1u: 3,f2a: 2,f2u: 2,f3a: 6,f3u: 6,f4a: 1,f4u:1 },
    { id: 4, macroarea: "Pejo", servicetype: 'FTTH', f1a: 5, f1u: 3,f2a: 2,f2u: 0,f3a: 6,f3u: 5,f4a: 1,f4u:0 }
  ]


  const columns = [
    { title: "Macroarea", field: "macroarea" },
    { title: "Servicetype", field: "servicetype" },
    { title: "F1 Used", field: "f1u"},
    { title: "F1 Aval", field: 'f1a', render: rowData=>{ return rowData.f1a - rowData.f1u < 1 ? <p style={{ backgroundColor: "red", fontWeight: "bold" , color:"white",textAlign: "center" }}>{rowData.f1a}</p>  : <p style={{ backgroundColor: "green", fontWeight: "bold",color:"white" ,textAlign: "center" }}>{rowData.f1a}</p> } },
    { title: "F2 Used", field: "f2u", },
    { title: "F2 Aval", field: 'f2a', render: rowData=>{ return rowData.f2a - rowData.f2u < 1 ? <p style={{ backgroundColor: "red", fontWeight: "bold" , color:"white",textAlign: "center" }}>{rowData.f2a}</p>  : <p style={{ backgroundColor: "green", fontWeight: "bold",color:"white" ,textAlign: "center" }}>{rowData.f2a}</p> }},
    { title: "F3 Used", field: "f3u", },
    { title: "F3 Aval", field: 'f3a', render: rowData=>{ return rowData.f3a - rowData.f3u < 1 ? <p style={{ backgroundColor: "red", fontWeight: "bold" , color:"white",textAlign: "center" }}>{rowData.f3a}</p>  : <p style={{ backgroundColor: "green", fontWeight: "bold",color:"white" ,textAlign: "center" }}>{rowData.f3a}</p> }},
    { title: "F4 Used", field: "f4u", },
    { title: "F4 Aval", field: 'f4a', render: rowData=>{ return rowData.f4a - rowData.f4u < 1 ? <p style={{ backgroundColor: "red", fontWeight: "bold" , color:"white",textAlign: "center" }}>{rowData.f4a}</p>  : <p style={{ backgroundColor: "green", fontWeight: "bold",color:"white" ,textAlign: "center" }}>{rowData.f4a}</p> }}
  ]


const DashboardTable = () => {

    const [data, setData] = useState(empList) 
  return (
    <div>
        <MaterialTable
        title="Slot Data"
        data={data}
        columns={columns}
        components={{
          Header: props => {
            return (
              <TableHead>
                <TableRow>
                  <TableCell rowSpan={2} align="center">
                    Macroarea
                  </TableCell>
                  <TableCell rowSpan={2} align="center" whiteSpace="normal" wordWrap="break-word">
                  Campagna Appuntamenti
                  </TableCell>
                  <TableCell colSpan={2} align="center">
                    F1
                  </TableCell>
                  <TableCell colSpan={2} align="center">
                    F2
                  </TableCell>
                  <TableCell colSpan={2} align="center">
                    F3
                  </TableCell>
                  <TableCell colSpan={2} align="center">
                    F4
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2} align="center">8:30-10:30</TableCell>
                  <TableCell colSpan={2} align="center">10:30-12:30</TableCell>
                  <TableCell colSpan={2} align="center">14:30-16:30</TableCell>
                  <TableCell colSpan={2} align="center">16:30-18:30</TableCell>
                </TableRow>
              </TableHead>
            );
          },
          Row: ({ data }) => {
            return (
              <TableRow>
                <TableCell align="center">{data.macroarea}</TableCell>
                <TableCell align="center">{data.servicetype}</TableCell>
                <TableCell align="right">{data.f1u} /</TableCell>
                <TableCell align="left"><p style={data.f1a - data.f1u < 1 ? { backgroundColor: "red", fontWeight: "bold" , color:"white",textAlign: "center" } : { backgroundColor: "green", fontWeight: "bold",color:"white" ,textAlign: "center" }}>{data.f1a}</p></TableCell>
                <TableCell align="right">{data.f2u} /</TableCell>
                <TableCell align="left"><p style={data.f2a - data.f2u < 1 ? { backgroundColor: "red", fontWeight: "bold" , color:"white",textAlign: "center" } : { backgroundColor: "green", fontWeight: "bold",color:"white" ,textAlign: "center" }}>{data.f2a}</p></TableCell>
                <TableCell align="right">{data.f3u} /</TableCell>
                <TableCell align="left"><p style={data.f3a - data.f3u < 1 ? { backgroundColor: "red", fontWeight: "bold" , color:"white",textAlign: "center" } : { backgroundColor: "green", fontWeight: "bold",color:"white" ,textAlign: "center" }}>{data.f3a}</p></TableCell>
                <TableCell align="right">{data.f4u} /</TableCell>
                <TableCell align="left"><p style={data.f4a - data.f4u < 1 ? { backgroundColor: "red", fontWeight: "bold" , color:"white",textAlign: "center" } : { backgroundColor: "green", fontWeight: "bold",color:"white" ,textAlign: "center" }}>{data.f4a}</p></TableCell>
              </TableRow>
            );
          }
        }} 
        />
    </div>
  )
}

export default DashboardTable