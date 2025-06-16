import { Goal } from "./Goal";

export interface Activity {
    id? : number;
    steps : number;
    distance : number;
    caloriesBurned : number;
    userId : number;
    goals : Goal[];
    date : Date;
}