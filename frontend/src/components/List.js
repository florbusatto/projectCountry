import React from 'react';
import '../css/list.css';

export const List = (props) =>
  <div className='mainList'>
    <table>

                <tr>

                  <th>Name</th>

                  <th>Country</th>

                  <th>Birthday</th>

                </tr>

    {props.list.map(item=>
                  <tr>

                      <td>{item.name} {item.surname}</td>

                      <td>{item.country}</td>

                      <td>{item.birthday}</td>

                  </tr>
                )}
    </table>
  </div>

