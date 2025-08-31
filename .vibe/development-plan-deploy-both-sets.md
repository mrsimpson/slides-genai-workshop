# Development Plan: genai-workshop (deploy-both-sets branch)

*Generated on 2025-08-31 by Vibe Feature MCP*
*Workflow: [minor](https://mrsimpson.github.io/responsible-vibe-mcp/workflows/minor)*

## Goal
Deploy both slide sets (slides.md and speaker-notes.md) to GitHub Pages with routing: main slides at root and speaker notes at /speaker route.

## Explore
### Tasks
- [x] Analyze current Slidev setup and GitHub Actions workflow
- [x] Research Slidev multi-presentation deployment options
- [x] Design routing solution for two slide sets
- [x] Plan build process modifications

### Completed
- [x] Created development plan file
- [x] Verified Slidev can build multiple presentations simultaneously
- [x] Confirmed output structure: dist/slides/ and dist/speaker-notes/
- [x] Designed routing approach: Root → slides/, /speaker → speaker-notes/

## Key Decisions
- **Multi-build approach**: Use `slidev build slides.md speaker-notes.md` to build both presentations
- **Routing strategy**: 
  - Root path (/) serves main slides from dist/slides/
  - /speaker path serves speaker notes from dist/speaker-notes/
- **Implementation**: Copy slides content to root and create /speaker symlink/copy

## Implement

### Phase Entrance Criteria:
- [x] Current setup is thoroughly analyzed
- [x] Deployment approach is clearly defined
- [x] Build process modifications are planned

### Tasks
- [x] Update GitHub Actions workflow to build both presentations
- [x] Create post-build script for routing setup
- [x] Test the deployment locally
- [x] Update package.json scripts

### Completed
- [x] Modified GitHub Actions workflow for multi-build
- [x] Added npm scripts: build-both and setup-routing
- [x] Tested local build - both routes working
- [x] Verified file structure: root → slides, /speaker → speaker-notes

## Finalize

### Phase Entrance Criteria:
- [x] Both slide sets are successfully building
- [x] Routing is working correctly
- [x] GitHub Actions workflow is updated and tested

### Tasks
- [x] Code cleanup - remove debug output
- [x] Final documentation review
- [x] Final validation test

### Completed
- [x] No debug output found in project files
- [x] No TODO/FIXME comments requiring action
- [x] Documentation accurately reflects implementation
- [x] Final build test successful - both routes working

## Key Decisions
*Important decisions will be documented here as they are made*

## Notes
*Additional context and observations*

---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
