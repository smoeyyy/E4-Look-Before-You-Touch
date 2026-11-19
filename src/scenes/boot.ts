import Phaser from "phaser";
import { loadSounds } from "../sounds.ts";
import { makeTextures } from "../textures.ts";

const transitioning = new WeakSet<Phaser.Scene>();

export function fadeTo(
  scene: Phaser.Scene,
  target: string,
  data?: object,
): void {
  if (transitioning.has(scene)) return;

  transitioning.add(scene);

  scene.cameras.main.fadeOut(450, 4, 2, 12);
  scene.cameras.main.once("camerafadeoutcomplete", () => {
    transitioning.delete(scene);
    scene.scene.start(target, data);
  });
}

export class BootScene extends Phaser.Scene {
  constructor() {
    super("boot");
  }

  create(): void {
    makeTextures(this);
    loadSounds(this);
    this.scene.start("title");
  }
}
