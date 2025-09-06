/**
 * @typedef {Object} GridCell
 * @property {number} x
 * @property {number} y
 * @property {boolean} alive
 * @property {boolean} [nextAlive]
 */

export default class Cell {
  static size;

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alive = Math.random() > 0.5;
    this.nextAlive = false;
    this.lifeTime = this.alive ? 1 : 0;
  }

  draw(context) {
    // Draw this background
    context.fillStyle = "#303030";
    context.fillRect(
      this.x * Cell.size,
      this.y * Cell.size,
      Cell.size,
      Cell.size
    );

    if (this.alive) {
      // Draw living this inside background
      // this.lifeTime = 1
      switch (this.lifeTime) {
        case 1:
          context.fillStyle = `rgba(24, 215, 236 ,0.25)`;
          break;
        case 2:
          context.fillStyle = `rgba(24, 215, 236 ,0.5)`;
          break;
        case 3:
          context.fillStyle = `rgba(24, 215, 236 ,0.75)`;
          break;
        default:
          if (this.lifeTime >= 4) context.fillStyle = `rgba(24, 215, 236 ,1)`;
          break;
      }
      // context.fillStyle = `rgb(24, 215, 236 ,${opacity})`;

      context.fillRect(
        this.x * Cell.size + 1,
        this.y * Cell.size + 1,
        Cell.size - 2,
        Cell.size - 2
      );
    }
  }

  liveAndLetDie(aliveNeighbors) {
    //- A living cell that remains living should have its `lifeTime` incremented by one.
    // - A living cell that dies should have its `lifeTime` reset to zero.
    //   - A dead cell that is brought to life should have its `lifeTime` reset to one.

    if (aliveNeighbors === 2) {
      // Living cell remains living, dead cell remains dead
      this.nextAlive = this.alive;
      if (this.alive === true && this.nextAlive === true) {
        this.lifeTime++;
      }
    } else if (aliveNeighbors === 3) {
      // Dead cell becomes living, living cell remains living
      this.nextAlive = true;
      if (this.alive === false && this.nextAlive === true) {
        this.lifeTime = 1;
      } else if (this.alive === true && this.nextAlive === true) {
        this.lifeTime++;
      }
    } else {
      // Living cell dies, dead cell remains dead
      this.nextAlive = false;
      if (this.alive === true && this.nextAlive === false) {
        this.lifeTime = 0;
      }
    }
  }

  update() {
    this.alive = this.nextAlive;
  }
}
