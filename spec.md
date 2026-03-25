# RecoveryHub Agency

## Current State
Multi-portal app with: Landing Page, Admin Dashboard (11 sections), Agency Portal, ARMB Website, Other Users Portal. All frontend-only with mock data.

## Requested Changes (Diff)

### Add
- BankOfficialDashboard.tsx: New portal for bank officials with sections: Dashboard Overview, Assigned Cases, Recovery Status, Payment Tracking, Field Reports, Documents, Messages, Profile
- Bank Official button on Landing Page (nav, hero, portals CTA section)
- Route in App.tsx for 'bankofficial' view

### Modify
- LandingPage.tsx: Add Bank Official portal card and buttons (nav, hero, CTA grid becomes 5 columns on xl)
- App.tsx: Add 'bankofficial' to view state and routing

### Remove
- Nothing

## Implementation Plan
1. Create BankOfficialDashboard.tsx with sidebar nav and 8 sections, all mock data
2. Update App.tsx to include bankofficial view
3. Update LandingPage.tsx to add Bank Official portal buttons and card
