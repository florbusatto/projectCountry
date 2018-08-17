import React from 'react';
import '../list.css';

//Componente representacional para para renderizar List.
export const List = (props) =>
  <div className='List'>
    <table>
                <tr>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Country</th>
                  <th>Birthday</th>
                </tr>

    {props.list.map(item=>
                  
                <tr>
                  <td>{item.name}</td>
                  <td>{item.surname}</td>
                  <td>{item.country}</td>
                  <td>{item.birthday}</td>
                </tr>
              )}
    </table>
  </div>
