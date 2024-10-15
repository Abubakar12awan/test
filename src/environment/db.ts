import {DataSourceOptions} from "typeorm/data-source/DataSourceOptions";
import {TextMessageEntity} from "../domain/entity/text-message-entity";
import {UserEntity} from "../domain/entity/user-entity";
export const dbDatasourceOptions: DataSourceOptions = {
    type: "mysql",
    host: "127.0.0.1", // Host should not include the port
    port: 3306,        // Port is already specified separately
    username: "root",
    password: "root",
    database: "malik",

    synchronize: true,
    logging: false,
    charset : 'utf8mb4',
    entities: [TextMessageEntity, UserEntity],
    migrations: [],
    subscribers: [],
}


