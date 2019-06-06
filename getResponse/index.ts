import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest) {

    // return new Promise(resolve => {
    //     setInterval(() => {
    //        resolve( context.res = {
    //              body: new FetchResult().callURL()
    //        })
    //     }, 1000)
    // })


    context.res = {
        body: ""
    }
};

export default httpTrigger;
