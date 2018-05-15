import React from "react";
import { Router, Scene } from "react-native-router-flux";

import BoasVindas from "../src/components/BoasVindas";
import FormSearch from '../src/components/FormSearch';

export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#ff0000' }} titleStyle={{ alignSelf: 'center', color: '#fff' }}>
        <Scene key="root">
            <Scene Key="boasVindas" component={BoasVindas} title="Bem vindo" hideNavBar={true}/>
            <Scene Key="formSearch" component={FormSearch} title="Pesquisar" hideNavBar={false}/>
        </Scene>
    </Router>
);