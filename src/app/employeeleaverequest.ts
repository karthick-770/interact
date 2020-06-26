export class Employeeleaverequest {
    constructor(
        public name: string,
        public purpose: string,
        public noofdays: string,
        public from: string,
        public to: string,
        public hrname: string,
        public leavetype: string
    ){}
}
