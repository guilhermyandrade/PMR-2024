"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreController = void 0;
const common_1 = require("@nestjs/common");
const genre_entity_1 = require("./genre-entity");
const genre_service_1 = require("./genre-service");
let GenreController = class GenreController {
    constructor(service) {
        this.service = service;
    }
    findAll() {
        return this.service.findAll();
    }
    async findById(id) {
        const found = await this.service.findById(id);
        if (!found) {
            throw new common_1.HttpException("Genre not found", common_1.HttpStatus.NOT_FOUND);
        }
        return found;
    }
    create(genre) {
        return this.service.save(genre);
    }
    async update(id, genre) {
        const found = await this.service.findById(id);
        if (!found) {
            throw new common_1.HttpException("Genre not found", common_1.HttpStatus.NOT_FOUND);
        }
        genre.id = found.id;
        return this.service.save(genre);
    }
    async remove(id) {
        const found = await this.service.findById(id);
        if (!found) {
            throw new common_1.HttpException("Genre not found", common_1.HttpStatus.NOT_FOUND);
        }
        return this.service.remove(id);
    }
};
exports.GenreController = GenreController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GenreController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", new common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenreController.prototype, "findById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [genre_entity_1.Genre]),
    __metadata("design:returntype", Promise)
], GenreController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, genre_entity_1.Genre]),
    __metadata("design:returntype", Promise)
], GenreController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenreController.prototype, "remove", null);
exports.GenreController = GenreController = __decorate([
    (0, common_1.Controller)("genres"),
    __metadata("design:paramtypes", [genre_service_1.GenreService])
], GenreController);
//# sourceMappingURL=genre-controller.js.map