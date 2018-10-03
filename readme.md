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
| Cost | LOW | LOW | LOW | 
| Logging | BLAH | BLAH | BLAH | 
| Monitoring | BLAH | BLAH | BLAH |
| Infrastructure | [CFN](docs/infrastructure/aws/template.yml) | [DM](docs/infrastructure/gcp/template.yml) | [ARM](docs/infrastructure/azure) |