import logger from "../utils/loggers/Log4jsLogger.js";
import "../configs/db.config.js";

export class BaseDao {

    constructor() {
        this.logger = logger;
        if (this.constructor === BaseDao) {
            throw new Error('"BaseDao" no se puede instanciar')
        }
    }

    create() {
        throw new Error('El metodo create() debe ser implementado')
    }

    getAll() {
        throw new Error('El metodo getAll() debe ser implementado')
    }

    deleteById() {
        throw new Error('El metodo deleteById() debe ser implementado')
    }
}