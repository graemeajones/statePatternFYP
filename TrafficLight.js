import Stop from './States.js';


export default class TrafficLight {
  isOperating = false;
  constructor() {
    this.currentState = new Stop(this);
  }

  // Starting and stopping the device
  begin = () => {
    this.isOperating = true;
    this.currentState.execute();
  }

  finish = () => this.isOperating = false;

  // Process state changes
  changeTo(state) {
    if ((this.isOperating)||(state.constructor.name!="Stop")) {
      this.currentState = state;
      this.currentState.execute();
    }
    else this.finished(); // Only finish when reached Stop state
  }

  // Device actions
  finished   = () => this.display({ red: false, orange: false, green: false });
  stop       = () => this.display({ red: true,  orange: false, green: false });
  getReady   = () => this.display({ red: true,  orange: true,  green: false });
  proceed    = () => this.display({ red: false, orange: false, green: true  });
  stopIfSafe = () => this.display({ red: true,  orange: true,  green: false });

  display(bulbs) {
    console.log();
    console.log("+---+");
    console.log(`| ${bulbs.red    ? "X" : " "} |`);
    console.log(`| ${bulbs.orange ? "X" : " "} |`);
    console.log(`| ${bulbs.green  ? "X" : " "} |`);
    console.log("+---+");
  }
}