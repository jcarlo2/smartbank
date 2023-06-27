import React from "react";

const AccountManagement = () => {
  return (
    <div className="account-management-container">
      <div className="overview">
        <h1>Account Overview</h1>
        <input type="button" value="Create New Account" />
        <div className="overview-table">
          <table className="table">
            <thead>
              <tr>
                <th>Account Id</th>
                <th>Balance</th>
                <th>Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100000000-A15</td>
                <td>&#8369; 9999999.00</td>
                <td>CHECKING</td>
                <td>Active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="history">
        <h1>Account Transaction History</h1>
        <div>
          <select>
            <option value="All">All</option>
            <option value="1000000-A15">1000000-A15</option>
          </select>
          <div>
            <span></span>
            <label>
              Page:
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </label>
            <span></span>
          </div>
        </div>
        <div className="history-table">
          <table className="table">
            <thead>
              <tr>
                <th className="py-10">Transaction Id</th>
                <th>Account Id</th>
                <th className="py-10">Amount</th>
                <th className="py-10">Date</th>
                <th>Type</th>
                <th>Account</th>
                <th>Balance</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-10">100000AB123</td>
                <td>10000000-A15</td>
                <td className="py-10">
                  &#8369; 9,999,999.99999999999999999999999999999
                </td>
                <td className="py-10">06-26-2023 15:00:00</td>
                <td>PAYMENT</td>
                <td>CHECKING</td>
                <td>&#8369; 10,000.00</td>
                <td>COMPLETED</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="personal">
        <h1>Personal Information</h1>
        <section>
          <label>
            <span>Account Id</span>
            <input type="text" readOnly placeholder="Account Id" />
          </label>

          <label>
            <span>First Name</span>
            <input type="text" readOnly placeholder="First Name" />
          </label>

          <label>
            <span>Last Name</span>
            <input type="text" readOnly placeholder="Last Name" />
          </label>

          <label>
            <span>Email</span>
            <input type="text" readOnly placeholder="Email" />
          </label>

          <label>
            <span>Permanent Address</span>
            <input type="text" readOnly placeholder="Permanent Address" />
          </label>

          <label>
            <span>Current Address</span>
            <input type="text" readOnly placeholder="Current Address" />
          </label>

          <label>
            <span>Contact Number</span>
            <input type="text" readOnly placeholder="Contact Number" />
          </label>
          <label>
            <span>Is Verified?</span>
            <input type="checkbox" checked readOnly />
          </label>
          <input type="button" defaultValue={"Update"} />
        </section>
        <h2>Verified Documents</h2>
        <ul>
          <li>Document.docx - <span>Verified</span></li>
          <li>TIN.jpg - <span>Invalid</span></li>
          <li>Signature.jpg - <span>Pending</span></li>
        </ul>
      </div>
    </div>
  );
};

export default AccountManagement;
