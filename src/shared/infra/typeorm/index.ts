import {DataSource} from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "docker",
    password: "fcamara",
    database: "fcamara",
    migrations: ["./src/shared/infra/typeorm/migrations/*.ts"]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Postgres Database has been initialized successfully!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })