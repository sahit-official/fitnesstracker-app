import { Activity } from "./Activity";

export interface Goal {
    id ?: number;
    targetSteps : number;
    targetCalories : number;
    activity : Activity;
}