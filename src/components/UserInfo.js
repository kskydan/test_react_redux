import React from "react";

class UserInfo extends React.Component {
  render() {

    var { address, company, email, name, phone, username, website } = this.props.user
    var { city, street, suite, zipcode } = address
    var companyName = company.name

    return (
      <div className="panel panel-primary">
        <div className="panel-heading"><span className="glyphicon glyphicon-user"></span>  {name} </div>
        <div className="panel-body">
          <div>
            <table className="table table-user-information">
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td>Username:</td>
                  <td>{username}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td><a href={"mailto:" + email}>{email}</a></td>
                </tr>
                <tr>
                  <td>Website:</td>
                  <td><a href={"http://" + website} target="blank">{website}</a></td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>{phone}</td>
                </tr>
                <tr>
                  <td>Company:</td>
                  <td>{companyName}</td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>{zipcode}<br />{city}<br />{street}<br />{suite}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default UserInfo