import Advance from '@civ-clone/core-science/Advance';
import AdvanceRegistry from '@civ-clone/core-science/AdvanceRegistry';
import FutureTechnology from '../FutureTechnology';
import { expect } from 'chai';
import knowsEveryNonRepeatableAdvance from '../lib/knowsEveryNonRepeatableAdvance';

class First extends Advance {}
class Second extends Advance {}

describe('FutureTechnology', (): void => {
  it('is a repeatable advance', (): void => {
    expect(Object.prototype.isPrototypeOf.call(Advance, FutureTechnology)).true;
    expect(FutureTechnology.repeatable).true;
    expect(First.repeatable).not.true;
  });
});

describe('knowsEveryNonRepeatableAdvance', (): void => {
  const advanceRegistry = new AdvanceRegistry(),
    discovered = (...AdvanceTypes: (typeof Advance)[]): Advance[] =>
      AdvanceTypes.map((AdvanceType) => new AdvanceType());

  advanceRegistry.register(First, Second, FutureTechnology);

  it('is false while an advance that cannot be repeated is unknown', (): void => {
    expect(knowsEveryNonRepeatableAdvance(advanceRegistry, discovered())).false;
    expect(knowsEveryNonRepeatableAdvance(advanceRegistry, discovered(First)))
      .false;
  });

  it('is true once all of them are known, with or without the repeatable one', (): void => {
    expect(
      knowsEveryNonRepeatableAdvance(advanceRegistry, discovered(First, Second))
    ).true;
    expect(
      knowsEveryNonRepeatableAdvance(
        advanceRegistry,
        discovered(Second, First, FutureTechnology, FutureTechnology)
      )
    ).true;
  });
});
