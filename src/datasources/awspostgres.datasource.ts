import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'awspostgres',
  connector: 'postgresql',
  url: '',
  host: 'cardy-web-prod.c0svx5w6tax8.us-east-1.rds.amazonaws.com',
  port: 5432,
  user: 'postgres',
  password: '6cla7pwuSRCS60nlZuww',
  database: 'postgres'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class AwspostgresDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'awspostgres';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.awspostgres', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
