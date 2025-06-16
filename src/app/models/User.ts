import { Profile } from "./Profile";

export interface User {
    id? : number;
	userName : string;
	email : string;
	password : string;
	profile : Profile;

}