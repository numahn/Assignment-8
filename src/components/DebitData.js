import React, { Fragment } from "react";

export default function DebitData({ data }) {
  //Needed below, page will not load
  if (data === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {data.map((element) => {
        return (
          <tbody key={element.id}>
            <tr>
              <th scope="row">{element.description}</th>
              <td>
                <span>{element.amount}</span>
              </td>
              <td>
                <span>{element.date.substr(0, element.date.indexOf('T'))}</span>
              </td>
            </tr>
          </tbody>
        );
      })}
    </>
  );
}
