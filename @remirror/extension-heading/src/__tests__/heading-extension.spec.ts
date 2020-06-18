import { pmBuild } from 'jest-prosemirror';
import { renderEditor } from 'jest-remirror';

import { fromHTML, toHTML } from '@remirror/core';
import { BoldExtension, createBaseManager, isExtensionValid } from '@remirror/test-fixtures';

import { HeadingExtension, HeadingOptions } from '../heading-extension';

test('is valid', () => {
  expect(isExtensionValid(HeadingExtension, {}));
});

describe('schema', () => {
  const { schema } = createBaseManager({ extensions: [new HeadingExtension()] });
  const { h1, h2, h3, doc } = pmBuild(schema, {
    h1: { nodeType: 'heading' },
    h2: { nodeType: 'heading', level: 2 },
    h3: { nodeType: 'heading', level: 3 },
  });

  it('defaults to level 1', () => {
    expect(toHTML({ node: h1('Heading'), schema })).toBe('<h1>Heading</h1>');
  });

  it('changes level based on attributes', () => {
    expect(toHTML({ node: h2('Heading'), schema })).toBe('<h2>Heading</h2>');
    expect(toHTML({ node: h3('Heading'), schema })).toBe('<h3>Heading</h3>');
  });

  it('it can parse content', () => {
    const node = fromHTML({ content: '<h2>Hello</h2>', schema });
    const expected = doc(h2('Hello'));

    expect(node).toEqualProsemirrorNode(expected);
  });

  describe('extraAttributes', () => {
    const { schema } = createBaseManager({
      extensions: [
        new HeadingExtension({
          extraAttributes: {
            title: { default: null },
            custom: { default: 'failure', parseDOM: 'data-custom' },
          },
        }),
      ],
    });

    it('sets the extra attributes', () => {
      expect(schema.nodes.heading.spec.attrs).toEqual({
        level: { default: 1 },
        title: { default: null },
        custom: { default: 'failure' },
      });
    });

    it('does not override the built in attributes', () => {
      const { schema } = createBaseManager({
        extensions: [
          new HeadingExtension({ extraAttributes: { level: { default: 'should not appear' } } }),
        ],
      });

      expect(schema.nodes.heading.spec.attrs).toEqual({
        level: { default: 1 },
      });
    });
  });
});

function create(options?: HeadingOptions) {
  return renderEditor([new HeadingExtension(options), new BoldExtension()]);
}

describe('extension', () => {
  it('falls back to the default level when unsupported level passed through', () => {
    const {
      attributeNodes: { heading },
      add,
      view,
      nodes: { doc },
    } = create({ levels: [1, 2], defaultLevel: 2 });
    const h5 = heading({ level: 5 });
    add(doc(h5('Heading<cursor>')));

    expect(view.dom).toContainHTML('<h2>Heading</h2>');
  });

  it('can toggle the heading', () => {
    const {
      add,
      nodes: { doc, p },
      view,
    } = create();

    add(doc(p('Content<cursor>'))).callback(({ commands }) => {
      commands.toggleHeading({ level: 3 });
      expect(view.dom).toContainHTML('<h3>Content</h3>');

      commands.toggleHeading({ level: 3 });
      expect(view.dom).toContainHTML('<p>Content</p>');
    });
  });

  it('shows the heading as active', () => {
    const {
      attributeNodes: { heading },
      add,
      nodes: { doc },
      active,
    } = create();
    const h5 = heading({ level: 5 });
    add(doc(h5('<cursor>Heading')));

    expect(active.heading({ level: 5 })).toBeTrue();
  });

  it('responds to keyboard shortcuts', () => {
    const {
      attributeNodes: { heading },
      add,
      nodes: { doc, p },
    } = create();
    const h1 = heading({ level: 1 });
    const h3 = heading({ level: 3 });
    const text = 'Welcome to the jungle';

    expect(add(doc(p(`<cursor>${text}`))).shortcut('Shift-Ctrl-1').state).toContainRemirrorDocument(
      h1(text),
    );
    expect(add(doc(p(`<cursor>${text}`))).shortcut('Shift-Ctrl-3').state).toContainRemirrorDocument(
      h3(text),
    );
  });
});
