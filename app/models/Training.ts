export interface Step {
  duration: number;
  power: number;
}

export interface StepModel extends Step {
  key: string;
}

export interface Training {
  title: string;
  steps: Step[];
}

export interface TrainingModel extends Training {
  key: string;
}
