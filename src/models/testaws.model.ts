import {Entity, model, property} from '@loopback/repository';

@model()
export class Testaws extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  cname?: string;

  @property({
    type: 'string',
  })
  cperson?: string;

  @property({
    type: 'string',
  })
  cphone?: string;

  @property({
    type: 'string',
  })
  cemail?: string;

  @property({
    type: 'string',
  })
  cidentifier?: string;

  @property({
    type: 'string',
  })
  pcode?: string;


  constructor(data?: Partial<Testaws>) {
    super(data);
  }
}

export interface TestawsRelations {
  // describe navigational properties here
}

export type TestawsWithRelations = Testaws & TestawsRelations;
