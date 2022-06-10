import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AwspostgresDataSource} from '../datasources';
import {Testaws, TestawsRelations} from '../models';

export class TestawsRepository extends DefaultCrudRepository<
  Testaws,
  typeof Testaws.prototype.id,
  TestawsRelations
> {
  constructor(
    @inject('datasources.awspostgres') dataSource: AwspostgresDataSource,
  ) {
    super(Testaws, dataSource);
  }
}
