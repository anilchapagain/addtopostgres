import {Filter, FilterExcludingWhere, repository} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  post,
  requestBody,
  response,
} from '@loopback/rest';
import {Testaws} from '../models';
import {TestawsRepository} from '../repositories';

export class AwspostgresController {
  constructor(
    @repository(TestawsRepository)
    public testawsRepository: TestawsRepository,
  ) {}

  @post('/testaws')
  @response(200, {
    description: 'Testaws model instance',
    content: {'application/json': {schema: getModelSchemaRef(Testaws)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Testaws, {
            title: 'NewTestaws',
            exclude: ['id'],
          }),
        },
      },
    })
    testaws: Omit<Testaws, 'id'>,
  ): Promise<Testaws> {
    return this.testawsRepository.create(testaws);
  }

  // @get('/testaws/count')
  // @response(200, {
  //   description: 'Testaws model count',
  //   content: {'application/json': {schema: CountSchema}},
  // })
  // async count(
  //   @param.where(Testaws) where?: Where<Testaws>,
  // ): Promise<Count> {
  //   return this.testawsRepository.count(where);
  // }

  @get('/testaws')
  @response(200, {
    description: 'Array of Testaws model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Testaws, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Testaws) filter?: Filter<Testaws>,
  ): Promise<Testaws[]> {
    return this.testawsRepository.find(filter);
  }

  // @patch('/testaws')
  // @response(200, {
  //   description: 'Testaws PATCH success count',
  //   content: {'application/json': {schema: CountSchema}},
  // })
  // async updateAll(
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Testaws, {partial: true}),
  //       },
  //     },
  //   })
  //   testaws: Testaws,
  //   @param.where(Testaws) where?: Where<Testaws>,
  // ): Promise<Count> {
  //   return this.testawsRepository.updateAll(testaws, where);
  // }

  @get('/testaws/{id}')
  @response(200, {
    description: 'Testaws model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Testaws, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Testaws, {exclude: 'where'})
    filter?: FilterExcludingWhere<Testaws>,
  ): Promise<Testaws> {
    return this.testawsRepository.findById(id, filter);
  }

  // @patch('/testaws/{id}')
  // @response(204, {
  //   description: 'Testaws PATCH success',
  // })
  // async updateById(
  //   @param.path.number('id') id: number,
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Testaws, {partial: true}),
  //       },
  //     },
  //   })
  //   testaws: Testaws,
  // ): Promise<void> {
  //   await this.testawsRepository.updateById(id, testaws);
  // }

  // @put('/testaws/{id}')
  // @response(204, {
  //   description: 'Testaws PUT success',
  // })
  // async replaceById(
  //   @param.path.number('id') id: number,
  //   @requestBody() testaws: Testaws,
  // ): Promise<void> {
  //   await this.testawsRepository.replaceById(id, testaws);
  // }

  @del('/testaws/{id}')
  @response(204, {
    description: 'Testaws DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.testawsRepository.deleteById(id);
  }
}
