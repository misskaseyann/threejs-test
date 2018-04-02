import * as THREE from 'three';
import Wheel from './models/Wheel';
import Sake from './models/Sake';
// import orbit from 'three-orbit-controls';
// const OrbitControls = orbit(THREE);
import TrackballControls from 'three-trackballcontrols';

export default class App {
  constructor() {
    const c = document.getElementById('mycanvas');
    // Enable antialias for smoother lines
    this.renderer = new THREE.WebGLRenderer({canvas: c, antialias: true});
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, 4/3, 0.5, 500);
    this.camera.position.z = 100;

    // const orbiter = new OrbitControls(this.camera);
    // orbiter.enableZoom = false;
    // orbiter.update();
    this.tracker = new TrackballControls(this.camera);
    this.tracker.rotateSpeed = 2.0;
    this.tracker.noZoom = false;
    this.tracker.noPan = false;

    // const dodecgeom = new THREE.DodecahedronGeometry(30);
    // // light with green
    // const dodecmatr = new THREE.MeshPhongMaterial({color: 0x00FF00});
    // //const dodecmatr = new THREE.MeshBasicMaterial({color: 0x14ae6e});
    // const dodecmesh = new THREE.Mesh(dodecgeom, dodecmatr);
    // this.scene.add(dodecmesh);

    // rotation 1 degree around Z axis
    this.rotZ1 = new THREE.Matrix4().makeRotationZ(THREE.Math.degToRad(1));
    // add light source
    const lightOne = new THREE.DirectionalLight(0xFFFFFF, 1.0);
    lightOne.position.set(10, 40, 100);
    this.scene.add(lightOne);

    // this.myWheel = new Wheel(5);
    // this.myWheel.matrixAutoUpdate = false;
    // this.scene.add(this.myWheel);

    this.sake = new Sake();
    this.scene.add(this.sake);

    window.addEventListener('resize', () => this.resizeHandler());
    this.resizeHandler();
    requestAnimationFrame(() => this.render());
  }

  render() {
    //this.myWheel.matrix.multiply(this.rotZ1);
    this.renderer.render(this.scene, this.camera);
    this.tracker.update();
    requestAnimationFrame(() => this.render());
  }

  resizeHandler() {
    const canvas = document.getElementById("mycanvas");
    let w = window.innerWidth - 16;
    let h = 0.75 * w;  /* maintain 4:3 ratio */
    if (canvas.offsetTop + h > window.innerHeight) {
      h = window.innerHeight - canvas.offsetTop - 16;
      w = 4/3 * h;
    }
    canvas.width = w;
    canvas.height = h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.tracker.handleResize();
  }
}