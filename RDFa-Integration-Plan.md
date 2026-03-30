# RDFa Integration Plan for barthy.koeln

## Executive Summary

This document outlines the integration of schema.org structured data using RDFa vocabulary (`typeof` and `property` attributes) to enrich the CV/portfolio at `barthy.koeln` with semantic markup. Unlike JSON-LD, RDFa preserves semantic data in printed versions through inline attributes, supporting both enhanced SEO and print functionality.

## Rationale

The schema.org project is a community effort to define a set of schemas, vocabularies, and data formats that describe the web. By using RDFa markup, we can:

1. **Enhance SEO**: Search engines can better understand the content structure
2. **Enable Machine Readability**: Applications can programmatically extract structured data
3. **Preserve Semantic Data in Print**: Unlike JSON-LD which is hidden, RDFa attributes appear in printed output
4. **Support Multiple Formats**: RDFa can be combined with JSON-LD for maximum compatibility
5. **Improve Accessibility**: Screen readers and assistive technologies benefit from structured data

## Technical Approach

### Schema.org Types

We will implement the following schema.org types:

- `Person`: Basic profile information
- `CreativeWork`: General creative content
- `WorkInfo`: Work experience details
- `EducationalOccupationalCredential`: Education and certifications
- `SoftwareApplication`: Technology stack items
- `SoftwareSourceCode`: Open source contributions
- `ImageObject`: Profile images

### RDFa Attributes

- `typeof`: Defines the schema.org type
- `property`: Links to schema.org properties
- `itemprop`: Alternative shorthand for property (deprecated but widely supported)
- `vocab`: Defines the vocabulary namespace

## Implementation Plan

### Phase 1: Foundation

1. **Create Schema Context** (`src/context/schema.ts`)
   - Define all schema.org type enums
   - Create property mappings
   - Establish vocabulary constants

2. **Build RDFa Utilities** (`src/context/rdfa.ts`)
   - Generate RDFa attributes from schema data
   - Handle namespace resolution
   - Provide validation functions

### Phase 2: Content Model Extension

3. **Extend Content YAML Files**
   - `content/person.yml`: Person profile data
   - `content/experience.yml`: Work experience with schema mapping
   - `content/education.yml`: Educational background and certifications

4. **Update TypeScript Types** (`src/types/website.d.ts`)
   - Add schema-related type definitions
   - Extend content interface with RDFa fields

### Phase 3: Component Integration

5. **Update OIntro.vue**
   - Add `typeof="Person"` to main container
   - Map profile properties (name, jobTitle, image, etc.)
   - Include sameAs links for social profiles

6. **Update OTechstack.vue**
   - Add `typeof="SoftwareApplication"` for each technology
   - Include operatingSystem and applicationCategory properties

7. **Update OCurriculumPrimary.vue**
   - Add `typeof="WorkInfo"` for job positions
   - Add `typeof="EducationalOccupationalCredential"` for education
   - Map startDate, endDate, description, and organization

### Phase 4: Validation & Testing

8. **Create Validation Tests** (`tests/rdfa-validation.test.ts`)
   - Test RDFa attribute generation
   - Validate schema.org type correctness
   - Test data completeness
   - Performance regression tests

9. **Manual Testing**
   - Validate with [Schema.org Validator](https://validator.schema.org/)
   - Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Verify print output preserves attributes

### Phase 5: Optimization

10. **Performance Monitoring**
    - Measure impact on page load times
    - Monitor parse time for RDFa parser
    - Ensure no blocking of render

11. **SEO Verification**
    - Check search engine indexing
    - Verify rich snippet eligibility
    - Monitor structured data markup detection

## Quality Framework

### Correctness
- All RDFa attributes follow RDFa 1.1 specification
- Schema.org types are valid and semantically appropriate
- Property values match schema.org data types

### Completeness
- All relevant schema.org properties are included
- Required properties for each type are present
- Optional but recommended properties are added

### Maintainability
- Clear separation of concerns between data and markup
- Reusable utility functions
- Comprehensive documentation

### Performance
- No significant impact on page load performance
- RDFa attributes do not block rendering
- Efficient attribute generation

## Performance & Reliability

### Performance Budgets

| Metric | Target | Current |
|--------|--------|---------|
| Page Load Time | < 2s | N/A |
| RDFa Parse Time | < 50ms | N/A |
| Total Attributes | < 500 | N/A |
| Bundle Size Impact | < 5KB | N/A |

### Error Handling

- Graceful degradation if RDFa parser fails
- Fallback to plain content for invalid markup
- Comprehensive error logging for debugging

## Knowledge Sharing

### Documentation

- Inline comments in utility functions
- JSDoc documentation for public APIs
- Schema.org reference links in comments

### Training

- Team knowledge sharing session on RDFa
- Documentation of schema.org best practices
- Examples of RDFa patterns for common use cases

## Success Metrics

1. **SEO Impact**
   - Improved search engine rankings for target keywords
   - Increased rich snippet visibility
   - Better search result appearance

2. **Data Quality**
   - 100% validation pass rate on Schema.org validator
   - Complete coverage of all schema.org types
   - No broken or invalid RDFa markup

3. **Performance**
   - No regression in Core Web Vitals
   - RDFa parsing does not impact user experience
   - Print output remains clean and readable

4. **Maintainability**
   - Zero technical debt from RDFa implementation
   - Easy to add new schema.org types
   - Clear documentation for future maintainers

## Timeline

- **Week 1**: Foundation (schema.ts, rdfa.ts, content model)
- **Week 2**: Component Integration (OIntro, OTechstack, OCurriculum)
- **Week 3**: Validation & Testing (test suite, manual validation)
- **Week 4**: Optimization & Documentation (performance tuning, docs)

## Decision Log

### Decision 1: Use RDFa over JSON-LD

**Context**: We need structured data that also appears in print output

**Decision**: Use RDFa 1.1 with schema.org vocabulary

**Rationale**: 
- RDFa attributes are inline and visible in print
- JSON-LD is hidden in script tags and lost in print
- Both can coexist, but RDFa fulfills print requirement

**Status**: ✅ Decided

---

*Last updated: 2026-03-30*
