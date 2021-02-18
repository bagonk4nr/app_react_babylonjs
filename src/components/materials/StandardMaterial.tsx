
import React, { useCallback } from 'react';
import * as BABYLON from '@babylonjs/core';
import EngineCls from '../class/EnginesCls';

const StandardMaterials = (name: any, scene: any) => {

    let StandardMaterial = new BABYLON.StandardMaterial(name, scene);;

    return StandardMaterial;

}

export default StandardMaterials;
