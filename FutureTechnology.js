"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FutureTechnology = void 0;
const Advance_1 = require("@civ-clone/core-science/Advance");
// The advance research carries on into once every other advance is known. It is repeatable: each time it's completed
//  it counts as one more advance known, and it can be researched again.
class FutureTechnology extends Advance_1.default {
}
exports.FutureTechnology = FutureTechnology;
FutureTechnology.repeatable = true;
exports.default = FutureTechnology;
//# sourceMappingURL=FutureTechnology.js.map