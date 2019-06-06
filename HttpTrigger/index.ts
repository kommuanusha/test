import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest) {

    return new Promise(resolve => {
        setTimeout(() => {
           resolve( context.res = {
                 body: new Date()
           })
        }, 1000)
    })
};

export default httpTrigger;
