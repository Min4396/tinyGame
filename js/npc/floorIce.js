import FloorBase from '../npc/floorBase'
const ENEMY_IMG_SRC = 'images/floor1.png'
import DataBus from '../databus'
let databus = new DataBus
export default class FloorIce extends FloorBase {
  constructor() {
    super(ENEMY_IMG_SRC, 100, 20)
  }

  hitRun() {
    this.ctrlIndex += 1
    if (this.hit) {
      return;
    }
    this.hit = true;
  }
  setView(ctx) {
    if (this.ctrlIndex >= 40) {
      this.visible=false
      return;
    }
    else if (this.ctrlIndex >= 20) {
      this.drawToCanvas(ctx, 100, 0)
      return
    }
    this.drawToCanvas(ctx,0,0)
  }
}
