import React, {Component} from "react";
import axios from 'axios';
import Cookie from "js-cookie"





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
            <a id="home" href="#"><span data-hover="Home">Home</span></a>
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
      <div class="home">
        <div class="menu">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <h1>IUS Pre-Registration system</h1>
        <div class="developers">
          <h2>Developed by:</h2>
          <p class="devP">
            <span>Adem Dugalić,</span>
            <span>Axel Stefanini,</span>
            <span>Lejla Mujakić,</span>
            <span>Tarik Muharem,</span>
            <span>Zinedin Hadžajlija</span>
          </p>
        </div>
      </div>
    </div>
  </div>

)}