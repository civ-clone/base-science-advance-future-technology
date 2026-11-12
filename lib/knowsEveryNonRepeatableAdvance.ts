import Advance from '@civ-clone/core-science/Advance';
import { AdvanceRegistry } from '@civ-clone/core-science/AdvanceRegistry';

/**
 * Whether `discoveredAdvances` include every advance in `advanceRegistry` that can't be repeated: what a repeatable
 * advance such as `FutureTechnology` needs, as a ruleset's `Requirements` rule effect for it.
 */
export const knowsEveryNonRepeatableAdvance = (
  advanceRegistry: AdvanceRegistry,
  discoveredAdvances: Advance[]
): boolean =>
  advanceRegistry
    .filter((AdvanceType: typeof Advance): boolean => !AdvanceType.repeatable)
    .every((AdvanceType): boolean =>
      discoveredAdvances.some(
        (advance: Advance): boolean => advance instanceof AdvanceType
      )
    );

export default knowsEveryNonRepeatableAdvance;
