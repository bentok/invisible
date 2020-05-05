import {GALAXY} from "../const/galaxy.const";

interface IStar {
  x: number,
  y: number,
  a: number,
}

export function generateStars (scene: Phaser.Scene, width: number, height: number, amount: number) {
  const graphics = scene.add.graphics();
  graphics.fillStyle(0xffffff, 1);
  
  const mapStar = () => ({
    x: Math.random() * GALAXY.width,
    y: Math.random() * GALAXY.height,
    a: Math.random() * Math.PI,
  });
  const fill = (star: IStar) => graphics.fillCircle(star.x, star.y, star.a);
  
  const iterable = new Array(amount).fill(null);
  iterable.map(mapStar).forEach(fill);
}