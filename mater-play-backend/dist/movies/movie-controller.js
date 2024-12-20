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
exports.MovieController = void 0;
const common_1 = require("@nestjs/common");
const movie_entity_1 = require("./movie-entity");
const movie_service_1 = require("./movie-service");
let MovieController = class MovieController {
    constructor(service) {
        this.service = service;
    }
    findAll(movieId) {
        if (movieId) {
            return this.service.findByCategory({
                id: Number(movieId)
            });
        }
        return this.service.findAll();
    }
    async findById(id) {
        const found = await this.service.findById(id);
        if (!found) {
            throw new common_1.HttpException("Movie not found", common_1.HttpStatus.NOT_FOUND);
        }
        return found;
    }
    create(movie) {
        return this.service.save(movie);
    }
    async update(id, movie) {
        console.log(id);
        const found = await this.service.findById(id);
        if (!found) {
            throw new common_1.HttpException("Movie not found", common_1.HttpStatus.NOT_FOUND);
        }
        movie.id = found.id;
        return this.service.save(movie);
    }
    async remove(id) {
        const found = await this.service.findById(id);
        if (!found) {
            throw new common_1.HttpException("Movie not found", common_1.HttpStatus.NOT_FOUND);
        }
        return this.service.remove(id);
    }
};
exports.MovieController = MovieController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("movieId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id", new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "findById", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movie_entity_1.Movie]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, movie_entity_1.Movie]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)("id", common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MovieController.prototype, "remove", null);
exports.MovieController = MovieController = __decorate([
    (0, common_1.Controller)("movies"),
    __metadata("design:paramtypes", [movie_service_1.MovieService])
], MovieController);
//# sourceMappingURL=movie-controller.js.map