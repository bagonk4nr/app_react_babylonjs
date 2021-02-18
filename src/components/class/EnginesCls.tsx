import { Engine, Scene } from '@babylonjs/core'
import React, { useEffect, useRef } from 'react'

const EngineCls = (props: any) => {
    const reactCanvas = useRef(null);
    const { antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady, ...rest } = props;
    useEffect(() => {
        if (reactCanvas.current) {
            const engine = new Engine(reactCanvas.current, antialias, engineOptions, adaptToDeviceRatio);
            // engine.getCaps().highPrecisionShaderSupported = false;
            const scene = new Scene(engine, sceneOptions);
            if (scene.isReady()) {
                props.onSceneReady(scene)
            } else {
                scene.onReadyObservable.addOnce(scene => props.onSceneReady(scene));
            }
            engine.runRenderLoop(() => {
                if (typeof onRender === 'function') {
                    onRender(scene);
                }

                if (scene && scene.activeCamera) {
                    scene.render();
                }

                if (!scene.activeCamera) {
                  console.error('not defined camera');
                  throw Error('not defined camera');
                }

            })
            const resize = () => {
                scene.getEngine().resize();
            }
            if (window) {
                window.addEventListener('resize', resize);
            }
            return () => {
                scene.getEngine().dispose();
                if (window) {
                    window.removeEventListener('resize', resize);
                }
            }
        }
    }, [reactCanvas])
    return (
        <canvas ref={reactCanvas} {...rest} />
    );
}

export default EngineCls;
