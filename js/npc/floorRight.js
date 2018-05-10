import FloorBase from '../npc/floorBase'
const ENEMY_IMG_SRC = 'images/floor4.png'
export default class FloorRight extends FloorBase {
  constructor() {
    super(ENEMY_IMG_SRC, 100, 20)
  }

  hitRun(target) {
    target.x += 2;
    if (this.hit) {
      return;
    }
    this.hit = true;
  }
  setView(ctx) {
    this.drawToCanvas(ctx, 0, 0)
  }
}
