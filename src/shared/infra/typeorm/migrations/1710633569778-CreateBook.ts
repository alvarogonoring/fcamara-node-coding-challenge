import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBook1710633569778 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'books',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'title',
                        type: 'varchar'
                    },
                    {
                        name: 'author',
                        type: 'varchar'
                    },
                    {
                        name: 'isbn',
                        type: 'numeric'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('books');
    }

}
