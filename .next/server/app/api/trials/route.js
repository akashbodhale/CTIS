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
exports.id = "app/api/trials/route";
exports.ids = ["app/api/trials/route"];
exports.modules = {

/***/ "(rsc)/./app/api/trials/route.ts":
/*!*********************************!*\
  !*** ./app/api/trials/route.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/dbConfig/dbConfig */ \"(rsc)/./dbConfig/dbConfig.ts\");\n/* harmony import */ var _models_Trial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/Trial */ \"(rsc)/./models/Trial.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function GET() {\n    await (0,_dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__.connectMongoDB)();\n    const trials = await _models_Trial__WEBPACK_IMPORTED_MODULE_1__.Trial.find({});\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(trials, {\n        status: 200\n    });\n}\nasync function POST(request) {\n    await (0,_dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__.connectMongoDB)();\n    try {\n        const body = await request.json();\n        const newTrial = await _models_Trial__WEBPACK_IMPORTED_MODULE_1__.Trial.create(body);\n        return new Response(JSON.stringify(newTrial), {\n            status: 201,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    } catch (error) {\n        console.error(error);\n        return new Response(JSON.stringify({\n            error: \"Failed to create trial\"\n        }), {\n            status: 500,\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3RyaWFscy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFxRDtBQUNkO0FBQ2lCO0FBRWpELGVBQWVHO0lBQ3BCLE1BQU1ILGtFQUFjQTtJQUNwQixNQUFNSSxTQUFTLE1BQU1ILGdEQUFLQSxDQUFDSSxJQUFJLENBQUMsQ0FBQztJQUNqQyxPQUFPSCxxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDRixRQUFRO1FBQUVHLFFBQVE7SUFBSTtBQUVqRDtBQUVPLGVBQWVDLEtBQUtDLE9BQW9CO0lBQzdDLE1BQU1ULGtFQUFjQTtJQUVwQixJQUFJO1FBQ0YsTUFBTVUsT0FBTyxNQUFNRCxRQUFRSCxJQUFJO1FBRS9CLE1BQU1LLFdBQVcsTUFBTVYsZ0RBQUtBLENBQUNXLE1BQU0sQ0FBQ0Y7UUFFcEMsT0FBTyxJQUFJRyxTQUFTQyxLQUFLQyxTQUFTLENBQUNKLFdBQVc7WUFDNUNKLFFBQVE7WUFDUlMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7UUFDaEQ7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDQTtRQUNkLE9BQU8sSUFBSUosU0FBU0MsS0FBS0MsU0FBUyxDQUFDO1lBQUVFLE9BQU87UUFBeUIsSUFBSTtZQUN2RVYsUUFBUTtZQUNSUyxTQUFTO2dCQUFFLGdCQUFnQjtZQUFtQjtRQUNoRDtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYm9kaGFsZS9lLWNhcnQvQ1RJUy9hcHAvYXBpL3RyaWFscy9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0TW9uZ29EQiB9IGZyb20gXCJAL2RiQ29uZmlnL2RiQ29uZmlnXCI7XG5pbXBvcnQgeyBUcmlhbCB9IGZyb20gXCJAL21vZGVscy9UcmlhbFwiO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICBhd2FpdCBjb25uZWN0TW9uZ29EQigpO1xuICBjb25zdCB0cmlhbHMgPSBhd2FpdCBUcmlhbC5maW5kKHt9KTtcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHRyaWFscywgeyBzdGF0dXM6IDIwMCB9KTtcblxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xuICBhd2FpdCBjb25uZWN0TW9uZ29EQigpOyBcbiAgXG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpOyBcblxuICAgIGNvbnN0IG5ld1RyaWFsID0gYXdhaXQgVHJpYWwuY3JlYXRlKGJvZHkpOyBcblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkobmV3VHJpYWwpLCB7XG4gICAgICBzdGF0dXM6IDIwMSxcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSB0cmlhbFwiIH0pLCB7XG4gICAgICBzdGF0dXM6IDUwMCxcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICB9KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJjb25uZWN0TW9uZ29EQiIsIlRyaWFsIiwiTmV4dFJlc3BvbnNlIiwiR0VUIiwidHJpYWxzIiwiZmluZCIsImpzb24iLCJzdGF0dXMiLCJQT1NUIiwicmVxdWVzdCIsImJvZHkiLCJuZXdUcmlhbCIsImNyZWF0ZSIsIlJlc3BvbnNlIiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJlcnJvciIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/trials/route.ts\n");

/***/ }),

/***/ "(rsc)/./dbConfig/dbConfig.ts":
/*!******************************!*\
  !*** ./dbConfig/dbConfig.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectMongoDB: () => (/* binding */ connectMongoDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = \"mongodb+srv://abodhale:blgedfFHVAz4aSsV@cluster0.qdtfbk8.mongodb.net/CTRS?retryWrites=true&w=majority&appName=Cluster0\";\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGO_URI environment variable inside .env.local\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectMongoDB() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, {\n            dbName: \"CTRS\",\n            bufferCommands: false\n        }).then((mongoose)=>mongoose);\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9kYkNvbmZpZy9kYkNvbmZpZy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFHaEMsTUFBTUMsY0FBWTtBQUVsQixJQUFJLENBQUNBLGFBQ0w7SUFDSSxNQUFNLElBQUlDLE1BQ1I7QUFFTjtBQUVBLElBQUlDLFNBQVMsT0FBZ0JILFFBQVE7QUFFckMsSUFBSSxDQUFDRyxRQUNMO0lBQ0lBLFNBQVMsT0FBZ0JILFFBQVEsR0FBRztRQUFFSyxNQUFNO1FBQU1DLFNBQVM7SUFBSztBQUNwRTtBQUVPLGVBQWVDO0lBRWxCLElBQUlKLE9BQU9FLElBQUksRUFBRTtRQUNmLE9BQU9GLE9BQU9FLElBQUk7SUFDcEI7SUFFQSxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQkgsT0FBT0csT0FBTyxHQUFHTix1REFBZ0IsQ0FBQ0MsYUFBYTtZQUM3Q1EsUUFBUTtZQUNSQyxnQkFBZ0I7UUFDbEIsR0FBR0MsSUFBSSxDQUFDLENBQUNYLFdBQWFBO0lBQ3hCO0lBRUFHLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ2xDLE9BQU9ILE9BQU9FLElBQUk7QUFDdEIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYm9kaGFsZS9lLWNhcnQvQ1RJUy9kYkNvbmZpZy9kYkNvbmZpZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cblxuY29uc3QgTU9OR09EQl9VUkk9XCJtb25nb2RiK3NydjovL2Fib2RoYWxlOmJsZ2VkZkZIVkF6NGFTc1ZAY2x1c3RlcjAucWR0ZmJrOC5tb25nb2RiLm5ldC9DVFJTP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSZhcHBOYW1lPUNsdXN0ZXIwXCI7XG5cbmlmICghTU9OR09EQl9VUkkpIFxue1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09fVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52LmxvY2FsXCJcbiAgICApO1xufVxuXG5sZXQgY2FjaGVkID0gKGdsb2JhbCBhcyBhbnkpLm1vbmdvb3NlO1xuXG5pZiAoIWNhY2hlZCkgXG57XG4gICAgY2FjaGVkID0gKGdsb2JhbCBhcyBhbnkpLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0TW9uZ29EQigpXG57XG4gICAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgICByZXR1cm4gY2FjaGVkLmNvbm47XG4gICAgfVxuICBcbiAgICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIHtcbiAgICAgICAgZGJOYW1lOiBcIkNUUlNcIiwgXG4gICAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICAgIH0pLnRoZW4oKG1vbmdvb3NlKSA9PiBtb25nb29zZSk7XG4gICAgfVxuICBcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICAgIHJldHVybiBjYWNoZWQuY29ubjtcbn1cblxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiY29ubmVjdE1vbmdvREIiLCJjb25uZWN0IiwiZGJOYW1lIiwiYnVmZmVyQ29tbWFuZHMiLCJ0aGVuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./dbConfig/dbConfig.ts\n");

/***/ }),

/***/ "(rsc)/./models/Trial.ts":
/*!*************************!*\
  !*** ./models/Trial.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Trial: () => (/* binding */ Trial)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TrialSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    id: {\n        type: Number,\n        required: true\n    },\n    title: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String\n    },\n    condition: {\n        type: String\n    },\n    treatment: {\n        type: String\n    },\n    phase: {\n        type: String\n    },\n    status: {\n        type: String\n    },\n    startDate: {\n        type: Date\n    },\n    endDate: {\n        type: Date\n    },\n    location: {\n        type: String\n    },\n    researcherId: {\n        type: Number,\n        required: true\n    }\n}, {\n    collection: \"trial\"\n});\nconst Trial = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Trial || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Trial\", TrialSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVHJpYWwudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBZ0J0RCxNQUFNRSxjQUFzQixJQUFJRCw0Q0FBTUEsQ0FDcEM7SUFDQUUsSUFBSTtRQUFFQyxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDbkNDLE9BQU87UUFBRUgsTUFBTUk7UUFBUUYsVUFBVTtJQUFLO0lBQ3RDRyxhQUFhO1FBQUVMLE1BQU1JO0lBQU87SUFDNUJFLFdBQVc7UUFBRU4sTUFBTUk7SUFBTztJQUMxQkcsV0FBVztRQUFFUCxNQUFNSTtJQUFPO0lBQzFCSSxPQUFPO1FBQUVSLE1BQU1JO0lBQU87SUFDdEJLLFFBQVE7UUFBRVQsTUFBTUk7SUFBTztJQUN2Qk0sV0FBVztRQUFFVixNQUFNVztJQUFLO0lBQ3hCQyxTQUFTO1FBQUVaLE1BQU1XO0lBQUs7SUFDdEJFLFVBQVU7UUFBRWIsTUFBTUk7SUFBTztJQUN6QlUsY0FBYztRQUFFZCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7QUFDL0MsR0FDQTtJQUNFYSxZQUFXO0FBQ2I7QUFHTyxNQUFNQyxRQUFRcEIsd0RBQWUsQ0FBQ29CLEtBQUssSUFBSXBCLHFEQUFjLENBQVMsU0FBU0UsYUFBYSIsInNvdXJjZXMiOlsiL1VzZXJzL2Fib2RoYWxlL2UtY2FydC9DVElTL21vZGVscy9UcmlhbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBEb2N1bWVudCB9IGZyb20gXCJtb25nb29zZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUcmlhbCBleHRlbmRzIERvY3VtZW50IHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY29uZGl0aW9uOiBzdHJpbmc7XG4gIHRyZWF0bWVudDogc3RyaW5nO1xuICBwaGFzZTogc3RyaW5nO1xuICBzdGF0dXM6IHN0cmluZztcbiAgc3RhcnREYXRlOiBEYXRlO1xuICBlbmREYXRlOiBEYXRlO1xuICBsb2NhdGlvbjogc3RyaW5nO1xuICByZXNlYXJjaGVySWQ6IG51bWJlcjtcbn1cblxuY29uc3QgVHJpYWxTY2hlbWE6IFNjaGVtYSA9IG5ldyBTY2hlbWEoXG4gIHtcbiAgaWQ6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxuICB0aXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGRlc2NyaXB0aW9uOiB7IHR5cGU6IFN0cmluZyB9LFxuICBjb25kaXRpb246IHsgdHlwZTogU3RyaW5nIH0sXG4gIHRyZWF0bWVudDogeyB0eXBlOiBTdHJpbmcgfSxcbiAgcGhhc2U6IHsgdHlwZTogU3RyaW5nIH0sXG4gIHN0YXR1czogeyB0eXBlOiBTdHJpbmcgfSxcbiAgc3RhcnREYXRlOiB7IHR5cGU6IERhdGUgfSxcbiAgZW5kRGF0ZTogeyB0eXBlOiBEYXRlIH0sXG4gIGxvY2F0aW9uOiB7IHR5cGU6IFN0cmluZyB9LFxuICByZXNlYXJjaGVySWQ6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxufSxcbntcbiAgY29sbGVjdGlvbjpcInRyaWFsXCJcbn1cbik7XG5cbmV4cG9ydCBjb25zdCBUcmlhbCA9IG1vbmdvb3NlLm1vZGVscy5UcmlhbCB8fCBtb25nb29zZS5tb2RlbDxJVHJpYWw+KFwiVHJpYWxcIiwgVHJpYWxTY2hlbWEpO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiU2NoZW1hIiwiVHJpYWxTY2hlbWEiLCJpZCIsInR5cGUiLCJOdW1iZXIiLCJyZXF1aXJlZCIsInRpdGxlIiwiU3RyaW5nIiwiZGVzY3JpcHRpb24iLCJjb25kaXRpb24iLCJ0cmVhdG1lbnQiLCJwaGFzZSIsInN0YXR1cyIsInN0YXJ0RGF0ZSIsIkRhdGUiLCJlbmREYXRlIiwibG9jYXRpb24iLCJyZXNlYXJjaGVySWQiLCJjb2xsZWN0aW9uIiwiVHJpYWwiLCJtb2RlbHMiLCJtb2RlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/Trial.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftrials%2Froute&page=%2Fapi%2Ftrials%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftrials%2Froute.ts&appDir=%2FUsers%2Fabodhale%2Fe-cart%2FCTIS%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabodhale%2Fe-cart%2FCTIS&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftrials%2Froute&page=%2Fapi%2Ftrials%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftrials%2Froute.ts&appDir=%2FUsers%2Fabodhale%2Fe-cart%2FCTIS%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabodhale%2Fe-cart%2FCTIS&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_abodhale_e_cart_CTIS_app_api_trials_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/trials/route.ts */ \"(rsc)/./app/api/trials/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/trials/route\",\n        pathname: \"/api/trials\",\n        filename: \"route\",\n        bundlePath: \"app/api/trials/route\"\n    },\n    resolvedPagePath: \"/Users/abodhale/e-cart/CTIS/app/api/trials/route.ts\",\n    nextConfigOutput,\n    userland: _Users_abodhale_e_cart_CTIS_app_api_trials_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ0cmlhbHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnRyaWFscyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnRyaWFscyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmFib2RoYWxlJTJGZS1jYXJ0JTJGQ1RJUyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZhYm9kaGFsZSUyRmUtY2FydCUyRkNUSVMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ0c7QUFDaEY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9hYm9kaGFsZS9lLWNhcnQvQ1RJUy9hcHAvYXBpL3RyaWFscy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdHJpYWxzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdHJpYWxzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS90cmlhbHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvYWJvZGhhbGUvZS1jYXJ0L0NUSVMvYXBwL2FwaS90cmlhbHMvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftrials%2Froute&page=%2Fapi%2Ftrials%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftrials%2Froute.ts&appDir=%2FUsers%2Fabodhale%2Fe-cart%2FCTIS%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabodhale%2Fe-cart%2FCTIS&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftrials%2Froute&page=%2Fapi%2Ftrials%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftrials%2Froute.ts&appDir=%2FUsers%2Fabodhale%2Fe-cart%2FCTIS%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fabodhale%2Fe-cart%2FCTIS&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();