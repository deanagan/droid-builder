import { BodyParts, BuildSources } from "@/interfaces/common";
import parts from "@/data/data";

export default class Built {
  constructor(
    public headIndex: number = 0,
    public leftArmIndex: number = 0,
    public rightArmIndex: number = 0,
    public torsoIndex: number = 0,
    public baseIndex: number = 0
  ) {}

  getName(): string {
    return parts.heads[this.headIndex].title;
  }
  getBuild(): BuildSources {
    return {
      head: parts.heads[this.headIndex],
      leftArm: parts.arms[this.leftArmIndex],
      rightArm: parts.arms[this.rightArmIndex],
      torso: parts.torsos[this.torsoIndex],
      base: parts.bases[this.baseIndex]
    };
  }
  getBodyParts(): BodyParts {
    return {
      heads: parts.heads,
      arms: parts.arms,
      torsos: parts.torsos,
      bases: parts.bases
    };
  }
  getTotalCost(): number {
    const build = this.getBuild();
    return (
      build.head.cost +
      build.leftArm.cost +
      build.rightArm.cost +
      build.torso.cost +
      build.base.cost
    );
  }
}
