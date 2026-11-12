# base-science-advance-future-technology

`FutureTechnology`, the repeatable advance (`static repeatable = true`): research carries on into it once every other
advance is known, and each time it is completed it counts as one more advance known.

- `FutureTechnology`: the advance.
- `lib/knowsEveryNonRepeatableAdvance(advanceRegistry, discoveredAdvances)`: whether every registered advance that
  can't be repeated is known, for a ruleset's `Requirements` rule for `FutureTechnology`.

A library: unlike the other `base-science-advance-*` packages it registers nothing itself, so the ruleset that offers it
registers it (last, after the advances it follows) along with its requirement rule.
