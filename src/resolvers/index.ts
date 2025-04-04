import { Arg, Query, Resolver } from 'type-graphql'
import { Biblia } from '../models'
import AppDataSource from '../data-source'

@Resolver(Biblia)
export class BibliaResolver{

    @Query(() => [Biblia])
    async passagem(){
        const rep = AppDataSource.getRepository(Biblia)
        return await rep.find()
    }

    @Query(() => [Biblia])
    async getOnePassagem(@Arg('capitulo') capitulo:Number, @Arg('livro') livro:string){
        const rep = AppDataSource.getRepository(Biblia)
        return await rep.findBy({capitulo: capitulo, livro:livro})
    }

    @Query(() => [Biblia])
    async getLivro(@Arg('livro') livro:string){
        const rep = AppDataSource.getRepository(Biblia)
        return await rep.findBy({livro:livro})
    }
}