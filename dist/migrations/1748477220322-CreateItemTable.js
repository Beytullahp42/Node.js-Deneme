"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateItemTable1748477220322 = void 0;
class CreateItemTable1748477220322 {
    constructor() {
        this.name = 'CreateItemTable1748477220322';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "item" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "price" double precision NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "item"`);
    }
}
exports.CreateItemTable1748477220322 = CreateItemTable1748477220322;
