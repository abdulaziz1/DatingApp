using Microsoft.AspNetCore.Http;

namespace DattingApp.API.Helper
{
    public static class Extension
    {
        public static void addApplicationError(this HttpResponse response, string message){

            response.Headers.Add("Application-Error",message);
            response.Headers.Add("Access-Control-Expose-Headers","Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin","*");
        }
    }
}