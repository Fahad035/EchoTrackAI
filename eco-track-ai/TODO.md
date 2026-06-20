# TODO - Dashboard Firestore Integration

- [ ] Update `src/services/dashboardService.js` to be production-ready Firestore fetch for `carbonRecords`.
- [ ] Refactor `src/pages/Dashboard.jsx`:
  - [ ] Add `loading` + `error` state.
  - [ ] Fetch records with `getCarbonRecords()` in `useEffect`.
  - [ ] Compute aggregates (totals, submissions count, biggest emission source) with `useMemo`.
  - [ ] Replace hardcoded StatCard values with Firestore-derived values.
  - [ ] Update Recharts `BarChart`/`PieChart` data from Firestore-derived totals.
  - [ ] Handle empty database state gracefully.
  - [ ] Handle Firestore errors gracefully.
  - [ ] Keep existing UI sections/styling/layout unchanged.
- [ ] Run `npm test` and/or `npm run build` if available.

