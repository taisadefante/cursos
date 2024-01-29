"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseservice_1 = __importDefault(require("./CreateCourseservice"));
function createCourse(request, response) {
    CreateCourseservice_1.default.execute("NodeJs", 10, "Dani");
    return response.send();
}
exports.createCourse = createCourse;
