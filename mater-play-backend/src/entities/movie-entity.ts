import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("movie")
export class Movie {
    @PrimaryColumn("uuid")
    id: string;

    @Column({nullable: false})
    title: string;

    @Column({type: "text", nullable: false})
    description: string;

    @Column({name: "age-rating", length: 2, nullable: false})
    ageRating: string;

    @Column({nullable: false})
    poster: string;   
}