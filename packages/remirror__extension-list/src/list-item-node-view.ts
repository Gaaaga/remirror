import { ProsemirrorNode } from '@remirror/pm';
import type { NodeView } from '@remirror/pm/view';
import { ExtensionListTheme } from '@remirror/theme';

export function createCsutomMarkListItemNodeView(
  node: ProsemirrorNode,
  mark: HTMLElement,
): NodeView {
  const dom = document.createElement('li');
  dom.classList.add(ExtensionListTheme.LIST_ITEM_WITH_CUSTOM_MARKER);

  if (node.attrs.closed) {
    dom.classList.add(ExtensionListTheme.COLLAPSIBLE_LIST_ITEM_CLOSED);
  }

  const markContainer = document.createElement('span');
  markContainer.contentEditable = 'false';
  markContainer.classList.add(ExtensionListTheme.LIST_ITEM_MARKER_CONTAINER);

  const contentDOM = document.createElement('span');

  markContainer.append(mark);
  dom.append(markContainer);
  dom.append(contentDOM);

  // When a list item node's `content` updates, it's necessary to re-run the
  // nodeView function so that the list item node's `disabled` class can be
  // updated.
  const update = (): boolean => {
    return false;
  };

  return { dom, contentDOM, update };
}
