import React from "react";
import './index.scss';

import BasicLayout from "../Layouts/BasicLayout";
import Profile from '../components/Profile/Profile';
import AboutMe from "../components/Profile/AboutMe";
import Seo from "../components/Seo/Seo";

export default function Index(){
  return(
    <BasicLayout>
      <Seo title="Inicio"/>
      <Profile></Profile>
      <AboutMe></AboutMe>
    </BasicLayout>
  );
}