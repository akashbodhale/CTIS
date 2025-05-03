/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/login/route";
exports.ids = ["app/api/login/route"];
exports.modules = {

/***/ "(rsc)/./app/api/login/route.ts":
/*!********************************!*\
  !*** ./app/api/login/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/dbConfig/dbConfig */ \"(rsc)/./dbConfig/dbConfig.ts\");\n/* harmony import */ var _models_Researcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Researcher */ \"(rsc)/./models/Researcher.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n(0,_dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__.connectMongoDB)();\nasync function POST(request) {\n    try {\n        const reqBody = await request.json();\n        const { username, password } = reqBody;\n        console.log(reqBody);\n        //check if user exists\n        const user = await _models_Researcher__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            username\n        });\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n                error: \"User does not exists!!!\"\n            }, {\n                status: 400\n            });\n        }\n        //check if the Password is correct\n        const validPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].compare(password, user.password);\n        if (!validPassword) {\n            return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n                error: \"Password is Invalid!!!\"\n            }, {\n                status: 400\n            });\n        }\n        // create token object\n        const tokenData = {\n            id: user._id,\n            username: user.username,\n            email: user.email\n        };\n        //create token\n        const token = await jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().sign(tokenData, process.env.TOKEN_SECRET, {\n            expiresIn: \"1d\"\n        });\n        const response = next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n            message: \"Login Sucessfull\",\n            success: true\n        });\n        response.cookies.set(\"token\", token, {\n            httpOnly: true\n        });\n        return response;\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n            error: error\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2xvZ2luL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBc0Q7QUFDWDtBQUNiO0FBQzBCO0FBQ3pCO0FBRS9CQSxrRUFBY0E7QUFHUCxlQUFlSyxLQUFLQyxPQUFtQjtJQUUxQyxJQUNBO1FBQ0ksTUFBTUMsVUFBUSxNQUFNRCxRQUFRRSxJQUFJO1FBQ2hDLE1BQUssRUFBQ0MsUUFBUSxFQUFDQyxRQUFRLEVBQUMsR0FBQ0g7UUFFekJJLFFBQVFDLEdBQUcsQ0FBQ0w7UUFFWixzQkFBc0I7UUFDdEIsTUFBTU0sT0FBSyxNQUFNWiwwREFBUUEsQ0FBQ2EsT0FBTyxDQUFDO1lBQUNMO1FBQVE7UUFFM0MsSUFBRyxDQUFDSSxNQUNKO1lBQ0ksT0FBT1YscURBQVlBLENBQUNLLElBQUksQ0FBQztnQkFBQ08sT0FBTTtZQUF5QixHQUFFO2dCQUFDQyxRQUFRO1lBQUc7UUFDM0U7UUFDQSxrQ0FBa0M7UUFDbEMsTUFBTUMsZ0JBQWMsTUFBTWYsd0RBQWMsQ0FBQ1EsVUFBU0csS0FBS0gsUUFBUTtRQUMvRCxJQUFHLENBQUNPLGVBQWM7WUFDZCxPQUFPZCxxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO2dCQUFDTyxPQUFNO1lBQXdCLEdBQUU7Z0JBQUNDLFFBQVE7WUFBRztRQUMxRTtRQUVBLHNCQUFzQjtRQUN0QixNQUFNRyxZQUFVO1lBQ1pDLElBQUlQLEtBQUtRLEdBQUc7WUFDWlosVUFBU0ksS0FBS0osUUFBUTtZQUN0QmEsT0FBTVQsS0FBS1MsS0FBSztRQUVwQjtRQUVBLGNBQWM7UUFDZCxNQUFNQyxRQUFRLE1BQU1uQix3REFBUSxDQUFDZSxXQUFVTSxRQUFRQyxHQUFHLENBQUNDLFlBQVksRUFBRTtZQUFDQyxXQUFVO1FBQUk7UUFFaEYsTUFBTUMsV0FBUzFCLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7WUFBQ3NCLFNBQVM7WUFBb0JDLFNBQVE7UUFBSTtRQUMzRUYsU0FBU0csT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUVYsT0FBTTtZQUFDVyxVQUFTO1FBQUk7UUFDakQsT0FBT0w7SUFDWCxFQUNBLE9BQU1kLE9BQ047UUFDSSxPQUFPWixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1lBQUNPLE9BQU1BO1FBQUssR0FBRTtZQUFDQyxRQUFPO1FBQUc7SUFDdEQ7QUFFSiIsInNvdXJjZXMiOlsiL1VzZXJzL2Fib2RoYWxlL2UtY2FydC9DVElTL2FwcC9hcGkvbG9naW4vcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdE1vbmdvREIgfSAgZnJvbSAnQC9kYkNvbmZpZy9kYkNvbmZpZyc7XG5pbXBvcnQgUmVzZWFyY2ggZnJvbSBcIkAvbW9kZWxzL1Jlc2VhcmNoZXJcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCBqd3QgZnJvbSBcImpzb253ZWJ0b2tlblwiO1xuXG5jb25uZWN0TW9uZ29EQigpO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6TmV4dFJlcXVlc3Qpe1xuXG4gICAgdHJ5XG4gICAge1xuICAgICAgICBjb25zdCByZXFCb2R5PWF3YWl0IHJlcXVlc3QuanNvbigpO1xuICAgICAgICBjb25zdHt1c2VybmFtZSxwYXNzd29yZH09cmVxQm9keTtcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXFCb2R5KTtcblxuICAgICAgICAvL2NoZWNrIGlmIHVzZXIgZXhpc3RzXG4gICAgICAgIGNvbnN0IHVzZXI9YXdhaXQgUmVzZWFyY2guZmluZE9uZSh7dXNlcm5hbWV9KTtcblxuICAgICAgICBpZighdXNlcilcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtlcnJvcjpcIlVzZXIgZG9lcyBub3QgZXhpc3RzISEhXCJ9LHtzdGF0dXM6IDQwMH0pXG4gICAgICAgIH1cbiAgICAgICAgLy9jaGVjayBpZiB0aGUgUGFzc3dvcmQgaXMgY29ycmVjdFxuICAgICAgICBjb25zdCB2YWxpZFBhc3N3b3JkPWF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLHVzZXIucGFzc3dvcmQpXG4gICAgICAgIGlmKCF2YWxpZFBhc3N3b3JkKXtcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7ZXJyb3I6XCJQYXNzd29yZCBpcyBJbnZhbGlkISEhXCJ9LHtzdGF0dXM6IDQwMH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgdG9rZW4gb2JqZWN0XG4gICAgICAgIGNvbnN0IHRva2VuRGF0YT17XG4gICAgICAgICAgICBpZDogdXNlci5faWQsXG4gICAgICAgICAgICB1c2VybmFtZTp1c2VyLnVzZXJuYW1lLFxuICAgICAgICAgICAgZW1haWw6dXNlci5lbWFpbFxuXG4gICAgICAgIH1cblxuICAgICAgICAvL2NyZWF0ZSB0b2tlblxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGp3dC5zaWduKHRva2VuRGF0YSxwcm9jZXNzLmVudi5UT0tFTl9TRUNSRVQhLHtleHBpcmVzSW46XCIxZFwifSlcblxuICAgICAgICBjb25zdCByZXNwb25zZT1OZXh0UmVzcG9uc2UuanNvbih7bWVzc2FnZTogXCJMb2dpbiBTdWNlc3NmdWxsXCIsIHN1Y2Nlc3M6dHJ1ZX0pXG4gICAgICAgIHJlc3BvbnNlLmNvb2tpZXMuc2V0KFwidG9rZW5cIix0b2tlbix7aHR0cE9ubHk6dHJ1ZX0pXG4gICAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH1cbiAgICBjYXRjaChlcnJvcjogdW5rbm93bilcbiAgICB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7ZXJyb3I6ZXJyb3J9LHtzdGF0dXM6NTAwfSlcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiY29ubmVjdE1vbmdvREIiLCJSZXNlYXJjaCIsImJjcnlwdCIsIk5leHRSZXNwb25zZSIsImp3dCIsIlBPU1QiLCJyZXF1ZXN0IiwicmVxQm9keSIsImpzb24iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJmaW5kT25lIiwiZXJyb3IiLCJzdGF0dXMiLCJ2YWxpZFBhc3N3b3JkIiwiY29tcGFyZSIsInRva2VuRGF0YSIsImlkIiwiX2lkIiwiZW1haWwiLCJ0b2tlbiIsInNpZ24iLCJwcm9jZXNzIiwiZW52IiwiVE9LRU5fU0VDUkVUIiwiZXhwaXJlc0luIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwic3VjY2VzcyIsImNvb2tpZXMiLCJzZXQiLCJodHRwT25seSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/login/route.ts\n");

/***/ }),

/***/ "(rsc)/./dbConfig/dbConfig.ts":
/*!******************************!*\
  !*** ./dbConfig/dbConfig.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectMongoDB: () => (/* binding */ connectMongoDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = \"mongodb+srv://abodhale:blgedfFHVAz4aSsV@cluster0.qdtfbk8.mongodb.net/CTRS?retryWrites=true&w=majority&appName=Cluster0\";\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGO_URI environment variable inside .env.local\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectMongoDB() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            dbName: \"CTRS\",\n            bufferCommands: false\n        }).then((mongoose)=>mongoose);\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9kYkNvbmZpZy9kYkNvbmZpZy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFHaEMsTUFBTUMsY0FBWTtBQUVsQixJQUFJLENBQUNBLGFBQ0w7SUFDSSxNQUFNLElBQUlDLE1BQ1I7QUFFTjtBQUVBLElBQUlDLFNBQVMsT0FBZ0JILFFBQVE7QUFFckMsSUFBSSxDQUFDRyxRQUNMO0lBQ0lBLFNBQVMsT0FBZ0JILFFBQVEsR0FBRztRQUFFSyxNQUFNO1FBQU1DLFNBQVM7SUFBSztBQUNwRTtBQUVPLGVBQWVDO0lBRWxCLElBQUlKLE9BQU9FLElBQUksRUFBRTtRQUNmLE9BQU9GLE9BQU9FLElBQUk7SUFDcEI7SUFFQSxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQkgsT0FBT0csT0FBTyxHQUFHTix1REFBZ0IsQ0FBQ0MsYUFBYTtZQUM3Q1EsUUFBUTtZQUNSQyxnQkFBZ0I7UUFDbEIsR0FBR0MsSUFBSSxDQUFDLENBQUNYLFdBQWFBO0lBQ3hCO0lBRUFHLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ2xDLE9BQU9ILE9BQU9FLElBQUk7QUFDdEIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYm9kaGFsZS9lLWNhcnQvQ1RJUy9kYkNvbmZpZy9kYkNvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cblxuY29uc3QgTU9OR09EQl9VUkk9XCJtb25nb2RiK3NydjovL2Fib2RoYWxlOmJsZ2VkZkZIVkF6NGFTc1ZAY2x1c3RlcjAucWR0ZmJrOC5tb25nb2RiLm5ldC9DVFJTP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPUNsdXN0ZXIwXCI7XG5cbmlmICghTU9OR09EQl9VUkkpIFxue1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09fVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsXCJcbiAgICApO1xufVxuXG5sZXQgY2FjaGVkID0gKGdsb2JhbCBhcyBhbnkpLm1vbmdvb3NlO1xuXG5pZiAoIWNhY2hlZCkgXG57XG4gICAgY2FjaGVkID0gKGdsb2JhbCBhcyBhbnkpLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0TW9uZ29EQigpXG57XG4gICAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgICByZXR1cm4gY2FjaGVkLmNvbm47XG4gICAgfVxuICBcbiAgICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIHtcbiAgICAgICAgZGJOYW1lOiBcIkNUUlNcIiwgXG4gICAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICAgIH0pLnRoZW4oKG1vbmdvb3NlKSA9PiBtb25nb29zZSk7XG4gICAgfVxuICBcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICAgIHJldHVybiBjYWNoZWQuY29ubjtcbn1cblxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiY29ubmVjdE1vbmdvREIiLCJjb25uZWN0IiwiZGJOYW1lIiwiYnVmZmVyQ29tbWFuZHMiLCJ0aGVuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./dbConfig/dbConfig.ts\n");

/***/ }),

/***/ "(rsc)/./models/Researcher.ts":
/*!******************************!*\
  !*** ./models/Researcher.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Research: () => (/* binding */ Research),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ResearcherSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a username\"\n        ]\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a email\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a password\"\n        ]\n    },\n    isVerified: {\n        type: Boolean,\n        required: true\n    },\n    forgotPasswordToken: String,\n    forgotPasswordTokenExpiry: Date,\n    verifiedToken: String,\n    verifiedTokenExpiry: Date\n});\nconst Research = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Researcher || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Researcher\", ResearcherSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Research);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvUmVzZWFyY2hlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLG1CQUFtQixJQUFJRCx3REFBZSxDQUFDO0lBQ3pDRyxVQUFTO1FBQ0xDLE1BQUtDO1FBQ0xDLFVBQVM7WUFBQztZQUFNO1NBQTRCO0lBQ2hEO0lBQ0FDLE9BQU07UUFDRkgsTUFBS0M7UUFDTEMsVUFBUztZQUFDO1lBQUs7U0FBeUI7SUFDNUM7SUFDQUUsVUFBUztRQUNMSixNQUFLQztRQUNMQyxVQUFTO1lBQUM7WUFBSztTQUE0QjtJQUMvQztJQUNBRyxZQUFXO1FBQ1BMLE1BQU1NO1FBQ05KLFVBQVM7SUFDYjtJQUNBSyxxQkFBb0JOO0lBQ3BCTywyQkFBMEJDO0lBQzFCQyxlQUFjVDtJQUNkVSxxQkFBb0JGO0FBQ3hCO0FBRU8sTUFBTUcsV0FBV2hCLHdEQUFlLENBQUNrQixVQUFVLElBQUlsQixxREFBYyxDQUFDLGNBQWNDLGtCQUFrQjtBQUVyRyxpRUFBZWUsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2Fib2RoYWxlL2UtY2FydC9DVElTL21vZGVscy9SZXNlYXJjaGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgUmVzZWFyY2hlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIHVzZXJuYW1lOntcbiAgICAgICAgdHlwZTpTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOlt0cnVlLCBcIlBsZWFzZSBwcm92aWRlIGEgdXNlcm5hbWVcIl0sXG4gICAgfSxcbiAgICBlbWFpbDp7XG4gICAgICAgIHR5cGU6U3RyaW5nLFxuICAgICAgICByZXF1aXJlZDpbdHJ1ZSxcIlBsZWFzZSBwcm92aWRlIGEgZW1haWxcIl1cbiAgICB9LFxuICAgIHBhc3N3b3JkOntcbiAgICAgICAgdHlwZTpTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOlt0cnVlLFwiUGxlYXNlIHByb3ZpZGUgYSBwYXNzd29yZFwiXVxuICAgIH0sXG4gICAgaXNWZXJpZmllZDp7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlcXVpcmVkOnRydWVcbiAgICB9LFxuICAgIGZvcmdvdFBhc3N3b3JkVG9rZW46U3RyaW5nLFxuICAgIGZvcmdvdFBhc3N3b3JkVG9rZW5FeHBpcnk6RGF0ZSxcbiAgICB2ZXJpZmllZFRva2VuOlN0cmluZyxcbiAgICB2ZXJpZmllZFRva2VuRXhwaXJ5OkRhdGUsXG59KVxuXG5leHBvcnQgY29uc3QgUmVzZWFyY2ggPSBtb25nb29zZS5tb2RlbHMuUmVzZWFyY2hlciB8fCBtb25nb29zZS5tb2RlbChcIlJlc2VhcmNoZXJcIiwgUmVzZWFyY2hlclNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2VhcmNoO1xuXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJSZXNlYXJjaGVyU2NoZW1hIiwiU2NoZW1hIiwidXNlcm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJlbWFpbCIsInBhc3N3b3JkIiwiaXNWZXJpZmllZCIsIkJvb2xlYW4iLCJmb3Jnb3RQYXNzd29yZFRva2VuIiwiZm9yZ290UGFzc3dvcmRUb2tlbkV4cGlyeSIsIkRhdGUiLCJ2ZXJpZmllZFRva2VuIiwidmVyaWZpZWRUb2tlbkV4cGlyeSIsIlJlc2VhcmNoIiwibW9kZWxzIiwiUmVzZWFyY2hlciIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/Researcher.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=%2FUsers%2Fabodhale%2Fe-cart%2FCTIS%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabodhale%2Fe-cart%2FCTIS&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=%2FUsers%2Fabodhale%2Fe-cart%2FCTIS%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabodhale%2Fe-cart%2FCTIS&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_abodhale_e_cart_CTIS_app_api_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/login/route.ts */ \"(rsc)/./app/api/login/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/login/route\",\n        pathname: \"/api/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/login/route\"\n    },\n    resolvedPagePath: \"/Users/abodhale/e-cart/CTIS/app/api/login/route.ts\",\n    nextConfigOutput,\n    userland: _Users_abodhale_e_cart_CTIS_app_api_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZsb2dpbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbG9naW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmFib2RoYWxlJTJGZS1jYXJ0JTJGQ1RJUyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZhYm9kaGFsZSUyRmUtY2FydCUyRkNUSVMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9hYm9kaGFsZS9lLWNhcnQvQ1RJUy9hcHAvYXBpL2xvZ2luL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9sb2dpbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2xvZ2luXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9sb2dpbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9hYm9kaGFsZS9lLWNhcnQvQ1RJUy9hcHAvYXBpL2xvZ2luL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=%2FUsers%2Fabodhale%2Fe-cart%2FCTIS%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabodhale%2Fe-cart%2FCTIS&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/bcryptjs","vendor-chunks/safe-buffer","vendor-chunks/ms","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=%2FUsers%2Fabodhale%2Fe-cart%2FCTIS%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabodhale%2Fe-cart%2FCTIS&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();