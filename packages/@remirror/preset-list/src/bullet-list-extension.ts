import {
  ApplySchemaAttributes,
  extensionDecorator,
  ExtensionTag,
  KeyBindings,
  NodeExtension,
  NodeExtensionSpec,
  toggleList,
} from '@remirror/core';
import { wrappingInputRule } from '@remirror/pm/inputrules';

/**
 * Creates the node for a bullet list.
 */
@extensionDecorator({})
export class BulletListExtension extends NodeExtension {
  get name() {
    return 'bulletList' as const;
  }

  readonly tags = [ExtensionTag.BlockNode, ExtensionTag.ListContainerNode];

  createNodeSpec(extra: ApplySchemaAttributes): NodeExtensionSpec {
    return {
      attrs: extra.defaults(),
      content: 'listItem+',
      parseDOM: [{ tag: 'ul', getAttrs: extra.parse }],
      toDOM: (node) => ['ul', extra.dom(node), 0],
    };
  }

  createCommands() {
    return {
      /**
       * Toggle the bullet list.
       */
      toggleBulletList: () => toggleList(this.type, this.store.schema.nodes.listItem),
    };
  }

  createKeymap(): KeyBindings {
    return {
      'Shift-Ctrl-8': toggleList(this.type, this.store.schema.nodes.listItem),
    };
  }

  createInputRules() {
    return [wrappingInputRule(/^\s*([*+-])\s$/, this.type)];
  }
}