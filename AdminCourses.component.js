import React, { Component } from "react";
import "C:/Users/USER/Desktop/online_enrollment-master/src/css/style.css";
import Cookie from "js-cookie";

export default class AdminCourses extends Component {
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
};


render() ;{
    return (
    
    <div class="outerWrapper">
    <div class="wrapper">
      <nav class="navigation">
        <div class="logo">
          <img class="ius" src="img/IUSlogo2.png" />
          <span class="user">Administrator</span>
        </div>
        <div class="upButtons">
          <div class="links">
            <a id="home" href="adminHome.html"
              ><span data-hover="Home">Home</span></a
            >
            <a id="MyCourses" href="adminCourses.html"
              ><span data-hover="MyCourses">Courses</span></a
            >
            <a id="AddCourses" href="adminStudents.html"
              ><span data-hover="AddCourses">Students</span></a
            >
            <a id="AddCourses" href="adminStatistics.html"
              ><span data-hover="AddCourses">Statistics</span></a
            >
          </div>
        </div>
        <div class="divider"></div>-->
        <div class="downButtons">
          <div class="links">
            <a id="LogOut" href="#"
              ><span data-hover="LogOut">Log Out</span></a
            >
          </div>
        </div>
      </nav>
      <div class="addCourses">
        <div class="menu">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <div class="upperNav">
          <div class="search">
            <form class="searchForm">
              <input type="search" name="search" placeholder="Search" />
            </form>
            <button class="magnifier">
              <img src="../img/magnifier.png" class="manifierImg" />
            </button>
          </div>
          <div class="prevNext">
            
          </div>
        </div>
        <div class="addCoursesDownNav">
          <div class="typeOfCourses">
            <a class="blueBorder" id="marginZero" href="#">All courses</a>
          </div>
        </div>
        <div class="allCourses" id="allCourses">
          <table class="courses">
            <tbody>
              <tr class="info">
                <td>Course Code</td>
                <td>Course Name</td>
                <td>Credit</td>
                <td>Proffesor</td>
                <td>Prerequisites</td>
                <td>Delete</td>
                <td>Edit</td>
              </tr>
              <tr>
                <td class="title">CS103</td>
                <td>Introduction to Programming</td>
                <td>3 | 6</td>
                <td>Džejla Međedović</td>
                <td>None</td>
                <td>
                  <div class="button"><button>Delete</button></div>
                </td>
                <td>
                  <div class="button"><button>Edit</button></div>
                </td>
              </tr>
              <tr>
                <td class="title">ELIT100</td>
                <td>Academic English and Effective Communication</td>
                <td>3 | 6</td>
                <td>Elmedin Zubović</td>
                <td>None</td>
                <td>
                  <div class="button"><button>Delete</button></div>
                </td>
                <td>
                  <div class="button"><button>Edit</button></div>
                </td>
              </tr>
              <tr>
                <td class="title">MATH101</td>
                <td>Calculus I</td>
                <td>3 | 6</td>
                <td>Lejla Miller</td>
                <td>None</td>
                <td>
                  <div class="button"><button>Delete</button></div>
                </td>
                <td>
                  <div class="button"><button>Edit</button></div>
                </td>
              </tr>
              <tr>
                <td class="title">NS112</td>
                <td>Understanding Science and Technology</td>
                <td>1.5 | 3</td>
                <td>Asif Šabanović</td>
                <td>None</td>
                <td>
                  <div class="button"><button>Delete</button></div>
                </td>
                <td>
                  <div class="button"><button>Edit</button></div>
                </td>
              </tr>
              <tr>
                <td class="title">PSY103</td>
                <td>Introduction to Psychology</td>
                <td>3 | 6</td>
                <td>Bojan Šošić</td>
                <td>None</td>
                <td>
                  <div class="button"><button>Delete</button></div>
                </td>
                <td>
                  <div class="button"><button>Edit</button></div>
                </td>
              </tr>
              <tr>
                <td class="title">TURK111</td>
                <td>Spoken Turkish I</td>
                <td>1.5 | 3</td>
                <td>Minela Sinanović</td>
                <td>None</td>
                <td>
                  <div class="button"><button>Delete</button></div>
                </td>
                <td>
                  <div class="button"><button>Edit</button></div>
                </td>
              </tr>
              <tr>
                <td class="title">MATH201</td>
                <td>Linear Algebra</td>
                <td>3 | 6</td>
                <td>Mehmet Can</td>
                <td>MATH101</td>
                <td>
                  <div class="button"><button>Delete</button></div>
                </td>
                <td>
                  <div class="button"><button>Edit</button></div>
                </td>
              </tr>
              <tr>
                <td class="title">PSY103</td>
                <td>Introduction to Psychology</td>
                <td>3 | 6</td>
                <td>Bojan Šošić</td>
                <td>None</td>
                <td>
                  <div class="button"><button>Delete</button></div>
                </td>
                <td>
                  <div class="button"><button>Edit</button></div>
                </td>
              </tr>
              <tr>
                <td class="title">TURK111</td>
                <td>Spoken Turkish I</td>
                <td>1.5 | 3</td>
                <td>Minela Sinanović</td>
                <td>None</td>
                <td>
                  <div class="button"><button>Delete</button></div>
                </td>
                <td>
                  <div class="button"><button>Edit</button></div>
                </td>
              </tr>
              <tr>
                <td class="title">MATH201</td>
                <td>Linear Algebra</td>
                <td>3 | 6</td>
                <td>Mehmet Can</td>
                <td>MATH101</td>
                <td>
                  <div class="button"><button>Delete</button></div>
                </td>
                <td>
                  <div class="button"><button>Edit</button></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
