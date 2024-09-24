import './parkEnt.css';
import React, { useState, useEffect } from 'react';

function ParkEnt() {
  const [adul, setAdul] = useState(null);
  const [chil, setChil] = useState(null);
  const [f1, setF1] = useState(null);
  const [f2, setF2] = useState(null);
  const [tot, setTot] = useState(null);
  const [paid, setPaid] = useState(null);
  const [rem, setRem] = useState(null);

  // Calculate adult fees whenever the adult count changes
  useEffect(() => {
    setF1(adul * 100);
  }, [adul]);

  // Calculate child fees whenever the child count changes
  useEffect(() => {
    setF2(chil * 50);
  }, [chil]);

  // Calculate total whenever fees change
  useEffect(() => {
    setTot(f1 + f2);
  }, [f1, f2]);

  // Calculate remaining amount whenever total or paid amount changes
  useEffect(() => {
    setRem(paid - tot);
  }, [paid, tot]);

  return (
    <center>
      <div id="bord">
        <h2 id="head">PARK ENTRANCE</h2>
        <table>
          <div id="soor">
            <tr>
              <td>
                <label>Adult</label>
              </td>
              <td>
                <input
                  type="number"
                  value={adul}
                  id="yes"
                  onChange={(e) => setAdul(parseInt(e.target.value) || 0)}
                />
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <label>Child</label>
              </td>
              <td>
                <input
                  type="number"
                  value={chil}
                  id="yes"
                  onChange={(e) => setChil(parseInt(e.target.value) || 0)}
                />
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <label>Fees of adult is 100</label>
              </td>
              <td>
                <input type="number" value={f1} id="yes" readOnly />
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <label>Fees of child is 50</label>
              </td>
              <td>
                <input type="number" value={f2} id="yes" readOnly />
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <label>Total</label>
              </td>
              <td>
                <input type="number" id="yes" value={tot} readOnly />
              </td>
            </tr>
            <br />
            <tr id="text">please enter the amount you have</tr>
            <br />
            <tr>
              <td>
                <label>Paid</label>
              </td>
              <td>
                <input
                  type="number"
                  id="yes"
                  value={paid}
                  onChange={(e) => setPaid(parseInt(e.target.value) || 0)}
                />
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <label>Balance</label>
              </td>
              <td>
                <input type="number" id="yes" value={rem} readOnly />
              </td>
            </tr>
          </div>
        </table>
      </div>
    </center>
  );
}

export default ParkEnt;
