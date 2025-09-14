# Code Cleanup and Optimization Plan

## 1. Remove Unused Dependencies

- **Remove Zod**: Not used anywhere in the codebase but listed in dependencies
- **Performance Impact**: Reduces bundle size by ~13KB

## 2. Fix Type Issues & Improve Type Safety

- **Store Types**: Replace `any` types in ModalState interface with proper Experience type
- **Constants Import**: Remove unused ANIMATION_VARIANTS import in hero.tsx
- **Performance Impact**: Better TypeScript strict mode compliance, improved development experience

## 3. Eliminate Code Duplication

- **Duplicate Scroll Logic**: Two separate scroll implementations (utils.ts and hook)
- **Duplicate Email Validation**: Same regex pattern defined in two places
- **Animation Variants**: Similar animation definitions duplicated across components
- **Performance Impact**: Reduced bundle size, better maintainability

## 4. Optimize Performance Issues

- **Inefficient Observer Cleanup**: useScrollAnimation hook has potential memory leaks
- **Missing Memoization**: Hero component recreates animation variants on every render
- **Multiple Background Components**: Three unused background components imported
- **Performance Impact**: Better memory management, reduced re-renders, smaller bundle

## 5. Remove Redundant Code & Comments

- **Placeholder Comments**: Empty comment blocks and obvious comments
- **Unused Hook**: useScrollReveal hook not actually used despite being imported
- **Redundant Font Preconnect**: Font links already handled by Next.js font optimization
- **Performance Impact**: Cleaner codebase, reduced bundle size

## 6. Improve Code Organization

- **Consolidate Animation Logic**: Merge scroll animation approaches into single pattern
- **Extract Magic Numbers**: Replace hardcoded delays with constants
- **Simplify Component Logic**: Break down complex components like Hero
- **Performance Impact**: Better maintainability, consistent patterns

## Key Files to Modify:

- `/src/lib/store.ts` - Fix any types
- `/src/components/sections/hero.tsx` - Remove unused import, memoize variants
- `/src/hooks/use-scroll-animation.ts` - Fix memory leaks
- `/src/lib/utils.ts` - Remove duplicate scroll function
- `/src/lib/constants.ts` - Add missing constants, remove duplicate regex
- `package.json` - Remove zod dependency
- `/src/app/layout.tsx` - Remove redundant font preconnect links
- `/src/app/page.tsx` - Remove unused background component imports

**Total Estimated Bundle Size Reduction**: ~15-20KB
**Development Experience**: Improved type safety, better organization, fewer potential bugs
