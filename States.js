import Interface from './Interface.js';

const IDevice = new Interface('Device', ['stop', 'getReady', 'proceed', 'stopIfSafe']);

const durationStop = 5000;
const durationGetReady = 1000;
const durationProceed = 5000;
const durationStopIfSafe = 1000;

export default class Stop {
  constructor(device) {
    IDevice.implementedBy(device);
    this.device = device;
  }

  execute() {
    // Entry Actions
    this.device.stop();

    // Transitions
    const nextState = new GetReady(this.device);
    setTimeout(() => this.device.changeTo(nextState),durationStop);
  }
}

export class GetReady {
  constructor(device) {
    IDevice.implementedBy(device);
    this.device = device;
  }

  execute() {
    // Entry Actions
    this.device.getReady();

    // Transitions
    const nextState = new Proceed(this.device);
    setTimeout(() => this.device.changeTo(nextState),durationGetReady);
  }
}

export class Proceed {
  constructor(device) {
    IDevice.implementedBy(device);
    this.device = device;
  }

  execute() {
    // Entry Actions
    this.device.proceed();

    // Transitions
    const nextState = new StopIfSafe(this.device);
    setTimeout(() => this.device.changeTo(nextState),durationProceed);
  }
}

export class StopIfSafe {
  constructor(device) {
    IDevice.implementedBy(device);
    this.device = device;
  }

  execute() {
    // Entry Actions
    this.device.stopIfSafe();

    // Transitions
    const nextState = new Stop(this.device);
    setTimeout(() => this.device.changeTo(nextState),durationStopIfSafe);
  }
}