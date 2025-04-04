import { ObjectType, Field, ID } from 'type-graphql'
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity({name: 'biblia'})
@ObjectType()
export class Biblia{
    @PrimaryGeneratedColumn()
    @Field(__type => ID)
    id: Number 

    @Column()
    @Field()
    versao: string
    
    @Column()
    @Field()
    livro: string
    
    @Column()
    @Field()
    capitulo: Number 
    
    @Column()
    @Field()
    versiculo: string
}