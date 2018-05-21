import React from 'react'
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'


export const DynamicTable = ({ headers, data }) =>
  <div>
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((h,i) =>
            <TableHeaderColumn key={i}>{h.name}</TableHeaderColumn>)}
        </TableRow>
      </TableHeader>
      <TableBody>
        { data.map(function(item, i) { return (
          <TableRow key={i}>
            <TableRowColumn>{item.name}</TableRowColumn>
            <TableRowColumn><div><img src={item.image_url} alt={item.name} /></div></TableRowColumn>
            <TableRowColumn>{item.score}</TableRowColumn>
            <TableRowColumn>{item.score}</TableRowColumn>
          </TableRow>
        )})}
      </TableBody>
    </Table>
  </div>