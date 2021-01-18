import React from "react";
import './index.scss';

import BasicLayout from "../Layouts/BasicLayout";
import Profile from '../components/Profile/Profile';
import AboutMe from "../components/Profile/AboutMe";

export default function Index(){
  return(
    <BasicLayout>
      <Profile></Profile>
      <AboutMe></AboutMe>
    </BasicLayout>
  );
}