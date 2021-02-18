import React, { Component } from 'react';
// import
//   { Engines, Scenes, ArcRotateCameras,
// DirectionalLights,
// BrickTextures, FireTextures, GrassTextures,
// MarbleTextures, WoodTextures,
// BoxCloudMeshs, MacadamMesh, SquareMesh } from '../components/Component';
import Engines from '../components/Engine';
// import Scenes from '../components/Scene';
// import DirectionalLights from '../components/lights/DirectionalLight';
import ArcRotateCameras from '../components/camera/ArcRotateCamera';
import TextureMaps from '../components/maps/TextureMaps';
// import BrickTextures from '../components/textures/BrickTexture';
// import FireTextures from '../components/textures/FireTexture';
// import GrassTextures from '../components/textures/GrassTexture';
// import MarbleTextures from '../components/textures/MarbleTexture';
// import WoodTextures from '../components/textures/WoodTexture';
import BoxCloudMeshs from '../components/mesh/BoxCloudMesh';
import MacadamMesh from '../components/mesh/MacadamMesh';
import SquareMesh from '../components/mesh/SquareMesh';
import { IonApp, IonContent, IonGrid, IonRow } from '@ionic/react';
import * as CANNON from 'cannon';
window.CANNON = CANNON;


const Main: React.FC = () => {

  return (
    <IonApp>
    <IonContent fullscreen={true} >

    <Engines IDCanvas={'appcanvas'} antialias={true} adaptToDeviceRatio={true} >
    <ArcRotateCameras />
    <SquareMesh />
    <TextureMaps />
    <MacadamMesh />
    <BoxCloudMeshs />
    </Engines>
    </IonContent>
    </IonApp>

  );

}

export default Main;
