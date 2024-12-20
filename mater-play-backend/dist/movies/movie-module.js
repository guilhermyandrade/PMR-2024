"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const movie_entity_1 = require("./movie-entity");
const common_1 = require("@nestjs/common");
const movie_service_1 = require("./movie-service");
const movie_controller_1 = require("./movie-controller");
const category_entity_1 = require("../categories/category-entity");
const genre_entity_1 = require("../genres/genre-entity");
let MovieModule = class MovieModule {
};
exports.MovieModule = MovieModule;
exports.MovieModule = MovieModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([category_entity_1.Category, movie_entity_1.Movie, genre_entity_1.Genre])],
        providers: [movie_service_1.MovieService],
        controllers: [movie_controller_1.MovieController]
    })
], MovieModule);
//# sourceMappingURL=movie-module.js.map