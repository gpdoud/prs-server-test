import { User } from './user.class';

export class Request {
    id: number = 0;
    description: string = "";
    justification: string = "";
    rejectionReason: string = null;
    deliveryMode: string = "Pickup";
    status: string = "NEW";
    total: number = 0;

    userId: number = 0;
    user: User = null;
    userName: string = "";

    constructor() {}
}