import Advance from '@civ-clone/core-science/Advance';

// The advance research carries on into once every other advance is known. It is repeatable: each time it's completed
//  it counts as one more advance known, and it can be researched again.
export class FutureTechnology extends Advance {
  static readonly repeatable = true;
}

export default FutureTechnology;
