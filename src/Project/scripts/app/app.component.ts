import {Component, OnInit} from 'angular2/core';

interface IAsyncResult<T> {
    data?: T;

    isError?: boolean;
    err?: any;
    errDescr?: string;
}

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html'
})


export class AppComponent implements OnInit {

    __label = "Hello World!";

    constructor() {
        
    }

    /**
     *  on component init
     */
    ngOnInit(): void {
        this.getAsyncValue().then(result => {
            this.__label = result;
        });
    }

    /**
     *  get async value
     */
    private async getAsyncValue(): Promise<string> {
        let _result = await this.myAsyncMethod(3000);       //the app is waiting for 3 seconds
        return _result.data;
    }

    /**
     * my async method
     */
    private myAsyncMethod(time: number): Promise<IAsyncResult<string>> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    data: "Async Hello World"
                });
            }, time);
        });
    }

}