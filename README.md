# @hoststack/ui

> A React component library styled with Stoop, designed specifically for HostStack's internal projects and design system.

[![npm version](https://img.shields.io/npm/v/@hoststack/ui.svg)](https://www.npmjs.com/package/@hoststack/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ⚠️ Important Notice

**This library is built specifically for HostStack's design system and internal use cases.** While it's open-sourced for transparency and potential inspiration, it's **not intended as a general-purpose component library** for public consumption.

- ✅ **Use if**: You're working on HostStack projects or want to study the implementation
- ❌ **Consider alternatives if**: You need a general-purpose UI library for your own projects

For general-purpose React component libraries, consider [Chakra UI](https://chakra-ui.com/), [Mantine](https://mantine.dev/), [Ant Design](https://ant.design/), or [Material-UI](https://mui.com/) instead.

## Features

- 🎨 **Modern Design System** - Carefully crafted components with consistent theming
- 🏗️ **Built for React** - Compatible with React 19+
- 🎯 **TypeScript First** - Full type safety with comprehensive TypeScript definitions
- 📱 **Responsive** - Mobile-first design with flexible breakpoint system
- 🎭 **Theming** - Light/dark mode support with Stoop CSS-in-JS
- ⚡ **Performance** - Tree-shakeable with minimal runtime overhead
- 📖 **Well Documented** - Auto-generated API documentation from TypeScript interfaces

## Installation

```bash
# Using pnpm (recommended)
pnpm add @hoststack/ui

# Using npm
npm install @hoststack/ui

# Using yarn
yarn add @hoststack/ui
```

### Peer Dependencies
Ensure you have the required peer dependencies:

```bash
pnpm add react react-dom next
```

## Quick Start

```tsx
import { Provider, Button, Text, Stack } from '@hoststack/ui';

function App() {
  return (
    <Provider>
      <Stack direction="column" align="center" css={{ padding: '$large' }}>
        <Text as="h1">Welcome to HostStack UI</Text>
        <Button theme="solid" onClick={() => alert('Hello!')}>
          Get Started
        </Button>
      </Stack>
    </Provider>
  );
}
```

## Development

To work on components locally:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run linting and formatting
pnpm tidy

# Build the library
pnpm build

# Generate documentation
pnpm docs
```

## Project Structure

```tree
src/
├── components/          # React components
├── hooks/              # Custom React hooks
├── types.ts            # TypeScript interfaces (auto-documented)
├── stoop.config.ts    # Design system configuration
└── index.ts            # Main entry point

docs/                   # Auto-generated API documentation
playground/             # Component demos and examples
```

## Documentation

Detailed TypeScript interfaces, props, and examples are available in the [`docs/interfaces/`](./docs/interfaces/) directory. All documentation is auto-generated from TSDoc comments in the source code.

## Theming

The library uses Stoop for styling with a comprehensive design system:

```tsx
import { Provider } from '@hoststack/ui';

// Enable dark mode
<Provider dark>
  <YourApp />
</Provider>

// Custom CSS with theme tokens
<Button css={{
  backgroundColor: '$purple',
  color: '$background',
}}>
  Custom Button
</Button>
```

### Available Theme Tokens

- **Colors**: `$background`, `$text`, `$purple`, `$blue`, `$orange`, `$yellow`, `$border`, `$borderLight`, `$overlay`, `$surface`, `$surfaceHover`, `$surfaceLight`
- **Spacing**: `$none`, `$smallest`, `$smaller`, `$small`, `$medium`, `$large`, `$larger`, `$largest`, `$excess`
- **Radii**: `$small`, `$medium`, `$large`
- **Font Sizes**: `$small`, `$default`, `$h6`, `$h5`, `$h4`, `$h3`, `$h2`, `$h1`
- **Breakpoints**: `phone`, `phoneX`, `tablet`, `tabletX`, `laptop`, `laptopX`, `desktop`, `desktopX`, `wide`

### Available Utils

- **Responsive**: `phone()`, `phoneX()`, `tablet()`, `tabletX()`, `laptop()`, `laptopX()`, `desktop()`, `desktopX()`, `wide()`, `micro()`, `print()`, `retina()`
- **Visibility**: `hidden()`, `hiddenInline()`, `hiddenSpecial()`, `visible()`, `visibleInline()`, `visibleSpecial()`
- **Theme-aware**: `darkOnly()`, `lightOnly()`

```tsx
// Example usage of utils
<Button css={{
  phone: { fontSize: '$small' },      // Responsive
  hidden: 'tablet',                   // Hide on tablet
  darkOnly: { color: '$yellow' }  // Dark mode specific
}}>
  Responsive Button
</Button>
```





## Acknowledgments

This library is built on top of excellent open source projects:

- **[Stoop](https://github.com/cristianbote/stoop)** - CSS-in-JS library with near-zero runtime
- **[@radix-ui/react-icons](https://www.radix-ui.com/icons)** - Clean, consistent icon family for interfaces
- **[react-hot-toast](https://react-hot-toast.com/)** - Smoking hot React notifications
- **[fast-sort](https://github.com/snovakovic/fast-sort)** - Blazing fast array sorting










## Components

This library includes the following components with full TypeScript support and comprehensive documentation:

- **[Accordion](./docs/components/interfaces/IAccordion.md)** - Collapsible content sections with multiple expansion support
- **[Avatar](./docs/components/interfaces/IAvatar.md)** - User profile image with fallback text display
- **[Badge](./docs/components/interfaces/IBadge.md)** - Small status indicators and informational labels
- **[Box](./docs/components/interfaces/IBox.md)** - Versatile container with optional image, header, and footer
- **[Button](./docs/components/interfaces/IButton.md)** - Interactive element for user actions with multiple themes
- **[Divider](./docs/components/interfaces/IDivider.md)** - Visual separator line with customizable spacing
- **[Field](./docs/components/interfaces/IField.md)** - Multi-line textarea input with validation and actions
- **[Form](./docs/components/interfaces/IForm.md)** - Form wrapper with validation and submission handling
- **[Icon](./docs/components/interfaces/IIcon.md)** - Consistent icon wrapper with theming support
- **[Input](./docs/components/interfaces/IInput.md)** - Single-line form input with validation and actions
- **[Loading](./docs/components/interfaces/ILoading.md)** - Animated loading spinner with customizable appearance
- **[LoadingOverlay](./docs/components/interfaces/ILoadingOverlay.md)** - Full-screen loading overlay with message display
- **[Maps](./docs/components/interfaces/IMaps.md)** - Component for maps functionality
- **[Menu](./docs/components/interfaces/IMenu.md)** - Dropdown menu with nested options and keyboard navigation
- **[Modal](./docs/components/interfaces/IModal.md)** - Centered overlay dialog for important interactions
- **[Places](./docs/components/interfaces/IPlaces.md)** - Component for places functionality
- **[Popover](./docs/components/interfaces/IPopover.md)** - Floating content overlay triggered by user interaction
- **[Portal](./docs/components/interfaces/IPortal.md)** - Render content outside normal DOM hierarchy
- **[Provider](./docs/components/interfaces/IProvider.md)** - Theme and context provider for the entire UI system
- **[Select](./docs/components/interfaces/ISelect.md)** - Dropdown selection with filtering and positioning options
- **[SelectMulti](./docs/components/interfaces/ISelectMulti.md)** - Multi-selection dropdown with limits and batch operations
- **[Stack](./docs/components/interfaces/IStack.md)** - Responsive layout container with flexible spacing and alignment
- **[Table](./docs/components/interfaces/ITable.md)** - Data table with sorting, pagination, and nested rows
- **[Text](./docs/components/interfaces/IText.md)** - Versatile text element with multiple sizes, styles, and link support
- **[Toast](./docs/components/interfaces/IToast.md)** - Component for toast functionality
- **[View](./docs/components/interfaces/IView.md)** - Main layout container with hero styling and responsive behavior

> 📖 **Full API Documentation**: Detailed TypeScript interfaces, props, and examples are available in the [`docs/components/interfaces/`](./docs/components/interfaces/) directory. All documentation is auto-generated from TSDoc comments in the source code.

## License

[MIT](./LICENSE.md) © [HostStack](https://github.com/hoststack)

---

Built with love by [dolmios](https://github.com/dolmios) for [HostStack](https://github.com/hoststack)
