import React, { Component } from "react";
import "C:/Users/USER/Desktop/online_enrollment-master/src/css/style.css";
import Cookie from "js-cookie";

/*const tableStyle = {
    'paddingLeft': '50px',
    'paddingRight': '50px'
};

const buttonStyle = {
    'padding': '20px'
};*/

export default class Courses extends Component {
  constructor(props) {
    super(props);

    this.updateTable = this.updateTable.bind(this);
    this.setPage = this.setPage.bind(this);

    this.state = {
      data: [],
      page: 1,
      nbOfPage: -1,
      buttonsGroup: [],
    };
  }

  //Right before anything load the page this is called
  async componentDidMount() {
    await this.updateTable();
  }

  async updateTable() {
    const response = await fetch(
      "http://localhost:5000/courses?page=" +
        this.state.page +
        "&token=" +
        Cookie.get("token") +
        "&userId=" +
        Cookie.get("userId")
    );
    const res = await response.json();

    console.log(res);
    let nbOfPage = res.nbOfPage;

    let btns = [];
    let start;
    if (this.state.page <= 1) start = 1;
    else if (nbOfPage > 0 && this.state.page >= nbOfPage) start = nbOfPage - 2;
    else start = this.state.page - 1;

    for (let i = start; i < start + 3; i++) {
      btns.push(i);
    }

    this.setState({
      buttonsGroup: btns,
      data: res.array,
      nbOfPage: nbOfPage,
    });
  }

  setPage(page) {
    //TODO: remove the ugly animation of the button when you click on it
    console.log("Select page: " + page);
    this.state.page = page; //Manual change because we don't care and are thugs
    this.updateTable();
  }

  render() {
    return (
      <div className="addCourses">
        <div className="menu">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className="upperNav">
          <div className="search">
            <form className="searchForm">
              <input type="search" name="search" placeholder="Search" />
            </form>
            <button className="magnifier">
              <img src="../img/magnifier.png" className="manifierImg" />
            </button>
          </div>
          <div className="prevNext">
            <button> P </button>
            <button> N </button>
          </div>
        </div>
        <div className="addCoursesDownNav">
          <div className="typeOfCourses">
            <a className="blueBorder" href="addCourses.html">
              All courses
            </a>
            <a href="mandatoryCourses.html">Mandatory courses</a>
            <a href="electiveCourses.html">Elective courses</a>
          </div>
        </div>
        <div className="allCourses" id="allCourses">
          <table className="courses">
            <tbody>
              <tr className="info">
                <td>Course Code</td>
                <td>Course Name</td>
                <td>Credit</td>
                <td>Proffesor</td>
                <td>Prerequisites</td>
                <td>Add course</td>
              </tr>
              <tr>
                <td className="title">CS103</td>
                <td>Introduction to Programming</td>
                <td>3 | 6</td>
                <td>Džejla Međedović</td>
                <td>None</td>
                <td>
                  <div className="button">
                    <button>Add Course</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="title">ELIT100</td>
                <td>Academic English and Effective Communication</td>
                <td>3 | 6</td>
                <td>Elmedin Zubović</td>
                <td>None</td>
                <td>
                  <div className="button">
                    <button>Add Course</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="title">MATH101</td>
                <td>Calculus I</td>
                <td>3 | 6</td>
                <td>Lejla Miller</td>
                <td>None</td>
                <td>
                  <div className="button">
                    <button>Add Course</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="title">NS112</td>
                <td>Understanding Science and Technology</td>
                <td>1.5 | 3</td>
                <td>Asif Šabanović</td>
                <td>None</td>
                <td>
                  <div className="button">
                    <button>Add Course</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="title">PSY103</td>
                <td>Introduction to Psychology</td>
                <td>3 | 6</td>
                <td>Bojan Šošić</td>
                <td>None</td>
                <td>
                  <div className="button">
                    <button>Add Course</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="title">TURK111</td>
                <td>Spoken Turkish I</td>
                <td>1.5 | 3</td>
                <td>Minela Sinanović</td>
                <td>None</td>
                <td>
                  <div className="button">
                    <button>Add Course</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="title">MATH201</td>
                <td>Linear Algebra</td>
                <td>3 | 6</td>
                <td>Mehmet Can</td>
                <td>MATH101</td>
                <td>
                  <div className="button">
                    <button>Add Course</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="title">PSY103</td>
                <td>Introduction to Psychology</td>
                <td>3 | 6</td>
                <td>Bojan Šošić</td>
                <td>None</td>
                <td>
                  <div className="button">
                    <button>Add Course</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="title">TURK111</td>
                <td>Spoken Turkish I</td>
                <td>1.5 | 3</td>
                <td>Minela Sinanović</td>
                <td>None</td>
                <td>
                  <div className="button">
                    <button>Add Course</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="title">MATH201</td>
                <td>Linear Algebra</td>
                <td>3 | 6</td>
                <td>Mehmet Can</td>
                <td>MATH101</td>
                <td>
                  <div className="button">
                    <button>Add Course</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
