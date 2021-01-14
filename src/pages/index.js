import React from "react";
import './index.scss';

import BasicLayout from "../Layouts/BasicLayout";
import Profile from '../components/Profile/Profile';

export default function Index(){
  return(
    <BasicLayout>
      <Profile></Profile>
      <h1 className="title">Hola Index</h1>
    </BasicLayout>
  );
}