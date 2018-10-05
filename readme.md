# demo-serverless-shootout

The purpose of this demo is to compare and contrast "serverless" Api deployments across three of the most
popular cloud vendors. Moving forward much infrastructure will be transitioning to this deployment model, so
we thought it would be interesting to do an indepth comparision.


### [Serverless](https://serverless.com/) Node Library For Cross-Vendor Deployment

To simplify and standardize our Serverless shootout we have utilized the Serverless Framework.
We hope you enjoy our analysis below.



| Feature | AWS | GCP | AZURE |
| ------- | --- | --- | ----- |
| Performance | [Meh](https://ronniehicks.github.io/demo-serverless-shootout/performance/aws/index.html) | [Great](https://ronniehicks.github.io/demo-serverless-shootout/performance/google/index.html) | [Good](https://ronniehicks.github.io/demo-serverless-shootout/performance/azure/index.html)|
| Cost | LOW | LOW | [Calculator](https://azure.com/e/1b8e4156dd274d0c95bb0e7f08f1f590) [Pic](docs/costs/azure.png) |
| Logging | [CloudWatch](https://us-west-2.console.aws.amazon.com/cloudwatch/home?region=us-west-2#logStream:group=/aws/lambda/my-express-application-dev-app) | [StackDriver](https://console.cloud.google.com/logs/viewer?project=serverlessdemo-218122&minLogLevel=0) | [AppInsights](https://portal.azure.com/#blade/Microsoft_Azure_Monitoring/AzureMonitoringBrowseBlade/overview) |
| Monitoring | [CloudWatch] | BLAH | [AppInsights](https://portal.azure.com/#@lumeris.com/dashboard/arm/subscriptions/f9861fb5-3903-4e0b-a98f-0dd72b41c61f/resourcegroups/my-express-application-rg/providers/microsoft.portal/dashboards/ca29349d-f576-48bd-a3dc-c6ff26931f2e-dashboard) |
| Infrastructure | [CFN](docs/infrastructure/aws/template.yml) | [DM](docs/infrastructure/gcp/template.yml) | [ARM](docs/infrastructure/azure) |
