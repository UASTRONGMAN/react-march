import {IUserModel} from "./IUserModel";
import {IPostModel} from "./IPostModel";

export interface IUsersResponceModel{
    users: IUserModel[]
}

export interface IPostsResponceModel{
    posts: IPostModel[]
}