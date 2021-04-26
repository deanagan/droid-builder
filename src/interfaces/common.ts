export interface Part {
  id: number;
  description: string;
  title: string;
  src: string;
  type: string;
  cost: number;
  onSale?: boolean;
}

export interface BuildSources {
  head: Part;
  leftArm: Part;
  rightArm: Part;
  torso: Part;
  base: Part;
}

export interface BodyParts {
  [key: string]: Part[];
  heads: Part[];
  arms: Part[];
  torsos: Part[];
  bases: Part[];
}
