"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.knowsEveryNonRepeatableAdvance = void 0;
/**
 * Whether `discoveredAdvances` include every advance in `advanceRegistry` that can't be repeated: what a repeatable
 * advance such as `FutureTechnology` needs, as a ruleset's `Requirements` rule effect for it.
 */
const knowsEveryNonRepeatableAdvance = (advanceRegistry, discoveredAdvances) => advanceRegistry
    .filter((AdvanceType) => !AdvanceType.repeatable)
    .every((AdvanceType) => discoveredAdvances.some((advance) => advance instanceof AdvanceType));
exports.knowsEveryNonRepeatableAdvance = knowsEveryNonRepeatableAdvance;
exports.default = exports.knowsEveryNonRepeatableAdvance;
//# sourceMappingURL=knowsEveryNonRepeatableAdvance.js.map