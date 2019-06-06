import { AzureFunction, Context, HttpRequest } from "@azure/functions"

  const httpTrigger: AzureFunction  =  async function main(context: Context, req: HttpRequest): Promise<any> {
  context.log(req.body);
}

export default httpTrigger;

