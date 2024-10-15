import {DataSourceOptions} from "typeorm/data-source/DataSourceOptions";
import {TextMessageEntity} from "../domain/entity/text-message-entity";
import {UserEntity} from "../domain/entity/user-entity";
export const dbDatasourceOptions: DataSourceOptions = {
    type: "mysql",
    host: "qzkp8ry756433yd4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com", // Host should not include the port
    port: 3306,        // Port is already specified separately
    username: "kchqblfc94b4ki51",
    password: "slcyd7ymqlbh3nap",
    database: "h4j3sy4y3xck3nnq",

    synchronize: true,
    logging: false,
    charset : 'utf8mb4',
    entities: [TextMessageEntity, UserEntity],
    migrations: [],
    subscribers: [],
}


