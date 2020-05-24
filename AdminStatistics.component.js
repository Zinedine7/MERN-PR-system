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
            <a id="AddCourses" href="adminStudents.html"
              ><span data-hover="AddCourses">Students</span></a
            >
            <a id="AddCourses" href="#"
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
              >Statistics</a
            >
          </div>
        </div>
        <div class="Statistics">
          <div class="cards">
            <div class="courseCard">
              <span class="cardId">CS308</span>
              <span class="cardName" id="Border">Software Engineering</span>
              <span class="cardProfessor">Kanita Hadžiabdić</span>
            </div>
            <div class="courseCard">
              <span class="cardId">ELIT200</span>
              <span class="cardName" id="Border"
                >Critical reading and writting</span
              >
              <span class="cardProfessor">Lamija Lagundžija</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)} 