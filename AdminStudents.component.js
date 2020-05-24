import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import Cookie from "js-cookie";
import "C:/Users/USER/Desktop/online_enrollment-master/src/css/style.css";
import "C:/Users/USER/Desktop/online_enrollment-master/src/css/main.css";
import "C:/Users/USER/Desktop/online_enrollment-master/src/css/util.css";




render() ;{
    return (<div class="outerWrapper">
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
            <a id="AddCourses" href="#"
              ><span data-hover="AddCourses">Students</span></a
            >
            <a id="AddCourses" href="adminStatistics.html"
              ><span data-hover="AddCourses">Statistics</span></a
            >
          </div>
        </div>
        <div class="divider"></div>
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
            <a class="blueBorder" id="marginZero" href="addCourses.html"
              >All Students</a
            >
          </div>
        </div>
        <div class="allCourses" id="allCourses">
          <table class="courses">
            <tbody>
              <tr class="info">
                <td>ID</td>
                <td>Student Name</td>
                <td>Faculty</td>
                <td>Program</td>
                <td>Delete</td>
                <td>Edit</td>
              </tr>
              <tr>
                <td class="title">170302071</td>
                <td>Adem Dugalić</td>
                <td>FENS</td>
                <td>CSE</td>
                <td>
                  <div class="button"><button>Delete</button></div>
                </td>
                <td>
                  <div class="button"><button>Edit</button></div>
                </td>
              </tr>
              <tr>
                <td class="title">#######</td>
                <td>Axel Stefanini</td>
                <td>FENS</td>
                <td>CSE</td>
                <td>
                  <div class="button"><button>Delete</button></div>
                </td>
                <td>
                  <div class="button"><button>Edit</button></div>
                </td>
              </tr>
              <tr>
                <td class="title">170302###</td>
                <td>Lejla Mujakić</td>
                <td>FENS</td>
                <td>SE</td>
                <td>
                  <div class="button"><button>Delete</button></div>
                </td>
                <td>
                  <div class="button"><button>Edit</button></div>
                </td>
              </tr>
              <tr>
                <td class="title">170302022</td>
                <td>Tarik Muharem</td>
                <td>FENS</td>
                <td>SE</td>
                <td>
                  <div class="button"><button>Delete</button></div>
                </td>
                <td>
                  <div class="button"><button>Edit</button></div>
                </td>
              </tr>
              <tr>
                <td class="title">170302###</td>
                <td>Zinedin Hadžajlija</td>
                <td>FENS</td>
                <td>SE</td>
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
  </div> )}