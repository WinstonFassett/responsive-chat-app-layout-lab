# Responsive Chat Layout Specifications

## Overview

This document provides detailed technical specifications for implementing responsive chat application layouts. Each pattern addresses different user needs and technical constraints while maintaining consistency through shared CSS variables and component patterns.

---

## Pattern 3: Sliding Panels

### Concept
Horizontal panel transitions that preserve spatial relationships between content areas. Popular in messaging applications for navigating between channel lists, message threads, and user profiles.

### Technical Requirements

#### Desktop Layout (≥1024px)
- **Three-column layout**: Sidebar (320px) + Main Content (flexible) + Optional Thread Panel (320px)
- **Sliding behavior**: Panels slide horizontally to reveal/hide content
- **Spatial preservation**: Users understand left-to-right content hierarchy
- **Smooth transitions**: 300ms ease-out animations with hardware acceleration

#### Mobile Layout (<1024px)
- **Single panel view**: Full-width content with horizontal navigation
- **Swipe gestures**: Touch-based sliding between panels
- **Panel stack**: Breadcrumb navigation for deep hierarchies
- **Back button integration**: Browser back button support

#### CSS Variables
```css
:root {
  --panel-width: 20rem;           /* Standard panel width */
  --slide-duration: 300ms;        /* Slide animation timing */
  --slide-easing: ease-out;       /* Animation easing */
  --gesture-threshold: 50px;      /* Swipe detection threshold */
}
```

#### Animation Strategy
- **Transform-based**: Use `translateX()` for hardware acceleration
- **Coordinated timing**: All panels animate simultaneously
- **Gesture integration**: Touch events control animation progress
- **Momentum scrolling**: Natural feel for swipe interactions

#### JavaScript Requirements
- Panel state management (current, previous, next)
- Touch gesture detection and handling
- Animation coordination and timing
- History management for browser navigation
- Responsive behavior switching

---

## Pattern 4: Modal Overlays

### Concept
Secondary content presented in modals (desktop) and bottom sheets (mobile). Maintains focus on primary content while providing contextual information and actions.

### Technical Requirements

#### Desktop Layout (≥1024px)
- **Centered modals**: Overlay with backdrop blur/darken
- **Size variants**: Small (400px), Medium (600px), Large (800px), Full-screen
- **Focus management**: Trap focus within modal, restore on close
- **Backdrop interaction**: Click outside to close (configurable)

#### Mobile Layout (<1024px)
- **Bottom sheets**: Slide up from bottom edge
- **Drag handle**: Visual indicator for drag-to-dismiss
- **Snap points**: Half-screen, full-screen positions
- **Safe area handling**: Respect device safe areas

#### CSS Variables
```css
:root {
  --modal-sm: 25rem;              /* Small modal width */
  --modal-md: 37.5rem;            /* Medium modal width */
  --modal-lg: 50rem;              /* Large modal width */
  --sheet-handle-height: 1.5rem;  /* Bottom sheet handle */
  --backdrop-opacity: 0.5;        /* Backdrop transparency */
  --modal-radius: 0.75rem;        /* Modal border radius */
}
```

#### Animation Strategy
- **Fade + scale**: Modal entrance with backdrop fade
- **Slide up**: Bottom sheet from screen bottom
- **Spring physics**: Natural bounce for sheet interactions
- **Stagger timing**: Content appears after container

#### JavaScript Requirements
- Focus trap implementation
- Escape key handling
- Backdrop click detection
- Touch gesture for bottom sheet
- Portal rendering for proper z-index
- Accessibility announcements

---

## Pattern 5: Stack Navigation

### Concept
iOS-style hierarchical navigation with push/pop transitions. Ideal for deep content structures with clear parent-child relationships.

### Technical Requirements

#### Desktop Layout (≥1024px)
- **Breadcrumb navigation**: Horizontal breadcrumb trail
- **Slide transitions**: Content slides left/right on navigation
- **Sidebar integration**: Stack navigation within sidebar panel
- **URL synchronization**: Browser URL reflects current stack position

#### Mobile Layout (<1024px)
- **Full-screen transitions**: Each level takes full screen
- **Back button**: Prominent back navigation in header
- **Slide animations**: iOS-style left/right slide transitions
- **Gesture support**: Swipe from edge to go back

#### CSS Variables
```css
:root {
  --stack-slide-duration: 350ms;  /* Stack transition timing */
  --stack-slide-easing: cubic-bezier(0.4, 0, 0.2, 1); /* Material motion */
  --breadcrumb-height: 2.5rem;    /* Breadcrumb bar height */
  --back-button-size: 2.75rem;    /* Back button touch target */
}
```

#### Animation Strategy
- **Slide left/right**: Horizontal transitions between levels
- **Parallax effect**: Background content moves slower
- **Momentum preservation**: Smooth gesture-driven navigation
- **Depth indication**: Subtle shadows/elevation changes

#### JavaScript Requirements
- Navigation stack management
- URL routing and synchronization
- History API integration
- Touch gesture detection (edge swipe)
- Breadcrumb generation
- Deep linking support

---

## Pattern 6: Material Drawer

### Concept
Material Design navigation drawer with persistent (desktop) and temporary (mobile) modes. Emphasizes elevation, shadows, and material motion principles.

### Technical Requirements

#### Desktop Layout (≥1024px)
- **Persistent drawer**: Always visible, content adjusts
- **Elevation system**: 8dp elevation with proper shadows
- **Scrim overlay**: Optional darkening of main content
- **Mini variant**: Collapsed drawer showing only icons

#### Mobile Layout (<1024px)
- **Temporary drawer**: Slides over content with backdrop
- **Swipe gestures**: Open/close with edge swipe
- **Elevation**: 16dp elevation for mobile overlay
- **Status bar**: Drawer extends under status bar

#### CSS Variables
```css
:root {
  --drawer-width: 18rem;          /* Standard drawer width */
  --drawer-mini-width: 3.5rem;    /* Mini drawer width */
  --drawer-elevation: 8;          /* Material elevation level */
  --drawer-duration: 225ms;       /* Material motion timing */
  --drawer-easing: cubic-bezier(0.4, 0, 0.6, 1); /* Standard easing */
}
```

#### Animation Strategy
- **Material motion**: Follows Material Design motion principles
- **Elevation changes**: Shadow transitions during open/close
- **Swipe velocity**: Respects gesture velocity for natural feel
- **Scrim fade**: Backdrop opacity changes with drawer position

#### JavaScript Requirements
- Swipe gesture detection
- Elevation shadow calculations
- Scrim opacity management
- Focus management
- Responsive mode switching
- Touch event handling

---

## Pattern 7: Flexbox Holy Grail

### Concept
Pure CSS flexbox implementation requiring no JavaScript. Demonstrates responsive layout using only CSS Grid and Flexbox properties.

### Technical Requirements

#### All Viewports
- **CSS-only solution**: No JavaScript dependencies
- **Flexbox layout**: Modern flexbox properties
- **CSS Grid integration**: Grid for complex layouts
- **Container queries**: Modern responsive techniques

#### CSS Variables
```css
:root {
  --content-min-width: 20rem;     /* Minimum content width */
  --sidebar-flex-basis: 20rem;    /* Sidebar preferred width */
  --sidebar-flex-grow: 0;         /* Sidebar growth factor */
  --content-flex-grow: 1;         /* Content growth factor */
  --breakpoint-collapse: 768px;   /* Mobile breakpoint */
}
```

#### Layout Strategy
- **Flexbox containers**: Nested flex containers for layout
- **Flex properties**: Grow, shrink, basis for responsive behavior
- **CSS Grid**: Grid for complex multi-dimensional layouts
- **Container queries**: Element-based responsive design

#### Implementation Focus
- **No JavaScript**: Pure CSS implementation
- **Progressive enhancement**: Works without JavaScript
- **Performance**: Minimal layout calculations
- **Browser support**: Modern browser features

---

## Pattern 8: Split View

### Concept
iPad-style adaptive interface that shows master-detail on tablets and stacked navigation on phones. Platform-appropriate responsive behavior.

### Technical Requirements

#### Desktop/Tablet Layout (≥768px)
- **Master-detail**: Side-by-side content panels
- **Adaptive sizing**: Master panel 30-40% width
- **Selection state**: Visual indication of selected items
- **Keyboard navigation**: Arrow keys for selection

#### Mobile Layout (<768px)
- **Stacked navigation**: Full-screen master, then detail
- **Back navigation**: Return to master from detail
- **Selection memory**: Remember selection when returning
- **Touch optimization**: Large touch targets

#### CSS Variables
```css
:root {
  --master-width-ratio: 0.35;     /* Master panel width ratio */
  --master-min-width: 20rem;      /* Minimum master width */
  --detail-min-width: 25rem;      /* Minimum detail width */
  --selection-color: #007AFF;     /* Selection highlight color */
  --divider-width: 1px;           /* Panel divider width */
}
```

#### Animation Strategy
- **Smooth transitions**: Between stacked and split modes
- **Selection feedback**: Highlight animations
- **Content transitions**: Fade between detail views
- **Responsive reflow**: Smooth breakpoint transitions

#### JavaScript Requirements
- Selection state management
- Responsive mode detection
- Keyboard navigation handling
- Touch event optimization
- History management
- Deep linking support

---

## Shared Technical Standards

### CSS Variables Architecture
All patterns use consistent variable naming and organization:

```css
:root {
  /* Layout Dimensions */
  --sidebar-width: 20rem;
  --thread-width: 20rem;
  --header-height: 4rem;
  --tab-height: 5rem;
  --profile-height: 4rem;
  
  /* Animation Timing */
  --transition-duration: 300ms;
  --transition-easing: ease-out;
  --slide-duration: 350ms;
  --slide-easing: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Component Patterns */
  --avatar-sm: 2rem;
  --avatar-md: 2.5rem;
  --avatar-lg: 4rem;
  --status-size: 0.5rem;
  
  /* Colors */
  --status-online: #10B981;
  --status-away: #F59E0B;
  --status-offline: #6B7280;
}
```

### Component Patterns
Standardized classes for consistent implementation:

```css
/* Avatar Patterns */
.avatar-xs { @apply w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0; }
.avatar-sm { @apply w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0; }
.avatar-md { @apply w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0; }
.avatar-lg { @apply w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0; }

/* Status Indicators */
.status-online { @apply w-2 h-2 bg-green-400 rounded-full flex-shrink-0; }
.status-away { @apply w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0; }
.status-offline { @apply w-2 h-2 bg-gray-400 rounded-full flex-shrink-0; }

/* Transitions */
.transition-standard { 
  transition: all var(--transition-duration) var(--transition-easing);
}
```

### JavaScript Integration Pattern
Consistent CSS variable reading across all patterns:

```javascript
const getCSSVariable = (name) => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(name).trim();
};

// Usage
const SIDEBAR_WIDTH = getCSSVariable('--sidebar-width');
const TRANSITION_DURATION = parseInt(getCSSVariable('--transition-duration'));
```

### Performance Requirements
- **60fps animations**: Hardware-accelerated transforms
- **Minimal reflows**: Avoid layout-triggering properties
- **Efficient gestures**: Debounced touch event handling
- **Memory management**: Clean up event listeners
- **Progressive enhancement**: Works without JavaScript where possible

### Accessibility Standards
- **WCAG AA compliance**: Color contrast and keyboard navigation
- **Focus management**: Logical tab order and focus trapping
- **Screen reader support**: Proper ARIA labels and announcements
- **Reduced motion**: Respect prefers-reduced-motion setting
- **Touch targets**: Minimum 44px touch targets on mobile

### Browser Support
- **Modern browsers**: Full feature support
- **Progressive enhancement**: Graceful degradation for older browsers
- **Mobile optimization**: Touch-friendly interactions
- **Performance**: Optimized for mobile devices
- **Fallbacks**: CSS-only alternatives where possible

---

This specification provides the technical foundation for implementing all eight responsive chat layout patterns with consistency, maintainability, and excellent user experience across all devices and browsers.