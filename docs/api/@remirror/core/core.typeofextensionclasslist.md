<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@remirror/core](./core.md) &gt; [TypeOfExtensionClassList](./core.typeofextensionclasslist.md)

## TypeOfExtensionClassList type

This is a utility type which allows for retrieving the instance types from an array of Extensions.

<b>Signature:</b>

```typescript
export declare type TypeOfExtensionClassList<GExtensionConstructors extends AnyConstructor[]> = TypeOfExtensionClass<GExtensionConstructors[number]>;
```

## Remarks


```ts
const list = [ParagraphExtension, DocExtension, TextExtension, LinkExtension];
type ListInstances = TypeOfExtensionClassList<typeof list>;
// => (ParagraphExtension, DocExtension, TextExtension, LinkExtension)[]

```
