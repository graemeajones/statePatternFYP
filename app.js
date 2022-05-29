import TrafficLight from './TrafficLight.js';

var light = new TrafficLight();
light.begin();

const twentySeconds = 20000;
setTimeout(light.finish, twentySeconds);
