# @remirror/react-hooks

## 1.0.0-next.34

> 2020-09-10

### Patch Changes

- Updated dependencies [[`27b358e4`](https://github.com/remirror/remirror/commit/27b358e4cb877a1e8df61c9d5326f366e66f30dc), [`db7165f1`](https://github.com/remirror/remirror/commit/db7165f15c3161e1e51faae4f85571b4319c61be), [`5945dffe`](https://github.com/remirror/remirror/commit/5945dffeadac8ae568be1ab0014e1186e03d5fb0)]:
  - @remirror/core@1.0.0-next.34
  - @remirror/react@1.0.0-next.34
  - @remirror/extension-emoji@1.0.0-next.34
  - @remirror/extension-events@1.0.0-next.34
  - @remirror/extension-history@1.0.0-next.34
  - @remirror/extension-mention@1.0.0-next.34
  - @remirror/extension-mention-atom@1.0.0-next.34
  - @remirror/extension-positioner@1.0.0-next.34
  - @remirror/react-utils@1.0.0-next.34
  - @remirror/i18n@1.0.0-next.34
  - @remirror/pm@1.0.0-next.34

## 1.0.0-next.33

> 2020-09-07

### Patch Changes

- 92ed4135: **BREAKING**: 💥 Remove export of `useSetState` and use default `useState` instead.
- Updated dependencies [7a34e15d]
- Updated dependencies [7a34e15d]
- Updated dependencies [7a34e15d]
- Updated dependencies [7a34e15d]
- Updated dependencies [7a34e15d]
- Updated dependencies [7a34e15d]
- Updated dependencies [7a34e15d]
- Updated dependencies [525ac3d8]
- Updated dependencies [7a34e15d]
- Updated dependencies [7a34e15d]
- Updated dependencies [7a34e15d]
- Updated dependencies [7a34e15d]
- Updated dependencies [d47bd78f]
- Updated dependencies [92ed4135]
  - @remirror/extension-mention@1.0.0-next.33
  - @remirror/core@1.0.0-next.33
  - @remirror/extension-history@1.0.0-next.33
  - @remirror/react@1.0.0-next.33
  - @remirror/extension-emoji@1.0.0-next.33
  - @remirror/extension-events@1.0.0-next.33
  - @remirror/extension-mention-atom@1.0.0-next.33
  - @remirror/extension-positioner@1.0.0-next.33
  - @remirror/react-utils@1.0.0-next.33
  - @remirror/i18n@1.0.0-next.33

## 1.0.0-next.32

> 2020-09-05

### Minor Changes

- [`5786901c`](https://github.com/remirror/remirror/commit/5786901c58d717c0921415f7bfd1f480c39a44f3) [#645](https://github.com/remirror/remirror/pull/645) Thanks [@ifiokjr](https://github.com/ifiokjr)! - Add support for prioritized keymaps. It's now possible to make sure that a hook which consumes `useKeymap` runs before the extension keybindings.

  ```tsx
  import React from 'react';
  import { ExtensionPriority } from 'remirror/core';
  import { useKeymap } from 'remirror/react/hooks';

  const KeymapHook = () => {
    // Make sure this keybinding group is run first!
    useKeymap({ Enter: () => doSomething() }, ExtensionPriority.Highest);

    // This one we don't care about 🤷‍♀️
    useKeymap({ 'Shift-Delete': () => notImportant() }, ExtensionPriority.Lowest);

    return <div />;
  };
  ```

  Here is a breakdown of the default priorities when consuming keymaps.

  - Hooks within `remirror/react/hooks` which consume `useKeymap` have a priority of `ExtensionPriority.High`.
  - `useKeymap` is given a priority of `ExtensionPriority.Medium`.
  - The `createKeymap` method for extensions is given a priority of `ExtensionPriority.Default`.
  - The `baseKeymap` which is added by default is given a priority of `ExtensionPriority.Low`.

  To change the default priority of the `createKeymap` method in a custom extension wrap the `KeyBindings` return in a tuple with the priority as the first parameter.

  ```ts
  import { ExtensionPriority, KeyBindings, KeyBindingsTuple, PlainExtension } from 'remirror/core';

  class CustomExtension extends PlainExtension {
    get name() {
      return 'custom' as const;
    }

    createKeymap(): KeyBindingsTuple {
      const bindings = {
        Enter: () => true,
        Backspace: () => true,
      };

      return [ExtensionPriority.High, bindings];
    }
  }
  ```

### Patch Changes

- [`28d1fd48`](https://github.com/remirror/remirror/commit/28d1fd486f1c73d66d6c678821cfa744751250b8) [#642](https://github.com/remirror/remirror/pull/642) Thanks [@ifiokjr](https://github.com/ifiokjr)! - Fix issue with `useEmoji`, `useKeymap` and `useEvents` when used together with `useRemirror({ autoUpdate: true })` causing an infinite loop.

- Updated dependencies [[`55e11ba3`](https://github.com/remirror/remirror/commit/55e11ba3515d54dda1352a15c4e86b85fb587016), [`28d1fd48`](https://github.com/remirror/remirror/commit/28d1fd486f1c73d66d6c678821cfa744751250b8), [`5786901c`](https://github.com/remirror/remirror/commit/5786901c58d717c0921415f7bfd1f480c39a44f3), [`e7b0bb0f`](https://github.com/remirror/remirror/commit/e7b0bb0ffdb7e2d6ac6be38baadde4a4dd402847), [`aa27e968`](https://github.com/remirror/remirror/commit/aa27e96853aaaa701409a04e9b5135c94c371044), [`c8239120`](https://github.com/remirror/remirror/commit/c823912099e9906a21a04bd80d92bc89e251bd37), [`a830c70f`](https://github.com/remirror/remirror/commit/a830c70f76a5021c955e9cbba26b86e2db0333e3), [`5786901c`](https://github.com/remirror/remirror/commit/5786901c58d717c0921415f7bfd1f480c39a44f3), [`bed5a9e3`](https://github.com/remirror/remirror/commit/bed5a9e37026dcbdee323c921f5c05e15d49c93d), [`5786901c`](https://github.com/remirror/remirror/commit/5786901c58d717c0921415f7bfd1f480c39a44f3)]:
  - @remirror/extension-mention-atom@1.0.0-next.32
  - @remirror/react@1.0.0-next.32
  - @remirror/core@1.0.0-next.32
  - @remirror/extension-positioner@1.0.0-next.32
  - @remirror/react-utils@1.0.0-next.32
  - @remirror/extension-emoji@1.0.0-next.32
  - @remirror/extension-events@1.0.0-next.32
  - @remirror/extension-history@1.0.0-next.32
  - @remirror/extension-mention@1.0.0-next.32
  - @remirror/i18n@1.0.0-next.32
  - @remirror/pm@1.0.0-next.32

## 1.0.0-next.31

> 2020-09-03

### Major Changes

- [`e8458bc5`](https://github.com/remirror/remirror/commit/e8458bc54402d55355bd5315526fb239bce65ed6) [#623](https://github.com/remirror/remirror/pull/623) Thanks [@ifiokjr](https://github.com/ifiokjr)! - New package `@remirror/react-hooks` with support for all core hooks`.

### Patch Changes

- Updated dependencies [[`e8458bc5`](https://github.com/remirror/remirror/commit/e8458bc54402d55355bd5315526fb239bce65ed6), [`e8458bc5`](https://github.com/remirror/remirror/commit/e8458bc54402d55355bd5315526fb239bce65ed6), [`1a7da61a`](https://github.com/remirror/remirror/commit/1a7da61a483358214f8f24e193d837b171dd4e1d), [`e8458bc5`](https://github.com/remirror/remirror/commit/e8458bc54402d55355bd5315526fb239bce65ed6), [`e8458bc5`](https://github.com/remirror/remirror/commit/e8458bc54402d55355bd5315526fb239bce65ed6), [`e8458bc5`](https://github.com/remirror/remirror/commit/e8458bc54402d55355bd5315526fb239bce65ed6)]:
  - @remirror/extension-mention-atom@1.0.0-next.31
  - @remirror/core@1.0.0-next.31
  - @remirror/extension-emoji@1.0.0-next.31
  - @remirror/extension-mention@1.0.0-next.31
  - @remirror/extension-events@1.0.0-next.31
  - @remirror/extension-history@1.0.0-next.31
  - @remirror/extension-positioner@1.0.0-next.31
  - @remirror/react@1.0.0-next.31
  - @remirror/i18n@1.0.0-next.31
  - @remirror/react-utils@1.0.0-next.31

## 1.0.0-next.14

> 2020-08-28

### Patch Changes

- Updated dependencies [[`de0ba243`](https://github.com/remirror/remirror/commit/de0ba2436729f2fbd3bc8531b0e5fd01d3f34210)]:
  - @remirror/react@1.0.0-next.30

## 1.0.0-next.13

> 2020-08-28

### Patch Changes

- Updated dependencies [[`05446a62`](https://github.com/remirror/remirror/commit/05446a62d4f1d1cf3c940b2766a7ea5f66a77ebf)]:
  - @remirror/core@1.0.0-next.29
  - @remirror/react@1.0.0-next.29
  - @remirror/extension-auto-link@1.0.0-next.29
  - @remirror/extension-mention@1.0.0-next.29

## 1.0.0-next.12

> 2020-08-27

### Patch Changes

- Updated dependencies [[`c0dce043`](https://github.com/remirror/remirror/commit/c0dce0433780e1ddb8b21384eef4b67ae1f74e47), [`d5bbeb4e`](https://github.com/remirror/remirror/commit/d5bbeb4e8e193e695838207706a04f7739cc1448), [`0400fbc8`](https://github.com/remirror/remirror/commit/0400fbc8a5f97441f70528f7d6c6f11d560b381d), [`d23a0434`](https://github.com/remirror/remirror/commit/d23a0434c49ecd5bbaccffd9b8d8c42bc626219a)]:
  - @remirror/core@1.0.0-next.28
  - @remirror/pm@1.0.0-next.28
  - @remirror/react@1.0.0-next.28
  - @remirror/extension-auto-link@1.0.0-next.28
  - @remirror/extension-mention@1.0.0-next.28
  - @remirror/i18n@1.0.0-next.28
  - @remirror/react-utils@1.0.0-next.28

## 1.0.0-next.11

> 2020-08-25

### Patch Changes

- @remirror/react@1.0.0-next.27

## 1.0.0-next.10

> 2020-08-24

### Patch Changes

- Updated dependencies [a2bc3bfb]
- Updated dependencies [147d0f2a]
  - @remirror/core@1.0.0-next.26
  - @remirror/extension-mention@1.0.0-next.26
  - @remirror/extension-auto-link@1.0.0-next.26
  - @remirror/react@1.0.0-next.26
  - @remirror/react-utils@1.0.0-next.26
  - @remirror/i18n@1.0.0-next.26
  - @remirror/pm@1.0.0-next.26

## 1.0.0-next.9

> 2020-08-23

### Patch Changes

- Updated dependencies [e37d64de]
- Updated dependencies [3f2625bf]
  - @remirror/core@1.0.0-next.25
  - @remirror/extension-auto-link@1.0.0-next.25
  - @remirror/extension-mention@1.0.0-next.25
  - @remirror/react@1.0.0-next.25

## 1.0.0-next.8

> 2020-08-20

### Patch Changes

- Updated dependencies [65a7ea24]
  - @remirror/core@1.0.0-next.24
  - @remirror/extension-auto-link@1.0.0-next.24
  - @remirror/extension-mention@1.0.0-next.24
  - @remirror/react@1.0.0-next.24

## 1.0.0-next.7

> 2020-08-18

### Patch Changes

- Updated dependencies [d505ebc1]
  - @remirror/react@1.0.0-next.23

## 1.0.0-next.6

> 2020-08-17

### Patch Changes

- Updated dependencies [9ab1d0f3]
- Updated dependencies [45d82746]
- Updated dependencies [d300c5f0]
  - @remirror/core@1.0.0-next.22
  - @remirror/react@1.0.0-next.22
  - @remirror/extension-auto-link@1.0.0-next.22
  - @remirror/extension-mention@1.0.0-next.22
  - @remirror/react-utils@1.0.0-next.22
  - @remirror/pm@1.0.0-next.22
  - @remirror/i18n@1.0.0-next.22

## 1.0.0-next.5

> 2020-08-15

### Patch Changes

- Updated dependencies [3673a0f0]
- Updated dependencies [8c34030e]
- Updated dependencies [baf3f56d]
  - @remirror/core@1.0.0-next.21
  - @remirror/extension-auto-link@1.0.0-next.21
  - @remirror/extension-mention@1.0.0-next.21
  - @remirror/react@1.0.0-next.21
  - @remirror/react-utils@1.0.0-next.21
  - @remirror/i18n@1.0.0-next.21
  - @remirror/pm@1.0.0-next.21

## 1.0.0-next.4

> 2020-08-14

### Patch Changes

- Updated dependencies [95697fbd]
- Updated dependencies [770e3d4a]
- Updated dependencies [92653907]
  - @remirror/react@1.0.0-next.20
  - @remirror/pm@1.0.0-next.20
  - @remirror/core@1.0.0-next.20
  - @remirror/react-utils@1.0.0-next.20
  - @remirror/i18n@1.0.0-next.20
  - @remirror/extension-auto-link@1.0.0-next.20
  - @remirror/extension-mention@1.0.0-next.20

## 1.0.0-next.3

> 2020-08-02

### Patch Changes

- Updated dependencies [4498814f]
- Updated dependencies [898c62e0]
  - @remirror/react@1.0.0-next.17
  - @remirror/core@1.0.0-next.17
  - @remirror/extension-auto-link@1.0.0-next.17
  - @remirror/extension-mention@1.0.0-next.17

## 1.0.0-next.2

> 2020-08-01

### Patch Changes

- a7037832: Use exact versions for `@remirror` package `dependencies` and `peerDepedencies`.

  Closes #435

- dcccc5fc: Add browser entrypoint to packages and shrink bundle size.
- 231f664b: Upgrade dependencies.
- 6c6d524e: Remove use of `export *` for better tree shaking.

  Closes #406

- Updated dependencies [6528323e]
- Updated dependencies [f032db7e]
- Updated dependencies [a7037832]
- Updated dependencies [6e8b749a]
- Updated dependencies [dcccc5fc]
- Updated dependencies [231f664b]
- Updated dependencies [982a6b15]
- Updated dependencies [6c6d524e]
- Updated dependencies [6c6d524e]
- Updated dependencies [e518ef1d]
- Updated dependencies [be9a9c17]
- Updated dependencies [720c9b43]
  - @remirror/react@1.0.0-next.16
  - @remirror/core@1.0.0-next.16
  - @remirror/extension-auto-link@1.0.0-next.16
  - @remirror/extension-mention@1.0.0-next.16
  - @remirror/i18n@1.0.0-next.16
  - @remirror/pm@1.0.0-next.16
  - @remirror/react-utils@1.0.0-next.16

## 1.0.0-next.1

> 2020-07-16

### Patch Changes

- 5d5970ae: Update repository and website field to point to HEAD rather than a specific branch.

## 0.7.6

### Patch Changes

- Updated dependencies [0300d01c]
  - @remirror/core-types@0.9.0
  - @remirror/core-helpers@0.7.6

## 0.7.5

### Patch Changes

- Updated dependencies [24f83413]
  - @remirror/core-types@0.8.0
  - @remirror/core-helpers@0.7.5

## 0.7.4

### Patch Changes

- 7380e18f: Update repository url from ifiokjr/remirror to remirror/remirror to reflect new GitHub organisation.
- Updated dependencies [7380e18f]
  - @remirror/core-helpers@0.7.4
  - @remirror/core-types@0.7.4

## 0.7.3

### Patch Changes

- 5f85c0de: Bump a new version to test out the changeset API.
- Updated dependencies [5f85c0de]
  - @remirror/core-helpers@0.7.3
  - @remirror/core-types@0.7.3