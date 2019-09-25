<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@remirror/extension-code-block](./extension-code-block.md) &gt; [CodeBlockExtension](./extension-code-block.codeblockextension.md)

## CodeBlockExtension class

<b>Signature:</b>

```typescript
export declare class CodeBlockExtension extends NodeExtension<CodeBlockExtensionOptions> 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [defaultOptions](./extension-code-block.codeblockextension.defaultoptions.md) |  | <code>CodeBlockExtensionOptions</code> | Provide the default options for this extension |
|  [name](./extension-code-block.codeblockextension.name.md) |  | <code>&quot;codeBlock&quot;</code> |  |
|  [schema](./extension-code-block.codeblockextension.schema.md) |  | <code>NodeExtensionSpec</code> | Provides the codeBlock schema. |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [active({ type, getState })](./extension-code-block.codeblockextension.active.md) |  |  |
|  [commands({ type, schema })](./extension-code-block.codeblockextension.commands.md) |  |  |
|  [enabled({ type, getState })](./extension-code-block.codeblockextension.enabled.md) |  |  |
|  [init()](./extension-code-block.codeblockextension.init.md) |  | Register the configured languages. |
|  [inputRules({ type })](./extension-code-block.codeblockextension.inputrules.md) |  | Create an input rule that listens converts the code fence into a code block with space. |
|  [keys({ type, getActions })](./extension-code-block.codeblockextension.keys.md) |  |  |
|  [plugin(params)](./extension-code-block.codeblockextension.plugin.md) |  |  |
|  [styles()](./extension-code-block.codeblockextension.styles.md) |  | Add styles for the editor into the dom. |
