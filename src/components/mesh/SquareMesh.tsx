
import React, { Component } from 'react';
import * as BABYLONCore from '@babylonjs/core';
import * as BABYLONTextures from '@babylonjs/procedural-textures';

const SquareMesh = (props: any) => {

    let customMaterial = new BABYLONCore.StandardMaterial("custommat", props.Scener);;

    //Create a square of grass using a custom procedural texture
    let square = BABYLONCore.Mesh.CreateGround("square", 20, 20, 2, props.Scener);
    square.position = new BABYLONCore.Vector3(0, 0, 0);

    let pathTextures = process.env.PUBLIC_URL + '/assets/textures';
    // console.log(pathTextures);
    let customProcText = new BABYLONCore.CustomProceduralTexture("customtext", pathTextures, 1024, props.Scener);
    // let customProcText = new BABYLONTextures.GrassProceduralTexture("customtext", 1024, props.Scener);
    customMaterial.ambientTexture = customProcText;
    square.material = customMaterial;
    square.receiveShadows = true;

    return <></>;

}

export default SquareMesh;
