# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A client-side web application for generating ATF Form 5320.23 (National Firearms Act Responsible Person Questionnaire) PDFs. All processing happens in the browser using mupdf.js (WebAssembly) - no data is transmitted to servers.

## Build Commands

- `npm run dev` - Start Vite development server (port 8080, auto-opens browser)
- `npm run build` - Build production bundle to `dist/`
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `nix build` - Build with Nix (preferred for production/reproducibility)

## Architecture

### TypeScript Modules (`src/`)

- **`index.ts`** - PDF generation entry point. Maps form data to PDF widget names and fills the template using mupdf.js. Handles signature embedding as JPEG stamp annotations.
- **`form.ts`** - Form UI logic: validation, state management (URL hash persistence), dynamic field interactions, prefill configuration support.
- **`signature.ts`** - Signature pad implementation using autopen library. Captures strokes, renders with Catmull-Rom splines, serializes to Z85.
- **`types.ts`** - TypeScript interfaces for `NFAFormData`, `PrefillConfig`, and global `Window` extensions.
- **`prefill-config.ts`** - Default prefill values for form fields.

### Key Data Flow

1. Form state serialized to base64-encoded JSON in URL hash (auto-saves on input)
2. `serializeForm()` extracts data from HTML form, normalizes to uppercase
3. `mapFormDataToPdfFields()` converts form data to PDF widget name/value pairs
4. mupdf.js fills widgets and embeds signature as stamp annotation
5. Unnecessary PDF pages (3 & 4) are deleted before download

### PDF Widget Mapping

The PDF has deeply nested widget names like `topmostSubform[0].Page1[0].applicantaddress[0]`. The TypeScript code maps HTML field names to these widget names. Key patterns:

- Checkboxes/radio buttons use a `SELECTED` symbol to toggle
- Text fields normalized to uppercase
- Dates formatted as MM/DD/YYYY
- Multi-line fields joined with `\n`
- CLEO copy pages (5-6) use `getCleoWidgetVariant()` to transform widget names

### Form Field Dependencies

- Q3a address syncs with Q2 when "Same as 2" checkbox is checked
- Q6m.2 options depend on Q6m.1 selection (Yes enables Yes/No, No enables N/A)
- Q8 UPIN input only enabled when "Yes" is selected
- "Other" text inputs enabled only when corresponding radio/checkbox is selected
- Prefill config can lock fields as readonly

## Static Assets

- **`static/f_5320.23_national_firearms_act_nfa_responsible_person_questionnaire.pdf`** - Official ATF form template
- **`static/styles.css`** - Form styling

## Nix Integration

Uses `importNpmLock.buildNodeModules` for dependency management. Development shell includes `linkNodeModulesHook` for automatic node_modules symlinking with direnv.

## Deployment

GitHub Actions deploys to GitHub Pages on push to main. Build output is static files in `dist/`.
