var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// node_modules/vscode-languageserver-types/lib/esm/main.js
var main_exports = {};
__export(main_exports, {
  AnnotatedTextEdit: () => AnnotatedTextEdit,
  ChangeAnnotation: () => ChangeAnnotation,
  ChangeAnnotationIdentifier: () => ChangeAnnotationIdentifier,
  CodeAction: () => CodeAction,
  CodeActionContext: () => CodeActionContext,
  CodeActionKind: () => CodeActionKind,
  CodeActionTriggerKind: () => CodeActionTriggerKind,
  CodeDescription: () => CodeDescription,
  CodeLens: () => CodeLens,
  Color: () => Color,
  ColorInformation: () => ColorInformation,
  ColorPresentation: () => ColorPresentation,
  Command: () => Command,
  CompletionItem: () => CompletionItem,
  CompletionItemKind: () => CompletionItemKind,
  CompletionItemLabelDetails: () => CompletionItemLabelDetails,
  CompletionItemTag: () => CompletionItemTag,
  CompletionList: () => CompletionList,
  CreateFile: () => CreateFile,
  DeleteFile: () => DeleteFile,
  Diagnostic: () => Diagnostic,
  DiagnosticRelatedInformation: () => DiagnosticRelatedInformation,
  DiagnosticSeverity: () => DiagnosticSeverity,
  DiagnosticTag: () => DiagnosticTag,
  DocumentHighlight: () => DocumentHighlight,
  DocumentHighlightKind: () => DocumentHighlightKind,
  DocumentLink: () => DocumentLink,
  DocumentSymbol: () => DocumentSymbol,
  DocumentUri: () => DocumentUri,
  EOL: () => EOL,
  FoldingRange: () => FoldingRange,
  FoldingRangeKind: () => FoldingRangeKind,
  FormattingOptions: () => FormattingOptions,
  Hover: () => Hover,
  InlayHint: () => InlayHint,
  InlayHintKind: () => InlayHintKind,
  InlayHintLabelPart: () => InlayHintLabelPart,
  InlineValueContext: () => InlineValueContext,
  InlineValueEvaluatableExpression: () => InlineValueEvaluatableExpression,
  InlineValueText: () => InlineValueText,
  InlineValueVariableLookup: () => InlineValueVariableLookup,
  InsertReplaceEdit: () => InsertReplaceEdit,
  InsertTextFormat: () => InsertTextFormat,
  InsertTextMode: () => InsertTextMode,
  Location: () => Location,
  LocationLink: () => LocationLink,
  MarkedString: () => MarkedString,
  MarkupContent: () => MarkupContent,
  MarkupKind: () => MarkupKind,
  OptionalVersionedTextDocumentIdentifier: () => OptionalVersionedTextDocumentIdentifier,
  ParameterInformation: () => ParameterInformation,
  Position: () => Position,
  Range: () => Range,
  RenameFile: () => RenameFile,
  SelectionRange: () => SelectionRange,
  SemanticTokenModifiers: () => SemanticTokenModifiers,
  SemanticTokenTypes: () => SemanticTokenTypes,
  SemanticTokens: () => SemanticTokens,
  SignatureInformation: () => SignatureInformation,
  SymbolInformation: () => SymbolInformation,
  SymbolKind: () => SymbolKind,
  SymbolTag: () => SymbolTag,
  TextDocument: () => TextDocument,
  TextDocumentEdit: () => TextDocumentEdit,
  TextDocumentIdentifier: () => TextDocumentIdentifier,
  TextDocumentItem: () => TextDocumentItem,
  TextEdit: () => TextEdit,
  URI: () => URI,
  VersionedTextDocumentIdentifier: () => VersionedTextDocumentIdentifier,
  WorkspaceChange: () => WorkspaceChange,
  WorkspaceEdit: () => WorkspaceEdit,
  WorkspaceFolder: () => WorkspaceFolder,
  WorkspaceSymbol: () => WorkspaceSymbol,
  integer: () => integer,
  uinteger: () => uinteger
});
var DocumentUri, URI, integer, uinteger, Position, Range, Location, LocationLink, Color, ColorInformation, ColorPresentation, FoldingRangeKind, FoldingRange, DiagnosticRelatedInformation, DiagnosticSeverity, DiagnosticTag, CodeDescription, Diagnostic, Command, TextEdit, ChangeAnnotation, ChangeAnnotationIdentifier, AnnotatedTextEdit, TextDocumentEdit, CreateFile, RenameFile, DeleteFile, WorkspaceEdit, TextEditChangeImpl, ChangeAnnotations, WorkspaceChange, TextDocumentIdentifier, VersionedTextDocumentIdentifier, OptionalVersionedTextDocumentIdentifier, TextDocumentItem, MarkupKind, MarkupContent, CompletionItemKind, InsertTextFormat, CompletionItemTag, InsertReplaceEdit, InsertTextMode, CompletionItemLabelDetails, CompletionItem, CompletionList, MarkedString, Hover, ParameterInformation, SignatureInformation, DocumentHighlightKind, DocumentHighlight, SymbolKind, SymbolTag, SymbolInformation, WorkspaceSymbol, DocumentSymbol, CodeActionKind, CodeActionTriggerKind, CodeActionContext, CodeAction, CodeLens, FormattingOptions, DocumentLink, SelectionRange, SemanticTokenTypes, SemanticTokenModifiers, SemanticTokens, InlineValueText, InlineValueVariableLookup, InlineValueEvaluatableExpression, InlineValueContext, InlayHintKind, InlayHintLabelPart, InlayHint, WorkspaceFolder, EOL, TextDocument, FullTextDocument, Is;
var init_main = __esm({
  "node_modules/vscode-languageserver-types/lib/esm/main.js"() {
    "use strict";
    (function(DocumentUri2) {
      function is(value) {
        return typeof value === "string";
      }
      DocumentUri2.is = is;
    })(DocumentUri || (DocumentUri = {}));
    (function(URI3) {
      function is(value) {
        return typeof value === "string";
      }
      URI3.is = is;
    })(URI || (URI = {}));
    (function(integer2) {
      integer2.MIN_VALUE = -2147483648;
      integer2.MAX_VALUE = 2147483647;
      function is(value) {
        return typeof value === "number" && integer2.MIN_VALUE <= value && value <= integer2.MAX_VALUE;
      }
      integer2.is = is;
    })(integer || (integer = {}));
    (function(uinteger2) {
      uinteger2.MIN_VALUE = 0;
      uinteger2.MAX_VALUE = 2147483647;
      function is(value) {
        return typeof value === "number" && uinteger2.MIN_VALUE <= value && value <= uinteger2.MAX_VALUE;
      }
      uinteger2.is = is;
    })(uinteger || (uinteger = {}));
    (function(Position11) {
      function create(line, character) {
        if (line === Number.MAX_VALUE) {
          line = uinteger.MAX_VALUE;
        }
        if (character === Number.MAX_VALUE) {
          character = uinteger.MAX_VALUE;
        }
        return { line, character };
      }
      Position11.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
      }
      Position11.is = is;
    })(Position || (Position = {}));
    (function(Range21) {
      function create(one, two, three, four) {
        if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) {
          return { start: Position.create(one, two), end: Position.create(three, four) };
        } else if (Position.is(one) && Position.is(two)) {
          return { start: one, end: two };
        } else {
          throw new Error("Range#create called with invalid arguments[".concat(one, ", ").concat(two, ", ").concat(three, ", ").concat(four, "]"));
        }
      }
      Range21.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
      }
      Range21.is = is;
    })(Range || (Range = {}));
    (function(Location4) {
      function create(uri, range) {
        return { uri, range };
      }
      Location4.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
      }
      Location4.is = is;
    })(Location || (Location = {}));
    (function(LocationLink3) {
      function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
        return { targetUri, targetRange, targetSelectionRange, originSelectionRange };
      }
      LocationLink3.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri) && Range.is(candidate.targetSelectionRange) && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
      }
      LocationLink3.is = is;
    })(LocationLink || (LocationLink = {}));
    (function(Color2) {
      function create(red, green, blue, alpha) {
        return {
          red,
          green,
          blue,
          alpha
        };
      }
      Color2.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Is.numberRange(candidate.red, 0, 1) && Is.numberRange(candidate.green, 0, 1) && Is.numberRange(candidate.blue, 0, 1) && Is.numberRange(candidate.alpha, 0, 1);
      }
      Color2.is = is;
    })(Color || (Color = {}));
    (function(ColorInformation2) {
      function create(range, color) {
        return {
          range,
          color
        };
      }
      ColorInformation2.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && Color.is(candidate.color);
      }
      ColorInformation2.is = is;
    })(ColorInformation || (ColorInformation = {}));
    (function(ColorPresentation2) {
      function create(label, textEdit, additionalTextEdits) {
        return {
          label,
          textEdit,
          additionalTextEdits
        };
      }
      ColorPresentation2.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate)) && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
      }
      ColorPresentation2.is = is;
    })(ColorPresentation || (ColorPresentation = {}));
    (function(FoldingRangeKind2) {
      FoldingRangeKind2.Comment = "comment";
      FoldingRangeKind2.Imports = "imports";
      FoldingRangeKind2.Region = "region";
    })(FoldingRangeKind || (FoldingRangeKind = {}));
    (function(FoldingRange2) {
      function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
        var result = {
          startLine,
          endLine
        };
        if (Is.defined(startCharacter)) {
          result.startCharacter = startCharacter;
        }
        if (Is.defined(endCharacter)) {
          result.endCharacter = endCharacter;
        }
        if (Is.defined(kind)) {
          result.kind = kind;
        }
        if (Is.defined(collapsedText)) {
          result.collapsedText = collapsedText;
        }
        return result;
      }
      FoldingRange2.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine) && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter)) && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter)) && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
      }
      FoldingRange2.is = is;
    })(FoldingRange || (FoldingRange = {}));
    (function(DiagnosticRelatedInformation3) {
      function create(location, message) {
        return {
          location,
          message
        };
      }
      DiagnosticRelatedInformation3.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
      }
      DiagnosticRelatedInformation3.is = is;
    })(DiagnosticRelatedInformation || (DiagnosticRelatedInformation = {}));
    (function(DiagnosticSeverity4) {
      DiagnosticSeverity4.Error = 1;
      DiagnosticSeverity4.Warning = 2;
      DiagnosticSeverity4.Information = 3;
      DiagnosticSeverity4.Hint = 4;
    })(DiagnosticSeverity || (DiagnosticSeverity = {}));
    (function(DiagnosticTag4) {
      DiagnosticTag4.Unnecessary = 1;
      DiagnosticTag4.Deprecated = 2;
    })(DiagnosticTag || (DiagnosticTag = {}));
    (function(CodeDescription2) {
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.href);
      }
      CodeDescription2.is = is;
    })(CodeDescription || (CodeDescription = {}));
    (function(Diagnostic8) {
      function create(range, message, severity, code, source, relatedInformation) {
        var result = { range, message };
        if (Is.defined(severity)) {
          result.severity = severity;
        }
        if (Is.defined(code)) {
          result.code = code;
        }
        if (Is.defined(source)) {
          result.source = source;
        }
        if (Is.defined(relatedInformation)) {
          result.relatedInformation = relatedInformation;
        }
        return result;
      }
      Diagnostic8.create = create;
      function is(value) {
        var _a;
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && Is.string(candidate.message) && (Is.number(candidate.severity) || Is.undefined(candidate.severity)) && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code)) && (Is.undefined(candidate.codeDescription) || Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && (Is.string(candidate.source) || Is.undefined(candidate.source)) && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
      }
      Diagnostic8.is = is;
    })(Diagnostic || (Diagnostic = {}));
    (function(Command6) {
      function create(title, command) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }
        var result = { title, command };
        if (Is.defined(args) && args.length > 0) {
          result.arguments = args;
        }
        return result;
      }
      Command6.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
      }
      Command6.is = is;
    })(Command || (Command = {}));
    (function(TextEdit7) {
      function replace(range, newText) {
        return { range, newText };
      }
      TextEdit7.replace = replace;
      function insert(position, newText) {
        return { range: { start: position, end: position }, newText };
      }
      TextEdit7.insert = insert;
      function del(range) {
        return { range, newText: "" };
      }
      TextEdit7.del = del;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.newText) && Range.is(candidate.range);
      }
      TextEdit7.is = is;
    })(TextEdit || (TextEdit = {}));
    (function(ChangeAnnotation2) {
      function create(label, needsConfirmation, description) {
        var result = { label };
        if (needsConfirmation !== void 0) {
          result.needsConfirmation = needsConfirmation;
        }
        if (description !== void 0) {
          result.description = description;
        }
        return result;
      }
      ChangeAnnotation2.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
      }
      ChangeAnnotation2.is = is;
    })(ChangeAnnotation || (ChangeAnnotation = {}));
    (function(ChangeAnnotationIdentifier2) {
      function is(value) {
        var candidate = value;
        return Is.string(candidate);
      }
      ChangeAnnotationIdentifier2.is = is;
    })(ChangeAnnotationIdentifier || (ChangeAnnotationIdentifier = {}));
    (function(AnnotatedTextEdit2) {
      function replace(range, newText, annotation) {
        return { range, newText, annotationId: annotation };
      }
      AnnotatedTextEdit2.replace = replace;
      function insert(position, newText, annotation) {
        return { range: { start: position, end: position }, newText, annotationId: annotation };
      }
      AnnotatedTextEdit2.insert = insert;
      function del(range, annotation) {
        return { range, newText: "", annotationId: annotation };
      }
      AnnotatedTextEdit2.del = del;
      function is(value) {
        var candidate = value;
        return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      AnnotatedTextEdit2.is = is;
    })(AnnotatedTextEdit || (AnnotatedTextEdit = {}));
    (function(TextDocumentEdit2) {
      function create(textDocument, edits) {
        return { textDocument, edits };
      }
      TextDocumentEdit2.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
      }
      TextDocumentEdit2.is = is;
    })(TextDocumentEdit || (TextDocumentEdit = {}));
    (function(CreateFile2) {
      function create(uri, options, annotation) {
        var result = {
          kind: "create",
          uri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
          result.options = options;
        }
        if (annotation !== void 0) {
          result.annotationId = annotation;
        }
        return result;
      }
      CreateFile2.create = create;
      function is(value) {
        var candidate = value;
        return candidate && candidate.kind === "create" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      CreateFile2.is = is;
    })(CreateFile || (CreateFile = {}));
    (function(RenameFile2) {
      function create(oldUri, newUri, options, annotation) {
        var result = {
          kind: "rename",
          oldUri,
          newUri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
          result.options = options;
        }
        if (annotation !== void 0) {
          result.annotationId = annotation;
        }
        return result;
      }
      RenameFile2.create = create;
      function is(value) {
        var candidate = value;
        return candidate && candidate.kind === "rename" && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      RenameFile2.is = is;
    })(RenameFile || (RenameFile = {}));
    (function(DeleteFile2) {
      function create(uri, options, annotation) {
        var result = {
          kind: "delete",
          uri
        };
        if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) {
          result.options = options;
        }
        if (annotation !== void 0) {
          result.annotationId = annotation;
        }
        return result;
      }
      DeleteFile2.create = create;
      function is(value) {
        var candidate = value;
        return candidate && candidate.kind === "delete" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
      }
      DeleteFile2.is = is;
    })(DeleteFile || (DeleteFile = {}));
    (function(WorkspaceEdit8) {
      function is(value) {
        var candidate = value;
        return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every(function(change) {
          if (Is.string(change.kind)) {
            return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
          } else {
            return TextDocumentEdit.is(change);
          }
        }));
      }
      WorkspaceEdit8.is = is;
    })(WorkspaceEdit || (WorkspaceEdit = {}));
    TextEditChangeImpl = function() {
      function TextEditChangeImpl2(edits, changeAnnotations) {
        this.edits = edits;
        this.changeAnnotations = changeAnnotations;
      }
      TextEditChangeImpl2.prototype.insert = function(position, newText, annotation) {
        var edit;
        var id;
        if (annotation === void 0) {
          edit = TextEdit.insert(position, newText);
        } else if (ChangeAnnotationIdentifier.is(annotation)) {
          id = annotation;
          edit = AnnotatedTextEdit.insert(position, newText, annotation);
        } else {
          this.assertChangeAnnotations(this.changeAnnotations);
          id = this.changeAnnotations.manage(annotation);
          edit = AnnotatedTextEdit.insert(position, newText, id);
        }
        this.edits.push(edit);
        if (id !== void 0) {
          return id;
        }
      };
      TextEditChangeImpl2.prototype.replace = function(range, newText, annotation) {
        var edit;
        var id;
        if (annotation === void 0) {
          edit = TextEdit.replace(range, newText);
        } else if (ChangeAnnotationIdentifier.is(annotation)) {
          id = annotation;
          edit = AnnotatedTextEdit.replace(range, newText, annotation);
        } else {
          this.assertChangeAnnotations(this.changeAnnotations);
          id = this.changeAnnotations.manage(annotation);
          edit = AnnotatedTextEdit.replace(range, newText, id);
        }
        this.edits.push(edit);
        if (id !== void 0) {
          return id;
        }
      };
      TextEditChangeImpl2.prototype.delete = function(range, annotation) {
        var edit;
        var id;
        if (annotation === void 0) {
          edit = TextEdit.del(range);
        } else if (ChangeAnnotationIdentifier.is(annotation)) {
          id = annotation;
          edit = AnnotatedTextEdit.del(range, annotation);
        } else {
          this.assertChangeAnnotations(this.changeAnnotations);
          id = this.changeAnnotations.manage(annotation);
          edit = AnnotatedTextEdit.del(range, id);
        }
        this.edits.push(edit);
        if (id !== void 0) {
          return id;
        }
      };
      TextEditChangeImpl2.prototype.add = function(edit) {
        this.edits.push(edit);
      };
      TextEditChangeImpl2.prototype.all = function() {
        return this.edits;
      };
      TextEditChangeImpl2.prototype.clear = function() {
        this.edits.splice(0, this.edits.length);
      };
      TextEditChangeImpl2.prototype.assertChangeAnnotations = function(value) {
        if (value === void 0) {
          throw new Error("Text edit change is not configured to manage change annotations.");
        }
      };
      return TextEditChangeImpl2;
    }();
    ChangeAnnotations = function() {
      function ChangeAnnotations2(annotations) {
        this._annotations = annotations === void 0 ? /* @__PURE__ */ Object.create(null) : annotations;
        this._counter = 0;
        this._size = 0;
      }
      ChangeAnnotations2.prototype.all = function() {
        return this._annotations;
      };
      Object.defineProperty(ChangeAnnotations2.prototype, "size", {
        get: function() {
          return this._size;
        },
        enumerable: false,
        configurable: true
      });
      ChangeAnnotations2.prototype.manage = function(idOrAnnotation, annotation) {
        var id;
        if (ChangeAnnotationIdentifier.is(idOrAnnotation)) {
          id = idOrAnnotation;
        } else {
          id = this.nextId();
          annotation = idOrAnnotation;
        }
        if (this._annotations[id] !== void 0) {
          throw new Error("Id ".concat(id, " is already in use."));
        }
        if (annotation === void 0) {
          throw new Error("No annotation provided for id ".concat(id));
        }
        this._annotations[id] = annotation;
        this._size++;
        return id;
      };
      ChangeAnnotations2.prototype.nextId = function() {
        this._counter++;
        return this._counter.toString();
      };
      return ChangeAnnotations2;
    }();
    WorkspaceChange = function() {
      function WorkspaceChange2(workspaceEdit) {
        var _this = this;
        this._textEditChanges = /* @__PURE__ */ Object.create(null);
        if (workspaceEdit !== void 0) {
          this._workspaceEdit = workspaceEdit;
          if (workspaceEdit.documentChanges) {
            this._changeAnnotations = new ChangeAnnotations(workspaceEdit.changeAnnotations);
            workspaceEdit.changeAnnotations = this._changeAnnotations.all();
            workspaceEdit.documentChanges.forEach(function(change) {
              if (TextDocumentEdit.is(change)) {
                var textEditChange = new TextEditChangeImpl(change.edits, _this._changeAnnotations);
                _this._textEditChanges[change.textDocument.uri] = textEditChange;
              }
            });
          } else if (workspaceEdit.changes) {
            Object.keys(workspaceEdit.changes).forEach(function(key) {
              var textEditChange = new TextEditChangeImpl(workspaceEdit.changes[key]);
              _this._textEditChanges[key] = textEditChange;
            });
          }
        } else {
          this._workspaceEdit = {};
        }
      }
      Object.defineProperty(WorkspaceChange2.prototype, "edit", {
        get: function() {
          this.initDocumentChanges();
          if (this._changeAnnotations !== void 0) {
            if (this._changeAnnotations.size === 0) {
              this._workspaceEdit.changeAnnotations = void 0;
            } else {
              this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
            }
          }
          return this._workspaceEdit;
        },
        enumerable: false,
        configurable: true
      });
      WorkspaceChange2.prototype.getTextEditChange = function(key) {
        if (OptionalVersionedTextDocumentIdentifier.is(key)) {
          this.initDocumentChanges();
          if (this._workspaceEdit.documentChanges === void 0) {
            throw new Error("Workspace edit is not configured for document changes.");
          }
          var textDocument = { uri: key.uri, version: key.version };
          var result = this._textEditChanges[textDocument.uri];
          if (!result) {
            var edits = [];
            var textDocumentEdit = {
              textDocument,
              edits
            };
            this._workspaceEdit.documentChanges.push(textDocumentEdit);
            result = new TextEditChangeImpl(edits, this._changeAnnotations);
            this._textEditChanges[textDocument.uri] = result;
          }
          return result;
        } else {
          this.initChanges();
          if (this._workspaceEdit.changes === void 0) {
            throw new Error("Workspace edit is not configured for normal text edit changes.");
          }
          var result = this._textEditChanges[key];
          if (!result) {
            var edits = [];
            this._workspaceEdit.changes[key] = edits;
            result = new TextEditChangeImpl(edits);
            this._textEditChanges[key] = result;
          }
          return result;
        }
      };
      WorkspaceChange2.prototype.initDocumentChanges = function() {
        if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
          this._changeAnnotations = new ChangeAnnotations();
          this._workspaceEdit.documentChanges = [];
          this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
        }
      };
      WorkspaceChange2.prototype.initChanges = function() {
        if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
          this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null);
        }
      };
      WorkspaceChange2.prototype.createFile = function(uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) {
          throw new Error("Workspace edit is not configured for document changes.");
        }
        var annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
          annotation = optionsOrAnnotation;
        } else {
          options = optionsOrAnnotation;
        }
        var operation;
        var id;
        if (annotation === void 0) {
          operation = CreateFile.create(uri, options);
        } else {
          id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
          operation = CreateFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) {
          return id;
        }
      };
      WorkspaceChange2.prototype.renameFile = function(oldUri, newUri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) {
          throw new Error("Workspace edit is not configured for document changes.");
        }
        var annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
          annotation = optionsOrAnnotation;
        } else {
          options = optionsOrAnnotation;
        }
        var operation;
        var id;
        if (annotation === void 0) {
          operation = RenameFile.create(oldUri, newUri, options);
        } else {
          id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
          operation = RenameFile.create(oldUri, newUri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) {
          return id;
        }
      };
      WorkspaceChange2.prototype.deleteFile = function(uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) {
          throw new Error("Workspace edit is not configured for document changes.");
        }
        var annotation;
        if (ChangeAnnotation.is(optionsOrAnnotation) || ChangeAnnotationIdentifier.is(optionsOrAnnotation)) {
          annotation = optionsOrAnnotation;
        } else {
          options = optionsOrAnnotation;
        }
        var operation;
        var id;
        if (annotation === void 0) {
          operation = DeleteFile.create(uri, options);
        } else {
          id = ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
          operation = DeleteFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) {
          return id;
        }
      };
      return WorkspaceChange2;
    }();
    (function(TextDocumentIdentifier2) {
      function create(uri) {
        return { uri };
      }
      TextDocumentIdentifier2.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri);
      }
      TextDocumentIdentifier2.is = is;
    })(TextDocumentIdentifier || (TextDocumentIdentifier = {}));
    (function(VersionedTextDocumentIdentifier2) {
      function create(uri, version) {
        return { uri, version };
      }
      VersionedTextDocumentIdentifier2.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
      }
      VersionedTextDocumentIdentifier2.is = is;
    })(VersionedTextDocumentIdentifier || (VersionedTextDocumentIdentifier = {}));
    (function(OptionalVersionedTextDocumentIdentifier2) {
      function create(uri, version) {
        return { uri, version };
      }
      OptionalVersionedTextDocumentIdentifier2.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
      }
      OptionalVersionedTextDocumentIdentifier2.is = is;
    })(OptionalVersionedTextDocumentIdentifier || (OptionalVersionedTextDocumentIdentifier = {}));
    (function(TextDocumentItem2) {
      function create(uri, languageId, version, text) {
        return { uri, languageId, version, text };
      }
      TextDocumentItem2.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
      }
      TextDocumentItem2.is = is;
    })(TextDocumentItem || (TextDocumentItem = {}));
    (function(MarkupKind4) {
      MarkupKind4.PlainText = "plaintext";
      MarkupKind4.Markdown = "markdown";
      function is(value) {
        var candidate = value;
        return candidate === MarkupKind4.PlainText || candidate === MarkupKind4.Markdown;
      }
      MarkupKind4.is = is;
    })(MarkupKind || (MarkupKind = {}));
    (function(MarkupContent4) {
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
      }
      MarkupContent4.is = is;
    })(MarkupContent || (MarkupContent = {}));
    (function(CompletionItemKind5) {
      CompletionItemKind5.Text = 1;
      CompletionItemKind5.Method = 2;
      CompletionItemKind5.Function = 3;
      CompletionItemKind5.Constructor = 4;
      CompletionItemKind5.Field = 5;
      CompletionItemKind5.Variable = 6;
      CompletionItemKind5.Class = 7;
      CompletionItemKind5.Interface = 8;
      CompletionItemKind5.Module = 9;
      CompletionItemKind5.Property = 10;
      CompletionItemKind5.Unit = 11;
      CompletionItemKind5.Value = 12;
      CompletionItemKind5.Enum = 13;
      CompletionItemKind5.Keyword = 14;
      CompletionItemKind5.Snippet = 15;
      CompletionItemKind5.Color = 16;
      CompletionItemKind5.File = 17;
      CompletionItemKind5.Reference = 18;
      CompletionItemKind5.Folder = 19;
      CompletionItemKind5.EnumMember = 20;
      CompletionItemKind5.Constant = 21;
      CompletionItemKind5.Struct = 22;
      CompletionItemKind5.Event = 23;
      CompletionItemKind5.Operator = 24;
      CompletionItemKind5.TypeParameter = 25;
    })(CompletionItemKind || (CompletionItemKind = {}));
    (function(InsertTextFormat5) {
      InsertTextFormat5.PlainText = 1;
      InsertTextFormat5.Snippet = 2;
    })(InsertTextFormat || (InsertTextFormat = {}));
    (function(CompletionItemTag3) {
      CompletionItemTag3.Deprecated = 1;
    })(CompletionItemTag || (CompletionItemTag = {}));
    (function(InsertReplaceEdit3) {
      function create(newText, insert, replace) {
        return { newText, insert, replace };
      }
      InsertReplaceEdit3.create = create;
      function is(value) {
        var candidate = value;
        return candidate && Is.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
      }
      InsertReplaceEdit3.is = is;
    })(InsertReplaceEdit || (InsertReplaceEdit = {}));
    (function(InsertTextMode2) {
      InsertTextMode2.asIs = 1;
      InsertTextMode2.adjustIndentation = 2;
    })(InsertTextMode || (InsertTextMode = {}));
    (function(CompletionItemLabelDetails2) {
      function is(value) {
        var candidate = value;
        return candidate && (Is.string(candidate.detail) || candidate.detail === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
      }
      CompletionItemLabelDetails2.is = is;
    })(CompletionItemLabelDetails || (CompletionItemLabelDetails = {}));
    (function(CompletionItem6) {
      function create(label) {
        return { label };
      }
      CompletionItem6.create = create;
    })(CompletionItem || (CompletionItem = {}));
    (function(CompletionList4) {
      function create(items, isIncomplete) {
        return { items: items ? items : [], isIncomplete: !!isIncomplete };
      }
      CompletionList4.create = create;
    })(CompletionList || (CompletionList = {}));
    (function(MarkedString2) {
      function fromPlainText(plainText) {
        return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
      }
      MarkedString2.fromPlainText = fromPlainText;
      function is(value) {
        var candidate = value;
        return Is.string(candidate) || Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value);
      }
      MarkedString2.is = is;
    })(MarkedString || (MarkedString = {}));
    (function(Hover2) {
      function is(value) {
        var candidate = value;
        return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) || MarkedString.is(candidate.contents) || Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range.is(value.range));
      }
      Hover2.is = is;
    })(Hover || (Hover = {}));
    (function(ParameterInformation2) {
      function create(label, documentation) {
        return documentation ? { label, documentation } : { label };
      }
      ParameterInformation2.create = create;
    })(ParameterInformation || (ParameterInformation = {}));
    (function(SignatureInformation2) {
      function create(label, documentation) {
        var parameters = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          parameters[_i - 2] = arguments[_i];
        }
        var result = { label };
        if (Is.defined(documentation)) {
          result.documentation = documentation;
        }
        if (Is.defined(parameters)) {
          result.parameters = parameters;
        } else {
          result.parameters = [];
        }
        return result;
      }
      SignatureInformation2.create = create;
    })(SignatureInformation || (SignatureInformation = {}));
    (function(DocumentHighlightKind3) {
      DocumentHighlightKind3.Text = 1;
      DocumentHighlightKind3.Read = 2;
      DocumentHighlightKind3.Write = 3;
    })(DocumentHighlightKind || (DocumentHighlightKind = {}));
    (function(DocumentHighlight3) {
      function create(range, kind) {
        var result = { range };
        if (Is.number(kind)) {
          result.kind = kind;
        }
        return result;
      }
      DocumentHighlight3.create = create;
    })(DocumentHighlight || (DocumentHighlight = {}));
    (function(SymbolKind6) {
      SymbolKind6.File = 1;
      SymbolKind6.Module = 2;
      SymbolKind6.Namespace = 3;
      SymbolKind6.Package = 4;
      SymbolKind6.Class = 5;
      SymbolKind6.Method = 6;
      SymbolKind6.Property = 7;
      SymbolKind6.Field = 8;
      SymbolKind6.Constructor = 9;
      SymbolKind6.Enum = 10;
      SymbolKind6.Interface = 11;
      SymbolKind6.Function = 12;
      SymbolKind6.Variable = 13;
      SymbolKind6.Constant = 14;
      SymbolKind6.String = 15;
      SymbolKind6.Number = 16;
      SymbolKind6.Boolean = 17;
      SymbolKind6.Array = 18;
      SymbolKind6.Object = 19;
      SymbolKind6.Key = 20;
      SymbolKind6.Null = 21;
      SymbolKind6.EnumMember = 22;
      SymbolKind6.Struct = 23;
      SymbolKind6.Event = 24;
      SymbolKind6.Operator = 25;
      SymbolKind6.TypeParameter = 26;
    })(SymbolKind || (SymbolKind = {}));
    (function(SymbolTag5) {
      SymbolTag5.Deprecated = 1;
    })(SymbolTag || (SymbolTag = {}));
    (function(SymbolInformation3) {
      function create(name, kind, range, uri, containerName) {
        var result = {
          name,
          kind,
          location: { uri, range }
        };
        if (containerName) {
          result.containerName = containerName;
        }
        return result;
      }
      SymbolInformation3.create = create;
    })(SymbolInformation || (SymbolInformation = {}));
    (function(WorkspaceSymbol2) {
      function create(name, kind, uri, range) {
        return range !== void 0 ? { name, kind, location: { uri, range } } : { name, kind, location: { uri } };
      }
      WorkspaceSymbol2.create = create;
    })(WorkspaceSymbol || (WorkspaceSymbol = {}));
    (function(DocumentSymbol3) {
      function create(name, detail, kind, range, selectionRange, children) {
        var result = {
          name,
          detail,
          kind,
          range,
          selectionRange
        };
        if (children !== void 0) {
          result.children = children;
        }
        return result;
      }
      DocumentSymbol3.create = create;
      function is(value) {
        var candidate = value;
        return candidate && Is.string(candidate.name) && Is.number(candidate.kind) && Range.is(candidate.range) && Range.is(candidate.selectionRange) && (candidate.detail === void 0 || Is.string(candidate.detail)) && (candidate.deprecated === void 0 || Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
      }
      DocumentSymbol3.is = is;
    })(DocumentSymbol || (DocumentSymbol = {}));
    (function(CodeActionKind8) {
      CodeActionKind8.Empty = "";
      CodeActionKind8.QuickFix = "quickfix";
      CodeActionKind8.Refactor = "refactor";
      CodeActionKind8.RefactorExtract = "refactor.extract";
      CodeActionKind8.RefactorInline = "refactor.inline";
      CodeActionKind8.RefactorRewrite = "refactor.rewrite";
      CodeActionKind8.Source = "source";
      CodeActionKind8.SourceOrganizeImports = "source.organizeImports";
      CodeActionKind8.SourceFixAll = "source.fixAll";
    })(CodeActionKind || (CodeActionKind = {}));
    (function(CodeActionTriggerKind3) {
      CodeActionTriggerKind3.Invoked = 1;
      CodeActionTriggerKind3.Automatic = 2;
    })(CodeActionTriggerKind || (CodeActionTriggerKind = {}));
    (function(CodeActionContext8) {
      function create(diagnostics, only, triggerKind) {
        var result = { diagnostics };
        if (only !== void 0 && only !== null) {
          result.only = only;
        }
        if (triggerKind !== void 0 && triggerKind !== null) {
          result.triggerKind = triggerKind;
        }
        return result;
      }
      CodeActionContext8.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === void 0 || Is.typedArray(candidate.only, Is.string)) && (candidate.triggerKind === void 0 || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
      }
      CodeActionContext8.is = is;
    })(CodeActionContext || (CodeActionContext = {}));
    (function(CodeAction8) {
      function create(title, kindOrCommandOrEdit, kind) {
        var result = { title };
        var checkKind = true;
        if (typeof kindOrCommandOrEdit === "string") {
          checkKind = false;
          result.kind = kindOrCommandOrEdit;
        } else if (Command.is(kindOrCommandOrEdit)) {
          result.command = kindOrCommandOrEdit;
        } else {
          result.edit = kindOrCommandOrEdit;
        }
        if (checkKind && kind !== void 0) {
          result.kind = kind;
        }
        return result;
      }
      CodeAction8.create = create;
      function is(value) {
        var candidate = value;
        return candidate && Is.string(candidate.title) && (candidate.diagnostics === void 0 || Is.typedArray(candidate.diagnostics, Diagnostic.is)) && (candidate.kind === void 0 || Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || Command.is(candidate.command)) && (candidate.isPreferred === void 0 || Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit));
      }
      CodeAction8.is = is;
    })(CodeAction || (CodeAction = {}));
    (function(CodeLens3) {
      function create(range, data) {
        var result = { range };
        if (Is.defined(data)) {
          result.data = data;
        }
        return result;
      }
      CodeLens3.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command.is(candidate.command));
      }
      CodeLens3.is = is;
    })(CodeLens || (CodeLens = {}));
    (function(FormattingOptions3) {
      function create(tabSize, insertSpaces) {
        return { tabSize, insertSpaces };
      }
      FormattingOptions3.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
      }
      FormattingOptions3.is = is;
    })(FormattingOptions || (FormattingOptions = {}));
    (function(DocumentLink2) {
      function create(range, target, data) {
        return { range, target, data };
      }
      DocumentLink2.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
      }
      DocumentLink2.is = is;
    })(DocumentLink || (DocumentLink = {}));
    (function(SelectionRange2) {
      function create(range, parent) {
        return { range, parent };
      }
      SelectionRange2.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
      }
      SelectionRange2.is = is;
    })(SelectionRange || (SelectionRange = {}));
    (function(SemanticTokenTypes2) {
      SemanticTokenTypes2["namespace"] = "namespace";
      SemanticTokenTypes2["type"] = "type";
      SemanticTokenTypes2["class"] = "class";
      SemanticTokenTypes2["enum"] = "enum";
      SemanticTokenTypes2["interface"] = "interface";
      SemanticTokenTypes2["struct"] = "struct";
      SemanticTokenTypes2["typeParameter"] = "typeParameter";
      SemanticTokenTypes2["parameter"] = "parameter";
      SemanticTokenTypes2["variable"] = "variable";
      SemanticTokenTypes2["property"] = "property";
      SemanticTokenTypes2["enumMember"] = "enumMember";
      SemanticTokenTypes2["event"] = "event";
      SemanticTokenTypes2["function"] = "function";
      SemanticTokenTypes2["method"] = "method";
      SemanticTokenTypes2["macro"] = "macro";
      SemanticTokenTypes2["keyword"] = "keyword";
      SemanticTokenTypes2["modifier"] = "modifier";
      SemanticTokenTypes2["comment"] = "comment";
      SemanticTokenTypes2["string"] = "string";
      SemanticTokenTypes2["number"] = "number";
      SemanticTokenTypes2["regexp"] = "regexp";
      SemanticTokenTypes2["operator"] = "operator";
      SemanticTokenTypes2["decorator"] = "decorator";
    })(SemanticTokenTypes || (SemanticTokenTypes = {}));
    (function(SemanticTokenModifiers2) {
      SemanticTokenModifiers2["declaration"] = "declaration";
      SemanticTokenModifiers2["definition"] = "definition";
      SemanticTokenModifiers2["readonly"] = "readonly";
      SemanticTokenModifiers2["static"] = "static";
      SemanticTokenModifiers2["deprecated"] = "deprecated";
      SemanticTokenModifiers2["abstract"] = "abstract";
      SemanticTokenModifiers2["async"] = "async";
      SemanticTokenModifiers2["modification"] = "modification";
      SemanticTokenModifiers2["documentation"] = "documentation";
      SemanticTokenModifiers2["defaultLibrary"] = "defaultLibrary";
    })(SemanticTokenModifiers || (SemanticTokenModifiers = {}));
    (function(SemanticTokens3) {
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && (candidate.resultId === void 0 || typeof candidate.resultId === "string") && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === "number");
      }
      SemanticTokens3.is = is;
    })(SemanticTokens || (SemanticTokens = {}));
    (function(InlineValueText2) {
      function create(range, text) {
        return { range, text };
      }
      InlineValueText2.create = create;
      function is(value) {
        var candidate = value;
        return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.string(candidate.text);
      }
      InlineValueText2.is = is;
    })(InlineValueText || (InlineValueText = {}));
    (function(InlineValueVariableLookup2) {
      function create(range, variableName, caseSensitiveLookup) {
        return { range, variableName, caseSensitiveLookup };
      }
      InlineValueVariableLookup2.create = create;
      function is(value) {
        var candidate = value;
        return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.boolean(candidate.caseSensitiveLookup) && (Is.string(candidate.variableName) || candidate.variableName === void 0);
      }
      InlineValueVariableLookup2.is = is;
    })(InlineValueVariableLookup || (InlineValueVariableLookup = {}));
    (function(InlineValueEvaluatableExpression2) {
      function create(range, expression) {
        return { range, expression };
      }
      InlineValueEvaluatableExpression2.create = create;
      function is(value) {
        var candidate = value;
        return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && (Is.string(candidate.expression) || candidate.expression === void 0);
      }
      InlineValueEvaluatableExpression2.is = is;
    })(InlineValueEvaluatableExpression || (InlineValueEvaluatableExpression = {}));
    (function(InlineValueContext2) {
      function create(frameId, stoppedLocation) {
        return { frameId, stoppedLocation };
      }
      InlineValueContext2.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Range.is(value.stoppedLocation);
      }
      InlineValueContext2.is = is;
    })(InlineValueContext || (InlineValueContext = {}));
    (function(InlayHintKind3) {
      InlayHintKind3.Type = 1;
      InlayHintKind3.Parameter = 2;
      function is(value) {
        return value === 1 || value === 2;
      }
      InlayHintKind3.is = is;
    })(InlayHintKind || (InlayHintKind = {}));
    (function(InlayHintLabelPart2) {
      function create(value) {
        return { value };
      }
      InlayHintLabelPart2.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.location === void 0 || Location.is(candidate.location)) && (candidate.command === void 0 || Command.is(candidate.command));
      }
      InlayHintLabelPart2.is = is;
    })(InlayHintLabelPart || (InlayHintLabelPart = {}));
    (function(InlayHint3) {
      function create(position, label, kind) {
        var result = { position, label };
        if (kind !== void 0) {
          result.kind = kind;
        }
        return result;
      }
      InlayHint3.create = create;
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && Position.is(candidate.position) && (Is.string(candidate.label) || Is.typedArray(candidate.label, InlayHintLabelPart.is)) && (candidate.kind === void 0 || InlayHintKind.is(candidate.kind)) && candidate.textEdits === void 0 || Is.typedArray(candidate.textEdits, TextEdit.is) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.paddingLeft === void 0 || Is.boolean(candidate.paddingLeft)) && (candidate.paddingRight === void 0 || Is.boolean(candidate.paddingRight));
      }
      InlayHint3.is = is;
    })(InlayHint || (InlayHint = {}));
    (function(WorkspaceFolder2) {
      function is(value) {
        var candidate = value;
        return Is.objectLiteral(candidate) && URI.is(candidate.uri) && Is.string(candidate.name);
      }
      WorkspaceFolder2.is = is;
    })(WorkspaceFolder || (WorkspaceFolder = {}));
    EOL = ["\n", "\r\n", "\r"];
    (function(TextDocument18) {
      function create(uri, languageId, version, content) {
        return new FullTextDocument(uri, languageId, version, content);
      }
      TextDocument18.create = create;
      function is(value) {
        var candidate = value;
        return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount) && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
      }
      TextDocument18.is = is;
      function applyEdits(document, edits) {
        var text = document.getText();
        var sortedEdits = mergeSort(edits, function(a, b) {
          var diff = a.range.start.line - b.range.start.line;
          if (diff === 0) {
            return a.range.start.character - b.range.start.character;
          }
          return diff;
        });
        var lastModifiedOffset = text.length;
        for (var i = sortedEdits.length - 1; i >= 0; i--) {
          var e = sortedEdits[i];
          var startOffset = document.offsetAt(e.range.start);
          var endOffset = document.offsetAt(e.range.end);
          if (endOffset <= lastModifiedOffset) {
            text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
          } else {
            throw new Error("Overlapping edit");
          }
          lastModifiedOffset = startOffset;
        }
        return text;
      }
      TextDocument18.applyEdits = applyEdits;
      function mergeSort(data, compare) {
        if (data.length <= 1) {
          return data;
        }
        var p = data.length / 2 | 0;
        var left = data.slice(0, p);
        var right = data.slice(p);
        mergeSort(left, compare);
        mergeSort(right, compare);
        var leftIdx = 0;
        var rightIdx = 0;
        var i = 0;
        while (leftIdx < left.length && rightIdx < right.length) {
          var ret = compare(left[leftIdx], right[rightIdx]);
          if (ret <= 0) {
            data[i++] = left[leftIdx++];
          } else {
            data[i++] = right[rightIdx++];
          }
        }
        while (leftIdx < left.length) {
          data[i++] = left[leftIdx++];
        }
        while (rightIdx < right.length) {
          data[i++] = right[rightIdx++];
        }
        return data;
      }
    })(TextDocument || (TextDocument = {}));
    FullTextDocument = function() {
      function FullTextDocument2(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = void 0;
      }
      Object.defineProperty(FullTextDocument2.prototype, "uri", {
        get: function() {
          return this._uri;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(FullTextDocument2.prototype, "languageId", {
        get: function() {
          return this._languageId;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(FullTextDocument2.prototype, "version", {
        get: function() {
          return this._version;
        },
        enumerable: false,
        configurable: true
      });
      FullTextDocument2.prototype.getText = function(range) {
        if (range) {
          var start = this.offsetAt(range.start);
          var end = this.offsetAt(range.end);
          return this._content.substring(start, end);
        }
        return this._content;
      };
      FullTextDocument2.prototype.update = function(event, version) {
        this._content = event.text;
        this._version = version;
        this._lineOffsets = void 0;
      };
      FullTextDocument2.prototype.getLineOffsets = function() {
        if (this._lineOffsets === void 0) {
          var lineOffsets = [];
          var text = this._content;
          var isLineStart = true;
          for (var i = 0; i < text.length; i++) {
            if (isLineStart) {
              lineOffsets.push(i);
              isLineStart = false;
            }
            var ch = text.charAt(i);
            isLineStart = ch === "\r" || ch === "\n";
            if (ch === "\r" && i + 1 < text.length && text.charAt(i + 1) === "\n") {
              i++;
            }
          }
          if (isLineStart && text.length > 0) {
            lineOffsets.push(text.length);
          }
          this._lineOffsets = lineOffsets;
        }
        return this._lineOffsets;
      };
      FullTextDocument2.prototype.positionAt = function(offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        var lineOffsets = this.getLineOffsets();
        var low = 0, high = lineOffsets.length;
        if (high === 0) {
          return Position.create(0, offset);
        }
        while (low < high) {
          var mid = Math.floor((low + high) / 2);
          if (lineOffsets[mid] > offset) {
            high = mid;
          } else {
            low = mid + 1;
          }
        }
        var line = low - 1;
        return Position.create(line, offset - lineOffsets[line]);
      };
      FullTextDocument2.prototype.offsetAt = function(position) {
        var lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) {
          return this._content.length;
        } else if (position.line < 0) {
          return 0;
        }
        var lineOffset = lineOffsets[position.line];
        var nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
        return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
      };
      Object.defineProperty(FullTextDocument2.prototype, "lineCount", {
        get: function() {
          return this.getLineOffsets().length;
        },
        enumerable: false,
        configurable: true
      });
      return FullTextDocument2;
    }();
    (function(Is2) {
      var toString2 = Object.prototype.toString;
      function defined(value) {
        return typeof value !== "undefined";
      }
      Is2.defined = defined;
      function undefined2(value) {
        return typeof value === "undefined";
      }
      Is2.undefined = undefined2;
      function boolean2(value) {
        return value === true || value === false;
      }
      Is2.boolean = boolean2;
      function string2(value) {
        return toString2.call(value) === "[object String]";
      }
      Is2.string = string2;
      function number(value) {
        return toString2.call(value) === "[object Number]";
      }
      Is2.number = number;
      function numberRange(value, min, max) {
        return toString2.call(value) === "[object Number]" && min <= value && value <= max;
      }
      Is2.numberRange = numberRange;
      function integer2(value) {
        return toString2.call(value) === "[object Number]" && -2147483648 <= value && value <= 2147483647;
      }
      Is2.integer = integer2;
      function uinteger2(value) {
        return toString2.call(value) === "[object Number]" && 0 <= value && value <= 2147483647;
      }
      Is2.uinteger = uinteger2;
      function func(value) {
        return toString2.call(value) === "[object Function]";
      }
      Is2.func = func;
      function objectLiteral(value) {
        return value !== null && typeof value === "object";
      }
      Is2.objectLiteral = objectLiteral;
      function typedArray(value, check) {
        return Array.isArray(value) && value.every(check);
      }
      Is2.typedArray = typedArray;
    })(Is || (Is = {}));
  }
});

// node_modules/isexe/windows.js
var require_windows = __commonJS({
  "node_modules/isexe/windows.js"(exports, module2) {
    module2.exports = isexe;
    isexe.sync = sync;
    var fs10 = require("fs");
    function checkPathExt(path19, options) {
      var pathext = options.pathExt !== void 0 ? options.pathExt : process.env.PATHEXT;
      if (!pathext) {
        return true;
      }
      pathext = pathext.split(";");
      if (pathext.indexOf("") !== -1) {
        return true;
      }
      for (var i = 0; i < pathext.length; i++) {
        var p = pathext[i].toLowerCase();
        if (p && path19.substr(-p.length).toLowerCase() === p) {
          return true;
        }
      }
      return false;
    }
    function checkStat(stat, path19, options) {
      if (!stat.isSymbolicLink() && !stat.isFile()) {
        return false;
      }
      return checkPathExt(path19, options);
    }
    function isexe(path19, options, cb) {
      fs10.stat(path19, function(er, stat) {
        cb(er, er ? false : checkStat(stat, path19, options));
      });
    }
    function sync(path19, options) {
      return checkStat(fs10.statSync(path19), path19, options);
    }
  }
});

// node_modules/isexe/mode.js
var require_mode = __commonJS({
  "node_modules/isexe/mode.js"(exports, module2) {
    module2.exports = isexe;
    isexe.sync = sync;
    var fs10 = require("fs");
    function isexe(path19, options, cb) {
      fs10.stat(path19, function(er, stat) {
        cb(er, er ? false : checkStat(stat, options));
      });
    }
    function sync(path19, options) {
      return checkStat(fs10.statSync(path19), options);
    }
    function checkStat(stat, options) {
      return stat.isFile() && checkMode(stat, options);
    }
    function checkMode(stat, options) {
      var mod = stat.mode;
      var uid = stat.uid;
      var gid = stat.gid;
      var myUid = options.uid !== void 0 ? options.uid : process.getuid && process.getuid();
      var myGid = options.gid !== void 0 ? options.gid : process.getgid && process.getgid();
      var u = parseInt("100", 8);
      var g = parseInt("010", 8);
      var o = parseInt("001", 8);
      var ug = u | g;
      var ret = mod & o || mod & g && gid === myGid || mod & u && uid === myUid || mod & ug && myUid === 0;
      return ret;
    }
  }
});

// node_modules/isexe/index.js
var require_isexe = __commonJS({
  "node_modules/isexe/index.js"(exports, module2) {
    var fs10 = require("fs");
    var core;
    if (process.platform === "win32" || global.TESTING_WINDOWS) {
      core = require_windows();
    } else {
      core = require_mode();
    }
    module2.exports = isexe;
    isexe.sync = sync;
    function isexe(path19, options, cb) {
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      if (!cb) {
        if (typeof Promise !== "function") {
          throw new TypeError("callback not provided");
        }
        return new Promise(function(resolve, reject) {
          isexe(path19, options || {}, function(er, is) {
            if (er) {
              reject(er);
            } else {
              resolve(is);
            }
          });
        });
      }
      core(path19, options || {}, function(er, is) {
        if (er) {
          if (er.code === "EACCES" || options && options.ignoreErrors) {
            er = null;
            is = false;
          }
        }
        cb(er, is);
      });
    }
    function sync(path19, options) {
      try {
        return core.sync(path19, options || {});
      } catch (er) {
        if (options && options.ignoreErrors || er.code === "EACCES") {
          return false;
        } else {
          throw er;
        }
      }
    }
  }
});

// node_modules/which/which.js
var require_which = __commonJS({
  "node_modules/which/which.js"(exports, module2) {
    var isWindows = process.platform === "win32" || process.env.OSTYPE === "cygwin" || process.env.OSTYPE === "msys";
    var path19 = require("path");
    var COLON = isWindows ? ";" : ":";
    var isexe = require_isexe();
    var getNotFoundError = (cmd) => Object.assign(new Error(`not found: ${cmd}`), { code: "ENOENT" });
    var getPathInfo = (cmd, opt) => {
      const colon = opt.colon || COLON;
      const pathEnv = cmd.match(/\//) || isWindows && cmd.match(/\\/) ? [""] : [
        ...isWindows ? [process.cwd()] : [],
        ...(opt.path || process.env.PATH || "").split(colon)
      ];
      const pathExtExe = isWindows ? opt.pathExt || process.env.PATHEXT || ".EXE;.CMD;.BAT;.COM" : "";
      const pathExt = isWindows ? pathExtExe.split(colon) : [""];
      if (isWindows) {
        if (cmd.indexOf(".") !== -1 && pathExt[0] !== "")
          pathExt.unshift("");
      }
      return {
        pathEnv,
        pathExt,
        pathExtExe
      };
    };
    var which2 = (cmd, opt, cb) => {
      if (typeof opt === "function") {
        cb = opt;
        opt = {};
      }
      if (!opt)
        opt = {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      const step = (i) => new Promise((resolve, reject) => {
        if (i === pathEnv.length)
          return opt.all && found.length ? resolve(found) : reject(getNotFoundError(cmd));
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path19.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        resolve(subStep(p, i, 0));
      });
      const subStep = (p, i, ii) => new Promise((resolve, reject) => {
        if (ii === pathExt.length)
          return resolve(step(i + 1));
        const ext = pathExt[ii];
        isexe(p + ext, { pathExt: pathExtExe }, (er, is) => {
          if (!er && is) {
            if (opt.all)
              found.push(p + ext);
            else
              return resolve(p + ext);
          }
          return resolve(subStep(p, i, ii + 1));
        });
      });
      return cb ? step(0).then((res) => cb(null, res), cb) : step(0);
    };
    var whichSync = (cmd, opt) => {
      opt = opt || {};
      const { pathEnv, pathExt, pathExtExe } = getPathInfo(cmd, opt);
      const found = [];
      for (let i = 0; i < pathEnv.length; i++) {
        const ppRaw = pathEnv[i];
        const pathPart = /^".*"$/.test(ppRaw) ? ppRaw.slice(1, -1) : ppRaw;
        const pCmd = path19.join(pathPart, cmd);
        const p = !pathPart && /^\.[\\\/]/.test(cmd) ? cmd.slice(0, 2) + pCmd : pCmd;
        for (let j = 0; j < pathExt.length; j++) {
          const cur = p + pathExt[j];
          try {
            const is = isexe.sync(cur, { pathExt: pathExtExe });
            if (is) {
              if (opt.all)
                found.push(cur);
              else
                return cur;
            }
          } catch (ex) {
          }
        }
      }
      if (opt.all && found.length)
        return found;
      if (opt.nothrow)
        return null;
      throw getNotFoundError(cmd);
    };
    module2.exports = which2;
    which2.sync = whichSync;
  }
});

// node_modules/semver/internal/constants.js
var require_constants = __commonJS({
  "node_modules/semver/internal/constants.js"(exports, module2) {
    var SEMVER_SPEC_VERSION = "2.0.0";
    var MAX_LENGTH = 256;
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
    var MAX_SAFE_COMPONENT_LENGTH = 16;
    module2.exports = {
      SEMVER_SPEC_VERSION,
      MAX_LENGTH,
      MAX_SAFE_INTEGER,
      MAX_SAFE_COMPONENT_LENGTH
    };
  }
});

// node_modules/semver/internal/debug.js
var require_debug = __commonJS({
  "node_modules/semver/internal/debug.js"(exports, module2) {
    var debug = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
    };
    module2.exports = debug;
  }
});

// node_modules/semver/internal/re.js
var require_re = __commonJS({
  "node_modules/semver/internal/re.js"(exports, module2) {
    var { MAX_SAFE_COMPONENT_LENGTH } = require_constants();
    var debug = require_debug();
    exports = module2.exports = {};
    var re = exports.re = [];
    var src = exports.src = [];
    var t = exports.t = {};
    var R = 0;
    var createToken = (name, value, isGlobal) => {
      const index = R++;
      debug(name, index, value);
      t[name] = index;
      src[index] = value;
      re[index] = new RegExp(value, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "[0-9]+");
    createToken("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*");
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NUMERICIDENTIFIER]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NUMERICIDENTIFIERLOOSE]}|${src[t.NONNUMERICIDENTIFIER]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", "[0-9A-Za-z-]+");
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCE", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }
});

// node_modules/semver/internal/parse-options.js
var require_parse_options = __commonJS({
  "node_modules/semver/internal/parse-options.js"(exports, module2) {
    var opts = ["includePrerelease", "loose", "rtl"];
    var parseOptions = (options) => !options ? {} : typeof options !== "object" ? { loose: true } : opts.filter((k) => options[k]).reduce((o, k) => {
      o[k] = true;
      return o;
    }, {});
    module2.exports = parseOptions;
  }
});

// node_modules/semver/internal/identifiers.js
var require_identifiers = __commonJS({
  "node_modules/semver/internal/identifiers.js"(exports, module2) {
    var numeric = /^[0-9]+$/;
    var compareIdentifiers = (a, b) => {
      const anum = numeric.test(a);
      const bnum = numeric.test(b);
      if (anum && bnum) {
        a = +a;
        b = +b;
      }
      return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
    };
    var rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
    module2.exports = {
      compareIdentifiers,
      rcompareIdentifiers
    };
  }
});

// node_modules/semver/classes/semver.js
var require_semver = __commonJS({
  "node_modules/semver/classes/semver.js"(exports, module2) {
    var debug = require_debug();
    var { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
    var { re, t } = require_re();
    var parseOptions = require_parse_options();
    var { compareIdentifiers } = require_identifiers();
    var SemVer = class {
      constructor(version, options) {
        options = parseOptions(options);
        if (version instanceof SemVer) {
          if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
            return version;
          } else {
            version = version.version;
          }
        } else if (typeof version !== "string") {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        if (version.length > MAX_LENGTH) {
          throw new TypeError(
            `version is longer than ${MAX_LENGTH} characters`
          );
        }
        debug("SemVer", version, options);
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
          throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
          throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
          throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
          throw new TypeError("Invalid patch version");
        }
        if (!m[4]) {
          this.prerelease = [];
        } else {
          this.prerelease = m[4].split(".").map((id) => {
            if (/^[0-9]+$/.test(id)) {
              const num = +id;
              if (num >= 0 && num < MAX_SAFE_INTEGER) {
                return num;
              }
            }
            return id;
          });
        }
        this.build = m[5] ? m[5].split(".") : [];
        this.format();
      }
      format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
          this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
      }
      toString() {
        return this.version;
      }
      compare(other) {
        debug("SemVer.compare", this.version, this.options, other);
        if (!(other instanceof SemVer)) {
          if (typeof other === "string" && other === this.version) {
            return 0;
          }
          other = new SemVer(other, this.options);
        }
        if (other.version === this.version) {
          return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
      }
      compareMain(other) {
        if (!(other instanceof SemVer)) {
          other = new SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
      }
      comparePre(other) {
        if (!(other instanceof SemVer)) {
          other = new SemVer(other, this.options);
        }
        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }
        let i = 0;
        do {
          const a = this.prerelease[i];
          const b = other.prerelease[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      compareBuild(other) {
        if (!(other instanceof SemVer)) {
          other = new SemVer(other, this.options);
        }
        let i = 0;
        do {
          const a = this.build[i];
          const b = other.build[i];
          debug("prerelease compare", i, a, b);
          if (a === void 0 && b === void 0) {
            return 0;
          } else if (b === void 0) {
            return 1;
          } else if (a === void 0) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
      inc(release, identifier) {
        switch (release) {
          case "premajor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc("pre", identifier);
            break;
          case "preminor":
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc("pre", identifier);
            break;
          case "prepatch":
            this.prerelease.length = 0;
            this.inc("patch", identifier);
            this.inc("pre", identifier);
            break;
          case "prerelease":
            if (this.prerelease.length === 0) {
              this.inc("patch", identifier);
            }
            this.inc("pre", identifier);
            break;
          case "major":
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }
            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;
          case "minor":
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }
            this.patch = 0;
            this.prerelease = [];
            break;
          case "patch":
            if (this.prerelease.length === 0) {
              this.patch++;
            }
            this.prerelease = [];
            break;
          case "pre":
            if (this.prerelease.length === 0) {
              this.prerelease = [0];
            } else {
              let i = this.prerelease.length;
              while (--i >= 0) {
                if (typeof this.prerelease[i] === "number") {
                  this.prerelease[i]++;
                  i = -2;
                }
              }
              if (i === -1) {
                this.prerelease.push(0);
              }
            }
            if (identifier) {
              if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = [identifier, 0];
                }
              } else {
                this.prerelease = [identifier, 0];
              }
            }
            break;
          default:
            throw new Error(`invalid increment argument: ${release}`);
        }
        this.format();
        this.raw = this.version;
        return this;
      }
    };
    module2.exports = SemVer;
  }
});

// node_modules/semver/functions/parse.js
var require_parse = __commonJS({
  "node_modules/semver/functions/parse.js"(exports, module2) {
    var { MAX_LENGTH } = require_constants();
    var { re, t } = require_re();
    var SemVer = require_semver();
    var parseOptions = require_parse_options();
    var parse = (version, options) => {
      options = parseOptions(options);
      if (version instanceof SemVer) {
        return version;
      }
      if (typeof version !== "string") {
        return null;
      }
      if (version.length > MAX_LENGTH) {
        return null;
      }
      const r = options.loose ? re[t.LOOSE] : re[t.FULL];
      if (!r.test(version)) {
        return null;
      }
      try {
        return new SemVer(version, options);
      } catch (er) {
        return null;
      }
    };
    module2.exports = parse;
  }
});

// node_modules/semver/functions/valid.js
var require_valid = __commonJS({
  "node_modules/semver/functions/valid.js"(exports, module2) {
    var parse = require_parse();
    var valid2 = (version, options) => {
      const v = parse(version, options);
      return v ? v.version : null;
    };
    module2.exports = valid2;
  }
});

// node_modules/semver/functions/clean.js
var require_clean = __commonJS({
  "node_modules/semver/functions/clean.js"(exports, module2) {
    var parse = require_parse();
    var clean = (version, options) => {
      const s = parse(version.trim().replace(/^[=v]+/, ""), options);
      return s ? s.version : null;
    };
    module2.exports = clean;
  }
});

// node_modules/semver/functions/inc.js
var require_inc = __commonJS({
  "node_modules/semver/functions/inc.js"(exports, module2) {
    var SemVer = require_semver();
    var inc = (version, release, options, identifier) => {
      if (typeof options === "string") {
        identifier = options;
        options = void 0;
      }
      try {
        return new SemVer(
          version instanceof SemVer ? version.version : version,
          options
        ).inc(release, identifier).version;
      } catch (er) {
        return null;
      }
    };
    module2.exports = inc;
  }
});

// node_modules/semver/functions/compare.js
var require_compare = __commonJS({
  "node_modules/semver/functions/compare.js"(exports, module2) {
    var SemVer = require_semver();
    var compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
    module2.exports = compare;
  }
});

// node_modules/semver/functions/eq.js
var require_eq = __commonJS({
  "node_modules/semver/functions/eq.js"(exports, module2) {
    var compare = require_compare();
    var eq = (a, b, loose) => compare(a, b, loose) === 0;
    module2.exports = eq;
  }
});

// node_modules/semver/functions/diff.js
var require_diff = __commonJS({
  "node_modules/semver/functions/diff.js"(exports, module2) {
    var parse = require_parse();
    var eq = require_eq();
    var diff = (version1, version2) => {
      if (eq(version1, version2)) {
        return null;
      } else {
        const v1 = parse(version1);
        const v2 = parse(version2);
        const hasPre = v1.prerelease.length || v2.prerelease.length;
        const prefix = hasPre ? "pre" : "";
        const defaultResult = hasPre ? "prerelease" : "";
        for (const key in v1) {
          if (key === "major" || key === "minor" || key === "patch") {
            if (v1[key] !== v2[key]) {
              return prefix + key;
            }
          }
        }
        return defaultResult;
      }
    };
    module2.exports = diff;
  }
});

// node_modules/semver/functions/major.js
var require_major = __commonJS({
  "node_modules/semver/functions/major.js"(exports, module2) {
    var SemVer = require_semver();
    var major = (a, loose) => new SemVer(a, loose).major;
    module2.exports = major;
  }
});

// node_modules/semver/functions/minor.js
var require_minor = __commonJS({
  "node_modules/semver/functions/minor.js"(exports, module2) {
    var SemVer = require_semver();
    var minor = (a, loose) => new SemVer(a, loose).minor;
    module2.exports = minor;
  }
});

// node_modules/semver/functions/patch.js
var require_patch = __commonJS({
  "node_modules/semver/functions/patch.js"(exports, module2) {
    var SemVer = require_semver();
    var patch = (a, loose) => new SemVer(a, loose).patch;
    module2.exports = patch;
  }
});

// node_modules/semver/functions/prerelease.js
var require_prerelease = __commonJS({
  "node_modules/semver/functions/prerelease.js"(exports, module2) {
    var parse = require_parse();
    var prerelease = (version, options) => {
      const parsed = parse(version, options);
      return parsed && parsed.prerelease.length ? parsed.prerelease : null;
    };
    module2.exports = prerelease;
  }
});

// node_modules/semver/functions/rcompare.js
var require_rcompare = __commonJS({
  "node_modules/semver/functions/rcompare.js"(exports, module2) {
    var compare = require_compare();
    var rcompare = (a, b, loose) => compare(b, a, loose);
    module2.exports = rcompare;
  }
});

// node_modules/semver/functions/compare-loose.js
var require_compare_loose = __commonJS({
  "node_modules/semver/functions/compare-loose.js"(exports, module2) {
    var compare = require_compare();
    var compareLoose = (a, b) => compare(a, b, true);
    module2.exports = compareLoose;
  }
});

// node_modules/semver/functions/compare-build.js
var require_compare_build = __commonJS({
  "node_modules/semver/functions/compare-build.js"(exports, module2) {
    var SemVer = require_semver();
    var compareBuild = (a, b, loose) => {
      const versionA = new SemVer(a, loose);
      const versionB = new SemVer(b, loose);
      return versionA.compare(versionB) || versionA.compareBuild(versionB);
    };
    module2.exports = compareBuild;
  }
});

// node_modules/semver/functions/sort.js
var require_sort = __commonJS({
  "node_modules/semver/functions/sort.js"(exports, module2) {
    var compareBuild = require_compare_build();
    var sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
    module2.exports = sort;
  }
});

// node_modules/semver/functions/rsort.js
var require_rsort = __commonJS({
  "node_modules/semver/functions/rsort.js"(exports, module2) {
    var compareBuild = require_compare_build();
    var rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
    module2.exports = rsort;
  }
});

// node_modules/semver/functions/gt.js
var require_gt = __commonJS({
  "node_modules/semver/functions/gt.js"(exports, module2) {
    var compare = require_compare();
    var gt = (a, b, loose) => compare(a, b, loose) > 0;
    module2.exports = gt;
  }
});

// node_modules/semver/functions/lt.js
var require_lt = __commonJS({
  "node_modules/semver/functions/lt.js"(exports, module2) {
    var compare = require_compare();
    var lt = (a, b, loose) => compare(a, b, loose) < 0;
    module2.exports = lt;
  }
});

// node_modules/semver/functions/neq.js
var require_neq = __commonJS({
  "node_modules/semver/functions/neq.js"(exports, module2) {
    var compare = require_compare();
    var neq = (a, b, loose) => compare(a, b, loose) !== 0;
    module2.exports = neq;
  }
});

// node_modules/semver/functions/gte.js
var require_gte = __commonJS({
  "node_modules/semver/functions/gte.js"(exports, module2) {
    var compare = require_compare();
    var gte2 = (a, b, loose) => compare(a, b, loose) >= 0;
    module2.exports = gte2;
  }
});

// node_modules/semver/functions/lte.js
var require_lte = __commonJS({
  "node_modules/semver/functions/lte.js"(exports, module2) {
    var compare = require_compare();
    var lte = (a, b, loose) => compare(a, b, loose) <= 0;
    module2.exports = lte;
  }
});

// node_modules/semver/functions/cmp.js
var require_cmp = __commonJS({
  "node_modules/semver/functions/cmp.js"(exports, module2) {
    var eq = require_eq();
    var neq = require_neq();
    var gt = require_gt();
    var gte2 = require_gte();
    var lt = require_lt();
    var lte = require_lte();
    var cmp = (a, op, b, loose) => {
      switch (op) {
        case "===":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a === b;
        case "!==":
          if (typeof a === "object") {
            a = a.version;
          }
          if (typeof b === "object") {
            b = b.version;
          }
          return a !== b;
        case "":
        case "=":
        case "==":
          return eq(a, b, loose);
        case "!=":
          return neq(a, b, loose);
        case ">":
          return gt(a, b, loose);
        case ">=":
          return gte2(a, b, loose);
        case "<":
          return lt(a, b, loose);
        case "<=":
          return lte(a, b, loose);
        default:
          throw new TypeError(`Invalid operator: ${op}`);
      }
    };
    module2.exports = cmp;
  }
});

// node_modules/semver/functions/coerce.js
var require_coerce = __commonJS({
  "node_modules/semver/functions/coerce.js"(exports, module2) {
    var SemVer = require_semver();
    var parse = require_parse();
    var { re, t } = require_re();
    var coerce = (version, options) => {
      if (version instanceof SemVer) {
        return version;
      }
      if (typeof version === "number") {
        version = String(version);
      }
      if (typeof version !== "string") {
        return null;
      }
      options = options || {};
      let match = null;
      if (!options.rtl) {
        match = version.match(re[t.COERCE]);
      } else {
        let next;
        while ((next = re[t.COERCERTL].exec(version)) && (!match || match.index + match[0].length !== version.length)) {
          if (!match || next.index + next[0].length !== match.index + match[0].length) {
            match = next;
          }
          re[t.COERCERTL].lastIndex = next.index + next[1].length + next[2].length;
        }
        re[t.COERCERTL].lastIndex = -1;
      }
      if (match === null) {
        return null;
      }
      return parse(`${match[2]}.${match[3] || "0"}.${match[4] || "0"}`, options);
    };
    module2.exports = coerce;
  }
});

// node_modules/yallist/iterator.js
var require_iterator = __commonJS({
  "node_modules/yallist/iterator.js"(exports, module2) {
    "use strict";
    module2.exports = function(Yallist) {
      Yallist.prototype[Symbol.iterator] = function* () {
        for (let walker = this.head; walker; walker = walker.next) {
          yield walker.value;
        }
      };
    };
  }
});

// node_modules/yallist/yallist.js
var require_yallist = __commonJS({
  "node_modules/yallist/yallist.js"(exports, module2) {
    "use strict";
    module2.exports = Yallist;
    Yallist.Node = Node;
    Yallist.create = Yallist;
    function Yallist(list) {
      var self = this;
      if (!(self instanceof Yallist)) {
        self = new Yallist();
      }
      self.tail = null;
      self.head = null;
      self.length = 0;
      if (list && typeof list.forEach === "function") {
        list.forEach(function(item) {
          self.push(item);
        });
      } else if (arguments.length > 0) {
        for (var i = 0, l = arguments.length; i < l; i++) {
          self.push(arguments[i]);
        }
      }
      return self;
    }
    Yallist.prototype.removeNode = function(node) {
      if (node.list !== this) {
        throw new Error("removing node which does not belong to this list");
      }
      var next = node.next;
      var prev = node.prev;
      if (next) {
        next.prev = prev;
      }
      if (prev) {
        prev.next = next;
      }
      if (node === this.head) {
        this.head = next;
      }
      if (node === this.tail) {
        this.tail = prev;
      }
      node.list.length--;
      node.next = null;
      node.prev = null;
      node.list = null;
      return next;
    };
    Yallist.prototype.unshiftNode = function(node) {
      if (node === this.head) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var head = this.head;
      node.list = this;
      node.next = head;
      if (head) {
        head.prev = node;
      }
      this.head = node;
      if (!this.tail) {
        this.tail = node;
      }
      this.length++;
    };
    Yallist.prototype.pushNode = function(node) {
      if (node === this.tail) {
        return;
      }
      if (node.list) {
        node.list.removeNode(node);
      }
      var tail = this.tail;
      node.list = this;
      node.prev = tail;
      if (tail) {
        tail.next = node;
      }
      this.tail = node;
      if (!this.head) {
        this.head = node;
      }
      this.length++;
    };
    Yallist.prototype.push = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        push(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.unshift = function() {
      for (var i = 0, l = arguments.length; i < l; i++) {
        unshift(this, arguments[i]);
      }
      return this.length;
    };
    Yallist.prototype.pop = function() {
      if (!this.tail) {
        return void 0;
      }
      var res = this.tail.value;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.shift = function() {
      if (!this.head) {
        return void 0;
      }
      var res = this.head.value;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      this.length--;
      return res;
    };
    Yallist.prototype.forEach = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.head, i = 0; walker !== null; i++) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.next;
      }
    };
    Yallist.prototype.forEachReverse = function(fn, thisp) {
      thisp = thisp || this;
      for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
        fn.call(thisp, walker.value, i, this);
        walker = walker.prev;
      }
    };
    Yallist.prototype.get = function(n) {
      for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
        walker = walker.next;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.getReverse = function(n) {
      for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
        walker = walker.prev;
      }
      if (i === n && walker !== null) {
        return walker.value;
      }
    };
    Yallist.prototype.map = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.head; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.next;
      }
      return res;
    };
    Yallist.prototype.mapReverse = function(fn, thisp) {
      thisp = thisp || this;
      var res = new Yallist();
      for (var walker = this.tail; walker !== null; ) {
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.prev;
      }
      return res;
    };
    Yallist.prototype.reduce = function(fn, initial) {
      var acc;
      var walker = this.head;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = 0; walker !== null; i++) {
        acc = fn(acc, walker.value, i);
        walker = walker.next;
      }
      return acc;
    };
    Yallist.prototype.reduceReverse = function(fn, initial) {
      var acc;
      var walker = this.tail;
      if (arguments.length > 1) {
        acc = initial;
      } else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
      } else {
        throw new TypeError("Reduce of empty list with no initial value");
      }
      for (var i = this.length - 1; walker !== null; i--) {
        acc = fn(acc, walker.value, i);
        walker = walker.prev;
      }
      return acc;
    };
    Yallist.prototype.toArray = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.head; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.next;
      }
      return arr;
    };
    Yallist.prototype.toArrayReverse = function() {
      var arr = new Array(this.length);
      for (var i = 0, walker = this.tail; walker !== null; i++) {
        arr[i] = walker.value;
        walker = walker.prev;
      }
      return arr;
    };
    Yallist.prototype.slice = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
        walker = walker.next;
      }
      for (; walker !== null && i < to; i++, walker = walker.next) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.sliceReverse = function(from, to) {
      to = to || this.length;
      if (to < 0) {
        to += this.length;
      }
      from = from || 0;
      if (from < 0) {
        from += this.length;
      }
      var ret = new Yallist();
      if (to < from || to < 0) {
        return ret;
      }
      if (from < 0) {
        from = 0;
      }
      if (to > this.length) {
        to = this.length;
      }
      for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
        walker = walker.prev;
      }
      for (; walker !== null && i > from; i--, walker = walker.prev) {
        ret.push(walker.value);
      }
      return ret;
    };
    Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
      if (start > this.length) {
        start = this.length - 1;
      }
      if (start < 0) {
        start = this.length + start;
      }
      for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
        walker = walker.next;
      }
      var ret = [];
      for (var i = 0; walker && i < deleteCount; i++) {
        ret.push(walker.value);
        walker = this.removeNode(walker);
      }
      if (walker === null) {
        walker = this.tail;
      }
      if (walker !== this.head && walker !== this.tail) {
        walker = walker.prev;
      }
      for (var i = 0; i < nodes.length; i++) {
        walker = insert(this, walker, nodes[i]);
      }
      return ret;
    };
    Yallist.prototype.reverse = function() {
      var head = this.head;
      var tail = this.tail;
      for (var walker = head; walker !== null; walker = walker.prev) {
        var p = walker.prev;
        walker.prev = walker.next;
        walker.next = p;
      }
      this.head = tail;
      this.tail = head;
      return this;
    };
    function insert(self, node, value) {
      var inserted = node === self.head ? new Node(value, null, node, self) : new Node(value, node, node.next, self);
      if (inserted.next === null) {
        self.tail = inserted;
      }
      if (inserted.prev === null) {
        self.head = inserted;
      }
      self.length++;
      return inserted;
    }
    function push(self, item) {
      self.tail = new Node(item, self.tail, null, self);
      if (!self.head) {
        self.head = self.tail;
      }
      self.length++;
    }
    function unshift(self, item) {
      self.head = new Node(item, null, self.head, self);
      if (!self.tail) {
        self.tail = self.head;
      }
      self.length++;
    }
    function Node(value, prev, next, list) {
      if (!(this instanceof Node)) {
        return new Node(value, prev, next, list);
      }
      this.list = list;
      this.value = value;
      if (prev) {
        prev.next = this;
        this.prev = prev;
      } else {
        this.prev = null;
      }
      if (next) {
        next.prev = this;
        this.next = next;
      } else {
        this.next = null;
      }
    }
    try {
      require_iterator()(Yallist);
    } catch (er) {
    }
  }
});

// node_modules/lru-cache/index.js
var require_lru_cache = __commonJS({
  "node_modules/lru-cache/index.js"(exports, module2) {
    "use strict";
    var Yallist = require_yallist();
    var MAX = Symbol("max");
    var LENGTH = Symbol("length");
    var LENGTH_CALCULATOR = Symbol("lengthCalculator");
    var ALLOW_STALE = Symbol("allowStale");
    var MAX_AGE = Symbol("maxAge");
    var DISPOSE = Symbol("dispose");
    var NO_DISPOSE_ON_SET = Symbol("noDisposeOnSet");
    var LRU_LIST = Symbol("lruList");
    var CACHE = Symbol("cache");
    var UPDATE_AGE_ON_GET = Symbol("updateAgeOnGet");
    var naiveLength = () => 1;
    var LRUCache = class {
      constructor(options) {
        if (typeof options === "number")
          options = { max: options };
        if (!options)
          options = {};
        if (options.max && (typeof options.max !== "number" || options.max < 0))
          throw new TypeError("max must be a non-negative number");
        const max = this[MAX] = options.max || Infinity;
        const lc = options.length || naiveLength;
        this[LENGTH_CALCULATOR] = typeof lc !== "function" ? naiveLength : lc;
        this[ALLOW_STALE] = options.stale || false;
        if (options.maxAge && typeof options.maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        this[MAX_AGE] = options.maxAge || 0;
        this[DISPOSE] = options.dispose;
        this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
        this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
        this.reset();
      }
      set max(mL) {
        if (typeof mL !== "number" || mL < 0)
          throw new TypeError("max must be a non-negative number");
        this[MAX] = mL || Infinity;
        trim(this);
      }
      get max() {
        return this[MAX];
      }
      set allowStale(allowStale) {
        this[ALLOW_STALE] = !!allowStale;
      }
      get allowStale() {
        return this[ALLOW_STALE];
      }
      set maxAge(mA) {
        if (typeof mA !== "number")
          throw new TypeError("maxAge must be a non-negative number");
        this[MAX_AGE] = mA;
        trim(this);
      }
      get maxAge() {
        return this[MAX_AGE];
      }
      set lengthCalculator(lC) {
        if (typeof lC !== "function")
          lC = naiveLength;
        if (lC !== this[LENGTH_CALCULATOR]) {
          this[LENGTH_CALCULATOR] = lC;
          this[LENGTH] = 0;
          this[LRU_LIST].forEach((hit) => {
            hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
            this[LENGTH] += hit.length;
          });
        }
        trim(this);
      }
      get lengthCalculator() {
        return this[LENGTH_CALCULATOR];
      }
      get length() {
        return this[LENGTH];
      }
      get itemCount() {
        return this[LRU_LIST].length;
      }
      rforEach(fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].tail; walker !== null; ) {
          const prev = walker.prev;
          forEachStep(this, fn, walker, thisp);
          walker = prev;
        }
      }
      forEach(fn, thisp) {
        thisp = thisp || this;
        for (let walker = this[LRU_LIST].head; walker !== null; ) {
          const next = walker.next;
          forEachStep(this, fn, walker, thisp);
          walker = next;
        }
      }
      keys() {
        return this[LRU_LIST].toArray().map((k) => k.key);
      }
      values() {
        return this[LRU_LIST].toArray().map((k) => k.value);
      }
      reset() {
        if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
          this[LRU_LIST].forEach((hit) => this[DISPOSE](hit.key, hit.value));
        }
        this[CACHE] = /* @__PURE__ */ new Map();
        this[LRU_LIST] = new Yallist();
        this[LENGTH] = 0;
      }
      dump() {
        return this[LRU_LIST].map((hit) => isStale(this, hit) ? false : {
          k: hit.key,
          v: hit.value,
          e: hit.now + (hit.maxAge || 0)
        }).toArray().filter((h) => h);
      }
      dumpLru() {
        return this[LRU_LIST];
      }
      set(key, value, maxAge) {
        maxAge = maxAge || this[MAX_AGE];
        if (maxAge && typeof maxAge !== "number")
          throw new TypeError("maxAge must be a number");
        const now = maxAge ? Date.now() : 0;
        const len = this[LENGTH_CALCULATOR](value, key);
        if (this[CACHE].has(key)) {
          if (len > this[MAX]) {
            del(this, this[CACHE].get(key));
            return false;
          }
          const node = this[CACHE].get(key);
          const item = node.value;
          if (this[DISPOSE]) {
            if (!this[NO_DISPOSE_ON_SET])
              this[DISPOSE](key, item.value);
          }
          item.now = now;
          item.maxAge = maxAge;
          item.value = value;
          this[LENGTH] += len - item.length;
          item.length = len;
          this.get(key);
          trim(this);
          return true;
        }
        const hit = new Entry(key, value, len, now, maxAge);
        if (hit.length > this[MAX]) {
          if (this[DISPOSE])
            this[DISPOSE](key, value);
          return false;
        }
        this[LENGTH] += hit.length;
        this[LRU_LIST].unshift(hit);
        this[CACHE].set(key, this[LRU_LIST].head);
        trim(this);
        return true;
      }
      has(key) {
        if (!this[CACHE].has(key))
          return false;
        const hit = this[CACHE].get(key).value;
        return !isStale(this, hit);
      }
      get(key) {
        return get(this, key, true);
      }
      peek(key) {
        return get(this, key, false);
      }
      pop() {
        const node = this[LRU_LIST].tail;
        if (!node)
          return null;
        del(this, node);
        return node.value;
      }
      del(key) {
        del(this, this[CACHE].get(key));
      }
      load(arr) {
        this.reset();
        const now = Date.now();
        for (let l = arr.length - 1; l >= 0; l--) {
          const hit = arr[l];
          const expiresAt = hit.e || 0;
          if (expiresAt === 0)
            this.set(hit.k, hit.v);
          else {
            const maxAge = expiresAt - now;
            if (maxAge > 0) {
              this.set(hit.k, hit.v, maxAge);
            }
          }
        }
      }
      prune() {
        this[CACHE].forEach((value, key) => get(this, key, false));
      }
    };
    var get = (self, key, doUse) => {
      const node = self[CACHE].get(key);
      if (node) {
        const hit = node.value;
        if (isStale(self, hit)) {
          del(self, node);
          if (!self[ALLOW_STALE])
            return void 0;
        } else {
          if (doUse) {
            if (self[UPDATE_AGE_ON_GET])
              node.value.now = Date.now();
            self[LRU_LIST].unshiftNode(node);
          }
        }
        return hit.value;
      }
    };
    var isStale = (self, hit) => {
      if (!hit || !hit.maxAge && !self[MAX_AGE])
        return false;
      const diff = Date.now() - hit.now;
      return hit.maxAge ? diff > hit.maxAge : self[MAX_AGE] && diff > self[MAX_AGE];
    };
    var trim = (self) => {
      if (self[LENGTH] > self[MAX]) {
        for (let walker = self[LRU_LIST].tail; self[LENGTH] > self[MAX] && walker !== null; ) {
          const prev = walker.prev;
          del(self, walker);
          walker = prev;
        }
      }
    };
    var del = (self, node) => {
      if (node) {
        const hit = node.value;
        if (self[DISPOSE])
          self[DISPOSE](hit.key, hit.value);
        self[LENGTH] -= hit.length;
        self[CACHE].delete(hit.key);
        self[LRU_LIST].removeNode(node);
      }
    };
    var Entry = class {
      constructor(key, value, length, now, maxAge) {
        this.key = key;
        this.value = value;
        this.length = length;
        this.now = now;
        this.maxAge = maxAge || 0;
      }
    };
    var forEachStep = (self, fn, node, thisp) => {
      let hit = node.value;
      if (isStale(self, hit)) {
        del(self, node);
        if (!self[ALLOW_STALE])
          hit = void 0;
      }
      if (hit)
        fn.call(thisp, hit.value, hit.key, self);
    };
    module2.exports = LRUCache;
  }
});

// node_modules/semver/classes/range.js
var require_range = __commonJS({
  "node_modules/semver/classes/range.js"(exports, module2) {
    var Range21 = class {
      constructor(range, options) {
        options = parseOptions(options);
        if (range instanceof Range21) {
          if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
            return range;
          } else {
            return new Range21(range.raw, options);
          }
        }
        if (range instanceof Comparator) {
          this.raw = range.value;
          this.set = [[range]];
          this.format();
          return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        this.raw = range;
        this.set = range.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
        if (!this.set.length) {
          throw new TypeError(`Invalid SemVer Range: ${range}`);
        }
        if (this.set.length > 1) {
          const first = this.set[0];
          this.set = this.set.filter((c) => !isNullSet(c[0]));
          if (this.set.length === 0) {
            this.set = [first];
          } else if (this.set.length > 1) {
            for (const c of this.set) {
              if (c.length === 1 && isAny(c[0])) {
                this.set = [c];
                break;
              }
            }
          }
        }
        this.format();
      }
      format() {
        this.range = this.set.map((comps) => {
          return comps.join(" ").trim();
        }).join("||").trim();
        return this.range;
      }
      toString() {
        return this.range;
      }
      parseRange(range) {
        range = range.trim();
        const memoOpts = Object.keys(this.options).join(",");
        const memoKey = `parseRange:${memoOpts}:${range}`;
        const cached = cache.get(memoKey);
        if (cached) {
          return cached;
        }
        const loose = this.options.loose;
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug("hyphen replace", range);
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug("comparator trim", range);
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        range = range.split(/\s+/).join(" ");
        let rangeList = range.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
        if (loose) {
          rangeList = rangeList.filter((comp) => {
            debug("loose invalid filter", comp, this.options);
            return !!comp.match(re[t.COMPARATORLOOSE]);
          });
        }
        debug("range list", rangeList);
        const rangeMap = /* @__PURE__ */ new Map();
        const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
        for (const comp of comparators) {
          if (isNullSet(comp)) {
            return [comp];
          }
          rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has("")) {
          rangeMap.delete("");
        }
        const result = [...rangeMap.values()];
        cache.set(memoKey, result);
        return result;
      }
      intersects(range, options) {
        if (!(range instanceof Range21)) {
          throw new TypeError("a Range is required");
        }
        return this.set.some((thisComparators) => {
          return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators) => {
            return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options);
              });
            });
          });
        });
      }
      test(version) {
        if (!version) {
          return false;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        for (let i = 0; i < this.set.length; i++) {
          if (testSet(this.set[i], version, this.options)) {
            return true;
          }
        }
        return false;
      }
    };
    module2.exports = Range21;
    var LRU = require_lru_cache();
    var cache = new LRU({ max: 1e3 });
    var parseOptions = require_parse_options();
    var Comparator = require_comparator();
    var debug = require_debug();
    var SemVer = require_semver();
    var {
      re,
      t,
      comparatorTrimReplace,
      tildeTrimReplace,
      caretTrimReplace
    } = require_re();
    var isNullSet = (c) => c.value === "<0.0.0-0";
    var isAny = (c) => c.value === "";
    var isSatisfiable = (comparators, options) => {
      let result = true;
      const remainingComparators = comparators.slice();
      let testComparator = remainingComparators.pop();
      while (result && remainingComparators.length) {
        result = remainingComparators.every((otherComparator) => {
          return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
      }
      return result;
    };
    var parseComparator = (comp, options) => {
      debug("comp", comp, options);
      comp = replaceCarets(comp, options);
      debug("caret", comp);
      comp = replaceTildes(comp, options);
      debug("tildes", comp);
      comp = replaceXRanges(comp, options);
      debug("xrange", comp);
      comp = replaceStars(comp, options);
      debug("stars", comp);
      return comp;
    };
    var isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
    var replaceTildes = (comp, options) => comp.trim().split(/\s+/).map((c) => {
      return replaceTilde(c, options);
    }).join(" ");
    var replaceTilde = (comp, options) => {
      const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("tilde", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
          debug("replaceTilde pr", pr);
          ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug("tilde return", ret);
        return ret;
      });
    };
    var replaceCarets = (comp, options) => comp.trim().split(/\s+/).map((c) => {
      return replaceCaret(c, options);
    }).join(" ");
    var replaceCaret = (comp, options) => {
      debug("caret", comp, options);
      const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
      const z = options.includePrerelease ? "-0" : "";
      return comp.replace(r, (_, M, m, p, pr) => {
        debug("caret", comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
          ret = "";
        } else if (isX(m)) {
          ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
          if (M === "0") {
            ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
          } else {
            ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
          }
        } else if (pr) {
          debug("replaceCaret pr", pr);
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
          }
        } else {
          debug("no pr");
          if (M === "0") {
            if (m === "0") {
              ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
            } else {
              ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
            }
          } else {
            ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
          }
        }
        debug("caret return", ret);
        return ret;
      });
    };
    var replaceXRanges = (comp, options) => {
      debug("replaceXRanges", comp, options);
      return comp.split(/\s+/).map((c) => {
        return replaceXRange(c, options);
      }).join(" ");
    };
    var replaceXRange = (comp, options) => {
      comp = comp.trim();
      const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
      return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
        debug("xRange", comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === "=" && anyX) {
          gtlt = "";
        }
        pr = options.includePrerelease ? "-0" : "";
        if (xM) {
          if (gtlt === ">" || gtlt === "<") {
            ret = "<0.0.0-0";
          } else {
            ret = "*";
          }
        } else if (gtlt && anyX) {
          if (xm) {
            m = 0;
          }
          p = 0;
          if (gtlt === ">") {
            gtlt = ">=";
            if (xm) {
              M = +M + 1;
              m = 0;
              p = 0;
            } else {
              m = +m + 1;
              p = 0;
            }
          } else if (gtlt === "<=") {
            gtlt = "<";
            if (xm) {
              M = +M + 1;
            } else {
              m = +m + 1;
            }
          }
          if (gtlt === "<") {
            pr = "-0";
          }
          ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
          ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
          ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug("xRange return", ret);
        return ret;
      });
    };
    var replaceStars = (comp, options) => {
      debug("replaceStars", comp, options);
      return comp.trim().replace(re[t.STAR], "");
    };
    var replaceGTE0 = (comp, options) => {
      debug("replaceGTE0", comp, options);
      return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
    };
    var hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) => {
      if (isX(fM)) {
        from = "";
      } else if (isX(fm)) {
        from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
      } else if (isX(fp)) {
        from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
      } else if (fpr) {
        from = `>=${from}`;
      } else {
        from = `>=${from}${incPr ? "-0" : ""}`;
      }
      if (isX(tM)) {
        to = "";
      } else if (isX(tm)) {
        to = `<${+tM + 1}.0.0-0`;
      } else if (isX(tp)) {
        to = `<${tM}.${+tm + 1}.0-0`;
      } else if (tpr) {
        to = `<=${tM}.${tm}.${tp}-${tpr}`;
      } else if (incPr) {
        to = `<${tM}.${tm}.${+tp + 1}-0`;
      } else {
        to = `<=${to}`;
      }
      return `${from} ${to}`.trim();
    };
    var testSet = (set, version, options) => {
      for (let i = 0; i < set.length; i++) {
        if (!set[i].test(version)) {
          return false;
        }
      }
      if (version.prerelease.length && !options.includePrerelease) {
        for (let i = 0; i < set.length; i++) {
          debug(set[i].semver);
          if (set[i].semver === Comparator.ANY) {
            continue;
          }
          if (set[i].semver.prerelease.length > 0) {
            const allowed = set[i].semver;
            if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
              return true;
            }
          }
        }
        return false;
      }
      return true;
    };
  }
});

// node_modules/semver/classes/comparator.js
var require_comparator = __commonJS({
  "node_modules/semver/classes/comparator.js"(exports, module2) {
    var ANY = Symbol("SemVer ANY");
    var Comparator = class {
      static get ANY() {
        return ANY;
      }
      constructor(comp, options) {
        options = parseOptions(options);
        if (comp instanceof Comparator) {
          if (comp.loose === !!options.loose) {
            return comp;
          } else {
            comp = comp.value;
          }
        }
        debug("comparator", comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
          this.value = "";
        } else {
          this.value = this.operator + this.semver.version;
        }
        debug("comp", this);
      }
      parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
          throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== void 0 ? m[1] : "";
        if (this.operator === "=") {
          this.operator = "";
        }
        if (!m[2]) {
          this.semver = ANY;
        } else {
          this.semver = new SemVer(m[2], this.options.loose);
        }
      }
      toString() {
        return this.value;
      }
      test(version) {
        debug("Comparator.test", version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
          return true;
        }
        if (typeof version === "string") {
          try {
            version = new SemVer(version, this.options);
          } catch (er) {
            return false;
          }
        }
        return cmp(version, this.operator, this.semver, this.options);
      }
      intersects(comp, options) {
        if (!(comp instanceof Comparator)) {
          throw new TypeError("a Comparator is required");
        }
        if (!options || typeof options !== "object") {
          options = {
            loose: !!options,
            includePrerelease: false
          };
        }
        if (this.operator === "") {
          if (this.value === "") {
            return true;
          }
          return new Range21(comp.value, options).test(this.value);
        } else if (comp.operator === "") {
          if (comp.value === "") {
            return true;
          }
          return new Range21(this.value, options).test(comp.semver);
        }
        const sameDirectionIncreasing = (this.operator === ">=" || this.operator === ">") && (comp.operator === ">=" || comp.operator === ">");
        const sameDirectionDecreasing = (this.operator === "<=" || this.operator === "<") && (comp.operator === "<=" || comp.operator === "<");
        const sameSemVer = this.semver.version === comp.semver.version;
        const differentDirectionsInclusive = (this.operator === ">=" || this.operator === "<=") && (comp.operator === ">=" || comp.operator === "<=");
        const oppositeDirectionsLessThan = cmp(this.semver, "<", comp.semver, options) && (this.operator === ">=" || this.operator === ">") && (comp.operator === "<=" || comp.operator === "<");
        const oppositeDirectionsGreaterThan = cmp(this.semver, ">", comp.semver, options) && (this.operator === "<=" || this.operator === "<") && (comp.operator === ">=" || comp.operator === ">");
        return sameDirectionIncreasing || sameDirectionDecreasing || sameSemVer && differentDirectionsInclusive || oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
      }
    };
    module2.exports = Comparator;
    var parseOptions = require_parse_options();
    var { re, t } = require_re();
    var cmp = require_cmp();
    var debug = require_debug();
    var SemVer = require_semver();
    var Range21 = require_range();
  }
});

// node_modules/semver/functions/satisfies.js
var require_satisfies = __commonJS({
  "node_modules/semver/functions/satisfies.js"(exports, module2) {
    var Range21 = require_range();
    var satisfies = (version, range, options) => {
      try {
        range = new Range21(range, options);
      } catch (er) {
        return false;
      }
      return range.test(version);
    };
    module2.exports = satisfies;
  }
});

// node_modules/semver/ranges/to-comparators.js
var require_to_comparators = __commonJS({
  "node_modules/semver/ranges/to-comparators.js"(exports, module2) {
    var Range21 = require_range();
    var toComparators = (range, options) => new Range21(range, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
    module2.exports = toComparators;
  }
});

// node_modules/semver/ranges/max-satisfying.js
var require_max_satisfying = __commonJS({
  "node_modules/semver/ranges/max-satisfying.js"(exports, module2) {
    var SemVer = require_semver();
    var Range21 = require_range();
    var maxSatisfying = (versions, range, options) => {
      let max = null;
      let maxSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range21(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!max || maxSV.compare(v) === -1) {
            max = v;
            maxSV = new SemVer(max, options);
          }
        }
      });
      return max;
    };
    module2.exports = maxSatisfying;
  }
});

// node_modules/semver/ranges/min-satisfying.js
var require_min_satisfying = __commonJS({
  "node_modules/semver/ranges/min-satisfying.js"(exports, module2) {
    var SemVer = require_semver();
    var Range21 = require_range();
    var minSatisfying = (versions, range, options) => {
      let min = null;
      let minSV = null;
      let rangeObj = null;
      try {
        rangeObj = new Range21(range, options);
      } catch (er) {
        return null;
      }
      versions.forEach((v) => {
        if (rangeObj.test(v)) {
          if (!min || minSV.compare(v) === 1) {
            min = v;
            minSV = new SemVer(min, options);
          }
        }
      });
      return min;
    };
    module2.exports = minSatisfying;
  }
});

// node_modules/semver/ranges/min-version.js
var require_min_version = __commonJS({
  "node_modules/semver/ranges/min-version.js"(exports, module2) {
    var SemVer = require_semver();
    var Range21 = require_range();
    var gt = require_gt();
    var minVersion = (range, loose) => {
      range = new Range21(range, loose);
      let minver = new SemVer("0.0.0");
      if (range.test(minver)) {
        return minver;
      }
      minver = new SemVer("0.0.0-0");
      if (range.test(minver)) {
        return minver;
      }
      minver = null;
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator) => {
          const compver = new SemVer(comparator.semver.version);
          switch (comparator.operator) {
            case ">":
              if (compver.prerelease.length === 0) {
                compver.patch++;
              } else {
                compver.prerelease.push(0);
              }
              compver.raw = compver.format();
            case "":
            case ">=":
              if (!setMin || gt(compver, setMin)) {
                setMin = compver;
              }
              break;
            case "<":
            case "<=":
              break;
            default:
              throw new Error(`Unexpected operation: ${comparator.operator}`);
          }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
          minver = setMin;
        }
      }
      if (minver && range.test(minver)) {
        return minver;
      }
      return null;
    };
    module2.exports = minVersion;
  }
});

// node_modules/semver/ranges/valid.js
var require_valid2 = __commonJS({
  "node_modules/semver/ranges/valid.js"(exports, module2) {
    var Range21 = require_range();
    var validRange = (range, options) => {
      try {
        return new Range21(range, options).range || "*";
      } catch (er) {
        return null;
      }
    };
    module2.exports = validRange;
  }
});

// node_modules/semver/ranges/outside.js
var require_outside = __commonJS({
  "node_modules/semver/ranges/outside.js"(exports, module2) {
    var SemVer = require_semver();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var Range21 = require_range();
    var satisfies = require_satisfies();
    var gt = require_gt();
    var lt = require_lt();
    var lte = require_lte();
    var gte2 = require_gte();
    var outside = (version, range, hilo, options) => {
      version = new SemVer(version, options);
      range = new Range21(range, options);
      let gtfn, ltefn, ltfn, comp, ecomp;
      switch (hilo) {
        case ">":
          gtfn = gt;
          ltefn = lte;
          ltfn = lt;
          comp = ">";
          ecomp = ">=";
          break;
        case "<":
          gtfn = lt;
          ltefn = gte2;
          ltfn = gt;
          comp = "<";
          ecomp = "<=";
          break;
        default:
          throw new TypeError('Must provide a hilo val of "<" or ">"');
      }
      if (satisfies(version, range, options)) {
        return false;
      }
      for (let i = 0; i < range.set.length; ++i) {
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator) => {
          if (comparator.semver === ANY) {
            comparator = new Comparator(">=0.0.0");
          }
          high = high || comparator;
          low = low || comparator;
          if (gtfn(comparator.semver, high.semver, options)) {
            high = comparator;
          } else if (ltfn(comparator.semver, low.semver, options)) {
            low = comparator;
          }
        });
        if (high.operator === comp || high.operator === ecomp) {
          return false;
        }
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
          return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
          return false;
        }
      }
      return true;
    };
    module2.exports = outside;
  }
});

// node_modules/semver/ranges/gtr.js
var require_gtr = __commonJS({
  "node_modules/semver/ranges/gtr.js"(exports, module2) {
    var outside = require_outside();
    var gtr = (version, range, options) => outside(version, range, ">", options);
    module2.exports = gtr;
  }
});

// node_modules/semver/ranges/ltr.js
var require_ltr = __commonJS({
  "node_modules/semver/ranges/ltr.js"(exports, module2) {
    var outside = require_outside();
    var ltr = (version, range, options) => outside(version, range, "<", options);
    module2.exports = ltr;
  }
});

// node_modules/semver/ranges/intersects.js
var require_intersects = __commonJS({
  "node_modules/semver/ranges/intersects.js"(exports, module2) {
    var Range21 = require_range();
    var intersects = (r1, r2, options) => {
      r1 = new Range21(r1, options);
      r2 = new Range21(r2, options);
      return r1.intersects(r2);
    };
    module2.exports = intersects;
  }
});

// node_modules/semver/ranges/simplify.js
var require_simplify = __commonJS({
  "node_modules/semver/ranges/simplify.js"(exports, module2) {
    var satisfies = require_satisfies();
    var compare = require_compare();
    module2.exports = (versions, range, options) => {
      const set = [];
      let first = null;
      let prev = null;
      const v = versions.sort((a, b) => compare(a, b, options));
      for (const version of v) {
        const included = satisfies(version, range, options);
        if (included) {
          prev = version;
          if (!first) {
            first = version;
          }
        } else {
          if (prev) {
            set.push([first, prev]);
          }
          prev = null;
          first = null;
        }
      }
      if (first) {
        set.push([first, null]);
      }
      const ranges = [];
      for (const [min, max] of set) {
        if (min === max) {
          ranges.push(min);
        } else if (!max && min === v[0]) {
          ranges.push("*");
        } else if (!max) {
          ranges.push(`>=${min}`);
        } else if (min === v[0]) {
          ranges.push(`<=${max}`);
        } else {
          ranges.push(`${min} - ${max}`);
        }
      }
      const simplified = ranges.join(" || ");
      const original = typeof range.raw === "string" ? range.raw : String(range);
      return simplified.length < original.length ? simplified : range;
    };
  }
});

// node_modules/semver/ranges/subset.js
var require_subset = __commonJS({
  "node_modules/semver/ranges/subset.js"(exports, module2) {
    var Range21 = require_range();
    var Comparator = require_comparator();
    var { ANY } = Comparator;
    var satisfies = require_satisfies();
    var compare = require_compare();
    var subset = (sub, dom, options = {}) => {
      if (sub === dom) {
        return true;
      }
      sub = new Range21(sub, options);
      dom = new Range21(dom, options);
      let sawNonNull = false;
      OUTER:
        for (const simpleSub of sub.set) {
          for (const simpleDom of dom.set) {
            const isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) {
              continue OUTER;
            }
          }
          if (sawNonNull) {
            return false;
          }
        }
      return true;
    };
    var simpleSubset = (sub, dom, options) => {
      if (sub === dom) {
        return true;
      }
      if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
          return true;
        } else if (options.includePrerelease) {
          sub = [new Comparator(">=0.0.0-0")];
        } else {
          sub = [new Comparator(">=0.0.0")];
        }
      }
      if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
          return true;
        } else {
          dom = [new Comparator(">=0.0.0")];
        }
      }
      const eqSet = /* @__PURE__ */ new Set();
      let gt, lt;
      for (const c of sub) {
        if (c.operator === ">" || c.operator === ">=") {
          gt = higherGT(gt, c, options);
        } else if (c.operator === "<" || c.operator === "<=") {
          lt = lowerLT(lt, c, options);
        } else {
          eqSet.add(c.semver);
        }
      }
      if (eqSet.size > 1) {
        return null;
      }
      let gtltComp;
      if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
          return null;
        } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
          return null;
        }
      }
      for (const eq of eqSet) {
        if (gt && !satisfies(eq, String(gt), options)) {
          return null;
        }
        if (lt && !satisfies(eq, String(lt), options)) {
          return null;
        }
        for (const c of dom) {
          if (!satisfies(eq, String(c), options)) {
            return false;
          }
        }
        return true;
      }
      let higher, lower;
      let hasDomLT, hasDomGT;
      let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
      let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
      if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
      }
      for (const c of dom) {
        hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
        hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
        if (gt) {
          if (needDomGTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
              needDomGTPre = false;
            }
          }
          if (c.operator === ">" || c.operator === ">=") {
            higher = higherGT(gt, c, options);
            if (higher === c && higher !== gt) {
              return false;
            }
          } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c), options)) {
            return false;
          }
        }
        if (lt) {
          if (needDomLTPre) {
            if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
              needDomLTPre = false;
            }
          }
          if (c.operator === "<" || c.operator === "<=") {
            lower = lowerLT(lt, c, options);
            if (lower === c && lower !== lt) {
              return false;
            }
          } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c), options)) {
            return false;
          }
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) {
          return false;
        }
      }
      if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
      }
      if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
      }
      if (needDomGTPre || needDomLTPre) {
        return false;
      }
      return true;
    };
    var higherGT = (a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare(a.semver, b.semver, options);
      return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
    };
    var lowerLT = (a, b, options) => {
      if (!a) {
        return b;
      }
      const comp = compare(a.semver, b.semver, options);
      return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
    };
    module2.exports = subset;
  }
});

// node_modules/semver/index.js
var require_semver2 = __commonJS({
  "node_modules/semver/index.js"(exports, module2) {
    var internalRe = require_re();
    module2.exports = {
      re: internalRe.re,
      src: internalRe.src,
      tokens: internalRe.t,
      SEMVER_SPEC_VERSION: require_constants().SEMVER_SPEC_VERSION,
      SemVer: require_semver(),
      compareIdentifiers: require_identifiers().compareIdentifiers,
      rcompareIdentifiers: require_identifiers().rcompareIdentifiers,
      parse: require_parse(),
      valid: require_valid(),
      clean: require_clean(),
      inc: require_inc(),
      diff: require_diff(),
      major: require_major(),
      minor: require_minor(),
      patch: require_patch(),
      prerelease: require_prerelease(),
      compare: require_compare(),
      rcompare: require_rcompare(),
      compareLoose: require_compare_loose(),
      compareBuild: require_compare_build(),
      sort: require_sort(),
      rsort: require_rsort(),
      gt: require_gt(),
      lt: require_lt(),
      eq: require_eq(),
      neq: require_neq(),
      gte: require_gte(),
      lte: require_lte(),
      cmp: require_cmp(),
      coerce: require_coerce(),
      Comparator: require_comparator(),
      Range: require_range(),
      satisfies: require_satisfies(),
      toComparators: require_to_comparators(),
      maxSatisfying: require_max_satisfying(),
      minSatisfying: require_min_satisfying(),
      minVersion: require_min_version(),
      validRange: require_valid2(),
      outside: require_outside(),
      gtr: require_gtr(),
      ltr: require_ltr(),
      intersects: require_intersects(),
      simplifyRange: require_simplify(),
      subset: require_subset()
    };
  }
});

// src/server/utils/api.ts
var semver, _API, API;
var init_api = __esm({
  "src/server/utils/api.ts"() {
    semver = __toESM(require_semver2());
    _API = class {
      constructor(displayName, version, fullVersionString) {
        this.displayName = displayName;
        this.version = version;
        this.fullVersionString = fullVersionString;
      }
      static fromSimpleString(value) {
        return new _API(value, value, value);
      }
      static fromVersionString(versionString) {
        let version = semver.valid(versionString);
        if (!version) {
          return new _API("invalid version", "1.0.0", "1.0.0");
        }
        const index = versionString.indexOf("-");
        if (index >= 0) {
          version = version.substr(0, index);
        }
        return new _API(versionString, version, versionString);
      }
      gte(other) {
        return semver.gte(this.version, other.version);
      }
      lt(other) {
        return !this.gte(other);
      }
    };
    API = _API;
    API.defaultVersion = _API.fromSimpleString("1.0.0");
    API.v203 = _API.fromSimpleString("2.0.3");
    API.v206 = _API.fromSimpleString("2.0.6");
    API.v208 = _API.fromSimpleString("2.0.8");
    API.v213 = _API.fromSimpleString("2.1.3");
    API.v220 = _API.fromSimpleString("2.2.0");
    API.v222 = _API.fromSimpleString("2.2.2");
    API.v230 = _API.fromSimpleString("2.3.0");
    API.v234 = _API.fromSimpleString("2.3.4");
    API.v240 = _API.fromSimpleString("2.4.0");
    API.v250 = _API.fromSimpleString("2.5.0");
    API.v260 = _API.fromSimpleString("2.6.0");
    API.v270 = _API.fromSimpleString("2.7.0");
    API.v280 = _API.fromSimpleString("2.8.0");
    API.v290 = _API.fromSimpleString("2.9.0");
    API.v291 = _API.fromSimpleString("2.9.1");
    API.v292 = _API.fromSimpleString("2.9.2");
    API.v300 = _API.fromSimpleString("3.0.0");
    API.v310 = _API.fromSimpleString("3.1.0");
    API.v314 = _API.fromSimpleString("3.1.4");
    API.v320 = _API.fromSimpleString("3.2.0");
    API.v330 = _API.fromSimpleString("3.3.0");
    API.v333 = _API.fromSimpleString("3.3.3");
    API.v340 = _API.fromSimpleString("3.4.0");
    API.v345 = _API.fromSimpleString("3.4.5");
    API.v350 = _API.fromSimpleString("3.5.0");
    API.v370 = _API.fromSimpleString("3.7.0");
    API.v380 = _API.fromSimpleString("3.8.0");
    API.v381 = _API.fromSimpleString("3.8.1");
    API.v390 = _API.fromSimpleString("3.9.0");
    API.v400 = _API.fromSimpleString("4.0.0");
    API.v401 = _API.fromSimpleString("4.0.1");
    API.v420 = _API.fromSimpleString("4.2.0");
    API.v430 = _API.fromSimpleString("4.3.0");
    API.v440 = _API.fromSimpleString("4.4.0");
    API.v470 = _API.fromSimpleString("4.7.0");
    API.v460 = _API.fromSimpleString("4.6.0");
    API.v480 = _API.fromSimpleString("4.8.0");
    API.v490 = _API.fromSimpleString("4.9.0");
    API.v510 = _API.fromSimpleString("5.1.0");
  }
});

// node_modules/vscode-jsonrpc/lib/common/ral.js
var require_ral = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/ral.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _ral;
    function RAL() {
      if (_ral === void 0) {
        throw new Error(`No runtime abstraction layer installed`);
      }
      return _ral;
    }
    (function(RAL2) {
      function install(ral) {
        if (ral === void 0) {
          throw new Error(`No runtime abstraction layer provided`);
        }
        _ral = ral;
      }
      RAL2.install = install;
    })(RAL || (RAL = {}));
    exports.default = RAL;
  }
});

// node_modules/vscode-jsonrpc/lib/common/disposable.js
var require_disposable = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/disposable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Disposable = void 0;
    var Disposable15;
    (function(Disposable16) {
      function create(func) {
        return {
          dispose: func
        };
      }
      Disposable16.create = create;
    })(Disposable15 = exports.Disposable || (exports.Disposable = {}));
  }
});

// node_modules/vscode-jsonrpc/lib/common/messageBuffer.js
var require_messageBuffer = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/messageBuffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AbstractMessageBuffer = void 0;
    var CR = 13;
    var LF = 10;
    var CRLF = "\r\n";
    var AbstractMessageBuffer = class {
      constructor(encoding = "utf-8") {
        this._encoding = encoding;
        this._chunks = [];
        this._totalLength = 0;
      }
      get encoding() {
        return this._encoding;
      }
      append(chunk) {
        const toAppend = typeof chunk === "string" ? this.fromString(chunk, this._encoding) : chunk;
        this._chunks.push(toAppend);
        this._totalLength += toAppend.byteLength;
      }
      tryReadHeaders() {
        if (this._chunks.length === 0) {
          return void 0;
        }
        let state = 0;
        let chunkIndex = 0;
        let offset = 0;
        let chunkBytesRead = 0;
        row:
          while (chunkIndex < this._chunks.length) {
            const chunk = this._chunks[chunkIndex];
            offset = 0;
            column:
              while (offset < chunk.length) {
                const value = chunk[offset];
                switch (value) {
                  case CR:
                    switch (state) {
                      case 0:
                        state = 1;
                        break;
                      case 2:
                        state = 3;
                        break;
                      default:
                        state = 0;
                    }
                    break;
                  case LF:
                    switch (state) {
                      case 1:
                        state = 2;
                        break;
                      case 3:
                        state = 4;
                        offset++;
                        break row;
                      default:
                        state = 0;
                    }
                    break;
                  default:
                    state = 0;
                }
                offset++;
              }
            chunkBytesRead += chunk.byteLength;
            chunkIndex++;
          }
        if (state !== 4) {
          return void 0;
        }
        const buffer = this._read(chunkBytesRead + offset);
        const result = /* @__PURE__ */ new Map();
        const headers = this.toString(buffer, "ascii").split(CRLF);
        if (headers.length < 2) {
          return result;
        }
        for (let i = 0; i < headers.length - 2; i++) {
          const header = headers[i];
          const index = header.indexOf(":");
          if (index === -1) {
            throw new Error("Message header must separate key and value using :");
          }
          const key = header.substr(0, index);
          const value = header.substr(index + 1).trim();
          result.set(key, value);
        }
        return result;
      }
      tryReadBody(length) {
        if (this._totalLength < length) {
          return void 0;
        }
        return this._read(length);
      }
      get numberOfBytes() {
        return this._totalLength;
      }
      _read(byteCount) {
        if (byteCount === 0) {
          return this.emptyBuffer();
        }
        if (byteCount > this._totalLength) {
          throw new Error(`Cannot read so many bytes!`);
        }
        if (this._chunks[0].byteLength === byteCount) {
          const chunk = this._chunks[0];
          this._chunks.shift();
          this._totalLength -= byteCount;
          return this.asNative(chunk);
        }
        if (this._chunks[0].byteLength > byteCount) {
          const chunk = this._chunks[0];
          const result2 = this.asNative(chunk, byteCount);
          this._chunks[0] = chunk.slice(byteCount);
          this._totalLength -= byteCount;
          return result2;
        }
        const result = this.allocNative(byteCount);
        let resultOffset = 0;
        let chunkIndex = 0;
        while (byteCount > 0) {
          const chunk = this._chunks[chunkIndex];
          if (chunk.byteLength > byteCount) {
            const chunkPart = chunk.slice(0, byteCount);
            result.set(chunkPart, resultOffset);
            resultOffset += byteCount;
            this._chunks[chunkIndex] = chunk.slice(byteCount);
            this._totalLength -= byteCount;
            byteCount -= byteCount;
          } else {
            result.set(chunk, resultOffset);
            resultOffset += chunk.byteLength;
            this._chunks.shift();
            this._totalLength -= chunk.byteLength;
            byteCount -= chunk.byteLength;
          }
        }
        return result;
      }
    };
    exports.AbstractMessageBuffer = AbstractMessageBuffer;
  }
});

// node_modules/vscode-jsonrpc/lib/node/ril.js
var require_ril = __commonJS({
  "node_modules/vscode-jsonrpc/lib/node/ril.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ral_1 = require_ral();
    var util_1 = require("util");
    var disposable_1 = require_disposable();
    var messageBuffer_1 = require_messageBuffer();
    var MessageBuffer = class extends messageBuffer_1.AbstractMessageBuffer {
      constructor(encoding = "utf-8") {
        super(encoding);
      }
      emptyBuffer() {
        return MessageBuffer.emptyBuffer;
      }
      fromString(value, encoding) {
        return Buffer.from(value, encoding);
      }
      toString(value, encoding) {
        if (value instanceof Buffer) {
          return value.toString(encoding);
        } else {
          return new util_1.TextDecoder(encoding).decode(value);
        }
      }
      asNative(buffer, length) {
        if (length === void 0) {
          return buffer instanceof Buffer ? buffer : Buffer.from(buffer);
        } else {
          return buffer instanceof Buffer ? buffer.slice(0, length) : Buffer.from(buffer, 0, length);
        }
      }
      allocNative(length) {
        return Buffer.allocUnsafe(length);
      }
    };
    MessageBuffer.emptyBuffer = Buffer.allocUnsafe(0);
    var ReadableStreamWrapper = class {
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return disposable_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return disposable_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return disposable_1.Disposable.create(() => this.stream.off("end", listener));
      }
      onData(listener) {
        this.stream.on("data", listener);
        return disposable_1.Disposable.create(() => this.stream.off("data", listener));
      }
    };
    var WritableStreamWrapper = class {
      constructor(stream) {
        this.stream = stream;
      }
      onClose(listener) {
        this.stream.on("close", listener);
        return disposable_1.Disposable.create(() => this.stream.off("close", listener));
      }
      onError(listener) {
        this.stream.on("error", listener);
        return disposable_1.Disposable.create(() => this.stream.off("error", listener));
      }
      onEnd(listener) {
        this.stream.on("end", listener);
        return disposable_1.Disposable.create(() => this.stream.off("end", listener));
      }
      write(data, encoding) {
        return new Promise((resolve, reject) => {
          const callback = (error) => {
            if (error === void 0 || error === null) {
              resolve();
            } else {
              reject(error);
            }
          };
          if (typeof data === "string") {
            this.stream.write(data, encoding, callback);
          } else {
            this.stream.write(data, callback);
          }
        });
      }
      end() {
        this.stream.end();
      }
    };
    var _ril = Object.freeze({
      messageBuffer: Object.freeze({
        create: (encoding) => new MessageBuffer(encoding)
      }),
      applicationJson: Object.freeze({
        encoder: Object.freeze({
          name: "application/json",
          encode: (msg, options) => {
            try {
              return Promise.resolve(Buffer.from(JSON.stringify(msg, void 0, 0), options.charset));
            } catch (err) {
              return Promise.reject(err);
            }
          }
        }),
        decoder: Object.freeze({
          name: "application/json",
          decode: (buffer, options) => {
            try {
              if (buffer instanceof Buffer) {
                return Promise.resolve(JSON.parse(buffer.toString(options.charset)));
              } else {
                return Promise.resolve(JSON.parse(new util_1.TextDecoder(options.charset).decode(buffer)));
              }
            } catch (err) {
              return Promise.reject(err);
            }
          }
        })
      }),
      stream: Object.freeze({
        asReadableStream: (stream) => new ReadableStreamWrapper(stream),
        asWritableStream: (stream) => new WritableStreamWrapper(stream)
      }),
      console,
      timer: Object.freeze({
        setTimeout(callback, ms, ...args) {
          const handle = setTimeout(callback, ms, ...args);
          return { dispose: () => clearTimeout(handle) };
        },
        setImmediate(callback, ...args) {
          const handle = setImmediate(callback, ...args);
          return { dispose: () => clearImmediate(handle) };
        },
        setInterval(callback, ms, ...args) {
          const handle = setInterval(callback, ms, ...args);
          return { dispose: () => clearInterval(handle) };
        }
      })
    });
    function RIL() {
      return _ril;
    }
    (function(RIL2) {
      function install() {
        ral_1.default.install(_ril);
      }
      RIL2.install = install;
    })(RIL || (RIL = {}));
    exports.default = RIL;
  }
});

// node_modules/vscode-jsonrpc/lib/common/is.js
var require_is = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/is.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stringArray = exports.array = exports.func = exports.error = exports.number = exports.string = exports.boolean = void 0;
    function boolean2(value) {
      return value === true || value === false;
    }
    exports.boolean = boolean2;
    function string2(value) {
      return typeof value === "string" || value instanceof String;
    }
    exports.string = string2;
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    exports.number = number;
    function error(value) {
      return value instanceof Error;
    }
    exports.error = error;
    function func(value) {
      return typeof value === "function";
    }
    exports.func = func;
    function array(value) {
      return Array.isArray(value);
    }
    exports.array = array;
    function stringArray(value) {
      return array(value) && value.every((elem) => string2(elem));
    }
    exports.stringArray = stringArray;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messages.js
var require_messages = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/messages.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Message = exports.NotificationType9 = exports.NotificationType8 = exports.NotificationType7 = exports.NotificationType6 = exports.NotificationType5 = exports.NotificationType4 = exports.NotificationType3 = exports.NotificationType2 = exports.NotificationType1 = exports.NotificationType0 = exports.NotificationType = exports.RequestType9 = exports.RequestType8 = exports.RequestType7 = exports.RequestType6 = exports.RequestType5 = exports.RequestType4 = exports.RequestType3 = exports.RequestType2 = exports.RequestType1 = exports.RequestType = exports.RequestType0 = exports.AbstractMessageSignature = exports.ParameterStructures = exports.ResponseError = exports.ErrorCodes = void 0;
    var is = require_is();
    var ErrorCodes;
    (function(ErrorCodes2) {
      ErrorCodes2.ParseError = -32700;
      ErrorCodes2.InvalidRequest = -32600;
      ErrorCodes2.MethodNotFound = -32601;
      ErrorCodes2.InvalidParams = -32602;
      ErrorCodes2.InternalError = -32603;
      ErrorCodes2.jsonrpcReservedErrorRangeStart = -32099;
      ErrorCodes2.serverErrorStart = -32099;
      ErrorCodes2.MessageWriteError = -32099;
      ErrorCodes2.MessageReadError = -32098;
      ErrorCodes2.PendingResponseRejected = -32097;
      ErrorCodes2.ConnectionInactive = -32096;
      ErrorCodes2.ServerNotInitialized = -32002;
      ErrorCodes2.UnknownErrorCode = -32001;
      ErrorCodes2.jsonrpcReservedErrorRangeEnd = -32e3;
      ErrorCodes2.serverErrorEnd = -32e3;
    })(ErrorCodes = exports.ErrorCodes || (exports.ErrorCodes = {}));
    var ResponseError = class extends Error {
      constructor(code, message, data) {
        super(message);
        this.code = is.number(code) ? code : ErrorCodes.UnknownErrorCode;
        this.data = data;
        Object.setPrototypeOf(this, ResponseError.prototype);
      }
      toJson() {
        const result = {
          code: this.code,
          message: this.message
        };
        if (this.data !== void 0) {
          result.data = this.data;
        }
        return result;
      }
    };
    exports.ResponseError = ResponseError;
    var ParameterStructures = class {
      constructor(kind) {
        this.kind = kind;
      }
      static is(value) {
        return value === ParameterStructures.auto || value === ParameterStructures.byName || value === ParameterStructures.byPosition;
      }
      toString() {
        return this.kind;
      }
    };
    exports.ParameterStructures = ParameterStructures;
    ParameterStructures.auto = new ParameterStructures("auto");
    ParameterStructures.byPosition = new ParameterStructures("byPosition");
    ParameterStructures.byName = new ParameterStructures("byName");
    var AbstractMessageSignature = class {
      constructor(method, numberOfParams) {
        this.method = method;
        this.numberOfParams = numberOfParams;
      }
      get parameterStructures() {
        return ParameterStructures.auto;
      }
    };
    exports.AbstractMessageSignature = AbstractMessageSignature;
    var RequestType0 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 0);
      }
    };
    exports.RequestType0 = RequestType0;
    var RequestType = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports.RequestType = RequestType;
    var RequestType1 = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports.RequestType1 = RequestType1;
    var RequestType2 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 2);
      }
    };
    exports.RequestType2 = RequestType2;
    var RequestType3 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 3);
      }
    };
    exports.RequestType3 = RequestType3;
    var RequestType4 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 4);
      }
    };
    exports.RequestType4 = RequestType4;
    var RequestType5 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 5);
      }
    };
    exports.RequestType5 = RequestType5;
    var RequestType6 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 6);
      }
    };
    exports.RequestType6 = RequestType6;
    var RequestType7 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 7);
      }
    };
    exports.RequestType7 = RequestType7;
    var RequestType8 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 8);
      }
    };
    exports.RequestType8 = RequestType8;
    var RequestType9 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 9);
      }
    };
    exports.RequestType9 = RequestType9;
    var NotificationType = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports.NotificationType = NotificationType;
    var NotificationType0 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 0);
      }
    };
    exports.NotificationType0 = NotificationType0;
    var NotificationType1 = class extends AbstractMessageSignature {
      constructor(method, _parameterStructures = ParameterStructures.auto) {
        super(method, 1);
        this._parameterStructures = _parameterStructures;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    };
    exports.NotificationType1 = NotificationType1;
    var NotificationType2 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 2);
      }
    };
    exports.NotificationType2 = NotificationType2;
    var NotificationType3 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 3);
      }
    };
    exports.NotificationType3 = NotificationType3;
    var NotificationType4 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 4);
      }
    };
    exports.NotificationType4 = NotificationType4;
    var NotificationType5 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 5);
      }
    };
    exports.NotificationType5 = NotificationType5;
    var NotificationType6 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 6);
      }
    };
    exports.NotificationType6 = NotificationType6;
    var NotificationType7 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 7);
      }
    };
    exports.NotificationType7 = NotificationType7;
    var NotificationType8 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 8);
      }
    };
    exports.NotificationType8 = NotificationType8;
    var NotificationType9 = class extends AbstractMessageSignature {
      constructor(method) {
        super(method, 9);
      }
    };
    exports.NotificationType9 = NotificationType9;
    var Message;
    (function(Message2) {
      function isRequest(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && (is.string(candidate.id) || is.number(candidate.id));
      }
      Message2.isRequest = isRequest;
      function isNotification(message) {
        const candidate = message;
        return candidate && is.string(candidate.method) && message.id === void 0;
      }
      Message2.isNotification = isNotification;
      function isResponse(message) {
        const candidate = message;
        return candidate && (candidate.result !== void 0 || !!candidate.error) && (is.string(candidate.id) || is.number(candidate.id) || candidate.id === null);
      }
      Message2.isResponse = isResponse;
    })(Message = exports.Message || (exports.Message = {}));
  }
});

// node_modules/vscode-jsonrpc/lib/common/linkedMap.js
var require_linkedMap = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/linkedMap.js"(exports) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LRUCache = exports.LinkedMap = exports.Touch = void 0;
    var Touch;
    (function(Touch2) {
      Touch2.None = 0;
      Touch2.First = 1;
      Touch2.AsOld = Touch2.First;
      Touch2.Last = 2;
      Touch2.AsNew = Touch2.Last;
    })(Touch = exports.Touch || (exports.Touch = {}));
    var LinkedMap = class {
      constructor() {
        this[_a] = "LinkedMap";
        this._map = /* @__PURE__ */ new Map();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state = 0;
      }
      clear() {
        this._map.clear();
        this._head = void 0;
        this._tail = void 0;
        this._size = 0;
        this._state++;
      }
      isEmpty() {
        return !this._head && !this._tail;
      }
      get size() {
        return this._size;
      }
      get first() {
        var _a2;
        return (_a2 = this._head) == null ? void 0 : _a2.value;
      }
      get last() {
        var _a2;
        return (_a2 = this._tail) == null ? void 0 : _a2.value;
      }
      has(key) {
        return this._map.has(key);
      }
      get(key, touch = Touch.None) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        if (touch !== Touch.None) {
          this.touch(item, touch);
        }
        return item.value;
      }
      set(key, value, touch = Touch.None) {
        let item = this._map.get(key);
        if (item) {
          item.value = value;
          if (touch !== Touch.None) {
            this.touch(item, touch);
          }
        } else {
          item = { key, value, next: void 0, previous: void 0 };
          switch (touch) {
            case Touch.None:
              this.addItemLast(item);
              break;
            case Touch.First:
              this.addItemFirst(item);
              break;
            case Touch.Last:
              this.addItemLast(item);
              break;
            default:
              this.addItemLast(item);
              break;
          }
          this._map.set(key, item);
          this._size++;
        }
        return this;
      }
      delete(key) {
        return !!this.remove(key);
      }
      remove(key) {
        const item = this._map.get(key);
        if (!item) {
          return void 0;
        }
        this._map.delete(key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      shift() {
        if (!this._head && !this._tail) {
          return void 0;
        }
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        const item = this._head;
        this._map.delete(item.key);
        this.removeItem(item);
        this._size--;
        return item.value;
      }
      forEach(callbackfn, thisArg) {
        const state = this._state;
        let current = this._head;
        while (current) {
          if (thisArg) {
            callbackfn.bind(thisArg)(current.value, current.key, this);
          } else {
            callbackfn(current.value, current.key, this);
          }
          if (this._state !== state) {
            throw new Error(`LinkedMap got modified during iteration.`);
          }
          current = current.next;
        }
      }
      keys() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.key, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      values() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: current.value, done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      entries() {
        const state = this._state;
        let current = this._head;
        const iterator = {
          [Symbol.iterator]: () => {
            return iterator;
          },
          next: () => {
            if (this._state !== state) {
              throw new Error(`LinkedMap got modified during iteration.`);
            }
            if (current) {
              const result = { value: [current.key, current.value], done: false };
              current = current.next;
              return result;
            } else {
              return { value: void 0, done: true };
            }
          }
        };
        return iterator;
      }
      [(_a = Symbol.toStringTag, Symbol.iterator)]() {
        return this.entries();
      }
      trimOld(newSize) {
        if (newSize >= this.size) {
          return;
        }
        if (newSize === 0) {
          this.clear();
          return;
        }
        let current = this._head;
        let currentSize = this.size;
        while (current && currentSize > newSize) {
          this._map.delete(current.key);
          current = current.next;
          currentSize--;
        }
        this._head = current;
        this._size = currentSize;
        if (current) {
          current.previous = void 0;
        }
        this._state++;
      }
      addItemFirst(item) {
        if (!this._head && !this._tail) {
          this._tail = item;
        } else if (!this._head) {
          throw new Error("Invalid list");
        } else {
          item.next = this._head;
          this._head.previous = item;
        }
        this._head = item;
        this._state++;
      }
      addItemLast(item) {
        if (!this._head && !this._tail) {
          this._head = item;
        } else if (!this._tail) {
          throw new Error("Invalid list");
        } else {
          item.previous = this._tail;
          this._tail.next = item;
        }
        this._tail = item;
        this._state++;
      }
      removeItem(item) {
        if (item === this._head && item === this._tail) {
          this._head = void 0;
          this._tail = void 0;
        } else if (item === this._head) {
          if (!item.next) {
            throw new Error("Invalid list");
          }
          item.next.previous = void 0;
          this._head = item.next;
        } else if (item === this._tail) {
          if (!item.previous) {
            throw new Error("Invalid list");
          }
          item.previous.next = void 0;
          this._tail = item.previous;
        } else {
          const next = item.next;
          const previous = item.previous;
          if (!next || !previous) {
            throw new Error("Invalid list");
          }
          next.previous = previous;
          previous.next = next;
        }
        item.next = void 0;
        item.previous = void 0;
        this._state++;
      }
      touch(item, touch) {
        if (!this._head || !this._tail) {
          throw new Error("Invalid list");
        }
        if (touch !== Touch.First && touch !== Touch.Last) {
          return;
        }
        if (touch === Touch.First) {
          if (item === this._head) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._tail) {
            previous.next = void 0;
            this._tail = previous;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.previous = void 0;
          item.next = this._head;
          this._head.previous = item;
          this._head = item;
          this._state++;
        } else if (touch === Touch.Last) {
          if (item === this._tail) {
            return;
          }
          const next = item.next;
          const previous = item.previous;
          if (item === this._head) {
            next.previous = void 0;
            this._head = next;
          } else {
            next.previous = previous;
            previous.next = next;
          }
          item.next = void 0;
          item.previous = this._tail;
          this._tail.next = item;
          this._tail = item;
          this._state++;
        }
      }
      toJSON() {
        const data = [];
        this.forEach((value, key) => {
          data.push([key, value]);
        });
        return data;
      }
      fromJSON(data) {
        this.clear();
        for (const [key, value] of data) {
          this.set(key, value);
        }
      }
    };
    exports.LinkedMap = LinkedMap;
    var LRUCache = class extends LinkedMap {
      constructor(limit, ratio = 1) {
        super();
        this._limit = limit;
        this._ratio = Math.min(Math.max(0, ratio), 1);
      }
      get limit() {
        return this._limit;
      }
      set limit(limit) {
        this._limit = limit;
        this.checkTrim();
      }
      get ratio() {
        return this._ratio;
      }
      set ratio(ratio) {
        this._ratio = Math.min(Math.max(0, ratio), 1);
        this.checkTrim();
      }
      get(key, touch = Touch.AsNew) {
        return super.get(key, touch);
      }
      peek(key) {
        return super.get(key, Touch.None);
      }
      set(key, value) {
        super.set(key, value, Touch.Last);
        this.checkTrim();
        return this;
      }
      checkTrim() {
        if (this.size > this._limit) {
          this.trimOld(Math.round(this._limit * this._ratio));
        }
      }
    };
    exports.LRUCache = LRUCache;
  }
});

// node_modules/vscode-jsonrpc/lib/common/events.js
var require_events = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/events.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Emitter = exports.Event = void 0;
    var ral_1 = require_ral();
    var Event5;
    (function(Event6) {
      const _disposable = { dispose() {
      } };
      Event6.None = function() {
        return _disposable;
      };
    })(Event5 = exports.Event || (exports.Event = {}));
    var CallbackList = class {
      add(callback, context = null, bucket) {
        if (!this._callbacks) {
          this._callbacks = [];
          this._contexts = [];
        }
        this._callbacks.push(callback);
        this._contexts.push(context);
        if (Array.isArray(bucket)) {
          bucket.push({ dispose: () => this.remove(callback, context) });
        }
      }
      remove(callback, context = null) {
        if (!this._callbacks) {
          return;
        }
        let foundCallbackWithDifferentContext = false;
        for (let i = 0, len = this._callbacks.length; i < len; i++) {
          if (this._callbacks[i] === callback) {
            if (this._contexts[i] === context) {
              this._callbacks.splice(i, 1);
              this._contexts.splice(i, 1);
              return;
            } else {
              foundCallbackWithDifferentContext = true;
            }
          }
        }
        if (foundCallbackWithDifferentContext) {
          throw new Error("When adding a listener with a context, you should remove it with the same context");
        }
      }
      invoke(...args) {
        if (!this._callbacks) {
          return [];
        }
        const ret = [], callbacks = this._callbacks.slice(0), contexts = this._contexts.slice(0);
        for (let i = 0, len = callbacks.length; i < len; i++) {
          try {
            ret.push(callbacks[i].apply(contexts[i], args));
          } catch (e) {
            (0, ral_1.default)().console.error(e);
          }
        }
        return ret;
      }
      isEmpty() {
        return !this._callbacks || this._callbacks.length === 0;
      }
      dispose() {
        this._callbacks = void 0;
        this._contexts = void 0;
      }
    };
    var Emitter8 = class {
      constructor(_options) {
        this._options = _options;
      }
      get event() {
        if (!this._event) {
          this._event = (listener, thisArgs, disposables) => {
            if (!this._callbacks) {
              this._callbacks = new CallbackList();
            }
            if (this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty()) {
              this._options.onFirstListenerAdd(this);
            }
            this._callbacks.add(listener, thisArgs);
            const result = {
              dispose: () => {
                if (!this._callbacks) {
                  return;
                }
                this._callbacks.remove(listener, thisArgs);
                result.dispose = Emitter8._noop;
                if (this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty()) {
                  this._options.onLastListenerRemove(this);
                }
              }
            };
            if (Array.isArray(disposables)) {
              disposables.push(result);
            }
            return result;
          };
        }
        return this._event;
      }
      fire(event) {
        if (this._callbacks) {
          this._callbacks.invoke.call(this._callbacks, event);
        }
      }
      dispose() {
        if (this._callbacks) {
          this._callbacks.dispose();
          this._callbacks = void 0;
        }
      }
    };
    exports.Emitter = Emitter8;
    Emitter8._noop = function() {
    };
  }
});

// node_modules/vscode-jsonrpc/lib/common/cancellation.js
var require_cancellation = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/cancellation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CancellationTokenSource = exports.CancellationToken = void 0;
    var ral_1 = require_ral();
    var Is2 = require_is();
    var events_1 = require_events();
    var CancellationToken26;
    (function(CancellationToken27) {
      CancellationToken27.None = Object.freeze({
        isCancellationRequested: false,
        onCancellationRequested: events_1.Event.None
      });
      CancellationToken27.Cancelled = Object.freeze({
        isCancellationRequested: true,
        onCancellationRequested: events_1.Event.None
      });
      function is(value) {
        const candidate = value;
        return candidate && (candidate === CancellationToken27.None || candidate === CancellationToken27.Cancelled || Is2.boolean(candidate.isCancellationRequested) && !!candidate.onCancellationRequested);
      }
      CancellationToken27.is = is;
    })(CancellationToken26 = exports.CancellationToken || (exports.CancellationToken = {}));
    var shortcutEvent = Object.freeze(function(callback, context) {
      const handle = (0, ral_1.default)().timer.setTimeout(callback.bind(context), 0);
      return { dispose() {
        handle.dispose();
      } };
    });
    var MutableToken = class {
      constructor() {
        this._isCancelled = false;
      }
      cancel() {
        if (!this._isCancelled) {
          this._isCancelled = true;
          if (this._emitter) {
            this._emitter.fire(void 0);
            this.dispose();
          }
        }
      }
      get isCancellationRequested() {
        return this._isCancelled;
      }
      get onCancellationRequested() {
        if (this._isCancelled) {
          return shortcutEvent;
        }
        if (!this._emitter) {
          this._emitter = new events_1.Emitter();
        }
        return this._emitter.event;
      }
      dispose() {
        if (this._emitter) {
          this._emitter.dispose();
          this._emitter = void 0;
        }
      }
    };
    var CancellationTokenSource5 = class {
      get token() {
        if (!this._token) {
          this._token = new MutableToken();
        }
        return this._token;
      }
      cancel() {
        if (!this._token) {
          this._token = CancellationToken26.Cancelled;
        } else {
          this._token.cancel();
        }
      }
      dispose() {
        if (!this._token) {
          this._token = CancellationToken26.None;
        } else if (this._token instanceof MutableToken) {
          this._token.dispose();
        }
      }
    };
    exports.CancellationTokenSource = CancellationTokenSource5;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messageReader.js
var require_messageReader = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/messageReader.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReadableStreamMessageReader = exports.AbstractMessageReader = exports.MessageReader = void 0;
    var ral_1 = require_ral();
    var Is2 = require_is();
    var events_1 = require_events();
    var MessageReader;
    (function(MessageReader2) {
      function is(value) {
        let candidate = value;
        return candidate && Is2.func(candidate.listen) && Is2.func(candidate.dispose) && Is2.func(candidate.onError) && Is2.func(candidate.onClose) && Is2.func(candidate.onPartialMessage);
      }
      MessageReader2.is = is;
    })(MessageReader = exports.MessageReader || (exports.MessageReader = {}));
    var AbstractMessageReader = class {
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
        this.partialMessageEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error) {
        this.errorEmitter.fire(this.asError(error));
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      get onPartialMessage() {
        return this.partialMessageEmitter.event;
      }
      firePartialMessage(info) {
        this.partialMessageEmitter.fire(info);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Reader received error. Reason: ${Is2.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports.AbstractMessageReader = AbstractMessageReader;
    var ResolvedMessageReaderOptions;
    (function(ResolvedMessageReaderOptions2) {
      function fromOptions(options) {
        let charset;
        let result;
        let contentDecoder;
        const contentDecoders = /* @__PURE__ */ new Map();
        let contentTypeDecoder;
        const contentTypeDecoders = /* @__PURE__ */ new Map();
        if (options === void 0 || typeof options === "string") {
          charset = options ?? "utf-8";
        } else {
          charset = options.charset ?? "utf-8";
          if (options.contentDecoder !== void 0) {
            contentDecoder = options.contentDecoder;
            contentDecoders.set(contentDecoder.name, contentDecoder);
          }
          if (options.contentDecoders !== void 0) {
            for (const decoder of options.contentDecoders) {
              contentDecoders.set(decoder.name, decoder);
            }
          }
          if (options.contentTypeDecoder !== void 0) {
            contentTypeDecoder = options.contentTypeDecoder;
            contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
          }
          if (options.contentTypeDecoders !== void 0) {
            for (const decoder of options.contentTypeDecoders) {
              contentTypeDecoders.set(decoder.name, decoder);
            }
          }
        }
        if (contentTypeDecoder === void 0) {
          contentTypeDecoder = (0, ral_1.default)().applicationJson.decoder;
          contentTypeDecoders.set(contentTypeDecoder.name, contentTypeDecoder);
        }
        return { charset, contentDecoder, contentDecoders, contentTypeDecoder, contentTypeDecoders };
      }
      ResolvedMessageReaderOptions2.fromOptions = fromOptions;
    })(ResolvedMessageReaderOptions || (ResolvedMessageReaderOptions = {}));
    var ReadableStreamMessageReader = class extends AbstractMessageReader {
      constructor(readable, options) {
        super();
        this.readable = readable;
        this.options = ResolvedMessageReaderOptions.fromOptions(options);
        this.buffer = (0, ral_1.default)().messageBuffer.create(this.options.charset);
        this._partialMessageTimeout = 1e4;
        this.nextMessageLength = -1;
        this.messageToken = 0;
      }
      set partialMessageTimeout(timeout) {
        this._partialMessageTimeout = timeout;
      }
      get partialMessageTimeout() {
        return this._partialMessageTimeout;
      }
      listen(callback) {
        this.nextMessageLength = -1;
        this.messageToken = 0;
        this.partialMessageTimer = void 0;
        this.callback = callback;
        const result = this.readable.onData((data) => {
          this.onData(data);
        });
        this.readable.onError((error) => this.fireError(error));
        this.readable.onClose(() => this.fireClose());
        return result;
      }
      onData(data) {
        this.buffer.append(data);
        while (true) {
          if (this.nextMessageLength === -1) {
            const headers = this.buffer.tryReadHeaders();
            if (!headers) {
              return;
            }
            const contentLength2 = headers.get("Content-Length");
            if (!contentLength2) {
              throw new Error("Header must provide a Content-Length property.");
            }
            const length = parseInt(contentLength2);
            if (isNaN(length)) {
              throw new Error("Content-Length value must be a number.");
            }
            this.nextMessageLength = length;
          }
          const body = this.buffer.tryReadBody(this.nextMessageLength);
          if (body === void 0) {
            this.setPartialMessageTimer();
            return;
          }
          this.clearPartialMessageTimer();
          this.nextMessageLength = -1;
          let p;
          if (this.options.contentDecoder !== void 0) {
            p = this.options.contentDecoder.decode(body);
          } else {
            p = Promise.resolve(body);
          }
          p.then((value) => {
            this.options.contentTypeDecoder.decode(value, this.options).then((msg) => {
              this.callback(msg);
            }, (error) => {
              this.fireError(error);
            });
          }, (error) => {
            this.fireError(error);
          });
        }
      }
      clearPartialMessageTimer() {
        if (this.partialMessageTimer) {
          this.partialMessageTimer.dispose();
          this.partialMessageTimer = void 0;
        }
      }
      setPartialMessageTimer() {
        this.clearPartialMessageTimer();
        if (this._partialMessageTimeout <= 0) {
          return;
        }
        this.partialMessageTimer = (0, ral_1.default)().timer.setTimeout((token, timeout) => {
          this.partialMessageTimer = void 0;
          if (token === this.messageToken) {
            this.firePartialMessage({ messageToken: token, waitingTime: timeout });
            this.setPartialMessageTimer();
          }
        }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout);
      }
    };
    exports.ReadableStreamMessageReader = ReadableStreamMessageReader;
  }
});

// node_modules/vscode-jsonrpc/lib/common/semaphore.js
var require_semaphore = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/semaphore.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Semaphore = void 0;
    var ral_1 = require_ral();
    var Semaphore = class {
      constructor(capacity = 1) {
        if (capacity <= 0) {
          throw new Error("Capacity must be greater than 0");
        }
        this._capacity = capacity;
        this._active = 0;
        this._waiting = [];
      }
      lock(thunk) {
        return new Promise((resolve, reject) => {
          this._waiting.push({ thunk, resolve, reject });
          this.runNext();
        });
      }
      get active() {
        return this._active;
      }
      runNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        (0, ral_1.default)().timer.setImmediate(() => this.doRunNext());
      }
      doRunNext() {
        if (this._waiting.length === 0 || this._active === this._capacity) {
          return;
        }
        const next = this._waiting.shift();
        this._active++;
        if (this._active > this._capacity) {
          throw new Error(`To many thunks active`);
        }
        try {
          const result = next.thunk();
          if (result instanceof Promise) {
            result.then((value) => {
              this._active--;
              next.resolve(value);
              this.runNext();
            }, (err) => {
              this._active--;
              next.reject(err);
              this.runNext();
            });
          } else {
            this._active--;
            next.resolve(result);
            this.runNext();
          }
        } catch (err) {
          this._active--;
          next.reject(err);
          this.runNext();
        }
      }
    };
    exports.Semaphore = Semaphore;
  }
});

// node_modules/vscode-jsonrpc/lib/common/messageWriter.js
var require_messageWriter = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/messageWriter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WriteableStreamMessageWriter = exports.AbstractMessageWriter = exports.MessageWriter = void 0;
    var ral_1 = require_ral();
    var Is2 = require_is();
    var semaphore_1 = require_semaphore();
    var events_1 = require_events();
    var ContentLength = "Content-Length: ";
    var CRLF = "\r\n";
    var MessageWriter;
    (function(MessageWriter2) {
      function is(value) {
        let candidate = value;
        return candidate && Is2.func(candidate.dispose) && Is2.func(candidate.onClose) && Is2.func(candidate.onError) && Is2.func(candidate.write);
      }
      MessageWriter2.is = is;
    })(MessageWriter = exports.MessageWriter || (exports.MessageWriter = {}));
    var AbstractMessageWriter = class {
      constructor() {
        this.errorEmitter = new events_1.Emitter();
        this.closeEmitter = new events_1.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose();
        this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(error, message, count) {
        this.errorEmitter.fire([this.asError(error), message, count]);
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      asError(error) {
        if (error instanceof Error) {
          return error;
        } else {
          return new Error(`Writer received error. Reason: ${Is2.string(error.message) ? error.message : "unknown"}`);
        }
      }
    };
    exports.AbstractMessageWriter = AbstractMessageWriter;
    var ResolvedMessageWriterOptions;
    (function(ResolvedMessageWriterOptions2) {
      function fromOptions(options) {
        if (options === void 0 || typeof options === "string") {
          return { charset: options ?? "utf-8", contentTypeEncoder: (0, ral_1.default)().applicationJson.encoder };
        } else {
          return { charset: options.charset ?? "utf-8", contentEncoder: options.contentEncoder, contentTypeEncoder: options.contentTypeEncoder ?? (0, ral_1.default)().applicationJson.encoder };
        }
      }
      ResolvedMessageWriterOptions2.fromOptions = fromOptions;
    })(ResolvedMessageWriterOptions || (ResolvedMessageWriterOptions = {}));
    var WriteableStreamMessageWriter = class extends AbstractMessageWriter {
      constructor(writable, options) {
        super();
        this.writable = writable;
        this.options = ResolvedMessageWriterOptions.fromOptions(options);
        this.errorCount = 0;
        this.writeSemaphore = new semaphore_1.Semaphore(1);
        this.writable.onError((error) => this.fireError(error));
        this.writable.onClose(() => this.fireClose());
      }
      async write(msg) {
        return this.writeSemaphore.lock(async () => {
          const payload = this.options.contentTypeEncoder.encode(msg, this.options).then((buffer) => {
            if (this.options.contentEncoder !== void 0) {
              return this.options.contentEncoder.encode(buffer);
            } else {
              return buffer;
            }
          });
          return payload.then((buffer) => {
            const headers = [];
            headers.push(ContentLength, buffer.byteLength.toString(), CRLF);
            headers.push(CRLF);
            return this.doWrite(msg, headers, buffer);
          }, (error) => {
            this.fireError(error);
            throw error;
          });
        });
      }
      async doWrite(msg, headers, data) {
        try {
          await this.writable.write(headers.join(""), "ascii");
          return this.writable.write(data);
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
        this.writable.end();
      }
    };
    exports.WriteableStreamMessageWriter = WriteableStreamMessageWriter;
  }
});

// node_modules/vscode-jsonrpc/lib/common/connection.js
var require_connection = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/connection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createMessageConnection = exports.ConnectionOptions = exports.CancellationStrategy = exports.CancellationSenderStrategy = exports.CancellationReceiverStrategy = exports.ConnectionStrategy = exports.ConnectionError = exports.ConnectionErrors = exports.LogTraceNotification = exports.SetTraceNotification = exports.TraceFormat = exports.TraceValues = exports.Trace = exports.NullLogger = exports.ProgressType = exports.ProgressToken = void 0;
    var ral_1 = require_ral();
    var Is2 = require_is();
    var messages_1 = require_messages();
    var linkedMap_1 = require_linkedMap();
    var events_1 = require_events();
    var cancellation_1 = require_cancellation();
    var CancelNotification;
    (function(CancelNotification2) {
      CancelNotification2.type = new messages_1.NotificationType("$/cancelRequest");
    })(CancelNotification || (CancelNotification = {}));
    var ProgressToken;
    (function(ProgressToken2) {
      function is(value) {
        return typeof value === "string" || typeof value === "number";
      }
      ProgressToken2.is = is;
    })(ProgressToken = exports.ProgressToken || (exports.ProgressToken = {}));
    var ProgressNotification;
    (function(ProgressNotification2) {
      ProgressNotification2.type = new messages_1.NotificationType("$/progress");
    })(ProgressNotification || (ProgressNotification = {}));
    var ProgressType = class {
      constructor() {
      }
    };
    exports.ProgressType = ProgressType;
    var StarRequestHandler;
    (function(StarRequestHandler2) {
      function is(value) {
        return Is2.func(value);
      }
      StarRequestHandler2.is = is;
    })(StarRequestHandler || (StarRequestHandler = {}));
    exports.NullLogger = Object.freeze({
      error: () => {
      },
      warn: () => {
      },
      info: () => {
      },
      log: () => {
      }
    });
    var Trace2;
    (function(Trace3) {
      Trace3[Trace3["Off"] = 0] = "Off";
      Trace3[Trace3["Messages"] = 1] = "Messages";
      Trace3[Trace3["Compact"] = 2] = "Compact";
      Trace3[Trace3["Verbose"] = 3] = "Verbose";
    })(Trace2 = exports.Trace || (exports.Trace = {}));
    var TraceValues;
    (function(TraceValues2) {
      TraceValues2.Off = "off";
      TraceValues2.Messages = "messages";
      TraceValues2.Compact = "compact";
      TraceValues2.Verbose = "verbose";
    })(TraceValues = exports.TraceValues || (exports.TraceValues = {}));
    (function(Trace3) {
      function fromString(value) {
        if (!Is2.string(value)) {
          return Trace3.Off;
        }
        value = value.toLowerCase();
        switch (value) {
          case "off":
            return Trace3.Off;
          case "messages":
            return Trace3.Messages;
          case "compact":
            return Trace3.Compact;
          case "verbose":
            return Trace3.Verbose;
          default:
            return Trace3.Off;
        }
      }
      Trace3.fromString = fromString;
      function toString2(value) {
        switch (value) {
          case Trace3.Off:
            return "off";
          case Trace3.Messages:
            return "messages";
          case Trace3.Compact:
            return "compact";
          case Trace3.Verbose:
            return "verbose";
          default:
            return "off";
        }
      }
      Trace3.toString = toString2;
    })(Trace2 = exports.Trace || (exports.Trace = {}));
    var TraceFormat;
    (function(TraceFormat2) {
      TraceFormat2["Text"] = "text";
      TraceFormat2["JSON"] = "json";
    })(TraceFormat = exports.TraceFormat || (exports.TraceFormat = {}));
    (function(TraceFormat2) {
      function fromString(value) {
        if (!Is2.string(value)) {
          return TraceFormat2.Text;
        }
        value = value.toLowerCase();
        if (value === "json") {
          return TraceFormat2.JSON;
        } else {
          return TraceFormat2.Text;
        }
      }
      TraceFormat2.fromString = fromString;
    })(TraceFormat = exports.TraceFormat || (exports.TraceFormat = {}));
    var SetTraceNotification;
    (function(SetTraceNotification2) {
      SetTraceNotification2.type = new messages_1.NotificationType("$/setTrace");
    })(SetTraceNotification = exports.SetTraceNotification || (exports.SetTraceNotification = {}));
    var LogTraceNotification;
    (function(LogTraceNotification2) {
      LogTraceNotification2.type = new messages_1.NotificationType("$/logTrace");
    })(LogTraceNotification = exports.LogTraceNotification || (exports.LogTraceNotification = {}));
    var ConnectionErrors;
    (function(ConnectionErrors2) {
      ConnectionErrors2[ConnectionErrors2["Closed"] = 1] = "Closed";
      ConnectionErrors2[ConnectionErrors2["Disposed"] = 2] = "Disposed";
      ConnectionErrors2[ConnectionErrors2["AlreadyListening"] = 3] = "AlreadyListening";
    })(ConnectionErrors = exports.ConnectionErrors || (exports.ConnectionErrors = {}));
    var ConnectionError = class extends Error {
      constructor(code, message) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, ConnectionError.prototype);
      }
    };
    exports.ConnectionError = ConnectionError;
    var ConnectionStrategy;
    (function(ConnectionStrategy2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.cancelUndispatched);
      }
      ConnectionStrategy2.is = is;
    })(ConnectionStrategy = exports.ConnectionStrategy || (exports.ConnectionStrategy = {}));
    var CancellationReceiverStrategy;
    (function(CancellationReceiverStrategy2) {
      CancellationReceiverStrategy2.Message = Object.freeze({
        createCancellationTokenSource(_) {
          return new cancellation_1.CancellationTokenSource();
        }
      });
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.createCancellationTokenSource);
      }
      CancellationReceiverStrategy2.is = is;
    })(CancellationReceiverStrategy = exports.CancellationReceiverStrategy || (exports.CancellationReceiverStrategy = {}));
    var CancellationSenderStrategy;
    (function(CancellationSenderStrategy2) {
      CancellationSenderStrategy2.Message = Object.freeze({
        sendCancellation(conn, id) {
          return conn.sendNotification(CancelNotification.type, { id });
        },
        cleanup(_) {
        }
      });
      function is(value) {
        const candidate = value;
        return candidate && Is2.func(candidate.sendCancellation) && Is2.func(candidate.cleanup);
      }
      CancellationSenderStrategy2.is = is;
    })(CancellationSenderStrategy = exports.CancellationSenderStrategy || (exports.CancellationSenderStrategy = {}));
    var CancellationStrategy;
    (function(CancellationStrategy2) {
      CancellationStrategy2.Message = Object.freeze({
        receiver: CancellationReceiverStrategy.Message,
        sender: CancellationSenderStrategy.Message
      });
      function is(value) {
        const candidate = value;
        return candidate && CancellationReceiverStrategy.is(candidate.receiver) && CancellationSenderStrategy.is(candidate.sender);
      }
      CancellationStrategy2.is = is;
    })(CancellationStrategy = exports.CancellationStrategy || (exports.CancellationStrategy = {}));
    var ConnectionOptions;
    (function(ConnectionOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (CancellationStrategy.is(candidate.cancellationStrategy) || ConnectionStrategy.is(candidate.connectionStrategy));
      }
      ConnectionOptions2.is = is;
    })(ConnectionOptions = exports.ConnectionOptions || (exports.ConnectionOptions = {}));
    var ConnectionState;
    (function(ConnectionState2) {
      ConnectionState2[ConnectionState2["New"] = 1] = "New";
      ConnectionState2[ConnectionState2["Listening"] = 2] = "Listening";
      ConnectionState2[ConnectionState2["Closed"] = 3] = "Closed";
      ConnectionState2[ConnectionState2["Disposed"] = 4] = "Disposed";
    })(ConnectionState || (ConnectionState = {}));
    function createMessageConnection(messageReader, messageWriter, _logger, options) {
      const logger = _logger !== void 0 ? _logger : exports.NullLogger;
      let sequenceNumber = 0;
      let notificationSequenceNumber = 0;
      let unknownResponseSequenceNumber = 0;
      const version = "2.0";
      let starRequestHandler = void 0;
      const requestHandlers = /* @__PURE__ */ new Map();
      let starNotificationHandler = void 0;
      const notificationHandlers = /* @__PURE__ */ new Map();
      const progressHandlers = /* @__PURE__ */ new Map();
      let timer;
      let messageQueue = new linkedMap_1.LinkedMap();
      let responsePromises = /* @__PURE__ */ new Map();
      let knownCanceledRequests = /* @__PURE__ */ new Set();
      let requestTokens = /* @__PURE__ */ new Map();
      let trace = Trace2.Off;
      let traceFormat = TraceFormat.Text;
      let tracer;
      let state = ConnectionState.New;
      const errorEmitter = new events_1.Emitter();
      const closeEmitter = new events_1.Emitter();
      const unhandledNotificationEmitter = new events_1.Emitter();
      const unhandledProgressEmitter = new events_1.Emitter();
      const disposeEmitter = new events_1.Emitter();
      const cancellationStrategy = options && options.cancellationStrategy ? options.cancellationStrategy : CancellationStrategy.Message;
      function createRequestQueueKey(id) {
        if (id === null) {
          throw new Error(`Can't send requests with id null since the response can't be correlated.`);
        }
        return "req-" + id.toString();
      }
      function createResponseQueueKey(id) {
        if (id === null) {
          return "res-unknown-" + (++unknownResponseSequenceNumber).toString();
        } else {
          return "res-" + id.toString();
        }
      }
      function createNotificationQueueKey() {
        return "not-" + (++notificationSequenceNumber).toString();
      }
      function addMessageToQueue(queue, message) {
        if (messages_1.Message.isRequest(message)) {
          queue.set(createRequestQueueKey(message.id), message);
        } else if (messages_1.Message.isResponse(message)) {
          queue.set(createResponseQueueKey(message.id), message);
        } else {
          queue.set(createNotificationQueueKey(), message);
        }
      }
      function cancelUndispatched(_message) {
        return void 0;
      }
      function isListening() {
        return state === ConnectionState.Listening;
      }
      function isClosed() {
        return state === ConnectionState.Closed;
      }
      function isDisposed() {
        return state === ConnectionState.Disposed;
      }
      function closeHandler() {
        if (state === ConnectionState.New || state === ConnectionState.Listening) {
          state = ConnectionState.Closed;
          closeEmitter.fire(void 0);
        }
      }
      function readErrorHandler(error) {
        errorEmitter.fire([error, void 0, void 0]);
      }
      function writeErrorHandler(data) {
        errorEmitter.fire(data);
      }
      messageReader.onClose(closeHandler);
      messageReader.onError(readErrorHandler);
      messageWriter.onClose(closeHandler);
      messageWriter.onError(writeErrorHandler);
      function triggerMessageQueue() {
        if (timer || messageQueue.size === 0) {
          return;
        }
        timer = (0, ral_1.default)().timer.setImmediate(() => {
          timer = void 0;
          processMessageQueue();
        });
      }
      function processMessageQueue() {
        if (messageQueue.size === 0) {
          return;
        }
        const message = messageQueue.shift();
        try {
          if (messages_1.Message.isRequest(message)) {
            handleRequest(message);
          } else if (messages_1.Message.isNotification(message)) {
            handleNotification(message);
          } else if (messages_1.Message.isResponse(message)) {
            handleResponse(message);
          } else {
            handleInvalidMessage(message);
          }
        } finally {
          triggerMessageQueue();
        }
      }
      const callback = (message) => {
        try {
          if (messages_1.Message.isNotification(message) && message.method === CancelNotification.type.method) {
            const cancelId = message.params.id;
            const key = createRequestQueueKey(cancelId);
            const toCancel = messageQueue.get(key);
            if (messages_1.Message.isRequest(toCancel)) {
              const strategy = options == null ? void 0 : options.connectionStrategy;
              const response = strategy && strategy.cancelUndispatched ? strategy.cancelUndispatched(toCancel, cancelUndispatched) : cancelUndispatched(toCancel);
              if (response && (response.error !== void 0 || response.result !== void 0)) {
                messageQueue.delete(key);
                requestTokens.delete(cancelId);
                response.id = toCancel.id;
                traceSendingResponse(response, message.method, Date.now());
                messageWriter.write(response).catch(() => logger.error(`Sending response for canceled message failed.`));
                return;
              }
            }
            const cancellationToken = requestTokens.get(cancelId);
            if (cancellationToken !== void 0) {
              cancellationToken.cancel();
              traceReceivedNotification(message);
              return;
            } else {
              knownCanceledRequests.add(cancelId);
            }
          }
          addMessageToQueue(messageQueue, message);
        } finally {
          triggerMessageQueue();
        }
      };
      function handleRequest(requestMessage) {
        if (isDisposed()) {
          return;
        }
        function reply(resultOrError, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id
          };
          if (resultOrError instanceof messages_1.ResponseError) {
            message.error = resultOrError.toJson();
          } else {
            message.result = resultOrError === void 0 ? null : resultOrError;
          }
          traceSendingResponse(message, method, startTime2);
          messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        function replyError(error, method, startTime2) {
          const message = {
            jsonrpc: version,
            id: requestMessage.id,
            error: error.toJson()
          };
          traceSendingResponse(message, method, startTime2);
          messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        function replySuccess(result, method, startTime2) {
          if (result === void 0) {
            result = null;
          }
          const message = {
            jsonrpc: version,
            id: requestMessage.id,
            result
          };
          traceSendingResponse(message, method, startTime2);
          messageWriter.write(message).catch(() => logger.error(`Sending response failed.`));
        }
        traceReceivedRequest(requestMessage);
        const element = requestHandlers.get(requestMessage.method);
        let type;
        let requestHandler;
        if (element) {
          type = element.type;
          requestHandler = element.handler;
        }
        const startTime = Date.now();
        if (requestHandler || starRequestHandler) {
          const tokenKey = requestMessage.id ?? String(Date.now());
          const cancellationSource = cancellationStrategy.receiver.createCancellationTokenSource(tokenKey);
          if (requestMessage.id !== null && knownCanceledRequests.has(requestMessage.id)) {
            cancellationSource.cancel();
          }
          if (requestMessage.id !== null) {
            requestTokens.set(tokenKey, cancellationSource);
          }
          try {
            let handlerResult;
            if (requestHandler) {
              if (requestMessage.params === void 0) {
                if (type !== void 0 && type.numberOfParams !== 0) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines ${type.numberOfParams} params but received none.`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(cancellationSource.token);
              } else if (Array.isArray(requestMessage.params)) {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byName) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by name but received parameters by position`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(...requestMessage.params, cancellationSource.token);
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InvalidParams, `Request ${requestMessage.method} defines parameters by position but received parameters by name`), requestMessage.method, startTime);
                  return;
                }
                handlerResult = requestHandler(requestMessage.params, cancellationSource.token);
              }
            } else if (starRequestHandler) {
              handlerResult = starRequestHandler(requestMessage.method, requestMessage.params, cancellationSource.token);
            }
            const promise = handlerResult;
            if (!handlerResult) {
              requestTokens.delete(tokenKey);
              replySuccess(handlerResult, requestMessage.method, startTime);
            } else if (promise.then) {
              promise.then((resultOrError) => {
                requestTokens.delete(tokenKey);
                reply(resultOrError, requestMessage.method, startTime);
              }, (error) => {
                requestTokens.delete(tokenKey);
                if (error instanceof messages_1.ResponseError) {
                  replyError(error, requestMessage.method, startTime);
                } else if (error && Is2.string(error.message)) {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
                } else {
                  replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
                }
              });
            } else {
              requestTokens.delete(tokenKey);
              reply(handlerResult, requestMessage.method, startTime);
            }
          } catch (error) {
            requestTokens.delete(tokenKey);
            if (error instanceof messages_1.ResponseError) {
              reply(error, requestMessage.method, startTime);
            } else if (error && Is2.string(error.message)) {
              replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed with message: ${error.message}`), requestMessage.method, startTime);
            } else {
              replyError(new messages_1.ResponseError(messages_1.ErrorCodes.InternalError, `Request ${requestMessage.method} failed unexpectedly without providing any details.`), requestMessage.method, startTime);
            }
          }
        } else {
          replyError(new messages_1.ResponseError(messages_1.ErrorCodes.MethodNotFound, `Unhandled method ${requestMessage.method}`), requestMessage.method, startTime);
        }
      }
      function handleResponse(responseMessage) {
        if (isDisposed()) {
          return;
        }
        if (responseMessage.id === null) {
          if (responseMessage.error) {
            logger.error(`Received response message without id: Error is: 
${JSON.stringify(responseMessage.error, void 0, 4)}`);
          } else {
            logger.error(`Received response message without id. No further error information provided.`);
          }
        } else {
          const key = responseMessage.id;
          const responsePromise = responsePromises.get(key);
          traceReceivedResponse(responseMessage, responsePromise);
          if (responsePromise !== void 0) {
            responsePromises.delete(key);
            try {
              if (responseMessage.error) {
                const error = responseMessage.error;
                responsePromise.reject(new messages_1.ResponseError(error.code, error.message, error.data));
              } else if (responseMessage.result !== void 0) {
                responsePromise.resolve(responseMessage.result);
              } else {
                throw new Error("Should never happen.");
              }
            } catch (error) {
              if (error.message) {
                logger.error(`Response handler '${responsePromise.method}' failed with message: ${error.message}`);
              } else {
                logger.error(`Response handler '${responsePromise.method}' failed unexpectedly.`);
              }
            }
          }
        }
      }
      function handleNotification(message) {
        if (isDisposed()) {
          return;
        }
        let type = void 0;
        let notificationHandler;
        if (message.method === CancelNotification.type.method) {
          const cancelId = message.params.id;
          knownCanceledRequests.delete(cancelId);
          traceReceivedNotification(message);
          return;
        } else {
          const element = notificationHandlers.get(message.method);
          if (element) {
            notificationHandler = element.handler;
            type = element.type;
          }
        }
        if (notificationHandler || starNotificationHandler) {
          try {
            traceReceivedNotification(message);
            if (notificationHandler) {
              if (message.params === void 0) {
                if (type !== void 0) {
                  if (type.numberOfParams !== 0 && type.parameterStructures !== messages_1.ParameterStructures.byName) {
                    logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received none.`);
                  }
                }
                notificationHandler();
              } else if (Array.isArray(message.params)) {
                const params = message.params;
                if (message.method === ProgressNotification.type.method && params.length === 2 && ProgressToken.is(params[0])) {
                  notificationHandler({ token: params[0], value: params[1] });
                } else {
                  if (type !== void 0) {
                    if (type.parameterStructures === messages_1.ParameterStructures.byName) {
                      logger.error(`Notification ${message.method} defines parameters by name but received parameters by position`);
                    }
                    if (type.numberOfParams !== message.params.length) {
                      logger.error(`Notification ${message.method} defines ${type.numberOfParams} params but received ${params.length} arguments`);
                    }
                  }
                  notificationHandler(...params);
                }
              } else {
                if (type !== void 0 && type.parameterStructures === messages_1.ParameterStructures.byPosition) {
                  logger.error(`Notification ${message.method} defines parameters by position but received parameters by name`);
                }
                notificationHandler(message.params);
              }
            } else if (starNotificationHandler) {
              starNotificationHandler(message.method, message.params);
            }
          } catch (error) {
            if (error.message) {
              logger.error(`Notification handler '${message.method}' failed with message: ${error.message}`);
            } else {
              logger.error(`Notification handler '${message.method}' failed unexpectedly.`);
            }
          }
        } else {
          unhandledNotificationEmitter.fire(message);
        }
      }
      function handleInvalidMessage(message) {
        if (!message) {
          logger.error("Received empty message.");
          return;
        }
        logger.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(message, null, 4)}`);
        const responseMessage = message;
        if (Is2.string(responseMessage.id) || Is2.number(responseMessage.id)) {
          const key = responseMessage.id;
          const responseHandler = responsePromises.get(key);
          if (responseHandler) {
            responseHandler.reject(new Error("The received response has neither a result nor an error property."));
          }
        }
      }
      function stringifyTrace(params) {
        if (params === void 0 || params === null) {
          return void 0;
        }
        switch (trace) {
          case Trace2.Verbose:
            return JSON.stringify(params, null, 4);
          case Trace2.Compact:
            return JSON.stringify(params);
          default:
            return void 0;
        }
      }
      function traceSendingRequest(message) {
        if (trace === Trace2.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace2.Verbose || trace === Trace2.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}

`;
          }
          tracer.log(`Sending request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("send-request", message);
        }
      }
      function traceSendingNotification(message) {
        if (trace === Trace2.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace2.Verbose || trace === Trace2.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}

`;
            } else {
              data = "No parameters provided.\n\n";
            }
          }
          tracer.log(`Sending notification '${message.method}'.`, data);
        } else {
          logLSPMessage("send-notification", message);
        }
      }
      function traceSendingResponse(message, method, startTime) {
        if (trace === Trace2.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace2.Verbose || trace === Trace2.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}

`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}

`;
              } else if (message.error === void 0) {
                data = "No result returned.\n\n";
              }
            }
          }
          tracer.log(`Sending response '${method} - (${message.id})'. Processing request took ${Date.now() - startTime}ms`, data);
        } else {
          logLSPMessage("send-response", message);
        }
      }
      function traceReceivedRequest(message) {
        if (trace === Trace2.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if ((trace === Trace2.Verbose || trace === Trace2.Compact) && message.params) {
            data = `Params: ${stringifyTrace(message.params)}

`;
          }
          tracer.log(`Received request '${message.method} - (${message.id})'.`, data);
        } else {
          logLSPMessage("receive-request", message);
        }
      }
      function traceReceivedNotification(message) {
        if (trace === Trace2.Off || !tracer || message.method === LogTraceNotification.type.method) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace2.Verbose || trace === Trace2.Compact) {
            if (message.params) {
              data = `Params: ${stringifyTrace(message.params)}

`;
            } else {
              data = "No parameters provided.\n\n";
            }
          }
          tracer.log(`Received notification '${message.method}'.`, data);
        } else {
          logLSPMessage("receive-notification", message);
        }
      }
      function traceReceivedResponse(message, responsePromise) {
        if (trace === Trace2.Off || !tracer) {
          return;
        }
        if (traceFormat === TraceFormat.Text) {
          let data = void 0;
          if (trace === Trace2.Verbose || trace === Trace2.Compact) {
            if (message.error && message.error.data) {
              data = `Error data: ${stringifyTrace(message.error.data)}

`;
            } else {
              if (message.result) {
                data = `Result: ${stringifyTrace(message.result)}

`;
              } else if (message.error === void 0) {
                data = "No result returned.\n\n";
              }
            }
          }
          if (responsePromise) {
            const error = message.error ? ` Request failed: ${message.error.message} (${message.error.code}).` : "";
            tracer.log(`Received response '${responsePromise.method} - (${message.id})' in ${Date.now() - responsePromise.timerStart}ms.${error}`, data);
          } else {
            tracer.log(`Received response ${message.id} without active response promise.`, data);
          }
        } else {
          logLSPMessage("receive-response", message);
        }
      }
      function logLSPMessage(type, message) {
        if (!tracer || trace === Trace2.Off) {
          return;
        }
        const lspMessage = {
          isLSPMessage: true,
          type,
          message,
          timestamp: Date.now()
        };
        tracer.log(lspMessage);
      }
      function throwIfClosedOrDisposed() {
        if (isClosed()) {
          throw new ConnectionError(ConnectionErrors.Closed, "Connection is closed.");
        }
        if (isDisposed()) {
          throw new ConnectionError(ConnectionErrors.Disposed, "Connection is disposed.");
        }
      }
      function throwIfListening() {
        if (isListening()) {
          throw new ConnectionError(ConnectionErrors.AlreadyListening, "Connection is already listening");
        }
      }
      function throwIfNotListening() {
        if (!isListening()) {
          throw new Error("Call listen() first.");
        }
      }
      function undefinedToNull(param) {
        if (param === void 0) {
          return null;
        } else {
          return param;
        }
      }
      function nullToUndefined(param) {
        if (param === null) {
          return void 0;
        } else {
          return param;
        }
      }
      function isNamedParam(param) {
        return param !== void 0 && param !== null && !Array.isArray(param) && typeof param === "object";
      }
      function computeSingleParam(parameterStructures, param) {
        switch (parameterStructures) {
          case messages_1.ParameterStructures.auto:
            if (isNamedParam(param)) {
              return nullToUndefined(param);
            } else {
              return [undefinedToNull(param)];
            }
          case messages_1.ParameterStructures.byName:
            if (!isNamedParam(param)) {
              throw new Error(`Received parameters by name but param is not an object literal.`);
            }
            return nullToUndefined(param);
          case messages_1.ParameterStructures.byPosition:
            return [undefinedToNull(param)];
          default:
            throw new Error(`Unknown parameter structure ${parameterStructures.toString()}`);
        }
      }
      function computeMessageParams(type, params) {
        let result;
        const numberOfParams = type.numberOfParams;
        switch (numberOfParams) {
          case 0:
            result = void 0;
            break;
          case 1:
            result = computeSingleParam(type.parameterStructures, params[0]);
            break;
          default:
            result = [];
            for (let i = 0; i < params.length && i < numberOfParams; i++) {
              result.push(undefinedToNull(params[i]));
            }
            if (params.length < numberOfParams) {
              for (let i = params.length; i < numberOfParams; i++) {
                result.push(null);
              }
            }
            break;
        }
        return result;
      }
      const connection = {
        sendNotification: (type, ...args) => {
          throwIfClosedOrDisposed();
          let method;
          let messageParams;
          if (Is2.string(type)) {
            method = type;
            const first = args[0];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            let paramEnd = args.length;
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' notification parameter structure.`);
                }
                messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args;
            method = type.method;
            messageParams = computeMessageParams(type, params);
          }
          const notificationMessage = {
            jsonrpc: version,
            method,
            params: messageParams
          };
          traceSendingNotification(notificationMessage);
          return messageWriter.write(notificationMessage).catch(() => logger.error(`Sending notification failed.`));
        },
        onNotification: (type, handler) => {
          throwIfClosedOrDisposed();
          let method;
          if (Is2.func(type)) {
            starNotificationHandler = type;
          } else if (handler) {
            if (Is2.string(type)) {
              method = type;
              notificationHandlers.set(type, { type: void 0, handler });
            } else {
              method = type.method;
              notificationHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method !== void 0) {
                notificationHandlers.delete(method);
              } else {
                starNotificationHandler = void 0;
              }
            }
          };
        },
        onProgress: (_type, token, handler) => {
          if (progressHandlers.has(token)) {
            throw new Error(`Progress handler for token ${token} already registered`);
          }
          progressHandlers.set(token, handler);
          return {
            dispose: () => {
              progressHandlers.delete(token);
            }
          };
        },
        sendProgress: (_type, token, value) => {
          return connection.sendNotification(ProgressNotification.type, { token, value });
        },
        onUnhandledProgress: unhandledProgressEmitter.event,
        sendRequest: (type, ...args) => {
          throwIfClosedOrDisposed();
          throwIfNotListening();
          let method;
          let messageParams;
          let token = void 0;
          if (Is2.string(type)) {
            method = type;
            const first = args[0];
            const last = args[args.length - 1];
            let paramStart = 0;
            let parameterStructures = messages_1.ParameterStructures.auto;
            if (messages_1.ParameterStructures.is(first)) {
              paramStart = 1;
              parameterStructures = first;
            }
            let paramEnd = args.length;
            if (cancellation_1.CancellationToken.is(last)) {
              paramEnd = paramEnd - 1;
              token = last;
            }
            const numberOfParams = paramEnd - paramStart;
            switch (numberOfParams) {
              case 0:
                messageParams = void 0;
                break;
              case 1:
                messageParams = computeSingleParam(parameterStructures, args[paramStart]);
                break;
              default:
                if (parameterStructures === messages_1.ParameterStructures.byName) {
                  throw new Error(`Received ${numberOfParams} parameters for 'by Name' request parameter structure.`);
                }
                messageParams = args.slice(paramStart, paramEnd).map((value) => undefinedToNull(value));
                break;
            }
          } else {
            const params = args;
            method = type.method;
            messageParams = computeMessageParams(type, params);
            const numberOfParams = type.numberOfParams;
            token = cancellation_1.CancellationToken.is(params[numberOfParams]) ? params[numberOfParams] : void 0;
          }
          const id = sequenceNumber++;
          let disposable;
          if (token) {
            disposable = token.onCancellationRequested(() => {
              const p = cancellationStrategy.sender.sendCancellation(connection, id);
              if (p === void 0) {
                logger.log(`Received no promise from cancellation strategy when cancelling id ${id}`);
                return Promise.resolve();
              } else {
                return p.catch(() => {
                  logger.log(`Sending cancellation messages for id ${id} failed`);
                });
              }
            });
          }
          const result = new Promise((resolve, reject) => {
            const requestMessage = {
              jsonrpc: version,
              id,
              method,
              params: messageParams
            };
            const resolveWithCleanup = (r) => {
              resolve(r);
              cancellationStrategy.sender.cleanup(id);
              disposable == null ? void 0 : disposable.dispose();
            };
            const rejectWithCleanup = (r) => {
              reject(r);
              cancellationStrategy.sender.cleanup(id);
              disposable == null ? void 0 : disposable.dispose();
            };
            let responsePromise = { method, timerStart: Date.now(), resolve: resolveWithCleanup, reject: rejectWithCleanup };
            traceSendingRequest(requestMessage);
            try {
              messageWriter.write(requestMessage).catch(() => logger.error(`Sending request failed.`));
            } catch (e) {
              responsePromise.reject(new messages_1.ResponseError(messages_1.ErrorCodes.MessageWriteError, e.message ? e.message : "Unknown reason"));
              responsePromise = null;
            }
            if (responsePromise) {
              responsePromises.set(id, responsePromise);
            }
          });
          return result;
        },
        onRequest: (type, handler) => {
          throwIfClosedOrDisposed();
          let method = null;
          if (StarRequestHandler.is(type)) {
            method = void 0;
            starRequestHandler = type;
          } else if (Is2.string(type)) {
            method = null;
            if (handler !== void 0) {
              method = type;
              requestHandlers.set(type, { handler, type: void 0 });
            }
          } else {
            if (handler !== void 0) {
              method = type.method;
              requestHandlers.set(type.method, { type, handler });
            }
          }
          return {
            dispose: () => {
              if (method === null) {
                return;
              }
              if (method !== void 0) {
                requestHandlers.delete(method);
              } else {
                starRequestHandler = void 0;
              }
            }
          };
        },
        hasPendingResponse: () => {
          return responsePromises.size > 0;
        },
        trace: async (_value, _tracer, sendNotificationOrTraceOptions) => {
          let _sendNotification = false;
          let _traceFormat = TraceFormat.Text;
          if (sendNotificationOrTraceOptions !== void 0) {
            if (Is2.boolean(sendNotificationOrTraceOptions)) {
              _sendNotification = sendNotificationOrTraceOptions;
            } else {
              _sendNotification = sendNotificationOrTraceOptions.sendNotification || false;
              _traceFormat = sendNotificationOrTraceOptions.traceFormat || TraceFormat.Text;
            }
          }
          trace = _value;
          traceFormat = _traceFormat;
          if (trace === Trace2.Off) {
            tracer = void 0;
          } else {
            tracer = _tracer;
          }
          if (_sendNotification && !isClosed() && !isDisposed()) {
            await connection.sendNotification(SetTraceNotification.type, { value: Trace2.toString(_value) });
          }
        },
        onError: errorEmitter.event,
        onClose: closeEmitter.event,
        onUnhandledNotification: unhandledNotificationEmitter.event,
        onDispose: disposeEmitter.event,
        end: () => {
          messageWriter.end();
        },
        dispose: () => {
          if (isDisposed()) {
            return;
          }
          state = ConnectionState.Disposed;
          disposeEmitter.fire(void 0);
          const error = new messages_1.ResponseError(messages_1.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
          for (const promise of responsePromises.values()) {
            promise.reject(error);
          }
          responsePromises = /* @__PURE__ */ new Map();
          requestTokens = /* @__PURE__ */ new Map();
          knownCanceledRequests = /* @__PURE__ */ new Set();
          messageQueue = new linkedMap_1.LinkedMap();
          if (Is2.func(messageWriter.dispose)) {
            messageWriter.dispose();
          }
          if (Is2.func(messageReader.dispose)) {
            messageReader.dispose();
          }
        },
        listen: () => {
          throwIfClosedOrDisposed();
          throwIfListening();
          state = ConnectionState.Listening;
          messageReader.listen(callback);
        },
        inspect: () => {
          (0, ral_1.default)().console.log("inspect");
        }
      };
      connection.onNotification(LogTraceNotification.type, (params) => {
        if (trace === Trace2.Off || !tracer) {
          return;
        }
        const verbose = trace === Trace2.Verbose || trace === Trace2.Compact;
        tracer.log(params.message, verbose ? params.verbose : void 0);
      });
      connection.onNotification(ProgressNotification.type, (params) => {
        const handler = progressHandlers.get(params.token);
        if (handler) {
          handler(params.value);
        } else {
          unhandledProgressEmitter.fire(params);
        }
      });
      return connection;
    }
    exports.createMessageConnection = createMessageConnection;
  }
});

// node_modules/vscode-jsonrpc/lib/common/api.js
var require_api = __commonJS({
  "node_modules/vscode-jsonrpc/lib/common/api.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TraceFormat = exports.TraceValues = exports.Trace = exports.ProgressType = exports.ProgressToken = exports.createMessageConnection = exports.NullLogger = exports.ConnectionOptions = exports.ConnectionStrategy = exports.WriteableStreamMessageWriter = exports.AbstractMessageWriter = exports.MessageWriter = exports.ReadableStreamMessageReader = exports.AbstractMessageReader = exports.MessageReader = exports.CancellationToken = exports.CancellationTokenSource = exports.Emitter = exports.Event = exports.Disposable = exports.LRUCache = exports.Touch = exports.LinkedMap = exports.ParameterStructures = exports.NotificationType9 = exports.NotificationType8 = exports.NotificationType7 = exports.NotificationType6 = exports.NotificationType5 = exports.NotificationType4 = exports.NotificationType3 = exports.NotificationType2 = exports.NotificationType1 = exports.NotificationType0 = exports.NotificationType = exports.ErrorCodes = exports.ResponseError = exports.RequestType9 = exports.RequestType8 = exports.RequestType7 = exports.RequestType6 = exports.RequestType5 = exports.RequestType4 = exports.RequestType3 = exports.RequestType2 = exports.RequestType1 = exports.RequestType0 = exports.RequestType = exports.Message = exports.RAL = void 0;
    exports.CancellationStrategy = exports.CancellationSenderStrategy = exports.CancellationReceiverStrategy = exports.ConnectionError = exports.ConnectionErrors = exports.LogTraceNotification = exports.SetTraceNotification = void 0;
    var messages_1 = require_messages();
    Object.defineProperty(exports, "Message", { enumerable: true, get: function() {
      return messages_1.Message;
    } });
    Object.defineProperty(exports, "RequestType", { enumerable: true, get: function() {
      return messages_1.RequestType;
    } });
    Object.defineProperty(exports, "RequestType0", { enumerable: true, get: function() {
      return messages_1.RequestType0;
    } });
    Object.defineProperty(exports, "RequestType1", { enumerable: true, get: function() {
      return messages_1.RequestType1;
    } });
    Object.defineProperty(exports, "RequestType2", { enumerable: true, get: function() {
      return messages_1.RequestType2;
    } });
    Object.defineProperty(exports, "RequestType3", { enumerable: true, get: function() {
      return messages_1.RequestType3;
    } });
    Object.defineProperty(exports, "RequestType4", { enumerable: true, get: function() {
      return messages_1.RequestType4;
    } });
    Object.defineProperty(exports, "RequestType5", { enumerable: true, get: function() {
      return messages_1.RequestType5;
    } });
    Object.defineProperty(exports, "RequestType6", { enumerable: true, get: function() {
      return messages_1.RequestType6;
    } });
    Object.defineProperty(exports, "RequestType7", { enumerable: true, get: function() {
      return messages_1.RequestType7;
    } });
    Object.defineProperty(exports, "RequestType8", { enumerable: true, get: function() {
      return messages_1.RequestType8;
    } });
    Object.defineProperty(exports, "RequestType9", { enumerable: true, get: function() {
      return messages_1.RequestType9;
    } });
    Object.defineProperty(exports, "ResponseError", { enumerable: true, get: function() {
      return messages_1.ResponseError;
    } });
    Object.defineProperty(exports, "ErrorCodes", { enumerable: true, get: function() {
      return messages_1.ErrorCodes;
    } });
    Object.defineProperty(exports, "NotificationType", { enumerable: true, get: function() {
      return messages_1.NotificationType;
    } });
    Object.defineProperty(exports, "NotificationType0", { enumerable: true, get: function() {
      return messages_1.NotificationType0;
    } });
    Object.defineProperty(exports, "NotificationType1", { enumerable: true, get: function() {
      return messages_1.NotificationType1;
    } });
    Object.defineProperty(exports, "NotificationType2", { enumerable: true, get: function() {
      return messages_1.NotificationType2;
    } });
    Object.defineProperty(exports, "NotificationType3", { enumerable: true, get: function() {
      return messages_1.NotificationType3;
    } });
    Object.defineProperty(exports, "NotificationType4", { enumerable: true, get: function() {
      return messages_1.NotificationType4;
    } });
    Object.defineProperty(exports, "NotificationType5", { enumerable: true, get: function() {
      return messages_1.NotificationType5;
    } });
    Object.defineProperty(exports, "NotificationType6", { enumerable: true, get: function() {
      return messages_1.NotificationType6;
    } });
    Object.defineProperty(exports, "NotificationType7", { enumerable: true, get: function() {
      return messages_1.NotificationType7;
    } });
    Object.defineProperty(exports, "NotificationType8", { enumerable: true, get: function() {
      return messages_1.NotificationType8;
    } });
    Object.defineProperty(exports, "NotificationType9", { enumerable: true, get: function() {
      return messages_1.NotificationType9;
    } });
    Object.defineProperty(exports, "ParameterStructures", { enumerable: true, get: function() {
      return messages_1.ParameterStructures;
    } });
    var linkedMap_1 = require_linkedMap();
    Object.defineProperty(exports, "LinkedMap", { enumerable: true, get: function() {
      return linkedMap_1.LinkedMap;
    } });
    Object.defineProperty(exports, "LRUCache", { enumerable: true, get: function() {
      return linkedMap_1.LRUCache;
    } });
    Object.defineProperty(exports, "Touch", { enumerable: true, get: function() {
      return linkedMap_1.Touch;
    } });
    var disposable_1 = require_disposable();
    Object.defineProperty(exports, "Disposable", { enumerable: true, get: function() {
      return disposable_1.Disposable;
    } });
    var events_1 = require_events();
    Object.defineProperty(exports, "Event", { enumerable: true, get: function() {
      return events_1.Event;
    } });
    Object.defineProperty(exports, "Emitter", { enumerable: true, get: function() {
      return events_1.Emitter;
    } });
    var cancellation_1 = require_cancellation();
    Object.defineProperty(exports, "CancellationTokenSource", { enumerable: true, get: function() {
      return cancellation_1.CancellationTokenSource;
    } });
    Object.defineProperty(exports, "CancellationToken", { enumerable: true, get: function() {
      return cancellation_1.CancellationToken;
    } });
    var messageReader_1 = require_messageReader();
    Object.defineProperty(exports, "MessageReader", { enumerable: true, get: function() {
      return messageReader_1.MessageReader;
    } });
    Object.defineProperty(exports, "AbstractMessageReader", { enumerable: true, get: function() {
      return messageReader_1.AbstractMessageReader;
    } });
    Object.defineProperty(exports, "ReadableStreamMessageReader", { enumerable: true, get: function() {
      return messageReader_1.ReadableStreamMessageReader;
    } });
    var messageWriter_1 = require_messageWriter();
    Object.defineProperty(exports, "MessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.MessageWriter;
    } });
    Object.defineProperty(exports, "AbstractMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.AbstractMessageWriter;
    } });
    Object.defineProperty(exports, "WriteableStreamMessageWriter", { enumerable: true, get: function() {
      return messageWriter_1.WriteableStreamMessageWriter;
    } });
    var connection_1 = require_connection();
    Object.defineProperty(exports, "ConnectionStrategy", { enumerable: true, get: function() {
      return connection_1.ConnectionStrategy;
    } });
    Object.defineProperty(exports, "ConnectionOptions", { enumerable: true, get: function() {
      return connection_1.ConnectionOptions;
    } });
    Object.defineProperty(exports, "NullLogger", { enumerable: true, get: function() {
      return connection_1.NullLogger;
    } });
    Object.defineProperty(exports, "createMessageConnection", { enumerable: true, get: function() {
      return connection_1.createMessageConnection;
    } });
    Object.defineProperty(exports, "ProgressToken", { enumerable: true, get: function() {
      return connection_1.ProgressToken;
    } });
    Object.defineProperty(exports, "ProgressType", { enumerable: true, get: function() {
      return connection_1.ProgressType;
    } });
    Object.defineProperty(exports, "Trace", { enumerable: true, get: function() {
      return connection_1.Trace;
    } });
    Object.defineProperty(exports, "TraceValues", { enumerable: true, get: function() {
      return connection_1.TraceValues;
    } });
    Object.defineProperty(exports, "TraceFormat", { enumerable: true, get: function() {
      return connection_1.TraceFormat;
    } });
    Object.defineProperty(exports, "SetTraceNotification", { enumerable: true, get: function() {
      return connection_1.SetTraceNotification;
    } });
    Object.defineProperty(exports, "LogTraceNotification", { enumerable: true, get: function() {
      return connection_1.LogTraceNotification;
    } });
    Object.defineProperty(exports, "ConnectionErrors", { enumerable: true, get: function() {
      return connection_1.ConnectionErrors;
    } });
    Object.defineProperty(exports, "ConnectionError", { enumerable: true, get: function() {
      return connection_1.ConnectionError;
    } });
    Object.defineProperty(exports, "CancellationReceiverStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationReceiverStrategy;
    } });
    Object.defineProperty(exports, "CancellationSenderStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationSenderStrategy;
    } });
    Object.defineProperty(exports, "CancellationStrategy", { enumerable: true, get: function() {
      return connection_1.CancellationStrategy;
    } });
    var ral_1 = require_ral();
    exports.RAL = ral_1.default;
  }
});

// node_modules/vscode-jsonrpc/lib/node/main.js
var require_main = __commonJS({
  "node_modules/vscode-jsonrpc/lib/node/main.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createMessageConnection = exports.createServerSocketTransport = exports.createClientSocketTransport = exports.createServerPipeTransport = exports.createClientPipeTransport = exports.generateRandomPipeName = exports.StreamMessageWriter = exports.StreamMessageReader = exports.SocketMessageWriter = exports.SocketMessageReader = exports.IPCMessageWriter = exports.IPCMessageReader = void 0;
    var ril_1 = require_ril();
    ril_1.default.install();
    var api_1 = require_api();
    var path19 = require("path");
    var os4 = require("os");
    var crypto_1 = require("crypto");
    var net_1 = require("net");
    __exportStar(require_api(), exports);
    var IPCMessageReader = class extends api_1.AbstractMessageReader {
      constructor(process2) {
        super();
        this.process = process2;
        let eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose());
      }
      listen(callback) {
        this.process.on("message", callback);
        return api_1.Disposable.create(() => this.process.off("message", callback));
      }
    };
    exports.IPCMessageReader = IPCMessageReader;
    var IPCMessageWriter = class extends api_1.AbstractMessageWriter {
      constructor(process2) {
        super();
        this.process = process2;
        this.errorCount = 0;
        let eventEmitter = this.process;
        eventEmitter.on("error", (error) => this.fireError(error));
        eventEmitter.on("close", () => this.fireClose);
      }
      write(msg) {
        try {
          if (typeof this.process.send === "function") {
            this.process.send(msg, void 0, void 0, (error) => {
              if (error) {
                this.errorCount++;
                this.handleError(error, msg);
              } else {
                this.errorCount = 0;
              }
            });
          }
          return Promise.resolve();
        } catch (error) {
          this.handleError(error, msg);
          return Promise.reject(error);
        }
      }
      handleError(error, msg) {
        this.errorCount++;
        this.fireError(error, msg, this.errorCount);
      }
      end() {
      }
    };
    exports.IPCMessageWriter = IPCMessageWriter;
    var SocketMessageReader = class extends api_1.ReadableStreamMessageReader {
      constructor(socket, encoding = "utf-8") {
        super((0, ril_1.default)().stream.asReadableStream(socket), encoding);
      }
    };
    exports.SocketMessageReader = SocketMessageReader;
    var SocketMessageWriter = class extends api_1.WriteableStreamMessageWriter {
      constructor(socket, options) {
        super((0, ril_1.default)().stream.asWritableStream(socket), options);
        this.socket = socket;
      }
      dispose() {
        super.dispose();
        this.socket.destroy();
      }
    };
    exports.SocketMessageWriter = SocketMessageWriter;
    var StreamMessageReader = class extends api_1.ReadableStreamMessageReader {
      constructor(readble, encoding) {
        super((0, ril_1.default)().stream.asReadableStream(readble), encoding);
      }
    };
    exports.StreamMessageReader = StreamMessageReader;
    var StreamMessageWriter = class extends api_1.WriteableStreamMessageWriter {
      constructor(writable, options) {
        super((0, ril_1.default)().stream.asWritableStream(writable), options);
      }
    };
    exports.StreamMessageWriter = StreamMessageWriter;
    var XDG_RUNTIME_DIR = process.env["XDG_RUNTIME_DIR"];
    var safeIpcPathLengths = /* @__PURE__ */ new Map([
      ["linux", 107],
      ["darwin", 103]
    ]);
    function generateRandomPipeName() {
      const randomSuffix = (0, crypto_1.randomBytes)(21).toString("hex");
      if (process.platform === "win32") {
        return `\\\\.\\pipe\\vscode-jsonrpc-${randomSuffix}-sock`;
      }
      let result;
      if (XDG_RUNTIME_DIR) {
        result = path19.join(XDG_RUNTIME_DIR, `vscode-ipc-${randomSuffix}.sock`);
      } else {
        result = path19.join(os4.tmpdir(), `vscode-${randomSuffix}.sock`);
      }
      const limit = safeIpcPathLengths.get(process.platform);
      if (limit !== void 0 && result.length >= limit) {
        (0, ril_1.default)().console.warn(`WARNING: IPC handle "${result}" is longer than ${limit} characters.`);
      }
      return result;
    }
    exports.generateRandomPipeName = generateRandomPipeName;
    function createClientPipeTransport(pipeName, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve, _reject) => {
        connectResolve = resolve;
      });
      return new Promise((resolve, reject) => {
        let server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(pipeName, () => {
          server.removeListener("error", reject);
          resolve({
            onConnected: () => {
              return connected;
            }
          });
        });
      });
    }
    exports.createClientPipeTransport = createClientPipeTransport;
    function createServerPipeTransport(pipeName, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(pipeName);
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    exports.createServerPipeTransport = createServerPipeTransport;
    function createClientSocketTransport(port, encoding = "utf-8") {
      let connectResolve;
      const connected = new Promise((resolve, _reject) => {
        connectResolve = resolve;
      });
      return new Promise((resolve, reject) => {
        const server = (0, net_1.createServer)((socket) => {
          server.close();
          connectResolve([
            new SocketMessageReader(socket, encoding),
            new SocketMessageWriter(socket, encoding)
          ]);
        });
        server.on("error", reject);
        server.listen(port, "127.0.0.1", () => {
          server.removeListener("error", reject);
          resolve({
            onConnected: () => {
              return connected;
            }
          });
        });
      });
    }
    exports.createClientSocketTransport = createClientSocketTransport;
    function createServerSocketTransport(port, encoding = "utf-8") {
      const socket = (0, net_1.createConnection)(port, "127.0.0.1");
      return [
        new SocketMessageReader(socket, encoding),
        new SocketMessageWriter(socket, encoding)
      ];
    }
    exports.createServerSocketTransport = createServerSocketTransport;
    function isReadableStream(value) {
      const candidate = value;
      return candidate.read !== void 0 && candidate.addListener !== void 0;
    }
    function isWritableStream(value) {
      const candidate = value;
      return candidate.write !== void 0 && candidate.addListener !== void 0;
    }
    function createMessageConnection(input, output, logger, options) {
      if (!logger) {
        logger = api_1.NullLogger;
      }
      const reader = isReadableStream(input) ? new StreamMessageReader(input) : input;
      const writer = isWritableStream(output) ? new StreamMessageWriter(output) : output;
      if (api_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
      }
      return (0, api_1.createMessageConnection)(reader, writer, logger, options);
    }
    exports.createMessageConnection = createMessageConnection;
  }
});

// node_modules/vscode-jsonrpc/node.js
var require_node = __commonJS({
  "node_modules/vscode-jsonrpc/node.js"(exports, module2) {
    "use strict";
    module2.exports = require_main();
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/messages.js
var require_messages2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/messages.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProtocolNotificationType = exports.ProtocolNotificationType0 = exports.ProtocolRequestType = exports.ProtocolRequestType0 = exports.RegistrationType = exports.MessageDirection = void 0;
    var vscode_jsonrpc_1 = require_main();
    var MessageDirection;
    (function(MessageDirection2) {
      MessageDirection2["clientToServer"] = "clientToServer";
      MessageDirection2["serverToClient"] = "serverToClient";
      MessageDirection2["both"] = "both";
    })(MessageDirection = exports.MessageDirection || (exports.MessageDirection = {}));
    var RegistrationType = class {
      constructor(method) {
        this.method = method;
      }
    };
    exports.RegistrationType = RegistrationType;
    var ProtocolRequestType0 = class extends vscode_jsonrpc_1.RequestType0 {
      constructor(method) {
        super(method);
      }
    };
    exports.ProtocolRequestType0 = ProtocolRequestType0;
    var ProtocolRequestType = class extends vscode_jsonrpc_1.RequestType {
      constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
      }
    };
    exports.ProtocolRequestType = ProtocolRequestType;
    var ProtocolNotificationType0 = class extends vscode_jsonrpc_1.NotificationType0 {
      constructor(method) {
        super(method);
      }
    };
    exports.ProtocolNotificationType0 = ProtocolNotificationType0;
    var ProtocolNotificationType = class extends vscode_jsonrpc_1.NotificationType {
      constructor(method) {
        super(method, vscode_jsonrpc_1.ParameterStructures.byName);
      }
    };
    exports.ProtocolNotificationType = ProtocolNotificationType;
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/utils/is.js
var require_is2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/utils/is.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.objectLiteral = exports.typedArray = exports.stringArray = exports.array = exports.func = exports.error = exports.number = exports.string = exports.boolean = void 0;
    function boolean2(value) {
      return value === true || value === false;
    }
    exports.boolean = boolean2;
    function string2(value) {
      return typeof value === "string" || value instanceof String;
    }
    exports.string = string2;
    function number(value) {
      return typeof value === "number" || value instanceof Number;
    }
    exports.number = number;
    function error(value) {
      return value instanceof Error;
    }
    exports.error = error;
    function func(value) {
      return typeof value === "function";
    }
    exports.func = func;
    function array(value) {
      return Array.isArray(value);
    }
    exports.array = array;
    function stringArray(value) {
      return array(value) && value.every((elem) => string2(elem));
    }
    exports.stringArray = stringArray;
    function typedArray(value, check) {
      return Array.isArray(value) && value.every(check);
    }
    exports.typedArray = typedArray;
    function objectLiteral(value) {
      return value !== null && typeof value === "object";
    }
    exports.objectLiteral = objectLiteral;
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js
var require_protocol_implementation = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ImplementationRequest = void 0;
    var messages_1 = require_messages2();
    var ImplementationRequest;
    (function(ImplementationRequest2) {
      ImplementationRequest2.method = "textDocument/implementation";
      ImplementationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ImplementationRequest2.type = new messages_1.ProtocolRequestType(ImplementationRequest2.method);
    })(ImplementationRequest = exports.ImplementationRequest || (exports.ImplementationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js
var require_protocol_typeDefinition = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeDefinitionRequest = void 0;
    var messages_1 = require_messages2();
    var TypeDefinitionRequest;
    (function(TypeDefinitionRequest2) {
      TypeDefinitionRequest2.method = "textDocument/typeDefinition";
      TypeDefinitionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeDefinitionRequest2.type = new messages_1.ProtocolRequestType(TypeDefinitionRequest2.method);
    })(TypeDefinitionRequest = exports.TypeDefinitionRequest || (exports.TypeDefinitionRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js
var require_protocol_workspaceFolder = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DidChangeWorkspaceFoldersNotification = exports.WorkspaceFoldersRequest = void 0;
    var messages_1 = require_messages2();
    var WorkspaceFoldersRequest;
    (function(WorkspaceFoldersRequest2) {
      WorkspaceFoldersRequest2.method = "workspace/workspaceFolders";
      WorkspaceFoldersRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      WorkspaceFoldersRequest2.type = new messages_1.ProtocolRequestType0(WorkspaceFoldersRequest2.method);
    })(WorkspaceFoldersRequest = exports.WorkspaceFoldersRequest || (exports.WorkspaceFoldersRequest = {}));
    var DidChangeWorkspaceFoldersNotification;
    (function(DidChangeWorkspaceFoldersNotification2) {
      DidChangeWorkspaceFoldersNotification2.method = "workspace/didChangeWorkspaceFolders";
      DidChangeWorkspaceFoldersNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeWorkspaceFoldersNotification2.type = new messages_1.ProtocolNotificationType(DidChangeWorkspaceFoldersNotification2.method);
    })(DidChangeWorkspaceFoldersNotification = exports.DidChangeWorkspaceFoldersNotification || (exports.DidChangeWorkspaceFoldersNotification = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js
var require_protocol_configuration = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConfigurationRequest = void 0;
    var messages_1 = require_messages2();
    var ConfigurationRequest;
    (function(ConfigurationRequest2) {
      ConfigurationRequest2.method = "workspace/configuration";
      ConfigurationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ConfigurationRequest2.type = new messages_1.ProtocolRequestType(ConfigurationRequest2.method);
    })(ConfigurationRequest = exports.ConfigurationRequest || (exports.ConfigurationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js
var require_protocol_colorProvider = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ColorPresentationRequest = exports.DocumentColorRequest = void 0;
    var messages_1 = require_messages2();
    var DocumentColorRequest;
    (function(DocumentColorRequest2) {
      DocumentColorRequest2.method = "textDocument/documentColor";
      DocumentColorRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentColorRequest2.type = new messages_1.ProtocolRequestType(DocumentColorRequest2.method);
    })(DocumentColorRequest = exports.DocumentColorRequest || (exports.DocumentColorRequest = {}));
    var ColorPresentationRequest;
    (function(ColorPresentationRequest2) {
      ColorPresentationRequest2.method = "textDocument/colorPresentation";
      ColorPresentationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ColorPresentationRequest2.type = new messages_1.ProtocolRequestType(ColorPresentationRequest2.method);
    })(ColorPresentationRequest = exports.ColorPresentationRequest || (exports.ColorPresentationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js
var require_protocol_foldingRange = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FoldingRangeRequest = void 0;
    var messages_1 = require_messages2();
    var FoldingRangeRequest;
    (function(FoldingRangeRequest2) {
      FoldingRangeRequest2.method = "textDocument/foldingRange";
      FoldingRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      FoldingRangeRequest2.type = new messages_1.ProtocolRequestType(FoldingRangeRequest2.method);
    })(FoldingRangeRequest = exports.FoldingRangeRequest || (exports.FoldingRangeRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js
var require_protocol_declaration = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DeclarationRequest = void 0;
    var messages_1 = require_messages2();
    var DeclarationRequest;
    (function(DeclarationRequest2) {
      DeclarationRequest2.method = "textDocument/declaration";
      DeclarationRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DeclarationRequest2.type = new messages_1.ProtocolRequestType(DeclarationRequest2.method);
    })(DeclarationRequest = exports.DeclarationRequest || (exports.DeclarationRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js
var require_protocol_selectionRange = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SelectionRangeRequest = void 0;
    var messages_1 = require_messages2();
    var SelectionRangeRequest;
    (function(SelectionRangeRequest2) {
      SelectionRangeRequest2.method = "textDocument/selectionRange";
      SelectionRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SelectionRangeRequest2.type = new messages_1.ProtocolRequestType(SelectionRangeRequest2.method);
    })(SelectionRangeRequest = exports.SelectionRangeRequest || (exports.SelectionRangeRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js
var require_protocol_progress = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WorkDoneProgressCancelNotification = exports.WorkDoneProgressCreateRequest = exports.WorkDoneProgress = void 0;
    var vscode_jsonrpc_1 = require_main();
    var messages_1 = require_messages2();
    var WorkDoneProgress;
    (function(WorkDoneProgress2) {
      WorkDoneProgress2.type = new vscode_jsonrpc_1.ProgressType();
      function is(value) {
        return value === WorkDoneProgress2.type;
      }
      WorkDoneProgress2.is = is;
    })(WorkDoneProgress = exports.WorkDoneProgress || (exports.WorkDoneProgress = {}));
    var WorkDoneProgressCreateRequest;
    (function(WorkDoneProgressCreateRequest2) {
      WorkDoneProgressCreateRequest2.method = "window/workDoneProgress/create";
      WorkDoneProgressCreateRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      WorkDoneProgressCreateRequest2.type = new messages_1.ProtocolRequestType(WorkDoneProgressCreateRequest2.method);
    })(WorkDoneProgressCreateRequest = exports.WorkDoneProgressCreateRequest || (exports.WorkDoneProgressCreateRequest = {}));
    var WorkDoneProgressCancelNotification;
    (function(WorkDoneProgressCancelNotification2) {
      WorkDoneProgressCancelNotification2.method = "window/workDoneProgress/cancel";
      WorkDoneProgressCancelNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkDoneProgressCancelNotification2.type = new messages_1.ProtocolNotificationType(WorkDoneProgressCancelNotification2.method);
    })(WorkDoneProgressCancelNotification = exports.WorkDoneProgressCancelNotification || (exports.WorkDoneProgressCancelNotification = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js
var require_protocol_callHierarchy = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CallHierarchyOutgoingCallsRequest = exports.CallHierarchyIncomingCallsRequest = exports.CallHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var CallHierarchyPrepareRequest;
    (function(CallHierarchyPrepareRequest2) {
      CallHierarchyPrepareRequest2.method = "textDocument/prepareCallHierarchy";
      CallHierarchyPrepareRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyPrepareRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyPrepareRequest2.method);
    })(CallHierarchyPrepareRequest = exports.CallHierarchyPrepareRequest || (exports.CallHierarchyPrepareRequest = {}));
    var CallHierarchyIncomingCallsRequest;
    (function(CallHierarchyIncomingCallsRequest2) {
      CallHierarchyIncomingCallsRequest2.method = "callHierarchy/incomingCalls";
      CallHierarchyIncomingCallsRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyIncomingCallsRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyIncomingCallsRequest2.method);
    })(CallHierarchyIncomingCallsRequest = exports.CallHierarchyIncomingCallsRequest || (exports.CallHierarchyIncomingCallsRequest = {}));
    var CallHierarchyOutgoingCallsRequest;
    (function(CallHierarchyOutgoingCallsRequest2) {
      CallHierarchyOutgoingCallsRequest2.method = "callHierarchy/outgoingCalls";
      CallHierarchyOutgoingCallsRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CallHierarchyOutgoingCallsRequest2.type = new messages_1.ProtocolRequestType(CallHierarchyOutgoingCallsRequest2.method);
    })(CallHierarchyOutgoingCallsRequest = exports.CallHierarchyOutgoingCallsRequest || (exports.CallHierarchyOutgoingCallsRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js
var require_protocol_semanticTokens = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SemanticTokensRefreshRequest = exports.SemanticTokensRangeRequest = exports.SemanticTokensDeltaRequest = exports.SemanticTokensRequest = exports.SemanticTokensRegistrationType = exports.TokenFormat = void 0;
    var messages_1 = require_messages2();
    var TokenFormat;
    (function(TokenFormat2) {
      TokenFormat2.Relative = "relative";
    })(TokenFormat = exports.TokenFormat || (exports.TokenFormat = {}));
    var SemanticTokensRegistrationType;
    (function(SemanticTokensRegistrationType2) {
      SemanticTokensRegistrationType2.method = "textDocument/semanticTokens";
      SemanticTokensRegistrationType2.type = new messages_1.RegistrationType(SemanticTokensRegistrationType2.method);
    })(SemanticTokensRegistrationType = exports.SemanticTokensRegistrationType || (exports.SemanticTokensRegistrationType = {}));
    var SemanticTokensRequest;
    (function(SemanticTokensRequest2) {
      SemanticTokensRequest2.method = "textDocument/semanticTokens/full";
      SemanticTokensRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRequest2.method);
      SemanticTokensRequest2.registrationMethod = SemanticTokensRegistrationType.method;
    })(SemanticTokensRequest = exports.SemanticTokensRequest || (exports.SemanticTokensRequest = {}));
    var SemanticTokensDeltaRequest;
    (function(SemanticTokensDeltaRequest2) {
      SemanticTokensDeltaRequest2.method = "textDocument/semanticTokens/full/delta";
      SemanticTokensDeltaRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensDeltaRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensDeltaRequest2.method);
      SemanticTokensDeltaRequest2.registrationMethod = SemanticTokensRegistrationType.method;
    })(SemanticTokensDeltaRequest = exports.SemanticTokensDeltaRequest || (exports.SemanticTokensDeltaRequest = {}));
    var SemanticTokensRangeRequest;
    (function(SemanticTokensRangeRequest2) {
      SemanticTokensRangeRequest2.method = "textDocument/semanticTokens/range";
      SemanticTokensRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRangeRequest2.type = new messages_1.ProtocolRequestType(SemanticTokensRangeRequest2.method);
      SemanticTokensRangeRequest2.registrationMethod = SemanticTokensRegistrationType.method;
    })(SemanticTokensRangeRequest = exports.SemanticTokensRangeRequest || (exports.SemanticTokensRangeRequest = {}));
    var SemanticTokensRefreshRequest;
    (function(SemanticTokensRefreshRequest2) {
      SemanticTokensRefreshRequest2.method = `workspace/semanticTokens/refresh`;
      SemanticTokensRefreshRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SemanticTokensRefreshRequest2.type = new messages_1.ProtocolRequestType0(SemanticTokensRefreshRequest2.method);
    })(SemanticTokensRefreshRequest = exports.SemanticTokensRefreshRequest || (exports.SemanticTokensRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js
var require_protocol_showDocument = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ShowDocumentRequest = void 0;
    var messages_1 = require_messages2();
    var ShowDocumentRequest;
    (function(ShowDocumentRequest2) {
      ShowDocumentRequest2.method = "window/showDocument";
      ShowDocumentRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowDocumentRequest2.type = new messages_1.ProtocolRequestType(ShowDocumentRequest2.method);
    })(ShowDocumentRequest = exports.ShowDocumentRequest || (exports.ShowDocumentRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js
var require_protocol_linkedEditingRange = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LinkedEditingRangeRequest = void 0;
    var messages_1 = require_messages2();
    var LinkedEditingRangeRequest;
    (function(LinkedEditingRangeRequest2) {
      LinkedEditingRangeRequest2.method = "textDocument/linkedEditingRange";
      LinkedEditingRangeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      LinkedEditingRangeRequest2.type = new messages_1.ProtocolRequestType(LinkedEditingRangeRequest2.method);
    })(LinkedEditingRangeRequest = exports.LinkedEditingRangeRequest || (exports.LinkedEditingRangeRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js
var require_protocol_fileOperations = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WillDeleteFilesRequest = exports.DidDeleteFilesNotification = exports.DidRenameFilesNotification = exports.WillRenameFilesRequest = exports.DidCreateFilesNotification = exports.WillCreateFilesRequest = exports.FileOperationPatternKind = void 0;
    var messages_1 = require_messages2();
    var FileOperationPatternKind;
    (function(FileOperationPatternKind2) {
      FileOperationPatternKind2.file = "file";
      FileOperationPatternKind2.folder = "folder";
    })(FileOperationPatternKind = exports.FileOperationPatternKind || (exports.FileOperationPatternKind = {}));
    var WillCreateFilesRequest;
    (function(WillCreateFilesRequest2) {
      WillCreateFilesRequest2.method = "workspace/willCreateFiles";
      WillCreateFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillCreateFilesRequest2.type = new messages_1.ProtocolRequestType(WillCreateFilesRequest2.method);
    })(WillCreateFilesRequest = exports.WillCreateFilesRequest || (exports.WillCreateFilesRequest = {}));
    var DidCreateFilesNotification;
    (function(DidCreateFilesNotification2) {
      DidCreateFilesNotification2.method = "workspace/didCreateFiles";
      DidCreateFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCreateFilesNotification2.type = new messages_1.ProtocolNotificationType(DidCreateFilesNotification2.method);
    })(DidCreateFilesNotification = exports.DidCreateFilesNotification || (exports.DidCreateFilesNotification = {}));
    var WillRenameFilesRequest;
    (function(WillRenameFilesRequest2) {
      WillRenameFilesRequest2.method = "workspace/willRenameFiles";
      WillRenameFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillRenameFilesRequest2.type = new messages_1.ProtocolRequestType(WillRenameFilesRequest2.method);
    })(WillRenameFilesRequest = exports.WillRenameFilesRequest || (exports.WillRenameFilesRequest = {}));
    var DidRenameFilesNotification;
    (function(DidRenameFilesNotification2) {
      DidRenameFilesNotification2.method = "workspace/didRenameFiles";
      DidRenameFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidRenameFilesNotification2.type = new messages_1.ProtocolNotificationType(DidRenameFilesNotification2.method);
    })(DidRenameFilesNotification = exports.DidRenameFilesNotification || (exports.DidRenameFilesNotification = {}));
    var DidDeleteFilesNotification;
    (function(DidDeleteFilesNotification2) {
      DidDeleteFilesNotification2.method = "workspace/didDeleteFiles";
      DidDeleteFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidDeleteFilesNotification2.type = new messages_1.ProtocolNotificationType(DidDeleteFilesNotification2.method);
    })(DidDeleteFilesNotification = exports.DidDeleteFilesNotification || (exports.DidDeleteFilesNotification = {}));
    var WillDeleteFilesRequest;
    (function(WillDeleteFilesRequest2) {
      WillDeleteFilesRequest2.method = "workspace/willDeleteFiles";
      WillDeleteFilesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillDeleteFilesRequest2.type = new messages_1.ProtocolRequestType(WillDeleteFilesRequest2.method);
    })(WillDeleteFilesRequest = exports.WillDeleteFilesRequest || (exports.WillDeleteFilesRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js
var require_protocol_moniker = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MonikerRequest = exports.MonikerKind = exports.UniquenessLevel = void 0;
    var messages_1 = require_messages2();
    var UniquenessLevel;
    (function(UniquenessLevel2) {
      UniquenessLevel2.document = "document";
      UniquenessLevel2.project = "project";
      UniquenessLevel2.group = "group";
      UniquenessLevel2.scheme = "scheme";
      UniquenessLevel2.global = "global";
    })(UniquenessLevel = exports.UniquenessLevel || (exports.UniquenessLevel = {}));
    var MonikerKind;
    (function(MonikerKind2) {
      MonikerKind2.$import = "import";
      MonikerKind2.$export = "export";
      MonikerKind2.local = "local";
    })(MonikerKind = exports.MonikerKind || (exports.MonikerKind = {}));
    var MonikerRequest;
    (function(MonikerRequest2) {
      MonikerRequest2.method = "textDocument/moniker";
      MonikerRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      MonikerRequest2.type = new messages_1.ProtocolRequestType(MonikerRequest2.method);
    })(MonikerRequest = exports.MonikerRequest || (exports.MonikerRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js
var require_protocol_typeHierarchy = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeHierarchySubtypesRequest = exports.TypeHierarchySupertypesRequest = exports.TypeHierarchyPrepareRequest = void 0;
    var messages_1 = require_messages2();
    var TypeHierarchyPrepareRequest;
    (function(TypeHierarchyPrepareRequest2) {
      TypeHierarchyPrepareRequest2.method = "textDocument/prepareTypeHierarchy";
      TypeHierarchyPrepareRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchyPrepareRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchyPrepareRequest2.method);
    })(TypeHierarchyPrepareRequest = exports.TypeHierarchyPrepareRequest || (exports.TypeHierarchyPrepareRequest = {}));
    var TypeHierarchySupertypesRequest;
    (function(TypeHierarchySupertypesRequest2) {
      TypeHierarchySupertypesRequest2.method = "typeHierarchy/supertypes";
      TypeHierarchySupertypesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchySupertypesRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchySupertypesRequest2.method);
    })(TypeHierarchySupertypesRequest = exports.TypeHierarchySupertypesRequest || (exports.TypeHierarchySupertypesRequest = {}));
    var TypeHierarchySubtypesRequest;
    (function(TypeHierarchySubtypesRequest2) {
      TypeHierarchySubtypesRequest2.method = "typeHierarchy/subtypes";
      TypeHierarchySubtypesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      TypeHierarchySubtypesRequest2.type = new messages_1.ProtocolRequestType(TypeHierarchySubtypesRequest2.method);
    })(TypeHierarchySubtypesRequest = exports.TypeHierarchySubtypesRequest || (exports.TypeHierarchySubtypesRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js
var require_protocol_inlineValue = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InlineValueRefreshRequest = exports.InlineValueRequest = void 0;
    var messages_1 = require_messages2();
    var InlineValueRequest;
    (function(InlineValueRequest2) {
      InlineValueRequest2.method = "textDocument/inlineValue";
      InlineValueRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlineValueRequest2.type = new messages_1.ProtocolRequestType(InlineValueRequest2.method);
    })(InlineValueRequest = exports.InlineValueRequest || (exports.InlineValueRequest = {}));
    var InlineValueRefreshRequest;
    (function(InlineValueRefreshRequest2) {
      InlineValueRefreshRequest2.method = `workspace/inlineValue/refresh`;
      InlineValueRefreshRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlineValueRefreshRequest2.type = new messages_1.ProtocolRequestType0(InlineValueRefreshRequest2.method);
    })(InlineValueRefreshRequest = exports.InlineValueRefreshRequest || (exports.InlineValueRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js
var require_protocol_inlayHint = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InlayHintRefreshRequest = exports.InlayHintResolveRequest = exports.InlayHintRequest = void 0;
    var messages_1 = require_messages2();
    var InlayHintRequest;
    (function(InlayHintRequest2) {
      InlayHintRequest2.method = "textDocument/inlayHint";
      InlayHintRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintRequest2.type = new messages_1.ProtocolRequestType(InlayHintRequest2.method);
    })(InlayHintRequest = exports.InlayHintRequest || (exports.InlayHintRequest = {}));
    var InlayHintResolveRequest;
    (function(InlayHintResolveRequest2) {
      InlayHintResolveRequest2.method = "inlayHint/resolve";
      InlayHintResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintResolveRequest2.type = new messages_1.ProtocolRequestType(InlayHintResolveRequest2.method);
    })(InlayHintResolveRequest = exports.InlayHintResolveRequest || (exports.InlayHintResolveRequest = {}));
    var InlayHintRefreshRequest;
    (function(InlayHintRefreshRequest2) {
      InlayHintRefreshRequest2.method = `workspace/inlayHint/refresh`;
      InlayHintRefreshRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InlayHintRefreshRequest2.type = new messages_1.ProtocolRequestType0(InlayHintRefreshRequest2.method);
    })(InlayHintRefreshRequest = exports.InlayHintRefreshRequest || (exports.InlayHintRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js
var require_protocol_diagnostic = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DiagnosticRefreshRequest = exports.WorkspaceDiagnosticRequest = exports.DocumentDiagnosticRequest = exports.DocumentDiagnosticReportKind = exports.DiagnosticServerCancellationData = void 0;
    var vscode_jsonrpc_1 = require_main();
    var Is2 = require_is2();
    var messages_1 = require_messages2();
    var DiagnosticServerCancellationData;
    (function(DiagnosticServerCancellationData2) {
      function is(value) {
        const candidate = value;
        return candidate && Is2.boolean(candidate.retriggerRequest);
      }
      DiagnosticServerCancellationData2.is = is;
    })(DiagnosticServerCancellationData = exports.DiagnosticServerCancellationData || (exports.DiagnosticServerCancellationData = {}));
    var DocumentDiagnosticReportKind;
    (function(DocumentDiagnosticReportKind2) {
      DocumentDiagnosticReportKind2.Full = "full";
      DocumentDiagnosticReportKind2.Unchanged = "unchanged";
    })(DocumentDiagnosticReportKind = exports.DocumentDiagnosticReportKind || (exports.DocumentDiagnosticReportKind = {}));
    var DocumentDiagnosticRequest;
    (function(DocumentDiagnosticRequest2) {
      DocumentDiagnosticRequest2.method = "textDocument/diagnostic";
      DocumentDiagnosticRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentDiagnosticRequest2.type = new messages_1.ProtocolRequestType(DocumentDiagnosticRequest2.method);
      DocumentDiagnosticRequest2.partialResult = new vscode_jsonrpc_1.ProgressType();
    })(DocumentDiagnosticRequest = exports.DocumentDiagnosticRequest || (exports.DocumentDiagnosticRequest = {}));
    var WorkspaceDiagnosticRequest;
    (function(WorkspaceDiagnosticRequest2) {
      WorkspaceDiagnosticRequest2.method = "workspace/diagnostic";
      WorkspaceDiagnosticRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceDiagnosticRequest2.type = new messages_1.ProtocolRequestType(WorkspaceDiagnosticRequest2.method);
      WorkspaceDiagnosticRequest2.partialResult = new vscode_jsonrpc_1.ProgressType();
    })(WorkspaceDiagnosticRequest = exports.WorkspaceDiagnosticRequest || (exports.WorkspaceDiagnosticRequest = {}));
    var DiagnosticRefreshRequest;
    (function(DiagnosticRefreshRequest2) {
      DiagnosticRefreshRequest2.method = `workspace/diagnostic/refresh`;
      DiagnosticRefreshRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DiagnosticRefreshRequest2.type = new messages_1.ProtocolRequestType0(DiagnosticRefreshRequest2.method);
    })(DiagnosticRefreshRequest = exports.DiagnosticRefreshRequest || (exports.DiagnosticRefreshRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js
var require_protocol_notebook = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DidCloseNotebookDocumentNotification = exports.DidSaveNotebookDocumentNotification = exports.DidChangeNotebookDocumentNotification = exports.NotebookCellArrayChange = exports.DidOpenNotebookDocumentNotification = exports.NotebookDocumentSyncRegistrationType = exports.NotebookDocument = exports.NotebookCell = exports.ExecutionSummary = exports.NotebookCellKind = void 0;
    var vscode_languageserver_types_1 = (init_main(), __toCommonJS(main_exports));
    var Is2 = require_is2();
    var messages_1 = require_messages2();
    var NotebookCellKind;
    (function(NotebookCellKind2) {
      NotebookCellKind2.Markup = 1;
      NotebookCellKind2.Code = 2;
      function is(value) {
        return value === 1 || value === 2;
      }
      NotebookCellKind2.is = is;
    })(NotebookCellKind = exports.NotebookCellKind || (exports.NotebookCellKind = {}));
    var ExecutionSummary;
    (function(ExecutionSummary2) {
      function create(executionOrder, success) {
        const result = { executionOrder };
        if (success === true || success === false) {
          result.success = success;
        }
        return result;
      }
      ExecutionSummary2.create = create;
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.executionOrder) && (candidate.success === void 0 || Is2.boolean(candidate.success));
      }
      ExecutionSummary2.is = is;
      function equals4(one, other) {
        if (one === other) {
          return true;
        }
        if (one === null || one === void 0 || other === null || other === void 0) {
          return false;
        }
        return one.executionOrder === other.executionOrder && one.success === other.success;
      }
      ExecutionSummary2.equals = equals4;
    })(ExecutionSummary = exports.ExecutionSummary || (exports.ExecutionSummary = {}));
    var NotebookCell;
    (function(NotebookCell2) {
      function create(kind, document) {
        return { kind, document };
      }
      NotebookCell2.create = create;
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && NotebookCellKind.is(candidate.kind) && vscode_languageserver_types_1.DocumentUri.is(candidate.document) && (candidate.metadata === void 0 || Is2.objectLiteral(candidate.metadata));
      }
      NotebookCell2.is = is;
      function diff(one, two) {
        const result = /* @__PURE__ */ new Set();
        if (one.document !== two.document) {
          result.add("document");
        }
        if (one.kind !== two.kind) {
          result.add("kind");
        }
        if (one.executionSummary !== two.executionSummary) {
          result.add("executionSummary");
        }
        if ((one.metadata !== void 0 || two.metadata !== void 0) && !equalsMetadata(one.metadata, two.metadata)) {
          result.add("metadata");
        }
        if ((one.executionSummary !== void 0 || two.executionSummary !== void 0) && !ExecutionSummary.equals(one.executionSummary, two.executionSummary)) {
          result.add("executionSummary");
        }
        return result;
      }
      NotebookCell2.diff = diff;
      function equalsMetadata(one, other) {
        if (one === other) {
          return true;
        }
        if (one === null || one === void 0 || other === null || other === void 0) {
          return false;
        }
        if (typeof one !== typeof other) {
          return false;
        }
        if (typeof one !== "object") {
          return false;
        }
        const oneArray = Array.isArray(one);
        const otherArray = Array.isArray(other);
        if (oneArray !== otherArray) {
          return false;
        }
        if (oneArray && otherArray) {
          if (one.length !== other.length) {
            return false;
          }
          for (let i = 0; i < one.length; i++) {
            if (!equalsMetadata(one[i], other[i])) {
              return false;
            }
          }
        }
        if (Is2.objectLiteral(one) && Is2.objectLiteral(other)) {
          const oneKeys = Object.keys(one);
          const otherKeys = Object.keys(other);
          if (oneKeys.length !== otherKeys.length) {
            return false;
          }
          oneKeys.sort();
          otherKeys.sort();
          if (!equalsMetadata(oneKeys, otherKeys)) {
            return false;
          }
          for (let i = 0; i < oneKeys.length; i++) {
            const prop = oneKeys[i];
            if (!equalsMetadata(one[prop], other[prop])) {
              return false;
            }
          }
        }
        return true;
      }
    })(NotebookCell = exports.NotebookCell || (exports.NotebookCell = {}));
    var NotebookDocument;
    (function(NotebookDocument2) {
      function create(uri, notebookType, version, cells) {
        return { uri, notebookType, version, cells };
      }
      NotebookDocument2.create = create;
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && Is2.string(candidate.uri) && vscode_languageserver_types_1.integer.is(candidate.version) && Is2.typedArray(candidate.cells, NotebookCell.is);
      }
      NotebookDocument2.is = is;
    })(NotebookDocument = exports.NotebookDocument || (exports.NotebookDocument = {}));
    var NotebookDocumentSyncRegistrationType;
    (function(NotebookDocumentSyncRegistrationType2) {
      NotebookDocumentSyncRegistrationType2.method = "notebookDocument/sync";
      NotebookDocumentSyncRegistrationType2.messageDirection = messages_1.MessageDirection.clientToServer;
      NotebookDocumentSyncRegistrationType2.type = new messages_1.RegistrationType(NotebookDocumentSyncRegistrationType2.method);
    })(NotebookDocumentSyncRegistrationType = exports.NotebookDocumentSyncRegistrationType || (exports.NotebookDocumentSyncRegistrationType = {}));
    var DidOpenNotebookDocumentNotification;
    (function(DidOpenNotebookDocumentNotification2) {
      DidOpenNotebookDocumentNotification2.method = "notebookDocument/didOpen";
      DidOpenNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidOpenNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidOpenNotebookDocumentNotification2.method);
      DidOpenNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidOpenNotebookDocumentNotification = exports.DidOpenNotebookDocumentNotification || (exports.DidOpenNotebookDocumentNotification = {}));
    var NotebookCellArrayChange;
    (function(NotebookCellArrayChange2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && vscode_languageserver_types_1.uinteger.is(candidate.start) && vscode_languageserver_types_1.uinteger.is(candidate.deleteCount) && (candidate.cells === void 0 || Is2.typedArray(candidate.cells, NotebookCell.is));
      }
      NotebookCellArrayChange2.is = is;
      function create(start, deleteCount, cells) {
        const result = { start, deleteCount };
        if (cells !== void 0) {
          result.cells = cells;
        }
        return result;
      }
      NotebookCellArrayChange2.create = create;
    })(NotebookCellArrayChange = exports.NotebookCellArrayChange || (exports.NotebookCellArrayChange = {}));
    var DidChangeNotebookDocumentNotification;
    (function(DidChangeNotebookDocumentNotification2) {
      DidChangeNotebookDocumentNotification2.method = "notebookDocument/didChange";
      DidChangeNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidChangeNotebookDocumentNotification2.method);
      DidChangeNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidChangeNotebookDocumentNotification = exports.DidChangeNotebookDocumentNotification || (exports.DidChangeNotebookDocumentNotification = {}));
    var DidSaveNotebookDocumentNotification;
    (function(DidSaveNotebookDocumentNotification2) {
      DidSaveNotebookDocumentNotification2.method = "notebookDocument/didSave";
      DidSaveNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidSaveNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidSaveNotebookDocumentNotification2.method);
      DidSaveNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidSaveNotebookDocumentNotification = exports.DidSaveNotebookDocumentNotification || (exports.DidSaveNotebookDocumentNotification = {}));
    var DidCloseNotebookDocumentNotification;
    (function(DidCloseNotebookDocumentNotification2) {
      DidCloseNotebookDocumentNotification2.method = "notebookDocument/didClose";
      DidCloseNotebookDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCloseNotebookDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidCloseNotebookDocumentNotification2.method);
      DidCloseNotebookDocumentNotification2.registrationMethod = NotebookDocumentSyncRegistrationType.method;
    })(DidCloseNotebookDocumentNotification = exports.DidCloseNotebookDocumentNotification || (exports.DidCloseNotebookDocumentNotification = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/protocol.js
var require_protocol = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/protocol.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WorkspaceSymbolRequest = exports.CodeActionResolveRequest = exports.CodeActionRequest = exports.DocumentSymbolRequest = exports.DocumentHighlightRequest = exports.ReferencesRequest = exports.DefinitionRequest = exports.SignatureHelpRequest = exports.SignatureHelpTriggerKind = exports.HoverRequest = exports.CompletionResolveRequest = exports.CompletionRequest = exports.CompletionTriggerKind = exports.PublishDiagnosticsNotification = exports.WatchKind = exports.RelativePattern = exports.FileChangeType = exports.DidChangeWatchedFilesNotification = exports.WillSaveTextDocumentWaitUntilRequest = exports.WillSaveTextDocumentNotification = exports.TextDocumentSaveReason = exports.DidSaveTextDocumentNotification = exports.DidCloseTextDocumentNotification = exports.DidChangeTextDocumentNotification = exports.TextDocumentContentChangeEvent = exports.DidOpenTextDocumentNotification = exports.TextDocumentSyncKind = exports.TelemetryEventNotification = exports.LogMessageNotification = exports.ShowMessageRequest = exports.ShowMessageNotification = exports.MessageType = exports.DidChangeConfigurationNotification = exports.ExitNotification = exports.ShutdownRequest = exports.InitializedNotification = exports.InitializeErrorCodes = exports.InitializeRequest = exports.WorkDoneProgressOptions = exports.TextDocumentRegistrationOptions = exports.StaticRegistrationOptions = exports.PositionEncodingKind = exports.FailureHandlingKind = exports.ResourceOperationKind = exports.UnregistrationRequest = exports.RegistrationRequest = exports.DocumentSelector = exports.NotebookCellTextDocumentFilter = exports.NotebookDocumentFilter = exports.TextDocumentFilter = void 0;
    exports.TypeHierarchySubtypesRequest = exports.TypeHierarchyPrepareRequest = exports.MonikerRequest = exports.MonikerKind = exports.UniquenessLevel = exports.WillDeleteFilesRequest = exports.DidDeleteFilesNotification = exports.WillRenameFilesRequest = exports.DidRenameFilesNotification = exports.WillCreateFilesRequest = exports.DidCreateFilesNotification = exports.FileOperationPatternKind = exports.LinkedEditingRangeRequest = exports.ShowDocumentRequest = exports.SemanticTokensRegistrationType = exports.SemanticTokensRefreshRequest = exports.SemanticTokensRangeRequest = exports.SemanticTokensDeltaRequest = exports.SemanticTokensRequest = exports.TokenFormat = exports.CallHierarchyPrepareRequest = exports.CallHierarchyOutgoingCallsRequest = exports.CallHierarchyIncomingCallsRequest = exports.WorkDoneProgressCancelNotification = exports.WorkDoneProgressCreateRequest = exports.WorkDoneProgress = exports.SelectionRangeRequest = exports.DeclarationRequest = exports.FoldingRangeRequest = exports.ColorPresentationRequest = exports.DocumentColorRequest = exports.ConfigurationRequest = exports.DidChangeWorkspaceFoldersNotification = exports.WorkspaceFoldersRequest = exports.TypeDefinitionRequest = exports.ImplementationRequest = exports.ApplyWorkspaceEditRequest = exports.ExecuteCommandRequest = exports.PrepareRenameRequest = exports.RenameRequest = exports.PrepareSupportDefaultBehavior = exports.DocumentOnTypeFormattingRequest = exports.DocumentRangeFormattingRequest = exports.DocumentFormattingRequest = exports.DocumentLinkResolveRequest = exports.DocumentLinkRequest = exports.CodeLensRefreshRequest = exports.CodeLensResolveRequest = exports.CodeLensRequest = exports.WorkspaceSymbolResolveRequest = void 0;
    exports.DidCloseNotebookDocumentNotification = exports.DidSaveNotebookDocumentNotification = exports.DidChangeNotebookDocumentNotification = exports.NotebookCellArrayChange = exports.DidOpenNotebookDocumentNotification = exports.NotebookDocumentSyncRegistrationType = exports.NotebookDocument = exports.NotebookCell = exports.ExecutionSummary = exports.NotebookCellKind = exports.DiagnosticRefreshRequest = exports.WorkspaceDiagnosticRequest = exports.DocumentDiagnosticRequest = exports.DocumentDiagnosticReportKind = exports.DiagnosticServerCancellationData = exports.InlayHintRefreshRequest = exports.InlayHintResolveRequest = exports.InlayHintRequest = exports.InlineValueRefreshRequest = exports.InlineValueRequest = exports.TypeHierarchySupertypesRequest = void 0;
    var messages_1 = require_messages2();
    var vscode_languageserver_types_1 = (init_main(), __toCommonJS(main_exports));
    var Is2 = require_is2();
    var protocol_implementation_1 = require_protocol_implementation();
    Object.defineProperty(exports, "ImplementationRequest", { enumerable: true, get: function() {
      return protocol_implementation_1.ImplementationRequest;
    } });
    var protocol_typeDefinition_1 = require_protocol_typeDefinition();
    Object.defineProperty(exports, "TypeDefinitionRequest", { enumerable: true, get: function() {
      return protocol_typeDefinition_1.TypeDefinitionRequest;
    } });
    var protocol_workspaceFolder_1 = require_protocol_workspaceFolder();
    Object.defineProperty(exports, "WorkspaceFoldersRequest", { enumerable: true, get: function() {
      return protocol_workspaceFolder_1.WorkspaceFoldersRequest;
    } });
    Object.defineProperty(exports, "DidChangeWorkspaceFoldersNotification", { enumerable: true, get: function() {
      return protocol_workspaceFolder_1.DidChangeWorkspaceFoldersNotification;
    } });
    var protocol_configuration_1 = require_protocol_configuration();
    Object.defineProperty(exports, "ConfigurationRequest", { enumerable: true, get: function() {
      return protocol_configuration_1.ConfigurationRequest;
    } });
    var protocol_colorProvider_1 = require_protocol_colorProvider();
    Object.defineProperty(exports, "DocumentColorRequest", { enumerable: true, get: function() {
      return protocol_colorProvider_1.DocumentColorRequest;
    } });
    Object.defineProperty(exports, "ColorPresentationRequest", { enumerable: true, get: function() {
      return protocol_colorProvider_1.ColorPresentationRequest;
    } });
    var protocol_foldingRange_1 = require_protocol_foldingRange();
    Object.defineProperty(exports, "FoldingRangeRequest", { enumerable: true, get: function() {
      return protocol_foldingRange_1.FoldingRangeRequest;
    } });
    var protocol_declaration_1 = require_protocol_declaration();
    Object.defineProperty(exports, "DeclarationRequest", { enumerable: true, get: function() {
      return protocol_declaration_1.DeclarationRequest;
    } });
    var protocol_selectionRange_1 = require_protocol_selectionRange();
    Object.defineProperty(exports, "SelectionRangeRequest", { enumerable: true, get: function() {
      return protocol_selectionRange_1.SelectionRangeRequest;
    } });
    var protocol_progress_1 = require_protocol_progress();
    Object.defineProperty(exports, "WorkDoneProgress", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgress;
    } });
    Object.defineProperty(exports, "WorkDoneProgressCreateRequest", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgressCreateRequest;
    } });
    Object.defineProperty(exports, "WorkDoneProgressCancelNotification", { enumerable: true, get: function() {
      return protocol_progress_1.WorkDoneProgressCancelNotification;
    } });
    var protocol_callHierarchy_1 = require_protocol_callHierarchy();
    Object.defineProperty(exports, "CallHierarchyIncomingCallsRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyIncomingCallsRequest;
    } });
    Object.defineProperty(exports, "CallHierarchyOutgoingCallsRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyOutgoingCallsRequest;
    } });
    Object.defineProperty(exports, "CallHierarchyPrepareRequest", { enumerable: true, get: function() {
      return protocol_callHierarchy_1.CallHierarchyPrepareRequest;
    } });
    var protocol_semanticTokens_1 = require_protocol_semanticTokens();
    Object.defineProperty(exports, "TokenFormat", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.TokenFormat;
    } });
    Object.defineProperty(exports, "SemanticTokensRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRequest;
    } });
    Object.defineProperty(exports, "SemanticTokensDeltaRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensDeltaRequest;
    } });
    Object.defineProperty(exports, "SemanticTokensRangeRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRangeRequest;
    } });
    Object.defineProperty(exports, "SemanticTokensRefreshRequest", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRefreshRequest;
    } });
    Object.defineProperty(exports, "SemanticTokensRegistrationType", { enumerable: true, get: function() {
      return protocol_semanticTokens_1.SemanticTokensRegistrationType;
    } });
    var protocol_showDocument_1 = require_protocol_showDocument();
    Object.defineProperty(exports, "ShowDocumentRequest", { enumerable: true, get: function() {
      return protocol_showDocument_1.ShowDocumentRequest;
    } });
    var protocol_linkedEditingRange_1 = require_protocol_linkedEditingRange();
    Object.defineProperty(exports, "LinkedEditingRangeRequest", { enumerable: true, get: function() {
      return protocol_linkedEditingRange_1.LinkedEditingRangeRequest;
    } });
    var protocol_fileOperations_1 = require_protocol_fileOperations();
    Object.defineProperty(exports, "FileOperationPatternKind", { enumerable: true, get: function() {
      return protocol_fileOperations_1.FileOperationPatternKind;
    } });
    Object.defineProperty(exports, "DidCreateFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidCreateFilesNotification;
    } });
    Object.defineProperty(exports, "WillCreateFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillCreateFilesRequest;
    } });
    Object.defineProperty(exports, "DidRenameFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidRenameFilesNotification;
    } });
    Object.defineProperty(exports, "WillRenameFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillRenameFilesRequest;
    } });
    Object.defineProperty(exports, "DidDeleteFilesNotification", { enumerable: true, get: function() {
      return protocol_fileOperations_1.DidDeleteFilesNotification;
    } });
    Object.defineProperty(exports, "WillDeleteFilesRequest", { enumerable: true, get: function() {
      return protocol_fileOperations_1.WillDeleteFilesRequest;
    } });
    var protocol_moniker_1 = require_protocol_moniker();
    Object.defineProperty(exports, "UniquenessLevel", { enumerable: true, get: function() {
      return protocol_moniker_1.UniquenessLevel;
    } });
    Object.defineProperty(exports, "MonikerKind", { enumerable: true, get: function() {
      return protocol_moniker_1.MonikerKind;
    } });
    Object.defineProperty(exports, "MonikerRequest", { enumerable: true, get: function() {
      return protocol_moniker_1.MonikerRequest;
    } });
    var protocol_typeHierarchy_1 = require_protocol_typeHierarchy();
    Object.defineProperty(exports, "TypeHierarchyPrepareRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchyPrepareRequest;
    } });
    Object.defineProperty(exports, "TypeHierarchySubtypesRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchySubtypesRequest;
    } });
    Object.defineProperty(exports, "TypeHierarchySupertypesRequest", { enumerable: true, get: function() {
      return protocol_typeHierarchy_1.TypeHierarchySupertypesRequest;
    } });
    var protocol_inlineValue_1 = require_protocol_inlineValue();
    Object.defineProperty(exports, "InlineValueRequest", { enumerable: true, get: function() {
      return protocol_inlineValue_1.InlineValueRequest;
    } });
    Object.defineProperty(exports, "InlineValueRefreshRequest", { enumerable: true, get: function() {
      return protocol_inlineValue_1.InlineValueRefreshRequest;
    } });
    var protocol_inlayHint_1 = require_protocol_inlayHint();
    Object.defineProperty(exports, "InlayHintRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintRequest;
    } });
    Object.defineProperty(exports, "InlayHintResolveRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintResolveRequest;
    } });
    Object.defineProperty(exports, "InlayHintRefreshRequest", { enumerable: true, get: function() {
      return protocol_inlayHint_1.InlayHintRefreshRequest;
    } });
    var protocol_diagnostic_1 = require_protocol_diagnostic();
    Object.defineProperty(exports, "DiagnosticServerCancellationData", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DiagnosticServerCancellationData;
    } });
    Object.defineProperty(exports, "DocumentDiagnosticReportKind", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DocumentDiagnosticReportKind;
    } });
    Object.defineProperty(exports, "DocumentDiagnosticRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DocumentDiagnosticRequest;
    } });
    Object.defineProperty(exports, "WorkspaceDiagnosticRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.WorkspaceDiagnosticRequest;
    } });
    Object.defineProperty(exports, "DiagnosticRefreshRequest", { enumerable: true, get: function() {
      return protocol_diagnostic_1.DiagnosticRefreshRequest;
    } });
    var protocol_notebook_1 = require_protocol_notebook();
    Object.defineProperty(exports, "NotebookCellKind", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCellKind;
    } });
    Object.defineProperty(exports, "ExecutionSummary", { enumerable: true, get: function() {
      return protocol_notebook_1.ExecutionSummary;
    } });
    Object.defineProperty(exports, "NotebookCell", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCell;
    } });
    Object.defineProperty(exports, "NotebookDocument", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookDocument;
    } });
    Object.defineProperty(exports, "NotebookDocumentSyncRegistrationType", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookDocumentSyncRegistrationType;
    } });
    Object.defineProperty(exports, "DidOpenNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidOpenNotebookDocumentNotification;
    } });
    Object.defineProperty(exports, "NotebookCellArrayChange", { enumerable: true, get: function() {
      return protocol_notebook_1.NotebookCellArrayChange;
    } });
    Object.defineProperty(exports, "DidChangeNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidChangeNotebookDocumentNotification;
    } });
    Object.defineProperty(exports, "DidSaveNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidSaveNotebookDocumentNotification;
    } });
    Object.defineProperty(exports, "DidCloseNotebookDocumentNotification", { enumerable: true, get: function() {
      return protocol_notebook_1.DidCloseNotebookDocumentNotification;
    } });
    var TextDocumentFilter;
    (function(TextDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is2.string(candidate.language) || Is2.string(candidate.scheme) || Is2.string(candidate.pattern);
      }
      TextDocumentFilter2.is = is;
    })(TextDocumentFilter = exports.TextDocumentFilter || (exports.TextDocumentFilter = {}));
    var NotebookDocumentFilter;
    (function(NotebookDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && (Is2.string(candidate.notebookType) || Is2.string(candidate.scheme) || Is2.string(candidate.pattern));
      }
      NotebookDocumentFilter2.is = is;
    })(NotebookDocumentFilter = exports.NotebookDocumentFilter || (exports.NotebookDocumentFilter = {}));
    var NotebookCellTextDocumentFilter;
    (function(NotebookCellTextDocumentFilter2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && (Is2.string(candidate.notebook) || NotebookDocumentFilter.is(candidate.notebook)) && (candidate.language === void 0 || Is2.string(candidate.language));
      }
      NotebookCellTextDocumentFilter2.is = is;
    })(NotebookCellTextDocumentFilter = exports.NotebookCellTextDocumentFilter || (exports.NotebookCellTextDocumentFilter = {}));
    var DocumentSelector2;
    (function(DocumentSelector3) {
      function is(value) {
        if (!Array.isArray(value)) {
          return false;
        }
        for (let elem of value) {
          if (!Is2.string(elem) && !TextDocumentFilter.is(elem) && !NotebookCellTextDocumentFilter.is(elem)) {
            return false;
          }
        }
        return true;
      }
      DocumentSelector3.is = is;
    })(DocumentSelector2 = exports.DocumentSelector || (exports.DocumentSelector = {}));
    var RegistrationRequest;
    (function(RegistrationRequest2) {
      RegistrationRequest2.method = "client/registerCapability";
      RegistrationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      RegistrationRequest2.type = new messages_1.ProtocolRequestType(RegistrationRequest2.method);
    })(RegistrationRequest = exports.RegistrationRequest || (exports.RegistrationRequest = {}));
    var UnregistrationRequest;
    (function(UnregistrationRequest2) {
      UnregistrationRequest2.method = "client/unregisterCapability";
      UnregistrationRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      UnregistrationRequest2.type = new messages_1.ProtocolRequestType(UnregistrationRequest2.method);
    })(UnregistrationRequest = exports.UnregistrationRequest || (exports.UnregistrationRequest = {}));
    var ResourceOperationKind;
    (function(ResourceOperationKind2) {
      ResourceOperationKind2.Create = "create";
      ResourceOperationKind2.Rename = "rename";
      ResourceOperationKind2.Delete = "delete";
    })(ResourceOperationKind = exports.ResourceOperationKind || (exports.ResourceOperationKind = {}));
    var FailureHandlingKind;
    (function(FailureHandlingKind2) {
      FailureHandlingKind2.Abort = "abort";
      FailureHandlingKind2.Transactional = "transactional";
      FailureHandlingKind2.TextOnlyTransactional = "textOnlyTransactional";
      FailureHandlingKind2.Undo = "undo";
    })(FailureHandlingKind = exports.FailureHandlingKind || (exports.FailureHandlingKind = {}));
    var PositionEncodingKind;
    (function(PositionEncodingKind2) {
      PositionEncodingKind2.UTF8 = "utf-8";
      PositionEncodingKind2.UTF16 = "utf-16";
      PositionEncodingKind2.UTF32 = "utf-32";
    })(PositionEncodingKind = exports.PositionEncodingKind || (exports.PositionEncodingKind = {}));
    var StaticRegistrationOptions;
    (function(StaticRegistrationOptions2) {
      function hasId(value) {
        const candidate = value;
        return candidate && Is2.string(candidate.id) && candidate.id.length > 0;
      }
      StaticRegistrationOptions2.hasId = hasId;
    })(StaticRegistrationOptions = exports.StaticRegistrationOptions || (exports.StaticRegistrationOptions = {}));
    var TextDocumentRegistrationOptions;
    (function(TextDocumentRegistrationOptions2) {
      function is(value) {
        const candidate = value;
        return candidate && (candidate.documentSelector === null || DocumentSelector2.is(candidate.documentSelector));
      }
      TextDocumentRegistrationOptions2.is = is;
    })(TextDocumentRegistrationOptions = exports.TextDocumentRegistrationOptions || (exports.TextDocumentRegistrationOptions = {}));
    var WorkDoneProgressOptions;
    (function(WorkDoneProgressOptions2) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && (candidate.workDoneProgress === void 0 || Is2.boolean(candidate.workDoneProgress));
      }
      WorkDoneProgressOptions2.is = is;
      function hasWorkDoneProgress(value) {
        const candidate = value;
        return candidate && Is2.boolean(candidate.workDoneProgress);
      }
      WorkDoneProgressOptions2.hasWorkDoneProgress = hasWorkDoneProgress;
    })(WorkDoneProgressOptions = exports.WorkDoneProgressOptions || (exports.WorkDoneProgressOptions = {}));
    var InitializeRequest;
    (function(InitializeRequest2) {
      InitializeRequest2.method = "initialize";
      InitializeRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      InitializeRequest2.type = new messages_1.ProtocolRequestType(InitializeRequest2.method);
    })(InitializeRequest = exports.InitializeRequest || (exports.InitializeRequest = {}));
    var InitializeErrorCodes;
    (function(InitializeErrorCodes2) {
      InitializeErrorCodes2.unknownProtocolVersion = 1;
    })(InitializeErrorCodes = exports.InitializeErrorCodes || (exports.InitializeErrorCodes = {}));
    var InitializedNotification;
    (function(InitializedNotification2) {
      InitializedNotification2.method = "initialized";
      InitializedNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      InitializedNotification2.type = new messages_1.ProtocolNotificationType(InitializedNotification2.method);
    })(InitializedNotification = exports.InitializedNotification || (exports.InitializedNotification = {}));
    var ShutdownRequest;
    (function(ShutdownRequest2) {
      ShutdownRequest2.method = "shutdown";
      ShutdownRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ShutdownRequest2.type = new messages_1.ProtocolRequestType0(ShutdownRequest2.method);
    })(ShutdownRequest = exports.ShutdownRequest || (exports.ShutdownRequest = {}));
    var ExitNotification;
    (function(ExitNotification2) {
      ExitNotification2.method = "exit";
      ExitNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      ExitNotification2.type = new messages_1.ProtocolNotificationType0(ExitNotification2.method);
    })(ExitNotification = exports.ExitNotification || (exports.ExitNotification = {}));
    var DidChangeConfigurationNotification;
    (function(DidChangeConfigurationNotification2) {
      DidChangeConfigurationNotification2.method = "workspace/didChangeConfiguration";
      DidChangeConfigurationNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeConfigurationNotification2.type = new messages_1.ProtocolNotificationType(DidChangeConfigurationNotification2.method);
    })(DidChangeConfigurationNotification = exports.DidChangeConfigurationNotification || (exports.DidChangeConfigurationNotification = {}));
    var MessageType;
    (function(MessageType2) {
      MessageType2.Error = 1;
      MessageType2.Warning = 2;
      MessageType2.Info = 3;
      MessageType2.Log = 4;
    })(MessageType = exports.MessageType || (exports.MessageType = {}));
    var ShowMessageNotification;
    (function(ShowMessageNotification2) {
      ShowMessageNotification2.method = "window/showMessage";
      ShowMessageNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowMessageNotification2.type = new messages_1.ProtocolNotificationType(ShowMessageNotification2.method);
    })(ShowMessageNotification = exports.ShowMessageNotification || (exports.ShowMessageNotification = {}));
    var ShowMessageRequest;
    (function(ShowMessageRequest2) {
      ShowMessageRequest2.method = "window/showMessageRequest";
      ShowMessageRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ShowMessageRequest2.type = new messages_1.ProtocolRequestType(ShowMessageRequest2.method);
    })(ShowMessageRequest = exports.ShowMessageRequest || (exports.ShowMessageRequest = {}));
    var LogMessageNotification;
    (function(LogMessageNotification2) {
      LogMessageNotification2.method = "window/logMessage";
      LogMessageNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      LogMessageNotification2.type = new messages_1.ProtocolNotificationType(LogMessageNotification2.method);
    })(LogMessageNotification = exports.LogMessageNotification || (exports.LogMessageNotification = {}));
    var TelemetryEventNotification;
    (function(TelemetryEventNotification2) {
      TelemetryEventNotification2.method = "telemetry/event";
      TelemetryEventNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      TelemetryEventNotification2.type = new messages_1.ProtocolNotificationType(TelemetryEventNotification2.method);
    })(TelemetryEventNotification = exports.TelemetryEventNotification || (exports.TelemetryEventNotification = {}));
    var TextDocumentSyncKind;
    (function(TextDocumentSyncKind2) {
      TextDocumentSyncKind2.None = 0;
      TextDocumentSyncKind2.Full = 1;
      TextDocumentSyncKind2.Incremental = 2;
    })(TextDocumentSyncKind = exports.TextDocumentSyncKind || (exports.TextDocumentSyncKind = {}));
    var DidOpenTextDocumentNotification;
    (function(DidOpenTextDocumentNotification2) {
      DidOpenTextDocumentNotification2.method = "textDocument/didOpen";
      DidOpenTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidOpenTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidOpenTextDocumentNotification2.method);
    })(DidOpenTextDocumentNotification = exports.DidOpenTextDocumentNotification || (exports.DidOpenTextDocumentNotification = {}));
    var TextDocumentContentChangeEvent2;
    (function(TextDocumentContentChangeEvent3) {
      function isIncremental(event) {
        let candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range !== void 0 && (candidate.rangeLength === void 0 || typeof candidate.rangeLength === "number");
      }
      TextDocumentContentChangeEvent3.isIncremental = isIncremental;
      function isFull(event) {
        let candidate = event;
        return candidate !== void 0 && candidate !== null && typeof candidate.text === "string" && candidate.range === void 0 && candidate.rangeLength === void 0;
      }
      TextDocumentContentChangeEvent3.isFull = isFull;
    })(TextDocumentContentChangeEvent2 = exports.TextDocumentContentChangeEvent || (exports.TextDocumentContentChangeEvent = {}));
    var DidChangeTextDocumentNotification;
    (function(DidChangeTextDocumentNotification2) {
      DidChangeTextDocumentNotification2.method = "textDocument/didChange";
      DidChangeTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidChangeTextDocumentNotification2.method);
    })(DidChangeTextDocumentNotification = exports.DidChangeTextDocumentNotification || (exports.DidChangeTextDocumentNotification = {}));
    var DidCloseTextDocumentNotification;
    (function(DidCloseTextDocumentNotification2) {
      DidCloseTextDocumentNotification2.method = "textDocument/didClose";
      DidCloseTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidCloseTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidCloseTextDocumentNotification2.method);
    })(DidCloseTextDocumentNotification = exports.DidCloseTextDocumentNotification || (exports.DidCloseTextDocumentNotification = {}));
    var DidSaveTextDocumentNotification;
    (function(DidSaveTextDocumentNotification2) {
      DidSaveTextDocumentNotification2.method = "textDocument/didSave";
      DidSaveTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(DidSaveTextDocumentNotification2.method);
    })(DidSaveTextDocumentNotification = exports.DidSaveTextDocumentNotification || (exports.DidSaveTextDocumentNotification = {}));
    var TextDocumentSaveReason;
    (function(TextDocumentSaveReason2) {
      TextDocumentSaveReason2.Manual = 1;
      TextDocumentSaveReason2.AfterDelay = 2;
      TextDocumentSaveReason2.FocusOut = 3;
    })(TextDocumentSaveReason = exports.TextDocumentSaveReason || (exports.TextDocumentSaveReason = {}));
    var WillSaveTextDocumentNotification;
    (function(WillSaveTextDocumentNotification2) {
      WillSaveTextDocumentNotification2.method = "textDocument/willSave";
      WillSaveTextDocumentNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillSaveTextDocumentNotification2.type = new messages_1.ProtocolNotificationType(WillSaveTextDocumentNotification2.method);
    })(WillSaveTextDocumentNotification = exports.WillSaveTextDocumentNotification || (exports.WillSaveTextDocumentNotification = {}));
    var WillSaveTextDocumentWaitUntilRequest;
    (function(WillSaveTextDocumentWaitUntilRequest2) {
      WillSaveTextDocumentWaitUntilRequest2.method = "textDocument/willSaveWaitUntil";
      WillSaveTextDocumentWaitUntilRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WillSaveTextDocumentWaitUntilRequest2.type = new messages_1.ProtocolRequestType(WillSaveTextDocumentWaitUntilRequest2.method);
    })(WillSaveTextDocumentWaitUntilRequest = exports.WillSaveTextDocumentWaitUntilRequest || (exports.WillSaveTextDocumentWaitUntilRequest = {}));
    var DidChangeWatchedFilesNotification;
    (function(DidChangeWatchedFilesNotification2) {
      DidChangeWatchedFilesNotification2.method = "workspace/didChangeWatchedFiles";
      DidChangeWatchedFilesNotification2.messageDirection = messages_1.MessageDirection.clientToServer;
      DidChangeWatchedFilesNotification2.type = new messages_1.ProtocolNotificationType(DidChangeWatchedFilesNotification2.method);
    })(DidChangeWatchedFilesNotification = exports.DidChangeWatchedFilesNotification || (exports.DidChangeWatchedFilesNotification = {}));
    var FileChangeType;
    (function(FileChangeType2) {
      FileChangeType2.Created = 1;
      FileChangeType2.Changed = 2;
      FileChangeType2.Deleted = 3;
    })(FileChangeType = exports.FileChangeType || (exports.FileChangeType = {}));
    var RelativePattern2;
    (function(RelativePattern3) {
      function is(value) {
        const candidate = value;
        return Is2.objectLiteral(candidate) && (vscode_languageserver_types_1.URI.is(candidate.baseUri) || vscode_languageserver_types_1.WorkspaceFolder.is(candidate.baseUri)) && Is2.string(candidate.pattern);
      }
      RelativePattern3.is = is;
    })(RelativePattern2 = exports.RelativePattern || (exports.RelativePattern = {}));
    var WatchKind;
    (function(WatchKind2) {
      WatchKind2.Create = 1;
      WatchKind2.Change = 2;
      WatchKind2.Delete = 4;
    })(WatchKind = exports.WatchKind || (exports.WatchKind = {}));
    var PublishDiagnosticsNotification;
    (function(PublishDiagnosticsNotification2) {
      PublishDiagnosticsNotification2.method = "textDocument/publishDiagnostics";
      PublishDiagnosticsNotification2.messageDirection = messages_1.MessageDirection.serverToClient;
      PublishDiagnosticsNotification2.type = new messages_1.ProtocolNotificationType(PublishDiagnosticsNotification2.method);
    })(PublishDiagnosticsNotification = exports.PublishDiagnosticsNotification || (exports.PublishDiagnosticsNotification = {}));
    var CompletionTriggerKind;
    (function(CompletionTriggerKind2) {
      CompletionTriggerKind2.Invoked = 1;
      CompletionTriggerKind2.TriggerCharacter = 2;
      CompletionTriggerKind2.TriggerForIncompleteCompletions = 3;
    })(CompletionTriggerKind = exports.CompletionTriggerKind || (exports.CompletionTriggerKind = {}));
    var CompletionRequest;
    (function(CompletionRequest2) {
      CompletionRequest2.method = "textDocument/completion";
      CompletionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CompletionRequest2.type = new messages_1.ProtocolRequestType(CompletionRequest2.method);
    })(CompletionRequest = exports.CompletionRequest || (exports.CompletionRequest = {}));
    var CompletionResolveRequest;
    (function(CompletionResolveRequest2) {
      CompletionResolveRequest2.method = "completionItem/resolve";
      CompletionResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CompletionResolveRequest2.type = new messages_1.ProtocolRequestType(CompletionResolveRequest2.method);
    })(CompletionResolveRequest = exports.CompletionResolveRequest || (exports.CompletionResolveRequest = {}));
    var HoverRequest;
    (function(HoverRequest2) {
      HoverRequest2.method = "textDocument/hover";
      HoverRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      HoverRequest2.type = new messages_1.ProtocolRequestType(HoverRequest2.method);
    })(HoverRequest = exports.HoverRequest || (exports.HoverRequest = {}));
    var SignatureHelpTriggerKind;
    (function(SignatureHelpTriggerKind2) {
      SignatureHelpTriggerKind2.Invoked = 1;
      SignatureHelpTriggerKind2.TriggerCharacter = 2;
      SignatureHelpTriggerKind2.ContentChange = 3;
    })(SignatureHelpTriggerKind = exports.SignatureHelpTriggerKind || (exports.SignatureHelpTriggerKind = {}));
    var SignatureHelpRequest;
    (function(SignatureHelpRequest2) {
      SignatureHelpRequest2.method = "textDocument/signatureHelp";
      SignatureHelpRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      SignatureHelpRequest2.type = new messages_1.ProtocolRequestType(SignatureHelpRequest2.method);
    })(SignatureHelpRequest = exports.SignatureHelpRequest || (exports.SignatureHelpRequest = {}));
    var DefinitionRequest;
    (function(DefinitionRequest2) {
      DefinitionRequest2.method = "textDocument/definition";
      DefinitionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DefinitionRequest2.type = new messages_1.ProtocolRequestType(DefinitionRequest2.method);
    })(DefinitionRequest = exports.DefinitionRequest || (exports.DefinitionRequest = {}));
    var ReferencesRequest;
    (function(ReferencesRequest2) {
      ReferencesRequest2.method = "textDocument/references";
      ReferencesRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ReferencesRequest2.type = new messages_1.ProtocolRequestType(ReferencesRequest2.method);
    })(ReferencesRequest = exports.ReferencesRequest || (exports.ReferencesRequest = {}));
    var DocumentHighlightRequest;
    (function(DocumentHighlightRequest2) {
      DocumentHighlightRequest2.method = "textDocument/documentHighlight";
      DocumentHighlightRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentHighlightRequest2.type = new messages_1.ProtocolRequestType(DocumentHighlightRequest2.method);
    })(DocumentHighlightRequest = exports.DocumentHighlightRequest || (exports.DocumentHighlightRequest = {}));
    var DocumentSymbolRequest;
    (function(DocumentSymbolRequest2) {
      DocumentSymbolRequest2.method = "textDocument/documentSymbol";
      DocumentSymbolRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentSymbolRequest2.type = new messages_1.ProtocolRequestType(DocumentSymbolRequest2.method);
    })(DocumentSymbolRequest = exports.DocumentSymbolRequest || (exports.DocumentSymbolRequest = {}));
    var CodeActionRequest;
    (function(CodeActionRequest2) {
      CodeActionRequest2.method = "textDocument/codeAction";
      CodeActionRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeActionRequest2.type = new messages_1.ProtocolRequestType(CodeActionRequest2.method);
    })(CodeActionRequest = exports.CodeActionRequest || (exports.CodeActionRequest = {}));
    var CodeActionResolveRequest;
    (function(CodeActionResolveRequest2) {
      CodeActionResolveRequest2.method = "codeAction/resolve";
      CodeActionResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeActionResolveRequest2.type = new messages_1.ProtocolRequestType(CodeActionResolveRequest2.method);
    })(CodeActionResolveRequest = exports.CodeActionResolveRequest || (exports.CodeActionResolveRequest = {}));
    var WorkspaceSymbolRequest;
    (function(WorkspaceSymbolRequest2) {
      WorkspaceSymbolRequest2.method = "workspace/symbol";
      WorkspaceSymbolRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceSymbolRequest2.type = new messages_1.ProtocolRequestType(WorkspaceSymbolRequest2.method);
    })(WorkspaceSymbolRequest = exports.WorkspaceSymbolRequest || (exports.WorkspaceSymbolRequest = {}));
    var WorkspaceSymbolResolveRequest;
    (function(WorkspaceSymbolResolveRequest2) {
      WorkspaceSymbolResolveRequest2.method = "workspaceSymbol/resolve";
      WorkspaceSymbolResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      WorkspaceSymbolResolveRequest2.type = new messages_1.ProtocolRequestType(WorkspaceSymbolResolveRequest2.method);
    })(WorkspaceSymbolResolveRequest = exports.WorkspaceSymbolResolveRequest || (exports.WorkspaceSymbolResolveRequest = {}));
    var CodeLensRequest;
    (function(CodeLensRequest2) {
      CodeLensRequest2.method = "textDocument/codeLens";
      CodeLensRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeLensRequest2.type = new messages_1.ProtocolRequestType(CodeLensRequest2.method);
    })(CodeLensRequest = exports.CodeLensRequest || (exports.CodeLensRequest = {}));
    var CodeLensResolveRequest;
    (function(CodeLensResolveRequest2) {
      CodeLensResolveRequest2.method = "codeLens/resolve";
      CodeLensResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      CodeLensResolveRequest2.type = new messages_1.ProtocolRequestType(CodeLensResolveRequest2.method);
    })(CodeLensResolveRequest = exports.CodeLensResolveRequest || (exports.CodeLensResolveRequest = {}));
    var CodeLensRefreshRequest;
    (function(CodeLensRefreshRequest2) {
      CodeLensRefreshRequest2.method = `workspace/codeLens/refresh`;
      CodeLensRefreshRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      CodeLensRefreshRequest2.type = new messages_1.ProtocolRequestType0(CodeLensRefreshRequest2.method);
    })(CodeLensRefreshRequest = exports.CodeLensRefreshRequest || (exports.CodeLensRefreshRequest = {}));
    var DocumentLinkRequest;
    (function(DocumentLinkRequest2) {
      DocumentLinkRequest2.method = "textDocument/documentLink";
      DocumentLinkRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentLinkRequest2.type = new messages_1.ProtocolRequestType(DocumentLinkRequest2.method);
    })(DocumentLinkRequest = exports.DocumentLinkRequest || (exports.DocumentLinkRequest = {}));
    var DocumentLinkResolveRequest;
    (function(DocumentLinkResolveRequest2) {
      DocumentLinkResolveRequest2.method = "documentLink/resolve";
      DocumentLinkResolveRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentLinkResolveRequest2.type = new messages_1.ProtocolRequestType(DocumentLinkResolveRequest2.method);
    })(DocumentLinkResolveRequest = exports.DocumentLinkResolveRequest || (exports.DocumentLinkResolveRequest = {}));
    var DocumentFormattingRequest;
    (function(DocumentFormattingRequest2) {
      DocumentFormattingRequest2.method = "textDocument/formatting";
      DocumentFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentFormattingRequest2.method);
    })(DocumentFormattingRequest = exports.DocumentFormattingRequest || (exports.DocumentFormattingRequest = {}));
    var DocumentRangeFormattingRequest;
    (function(DocumentRangeFormattingRequest2) {
      DocumentRangeFormattingRequest2.method = "textDocument/rangeFormatting";
      DocumentRangeFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentRangeFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentRangeFormattingRequest2.method);
    })(DocumentRangeFormattingRequest = exports.DocumentRangeFormattingRequest || (exports.DocumentRangeFormattingRequest = {}));
    var DocumentOnTypeFormattingRequest;
    (function(DocumentOnTypeFormattingRequest2) {
      DocumentOnTypeFormattingRequest2.method = "textDocument/onTypeFormatting";
      DocumentOnTypeFormattingRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      DocumentOnTypeFormattingRequest2.type = new messages_1.ProtocolRequestType(DocumentOnTypeFormattingRequest2.method);
    })(DocumentOnTypeFormattingRequest = exports.DocumentOnTypeFormattingRequest || (exports.DocumentOnTypeFormattingRequest = {}));
    var PrepareSupportDefaultBehavior;
    (function(PrepareSupportDefaultBehavior2) {
      PrepareSupportDefaultBehavior2.Identifier = 1;
    })(PrepareSupportDefaultBehavior = exports.PrepareSupportDefaultBehavior || (exports.PrepareSupportDefaultBehavior = {}));
    var RenameRequest;
    (function(RenameRequest2) {
      RenameRequest2.method = "textDocument/rename";
      RenameRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      RenameRequest2.type = new messages_1.ProtocolRequestType(RenameRequest2.method);
    })(RenameRequest = exports.RenameRequest || (exports.RenameRequest = {}));
    var PrepareRenameRequest;
    (function(PrepareRenameRequest2) {
      PrepareRenameRequest2.method = "textDocument/prepareRename";
      PrepareRenameRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      PrepareRenameRequest2.type = new messages_1.ProtocolRequestType(PrepareRenameRequest2.method);
    })(PrepareRenameRequest = exports.PrepareRenameRequest || (exports.PrepareRenameRequest = {}));
    var ExecuteCommandRequest;
    (function(ExecuteCommandRequest2) {
      ExecuteCommandRequest2.method = "workspace/executeCommand";
      ExecuteCommandRequest2.messageDirection = messages_1.MessageDirection.clientToServer;
      ExecuteCommandRequest2.type = new messages_1.ProtocolRequestType(ExecuteCommandRequest2.method);
    })(ExecuteCommandRequest = exports.ExecuteCommandRequest || (exports.ExecuteCommandRequest = {}));
    var ApplyWorkspaceEditRequest;
    (function(ApplyWorkspaceEditRequest2) {
      ApplyWorkspaceEditRequest2.method = "workspace/applyEdit";
      ApplyWorkspaceEditRequest2.messageDirection = messages_1.MessageDirection.serverToClient;
      ApplyWorkspaceEditRequest2.type = new messages_1.ProtocolRequestType("workspace/applyEdit");
    })(ApplyWorkspaceEditRequest = exports.ApplyWorkspaceEditRequest || (exports.ApplyWorkspaceEditRequest = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/connection.js
var require_connection2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/connection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createProtocolConnection = void 0;
    var vscode_jsonrpc_1 = require_main();
    function createProtocolConnection(input, output, logger, options) {
      if (vscode_jsonrpc_1.ConnectionStrategy.is(options)) {
        options = { connectionStrategy: options };
      }
      return (0, vscode_jsonrpc_1.createMessageConnection)(input, output, logger, options);
    }
    exports.createProtocolConnection = createProtocolConnection;
  }
});

// node_modules/vscode-languageserver-protocol/lib/common/api.js
var require_api2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/common/api.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LSPErrorCodes = exports.createProtocolConnection = void 0;
    __exportStar(require_main(), exports);
    __exportStar((init_main(), __toCommonJS(main_exports)), exports);
    __exportStar(require_messages2(), exports);
    __exportStar(require_protocol(), exports);
    var connection_1 = require_connection2();
    Object.defineProperty(exports, "createProtocolConnection", { enumerable: true, get: function() {
      return connection_1.createProtocolConnection;
    } });
    var LSPErrorCodes;
    (function(LSPErrorCodes2) {
      LSPErrorCodes2.lspReservedErrorRangeStart = -32899;
      LSPErrorCodes2.RequestFailed = -32803;
      LSPErrorCodes2.ServerCancelled = -32802;
      LSPErrorCodes2.ContentModified = -32801;
      LSPErrorCodes2.RequestCancelled = -32800;
      LSPErrorCodes2.lspReservedErrorRangeEnd = -32800;
    })(LSPErrorCodes = exports.LSPErrorCodes || (exports.LSPErrorCodes = {}));
  }
});

// node_modules/vscode-languageserver-protocol/lib/node/main.js
var require_main2 = __commonJS({
  "node_modules/vscode-languageserver-protocol/lib/node/main.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createProtocolConnection = void 0;
    var node_1 = require_node();
    __exportStar(require_node(), exports);
    __exportStar(require_api2(), exports);
    function createProtocolConnection(input, output, logger, options) {
      return (0, node_1.createMessageConnection)(input, output, logger, options);
    }
    exports.createProtocolConnection = createProtocolConnection;
  }
});

// src/server/protocol.const.ts
var Kind, DiagnosticCategory, _KindModifiers, KindModifiers, DisplayPartKind;
var init_protocol_const = __esm({
  "src/server/protocol.const.ts"() {
    Kind = class {
    };
    Kind.alias = "alias";
    Kind.callSignature = "call";
    Kind.class = "class";
    Kind.const = "const";
    Kind.constructorImplementation = "constructor";
    Kind.constructSignature = "construct";
    Kind.directory = "directory";
    Kind.enum = "enum";
    Kind.enumMember = "enum member";
    Kind.externalModuleName = "external module name";
    Kind.function = "function";
    Kind.indexSignature = "index";
    Kind.interface = "interface";
    Kind.keyword = "keyword";
    Kind.let = "let";
    Kind.localFunction = "local function";
    Kind.localVariable = "local var";
    Kind.method = "method";
    Kind.memberGetAccessor = "getter";
    Kind.memberSetAccessor = "setter";
    Kind.memberVariable = "property";
    Kind.module = "module";
    Kind.primitiveType = "primitive type";
    Kind.script = "script";
    Kind.type = "type";
    Kind.variable = "var";
    Kind.warning = "warning";
    Kind.string = "string";
    Kind.parameter = "parameter";
    Kind.typeParameter = "type parameter";
    DiagnosticCategory = class {
    };
    DiagnosticCategory.error = "error";
    DiagnosticCategory.warning = "warning";
    DiagnosticCategory.suggestion = "suggestion";
    _KindModifiers = class {
    };
    KindModifiers = _KindModifiers;
    KindModifiers.optional = "optional";
    KindModifiers.deprecated = "deprecated";
    KindModifiers.color = "color";
    KindModifiers.dtsFile = ".d.ts";
    KindModifiers.tsFile = ".ts";
    KindModifiers.tsxFile = ".tsx";
    KindModifiers.jsFile = ".js";
    KindModifiers.jsxFile = ".jsx";
    KindModifiers.jsonFile = ".json";
    KindModifiers.fileExtensionKindModifiers = [
      _KindModifiers.dtsFile,
      _KindModifiers.tsFile,
      _KindModifiers.tsxFile,
      _KindModifiers.jsFile,
      _KindModifiers.jsxFile,
      _KindModifiers.jsonFile
    ];
    DisplayPartKind = class {
    };
    DisplayPartKind.functionName = "functionName";
    DisplayPartKind.methodName = "methodName";
    DisplayPartKind.parameterName = "parameterName";
    DisplayPartKind.propertyName = "propertyName";
    DisplayPartKind.punctuation = "punctuation";
    DisplayPartKind.text = "text";
  }
});

// src/server/utils/typeConverters.ts
var language, Range3, Position2, Location2, TextEdit2, WorkspaceEdit2, SymbolKind3, OrganizeImportsMode2;
var init_typeConverters = __esm({
  "src/server/utils/typeConverters.ts"() {
    language = __toESM(require_main2());
    init_protocol_const();
    ((Range21) => {
      Range21.fromTextSpan = (span) => {
        return {
          start: {
            line: span.start.line - 1,
            character: span.start.offset - 1
          },
          end: {
            line: span.end.line - 1,
            character: span.end.offset - 1
          }
        };
      };
      Range21.fromLocations = (start, end) => language.Range.create(
        Math.max(0, start.line - 1),
        Math.max(start.offset - 1, 0),
        Math.max(0, end.line - 1),
        Math.max(0, end.offset - 1)
      );
      Range21.toFormattingRequestArgs = (file2, range) => ({
        file: file2,
        line: range.start.line + 1,
        offset: range.start.character + 1,
        endLine: range.end.line + 1,
        endOffset: range.end.character + 1
      });
      Range21.toFileRangeRequestArgs = (file2, range) => ({
        file: file2,
        startLine: range.start.line + 1,
        startOffset: range.start.character + 1,
        endLine: range.end.line + 1,
        endOffset: range.end.character + 1
      });
    })(Range3 || (Range3 = {}));
    ((Position11) => {
      Position11.fromLocation = (tslocation) => {
        return {
          line: tslocation.line - 1,
          character: tslocation.offset - 1
        };
      };
      Position11.toLocation = (position) => ({
        line: position.line + 1,
        offset: position.character + 1
      });
      Position11.toFileLocationRequestArgs = (file2, position) => ({
        file: file2,
        line: position.line + 1,
        offset: position.character + 1
      });
    })(Position2 || (Position2 = {}));
    ((Location4) => {
      Location4.fromTextSpan = (uri, tsTextSpan) => {
        return {
          uri,
          range: Range3.fromTextSpan(tsTextSpan)
        };
      };
    })(Location2 || (Location2 = {}));
    ((TextEdit7) => {
      TextEdit7.fromCodeEdit = (edit) => {
        return {
          range: Range3.fromTextSpan(edit),
          newText: edit.newText
        };
      };
    })(TextEdit2 || (TextEdit2 = {}));
    ((WorkspaceEdit8) => {
      function fromFileCodeEdits(client, edits) {
        let documentChanges = [];
        for (const edit of edits) {
          let uri = client.toResource(edit.fileName);
          documentChanges.push({
            textDocument: {
              uri,
              version: null
            },
            edits: edit.textChanges.map((change) => {
              return TextEdit2.fromCodeEdit(change);
            })
          });
        }
        return { documentChanges };
      }
      WorkspaceEdit8.fromFileCodeEdits = fromFileCodeEdits;
      function withFileCodeEdits(workspaceEdit, client, edits) {
        let changes = workspaceEdit.changes ?? {};
        for (const edit of edits) {
          const resource = client.toResource(edit.fileName);
          let arr = changes[resource] ?? [];
          let edits2 = edit.textChanges.map((change) => {
            return TextEdit2.fromCodeEdit(change);
          });
          arr.push(...edits2);
          changes[resource] = arr;
        }
        workspaceEdit.changes = changes;
        return workspaceEdit;
      }
      WorkspaceEdit8.withFileCodeEdits = withFileCodeEdits;
    })(WorkspaceEdit2 || (WorkspaceEdit2 = {}));
    ((SymbolKind6) => {
      function fromProtocolScriptElementKind(kind) {
        switch (kind) {
          case Kind.module:
            return language.SymbolKind.Module;
          case Kind.class:
            return language.SymbolKind.Class;
          case Kind.enum:
            return language.SymbolKind.Enum;
          case Kind.enumMember:
            return language.SymbolKind.EnumMember;
          case Kind.interface:
            return language.SymbolKind.Interface;
          case Kind.indexSignature:
            return language.SymbolKind.Method;
          case Kind.callSignature:
            return language.SymbolKind.Method;
          case Kind.method:
            return language.SymbolKind.Method;
          case Kind.memberVariable:
            return language.SymbolKind.Property;
          case Kind.memberGetAccessor:
            return language.SymbolKind.Property;
          case Kind.memberSetAccessor:
            return language.SymbolKind.Property;
          case Kind.variable:
            return language.SymbolKind.Variable;
          case Kind.let:
            return language.SymbolKind.Variable;
          case Kind.const:
            return language.SymbolKind.Variable;
          case Kind.localVariable:
            return language.SymbolKind.Variable;
          case Kind.alias:
            return language.SymbolKind.Variable;
          case Kind.function:
            return language.SymbolKind.Function;
          case Kind.localFunction:
            return language.SymbolKind.Function;
          case Kind.constructSignature:
            return language.SymbolKind.Constructor;
          case Kind.constructorImplementation:
            return language.SymbolKind.Constructor;
          case Kind.typeParameter:
            return language.SymbolKind.TypeParameter;
          case Kind.string:
            return language.SymbolKind.String;
          default:
            return language.SymbolKind.Variable;
        }
      }
      SymbolKind6.fromProtocolScriptElementKind = fromProtocolScriptElementKind;
    })(SymbolKind3 || (SymbolKind3 = {}));
    ((OrganizeImportsMode3) => {
      function toProtocolOrganizeImportsMode(mode) {
        switch (mode) {
          case "All" /* All */:
            return "All";
          case "SortAndCombine" /* SortAndCombine */:
            return "SortAndCombine";
          case "RemoveUnused" /* RemoveUnused */:
            return "RemoveUnused";
        }
      }
      OrganizeImportsMode3.toProtocolOrganizeImportsMode = toProtocolOrganizeImportsMode;
    })(OrganizeImportsMode2 || (OrganizeImportsMode2 = {}));
  }
});

// src/server/typescriptService.ts
var ServerResponse, ClientCapabilities;
var init_typescriptService = __esm({
  "src/server/typescriptService.ts"() {
    ((ServerResponse2) => {
      class Cancelled {
        constructor(reason) {
          this.reason = reason;
          this.type = "cancelled";
        }
      }
      ServerResponse2.Cancelled = Cancelled;
      ServerResponse2.NoContent = { type: "noContent" };
      ServerResponse2.NoServer = { type: "noServer" };
    })(ServerResponse || (ServerResponse = {}));
    ClientCapabilities = class {
      constructor(...capabilities) {
        this.capabilities = new Set(capabilities);
      }
      has(capability) {
        return this.capabilities.has(capability);
      }
    };
  }
});

// src/server/utils/languageModeIds.ts
function mode2ScriptKind(mode) {
  switch (mode) {
    case typescript:
      return "TS";
    case typescriptnocop:
      return "TS";
    case nocoptypescript:
      return "TS";
    case typescripttsx:
      return "TSX";
    case typescriptjsx:
      return "TSX";
    case typescriptreact:
      return "TSX";
    case javascript:
      return "JS";
    case javascriptreact:
      return "JSX";
  }
  return void 0;
}
var typescript, typescriptreact, typescriptnocop, typescripttsx, typescriptjsx, nocoptypescript, javascript, javascriptreact, javascriptjsx;
var init_languageModeIds = __esm({
  "src/server/utils/languageModeIds.ts"() {
    typescript = "typescript";
    typescriptreact = "typescriptreact";
    typescriptnocop = "typescriptnocop";
    typescripttsx = "typescript.tsx";
    typescriptjsx = "typescript.jsx";
    nocoptypescript = "nocop.typescript";
    javascript = "javascript";
    javascriptreact = "javascriptreact";
    javascriptjsx = "javascript.jsx";
  }
});

// src/server/utils/async.ts
var Delayer;
var init_async = __esm({
  "src/server/utils/async.ts"() {
    Delayer = class {
      constructor(defaultDelay) {
        this.defaultDelay = defaultDelay;
        this.timeout = null;
        this.completionPromise = null;
        this.onSuccess = null;
        this.task = null;
      }
      trigger(task, delay = this.defaultDelay) {
        this.task = task;
        if (delay >= 0) {
          this.cancelTimeout();
        }
        if (!this.completionPromise) {
          this.completionPromise = new Promise((resolve) => {
            this.onSuccess = resolve;
          }).then(() => {
            var _a;
            this.completionPromise = null;
            this.onSuccess = null;
            const result = (_a = this.task) == null ? void 0 : _a.call(this);
            this.task = null;
            return result;
          });
        }
        if (delay >= 0 || this.timeout === null) {
          this.timeout = setTimeout(() => {
            var _a;
            this.timeout = null;
            (_a = this.onSuccess) == null ? void 0 : _a.call(this, void 0);
          }, delay >= 0 ? delay : this.defaultDelay);
        }
        return this.completionPromise;
      }
      cancelTimeout() {
        if (this.timeout !== null) {
          clearTimeout(this.timeout);
          this.timeout = null;
        }
      }
    };
  }
});

// src/server/utils/languageDescription.ts
function doesResourceLookLikeATypeScriptFile(resource) {
  return /\.(tsx?|mts|cts)$/i.test(resource.fsPath);
}
var standardLanguageDescriptions;
var init_languageDescription = __esm({
  "src/server/utils/languageDescription.ts"() {
    init_languageModeIds();
    standardLanguageDescriptions = [
      {
        id: "typescript",
        diagnosticSource: "ts",
        diagnosticOwner: "typescript",
        diagnosticLanguage: 1 /* TypeScript */,
        languageIds: [typescript, typescriptreact, typescriptnocop, nocoptypescript, typescripttsx, typescriptjsx],
        configFilePattern: /^tsconfig(\..*)?\.json$/gi,
        standardFileExtensions: [
          "ts",
          "tsx",
          "cts",
          "mts"
        ]
      },
      {
        id: "javascript",
        diagnosticSource: "ts",
        diagnosticOwner: "typescript",
        languageIds: [javascript, javascriptreact, javascriptjsx],
        diagnosticLanguage: 0 /* JavaScript */,
        configFilePattern: /^jsconfig(\..*)?\.json$/gi,
        standardFileExtensions: [
          "js",
          "jsx",
          "cjs",
          "mjs",
          "es6",
          "pac"
        ]
      }
    ];
  }
});

// src/server/features/updatePathOnRename.ts
var updatePathOnRename_exports = {};
__export(updatePathOnRename_exports, {
  default: () => UpdateImportsOnFileRenameHandler,
  register: () => register
});
async function isDirectory(resource) {
  try {
    return (await (0, import_util.promisify)(import_fs7.default.stat)(resource.fsPath)).isDirectory();
  } catch {
    return false;
  }
}
function register(client, fileConfigurationManager, handles) {
  if (client.apiVersion.gte(API.v300) && client.capabilities.has(2 /* Semantic */)) {
    return new UpdateImportsOnFileRenameHandler(client, fileConfigurationManager, handles);
  }
}
var import_coc46, import_fs7, import_path12, import_util, nulToken, updateImportsOnFileMoveName, UpdateImportsOnFileRenameHandler;
var init_updatePathOnRename = __esm({
  "src/server/features/updatePathOnRename.ts"() {
    import_coc46 = require("coc.nvim");
    import_fs7 = __toESM(require("fs"));
    import_path12 = __toESM(require("path"));
    import_util = require("util");
    init_typescriptService();
    init_api();
    init_async();
    init_languageDescription();
    init_typeConverters();
    nulToken = import_coc46.CancellationToken.None;
    updateImportsOnFileMoveName = "updateImportsOnFileMove.enabled";
    UpdateImportsOnFileRenameHandler = class {
      constructor(client, fileConfigurationManager, _handles) {
        this.client = client;
        this.fileConfigurationManager = fileConfigurationManager;
        this._handles = _handles;
        this.disposables = [];
        this._delayer = new Delayer(1e3);
        this._pendingRenames = /* @__PURE__ */ new Set();
        let glob = "**/*.{ts,tsx,mts,cts,js,jsx,mjs,cjs}";
        const watcher = import_coc46.workspace.createFileSystemWatcher(glob);
        this.disposables.push(watcher);
        watcher.onDidRename(async (e) => {
          let { oldUri, newUri } = e;
          const newFilePath = this.client.toPath(newUri.toString());
          if (!newFilePath) {
            return;
          }
          const oldFilePath = this.client.toPath(oldUri.toString());
          if (!oldFilePath) {
            return;
          }
          const config = this.getConfiguration(newUri);
          const setting = config.get(updateImportsOnFileMoveName);
          if (setting === "never" /* Never */) {
            return;
          }
          const jsTsFileThatIsBeingMoved = await this.getJsTsFileBeingMoved(newUri);
          if (!jsTsFileThatIsBeingMoved || !this.client.toPath(jsTsFileThatIsBeingMoved.toString())) {
            return;
          }
          this._pendingRenames.add({ oldUri, newUri, newFilePath, oldFilePath, jsTsFileThatIsBeingMoved });
          this._delayer.trigger(() => {
            import_coc46.window.withProgress({
              title: "Checking for update of JS/TS imports"
            }, () => this.flushRenames());
          });
        });
      }
      dispose() {
        this._delayer.cancelTimeout();
        (0, import_coc46.disposeAll)(this.disposables);
      }
      getConfiguration(resource) {
        return import_coc46.workspace.getConfiguration(doesResourceLookLikeATypeScriptFile(resource) ? "typescript" : "javascript", resource);
      }
      async flushRenames() {
        const renames = Array.from(this._pendingRenames);
        this._pendingRenames.clear();
        for (const group of this.groupRenames(renames)) {
          const edits = {};
          const resourcesBeingRenamed = [];
          for (const { oldUri, newUri, newFilePath, oldFilePath, jsTsFileThatIsBeingMoved } of group) {
            const document = await import_coc46.workspace.openTextDocument(jsTsFileThatIsBeingMoved);
            this.client.bufferSyncSupport.closeResource(oldUri.toString());
            this.client.bufferSyncSupport.openTextDocument(document.textDocument);
            if (await this.withEditsForFileRename(edits, document.textDocument, oldFilePath, newFilePath)) {
              resourcesBeingRenamed.push(newUri);
            }
          }
          if (Object.keys(edits.changes ?? {}).length > 0) {
            if (await this.confirmActionWithUser(resourcesBeingRenamed)) {
              await import_coc46.workspace.applyEdit(edits);
            }
          }
        }
      }
      async confirmActionWithUser(newResources) {
        if (!newResources.length)
          return false;
        const config = this.getConfiguration(newResources[0]);
        const setting = config.get(updateImportsOnFileMoveName);
        switch (setting) {
          case "always" /* Always */:
            return true;
          case "never" /* Never */:
            return false;
          case "prompt" /* Prompt */:
          default:
            return this.promptUser(newResources);
        }
      }
      async promptUser(newResources) {
        if (!newResources.length)
          return false;
        const rejectItem = {
          title: "No",
          isCloseAffordance: true
        };
        const acceptItem = {
          title: "Yes"
        };
        const response = await import_coc46.window.showInformationMessage(
          newResources.length === 1 ? `Update imports for '${import_path12.default.basename(newResources[0].fsPath)}'?` : this.getConfirmMessage(`Update imports for the following ${newResources.length} files?`, newResources),
          rejectItem,
          acceptItem
        );
        switch (response) {
          case acceptItem: {
            return true;
          }
          case rejectItem: {
            return false;
          }
          default: {
            return false;
          }
        }
      }
      async getJsTsFileBeingMoved(resource) {
        if (resource.scheme !== "file") {
          return void 0;
        }
        if (await isDirectory(resource)) {
          const files = await import_coc46.workspace.findFiles(new import_coc46.RelativePattern(resource, "**/*.{ts,tsx,js,jsx}"), "**/node_modules/**", 1);
          return files[0];
        }
        return await this._handles(resource.toString()) ? resource : void 0;
      }
      async withEditsForFileRename(edits, document, oldFilePath, newFilePath) {
        const response = await this.client.interruptGetErr(() => {
          this.fileConfigurationManager.setGlobalConfigurationFromDocument(document, nulToken);
          const args = {
            oldFilePath,
            newFilePath
          };
          return this.client.execute("getEditsForFileRename", args, nulToken);
        });
        if (response.type !== "response" || !response.body.length) {
          return false;
        }
        WorkspaceEdit2.withFileCodeEdits(edits, this.client, response.body);
        return true;
      }
      groupRenames(renames) {
        const groups = /* @__PURE__ */ new Map();
        for (const rename of renames) {
          const key = `${this.client.getWorkspaceRootForResource(rename.jsTsFileThatIsBeingMoved)}@@@${doesResourceLookLikeATypeScriptFile(rename.jsTsFileThatIsBeingMoved)}`;
          if (!groups.has(key)) {
            groups.set(key, /* @__PURE__ */ new Set());
          }
          groups.get(key).add(rename);
        }
        return groups.values();
      }
      getConfirmMessage(start, resourcesToConfirm) {
        const MAX_CONFIRM_FILES = 10;
        const paths = [start];
        paths.push("");
        paths.push(...resourcesToConfirm.slice(0, MAX_CONFIRM_FILES).map((r) => import_path12.default.basename(r.fsPath)));
        if (resourcesToConfirm.length > MAX_CONFIRM_FILES) {
          if (resourcesToConfirm.length - MAX_CONFIRM_FILES === 1) {
            paths.push("...1 additional file not shown");
          } else {
            paths.push(`...${resourcesToConfirm.length - MAX_CONFIRM_FILES} additional files not shown`);
          }
        }
        paths.push("");
        return paths.join("\n");
      }
    };
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  activate: () => activate
});
module.exports = __toCommonJS(src_exports);
var import_coc50 = require("coc.nvim");

// src/server/index.ts
var import_coc48 = require("coc.nvim");

// src/server/commands.ts
var import_coc3 = require("coc.nvim");
var import_path3 = __toESM(require("path"));
init_main();

// src/utils/resolver.ts
var import_child_process = require("child_process");
var import_coc = require("coc.nvim");
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));

// node_modules/ansi-regex/index.js
function ansiRegex({ onlyFirst = false } = {}) {
  const pattern = [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
  ].join("|");
  return new RegExp(pattern, onlyFirst ? void 0 : "g");
}

// node_modules/strip-ansi/index.js
function stripAnsi(string2) {
  if (typeof string2 !== "string") {
    throw new TypeError(`Expected a \`string\`, got \`${typeof string2}\``);
  }
  return string2.replace(ansiRegex(), "");
}

// src/utils/resolver.ts
var import_which = __toESM(require_which());
function resolveCommand(cmd) {
  try {
    return import_which.default.sync(cmd);
  } catch (e) {
  }
  return void 0;
}
function runCommand(cmd, opts = {}, timeout) {
  if (process.platform !== "win32") {
    opts.shell = opts.shell || process.env.SHELL;
  }
  opts.maxBuffer = 500 * 1024;
  return new Promise((resolve, reject) => {
    let timer;
    let cp;
    if (timeout) {
      timer = setTimeout(() => {
        cp.kill("SIGKILL");
        reject(new import_coc.CancellationError());
      }, timeout * 1e3);
    }
    cp = (0, import_child_process.exec)(cmd, opts, (err, stdout, stderr) => {
      if (timer)
        clearTimeout(timer);
      if (err) {
        reject(new Error(`exited with ${err.code}
${err}
${stderr}`));
        return;
      }
      resolve(stdout.toString());
    });
  });
}
var moduleName = "typescript";
var Resolver = class {
  get nodeFolder() {
    if (this._npmFolder)
      return Promise.resolve(this._npmFolder);
    let cmd = resolveCommand("npm");
    if (!cmd)
      return Promise.resolve("");
    return runCommand(`${cmd} --loglevel silent root -g`, {}, 3e3).then((root) => {
      this._npmFolder = stripAnsi(root).trim();
      return this._npmFolder;
    });
  }
  get yarnFolder() {
    if (this._yarnFolder)
      return Promise.resolve(this._yarnFolder);
    let cmd = resolveCommand("yarnpkg");
    if (!cmd)
      cmd = resolveCommand("yarn");
    if (!cmd)
      return Promise.resolve("");
    return runCommand(`${cmd} global dir`, {}, 3e3).then((root) => {
      let folder = import_path.default.join(stripAnsi(root).trim(), "node_modules");
      let exists = import_fs.default.existsSync(folder);
      if (exists)
        this._yarnFolder = folder;
      return exists ? folder : "";
    }).catch(() => {
      return "";
    });
  }
  async resolveNpm() {
    let folder = await this.nodeFolder;
    return folder ? this.resolve(folder) : void 0;
  }
  async resolveYarn() {
    let folder = await this.yarnFolder;
    return folder ? this.resolve(folder) : void 0;
  }
  resolve(folder) {
    let file2 = import_path.default.join(folder, moduleName, "lib/tsserver.js");
    if (import_fs.default.existsSync(file2))
      return file2;
    return void 0;
  }
};

// src/server/commands.ts
init_api();

// src/server/utils/helper.ts
var nodeModules = [
  "assert",
  "cluster",
  "crypto",
  "dns",
  "domain",
  "events",
  "fs",
  "http",
  "http2",
  "https",
  "inspector",
  "net",
  "os",
  "path",
  "punycode",
  "querystring",
  "readline",
  "repl",
  "stream",
  "string_decoder",
  "tls",
  "tty",
  "url",
  "util",
  "v8",
  "vm",
  "zlib",
  "perf_hooks"
];

// src/server/utils/modules.ts
var import_child_process2 = require("child_process");
var import_coc2 = require("coc.nvim");
var import_fs2 = __toESM(require("fs"));
var import_path2 = __toESM(require("path"));
function runCommand2(cmd, cwd, timeout) {
  return new Promise((resolve, reject) => {
    let timer;
    if (timeout) {
      timer = setTimeout(() => {
        reject(new Error(`timeout after ${timeout}s`));
      }, timeout * 1e3);
    }
    (0, import_child_process2.exec)(cmd, { cwd }, (err, stdout) => {
      if (timer)
        clearTimeout(timer);
      if (err) {
        reject(new Error(`exited with ${err.code}`));
        return;
      }
      resolve(stdout);
    });
  });
}
async function getManager() {
  let res = await import_coc2.workspace.findUp(["yarn.lock", "package-lock.json"]);
  if (!res)
    return "yarn";
  return res.endsWith("yarn.lock") ? "yarn" : "npm";
}
async function moduleExists(name) {
  try {
    let content = await runCommand2(`npm info ${name} --json`, process.cwd());
    if (!content)
      return false;
    let obj = JSON.parse(content);
    if (obj.error != null)
      return false;
    return true;
  } catch (e) {
    return false;
  }
  return false;
}
function distinct(array, keyFn) {
  if (!keyFn) {
    return array.filter((element, position) => {
      return array.indexOf(element) === position;
    });
  }
  const seen = /* @__PURE__ */ Object.create(null);
  return array.filter((elem) => {
    const key = keyFn(elem);
    if (seen[key]) {
      return false;
    }
    seen[key] = true;
    return true;
  });
}
async function installModules(uri, names) {
  names = distinct(names);
  let workspaceFolder = import_coc2.workspace.getWorkspaceFolder(uri);
  let root = workspaceFolder ? import_coc2.Uri.parse(workspaceFolder.uri).fsPath : void 0;
  if (!root || !import_fs2.default.existsSync(import_path2.default.join(root, "package.json"))) {
    import_coc2.window.showErrorMessage(`package.json not found from workspaceFolder: ${root}`);
    return;
  }
  let arr = names.concat(names.map((s) => `@types/${s}`));
  let statusItem = import_coc2.window.createStatusBarItem(99, { progress: true });
  statusItem.text = `Checking module ${arr.join(" ")}`;
  statusItem.show();
  let exists = await Promise.all(arr.map((name) => {
    return moduleExists(name).then((exists2) => {
      return exists2 ? name : null;
    });
  }));
  let manager = await getManager();
  exists = exists.filter((s) => s != null);
  if (!exists.length)
    return;
  let devs = exists.filter((s) => s.startsWith("@types"));
  let deps = exists.filter((s) => devs.indexOf(s) == -1);
  statusItem.text = `Installing ${exists.join(" ")}`;
  try {
    let cmd = manager == "npm" ? `npm i ${deps.join(" ")}` : `yarn add ${deps.join(" ")}`;
    await runCommand2(cmd, root);
    cmd = manager == "npm" ? `npm i ${deps.join(" ")} --save-dev` : `yarn add ${deps.join(" ")} --save-dev`;
    await runCommand2(cmd, root);
  } catch (e) {
    statusItem.dispose();
    import_coc2.window.showErrorMessage(`Install error ${e.message}`);
    return;
  }
  statusItem.dispose();
  import_coc2.window.showInformationMessage(`Installed: ${exists.join(" ")}`);
}

// src/server/commands.ts
init_typeConverters();
var ChooseVersionCommand = class {
  constructor(service) {
    this.service = service;
    this.id = "tsserver.chooseVersion";
    this.resolver = new Resolver();
  }
  async execute() {
    var _a;
    let client = await this.service.getClientHost();
    let { versionProvider } = client.serviceClient;
    let { bundledVersion } = versionProvider;
    let npmServerPath;
    let yarnServerPath;
    let config = import_coc3.workspace.getConfiguration("tsserver", import_coc3.Uri.file(import_coc3.workspace.root));
    if (config.inspect("useLocalTsdk").globalValue !== true) {
      await import_coc3.window.withProgress({
        title: "Resolving typescript module"
      }, async () => {
        npmServerPath = await this.resolver.resolveNpm();
        yarnServerPath = await this.resolver.resolveYarn();
      });
    }
    let currPath = (_a = client.serviceClient.versionManager.currentVersion) == null ? void 0 : _a.path;
    let items = [];
    items.push({
      label: bundledVersion.version.displayName,
      description: "Bundled with coc-tsserver",
      version: bundledVersion,
      picked: bundledVersion.path == currPath
    });
    if (npmServerPath) {
      let version = versionProvider.getVersionFromTscPath(npmServerPath);
      if (version && version.isValid) {
        items.push({
          label: version.version.displayName,
          description: "From npm",
          version,
          picked: version.path == currPath
        });
      }
    }
    if (yarnServerPath) {
      let version = versionProvider.getVersionFromTscPath(yarnServerPath);
      if (version && version.isValid) {
        items.push({
          label: version.version.displayName,
          description: "From yarn",
          version,
          picked: version.path == currPath
        });
      }
    }
    let localVersion = versionProvider.getLocalVersion();
    if (localVersion) {
      items.push({
        label: localVersion.version.displayName,
        description: "Local version",
        version: localVersion,
        picked: localVersion.path == currPath
      });
    }
    let workspaceVersion = versionProvider.getLocalVersionFromFolder(import_coc3.workspace.root);
    if (workspaceVersion && workspaceVersion.tscPath != (localVersion == null ? void 0 : localVersion.tscPath)) {
      items.push({
        label: workspaceVersion.version.displayName,
        description: "Local workspace version",
        version: workspaceVersion,
        picked: workspaceVersion.path == currPath
      });
    }
    let res = await import_coc3.window.showQuickPick(items, { title: "Choose typescript version", matchOnDescription: true });
    if (!res || res.version.path == currPath)
      return;
    let libPath = import_path3.default.relative(import_coc3.workspace.root, res.version.path);
    let isLocal = !libPath.startsWith("..");
    if (isLocal) {
      config.update("useLocalTsdk", true, 3);
      config.update("tsdk", "${workspaceFolder}/" + libPath.replace(/\\/g, "/"), 3);
      client.serviceClient.restartTsServer();
    } else {
      if (config.inspect("useLocalTsdk").workspaceFolderValue !== void 0) {
        config.update("useLocalTsdk", void 0, 3);
      }
      if (config.inspect("tsdk").workspaceFolderValue !== void 0) {
        config.update("tsdk", void 0, 3);
      }
      config.update("tsdk", res.version.path, 1);
      void import_coc3.window.showInformationMessage(`Updated user configuration "tsserver.tsdk" to ${res.version.path}`);
      client.serviceClient.restartTsServer();
    }
  }
};
var ReloadProjectsCommand = class {
  constructor(service) {
    this.service = service;
    this.id = "tsserver.reloadProjects";
  }
  async execute() {
    let client = await this.service.getClientHost();
    client.reloadProjects();
    import_coc3.window.showInformationMessage("projects reloaded");
  }
};
var OpenTsServerLogCommand = class {
  constructor(service) {
    this.service = service;
    this.id = "tsserver.openTsServerLog";
  }
  async execute() {
    let client = await this.service.getClientHost();
    client.serviceClient.openTsServerLogFile();
  }
};
var TypeScriptGoToProjectConfigCommand = class {
  constructor(service) {
    this.service = service;
    this.id = "tsserver.goToProjectConfig";
  }
  async execute() {
    let client = await this.service.getClientHost();
    let doc = await import_coc3.workspace.document;
    let { languageId } = doc.textDocument;
    if (client.serviceClient.modeIds.indexOf(languageId) == -1) {
      throw new Error(`Could not determine TypeScript or JavaScript project. Unsupported file type: ${languageId}`);
      return;
    }
    await goToProjectConfig(client, doc.uri);
  }
};
async function goToProjectConfig(clientHost, uri) {
  const client = clientHost.serviceClient;
  const file2 = client.toPath(uri);
  let res;
  try {
    res = await client.execute("projectInfo", { file: file2, needFileNameList: false }, import_coc3.CancellationToken.None);
  } catch {
  }
  if (!res || !res.body) {
    import_coc3.window.showWarningMessage("Could not determine TypeScript or JavaScript project.");
    return;
  }
  const { configFileName } = res.body;
  if (configFileName && !isImplicitProjectConfigFile(configFileName)) {
    await import_coc3.workspace.openResource(import_coc3.Uri.file(configFileName).toString());
    return;
  }
  import_coc3.window.showWarningMessage("Config file not found");
}
function isImplicitProjectConfigFile(configFileName) {
  return configFileName.indexOf("/dev/null/") === 0;
}
var autoFixableDiagnosticCodes = /* @__PURE__ */ new Set([
  2420,
  2552,
  2304
]);
var AutoFixCommand = class {
  constructor(service) {
    this.service = service;
    this.id = "tsserver.executeAutofix";
  }
  async execute() {
    if (this.service.state != import_coc3.ServiceStat.Running) {
      throw new Error("service not running");
      return;
    }
    let client = await this.service.getClientHost();
    let document = await import_coc3.workspace.document;
    let handles = await client.handles(document.uri);
    if (!handles) {
      throw new Error(`Document ${document.uri} is not handled by tsserver.`);
      return;
    }
    let file2 = client.serviceClient.toPath(document.uri);
    let diagnostics = client.serviceClient.diagnosticsManager.getDiagnostics(document.uri);
    let missingDiagnostics = diagnostics.filter((o) => o.code == 2307);
    if (missingDiagnostics.length) {
      let names2 = missingDiagnostics.map((o) => {
        let ms = o.message.match(/module\s'(.+)'\./);
        return ms ? ms[1] : null;
      });
      names2 = names2.filter((s) => s != null);
      if (names2.length) {
        installModules(document.uri, names2).catch((e) => {
          console.error(e.message);
        });
      }
    }
    diagnostics = diagnostics.filter((x) => autoFixableDiagnosticCodes.has(x.code));
    if (diagnostics.length == 0)
      return;
    diagnostics = diagnostics.reduce((arr, curr) => {
      if (curr.code == 2304 && arr.findIndex((o) => o.message == curr.message) != -1)
        return arr;
      arr.push(curr);
      return arr;
    }, []);
    let edits = [];
    let command;
    let names = [];
    for (let diagnostic of diagnostics) {
      const args = {
        ...Range3.toFileRangeRequestArgs(file2, diagnostic.range),
        errorCodes: [+diagnostic.code]
      };
      const response = await client.serviceClient.execute("getCodeFixes", args, import_coc3.CancellationToken.None);
      if (response.type !== "response" || !response.body || response.body.length < 1) {
        if (diagnostic.code == 2304) {
          let { range } = diagnostic;
          let line = document.getline(range.start.line);
          let name = line.slice(range.start.character, range.end.character);
          if (nodeModules.indexOf(name) !== -1 && names.indexOf(name) == -1) {
            names.push(name);
            edits.push({
              range: Range.create(0, 0, 0, 0),
              newText: `import ${name} from '${name}'
`
            });
            command = "tsserver.organizeImports";
          }
        }
        continue;
      }
      const fix = response.body[0];
      for (let change of fix.changes) {
        if (change.fileName != file2)
          continue;
        for (let ch of change.textChanges) {
          edits.push({
            range: Range3.fromTextSpan(ch),
            newText: ch.newText
          });
        }
      }
    }
    if (edits.length)
      await document.applyEdits(edits);
    if (command)
      import_coc3.commands.executeCommand(command);
  }
};
var ConfigurePluginCommand = class {
  constructor(pluginManager) {
    this.pluginManager = pluginManager;
    this.id = "_typescript.configurePlugin";
  }
  execute(pluginId, configuration) {
    this.pluginManager.setConfiguration(pluginId, configuration);
  }
};
var _FileReferencesCommand = class {
  constructor(service) {
    this.service = service;
    this.id = "tsserver.findAllFileReferences";
  }
  async execute() {
    const client = await this.service.getClientHost();
    if (client.serviceClient.apiVersion.lt(_FileReferencesCommand.minVersion)) {
      import_coc3.window.showErrorMessage("Find file references failed. Requires TypeScript 4.2+.");
      return;
    }
    const doc = await import_coc3.workspace.document;
    let { languageId } = doc.textDocument;
    if (client.serviceClient.modeIds.indexOf(languageId) == -1)
      return;
    const openedFiledPath = client.serviceClient.toOpenedFilePath(doc.uri);
    if (!openedFiledPath)
      return;
    const response = await client.serviceClient.execute("fileReferences", { file: openedFiledPath }, import_coc3.CancellationToken.None);
    if (response.type !== "response" || !response.body)
      return;
    const locations = response.body.refs.map(
      (r) => Location2.fromTextSpan(client.serviceClient.toResource(r.file), r)
    );
    await import_coc3.commands.executeCommand("editor.action.showReferences", doc.uri, Position.create(0, 0), locations);
  }
};
var FileReferencesCommand = _FileReferencesCommand;
FileReferencesCommand.minVersion = API.v420;
var _SourceDefinitionCommand = class {
  constructor(service) {
    this.service = service;
    this.id = "tsserver.goToSourceDefinition";
  }
  async execute() {
    const client = await this.service.getClientHost();
    if (client.serviceClient.apiVersion.lt(_SourceDefinitionCommand.minVersion)) {
      import_coc3.window.showErrorMessage("Go to Source Definition failed. Requires TypeScript 4.7+.");
      return;
    }
    const { document, position } = await import_coc3.workspace.getCurrentState();
    if (client.serviceClient.modeIds.indexOf(document.languageId) == -1) {
      import_coc3.window.showErrorMessage("Go to Source Definition failed. Unsupported file type.");
      return;
    }
    const openedFiledPath = client.serviceClient.toOpenedFilePath(document.uri);
    if (!openedFiledPath) {
      import_coc3.window.showErrorMessage("Go to Source Definition failed. Unknown file type.");
      return;
    }
    await import_coc3.window.withProgress({ title: "Finding source definitions" }, async (_progress, token) => {
      const args = Position2.toFileLocationRequestArgs(openedFiledPath, position);
      const response = await client.serviceClient.execute("findSourceDefinition", args, token);
      if (response.type === "response" && response.body) {
        const locations = response.body.map((reference) => Location2.fromTextSpan(client.serviceClient.toResource(reference.file), reference));
        if (locations.length) {
          if (locations.length === 1) {
            await import_coc3.workspace.jumpTo(locations[0].uri, locations[0].range.start);
          } else {
            import_coc3.commands.executeCommand("editor.action.showReferences", document.uri, position, locations);
          }
          return;
        }
      }
      import_coc3.window.showErrorMessage("No source definitions found.");
    });
  }
};
var SourceDefinitionCommand = _SourceDefinitionCommand;
SourceDefinitionCommand.context = "tsSupportsSourceDefinition";
SourceDefinitionCommand.minVersion = API.v470;
function registCommand(cmd) {
  let { id, execute } = cmd;
  return import_coc3.commands.registerCommand(id, execute, cmd);
}

// src/server/watchBuild.ts
var import_coc4 = require("coc.nvim");
var import_path4 = __toESM(require("path"));
var import_fs3 = __toESM(require("fs"));
var countRegex = /Found\s+(\d+)\s+error/;
var errorRegex = /^(.+)\((\d+),(\d+)\):\s(\w+)\sTS(\d+):\s*(.+)$/;
var _WatchProject = class {
  constructor(service, logger) {
    this.service = service;
    this.logger = logger;
    this.disposables = [];
    this.statusItem = import_coc4.window.createStatusBarItem(1, { progress: true });
    this.disposables.push(this.statusItem);
    let task = this.task = import_coc4.workspace.createTask("TSC");
    task.onExit((code) => {
      if (code != 0) {
        import_coc4.window.showWarningMessage(`TSC exit with code ${code}`);
      }
      this.onStop();
    });
    task.onStdout((lines) => {
      for (let line of lines) {
        this.onLine(line);
      }
    });
    task.onStderr((lines) => {
      import_coc4.window.showErrorMessage(`TSC error: ` + lines.join("\n"));
    });
    this.disposables.push(import_coc4.Disposable.create(() => {
      task.dispose();
    }));
    this.check().catch((_e) => {
    });
  }
  async execute() {
    let opts = this.options = await this.getOptions();
    if (!opts)
      return;
    await this.start(opts);
  }
  async check() {
    let running = await this.task.running;
    if (running) {
      this.options = await this.getOptions();
      this.statusItem.isProgress = false;
      this.statusItem.text = "?";
      this.statusItem.show();
    } else {
      this.onStop();
    }
  }
  async start(options) {
    await this.task.start(options);
  }
  onStop() {
    this.statusItem.hide();
  }
  onStart() {
    this.statusItem.text = "compiling";
    this.statusItem.isProgress = true;
    this.statusItem.show();
    import_coc4.workspace.nvim.call("setqflist", [[]], true);
  }
  onLine(line) {
    if (countRegex.test(line)) {
      let ms = line.match(countRegex);
      this.statusItem.text = ms[1] == "0" ? "\u2713" : "\u2717";
      this.statusItem.isProgress = false;
    } else if (_WatchProject.startTexts.findIndex((s) => line.indexOf(s) !== -1) != -1) {
      this.onStart();
    } else {
      let ms = line.match(errorRegex);
      if (!ms)
        return;
      let fullpath = import_path4.default.join(this.options.cwd, ms[1]);
      let uri = import_coc4.Uri.file(fullpath).toString();
      let doc = import_coc4.workspace.getDocument(uri);
      let bufnr = doc ? doc.bufnr : null;
      let item = {
        filename: fullpath,
        lnum: Number(ms[2]),
        col: Number(ms[3]),
        text: `[tsc ${ms[5]}] ${ms[6]}`,
        type: /error/i.test(ms[4]) ? "E" : "W"
      };
      if (bufnr)
        item.bufnr = bufnr;
      import_coc4.workspace.nvim.call("setqflist", [[item], "a"]);
    }
  }
  async getOptions() {
    let doc = await import_coc4.workspace.document;
    let resource = import_coc4.Uri.parse(doc.uri);
    const client = await this.service.getClientHost();
    let { serviceClient } = client;
    const file2 = serviceClient.toPath(resource.toString());
    if (!file2) {
      import_coc4.window.showWarningMessage("Could not determine TypeScript or JavaScript project. Current file should be javascript or typescript file.");
      return;
    }
    let version;
    const rootPath = serviceClient.getWorkspaceRootForResource(resource);
    if (!rootPath) {
      import_coc4.window.showWarningMessage(`Could not determine workspace folder for current file ${doc.uri}.`);
      return;
    }
    version = serviceClient.versionProvider.getLocalVersionFromFolder(rootPath);
    if (!version)
      version = serviceClient.versionProvider.getLocalVersion();
    if (!version)
      version = serviceClient.versionManager.currentVersion;
    if (!version) {
      import_coc4.window.showErrorMessage(`Unable to resolve typescript module from workspace folders`);
      return;
    }
    let tsconfigPath;
    let configFileName = await resolveConfigFile(serviceClient, file2);
    if (configFileName) {
      tsconfigPath = import_path4.default.relative(rootPath, configFileName);
    } else {
      this.logger.warn(`Unable to resolve config file from ${file2}, try configuration`);
      let inspect = import_coc4.workspace.getConfiguration("tsserver", doc.uri).inspect("tsconfigPath");
      let value = inspect ? inspect.workspaceFolderValue || inspect.workspaceValue || "tsconfig.json" : "tsconfig.json";
      let fullpath = import_path4.default.join(rootPath, value);
      if (import_fs3.default.existsSync(fullpath)) {
        tsconfigPath = value;
      } else {
        import_coc4.window.showWarningMessage(`Config file ${fullpath} not exists.`);
        return;
      }
    }
    return {
      cmd: version.tscPath,
      args: ["-p", tsconfigPath, "--watch", "true", "--pretty", "false"],
      cwd: rootPath
    };
  }
  dispose() {
    (0, import_coc4.disposeAll)(this.disposables);
  }
};
var WatchProject = _WatchProject;
WatchProject.id = "tsserver.watchBuild";
WatchProject.startTexts = ["Starting compilation in watch mode", "Starting incremental compilation"];
async function resolveConfigFile(client, file2) {
  let res;
  try {
    res = await client.execute("projectInfo", { file: file2, needFileNameList: false }, import_coc4.CancellationToken.None);
  } catch {
  }
  if ((res == null ? void 0 : res.type) !== "response" || !res.body) {
    return void 0;
  }
  let { configFileName } = res.body;
  if (configFileName && configFileName.startsWith("/dev/null"))
    return void 0;
  return configFileName;
}

// src/server/typescriptServiceClientHost.ts
var import_coc47 = require("coc.nvim");

// src/utils/arrays.ts
function equals(one, other, itemEquals = (a, b) => a === b) {
  if (one.length !== other.length) {
    return false;
  }
  for (let i = 0, len = one.length; i < len; i++) {
    if (!itemEquals(one[i], other[i])) {
      return false;
    }
  }
  return true;
}
function flatten(arr) {
  return [].concat.apply([], arr);
}

// src/server/features/fileConfigurationManager.ts
var import_coc5 = require("coc.nvim");
var import_path5 = __toESM(require("path"));
init_api();

// src/server/utils/arrays.ts
var empty = Object.freeze([]);
function equals2(a, b, itemEquals = (a2, b2) => a2 === b2) {
  if (a === b) {
    return true;
  }
  if (a.length !== b.length) {
    return false;
  }
  return a.every((x, i) => itemEquals(x, b[i]));
}

// src/server/utils/objects.ts
function equals3(one, other) {
  if (one === other) {
    return true;
  }
  if (one === null || one === void 0 || other === null || other === void 0) {
    return false;
  }
  if (typeof one !== typeof other) {
    return false;
  }
  if (typeof one !== "object") {
    return false;
  }
  if (Array.isArray(one) !== Array.isArray(other)) {
    return false;
  }
  if (Array.isArray(one)) {
    return equals2(one, other, equals3);
  } else {
    const oneKeys = [];
    for (const key in one) {
      oneKeys.push(key);
    }
    oneKeys.sort();
    const otherKeys = [];
    for (const key in other) {
      otherKeys.push(key);
    }
    otherKeys.sort();
    if (!equals2(oneKeys, otherKeys)) {
      return false;
    }
    return oneKeys.every((key) => equals3(one[key], other[key]));
  }
}

// src/server/features/fileConfigurationManager.ts
var FileConfigurationManager = class {
  constructor(client) {
    this.client = client;
    this.cachedMap = /* @__PURE__ */ new Map();
    this.disposables = [];
    import_coc5.workspace.onDidCloseTextDocument((textDocument) => {
      this.cachedMap.delete(textDocument.uri);
    }, void 0, this.disposables);
  }
  async ensureConfigurationOptions(document, insertSpaces, tabSize, token) {
    const file2 = this.client.toPath(document.uri);
    let options = {
      tabSize,
      insertSpaces
    };
    let cachedOption = this.cachedMap.get(document.uri);
    const currentOptions = this.getFileOptions(options, document);
    if (cachedOption && equals3(cachedOption.formatOptions, currentOptions.formatOptions) && equals3(cachedOption.preferences, currentOptions.preferences))
      return;
    this.cachedMap.set(document.uri, currentOptions);
    const args = {
      file: file2,
      ...currentOptions
    };
    try {
      const response = await this.client.execute("configure", args, token);
      if (response.type !== "response") {
        this.cachedMap.delete(document.uri);
      }
    } catch (_e) {
      this.cachedMap.delete(document.uri);
    }
  }
  getFormattingOptions(document) {
    const editor = import_coc5.window.visibleTextEditors.find((editor2) => editor2.document.uri === document.uri);
    return editor ? {
      tabSize: editor.options.tabSize,
      insertSpaces: editor.options.insertSpaces
    } : void 0;
  }
  async setGlobalConfigurationFromDocument(document, token) {
    const formattingOptions = this.getFormattingOptions(document);
    if (!formattingOptions)
      return;
    const args = {
      file: void 0,
      ...this.getFileOptions(formattingOptions, document)
    };
    await this.client.execute("configure", args, token);
  }
  async ensureConfigurationForDocument(document, token) {
    let opts;
    let cached = this.cachedMap.get(document.uri);
    if (cached) {
      opts = { insertSpaces: cached.formatOptions.convertTabsToSpaces, tabSize: cached.formatOptions.tabSize };
    } else {
      opts = await import_coc5.workspace.getFormatOptions(document.uri);
    }
    return this.ensureConfigurationOptions(document, opts.insertSpaces, opts.tabSize, token);
  }
  reset() {
    this.cachedMap.clear();
  }
  getLanguageConfiguration(languageId) {
    return import_coc5.workspace.getConfiguration(languageId);
  }
  isTypeScriptDocument(languageId) {
    return languageId.startsWith("typescript");
  }
  formatEnabled(document) {
    let { languageId } = document;
    let language2 = languageId.startsWith("typescript") ? "typescript" : "javascript";
    const config = import_coc5.workspace.getConfiguration(`${language2}.format`, document);
    return config.get("enable");
  }
  getFileOptions(options, document) {
    const lang = this.isTypeScriptDocument(document.languageId) ? "typescript" : "javascript";
    return {
      formatOptions: this.getFormatOptions(options, lang, document.uri),
      preferences: this.getPreferences(lang, document)
    };
  }
  getFormatOptions(options, language2, uri) {
    const config = import_coc5.workspace.getConfiguration(`${language2}.format`, uri);
    return {
      tabSize: options.tabSize,
      indentSize: options.tabSize,
      convertTabsToSpaces: options.insertSpaces,
      newLineCharacter: "\n",
      insertSpaceAfterCommaDelimiter: config.get("insertSpaceAfterCommaDelimiter"),
      insertSpaceAfterConstructor: config.get("insertSpaceAfterConstructor"),
      insertSpaceAfterSemicolonInForStatements: config.get("insertSpaceAfterSemicolonInForStatements"),
      insertSpaceBeforeAndAfterBinaryOperators: config.get("insertSpaceBeforeAndAfterBinaryOperators"),
      insertSpaceAfterKeywordsInControlFlowStatements: config.get("insertSpaceAfterKeywordsInControlFlowStatements"),
      insertSpaceAfterFunctionKeywordForAnonymousFunctions: config.get("insertSpaceAfterFunctionKeywordForAnonymousFunctions"),
      insertSpaceBeforeFunctionParenthesis: config.get("insertSpaceBeforeFunctionParenthesis"),
      insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: config.get("insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis"),
      insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: config.get("insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets"),
      insertSpaceAfterOpeningAndBeforeClosingEmptyBraces: config.get("insertSpaceAfterOpeningAndBeforeClosingEmptyBraces"),
      insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces: config.get("insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces"),
      insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: config.get("insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces"),
      insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces: config.get("insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces"),
      insertSpaceAfterTypeAssertion: config.get("insertSpaceAfterTypeAssertion"),
      placeOpenBraceOnNewLineForFunctions: config.get("placeOpenBraceOnNewLineForFunctions"),
      placeOpenBraceOnNewLineForControlBlocks: config.get("placeOpenBraceOnNewLineForControlBlocks"),
      semicolons: config.get("semicolons", void 0)
    };
  }
  getPreferences(language2, doc) {
    var _a;
    if (this.client.apiVersion.lt(API.v290)) {
      return {};
    }
    let { uri } = doc;
    const config = import_coc5.workspace.getConfiguration(language2, doc);
    const preferencesConfig = import_coc5.workspace.getConfiguration(`${language2}.preferences`, doc);
    const preferences = {
      ...config.get("unstable"),
      quotePreference: this.getQuoteStyle(preferencesConfig),
      importModuleSpecifierPreference: getImportModuleSpecifier(preferencesConfig),
      importModuleSpecifierEnding: getImportModuleSpecifierEndingPreference(preferencesConfig),
      jsxAttributeCompletionStyle: getJsxAttributeCompletionStyle(preferencesConfig),
      allowTextChangesInNewFiles: uri.startsWith("file:"),
      allowRenameOfImportPath: true,
      provideRefactorNotApplicableReason: true,
      providePrefixAndSuffixTextForRename: preferencesConfig.get("renameShorthandProperties", true) === false ? false : preferencesConfig.get("useAliasesForRenames", true),
      includeAutomaticOptionalChainCompletions: config.get("suggest.includeAutomaticOptionalChainCompletions", true),
      generateReturnInDocTemplate: config.get("suggest.jsdoc.generateReturns", true),
      includeCompletionsForImportStatements: config.get("suggest.includeCompletionsForImportStatements", true),
      includeCompletionsWithSnippetText: config.get("suggest.includeCompletionsWithSnippetText", true),
      includeCompletionsWithClassMemberSnippets: config.get("suggest.classMemberSnippets.enabled", true),
      includeCompletionsWithObjectLiteralMethodSnippets: config.get("suggest.objectLiteralMethodSnippets.enabled", true),
      autoImportFileExcludePatterns: this.getAutoImportFileExcludePatternsPreference(preferencesConfig, (_a = import_coc5.workspace.getWorkspaceFolder(uri)) == null ? void 0 : _a.uri),
      useLabelDetailsInCompletionEntries: true,
      allowIncompleteCompletions: true,
      displayPartsForJSDoc: true,
      ...getInlayHintsPreferences(config)
    };
    return preferences;
  }
  getQuoteStyle(config) {
    let quoteStyle = config.get("quoteStyle", "auto");
    if (this.client.apiVersion.gte(API.v333) || quoteStyle != "auto")
      return quoteStyle;
    return "single";
  }
  getAutoImportFileExcludePatternsPreference(config, workspaceFolder) {
    var _a;
    let folder = workspaceFolder ? import_coc5.Uri.parse(workspaceFolder).fsPath : import_coc5.workspace.root;
    return workspaceFolder && ((_a = config.get("autoImportFileExcludePatterns")) == null ? void 0 : _a.map((p) => {
      const slashNormalized = p.replace(/\\/g, "/");
      const isRelative = /^\.\.?($|\/)/.test(slashNormalized);
      return import_path5.default.isAbsolute(p) ? p : p.startsWith("*") ? "/" + slashNormalized : isRelative ? import_path5.default.join(folder, p) : "/**/" + slashNormalized;
    }));
  }
  dispose() {
    (0, import_coc5.disposeAll)(this.disposables);
  }
};
function getImportModuleSpecifier(config) {
  let val = config.get("importModuleSpecifier");
  switch (val) {
    case "project-relative":
      return "project-relative";
    case "relative":
      return "relative";
    case "non-relative":
      return "non-relative";
    default:
      return void 0;
  }
}
function getImportModuleSpecifierEndingPreference(config) {
  switch (config.get("importModuleSpecifierEnding")) {
    case "minimal":
      return "minimal";
    case "index":
      return "index";
    case "js":
      return "js";
    default:
      return "auto";
  }
}
function getJsxAttributeCompletionStyle(config) {
  switch (config.get("jsxAttributeCompletionStyle")) {
    case "braces":
      return "braces";
    case "none":
      return "none";
    default:
      return "auto";
  }
}
var InlayHintSettingNames = class {
};
InlayHintSettingNames.parameterNamesSuppressWhenArgumentMatchesName = "inlayHints.parameterNames.suppressWhenArgumentMatchesName";
InlayHintSettingNames.parameterNamesEnabled = "inlayHints.parameterTypes.enabled";
InlayHintSettingNames.variableTypesEnabled = "inlayHints.variableTypes.enabled";
InlayHintSettingNames.propertyDeclarationTypesEnabled = "inlayHints.propertyDeclarationTypes.enabled";
InlayHintSettingNames.functionLikeReturnTypesEnabled = "inlayHints.functionLikeReturnTypes.enabled";
InlayHintSettingNames.variableTypesSuppressWhenTypeMatchesName = "inlayHints.variableTypes.suppressWhenTypeMatchesName";
InlayHintSettingNames.enumMemberValuesEnabled = "inlayHints.enumMemberValues.enabled";
function getInlayHintsPreferences(config) {
  return {
    includeInlayParameterNameHints: getInlayParameterNameHintsPreference(config),
    includeInlayParameterNameHintsWhenArgumentMatchesName: !config.get(InlayHintSettingNames.parameterNamesSuppressWhenArgumentMatchesName, true),
    includeInlayVariableTypeHintsWhenTypeMatchesName: !config.get(InlayHintSettingNames.variableTypesSuppressWhenTypeMatchesName, true),
    includeInlayFunctionParameterTypeHints: config.get(InlayHintSettingNames.parameterNamesEnabled, false),
    includeInlayVariableTypeHints: config.get(InlayHintSettingNames.variableTypesEnabled, false),
    includeInlayPropertyDeclarationTypeHints: config.get(InlayHintSettingNames.propertyDeclarationTypesEnabled, false),
    includeInlayFunctionLikeReturnTypeHints: config.get(InlayHintSettingNames.functionLikeReturnTypesEnabled, false),
    includeInlayEnumMemberValueHints: config.get(InlayHintSettingNames.enumMemberValuesEnabled, false)
  };
}
function getInlayParameterNameHintsPreference(config) {
  switch (config.get("inlayHints.parameterNames.enabled")) {
    case "none":
      return "none";
    case "literals":
      return "literals";
    case "all":
      return "all";
    default:
      return void 0;
  }
}

// src/server/features/workspaceSymbols.ts
var import_coc6 = require("coc.nvim");
var import_vscode_languageserver_protocol = __toESM(require_main2());
init_protocol_const();
init_api();
init_typeConverters();
function parseKindModifier(kindModifiers) {
  return new Set(kindModifiers.split(/,|\s+/g));
}
function getSymbolKind(item) {
  switch (item.kind) {
    case "method":
      return import_vscode_languageserver_protocol.SymbolKind.Method;
    case "enum":
      return import_vscode_languageserver_protocol.SymbolKind.Enum;
    case "function":
      return import_vscode_languageserver_protocol.SymbolKind.Function;
    case "class":
      return import_vscode_languageserver_protocol.SymbolKind.Class;
    case "interface":
      return import_vscode_languageserver_protocol.SymbolKind.Interface;
    case "var":
      return import_vscode_languageserver_protocol.SymbolKind.Variable;
    default:
      return import_vscode_languageserver_protocol.SymbolKind.Variable;
  }
}
var TypeScriptWorkspaceSymbolProvider = class {
  constructor(client, languageIds) {
    this.client = client;
    this.languageIds = languageIds;
  }
  async provideWorkspaceSymbols(search, token) {
    let filepath;
    if (this.searchAllOpenProjects) {
      filepath = void 0;
    } else {
      let uri = this.getUri();
      filepath = uri ? this.client.toPath(uri) : void 0;
      if (!filepath && this.client.apiVersion.lt(API.v390)) {
        return [];
      }
    }
    const args = {
      file: filepath,
      searchValue: search,
      maxResultCount: 256
    };
    const response = await this.client.execute("navto", args, token);
    if (response.type !== "response" || response.body == null)
      return [];
    const result = [];
    for (const item of response.body) {
      if (!item.containerName && item.kind === "alias") {
        continue;
      }
      const label = TypeScriptWorkspaceSymbolProvider.getLabel(item);
      const range = {
        start: Position2.fromLocation(item.start),
        end: Position2.fromLocation(item.end)
      };
      const symbolInfo = import_vscode_languageserver_protocol.SymbolInformation.create(
        label,
        getSymbolKind(item),
        range,
        this.client.toResource(item.file)
      );
      const kindModifiers = item.kindModifiers ? parseKindModifier(item.kindModifiers) : void 0;
      if (kindModifiers == null ? void 0 : kindModifiers.has(KindModifiers.deprecated)) {
        symbolInfo.tags = [import_vscode_languageserver_protocol.SymbolTag.Deprecated];
      }
      result.push(symbolInfo);
    }
    return result;
  }
  static getLabel(item) {
    let label = item.name;
    if (item.kind === "method" || item.kind === "function") {
      label += "()";
    }
    return label;
  }
  getUri() {
    const documents = import_coc6.workspace.textDocuments;
    for (const document of documents) {
      if (this.languageIds.indexOf(document.languageId) >= 0) {
        return document.uri;
      }
    }
    return void 0;
  }
  get searchAllOpenProjects() {
    return this.client.apiVersion.gte(API.v390) && import_coc6.workspace.getConfiguration("typescript").get("workspaceSymbols.scope", "allOpenProjects") === "allOpenProjects";
  }
};

// src/server/languageProvider.ts
var import_coc29 = require("coc.nvim");
var import_path8 = __toESM(require("path"));

// src/utils/fileSchemes.ts
var file = "file";
var untitled = "untitled";
var git = "git";
var fugitive = "fugitive";
var vsls = "vsls";
var walkThroughSnippet = "walkThroughSnippet";
var vscodeNotebookCell = "vscode-notebook-cell";
var memFs = "memfs";
var semanticSupportedSchemes = [
  file,
  untitled,
  walkThroughSnippet
];
var disabledSchemes = /* @__PURE__ */ new Set([
  git,
  fugitive,
  vsls
]);

// src/server/features/callHierarchy.ts
var import_coc7 = require("coc.nvim");
var import_path6 = __toESM(require("path"));
var import_vscode_languageserver_protocol2 = __toESM(require_main2());
init_protocol_const();
init_api();
init_typeConverters();
var TypeScriptCallHierarchySupport = class {
  constructor(client) {
    this.client = client;
  }
  async prepareCallHierarchy(document, position, token) {
    const filepath = this.client.toOpenedFilePath(document.uri);
    if (!filepath) {
      return void 0;
    }
    const args = Position2.toFileLocationRequestArgs(filepath, position);
    const response = await this.client.execute("prepareCallHierarchy", args, token);
    if (response.type !== "response" || !response.body) {
      return void 0;
    }
    return Array.isArray(response.body) ? response.body.map(fromProtocolCallHierarchyItem) : fromProtocolCallHierarchyItem(response.body);
  }
  async provideCallHierarchyIncomingCalls(item, token) {
    const filepath = this.client.toPath(item.uri);
    if (!filepath) {
      return void 0;
    }
    const args = Position2.toFileLocationRequestArgs(filepath, item.selectionRange.start);
    const response = await this.client.execute("provideCallHierarchyIncomingCalls", args, token);
    if (response.type !== "response" || !response.body) {
      return void 0;
    }
    return response.body.map(fromProtocolCallHierarchyIncomingCall);
  }
  async provideCallHierarchyOutgoingCalls(item, token) {
    const filepath = this.client.toPath(item.uri);
    if (!filepath) {
      return void 0;
    }
    const args = Position2.toFileLocationRequestArgs(filepath, item.selectionRange.start);
    const response = await this.client.execute("provideCallHierarchyOutgoingCalls", args, token);
    if (response.type !== "response" || !response.body) {
      return void 0;
    }
    return response.body.map(fromProtocolCallHierarchyOutgoingCall);
  }
};
TypeScriptCallHierarchySupport.minVersion = API.v380;
function isSourceFileItem(item) {
  return item.kind === Kind.script || item.kind === Kind.module && item.selectionSpan.start.line === 1 && item.selectionSpan.start.offset === 1;
}
function parseKindModifier2(kindModifiers) {
  return new Set(kindModifiers.split(/,|\s+/g));
}
function fromProtocolCallHierarchyItem(item) {
  const useFileName = isSourceFileItem(item);
  const name = useFileName ? import_path6.default.basename(item.file) : item.name;
  const detail = useFileName ? import_path6.default.relative(import_coc7.workspace.cwd, import_path6.default.dirname(item.file)) : item.containerName ?? "";
  const result = {
    name,
    detail,
    uri: import_coc7.Uri.file(item.file).toString(),
    kind: SymbolKind3.fromProtocolScriptElementKind(item.kind),
    range: Range3.fromTextSpan(item.span),
    selectionRange: Range3.fromTextSpan(item.selectionSpan)
  };
  const kindModifiers = item.kindModifiers ? parseKindModifier2(item.kindModifiers) : void 0;
  if (kindModifiers == null ? void 0 : kindModifiers.has(KindModifiers.deprecated)) {
    result.tags = [import_vscode_languageserver_protocol2.SymbolTag.Deprecated];
  }
  return result;
}
function fromProtocolCallHierarchyIncomingCall(item) {
  return {
    from: fromProtocolCallHierarchyItem(item.from),
    fromRanges: item.fromSpans.map(Range3.fromTextSpan)
  };
}
function fromProtocolCallHierarchyOutgoingCall(item) {
  return {
    to: fromProtocolCallHierarchyItem(item.to),
    fromRanges: item.fromSpans.map(Range3.fromTextSpan)
  };
}

// src/server/features/completionItemProvider.ts
var import_coc11 = require("coc.nvim");
var import_vscode_languageserver_protocol5 = __toESM(require_main2());
init_protocol_const();
init_api();

// src/server/utils/codeAction.ts
var import_coc8 = require("coc.nvim");
init_typeConverters();
function getEditForCodeAction(client, action) {
  return action.changes && action.changes.length ? WorkspaceEdit2.fromFileCodeEdits(client, action.changes) : void 0;
}
async function applyCodeAction(client, action) {
  const workspaceEdit = getEditForCodeAction(client, action);
  if (workspaceEdit) {
    if (!await import_coc8.workspace.applyEdit(workspaceEdit)) {
      return false;
    }
  }
  return applyCodeActionCommands(client, action);
}
async function applyCodeActionCommands(client, action) {
  if (action.commands && action.commands.length) {
    for (const command of action.commands) {
      const response = await client.execute("applyCodeActionCommand", { command }, import_coc8.CancellationToken.None);
      if (!response || response.type != "response" || !response.body) {
        return false;
      }
    }
  }
  return true;
}

// src/server/utils/completionItem.ts
var import_coc9 = require("coc.nvim");
var import_vscode_languageserver_protocol3 = __toESM(require_main2());
init_protocol_const();
init_typeConverters();
function convertCompletionEntry(tsEntry, uri, position, context) {
  let label = tsEntry.name;
  let sortText = tsEntry.sortText;
  let preselect = false;
  let detail;
  let isSnippet = false;
  if (tsEntry.isRecommended) {
    preselect = true;
  }
  if (tsEntry.source && tsEntry.hasAction) {
    sortText = "\uFFFF" + sortText;
  } else {
    sortText = tsEntry.sortText;
  }
  let kind = convertKind(tsEntry.kind);
  let insertTextFormat = context.enableCallCompletions && (kind === import_coc9.CompletionItemKind.Function || kind === import_coc9.CompletionItemKind.Method) ? import_coc9.InsertTextFormat.Snippet : import_coc9.InsertTextFormat.PlainText;
  let insertText = tsEntry.insertText;
  let commitCharacters = getCommitCharacters(tsEntry, context);
  let tags;
  if (tsEntry.isImportStatementCompletion) {
    insertText = label;
    insertTextFormat = import_coc9.InsertTextFormat.Snippet;
  }
  if (tsEntry.isSnippet) {
    isSnippet = true;
    insertTextFormat = import_coc9.InsertTextFormat.Snippet;
  }
  let textEdit = null;
  if (tsEntry.replacementSpan) {
    let range = Range3.fromTextSpan(tsEntry.replacementSpan);
    if (range.start.line != range.end.line) {
      range = import_coc9.Range.create(range.start, import_coc9.Position.create(range.start.line, context.line.length));
    }
    textEdit = {
      insert: range,
      replace: range,
      newText: tsEntry.insertText ?? label
    };
  } else {
    if (context.isMemberCompletion && context.line.endsWith("#")) {
      let len = context.line.length;
      let range = import_coc9.Range.create(position.line, len - 1, position.line, len);
      textEdit = import_coc9.TextEdit.replace(range, tsEntry.insertText ?? label);
    }
  }
  if (tsEntry.kindModifiers) {
    const kindModifiers = new Set(tsEntry.kindModifiers.split(/,|\s+/g));
    if (kindModifiers.has(KindModifiers.optional)) {
      insertText = insertText ?? label;
      label += "?";
    }
    if (kindModifiers.has(KindModifiers.deprecated)) {
      tags = [import_vscode_languageserver_protocol3.CompletionItemTag.Deprecated];
    }
    if (kindModifiers.has(KindModifiers.color)) {
      kind = import_coc9.CompletionItemKind.Color;
    }
    if (tsEntry.kind === Kind.script) {
      for (const extModifier of KindModifiers.fileExtensionKindModifiers) {
        if (kindModifiers.has(extModifier)) {
          if (tsEntry.name.toLowerCase().endsWith(extModifier)) {
            detail = tsEntry.name;
          } else {
            detail = tsEntry.name + extModifier;
          }
          break;
        }
      }
    }
  }
  return {
    label,
    insertText,
    textEdit,
    kind,
    tags,
    preselect,
    insertTextFormat,
    sortText,
    commitCharacters,
    detail,
    data: {
      uri,
      position,
      isSnippet,
      name: tsEntry.name,
      data: tsEntry.data,
      source: tsEntry.source || ""
    }
  };
}
function convertKind(kind) {
  switch (kind) {
    case Kind.primitiveType:
    case Kind.keyword:
      return import_coc9.CompletionItemKind.Keyword;
    case Kind.const:
      return import_coc9.CompletionItemKind.Constant;
    case Kind.let:
    case Kind.variable:
    case Kind.localVariable:
    case Kind.alias:
      return import_coc9.CompletionItemKind.Variable;
    case Kind.memberVariable:
    case Kind.memberGetAccessor:
    case Kind.memberSetAccessor:
      return import_coc9.CompletionItemKind.Field;
    case Kind.function:
    case Kind.localFunction:
      return import_coc9.CompletionItemKind.Function;
    case Kind.method:
    case Kind.constructSignature:
    case Kind.callSignature:
    case Kind.indexSignature:
      return import_coc9.CompletionItemKind.Method;
    case Kind.enum:
      return import_coc9.CompletionItemKind.Enum;
    case Kind.module:
    case Kind.externalModuleName:
      return import_coc9.CompletionItemKind.Module;
    case Kind.class:
    case Kind.type:
      return import_coc9.CompletionItemKind.Class;
    case Kind.interface:
      return import_coc9.CompletionItemKind.Interface;
    case Kind.warning:
    case Kind.script:
      return import_coc9.CompletionItemKind.File;
    case Kind.directory:
      return import_coc9.CompletionItemKind.Folder;
  }
  return import_coc9.CompletionItemKind.Variable;
}
function getCommitCharacters(tsEntry, context) {
  if (context.isNewIdentifierLocation || !context.isInValidCommitCharacterContext) {
    return void 0;
  }
  const commitCharacters = [];
  switch (tsEntry.kind) {
    case Kind.memberGetAccessor:
    case Kind.memberSetAccessor:
    case Kind.constructSignature:
    case Kind.callSignature:
    case Kind.indexSignature:
    case Kind.enum:
    case Kind.interface:
      commitCharacters.push(".", ";");
      break;
    case Kind.module:
    case Kind.alias:
    case Kind.const:
    case Kind.let:
    case Kind.variable:
    case Kind.localVariable:
    case Kind.memberVariable:
    case Kind.class:
    case Kind.function:
    case Kind.method:
    case Kind.keyword:
    case Kind.parameter:
      commitCharacters.push(".", ",", ";");
      if (context.enableCallCompletions) {
        commitCharacters.push("(");
      }
      break;
  }
  return commitCharacters.length === 0 ? void 0 : commitCharacters;
}
function getParameterListParts(displayParts) {
  const parts = [];
  let isInMethod = false;
  let hasOptionalParameters = false;
  let parenCount = 0;
  let braceCount = 0;
  outer:
    for (let i = 0; i < displayParts.length; ++i) {
      const part = displayParts[i];
      switch (part.kind) {
        case DisplayPartKind.methodName:
        case DisplayPartKind.functionName:
        case DisplayPartKind.text:
        case DisplayPartKind.propertyName:
          if (parenCount === 0 && braceCount === 0) {
            isInMethod = true;
          }
          break;
        case DisplayPartKind.parameterName:
          if (parenCount === 1 && braceCount === 0 && isInMethod) {
            const next = displayParts[i + 1];
            const nameIsFollowedByOptionalIndicator = next && next.text === "?";
            const nameIsThis = part.text === "this";
            if (!nameIsFollowedByOptionalIndicator && !nameIsThis) {
              parts.push(part);
            }
            hasOptionalParameters = hasOptionalParameters || nameIsFollowedByOptionalIndicator;
          }
          break;
        case DisplayPartKind.punctuation:
          if (part.text === "(") {
            ++parenCount;
          } else if (part.text === ")") {
            --parenCount;
            if (parenCount <= 0 && isInMethod) {
              break outer;
            }
          } else if (part.text === "..." && parenCount === 1) {
            hasOptionalParameters = true;
            break outer;
          } else if (part.text === "{") {
            ++braceCount;
          } else if (part.text === "}") {
            --braceCount;
          }
          break;
      }
    }
  return { hasOptionalParameters, parts };
}

// src/server/utils/previewer.ts
var import_vscode_languageserver_protocol4 = __toESM(require_main2());
var import_coc10 = require("coc.nvim");
function toResource(filepath) {
  return import_coc10.Uri.file(filepath);
}
function replaceLinks(text) {
  return text.replace(/\{@(link|linkplain|linkcode) (https?:\/\/[^ |}]+?)(?:[| ]([^{}\n]+?))?\}/gi, (_, tag, link, text2) => {
    switch (tag) {
      case "linkcode":
        return `[\`${text2 ? text2.trim() : link}\`](${link})`;
      default:
        return `[${text2 ? text2.trim() : link}](${link})`;
    }
  });
}
function processInlineTags(text) {
  return replaceLinks(text);
}
function getTagBodyText(tag) {
  if (!tag.text) {
    return void 0;
  }
  function makeCodeblock(text2) {
    if (text2.match(/^\s*[~`]{3}/g)) {
      return text2;
    }
    return "```\n" + text2 + "\n```";
  }
  const text = convertLinkTags(tag.text);
  switch (tag.name) {
    case "example":
      const captionTagMatches = text.match(/<caption>(.*?)<\/caption>\s*(\r\n|\n)/);
      if (captionTagMatches && captionTagMatches.index === 0) {
        return captionTagMatches[1] + "\n\n" + makeCodeblock(text.substr(captionTagMatches[0].length));
      } else {
        return makeCodeblock(text);
      }
    case "author":
      const emailMatch = text.match(/(.+)\s<([-.\w]+@[-.\w]+)>/);
      if (emailMatch === null) {
        return text;
      } else {
        return `${emailMatch[1]} ${emailMatch[2]}`;
      }
    case "default":
      return makeCodeblock(text);
  }
  return processInlineTags(text);
}
function getTagDocumentation(tag) {
  switch (tag.name) {
    case "augments":
    case "extends":
    case "param":
    case "template":
      const body = convertLinkTags(tag.text).split(/^(\S+)\s*-?\s*/);
      if ((body == null ? void 0 : body.length) === 3) {
        const param = body[1];
        const doc = body[2];
        const label2 = `*@${tag.name}* \`${param}\``;
        if (!doc) {
          return label2;
        }
        return label2 + (doc.match(/\r\n|\n/g) ? "  \n" + processInlineTags(doc) : ` \u2014 ${processInlineTags(doc)}`);
      }
  }
  const label = `*@${tag.name}*`;
  const text = getTagBodyText(tag);
  if (!text) {
    return label;
  }
  return label + (text.match(/\r\n|\n/g) ? "  \n" + text : ` \u2014 ${text}`);
}
function tagsMarkdownPreview(tags) {
  return (tags || []).map(getTagDocumentation).join("  \n\n");
}
function markdownDocumentation(documentation, tags) {
  let out = plainWithLinks(documentation);
  const tagsPreview = tagsMarkdownPreview(tags);
  if (tagsPreview) {
    out = out + ("\n\n" + tagsPreview);
  }
  return {
    kind: import_vscode_languageserver_protocol4.MarkupKind.Markdown,
    value: out
  };
}
function plainWithLinks(parts) {
  return processInlineTags(convertLinkTags(parts));
}
function convertLinkTags(parts) {
  if (!parts) {
    return "";
  }
  if (typeof parts === "string") {
    return parts;
  }
  const out = [];
  let currentLink;
  for (const part of parts) {
    switch (part.kind) {
      case "link":
        if (currentLink) {
          const text = currentLink.text ?? currentLink.name;
          if (currentLink.target) {
            const link = toResource(currentLink.target.file).with({
              fragment: `L${currentLink.target.start.line},${currentLink.target.start.offset}`
            });
            out.push(`[${text}](${link.toString()})`);
          } else {
            if (text) {
              if (/^https?:/.test(text)) {
                const parts2 = text.split(" ");
                if (parts2.length === 1) {
                  out.push(parts2[0]);
                } else if (parts2.length > 1) {
                  out.push(`[${parts2.slice(1).join(" ")}](${parts2[0]})`);
                }
              } else {
                out.push(text);
              }
            }
          }
          currentLink = void 0;
        } else {
          currentLink = {};
        }
        break;
      case "linkName":
        if (currentLink) {
          currentLink.name = part.text;
          currentLink.target = part.target;
        }
        break;
      case "linkText":
        if (currentLink) {
          currentLink.text = part.text;
        }
        break;
      default:
        out.push(part.text);
        break;
    }
  }
  return processInlineTags(out.join(""));
}

// src/server/utils/SnippetString.ts
var SnippetString = class {
  constructor(value) {
    this._tabstop = 1;
    this.value = value || "";
  }
  static isSnippetString(thing) {
    if (thing instanceof SnippetString) {
      return true;
    }
    if (!thing) {
      return false;
    }
    return typeof thing.value === "string";
  }
  static _escape(value) {
    return value.replace(/\$|}|\\/g, "\\$&");
  }
  appendText(str) {
    this.value += SnippetString._escape(str);
    return this;
  }
  appendTabstop(n = this._tabstop++) {
    this.value += "$";
    this.value += n;
    return this;
  }
  appendPlaceholder(value, n = this._tabstop++) {
    if (typeof value === "function") {
      const nested = new SnippetString();
      nested._tabstop = this._tabstop;
      value(nested);
      this._tabstop = nested._tabstop;
      value = nested.value;
    } else {
      value = SnippetString._escape(value);
    }
    this.value += "${";
    this.value += n;
    this.value += ":";
    this.value += value;
    this.value += "}";
    return this;
  }
  appendVariable(name, defaultValue) {
    if (typeof defaultValue === "function") {
      const nested = new SnippetString();
      nested._tabstop = this._tabstop;
      defaultValue(nested);
      this._tabstop = nested._tabstop;
      defaultValue = nested.value;
    } else if (typeof defaultValue === "string") {
      defaultValue = defaultValue.replace(/\$|}/g, "\\$&");
    }
    this.value += "${";
    this.value += name;
    if (defaultValue) {
      this.value += ":";
      this.value += defaultValue;
    }
    this.value += "}";
    return this;
  }
};

// src/server/features/completionItemProvider.ts
init_typeConverters();
var _ApplyCompletionCodeActionCommand = class {
  constructor(client) {
    this.client = client;
    this.id = _ApplyCompletionCodeActionCommand.ID;
  }
  async execute(codeActions) {
    if (codeActions.length === 0) {
      return;
    }
    if (codeActions.length === 1) {
      await applyCodeAction(this.client, codeActions[0]);
      return;
    }
    const idx = await import_coc11.window.showQuickpick(codeActions.map((o) => o.description), "Select code action to apply");
    if (idx < 0)
      return;
    const action = codeActions[idx];
    await applyCodeAction(this.client, action);
    return;
  }
};
var ApplyCompletionCodeActionCommand = _ApplyCompletionCodeActionCommand;
ApplyCompletionCodeActionCommand.ID = "_typescript.applyCompletionCodeAction";
var CompletionConfiguration;
((CompletionConfiguration2) => {
  CompletionConfiguration2.useCodeSnippetsOnMethodSuggest = "suggest.completeFunctionCalls";
  CompletionConfiguration2.nameSuggestions = "suggest.names";
  CompletionConfiguration2.pathSuggestions = "suggest.paths";
  CompletionConfiguration2.autoImportSuggestions = "suggest.autoImports";
  CompletionConfiguration2.importStatementSuggestions = "suggest.importStatements";
  function getConfigurationForResource(modeId, resource) {
    const config = import_coc11.workspace.getConfiguration(modeId, resource);
    return {
      useCodeSnippetsOnMethodSuggest: config.get(CompletionConfiguration2.useCodeSnippetsOnMethodSuggest, false),
      pathSuggestions: config.get(CompletionConfiguration2.pathSuggestions, true),
      autoImportSuggestions: config.get(CompletionConfiguration2.autoImportSuggestions, true),
      nameSuggestions: config.get(CompletionConfiguration2.nameSuggestions, true),
      importStatementSuggestions: config.get(CompletionConfiguration2.importStatementSuggestions, true)
    };
  }
  CompletionConfiguration2.getConfigurationForResource = getConfigurationForResource;
})(CompletionConfiguration || (CompletionConfiguration = {}));
var TypeScriptCompletionItemProvider = class {
  constructor(client, typingsStatus, fileConfigurationManager, lang) {
    this.client = client;
    this.typingsStatus = typingsStatus;
    this.fileConfigurationManager = fileConfigurationManager;
    this.lang = lang;
    this.currentLine = "";
    if (lang === "typescript") {
      import_coc11.commands.registerCommand(ApplyCompletionCodeActionCommand.ID, async (codeActions) => {
        let cmd = new ApplyCompletionCodeActionCommand(this.client);
        await cmd.execute(codeActions);
      });
    }
  }
  async provideCompletionItems(document, position, token, context) {
    if (this.typingsStatus.isAcquiringTypings) {
      return Promise.resolve({
        isIncomplete: true,
        items: [{
          label: "Acquiring typings...",
          detail: "Acquiring typings definitions for IntelliSense."
        }]
      });
    }
    let { uri } = document;
    const file2 = this.client.toPath(document.uri);
    if (!file2)
      return null;
    let preText = document.getText({
      start: { line: position.line, character: 0 },
      end: position
    });
    const line = document.lines[position.line];
    let { triggerCharacter, option } = context;
    const completionConfiguration = CompletionConfiguration.getConfigurationForResource(this.lang, document.uri);
    if (!this.shouldTrigger(triggerCharacter, preText, option, completionConfiguration)) {
      return null;
    }
    this.currentLine = document.lines[position.line];
    await this.client.interruptGetErr(() => this.fileConfigurationManager.ensureConfigurationForDocument(document, token));
    const args = {
      ...Position2.toFileLocationRequestArgs(file2, position),
      includeExternalModuleExports: completionConfiguration.autoImportSuggestions,
      includeInsertTextCompletions: true,
      triggerCharacter: this.getTsTriggerCharacter(context)
    };
    let entries;
    let dotAccessorContext;
    let isNewIdentifierLocation = true;
    let isMemberCompletion = false;
    let isIncomplete = false;
    const isInValidCommitCharacterContext = this.isInValidCommitCharacterContext(document, position);
    if (this.client.apiVersion.gte(API.v300)) {
      try {
        const response = await this.client.interruptGetErr(() => this.client.execute("completionInfo", args, token));
        if (response.type !== "response" || !response.body) {
          return null;
        }
        isNewIdentifierLocation = response.body.isNewIdentifierLocation;
        isMemberCompletion = response.body.isMemberCompletion;
        if (isMemberCompletion) {
          const dotMatch = preText.slice(0, position.character).match(/\??\.\s*$/) || void 0;
          if (dotMatch) {
            const range = import_vscode_languageserver_protocol5.Range.create({
              line: position.line,
              character: position.character - dotMatch.length
            }, position);
            const text = document.getText(range);
            dotAccessorContext = { range, text };
          }
        }
        isIncomplete = !!response.body.isIncomplete || response.metadata && response.metadata.isIncomplete;
        entries = response.body.entries;
      } catch (e) {
        if (e.message == "No content available.") {
          return null;
        }
        throw e;
      }
    } else {
      const response = await this.client.interruptGetErr(() => this.client.execute("completions", args, token));
      if (response.type !== "response" || !response.body) {
        return null;
      }
      entries = response.body;
    }
    const completionItems = [];
    for (const element of entries) {
      if (shouldExcludeCompletionEntry(element, completionConfiguration)) {
        continue;
      }
      const item = convertCompletionEntry(
        element,
        uri,
        position,
        {
          line,
          triggerCharacter,
          isNewIdentifierLocation,
          isMemberCompletion,
          enableCallCompletions: completionConfiguration.useCodeSnippetsOnMethodSuggest,
          isInValidCommitCharacterContext,
          dotAccessorContext
        }
      );
      completionItems.push(item);
    }
    return { isIncomplete, items: completionItems };
  }
  getTsTriggerCharacter(context) {
    switch (context.triggerCharacter) {
      case "@":
        return this.client.apiVersion.gte(API.v310) && this.client.apiVersion.lt(API.v320) ? void 0 : "@";
      case "#":
        return this.client.apiVersion.lt(API.v381) ? void 0 : "#";
      case " ":
        return this.client.apiVersion.gte(API.v430) ? " " : void 0;
      case ".":
      case '"':
      case "'":
      case "`":
      case "/":
      case "<":
        return context.triggerCharacter;
    }
    return void 0;
  }
  async resolveCompletionItem(item, token) {
    if (item == null)
      return void 0;
    let { uri, position, source, name, data } = item.data;
    const filepath = this.client.toPath(uri);
    if (!filepath)
      return void 0;
    let previousInsert = item.insertText;
    const args = {
      ...Position2.toFileLocationRequestArgs(
        filepath,
        position
      ),
      entryNames: [source ? { name, source, data } : name]
    };
    let response;
    try {
      response = await this.client.interruptGetErr(() => this.client.execute("completionEntryDetails", args, token));
    } catch {
      return item;
    }
    if (response.type !== "response" || !response.body || !response.body.length) {
      return item;
    }
    const details = response.body;
    if (!details || !details.length || !details[0]) {
      return item;
    }
    const detail = details[0];
    if (!item.detail && detail.displayParts.length) {
      item.detail = plainWithLinks(detail.displayParts);
    }
    item.documentation = this.getDocumentation(detail);
    const { command, additionalTextEdits } = this.getCodeActions(detail, filepath);
    if (command)
      item.command = command;
    item.additionalTextEdits = additionalTextEdits;
    if (!item.data.isSnippet && detail && item.insertTextFormat == import_vscode_languageserver_protocol5.InsertTextFormat.Snippet) {
      item.data.isSnippet = true;
      const shouldCompleteFunction = await this.isValidFunctionCompletionContext(filepath, position, token);
      if (shouldCompleteFunction && previousInsert == item.insertText) {
        this.createSnippetOfFunctionCall(item, detail);
      }
    }
    return item;
  }
  getCodeActions(detail, filepath) {
    if (!detail.codeActions || !detail.codeActions.length) {
      return {};
    }
    const additionalTextEdits = [];
    let hasRemainingCommandsOrEdits = false;
    for (const tsAction of detail.codeActions) {
      if (tsAction.commands) {
        hasRemainingCommandsOrEdits = true;
      }
      if (tsAction.changes) {
        for (const change of tsAction.changes) {
          if (change.fileName === filepath) {
            additionalTextEdits.push(
              ...change.textChanges.map(TextEdit2.fromCodeEdit)
            );
          } else {
            hasRemainingCommandsOrEdits = true;
          }
        }
      }
    }
    let command = null;
    if (hasRemainingCommandsOrEdits) {
      command = {
        title: "",
        command: ApplyCompletionCodeActionCommand.ID,
        arguments: [
          detail.codeActions.map((x) => ({
            commands: x.commands,
            description: x.description,
            changes: x.changes.filter((x2) => x2.fileName !== filepath)
          }))
        ]
      };
    }
    return {
      command,
      additionalTextEdits: additionalTextEdits.length ? additionalTextEdits : void 0
    };
  }
  shouldTrigger(triggerCharacter, pre, option, configuration) {
    if (triggerCharacter && this.client.apiVersion.lt(API.v290)) {
      if (triggerCharacter === "@") {
        if (option.synname && /string/i.test(option.synname)) {
          return true;
        }
        if (!pre.match(/^\s*\*[ ]?@/) && !pre.match(/\/\*\*+[ ]?@/)) {
          return false;
        }
      } else if (triggerCharacter === "<") {
        return false;
      }
    }
    if (triggerCharacter === " ") {
      if (!configuration.importStatementSuggestions || !this.client.apiVersion.lt(API.v430)) {
        return false;
      }
      return pre === "import ";
    }
    return true;
  }
  getDocumentation(detail) {
    let documentation = "";
    if (detail.source) {
      const importPath = `'${plainWithLinks(detail.source)}'`;
      const autoImportLabel = `Auto import from ${importPath}`;
      documentation += `${autoImportLabel}
`;
    }
    let parts = [
      plainWithLinks(detail.documentation),
      tagsMarkdownPreview(detail.tags)
    ];
    parts = parts.filter((s) => s && s.trim() != "");
    documentation += parts.join("\n\n");
    if (documentation.length) {
      return {
        kind: import_vscode_languageserver_protocol5.MarkupKind.Markdown,
        value: documentation
      };
    }
    return void 0;
  }
  createSnippetOfFunctionCall(item, detail) {
    let { displayParts } = detail;
    const parameterListParts = getParameterListParts(displayParts);
    const snippet = new SnippetString();
    snippet.appendText(`${item.insertText ?? item.label}(`);
    appendJoinedPlaceholders(snippet, parameterListParts.parts, ", ");
    if (parameterListParts.hasOptionalParameters) {
      snippet.appendTabstop();
    }
    snippet.appendText(")");
    snippet.appendTabstop(0);
    item.insertText = snippet.value;
  }
  async isValidFunctionCompletionContext(filepath, position, token) {
    try {
      const args = Position2.toFileLocationRequestArgs(filepath, position);
      const response = await this.client.execute("quickinfo", args, token);
      if (response.type === "response" && response.body) {
        const { body } = response;
        switch (body && body.kind) {
          case "var":
          case "let":
          case "const":
          case "alias":
            return false;
        }
      }
    } catch (e) {
    }
    const after = this.currentLine.slice(position.character);
    return after.match(/^[a-z_$0-9]*\s*\(/gi) === null;
  }
  isInValidCommitCharacterContext(document, position) {
    if (this.client.apiVersion.lt(API.v320)) {
      if (position.character > 1) {
        const preText = document.getText(import_vscode_languageserver_protocol5.Range.create(
          position.line,
          0,
          position.line,
          position.character
        ));
        return preText.match(/(\s|^)\.$/ig) === null;
      }
    }
    return true;
  }
};
TypeScriptCompletionItemProvider.triggerCharacters = [".", '"', "'", "`", "/", "@", "<", "#", " "];
function shouldExcludeCompletionEntry(element, completionConfiguration) {
  return !completionConfiguration.nameSuggestions && element.kind === Kind.warning || !completionConfiguration.pathSuggestions && (element.kind === Kind.directory || element.kind === Kind.script || element.kind === Kind.externalModuleName) || !completionConfiguration.autoImportSuggestions && element.hasAction;
}
function appendJoinedPlaceholders(snippet, parts, joiner) {
  for (let i = 0; i < parts.length; ++i) {
    const paramterPart = parts[i];
    snippet.appendPlaceholder(paramterPart.text);
    if (i !== parts.length - 1) {
      snippet.appendText(joiner);
    }
  }
}

// src/server/features/definitionProvider.ts
var import_coc12 = require("coc.nvim");
init_api();
init_typeConverters();
var TypeScriptDefinitionProvider = class {
  constructor(client) {
    this.client = client;
  }
  async getSymbolLocations(definitionType, document, position, token) {
    const filepath = this.client.toPath(document.uri);
    if (!filepath) {
      return void 0;
    }
    const args = Position2.toFileLocationRequestArgs(
      filepath,
      position
    );
    try {
      const response = await this.client.execute(definitionType, args, token);
      if (response.type !== "response" || !response.body) {
        return void 0;
      }
      const locations = response.type == "response" && response.body || [];
      return locations.map(
        (location) => {
          const target = Location2.fromTextSpan(this.client.toResource(location.file), location);
          if (location.contextStart && location.contextEnd) {
            return {
              targetRange: Range3.fromLocations(location.contextStart, location.contextEnd),
              targetUri: target.uri,
              targetSelectionRange: target.range
            };
          }
          return target;
        }
      );
    } catch {
      return [];
    }
  }
  async provideDefinition(document, position, token) {
    var _a;
    if (this.client.apiVersion.gte(API.v270)) {
      const filepath = this.client.toOpenedFilePath(document.uri);
      if (!filepath) {
        return void 0;
      }
      const args = Position2.toFileLocationRequestArgs(filepath, position);
      const response = await this.client.execute("definitionAndBoundSpan", args, token);
      if (response.type !== "response" || !response.body) {
        return void 0;
      }
      const span = response.body.textSpan ? Range3.fromTextSpan(response.body.textSpan) : void 0;
      let definitions = response.body.definitions;
      let modeId = document.languageId.startsWith("javascript") ? "javascript" : "typescript";
      if (import_coc12.workspace.getConfiguration(modeId).get("preferGoToSourceDefinition", false) && this.client.apiVersion.gte(API.v470)) {
        const sourceDefinitionsResponse = await this.client.execute("findSourceDefinition", args, token);
        if (sourceDefinitionsResponse.type === "response" && ((_a = sourceDefinitionsResponse.body) == null ? void 0 : _a.length)) {
          definitions = sourceDefinitionsResponse.body;
        }
      }
      return definitions.map((location) => {
        const target = Location2.fromTextSpan(this.client.toResource(location.file), location);
        if (location.contextStart && location.contextEnd) {
          return {
            originSelectionRange: span,
            targetRange: Range3.fromLocations(location.contextStart, location.contextEnd),
            targetUri: target.uri,
            targetSelectionRange: target.range
          };
        }
        return {
          originSelectionRange: span,
          targetRange: target.range,
          targetUri: target.uri,
          targetSelectionRange: target.range
        };
      });
    }
    return await this.getSymbolLocations("definition", document, position, token);
  }
  provideTypeDefinition(document, position, token) {
    return this.getSymbolLocations("typeDefinition", document, position, token);
  }
  provideImplementation(document, position, token) {
    return this.getSymbolLocations("implementation", document, position, token);
  }
};

// src/server/features/directiveCommentCompletions.ts
var import_coc13 = require("coc.nvim");
var import_coc14 = require("coc.nvim");
init_api();
var tsDirectives = [
  {
    value: "@ts-check",
    description: "Enables semantic checking in a JavaScript file. Must be at the top of a file."
  },
  {
    value: "@ts-nocheck",
    description: "Disables semantic checking in a JavaScript file. Must be at the top of a file."
  },
  {
    value: "@ts-ignore",
    description: "Suppresses @ts-check errors on the next line of a file."
  }
];
var tsDirectives390 = [
  ...tsDirectives,
  {
    value: "@ts-expect-error",
    description: "Suppresses @ts-check errors on the next line of a file, expecting at least one to exist."
  }
];
var DirectiveCommentCompletionProvider = class {
  constructor(client) {
    this.client = client;
  }
  provideCompletionItems(document, position, _token, context) {
    if (context.triggerCharacter != "@") {
      return [];
    }
    const file2 = this.client.toPath(document.uri);
    if (!file2) {
      return [];
    }
    const doc = import_coc14.workspace.getDocument(document.uri);
    const line = doc.getline(position.line);
    const prefix = line.slice(0, position.character);
    const match = prefix.match(/^\s*\/\/+\s?(@[a-zA-Z\-]*)?$/);
    if (match) {
      const directives = this.client.apiVersion.gte(API.v390) ? tsDirectives390 : tsDirectives;
      let items = directives.map((directive) => {
        const item = { label: directive.value };
        item.kind = import_coc13.CompletionItemKind.Snippet;
        item.detail = directive.description;
        item.textEdit = {
          range: import_coc13.Range.create(
            position.line,
            Math.max(0, position.character - (match[1] ? match[1].length : 0)),
            position.line,
            position.character
          ),
          newText: directive.value
        };
        return item;
      });
      let res = {
        isIncomplete: false,
        items
      };
      res.startcol = doc.fixStartcol(position, ["@"]);
      return res;
    }
    return [];
  }
};

// src/server/features/documentHighlight.ts
var import_vscode_languageserver_protocol6 = __toESM(require_main2());
init_typeConverters();
var TypeScriptDocumentHighlightProvider = class {
  constructor(client) {
    this.client = client;
  }
  async provideDocumentHighlights(resource, position, token) {
    const file2 = this.client.toPath(resource.uri);
    if (!file2)
      return [];
    const args = {
      ...Position2.toFileLocationRequestArgs(file2, position),
      filesToSearch: [file2]
    };
    try {
      const response = await this.client.execute("documentHighlights", args, token);
      if (response.type !== "response" || !response.body) {
        return [];
      }
      return flatten(
        response.body.filter((highlight) => highlight.file === file2).map(convertDocumentHighlight)
      );
    } catch (_e) {
      return [];
    }
  }
};
function convertDocumentHighlight(highlight) {
  return highlight.highlightSpans.map((span) => {
    return {
      range: Range3.fromTextSpan(span),
      kind: span.kind === "writtenReference" ? import_vscode_languageserver_protocol6.DocumentHighlightKind.Write : import_vscode_languageserver_protocol6.DocumentHighlightKind.Read
    };
  });
}

// src/server/features/documentSymbol.ts
var import_vscode_languageserver_protocol7 = __toESM(require_main2());
init_protocol_const();
init_typeConverters();
var getSymbolKind2 = (kind) => {
  switch (kind) {
    case Kind.module:
      return import_vscode_languageserver_protocol7.SymbolKind.Module;
    case Kind.class:
      return import_vscode_languageserver_protocol7.SymbolKind.Class;
    case Kind.enum:
      return import_vscode_languageserver_protocol7.SymbolKind.Enum;
    case Kind.interface:
      return import_vscode_languageserver_protocol7.SymbolKind.Interface;
    case Kind.method:
      return import_vscode_languageserver_protocol7.SymbolKind.Method;
    case Kind.memberVariable:
      return import_vscode_languageserver_protocol7.SymbolKind.Property;
    case Kind.memberGetAccessor:
      return import_vscode_languageserver_protocol7.SymbolKind.Property;
    case Kind.memberSetAccessor:
      return import_vscode_languageserver_protocol7.SymbolKind.Property;
    case Kind.variable:
      return import_vscode_languageserver_protocol7.SymbolKind.Variable;
    case Kind.const:
      return import_vscode_languageserver_protocol7.SymbolKind.Variable;
    case Kind.localVariable:
      return import_vscode_languageserver_protocol7.SymbolKind.Variable;
    case Kind.variable:
      return import_vscode_languageserver_protocol7.SymbolKind.Variable;
    case Kind.constructSignature:
    case Kind.constructorImplementation:
      return import_vscode_languageserver_protocol7.SymbolKind.Constructor;
    case Kind.function:
    case Kind.localFunction:
      return import_vscode_languageserver_protocol7.SymbolKind.Function;
  }
  return import_vscode_languageserver_protocol7.SymbolKind.Variable;
};
var TypeScriptDocumentSymbolProvider = class {
  constructor(client) {
    this.client = client;
  }
  async provideDocumentSymbols(resource, token) {
    const filepath = this.client.toPath(resource.uri);
    if (!filepath)
      return [];
    const args = {
      file: filepath
    };
    try {
      const response = await this.client.execute("navtree", args, token);
      if (response.type == "response" && response.body) {
        const tree = response.body;
        if (tree.childItems) {
          const result = new Array();
          tree.childItems.forEach(
            (item) => TypeScriptDocumentSymbolProvider.convertNavTree(
              result,
              item
            )
          );
          return result;
        }
      }
      return [];
    } catch (e) {
      return [];
    }
  }
  static convertNavTree(output, item) {
    let shouldInclude = TypeScriptDocumentSymbolProvider.shouldIncludeEntry(item);
    const children = new Set(item.childItems || []);
    for (const span of item.spans) {
      const range = Range3.fromTextSpan(span);
      const symbolInfo = TypeScriptDocumentSymbolProvider.convertSymbol(item, range);
      if (children.size)
        symbolInfo.children = [];
      for (const child of children) {
        if (child.spans.some((span2) => !!containsRange(range, Range3.fromTextSpan(span2)))) {
          const includedChild = TypeScriptDocumentSymbolProvider.convertNavTree(symbolInfo.children, child);
          shouldInclude = shouldInclude || includedChild;
          children.delete(child);
        }
      }
      if (shouldInclude) {
        output.push(symbolInfo);
      }
    }
    return shouldInclude;
  }
  static convertSymbol(item, range) {
    const selectionRange = item.nameSpan ? Range3.fromTextSpan(item.nameSpan) : range;
    let label = item.text;
    switch (item.kind) {
      case Kind.memberGetAccessor:
        label = `(get) ${label}`;
        break;
      case Kind.memberSetAccessor:
        label = `(set) ${label}`;
        break;
    }
    const symbolInfo = import_vscode_languageserver_protocol7.DocumentSymbol.create(
      label,
      "",
      getSymbolKind2(item.kind),
      range,
      containsRange(range, selectionRange) ? selectionRange : range
    );
    const kindModifiers = parseKindModifier3(item.kindModifiers);
    if (kindModifiers.has(KindModifiers.deprecated)) {
      symbolInfo.tags = [import_vscode_languageserver_protocol7.SymbolTag.Deprecated];
    }
    return symbolInfo;
  }
  static shouldIncludeEntry(item) {
    if (item.kind === Kind.alias) {
      return false;
    }
    return !!(item.text && item.text !== "<function>" && item.text !== "<class>");
  }
};
function containsRange(range, otherRange) {
  if (otherRange.start.line < range.start.line || otherRange.end.line < range.start.line) {
    return false;
  }
  if (otherRange.start.line > range.end.line || otherRange.end.line > range.end.line) {
    return false;
  }
  if (otherRange.start.line === range.start.line && otherRange.start.character < range.start.character) {
    return false;
  }
  if (otherRange.end.line === range.end.line && otherRange.end.character > range.end.character) {
    return false;
  }
  return true;
}
function parseKindModifier3(kindModifiers) {
  return new Set(kindModifiers.split(/,|\s+/g));
}

// src/server/features/fixAll.ts
var import_coc15 = require("coc.nvim");

// src/server/utils/errorCodes.ts
var variableDeclaredButNeverUsed = /* @__PURE__ */ new Set([6196, 6133]);
var propertyDeclaretedButNeverUsed = /* @__PURE__ */ new Set([6138]);
var allImportsAreUnused = /* @__PURE__ */ new Set([6192]);
var unreachableCode = /* @__PURE__ */ new Set([7027]);
var unusedLabel = /* @__PURE__ */ new Set([7028]);
var fallThroughCaseInSwitch = /* @__PURE__ */ new Set([7029]);
var notAllCodePathsReturnAValue = /* @__PURE__ */ new Set([7030]);
var incorrectlyImplementsInterface = /* @__PURE__ */ new Set([2420]);
var cannotFindName = /* @__PURE__ */ new Set([2552, 2304]);
var asyncOnlyAllowedInAsyncFunctions = /* @__PURE__ */ new Set([1308]);

// src/server/utils/fixNames.ts
var awaitInSyncFunction = "fixAwaitInSyncFunction";
var classIncorrectlyImplementsInterface = "fixClassIncorrectlyImplementsInterface";
var unreachableCode2 = "fixUnreachableCode";
var unusedIdentifier = "unusedIdentifier";
var fixImport = "import";

// src/server/features/fixAll.ts
init_typeConverters();
async function buildIndividualFixes(fixes, edit, client, file2, diagnostics, token) {
  var _a;
  for (const diagnostic of diagnostics) {
    for (const { codes, fixName } of fixes) {
      if (token.isCancellationRequested) {
        return;
      }
      if (!codes.has(diagnostic.code)) {
        continue;
      }
      const args = {
        ...Range3.toFileRangeRequestArgs(file2, diagnostic.range),
        errorCodes: [+diagnostic.code]
      };
      const response = await client.execute("getCodeFixes", args, token);
      if (response.type !== "response") {
        continue;
      }
      const fix = (_a = response.body) == null ? void 0 : _a.find((fix2) => fix2.fixName === fixName);
      if (fix) {
        WorkspaceEdit2.withFileCodeEdits(edit, client, fix.changes);
        break;
      }
    }
  }
}
async function buildCombinedFix(fixes, edit, client, file2, diagnostics, token) {
  var _a, _b;
  for (const diagnostic of diagnostics) {
    for (const { codes, fixName } of fixes) {
      if (token.isCancellationRequested) {
        return;
      }
      if (!codes.has(diagnostic.code)) {
        continue;
      }
      const args = {
        ...Range3.toFileRangeRequestArgs(file2, diagnostic.range),
        errorCodes: [+diagnostic.code]
      };
      const response = await client.execute("getCodeFixes", args, token);
      if (response.type !== "response" || !((_a = response.body) == null ? void 0 : _a.length)) {
        continue;
      }
      const fix = (_b = response.body) == null ? void 0 : _b.find((fix2) => fix2.fixName === fixName);
      if (!fix) {
        continue;
      }
      if (!fix.fixId) {
        WorkspaceEdit2.withFileCodeEdits(edit, client, fix.changes);
        return;
      }
      const combinedArgs = {
        scope: {
          type: "file",
          args: { file: file2 }
        },
        fixId: fix.fixId
      };
      const combinedResponse = await client.execute("getCombinedCodeFix", combinedArgs, token);
      if (combinedResponse.type !== "response" || !combinedResponse.body) {
        return;
      }
      WorkspaceEdit2.withFileCodeEdits(edit, client, combinedResponse.body.changes);
      return;
    }
  }
}
var SourceAction = class {
};
var _SourceFixAll = class extends SourceAction {
  constructor() {
    super();
    this.kind = _SourceFixAll.kind;
    this.title = "Fix all fixable JS/TS issues";
  }
  async build(client, file2, diagnostics, token) {
    this.edit = { changes: {} };
    await buildIndividualFixes([
      { codes: incorrectlyImplementsInterface, fixName: classIncorrectlyImplementsInterface },
      { codes: asyncOnlyAllowedInAsyncFunctions, fixName: awaitInSyncFunction }
    ], this.edit, client, file2, diagnostics, token);
    await buildCombinedFix([
      { codes: unreachableCode, fixName: unreachableCode2 }
    ], this.edit, client, file2, diagnostics, token);
  }
};
var SourceFixAll = _SourceFixAll;
SourceFixAll.kind = import_coc15.CodeActionKind.SourceFixAll + ".ts";
var _SourceRemoveUnused = class extends SourceAction {
  constructor() {
    super();
    this.kind = _SourceRemoveUnused.kind;
    this.title = "Remove all unused code";
  }
  async build(client, file2, diagnostics, token) {
    this.edit = { changes: {} };
    await buildCombinedFix([
      { codes: variableDeclaredButNeverUsed, fixName: unusedIdentifier }
    ], this.edit, client, file2, diagnostics, token);
  }
};
var SourceRemoveUnused = _SourceRemoveUnused;
SourceRemoveUnused.kind = import_coc15.CodeActionKind.Source + ".removeUnused.ts";
var _SourceAddMissingImports = class extends SourceAction {
  constructor() {
    super();
    this.kind = _SourceAddMissingImports.kind;
    this.title = "Add all missing imports";
  }
  async build(client, file2, diagnostics, token) {
    this.edit = { changes: {} };
    await buildCombinedFix(
      [
        { codes: cannotFindName, fixName: fixImport }
      ],
      this.edit,
      client,
      file2,
      diagnostics,
      token
    );
  }
};
var SourceAddMissingImports = _SourceAddMissingImports;
SourceAddMissingImports.kind = import_coc15.CodeActionKind.Source + ".addMissingImports.ts";
var _TypeScriptAutoFixProvider = class {
  constructor(client, fileConfigurationManager, diagnosticsManager) {
    this.client = client;
    this.fileConfigurationManager = fileConfigurationManager;
    this.diagnosticsManager = diagnosticsManager;
  }
  get metadata() {
    return {
      providedCodeActionKinds: _TypeScriptAutoFixProvider.kindProviders.map((x) => x.kind)
    };
  }
  async provideCodeActions(document, _range, context, token) {
    if (!context.only || !context.only.some((s) => s.startsWith(import_coc15.CodeActionKind.Source))) {
      return void 0;
    }
    const file2 = this.client.toOpenedFilePath(document.uri);
    if (!file2) {
      return void 0;
    }
    const actions = this.getFixAllActions(context.only);
    if (this.client.bufferSyncSupport.hasPendingDiagnostics(document.uri)) {
      return actions;
    }
    const diagnostics = this.diagnosticsManager.getDiagnostics(document.uri);
    if (!diagnostics.length) {
      return actions;
    }
    await this.fileConfigurationManager.ensureConfigurationForDocument(document, token);
    if (token.isCancellationRequested) {
      return void 0;
    }
    await Promise.allSettled(actions.map((action) => action.build(this.client, file2, diagnostics, token)));
    return actions.filter((o) => o.edit != null);
  }
  getFixAllActions(only) {
    return _TypeScriptAutoFixProvider.kindProviders.filter((provider) => only.some((s) => provider.kind.startsWith(s))).map((provider) => new provider());
  }
};
var TypeScriptAutoFixProvider = _TypeScriptAutoFixProvider;
TypeScriptAutoFixProvider.kindProviders = [
  SourceFixAll,
  SourceRemoveUnused,
  SourceAddMissingImports
];

// src/server/features/folding.ts
var import_coc16 = require("coc.nvim");
init_main();
init_typeConverters();
var TypeScriptFoldingProvider = class {
  constructor(client) {
    this.client = client;
  }
  async provideFoldingRanges(document, _context, token) {
    const file2 = this.client.toPath(document.uri);
    if (!file2) {
      return;
    }
    const args = { file: file2 };
    const res = await this.client.execute("getOutliningSpans", args, token);
    if (res.type != "response") {
      return;
    }
    const { body } = res;
    if (!body) {
      return;
    }
    return body.map((span) => this.convertOutliningSpan(span, document)).filter((foldingRange) => !!foldingRange);
  }
  convertOutliningSpan(span, document) {
    const range = Range3.fromTextSpan(span.textSpan);
    const kind = TypeScriptFoldingProvider.getFoldingRangeKind(span);
    let { start, end } = range;
    if (span.kind === "comment") {
      let doc = import_coc16.workspace.getDocument(document.uri);
      const line = doc.getline(start.line);
      if (line.match(/\/\/\s*#endregion/gi)) {
        return void 0;
      }
    } else if (span.kind === "code") {
      let doc = import_coc16.workspace.getDocument(document.uri);
      if (end.line > start.line && /^\s*}/.test(doc.getline(end.line))) {
        end.line -= 1;
        end.character = doc.getline(end.line).length;
      }
    }
    return FoldingRange.create(start.line, end.line, start.character, end.character, kind);
  }
  static getFoldingRangeKind(span) {
    switch (span.kind) {
      case "comment":
      case "region":
      case "imports":
      case "code":
        return span.kind;
      default:
        return void 0;
    }
  }
};

// src/server/features/formatting.ts
var import_coc17 = require("coc.nvim");
init_typeConverters();
var TypeScriptFormattingProvider = class {
  constructor(client, formattingOptionsManager) {
    this.client = client;
    this.formattingOptionsManager = formattingOptionsManager;
  }
  enabled(document) {
    return this.formattingOptionsManager.formatEnabled(document);
  }
  async doFormat(document, options, args, token) {
    if (!this.enabled(document))
      return [];
    await this.formattingOptionsManager.ensureConfigurationOptions(
      document,
      options.insertSpaces,
      options.tabSize,
      token
    );
    try {
      const response = await this.client.execute("format", args, token);
      if (response.type == "response" && response.body) {
        let edits = response.body.map(TextEdit2.fromCodeEdit);
        return edits;
      }
    } catch {
    }
    return [];
  }
  async provideDocumentRangeFormattingEdits(document, range, options, token) {
    if (!this.enabled(document))
      return [];
    const filepath = this.client.toPath(document.uri);
    if (!filepath)
      return [];
    const args = {
      file: filepath,
      line: range.start.line + 1,
      offset: range.start.character + 1,
      endLine: range.end.line + 1,
      endOffset: range.end.character + 1
    };
    return this.doFormat(document, options, args, token);
  }
  async provideDocumentFormattingEdits(document, options, token) {
    if (!this.enabled(document))
      return [];
    const filepath = this.client.toPath(document.uri);
    if (!filepath)
      return [];
    const args = {
      file: filepath,
      line: 1,
      offset: 1,
      endLine: document.lineCount + 1,
      endOffset: 1
    };
    return this.doFormat(document, options, args, token);
  }
  async provideOnTypeFormattingEdits(document, position, ch, options, token) {
    if (!this.enabled(document))
      return [];
    const file2 = this.client.toPath(document.uri);
    if (!file2)
      return [];
    await this.formattingOptionsManager.ensureConfigurationOptions(
      document,
      options.insertSpaces,
      options.tabSize,
      token
    );
    const doc = import_coc17.workspace.getDocument(document.uri);
    const args = {
      ...Position2.toFileLocationRequestArgs(file2, position),
      key: ch
    };
    try {
      const res = await this.client.execute("formatonkey", args, token);
      if (res.type != "response") {
        return [];
      }
      const { body } = res;
      const edits = body;
      const result = [];
      if (!edits) {
        return result;
      }
      for (const edit of edits) {
        const textEdit = TextEdit2.fromCodeEdit(edit);
        const range = textEdit.range;
        if (range.start.character === 0 && range.start.line === range.end.line && textEdit.newText === "") {
          const lText = doc.getline(range.start.line);
          if (lText.trim().length > 0 || lText.length > range.end.character) {
            result.push(textEdit);
          }
        } else {
          result.push(textEdit);
        }
      }
      return result;
    } catch {
    }
    return [];
  }
};

// src/server/features/hover.ts
init_typeConverters();
var TypeScriptHoverProvider = class {
  constructor(client) {
    this.client = client;
  }
  async provideHover(document, position, token) {
    const filepath = this.client.toPath(document.uri);
    if (!filepath) {
      return void 0;
    }
    const args = Position2.toFileLocationRequestArgs(
      filepath,
      position
    );
    try {
      const response = await this.client.interruptGetErr(() => this.client.execute("quickinfo", args, token));
      if (response && response.type == "response" && response.body) {
        const data = response.body;
        return {
          contents: TypeScriptHoverProvider.getContents(data),
          range: Range3.fromTextSpan(data)
        };
      }
    } catch (e) {
    }
    return void 0;
  }
  static getContents(data) {
    const parts = [];
    if (data.displayString) {
      parts.push({ language: "typescript", value: data.displayString });
    }
    const markup = markdownDocumentation(data.documentation, data.tags);
    parts.push({
      language: "markdown",
      value: markup.value
    });
    return parts;
  }
};

// src/server/features/implementationsCodeLens.ts
init_protocol_const();
init_typeConverters();

// src/server/utils/regexp.ts
function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

// src/server/features/baseCodeLensProvider.ts
init_typeConverters();
var TypeScriptBaseCodeLensProvider = class {
  constructor(client, cachedResponse, modeId) {
    this.client = client;
    this.cachedResponse = cachedResponse;
    this.modeId = modeId;
  }
  async provideCodeLenses(document, token) {
    const filepath = this.client.toPath(document.uri);
    if (!filepath) {
      return [];
    }
    try {
      const response = await this.cachedResponse.execute(
        document,
        () => this.client.execute("navtree", { file: filepath }, token)
      );
      if (response.type !== "response") {
        return [];
      }
      const tree = response.body;
      const referenceableSpans = [];
      if (tree && tree.childItems) {
        tree.childItems.forEach(
          (item) => this.walkNavTree(document, item, null, referenceableSpans)
        );
      }
      return referenceableSpans.map(
        (range) => {
          return {
            range,
            data: { uri: document.uri }
          };
        }
      );
    } catch {
      return [];
    }
  }
  walkNavTree(document, item, parent, results) {
    if (!item) {
      return;
    }
    const range = this.extractSymbol(document, item, parent);
    if (range) {
      results.push(range);
    }
    if (item.childItems) {
      item.childItems.forEach(
        (child) => this.walkNavTree(document, child, item, results)
      );
    }
  }
};
function getSymbolRange(document, item) {
  if (item.nameSpan) {
    return Range3.fromTextSpan(item.nameSpan);
  }
  const span = item.spans && item.spans[0];
  if (!span) {
    return null;
  }
  const range = Range3.fromTextSpan(span);
  const text = document.getText(range);
  const identifierMatch = new RegExp(`^(.*?(\\b|\\W))${escapeRegExp(item.text || "")}(\\b|\\W)`, "gm");
  const match = identifierMatch.exec(text);
  const prefixLength = match ? match.index + match[1].length : 0;
  const startOffset = document.offsetAt(range.start) + prefixLength;
  return {
    start: document.positionAt(startOffset),
    end: document.positionAt(startOffset + item.text.length)
  };
}

// src/server/features/implementationsCodeLens.ts
var TypeScriptImplementationsCodeLensProvider = class extends TypeScriptBaseCodeLensProvider {
  async resolveCodeLens(codeLens, token) {
    let { uri } = codeLens.data;
    let filepath = this.client.toPath(uri);
    const args = Position2.toFileLocationRequestArgs(
      filepath,
      codeLens.range.start
    );
    const response = await this.client.execute("implementation", args, token, { lowPriority: true });
    if (response.type !== "response" || !response.body) {
      codeLens.command = {
        title: response.type === "cancelled" ? "" : "could not determine implementation",
        command: ""
      };
      return codeLens;
    }
    const locations = response.body.map((reference) => {
      return {
        uri: this.client.toResource(reference.file),
        range: {
          start: Position2.fromLocation(reference.start),
          end: {
            line: reference.start.line,
            character: 0
          }
        }
      };
    }).filter(
      (location) => !(location.uri.toString() === uri && location.range.start.line === codeLens.range.start.line && location.range.start.character === codeLens.range.start.character)
    );
    codeLens.command = this.getCommand(locations, codeLens);
    return codeLens;
  }
  getCommand(locations, codeLens) {
    let { uri } = codeLens.data;
    return {
      title: this.getTitle(locations),
      command: locations.length ? "editor.action.showReferences" : "",
      arguments: [uri, codeLens.range.start, locations]
    };
  }
  getTitle(locations) {
    return locations.length === 1 ? "1 implementation" : `${locations.length} implementations`;
  }
  extractSymbol(document, item, _parent) {
    switch (item.kind) {
      case Kind.interface:
        return getSymbolRange(document, item);
      case Kind.class:
      case Kind.method:
      case Kind.memberVariable:
      case Kind.memberGetAccessor:
      case Kind.memberSetAccessor:
        if (item.kindModifiers.match(/\babstract\b/g)) {
          return getSymbolRange(document, item);
        }
        break;
    }
    return null;
  }
};

// src/server/features/importFix.ts
var import_coc18 = require("coc.nvim");
var import_vscode_languageserver_protocol8 = __toESM(require_main2());
var ImportFixProvider = class {
  constructor(bufferSyncSupport) {
    this.bufferSyncSupport = bufferSyncSupport;
  }
  async provideCodeActions(document, _range, context, _token) {
    if (this.bufferSyncSupport.hasPendingDiagnostics(document.uri)) {
      return [];
    }
    let diagnostics = context.diagnostics.filter((d) => d.code == 2304);
    if (!diagnostics.length)
      return [];
    let edits = [];
    let names = [];
    let doc = import_coc18.workspace.getDocument(document.uri);
    let command;
    for (const diagnostic of diagnostics) {
      let { range } = diagnostic;
      let line = doc.getline(range.start.line);
      let name = line.slice(range.start.character, range.end.character);
      if (names.indexOf(name) !== -1)
        continue;
      if (nodeModules.indexOf(name) !== -1) {
        names.push(name);
        edits.push({
          range: import_vscode_languageserver_protocol8.Range.create(0, 0, 0, 0),
          newText: `import ${name} from '${name}'
`
        });
        command = "tsserver.organizeImports";
      }
    }
    let edit = {
      changes: {
        [document.uri]: edits
      }
    };
    let cmd = null;
    if (command)
      cmd = {
        title: `fix import`,
        command: "tsserver.organizeImports"
      };
    return [{
      title: `Add import ${names.join(", ")}`,
      edit,
      command: cmd
    }];
  }
};

// src/server/features/inlayHints.ts
var import_coc19 = require("coc.nvim");
init_api();
init_typeConverters();
var TypeScriptInlayHintsProvider = class {
  constructor(language2, client, fileConfigurationManager) {
    this.language = language2;
    this.client = client;
    this.fileConfigurationManager = fileConfigurationManager;
    this.disposables = [];
    this._onDidChangeInlayHints = new import_coc19.Emitter();
    this.onDidChangeInlayHints = this._onDidChangeInlayHints.event;
    let section = `${language2.id}.inlayHints`;
    import_coc19.workspace.onDidChangeConfiguration(async (e) => {
      if (e.affectsConfiguration(section)) {
        this._onDidChangeInlayHints.fire();
      }
    }, null, this.disposables);
    import_coc19.workspace.onDidChangeTextDocument((e) => {
      let doc = import_coc19.workspace.getDocument(e.textDocument.uri);
      if (language2.languageIds.includes(doc.languageId)) {
        this._onDidChangeInlayHints.fire();
      }
    }, null, this.disposables);
  }
  dispose() {
    this._onDidChangeInlayHints.dispose();
    (0, import_coc19.disposeAll)(this.disposables);
  }
  async provideInlayHints(document, range, token) {
    const filepath = this.client.toOpenedFilePath(document.uri);
    if (!filepath)
      return [];
    if (!areInlayHintsEnabledForFile(this.language, document)) {
      return [];
    }
    const start = document.offsetAt(range.start);
    const length = document.offsetAt(range.end) - start;
    await this.fileConfigurationManager.ensureConfigurationForDocument(document, token);
    const response = await this.client.execute("provideInlayHints", { file: filepath, start, length }, token);
    if (response.type !== "response" || !response.success || !response.body) {
      return [];
    }
    return response.body.map((hint) => {
      return {
        label: hint.text,
        position: Position2.fromLocation(hint.position),
        kind: fromProtocolInlayHintKind(hint.kind),
        paddingLeft: hint.whitespaceBefore,
        paddingRight: hint.whitespaceAfter
      };
    });
  }
};
TypeScriptInlayHintsProvider.minVersion = API.v440;
function fromProtocolInlayHintKind(kind) {
  switch (kind) {
    case "Parameter":
      return 2;
    case "Type":
      return 1;
    case "Enum":
      return void 0;
    default:
      return void 0;
  }
}
function areInlayHintsEnabledForFile(language2, document) {
  const config = import_coc19.workspace.getConfiguration(language2.id, document.uri);
  const preferences = getInlayHintsPreferences(config);
  return preferences.includeInlayParameterNameHints === "literals" || preferences.includeInlayParameterNameHints === "all" || preferences.includeInlayEnumMemberValueHints || preferences.includeInlayFunctionLikeReturnTypeHints || preferences.includeInlayFunctionParameterTypeHints || preferences.includeInlayPropertyDeclarationTypeHints || preferences.includeInlayVariableTypeHints;
}

// src/server/features/jsDocCompletion.ts
var import_coc20 = require("coc.nvim");
init_typeConverters();
var defaultJsDoc = new import_coc20.SnippetString(`/**
 * $0
 */`);
function createCompleteItem(document, position) {
  const line = document.lines[position.line] ?? "";
  const prefix = line.slice(0, position.character).match(/\/\**\s*$/);
  const suffix = line.slice(position.character).match(/^\s*\**\//);
  const start = import_coc20.Position.create(position.line, prefix ? position.character - prefix[0].length : position.character);
  const range = import_coc20.Range.create(start, import_coc20.Position.create(start.line, start.character + (suffix ? suffix[0].length : 0)));
  let insert = `/** */`;
  return {
    label: insert,
    kind: import_coc20.CompletionItemKind.Text,
    insertTextFormat: import_coc20.InsertTextFormat.Snippet,
    detail: "JSDoc comment",
    sortText: `\0`,
    textEdit: {
      newText: insert,
      range
    }
  };
}
var JsDocCompletionProvider = class {
  constructor(client, language2, fileConfigurationManager) {
    this.client = client;
    this.language = language2;
    this.fileConfigurationManager = fileConfigurationManager;
  }
  async provideCompletionItems(document, position, token) {
    if (!import_coc20.workspace.getConfiguration(this.language.id, document.uri).get("suggest.completeJSDocs")) {
      return void 0;
    }
    const file2 = this.client.toOpenedFilePath(document.uri);
    if (!file2) {
      return void 0;
    }
    if (!this.isPotentiallyValidDocCompletionPosition(document, position)) {
      return void 0;
    }
    const response = await this.client.interruptGetErr(async () => {
      await this.fileConfigurationManager.ensureConfigurationForDocument(document, token);
      const args = Position2.toFileLocationRequestArgs(file2, position);
      return this.client.execute("docCommentTemplate", args, token);
    });
    if (response.type !== "response" || !response.body) {
      return void 0;
    }
    const item = createCompleteItem(document, position);
    if (response.body.newText === "/** */") {
      item.textEdit.newText = defaultJsDoc.value;
    } else {
      item.textEdit.newText = templateToSnippet(response.body.newText).value;
    }
    return [item];
  }
  isPotentiallyValidDocCompletionPosition(document, position) {
    const line = document.lines[position.line] ?? "";
    const prefix = line.slice(0, position.character);
    if (!/^\s*$|\/\*\s*$|^\s*\/\*+\s*$/.test(prefix)) {
      return false;
    }
    const suffix = line.slice(position.character);
    return /^\s*(\*+\/)?\s*$/.test(suffix);
  }
};
function templateToSnippet(template) {
  let snippetIndex = 1;
  template = template.replace(/\*\s$/gm, "*");
  template = template.replace(/\$/g, "\\$");
  template = template.replace(/^[ \t]*(?=(\/|[ ]\*))/gm, "");
  template = template.replace(/^(\/\*\*\s*\*[ ]*)$/m, (x) => x + `$0`);
  template = template.replace(/\* @param([ ]\{\S+\})?\s+(\S+)[ \t]*$/gm, (_param, type, post) => {
    let out = "* @param ";
    if (type === " {any}" || type === " {*}") {
      out += `{\${${snippetIndex++}:*}} `;
    } else if (type) {
      out += type + " ";
    }
    out += post + ` \${${snippetIndex++}}`;
    return out;
  });
  template = template.replace(/\* @returns[ \t]*$/gm, `* @returns \${${snippetIndex++}}`);
  return new import_coc20.SnippetString(template);
}

// src/server/features/moduleInstall.ts
var import_coc21 = require("coc.nvim");
var import_vscode_languageserver_protocol9 = __toESM(require_main2());
var InstallModuleProvider = class {
  constructor(id) {
    if (id === "typescript") {
      import_coc21.commands.registerCommand("_tsserver.installModule", async (uri, name) => {
        await installModules(uri, [name]);
      });
    }
  }
  async provideCodeActions(document, _range, context, _token) {
    const uri = import_coc21.Uri.parse(document.uri);
    if (uri.scheme != "file")
      return null;
    let { diagnostics } = context;
    let diags = diagnostics.filter((s) => s.code == 2307);
    let names = diags.map((o) => {
      let ms = o.message.match(/module\s'(.+)'/);
      return ms ? ms[1] : null;
    });
    names = names.filter((s) => s != null);
    if (!names.length)
      return null;
    let actions = [];
    for (let name of names) {
      let title = `install ${name}`;
      let command = {
        title: `install ${name}`,
        command: "_tsserver.installModule",
        arguments: [document.uri, name]
      };
      let codeAction = import_vscode_languageserver_protocol9.CodeAction.create(title, command, import_vscode_languageserver_protocol9.CodeActionKind.QuickFix);
      actions.push(codeAction);
    }
    return actions;
  }
};

// src/server/features/linkedEditing.ts
init_api();
init_typeConverters();
var TypeScriptLinkedEditingRangeProvider = class {
  constructor(client) {
    this.client = client;
  }
  async provideLinkedEditingRanges(document, position, token) {
    const filepath = this.client.toOpenedFilePath(document.uri);
    if (!filepath) {
      return void 0;
    }
    const args = Position2.toFileLocationRequestArgs(filepath, position);
    const response = await this.client.execute("linkedEditingRange", args, token);
    if (response.type !== "response" || !response.body) {
      return void 0;
    }
    const ranges = response.body.ranges.map((range) => Range3.fromTextSpan(range));
    return { ranges, wordPattern: response.body.wordPattern };
  }
};
TypeScriptLinkedEditingRangeProvider.minVersion = API.v510;

// src/server/features/quickfix.ts
var import_coc22 = require("coc.nvim");
var import_vscode_languageserver_protocol10 = __toESM(require_main2());
init_api();
init_typeConverters();
var _ApplyCodeActionCommand = class {
  constructor(client) {
    this.client = client;
    this.id = _ApplyCodeActionCommand.ID;
  }
  async execute(action) {
    return applyCodeActionCommands(this.client, action);
  }
};
var ApplyCodeActionCommand = _ApplyCodeActionCommand;
ApplyCodeActionCommand.ID = "_typescript.applyCodeActionCommand";
var _ApplyFixAllCodeAction = class {
  constructor(client, formattingConfigurationManager) {
    this.client = client;
    this.formattingConfigurationManager = formattingConfigurationManager;
    this.id = _ApplyFixAllCodeAction.ID;
  }
  async execute(document, file2, tsAction) {
    if (!tsAction.fixId) {
      return;
    }
    await this.formattingConfigurationManager.ensureConfigurationForDocument(document, import_vscode_languageserver_protocol10.CancellationToken.None);
    const args = {
      scope: {
        type: "file",
        args: { file: file2 }
      },
      fixId: tsAction.fixId
    };
    try {
      const res = await this.client.execute("getCombinedCodeFix", args, import_vscode_languageserver_protocol10.CancellationToken.None);
      if (res.type != "response") {
        return;
      }
      let { body } = res;
      const edit = WorkspaceEdit2.fromFileCodeEdits(
        this.client,
        body.changes
      );
      await import_coc22.workspace.applyEdit(edit);
      const token = import_vscode_languageserver_protocol10.CancellationToken.None;
      const { commands: commands7 } = body;
      if (commands7 && commands7.length) {
        for (const command of commands7) {
          await this.client.execute("applyCodeActionCommand", { command }, token);
        }
      }
    } catch {
    }
  }
};
var ApplyFixAllCodeAction = _ApplyFixAllCodeAction;
ApplyFixAllCodeAction.ID = "_typescript.applyFixAllCodeAction";
var DiagnosticsSet = class {
  constructor(_values) {
    this._values = _values;
  }
  static from(diagnostics) {
    const values = /* @__PURE__ */ new Map();
    for (const diagnostic of diagnostics) {
      values.set(DiagnosticsSet.key(diagnostic), diagnostic);
    }
    return new DiagnosticsSet(values);
  }
  static key(diagnostic) {
    const { start, end } = diagnostic.range;
    return `${diagnostic.code}-${start.line},${start.character}-${end.line},${end.character}`;
  }
  get values() {
    return this._values.values();
  }
};
var SupportedCodeActionProvider = class {
  constructor(client) {
    this.client = client;
  }
  async getFixableDiagnosticsForContext(context) {
    const supportedActions = await this.supportedCodeActions;
    const fixableDiagnostics = DiagnosticsSet.from(
      context.diagnostics.filter(
        (diagnostic) => supportedActions.has(+diagnostic.code)
      )
    );
    return Array.from(fixableDiagnostics.values);
  }
  get supportedCodeActions() {
    if (!this._supportedCodeActions) {
      return new Promise((resolve, reject) => {
        this.client.execute("getSupportedCodeFixes", null, import_vscode_languageserver_protocol10.CancellationToken.None).then((res) => {
          if (res.type !== "response") {
            resolve(/* @__PURE__ */ new Set());
            return;
          }
          let codes = res.body.map((code) => +code).filter((code) => !isNaN(code));
          resolve(new Set(codes));
        }, reject);
      });
    }
    return Promise.resolve(this._supportedCodeActions);
  }
};
var TypeScriptQuickFixProvider = class {
  constructor(client, formattingConfigurationManager, diagnosticsManager, id) {
    this.client = client;
    this.formattingConfigurationManager = formattingConfigurationManager;
    this.diagnosticsManager = diagnosticsManager;
    if (id === "typescript") {
      registCommand(new ApplyCodeActionCommand(client));
      registCommand(new ApplyFixAllCodeAction(client, formattingConfigurationManager));
    }
    this.supportedCodeActionProvider = new SupportedCodeActionProvider(client);
  }
  async provideCodeActions(document, _range, context, token) {
    const file2 = this.client.toPath(document.uri);
    if (!file2) {
      return [];
    }
    await this.formattingConfigurationManager.ensureConfigurationForDocument(document, token);
    const fixableDiagnostics = await this.supportedCodeActionProvider.getFixableDiagnosticsForContext(
      context
    );
    if (!fixableDiagnostics.length) {
      return [];
    }
    if (this.client.bufferSyncSupport.hasPendingDiagnostics(document.uri)) {
      return [];
    }
    const results = [];
    for (const diagnostic of fixableDiagnostics) {
      results.push(
        ...await this.getFixesForDiagnostic(document, file2, diagnostic, token)
      );
    }
    return results;
  }
  async getFixesForDiagnostic(document, file2, diagnostic, token) {
    const args = {
      ...Range3.toFileRangeRequestArgs(file2, diagnostic.range),
      errorCodes: [+diagnostic.code]
    };
    const codeFixesResponse = await this.client.execute(
      "getCodeFixes",
      args,
      token
    );
    if (codeFixesResponse.type != "response") {
      return [];
    }
    if (codeFixesResponse.body) {
      const results = [];
      for (const tsCodeFix of codeFixesResponse.body) {
        results.push(
          ...await this.getAllFixesForTsCodeAction(
            document,
            file2,
            diagnostic,
            tsCodeFix
          )
        );
      }
      return results;
    }
    return [];
  }
  async getAllFixesForTsCodeAction(document, file2, diagnostic, tsAction) {
    const singleFix = this.getSingleFixForTsCodeAction(diagnostic, tsAction);
    const fixAll = await this.getFixAllForTsCodeAction(
      document,
      file2,
      diagnostic,
      tsAction
    );
    return fixAll ? [singleFix, fixAll] : [singleFix];
  }
  getSingleFixForTsCodeAction(diagnostic, tsAction) {
    const codeAction = {
      title: tsAction.description,
      kind: import_vscode_languageserver_protocol10.CodeActionKind.QuickFix
    };
    codeAction.edit = getEditForCodeAction(this.client, tsAction);
    codeAction.diagnostics = [diagnostic];
    codeAction.isPreferred = true;
    if (tsAction.commands) {
      codeAction.command = {
        command: ApplyCodeActionCommand.ID,
        arguments: [tsAction],
        title: tsAction.description
      };
    }
    return codeAction;
  }
  async getFixAllForTsCodeAction(document, file2, diagnostic, tsAction) {
    if (!tsAction.fixId || !this.client.apiVersion.gte(API.v270)) {
      return void 0;
    }
    if (!this.diagnosticsManager.getDiagnostics(document.uri).some((x) => x.code === diagnostic.code && x !== diagnostic)) {
      return;
    }
    const action = {
      title: tsAction.fixAllDescription || "Fix all in file",
      kind: import_vscode_languageserver_protocol10.CodeActionKind.QuickFix
    };
    action.diagnostics = [diagnostic];
    action.command = {
      command: ApplyFixAllCodeAction.ID,
      arguments: [document, file2, tsAction],
      title: ""
    };
    return action;
  }
};

// src/server/features/refactor.ts
var import_coc23 = require("coc.nvim");
var import_vscode_languageserver_protocol11 = __toESM(require_main2());
init_api();
init_typeConverters();
var _ApplyRefactoringCommand = class {
  constructor(client) {
    this.client = client;
    this.id = _ApplyRefactoringCommand.ID;
  }
  async execute(document, file2, refactor, action, range) {
    const args = {
      ...Range3.toFileRangeRequestArgs(file2, range),
      refactor,
      action
    };
    if (action === "Move to file") {
      const targetFile = await this.getTargetFile(document, file2, range);
      if (!targetFile || targetFile.toString() === file2.toString()) {
        return false;
      }
      args.interactiveRefactorArguments = { targetFile };
    }
    const response = await this.client.execute("getEditsForRefactor", args, import_vscode_languageserver_protocol11.CancellationToken.None);
    if (response.type !== "response" || !response.body || !response.body.edits.length) {
      return false;
    }
    const workspaceEdit = await this.toWorkspaceEdit(response.body);
    if (!await import_coc23.workspace.applyEdit(workspaceEdit)) {
      return false;
    }
    const renameLocation = response.body.renameLocation;
    if (renameLocation) {
      import_coc23.commands.executeCommand(
        "editor.action.rename",
        document.uri,
        Position2.fromLocation(renameLocation)
      );
    }
    return true;
  }
  async toWorkspaceEdit(body) {
    let workspaceEdit = WorkspaceEdit2.fromFileCodeEdits(
      this.client,
      body.edits
    );
    let documentChanges = workspaceEdit.documentChanges = workspaceEdit.documentChanges || [];
    for (const edit of body.edits) {
      let resource = this.client.toResource(edit.fileName);
      if (import_coc23.Uri.parse(resource).scheme === "file") {
        documentChanges.unshift({
          kind: "create",
          uri: resource,
          options: { ignoreIfExists: true }
        });
      }
    }
    return workspaceEdit;
  }
  async getTargetFile(document, file2, range) {
    const args = Range3.toFileRangeRequestArgs(file2, range);
    const response = await this.client.execute("getMoveToRefactoringFileSuggestions", args, import_vscode_languageserver_protocol11.CancellationToken.None);
    if (response.type !== "response" || !response.body) {
      return;
    }
    const newOrExisting = ["Enter new file path...", "Select existing file..."];
    const idx = await import_coc23.window.showQuickpick(newOrExisting);
    if (idx === -1) {
      return;
    }
    if (idx === 0) {
      const newFilePath = await import_coc23.window.requestInput("New file path...", response.body.newFileName);
      const root = import_coc23.Uri.parse(import_coc23.workspace.getWorkspaceFolder(document.uri).uri).fsPath;
      if (newFilePath && !newFilePath.startsWith(root)) {
        import_coc23.window.showWarningMessage(`${newFilePath} is outside project ${root}`);
        return;
      }
      return newFilePath;
    }
    return await import_coc23.window.showQuickPick(response.body.files, { title: "Move to file..." });
  }
};
var ApplyRefactoringCommand = _ApplyRefactoringCommand;
ApplyRefactoringCommand.ID = "_typescript.applyRefactoring";
var _SelectRefactorCommand = class {
  constructor(doRefactoring) {
    this.doRefactoring = doRefactoring;
    this.id = _SelectRefactorCommand.ID;
  }
  async execute(document, file2, info, range) {
    let { actions } = info;
    const idx = actions.length == 1 ? 0 : await import_coc23.window.showQuickpick(
      actions.map((action) => action.description || action.name)
    );
    if (idx == -1)
      return false;
    let label = info.actions[idx].name;
    if (!label)
      return false;
    return this.doRefactoring.execute(
      document,
      file2,
      info.name,
      label,
      range
    );
  }
};
var SelectRefactorCommand = _SelectRefactorCommand;
SelectRefactorCommand.ID = "_typescript.selectRefactoring";
var _TypeScriptRefactorProvider = class {
  constructor(client, formattingOptionsManager, id) {
    this.client = client;
    this.formattingOptionsManager = formattingOptionsManager;
    if (id === "typescript") {
      const doRefactoringCommand = new ApplyRefactoringCommand(this.client);
      registCommand(doRefactoringCommand);
      registCommand(new SelectRefactorCommand(doRefactoringCommand));
    }
  }
  async provideCodeActions(document, range, context, token) {
    if (!this.shouldTrigger(context)) {
      return void 0;
    }
    const file2 = this.client.toPath(document.uri);
    if (!file2)
      return void 0;
    await this.formattingOptionsManager.ensureConfigurationForDocument(document, token);
    const args = {
      ...Range3.toFileRangeRequestArgs(
        file2,
        range
      ),
      includeInteractiveActions: true,
      triggerReason: context.triggerKind === import_coc23.CodeActionTriggerKind.Invoked ? "invoked" : "implicit",
      kind: Array.isArray(context.only) ? context.only[0] : void 0
    };
    let response;
    try {
      response = await this.client.interruptGetErr(() => {
        return this.client.execute("getApplicableRefactors", args, token);
      });
      if (!response || !response.body) {
        return void 0;
      }
    } catch {
      return void 0;
    }
    return this.convertApplicableRefactors(
      response.body,
      document,
      file2,
      range,
      context.only && context.only.some((v) => v.includes(import_vscode_languageserver_protocol11.CodeActionKind.Refactor))
    ).filter((action) => {
      if (this.client.apiVersion.lt(API.v430)) {
        if (!context.only && action.kind === "refactor.rewrite.function.returnType") {
          return false;
        }
      }
      return true;
    });
  }
  convertApplicableRefactors(body, document, file2, rangeOrSelection, setPrefrred) {
    const actions = [];
    for (const info of body) {
      if (info.inlineable === false) {
        const codeAction = {
          title: info.description,
          kind: import_vscode_languageserver_protocol11.CodeActionKind.Refactor
        };
        codeAction.command = {
          title: info.description,
          command: SelectRefactorCommand.ID,
          arguments: [document, file2, info, rangeOrSelection]
        };
        actions.push(codeAction);
      } else {
        for (const action of info.actions) {
          let codeAction = this.refactorActionToCodeAction(action, document, file2, info, rangeOrSelection);
          if (action.notApplicableReason) {
            codeAction.disabled = { reason: action.notApplicableReason };
          }
          if (setPrefrred) {
            codeAction.isPreferred = _TypeScriptRefactorProvider.isPreferred(action, info.actions);
          }
          actions.push(codeAction);
        }
      }
    }
    return actions;
  }
  refactorActionToCodeAction(action, document, file2, info, rangeOrSelection) {
    const codeAction = {
      title: action.description,
      kind: _TypeScriptRefactorProvider.getKind(action)
    };
    codeAction.command = {
      title: action.description,
      command: ApplyRefactoringCommand.ID,
      arguments: [document, file2, info.name, action.name, rangeOrSelection]
    };
    return codeAction;
  }
  shouldTrigger(context) {
    if (context.only && context.only.every((o) => !o.includes(import_vscode_languageserver_protocol11.CodeActionKind.Refactor))) {
      return false;
    }
    return true;
  }
  static getKind(refactor) {
    if (refactor.name.startsWith("function_")) {
      return _TypeScriptRefactorProvider.extractFunctionKind;
    } else if (refactor.name.startsWith("constant_")) {
      return _TypeScriptRefactorProvider.extractConstantKind;
    } else if (refactor.name.startsWith("Move")) {
      return _TypeScriptRefactorProvider.moveKind;
    }
    return import_vscode_languageserver_protocol11.CodeActionKind.Refactor;
  }
  static isPreferred(action, allActions) {
    let kind = _TypeScriptRefactorProvider.getKind(action);
    if (_TypeScriptRefactorProvider.extractConstantKind == kind) {
      const getScope = (name2) => {
        var _a;
        const scope2 = (_a = name2.match(/scope_(\d)/)) == null ? void 0 : _a[1];
        return scope2 ? +scope2 : void 0;
      };
      const scope = getScope(action.name);
      if (typeof scope !== "number") {
        return false;
      }
      return allActions.filter((otherAtion) => otherAtion !== action && otherAtion.name.startsWith("constant_")).every((otherAction) => {
        const otherScope = getScope(otherAction.name);
        return typeof otherScope === "number" ? scope < otherScope : true;
      });
    }
    let { name } = action;
    if (name.startsWith("Extract to type alias") || name.startsWith("Extract to interface")) {
      return true;
    }
    return false;
  }
};
var TypeScriptRefactorProvider = _TypeScriptRefactorProvider;
TypeScriptRefactorProvider.extractFunctionKind = import_vscode_languageserver_protocol11.CodeActionKind.RefactorExtract + ".function";
TypeScriptRefactorProvider.extractConstantKind = import_vscode_languageserver_protocol11.CodeActionKind.RefactorExtract + ".constant";
TypeScriptRefactorProvider.moveKind = import_vscode_languageserver_protocol11.CodeActionKind.Refactor + ".move";
TypeScriptRefactorProvider.metadata = {
  providedCodeActionKinds: [import_vscode_languageserver_protocol11.CodeActionKind.Refactor]
};

// src/server/features/references.ts
init_typeConverters();
var TypeScriptReferences = class {
  constructor(client) {
    this.client = client;
  }
  async provideReferences(document, position, context, token) {
    const filepath = this.client.toPath(document.uri);
    if (!filepath)
      return [];
    const args = Position2.toFileLocationRequestArgs(
      filepath,
      position
    );
    try {
      const msg = await this.client.execute("references", args, token);
      if (!msg || msg.type != "response" || !msg.body) {
        return [];
      }
      const result = [];
      for (const ref of msg.body.refs) {
        if (!context.includeDeclaration && ref.isDefinition) {
          continue;
        }
        const url = this.client.toResource(ref.file);
        const location = Location2.fromTextSpan(url, ref);
        result.push(location);
      }
      return result;
    } catch {
      return [];
    }
  }
};

// src/server/features/referencesCodeLens.ts
var import_coc24 = require("coc.nvim");
init_typescriptService();
init_protocol_const();
init_typeConverters();
var TypeScriptReferencesCodeLensProvider = class extends TypeScriptBaseCodeLensProvider {
  async resolveCodeLens(codeLens, token) {
    let { uri } = codeLens.data;
    let filepath = this.client.toPath(uri);
    const args = Position2.toFileLocationRequestArgs(
      filepath,
      codeLens.range.start
    );
    let response = await this.client.execute("references", args, token, {
      lowPriority: true,
      executionTarget: 0 /* Semantic */
    });
    if (!response || response.type != "response" || !response.body) {
      codeLens.command = {
        title: response.type === "cancelled" ? "" : "could not determine references",
        command: ""
      };
      return codeLens;
    }
    const locations = response.body.refs.filter((reference) => !reference.isDefinition).map(
      (reference) => Location2.fromTextSpan(
        this.client.toResource(reference.file),
        reference
      )
    );
    codeLens.command = {
      title: locations.length === 1 ? "1 reference" : `${locations.length} references`,
      command: locations.length ? "editor.action.showReferences" : "",
      arguments: [uri, codeLens.range.start, locations]
    };
    return codeLens;
  }
  extractSymbol(document, item, parent) {
    if (parent && parent.kind === Kind.enum) {
      return getSymbolRange(document, item);
    }
    switch (item.kind) {
      case Kind.function: {
        const showOnAllFunctions = import_coc24.workspace.getConfiguration(this.modeId).get("referencesCodeLens.showOnAllFunctions");
        if (showOnAllFunctions) {
          return getSymbolRange(document, item);
        }
      }
      case Kind.const:
      case Kind.let:
      case Kind.variable:
        if (/\bexport\b/.test(item.kindModifiers)) {
          return getSymbolRange(document, item);
        }
        break;
      case Kind.class:
        if (item.text === "<class>") {
          break;
        }
        return getSymbolRange(document, item);
      case Kind.interface:
      case Kind.type:
      case Kind.enum:
        return getSymbolRange(document, item);
      case Kind.method:
      case Kind.memberGetAccessor:
      case Kind.memberSetAccessor:
      case Kind.constructorImplementation:
      case Kind.memberVariable:
        if (parent && comparePosition(Position2.fromLocation(parent.spans[0].start), Position2.fromLocation(item.spans[0].start)) == 0) {
          return null;
        }
        switch (parent == null ? void 0 : parent.kind) {
          case Kind.class:
          case Kind.interface:
          case Kind.type:
            return getSymbolRange(document, item);
        }
        break;
    }
    return null;
  }
};
function comparePosition(position, other) {
  if (position.line > other.line)
    return 1;
  if (other.line == position.line && position.character > other.character)
    return 1;
  if (other.line == position.line && position.character == other.character)
    return 0;
  return -1;
}

// src/server/features/rename.ts
var import_coc25 = require("coc.nvim");
var import_path7 = __toESM(require("path"));
var import_vscode_languageserver_protocol12 = __toESM(require_main2());
init_languageModeIds();
init_api();
init_typeConverters();
function comparePosition2(position, other) {
  if (position.line > other.line)
    return 1;
  if (other.line == position.line && position.character > other.character)
    return 1;
  if (other.line == position.line && position.character == other.character)
    return 0;
  return -1;
}
function positionInRange(position, range) {
  let { start, end } = range;
  if (comparePosition2(position, start) < 0)
    return -1;
  if (comparePosition2(position, end) > 0)
    return 1;
  return 0;
}
var TypeScriptRenameProvider = class {
  constructor(language2, client, fileConfigurationManager) {
    this.language = language2;
    this.client = client;
    this.fileConfigurationManager = fileConfigurationManager;
  }
  async prepareRename(document, position, token) {
    if (this.client.apiVersion.lt(API.v310)) {
      return void 0;
    }
    const response = await this.execRename(document, position, token);
    if (!response) {
      return void 0;
    }
    switch (response.type) {
      case "rename":
        const renameInfo = response.body.info;
        if (!renameInfo.canRename) {
          return Promise.reject(new Error("Invalid location for rename."));
        }
        const triggerSpan = renameInfo.triggerSpan;
        if (triggerSpan) {
          return Range3.fromTextSpan(triggerSpan);
        }
        break;
      case "jsxLinkedEditing": {
        return response.spans.map(Range3.fromTextSpan).find((range) => positionInRange(position, range) === 0);
      }
    }
  }
  async provideRenameEdits(document, position, newName, token) {
    if (this.client.apiVersion.lt(API.v310)) {
      return void 0;
    }
    const file2 = this.client.toOpenedFilePath(document.uri);
    if (!file2) {
      return void 0;
    }
    const response = await this.execRename(document, position, token);
    if (!response || token.isCancellationRequested) {
      return void 0;
    }
    switch (response.type) {
      case "rename": {
        const renameInfo = response.body.info;
        if (!renameInfo.canRename) {
          return Promise.reject(new Error("Invalid location for rename."));
        }
        if (renameInfo.fileToRename) {
          const edits = await this.renameFile(renameInfo.fileToRename, newName, token);
          if (edits) {
            return edits;
          } else {
            return Promise.reject(new Error("An error occurred while renaming file"));
          }
        }
        return this.toWorkspaceEdit(response.body.locs, newName);
      }
      case "jsxLinkedEditing": {
        const locations = [
          {
            file: file2,
            locs: response.spans.map((span) => ({ ...span }))
          }
        ];
        return this.toWorkspaceEdit(locations, newName);
      }
    }
  }
  async execRename(document, position, token) {
    const file2 = this.client.toPath(document.uri);
    if (!file2)
      return void 0;
    const renameMatchingJsxTags = import_coc25.workspace.getConfiguration(this.language.id).get("preferences.renameMatchingJsxTags", true);
    if (this.client.apiVersion.gte(API.v510) && renameMatchingJsxTags && this.looksLikePotentialJsxTagContext(document, position)) {
      const args2 = Position2.toFileLocationRequestArgs(file2, position);
      const response = await this.client.execute("linkedEditingRange", args2, token);
      if (response.type !== "response" || !response.body) {
        return void 0;
      }
      return { type: "jsxLinkedEditing", spans: response.body.ranges };
    }
    const args = {
      ...Position2.toFileLocationRequestArgs(file2, position),
      findInStrings: false,
      findInComments: false
    };
    await this.fileConfigurationManager.ensureConfigurationForDocument(document, token);
    return this.client.interruptGetErr(async () => {
      const response = await this.client.execute("rename", args, token);
      if (response.type !== "response" || !response.body) {
        return void 0;
      }
      return { type: "rename", body: response.body };
    });
  }
  looksLikePotentialJsxTagContext(document, position) {
    if (![typescriptreact, javascript, javascriptreact].includes(document.languageId)) {
      return false;
    }
    const prefix = document.getText(import_vscode_languageserver_protocol12.Range.create(position.line, 0, position.line, position.character));
    return /\<\/?\s*[\w\d_$.]*$/.test(prefix);
  }
  toWorkspaceEdit(locations, newName) {
    let changes = {};
    for (const spanGroup of locations) {
      const uri = this.client.toResource(spanGroup.file);
      if (uri) {
        changes[uri] = [];
        for (const textSpan of spanGroup.locs) {
          changes[uri].push({
            range: Range3.fromTextSpan(textSpan),
            newText: (textSpan.prefixText || "") + newName + (textSpan.suffixText || "")
          });
        }
      }
    }
    return { changes };
  }
  async renameFile(fileToRename, newName, token) {
    if (!import_path7.default.extname(newName)) {
      newName += import_path7.default.extname(fileToRename);
    }
    const dirname = import_path7.default.dirname(fileToRename);
    const newFilePath = import_path7.default.join(dirname, newName);
    const args = {
      file: fileToRename,
      oldFilePath: fileToRename,
      newFilePath
    };
    const response = await this.client.execute("getEditsForFileRename", args, token);
    if (response.type !== "response" || !response.body) {
      return void 0;
    }
    const edits = WorkspaceEdit2.fromFileCodeEdits(this.client, response.body);
    edits.documentChanges = edits.documentChanges || [];
    edits.documentChanges.push({
      kind: "rename",
      oldUri: import_coc25.Uri.file(fileToRename).toString(),
      newUri: import_coc25.Uri.file(newFilePath).toString(),
      options: {
        overwrite: false,
        ignoreIfExists: true
      }
    });
    return edits;
  }
};

// src/server/features/semanticTokens.ts
var import_coc26 = require("coc.nvim");
var CONTENT_LENGTH_LIMIT = 1e5;
var TypeScriptDocumentSemanticTokensProvider = class {
  constructor(client) {
    this.client = client;
  }
  getLegend() {
    return {
      tokenTypes,
      tokenModifiers
    };
  }
  async provideDocumentSemanticTokens(document, token) {
    const file2 = this.client.toOpenedFilePath(document.uri);
    if (!file2 || document.getText().length > CONTENT_LENGTH_LIMIT) {
      return null;
    }
    return this.provideSemanticTokens(document, { file: file2, start: 0, length: document.getText().length }, token);
  }
  async provideDocumentRangeSemanticTokens(document, range, token) {
    const file2 = this.client.toOpenedFilePath(document.uri);
    if (!file2 || document.offsetAt(range.end) - document.offsetAt(range.start) > CONTENT_LENGTH_LIMIT) {
      return null;
    }
    const start = document.offsetAt(range.start);
    const length = document.offsetAt(range.end) - start;
    return this.provideSemanticTokens(document, { file: file2, start, length }, token);
  }
  async provideSemanticTokens(document, requestArg, token) {
    const file2 = this.client.toOpenedFilePath(document.uri);
    if (!file2) {
      return null;
    }
    const versionBeforeRequest = document.version;
    const response = await this.client.execute("encodedSemanticClassifications-full", { ...requestArg, format: "2020" }, token, {
      cancelOnResourceChange: document.uri
    });
    if (response.type !== "response" || !response.body) {
      return null;
    }
    const versionAfterRequest = document.version;
    if (versionBeforeRequest !== versionAfterRequest) {
      await waitForDocumentChangesToEnd(document);
      if (typeof import_coc26.CancellationError !== "undefined") {
        throw new import_coc26.CancellationError();
      }
    }
    const tokenSpan = response.body.spans;
    const builder = new import_coc26.SemanticTokensBuilder();
    for (let i = 0; i < tokenSpan.length; ) {
      const offset = tokenSpan[i++];
      const length = tokenSpan[i++];
      const tsClassification = tokenSpan[i++];
      const tokenType = getTokenTypeFromClassification(tsClassification);
      if (tokenType === void 0) {
        continue;
      }
      const tokenModifiers2 = getTokenModifierFromClassification(tsClassification);
      const startPos = document.positionAt(offset);
      const endPos = document.positionAt(offset + length);
      for (let line = startPos.line; line <= endPos.line; line++) {
        const startCharacter = line === startPos.line ? startPos.character : 0;
        const endCharacter = line === endPos.line ? endPos.character : (document.lines[line] ?? "").length;
        builder.push(line, startCharacter, endCharacter - startCharacter, tokenType, tokenModifiers2);
      }
    }
    return builder.build();
  }
};
function waitForDocumentChangesToEnd(document) {
  let version = document.version;
  return new Promise((resolve) => {
    const iv = setInterval((_) => {
      if (document.version === version) {
        clearInterval(iv);
        resolve();
      }
      version = document.version;
    }, 400);
  });
}
function getTokenTypeFromClassification(tsClassification) {
  if (tsClassification > 255 /* modifierMask */) {
    return (tsClassification >> 8 /* typeOffset */) - 1;
  }
  return void 0;
}
function getTokenModifierFromClassification(tsClassification) {
  return tsClassification & 255 /* modifierMask */;
}
var tokenTypes = [];
tokenTypes[0 /* class */] = "class";
tokenTypes[1 /* enum */] = "enum";
tokenTypes[2 /* interface */] = "interface";
tokenTypes[3 /* namespace */] = "namespace";
tokenTypes[4 /* typeParameter */] = "typeParameter";
tokenTypes[5 /* type */] = "type";
tokenTypes[6 /* parameter */] = "parameter";
tokenTypes[7 /* variable */] = "variable";
tokenTypes[8 /* enumMember */] = "enumMember";
tokenTypes[9 /* property */] = "property";
tokenTypes[10 /* function */] = "function";
tokenTypes[11 /* method */] = "method";
var tokenModifiers = [];
tokenModifiers[2 /* async */] = "async";
tokenModifiers[0 /* declaration */] = "declaration";
tokenModifiers[3 /* readonly */] = "readonly";
tokenModifiers[1 /* static */] = "static";
tokenModifiers[5 /* local */] = "local";
tokenModifiers[4 /* defaultLibrary */] = "defaultLibrary";

// src/server/features/signatureHelp.ts
init_typeConverters();
var TypeScriptSignatureHelpProvider = class {
  constructor(client) {
    this.client = client;
  }
  async provideSignatureHelp(document, position, token) {
    const filepath = this.client.toPath(document.uri);
    if (!filepath) {
      return void 0;
    }
    const args = Position2.toFileLocationRequestArgs(
      filepath,
      position
    );
    let response;
    try {
      response = await this.client.interruptGetErr(() => this.client.execute("signatureHelp", args, token));
    } catch (e) {
      return void 0;
    }
    if (response.type !== "response" || !response.body) {
      return void 0;
    }
    let info = response.body;
    const result = {
      activeSignature: info.selectedItemIndex,
      activeParameter: this.getActiveParameter(info),
      signatures: info.items.map((signature) => {
        return this.convertSignature(signature);
      })
    };
    return result;
  }
  getActiveParameter(info) {
    const activeSignature = info.items[info.selectedItemIndex];
    if (activeSignature && activeSignature.isVariadic) {
      return Math.min(info.argumentIndex, activeSignature.parameters.length - 1);
    }
    return info.argumentIndex;
  }
  convertSignature(item) {
    var _a;
    let parameters = item.parameters.map((p) => {
      return {
        label: plainWithLinks(p.displayParts),
        documentation: markdownDocumentation(p.documentation, [])
      };
    });
    let label = plainWithLinks(item.prefixDisplayParts);
    label += parameters.map((parameter) => parameter.label).join(plainWithLinks(item.separatorDisplayParts));
    label += plainWithLinks(item.suffixDisplayParts);
    return {
      label,
      documentation: markdownDocumentation(
        item.documentation,
        (_a = item.tags) == null ? void 0 : _a.filter((x) => x.name !== "param")
      ),
      parameters
    };
  }
};
TypeScriptSignatureHelpProvider.triggerCharacters = ["(", ",", "<"];

// src/server/features/smartSelect.ts
init_typeConverters();
var SmartSelection = class {
  constructor(client) {
    this.client = client;
  }
  async provideSelectionRanges(document, positions, token) {
    const file2 = this.client.toPath(document.uri);
    if (!file2) {
      return void 0;
    }
    const args = {
      file: file2,
      locations: positions.map(Position2.toLocation)
    };
    const response = await this.client.execute("selectionRange", args, token);
    if (response.type !== "response" || !response.body) {
      return void 0;
    }
    return response.body.map(SmartSelection.convertSelectionRange);
  }
  static convertSelectionRange(selectionRange) {
    return {
      range: Range3.fromTextSpan(selectionRange.textSpan),
      parent: selectionRange.parent ? SmartSelection.convertSelectionRange(selectionRange.parent) : void 0
    };
  }
};

// src/server/features/tagClosing.ts
var import_coc27 = require("coc.nvim");
init_typeConverters();
var _TagClosing = class {
  constructor(client, descriptionLanguageId) {
    this.client = client;
    this.descriptionLanguageId = descriptionLanguageId;
    this._disposables = [];
    this._disposed = false;
    this._timeout = void 0;
    this._cancel = void 0;
    this._enable = true;
    this.checkConfig(import_coc27.window.activeTextEditor);
    import_coc27.events.on("TextInsert", this.onInsertChange, this, this._disposables);
    import_coc27.window.onDidChangeActiveTextEditor((e) => {
      this.checkConfig(e);
    }, null, this._disposables);
  }
  checkConfig(editor) {
    if (!editor)
      return;
    let { languageId, uri } = editor.document;
    let id = _TagClosing._configurationLanguages[languageId];
    if (!id || id !== this.descriptionLanguageId) {
      this._enable = false;
      return;
    }
    this._enable = import_coc27.workspace.getConfiguration(void 0, uri).get(`${id}.autoClosingTags`, true);
  }
  async onInsertChange(bufnr, change, lastInsert) {
    let doc = import_coc27.workspace.getDocument(bufnr);
    if (!doc || !doc.attached)
      return;
    let enabled = this.isEnabled(doc.filetype);
    if (!enabled)
      return;
    let { pre, changedtick, lnum } = change;
    if (lastInsert !== "/" && lastInsert != ">")
      return;
    if (pre.length > 1 && pre[pre.length - 2] == ">")
      return;
    const filepath = this.client.toOpenedFilePath(doc.uri);
    if (!filepath)
      return;
    if (this._timeout) {
      clearTimeout(this._timeout);
    }
    if (this._cancel) {
      this._cancel.cancel();
      this._cancel.dispose();
      this._cancel = void 0;
    }
    await doc.patchChange();
    this._timeout = setTimeout(async () => {
      this._timeout = void 0;
      if (this._disposed)
        return;
      if (doc.changedtick > changedtick)
        return;
      const position = import_coc27.Position.create(lnum - 1, pre.length);
      const args = Position2.toFileLocationRequestArgs(
        filepath,
        position
      );
      this._cancel = new import_coc27.CancellationTokenSource();
      const response = await this.client.execute(
        "jsxClosingTag",
        args,
        this._cancel.token
      );
      if (response.type !== "response" || !response.body) {
        return;
      }
      if (this._disposed)
        return;
      const insertion = response.body;
      if (doc.changedtick === changedtick) {
        import_coc27.snippetManager.insertSnippet(
          this.getTagSnippet(insertion).value,
          false,
          import_coc27.Range.create(position, position)
        );
      }
    }, 30);
  }
  isEnabled(languageId) {
    const configLang = _TagClosing._configurationLanguages[languageId];
    if (!configLang || configLang !== this.descriptionLanguageId) {
      return false;
    }
    if (!this._enable) {
      return false;
    }
    return true;
  }
  dispose() {
    this._disposed = true;
    if (this._timeout) {
      clearTimeout(this._timeout);
      this._timeout = void 0;
    }
    if (this._cancel) {
      this._cancel.cancel();
      this._cancel.dispose();
      this._cancel = void 0;
    }
    (0, import_coc27.disposeAll)(this._disposables);
    this._disposables = [];
  }
  getTagSnippet(closingTag) {
    const snippet = new SnippetString();
    snippet.appendPlaceholder("", 0);
    snippet.appendText(closingTag.newText);
    return snippet;
  }
};
var TagClosing = _TagClosing;
TagClosing._configurationLanguages = {
  "javascriptreact": "javascript",
  "typescriptreact": "typescript"
};

// src/server/organizeImports.ts
var import_coc28 = require("coc.nvim");
var import_vscode_languageserver_protocol13 = __toESM(require_main2());
init_protocol_const();
init_api();
init_typeConverters();
var organizeImportsCommand = {
  ids: ["typescript.organizeImports", "javascript.organizeImports"],
  minVersion: API.v280,
  title: "Organize Imports",
  kind: import_coc28.CodeActionKind.SourceOrganizeImports,
  mode: "All" /* All */
};
var sortImportsCommand = {
  ids: ["typescript.sortImports", "javascript.sortImports"],
  minVersion: API.v430,
  title: "Sort Imports",
  kind: import_coc28.CodeActionKind.Source + ".sortImports",
  mode: "SortAndCombine" /* SortAndCombine */
};
var removeUnusedImportsCommand = {
  ids: ["typescript.removeUnusedImports", "javascript.removeUnusedImports"],
  minVersion: API.v490,
  title: "Remove Unused Imports",
  kind: import_coc28.CodeActionKind.Source + ".removeUnusedImports",
  mode: "RemoveUnused" /* RemoveUnused */
};
var allCommands = [organizeImportsCommand, sortImportsCommand, removeUnusedImportsCommand];
function codeActionContains(kinds, kind) {
  return kinds.some((k) => kind === k || kind.startsWith(k + "."));
}
var OrganizeImportsCommand = class {
  constructor(id, commandMetadata, client) {
    this.id = id;
    this.commandMetadata = commandMetadata;
    this.client = client;
  }
  async execute(file2) {
    if (!file2) {
      const activeEditor = import_coc28.window.activeTextEditor;
      if (!activeEditor) {
        import_coc28.window.showErrorMessage("Organize Imports failed. No resource provided.");
        return;
      }
      const resource = activeEditor.document.uri;
      const openedFiledPath = this.client.toOpenedFilePath(resource);
      if (!openedFiledPath) {
        import_coc28.window.showErrorMessage("Organize Imports failed. Unknown file type.");
        return;
      }
      file2 = openedFiledPath;
    }
    const args = {
      scope: {
        type: "file",
        args: {
          file: file2
        }
      },
      skipDestructiveCodeActions: this.commandMetadata.mode === "SortAndCombine" /* SortAndCombine */,
      mode: OrganizeImportsMode2.toProtocolOrganizeImportsMode(this.commandMetadata.mode)
    };
    const response = await this.client.interruptGetErr(() => this.client.execute("organizeImports", args, import_coc28.CancellationToken.None));
    if (response.type !== "response" || !response.body) {
      return;
    }
    if (response.body.length) {
      const edits = WorkspaceEdit2.fromFileCodeEdits(this.client, response.body);
      return import_coc28.workspace.applyEdit(edits);
    }
  }
};
var OrganizeImportsCodeActionProvider = class {
  constructor(id, client, fileConfigManager) {
    this.id = id;
    this.client = client;
    this.fileConfigManager = fileConfigManager;
    this.disposables = [];
    this.metadata = {
      providedCodeActionKinds: allCommands.map((o) => o.kind)
    };
    for (let cmd of allCommands) {
      for (let commandId of cmd.ids) {
        if (!commandId.startsWith(this.id))
          continue;
        let command = new OrganizeImportsCommand(commandId, cmd, client);
        this.disposables.push(import_coc28.commands.registerCommand(command.id, command.execute, command, true));
      }
    }
  }
  async provideCodeActions(document, _range, context, token) {
    if (!context.only)
      return [];
    const file2 = this.client.toOpenedFilePath(document.uri);
    if (!file2)
      return [];
    await this.fileConfigManager.ensureConfigurationForDocument(document, token);
    let actions = [];
    for (let cmd of allCommands) {
      if (!this.client.apiVersion.gte(cmd.minVersion))
        continue;
      if (!codeActionContains(context.only, cmd.kind))
        continue;
      for (let commandId of cmd.ids) {
        if (!commandId.startsWith(this.id))
          continue;
        let action = import_vscode_languageserver_protocol13.CodeAction.create(cmd.title, {
          title: "",
          command: commandId,
          arguments: [file2]
        }, cmd.kind);
        actions.push(action);
      }
    }
    return actions;
  }
  dispose() {
    (0, import_coc28.disposeAll)(this.disposables);
  }
};

// src/server/tsServer/cachedResponse.ts
var CachedResponse = class {
  constructor() {
    this.version = -1;
    this.document = "";
  }
  execute(document, resolve) {
    if (this.response && this.matches(document)) {
      return this.response = this.response.then((result) => result.type === "cancelled" ? resolve() : result);
    }
    return this.reset(document, resolve);
  }
  matches(document) {
    return this.version === document.version && this.document === document.uri.toString();
  }
  async reset(document, resolve) {
    this.version = document.version;
    this.document = document.uri.toString();
    return this.response = resolve();
  }
};

// src/server/languageProvider.ts
init_typescriptService();
init_api();
var validateSetting = "validate.enable";
var suggestionSetting = "suggestionActions.enabled";
var LanguageProvider = class {
  constructor(client, fileConfigurationManager, description, typingsStatus) {
    this.client = client;
    this.fileConfigurationManager = fileConfigurationManager;
    this.description = description;
    this.disposables = [];
    import_coc29.workspace.onDidChangeConfiguration(this.configurationChanged, this, this.disposables);
    this.configurationChanged();
    client.onReady(() => {
      this.registerProviders(client, typingsStatus);
    });
  }
  get documentSelector() {
    const semantic = [];
    const syntax = [];
    for (const language2 of this.description.languageIds) {
      syntax.push({ language: language2 });
      for (const scheme of semanticSupportedSchemes) {
        semantic.push({ language: language2, scheme });
      }
    }
    return { semantic, syntax };
  }
  configurationChanged() {
    const config = import_coc29.workspace.getConfiguration(this.id);
    this.updateValidate(config.get(validateSetting, true));
    this.updateSuggestionDiagnostics(config.get(suggestionSetting, true));
  }
  get _diagnosticLanguage() {
    return this.description.diagnosticLanguage;
  }
  updateValidate(value) {
    this.client.diagnosticsManager.setValidate(this._diagnosticLanguage, value);
  }
  updateSuggestionDiagnostics(value) {
    this.client.diagnosticsManager.setEnableSuggestions(this._diagnosticLanguage, value);
  }
  dispose() {
    (0, import_coc29.disposeAll)(this.disposables);
  }
  _register(disposable) {
    this.disposables.push(disposable);
  }
  registerProviders(client, typingsStatus) {
    let id = this.description.id;
    const hasSemantic = this.client.capabilities.has(2 /* Semantic */);
    const { documentSelector } = this;
    this._register(
      import_coc29.languages.registerCompletionItemProvider(
        `tsc-${id}`,
        "TSC",
        documentSelector.syntax,
        new TypeScriptCompletionItemProvider(client, typingsStatus, this.fileConfigurationManager, id),
        TypeScriptCompletionItemProvider.triggerCharacters
      )
    );
    this._register(
      import_coc29.languages.registerCompletionItemProvider(
        `tsc-${id}-jsdoc`,
        "TSC",
        documentSelector.syntax,
        new JsDocCompletionProvider(client, this.description, this.fileConfigurationManager),
        ["*", " "]
      )
    );
    if (this.client.apiVersion.gte(API.v230)) {
      this._register(import_coc29.languages.registerCompletionItemProvider(
        `${id}-directive`,
        "TSC",
        documentSelector.syntax,
        new DirectiveCommentCompletionProvider(client),
        ["@"]
      ));
    }
    let definitionProvider = new TypeScriptDefinitionProvider(client);
    this._register(import_coc29.languages.registerDefinitionProvider(documentSelector.syntax, definitionProvider));
    this._register(import_coc29.languages.registerTypeDefinitionProvider(documentSelector.syntax, definitionProvider));
    if (hasSemantic) {
      this._register(import_coc29.languages.registerImplementationProvider(documentSelector.semantic, definitionProvider));
    }
    this._register(import_coc29.languages.registerReferencesProvider(documentSelector.syntax, new TypeScriptReferences(client)));
    this._register(import_coc29.languages.registerHoverProvider(documentSelector.syntax, new TypeScriptHoverProvider(client)));
    this._register(import_coc29.languages.registerDocumentHighlightProvider(documentSelector.syntax, new TypeScriptDocumentHighlightProvider(this.client)));
    this._register(import_coc29.languages.registerSignatureHelpProvider(documentSelector.syntax, new TypeScriptSignatureHelpProvider(client), ["(", ",", "<", ")"]));
    this._register(import_coc29.languages.registerDocumentSymbolProvider(documentSelector.syntax, new TypeScriptDocumentSymbolProvider(client)));
    if (hasSemantic) {
      const provider = new TypeScriptRenameProvider(this.description, client, this.fileConfigurationManager);
      this._register(import_coc29.languages.registerRenameProvider(documentSelector.semantic, provider));
    }
    let formatProvider = new TypeScriptFormattingProvider(client, this.fileConfigurationManager);
    this._register(import_coc29.languages.registerDocumentFormatProvider(documentSelector.syntax, formatProvider));
    this._register(import_coc29.languages.registerDocumentRangeFormatProvider(documentSelector.syntax, formatProvider));
    this._register(import_coc29.languages.registerOnTypeFormattingEditProvider(documentSelector.syntax, formatProvider, [";", "}", "\n", String.fromCharCode(27)]));
    this._register(import_coc29.languages.registerCodeActionProvider(documentSelector.syntax, new InstallModuleProvider(id), "tsserver"));
    if (this.client.apiVersion.gte(API.v380) && typeof import_coc29.languages["registerCallHierarchyProvider"] === "function" && hasSemantic) {
      this._register(import_coc29.languages.registerCallHierarchyProvider(documentSelector.semantic, new TypeScriptCallHierarchySupport(client)));
    }
    if (this.client.apiVersion.gte(API.v370) && hasSemantic) {
      const provider = new TypeScriptDocumentSemanticTokensProvider(client);
      if (typeof import_coc29.languages["registerDocumentRangeSemanticTokensProvider"] === "function") {
        this._register(import_coc29.languages.registerDocumentRangeSemanticTokensProvider(documentSelector.semantic, provider, provider.getLegend()));
      }
    }
    let { fileConfigurationManager } = this;
    let conf = fileConfigurationManager.getLanguageConfiguration(id);
    if (this.client.apiVersion.gte(API.v280)) {
      this._register(import_coc29.languages.registerFoldingRangeProvider(documentSelector.syntax, new TypeScriptFoldingProvider(this.client)));
      if (hasSemantic) {
        let provider = new OrganizeImportsCodeActionProvider(id, this.client, this.fileConfigurationManager);
        this._register(
          import_coc29.languages.registerCodeActionProvider(documentSelector.semantic, provider, "tsserver", provider.metadata.providedCodeActionKinds)
        );
        this.disposables.push(provider);
      }
    }
    if (this.client.apiVersion.gte(API.v240) && hasSemantic) {
      this._register(
        import_coc29.languages.registerCodeActionProvider(
          documentSelector.semantic,
          new TypeScriptRefactorProvider(client, this.fileConfigurationManager, id),
          "tsserver",
          [import_coc29.CodeActionKind.Refactor]
        )
      );
    }
    if (this.client.apiVersion.gte(API.v300) && hasSemantic) {
      let provider = new TypeScriptAutoFixProvider(client, this.fileConfigurationManager, client.diagnosticsManager);
      this._register(
        import_coc29.languages.registerCodeActionProvider(
          documentSelector.semantic,
          provider,
          "tsserver",
          provider.metadata.providedCodeActionKinds
        )
      );
    }
    if (hasSemantic) {
      this._register(
        import_coc29.languages.registerCodeActionProvider(
          documentSelector.semantic,
          new TypeScriptQuickFixProvider(client, this.fileConfigurationManager, client.diagnosticsManager, id),
          "tsserver",
          [import_coc29.CodeActionKind.QuickFix]
        )
      );
    }
    this._register(
      import_coc29.languages.registerCodeActionProvider(
        documentSelector.syntax,
        new ImportFixProvider(this.client.bufferSyncSupport),
        "tsserver",
        [import_coc29.CodeActionKind.QuickFix]
      )
    );
    if (hasSemantic) {
      let cachedResponse = new CachedResponse();
      if (this.client.apiVersion.gte(API.v206) && conf.get("referencesCodeLens.enabled")) {
        this._register(import_coc29.languages.registerCodeLensProvider(documentSelector.semantic, new TypeScriptReferencesCodeLensProvider(client, cachedResponse, id)));
      }
      if (this.client.apiVersion.gte(API.v220) && conf.get("implementationsCodeLens.enabled")) {
        this._register(import_coc29.languages.registerCodeLensProvider(documentSelector.semantic, new TypeScriptImplementationsCodeLensProvider(client, cachedResponse, id)));
      }
    }
    if (this.client.apiVersion.gte(API.v350)) {
      this._register(import_coc29.languages.registerSelectionRangeProvider(documentSelector.syntax, new SmartSelection(this.client)));
    }
    if (this.client.apiVersion.gte(API.v300)) {
      this._register(new TagClosing(this.client, id));
    }
    if (this.client.apiVersion.gte(API.v440) && hasSemantic) {
      if (typeof import_coc29.languages.registerInlayHintsProvider === "function") {
        let provider = new TypeScriptInlayHintsProvider(this.description, this.client, this.fileConfigurationManager);
        this._register(provider);
        this._register(import_coc29.languages.registerInlayHintsProvider(documentSelector.semantic, provider));
      } else {
        this.client.logger.error(`languages.registerInlayHintsProvider is not a function, inlay hints won't work`);
      }
    }
    if (this.client.apiVersion.gte(API.v510)) {
      const provider = new TypeScriptLinkedEditingRangeProvider(this.client);
      this._register(import_coc29.languages.registerLinkedEditingRangeProvider(documentSelector.semantic, provider));
    }
  }
  handles(resource, doc) {
    if (doc && this.description.languageIds.includes(doc.languageId)) {
      return true;
    }
    return this.handlesConfigFile(import_coc29.Uri.parse(resource));
  }
  handlesConfigFile(uri) {
    const base2 = import_path8.default.basename(uri.fsPath);
    return !!base2 && (!!this.description.configFilePattern && this.description.configFilePattern.test(base2));
  }
  handlesUri(resource) {
    const ext = import_path8.default.extname(resource.path).slice(1).toLowerCase();
    return this.description.standardFileExtensions.includes(ext) || this.handlesConfigFile(resource);
  }
  get id() {
    return this.description.id;
  }
  get diagnosticSource() {
    return this.description.diagnosticSource;
  }
  reInitialize() {
    this.client.diagnosticsManager.reInitialize();
  }
  triggerAllDiagnostics() {
    this.client.bufferSyncSupport.requestAllDiagnostics();
  }
  diagnosticsReceived(diagnosticsKind, resource, diagnostics) {
    const config = import_coc29.workspace.getConfiguration(this.id, resource);
    const reportUnnecessary = config.get("showUnused", true);
    const reportDeprecated = config.get("showDeprecated", true);
    this.client.diagnosticsManager.updateDiagnostics(resource, this._diagnosticLanguage, diagnosticsKind, diagnostics.filter((diag) => {
      if (!reportUnnecessary) {
        if (diag.reportUnnecessary && diag.severity === import_coc29.DiagnosticSeverity.Information) {
          return false;
        }
      }
      if (!reportDeprecated) {
        if (diag.reportDeprecated && diag.severity === import_coc29.DiagnosticSeverity.Hint) {
          return false;
        }
      }
      return true;
    }));
  }
};

// src/server/typescriptServiceClientHost.ts
init_protocol_const();

// src/server/utils/temp.ts
var fs4 = __toESM(require("fs"));
var os = __toESM(require("os"));
var path9 = __toESM(require("path"));
function makeRandomHexString(length) {
  const chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  let result = "";
  for (let i = 0; i < length; i++) {
    const idx = Math.floor(chars.length * Math.random());
    result += chars[idx];
  }
  return result;
}
var getRootTempDir = (() => {
  let dir;
  return () => {
    if (!dir) {
      dir = path9.join(os.tmpdir(), `coc-tsserver`);
    }
    if (!fs4.existsSync(dir)) {
      fs4.mkdirSync(dir);
    }
    return dir;
  };
})();
var getInstanceTempDir = (() => {
  let dir;
  return () => {
    dir ?? (dir = path9.join(getRootTempDir(), makeRandomHexString(20)));
    if (!fs4.existsSync(dir)) {
      fs4.mkdirSync(dir);
    }
    return dir;
  };
})();
function getTempFile(prefix) {
  return path9.join(getInstanceTempDir(), `${prefix}-${makeRandomHexString(20)}.tmp`);
}

// src/server/tsServer/cancellation.ts
var import_fs4 = __toESM(require("fs"));
var noopRequestCanceller = new class {
  constructor() {
    this.cancellationPipeName = void 0;
  }
  tryCancelOngoingRequest(_seq) {
    return false;
  }
}();
var noopRequestCancellerFactory = new class {
  create(_serverId, _tracer) {
    return noopRequestCanceller;
  }
}();
var NodeRequestCanceller = class {
  constructor(_serverId, _tracer) {
    this._serverId = _serverId;
    this._tracer = _tracer;
    this.cancellationPipeName = getTempFile("tscancellation");
  }
  tryCancelOngoingRequest(seq) {
    if (!this.cancellationPipeName) {
      return false;
    }
    this._tracer.logTrace(this._serverId, `TypeScript Server: trying to cancel ongoing request with sequence number ${seq}`);
    try {
      import_fs4.default.writeFileSync(this.cancellationPipeName + seq, "");
    } catch {
    }
    return true;
  }
};
var nodeRequestCancellerFactory = new class {
  create(serverId, tracer) {
    return new NodeRequestCanceller(serverId, tracer);
  }
}();

// src/server/tsServer/logDirectoryProvider.ts
var fs6 = __toESM(require("fs"));
var path10 = __toESM(require("path"));
var import_os = __toESM(require("os"));

// src/utils/memoize.ts
function memoize(_target, key, descriptor) {
  let fnKey;
  let fn;
  if (typeof descriptor.value === "function") {
    fnKey = "value";
    fn = descriptor.value;
  } else if (typeof descriptor.get === "function") {
    fnKey = "get";
    fn = descriptor.get;
  } else {
    throw new Error("not supported");
  }
  const memoizeKey = `$memoize$${key}`;
  descriptor[fnKey] = function(...args) {
    if (!this.hasOwnProperty(memoizeKey)) {
      Object.defineProperty(this, memoizeKey, {
        configurable: false,
        enumerable: false,
        writable: false,
        value: fn.apply(this, args)
      });
    }
    return this[memoizeKey];
  };
}

// src/server/tsServer/logDirectoryProvider.ts
var base = path10.join(import_os.default.tmpdir(), "coc-tsserver-log");
var NodeLogDirectoryProvider = class {
  constructor(context) {
    this.context = context;
  }
  getNewLogDirectory() {
    const root = this.logDirectory();
    if (root) {
      try {
        return fs6.mkdtempSync(path10.join(root, `tsserver-log-`));
      } catch (e) {
        return void 0;
      }
    }
    return void 0;
  }
  logDirectory() {
    try {
      const path19 = base;
      if (!fs6.existsSync(path19)) {
        fs6.mkdirSync(path19, { recursive: true });
      }
      return path19;
    } catch {
      return void 0;
    }
  }
};
__decorateClass([
  memoize
], NodeLogDirectoryProvider.prototype, "logDirectory", 1);

// src/server/tsServer/serverProcess.ts
var child_process = __toESM(require("child_process"));
var import_coc32 = require("coc.nvim");
var path11 = __toESM(require("path"));
init_api();

// src/server/utils/dispose.ts
var import_coc30 = require("coc.nvim");
var Disposable7 = class {
  constructor() {
    this._isDisposed = false;
    this._disposables = [];
  }
  dispose() {
    if (this._isDisposed) {
      return;
    }
    this._isDisposed = true;
    (0, import_coc30.disposeAll)(this._disposables);
  }
  _register(value) {
    if (this._isDisposed) {
      value.dispose();
    } else {
      this._disposables.push(value);
    }
    return value;
  }
  get isDisposed() {
    return this._isDisposed;
  }
};

// src/server/tsServer/server.ts
var import_coc31 = require("coc.nvim");
init_protocol_const();

// src/server/tsServer/callbackMap.ts
init_typescriptService();
var CallbackMap = class {
  constructor() {
    this._callbacks = /* @__PURE__ */ new Map();
    this._asyncCallbacks = /* @__PURE__ */ new Map();
  }
  destroy(cause) {
    const cancellation = new ServerResponse.Cancelled(cause);
    for (const callback of this._callbacks.values()) {
      callback.onSuccess(cancellation);
    }
    this._callbacks.clear();
    for (const callback of this._asyncCallbacks.values()) {
      callback.onSuccess(cancellation);
    }
    this._asyncCallbacks.clear();
  }
  add(seq, callback, isAsync) {
    if (isAsync) {
      this._asyncCallbacks.set(seq, callback);
    } else {
      this._callbacks.set(seq, callback);
    }
  }
  fetch(seq) {
    const callback = this._callbacks.get(seq) || this._asyncCallbacks.get(seq);
    this.delete(seq);
    return callback;
  }
  delete(seq) {
    if (!this._callbacks.delete(seq)) {
      this._asyncCallbacks.delete(seq);
    }
  }
};

// src/server/tsServer/requestQueue.ts
var RequestQueue = class {
  constructor() {
    this.queue = [];
    this.sequenceNumber = 0;
  }
  get length() {
    return this.queue.length;
  }
  enqueue(item) {
    if (item.queueingType === 1 /* Normal */) {
      let index = this.queue.length - 1;
      while (index >= 0) {
        if (this.queue[index].queueingType !== 2 /* LowPriority */) {
          break;
        }
        --index;
      }
      this.queue.splice(index + 1, 0, item);
    } else {
      this.queue.push(item);
    }
  }
  dequeue() {
    return this.queue.shift();
  }
  tryDeletePendingRequest(seq) {
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i].request.seq === seq) {
        this.queue.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  createRequest(command, args) {
    return {
      seq: this.sequenceNumber++,
      type: "request",
      command,
      arguments: args
    };
  }
};

// src/server/tsServer/serverError.ts
var TypeScriptServerError = class extends Error {
  constructor(serverId, version, response, serverMessage, serverStack, sanitizedStack) {
    super(`<${serverId}> TypeScript Server Error (${version.version})
${serverMessage}
${serverStack}`);
    this.serverId = serverId;
    this.version = version;
    this.response = response;
    this.serverMessage = serverMessage;
    this.serverStack = serverStack;
    this.sanitizedStack = sanitizedStack;
  }
  static create(serverId, version, response) {
    const parsedResult = TypeScriptServerError.parseErrorText(response);
    return new TypeScriptServerError(serverId, version, response, parsedResult == null ? void 0 : parsedResult.message, parsedResult == null ? void 0 : parsedResult.stack, parsedResult == null ? void 0 : parsedResult.sanitizedStack);
  }
  get serverErrorText() {
    return this.response.message;
  }
  get serverCommand() {
    return this.response.command;
  }
  get telemetry() {
    return {
      command: this.serverCommand,
      serverid: this.serverId,
      sanitizedstack: this.sanitizedStack || "",
      badclient: /\bBADCLIENT\b/.test(this.stack || "")
    };
  }
  static parseErrorText(response) {
    const errorText = response.message;
    if (errorText) {
      const errorPrefix = "Error processing request. ";
      if (errorText.startsWith(errorPrefix)) {
        const prefixFreeErrorText = errorText.substr(errorPrefix.length);
        const newlineIndex = prefixFreeErrorText.indexOf("\n");
        if (newlineIndex >= 0) {
          const stack = prefixFreeErrorText.substring(newlineIndex + 1);
          return {
            message: prefixFreeErrorText.substring(0, newlineIndex),
            stack,
            sanitizedStack: TypeScriptServerError.sanitizeStack(stack)
          };
        }
      }
    }
    return void 0;
  }
  static sanitizeStack(message) {
    if (!message) {
      return "";
    }
    const regex = /(\btsserver)?(\.(?:ts|tsx|js|jsx)(?::\d+(?::\d+)?)?)\)?$/igm;
    let serverStack = "";
    while (true) {
      const match = regex.exec(message);
      if (!match) {
        break;
      }
      serverStack += `${match[1] || "suppressed"}${match[2]}
`;
    }
    return serverStack;
  }
};

// src/server/tsServer/server.ts
init_typescriptService();
var _ProcessBasedTsServer = class extends Disposable7 {
  constructor(_serverId, _serverSource, _process, _tsServerLogFile, _requestCanceller, _version, _tracer) {
    super();
    this._serverId = _serverId;
    this._serverSource = _serverSource;
    this._process = _process;
    this._tsServerLogFile = _tsServerLogFile;
    this._requestCanceller = _requestCanceller;
    this._version = _version;
    this._tracer = _tracer;
    this._requestQueue = new RequestQueue();
    this._callbacks = new CallbackMap();
    this._pendingResponses = /* @__PURE__ */ new Set();
    this._onEvent = this._register(new import_coc31.Emitter());
    this.onEvent = this._onEvent.event;
    this._onExit = this._register(new import_coc31.Emitter());
    this.onExit = this._onExit.event;
    this._onError = this._register(new import_coc31.Emitter());
    this.onError = this._onError.event;
    this._process.onData((msg) => {
      this.dispatchMessage(msg);
    });
    this._process.onExit((code, signal) => {
      this._onExit.fire({ code, signal });
      this._callbacks.destroy("server exited");
    });
    this._process.onError((error) => {
      this._onError.fire(error);
      this._callbacks.destroy("server errored");
    });
  }
  get tsServerLogFile() {
    return this._tsServerLogFile;
  }
  write(serverRequest) {
    this._process.write(serverRequest);
  }
  dispose() {
    super.dispose();
    this._callbacks.destroy("server disposed");
    this._pendingResponses.clear();
  }
  kill() {
    this._process.kill();
  }
  dispatchMessage(message) {
    try {
      switch (message.type) {
        case "response":
          if (this._serverSource) {
            this.dispatchResponse({
              ...message,
              _serverType: this._serverSource
            });
          } else {
            this.dispatchResponse(message);
          }
          break;
        case "event": {
          const event = message;
          if (event.event === "requestCompleted") {
            const seq = event.body.request_seq;
            const callback = this._callbacks.fetch(seq);
            if (callback) {
              this._tracer.traceRequestCompleted(this._serverId, "requestCompleted", seq, callback);
              callback.onSuccess(void 0);
            }
          } else {
            this._tracer.traceEvent(this._serverId, event);
            this._onEvent.fire(event);
          }
          break;
        }
        default:
          throw new Error(`Unknown message type ${message.type} received`);
      }
    } finally {
      this.sendNextRequests();
    }
  }
  tryCancelRequest(seq, command) {
    try {
      if (this._requestQueue.tryDeletePendingRequest(seq)) {
        this.logTrace(`Canceled request with sequence number ${seq}`);
        return true;
      }
      if (this._requestCanceller.tryCancelOngoingRequest(seq)) {
        return true;
      }
      this.logTrace(`Tried to cancel request with sequence number ${seq}. But request got already delivered.`);
      return false;
    } finally {
      const callback = this.fetchCallback(seq);
      callback == null ? void 0 : callback.onSuccess(new ServerResponse.Cancelled(`Cancelled request ${seq} - ${command}`));
    }
  }
  dispatchResponse(response) {
    const callback = this.fetchCallback(response.request_seq);
    if (!callback) {
      return;
    }
    this._tracer.traceResponse(this._serverId, response, callback);
    if (response.success) {
      callback.onSuccess(response);
    } else if (response.message === "No content available.") {
      callback.onSuccess(ServerResponse.NoContent);
    } else {
      callback.onError(TypeScriptServerError.create(this._serverId, this._version, response));
    }
  }
  executeImpl(command, args, executeInfo) {
    const request = this._requestQueue.createRequest(command, args);
    const requestInfo = {
      request,
      expectsResponse: executeInfo.expectsResult,
      isAsync: executeInfo.isAsync,
      queueingType: _ProcessBasedTsServer.getQueueingType(command, executeInfo.lowPriority)
    };
    let result;
    if (executeInfo.expectsResult) {
      result = new Promise((resolve, reject) => {
        this._callbacks.add(request.seq, { onSuccess: resolve, onError: reject, queuingStartTime: Date.now(), isAsync: executeInfo.isAsync }, executeInfo.isAsync);
        if (executeInfo.token) {
          executeInfo.token.onCancellationRequested(() => {
            this.tryCancelRequest(request.seq, command);
          });
        }
      }).catch((err) => {
        if (err instanceof TypeScriptServerError) {
          if (!executeInfo.token || !executeInfo.token.isCancellationRequested) {
          }
        }
        throw err;
      });
    }
    this._requestQueue.enqueue(requestInfo);
    this.sendNextRequests();
    return [result];
  }
  sendNextRequests() {
    while (this._pendingResponses.size === 0 && this._requestQueue.length > 0) {
      const item = this._requestQueue.dequeue();
      if (item) {
        this.sendRequest(item);
      }
    }
  }
  sendRequest(requestItem) {
    const serverRequest = requestItem.request;
    this._tracer.traceRequest(this._serverId, serverRequest, requestItem.expectsResponse, this._requestQueue.length);
    if (requestItem.expectsResponse && !requestItem.isAsync) {
      this._pendingResponses.add(requestItem.request.seq);
    }
    try {
      this.write(serverRequest);
    } catch (err) {
      const callback = this.fetchCallback(serverRequest.seq);
      callback == null ? void 0 : callback.onError(err);
    }
  }
  fetchCallback(seq) {
    const callback = this._callbacks.fetch(seq);
    if (!callback) {
      return void 0;
    }
    this._pendingResponses.delete(seq);
    return callback;
  }
  logTrace(message) {
    this._tracer.logTrace(this._serverId, message);
  }
  static getQueueingType(command, lowPriority) {
    if (_ProcessBasedTsServer.fenceCommands.has(command)) {
      return 3 /* Fence */;
    }
    return lowPriority ? 2 /* LowPriority */ : 1 /* Normal */;
  }
};
var ProcessBasedTsServer = _ProcessBasedTsServer;
ProcessBasedTsServer.fenceCommands = /* @__PURE__ */ new Set(["change", "close", "open", "updateOpen"]);
var _RequestRouter = class {
  constructor(servers, delegate) {
    this.servers = servers;
    this.delegate = delegate;
  }
  execute(command, args, executeInfo) {
    if (_RequestRouter.sharedCommands.has(command) && typeof executeInfo.executionTarget === "undefined") {
      const requestStates = this.servers.map(() => RequestState.Unresolved);
      let token = void 0;
      if (executeInfo.token) {
        const source = new import_coc31.CancellationTokenSource();
        executeInfo.token.onCancellationRequested(() => {
          if (requestStates.some((state) => state === RequestState.Resolved)) {
            return;
          }
          source.cancel();
        });
        token = source.token;
      }
      const allRequests = [];
      for (let serverIndex = 0; serverIndex < this.servers.length; ++serverIndex) {
        const server = this.servers[serverIndex].server;
        const request = server.executeImpl(command, args, { ...executeInfo, token })[0];
        allRequests.push(request);
        if (request) {
          request.then((result) => {
            requestStates[serverIndex] = RequestState.Resolved;
            const erroredRequest = requestStates.find((state) => state.type === RequestState.Type.Errored);
            if (erroredRequest) {
              this.delegate.onFatalError(command, erroredRequest.err);
            }
            return result;
          }, (err) => {
            requestStates[serverIndex] = new RequestState.Errored(err);
            if (requestStates.some((state) => state === RequestState.Resolved)) {
              this.delegate.onFatalError(command, err);
            }
            throw err;
          });
        }
      }
      return allRequests;
    }
    for (const { canRun, server } of this.servers) {
      if (!canRun || canRun(command, executeInfo)) {
        return server.executeImpl(command, args, executeInfo);
      }
    }
    throw new Error(`Could not find server for command: '${command}'`);
  }
};
var RequestRouter = _RequestRouter;
RequestRouter.sharedCommands = /* @__PURE__ */ new Set([
  "change",
  "close",
  "open",
  "updateOpen",
  "configure"
]);
var _GetErrRoutingTsServer = class extends Disposable7 {
  constructor(servers, delegate) {
    super();
    this._onEvent = this._register(new import_coc31.Emitter());
    this.onEvent = this._onEvent.event;
    this._onExit = this._register(new import_coc31.Emitter());
    this.onExit = this._onExit.event;
    this._onError = this._register(new import_coc31.Emitter());
    this.onError = this._onError.event;
    this.getErrServer = servers.getErr;
    this.mainServer = servers.primary;
    this.router = new RequestRouter(
      [
        { server: this.getErrServer, canRun: (command) => ["geterr", "geterrForProject"].includes(command) },
        { server: this.mainServer, canRun: void 0 }
      ],
      delegate
    );
    this._register(this.getErrServer.onEvent((e) => {
      if (_GetErrRoutingTsServer.diagnosticEvents.has(e.event)) {
        this._onEvent.fire(e);
      }
    }));
    this._register(this.mainServer.onEvent((e) => {
      if (!_GetErrRoutingTsServer.diagnosticEvents.has(e.event)) {
        this._onEvent.fire(e);
      }
    }));
    this._register(this.getErrServer.onError((e) => this._onError.fire(e)));
    this._register(this.mainServer.onError((e) => this._onError.fire(e)));
    this._register(this.mainServer.onExit((e) => {
      this._onExit.fire(e);
      this.getErrServer.kill();
    }));
  }
  get tsServerLogFile() {
    return this.mainServer.tsServerLogFile;
  }
  kill() {
    this.getErrServer.kill();
    this.mainServer.kill();
  }
  executeImpl(command, args, executeInfo) {
    return this.router.execute(command, args, executeInfo);
  }
};
var GetErrRoutingTsServer = _GetErrRoutingTsServer;
GetErrRoutingTsServer.diagnosticEvents = /* @__PURE__ */ new Set([
  "configFileDiag" /* configFileDiag */,
  "syntaxDiag" /* syntaxDiag */,
  "semanticDiag" /* semanticDiag */,
  "suggestionDiag" /* suggestionDiag */
]);
var _SyntaxRoutingTsServer = class extends Disposable7 {
  constructor(servers, delegate, enableDynamicRouting) {
    super();
    this._projectLoading = true;
    this._onEvent = this._register(new import_coc31.Emitter());
    this.onEvent = this._onEvent.event;
    this._onExit = this._register(new import_coc31.Emitter());
    this.onExit = this._onExit.event;
    this._onError = this._register(new import_coc31.Emitter());
    this.onError = this._onError.event;
    this.syntaxServer = servers.syntax;
    this.semanticServer = servers.semantic;
    this.router = new RequestRouter(
      [
        {
          server: this.syntaxServer,
          canRun: (command, execInfo) => {
            switch (execInfo.executionTarget) {
              case 0 /* Semantic */:
                return false;
              case 1 /* Syntax */:
                return true;
            }
            if (_SyntaxRoutingTsServer.syntaxAlwaysCommands.has(command)) {
              return true;
            }
            if (_SyntaxRoutingTsServer.semanticCommands.has(command)) {
              return false;
            }
            if (enableDynamicRouting && this.projectLoading && _SyntaxRoutingTsServer.syntaxAllowedCommands.has(command)) {
              return true;
            }
            return false;
          }
        },
        {
          server: this.semanticServer,
          canRun: void 0
        }
      ],
      delegate
    );
    this._register(this.syntaxServer.onEvent((e) => {
      return this._onEvent.fire(e);
    }));
    this._register(this.semanticServer.onEvent((e) => {
      switch (e.event) {
        case "projectLoadingStart" /* projectLoadingStart */:
          this._projectLoading = true;
          break;
        case "projectLoadingFinish" /* projectLoadingFinish */:
        case "semanticDiag" /* semanticDiag */:
        case "syntaxDiag" /* syntaxDiag */:
        case "suggestionDiag" /* suggestionDiag */:
        case "configFileDiag" /* configFileDiag */:
          this._projectLoading = false;
          break;
      }
      return this._onEvent.fire(e);
    }));
    this._register(this.semanticServer.onExit((e) => {
      this._onExit.fire(e);
      this.syntaxServer.kill();
    }));
    this._register(this.semanticServer.onError((e) => this._onError.fire(e)));
  }
  get projectLoading() {
    return this._projectLoading;
  }
  get tsServerLogFile() {
    return this.semanticServer.tsServerLogFile;
  }
  kill() {
    this.syntaxServer.kill();
    this.semanticServer.kill();
  }
  executeImpl(command, args, executeInfo) {
    return this.router.execute(command, args, executeInfo);
  }
};
var SyntaxRoutingTsServer = _SyntaxRoutingTsServer;
SyntaxRoutingTsServer.syntaxAlwaysCommands = /* @__PURE__ */ new Set([
  "navtree",
  "getOutliningSpans",
  "jsxClosingTag",
  "selectionRange",
  "format",
  "formatonkey",
  "docCommentTemplate"
]);
SyntaxRoutingTsServer.semanticCommands = /* @__PURE__ */ new Set([
  "geterr",
  "geterrForProject",
  "projectInfo",
  "configurePlugin"
]);
SyntaxRoutingTsServer.syntaxAllowedCommands = /* @__PURE__ */ new Set([
  "completions",
  "completionEntryDetails",
  "completionInfo",
  "definition",
  "definitionAndBoundSpan",
  "documentHighlights",
  "implementation",
  "navto",
  "quickinfo",
  "references",
  "rename",
  "signatureHelp"
]);
var RequestState;
((RequestState2) => {
  let Type;
  ((Type2) => {
    Type2[Type2["Unresolved"] = 0] = "Unresolved";
    Type2[Type2["Resolved"] = 1] = "Resolved";
    Type2[Type2["Errored"] = 2] = "Errored";
  })(Type = RequestState2.Type || (RequestState2.Type = {}));
  RequestState2.Unresolved = { type: 0 /* Unresolved */ };
  RequestState2.Resolved = { type: 1 /* Resolved */ };
  class Errored {
    constructor(err) {
      this.err = err;
      this.type = 2 /* Errored */;
    }
  }
  RequestState2.Errored = Errored;
})(RequestState || (RequestState = {}));

// src/server/tsServer/serverProcess.ts
var defaultSize = 8192;
var contentLength = "Content-Length: ";
var contentLengthSize = Buffer.byteLength(contentLength, "utf8");
var blank = Buffer.from(" ", "utf8")[0];
var backslashR = Buffer.from("\r", "utf8")[0];
var backslashN = Buffer.from("\n", "utf8")[0];
var ProtocolBuffer = class {
  constructor() {
    this.index = 0;
    this.buffer = Buffer.allocUnsafe(defaultSize);
  }
  append(data) {
    let toAppend = null;
    if (Buffer.isBuffer(data)) {
      toAppend = data;
    } else {
      toAppend = Buffer.from(data, "utf8");
    }
    if (this.buffer.length - this.index >= toAppend.length) {
      toAppend.copy(this.buffer, this.index, 0, toAppend.length);
    } else {
      const newSize = (Math.ceil((this.index + toAppend.length) / defaultSize) + 1) * defaultSize;
      if (this.index === 0) {
        this.buffer = Buffer.allocUnsafe(newSize);
        toAppend.copy(this.buffer, 0, 0, toAppend.length);
      } else {
        this.buffer = Buffer.concat([this.buffer.slice(0, this.index), toAppend], newSize);
      }
    }
    this.index += toAppend.length;
  }
  tryReadContentLength() {
    let result = -1;
    let current = 0;
    while (current < this.index && (this.buffer[current] === blank || this.buffer[current] === backslashR || this.buffer[current] === backslashN)) {
      current++;
    }
    if (this.index < current + contentLengthSize) {
      return result;
    }
    current += contentLengthSize;
    const start = current;
    while (current < this.index && this.buffer[current] !== backslashR) {
      current++;
    }
    if (current + 3 >= this.index || this.buffer[current + 1] !== backslashN || this.buffer[current + 2] !== backslashR || this.buffer[current + 3] !== backslashN) {
      return result;
    }
    const data = this.buffer.toString("utf8", start, current);
    result = parseInt(data);
    this.buffer = this.buffer.slice(current + 4);
    this.index = this.index - (current + 4);
    return result;
  }
  tryReadContent(length) {
    if (this.index < length) {
      return null;
    }
    const result = this.buffer.toString("utf8", 0, length);
    let sourceStart = length;
    while (sourceStart < this.index && (this.buffer[sourceStart] === backslashR || this.buffer[sourceStart] === backslashN)) {
      sourceStart++;
    }
    this.buffer.copy(this.buffer, 0, sourceStart);
    this.index = this.index - sourceStart;
    return result;
  }
};
var Reader = class extends Disposable7 {
  constructor(readable) {
    super();
    this.buffer = new ProtocolBuffer();
    this.nextMessageLength = -1;
    this._onError = this._register(new import_coc32.Emitter());
    this.onError = this._onError.event;
    this._onData = this._register(new import_coc32.Emitter());
    this.onData = this._onData.event;
    readable.on("data", (data) => this.onLengthData(data));
  }
  onLengthData(data) {
    if (this.isDisposed) {
      return;
    }
    try {
      this.buffer.append(data);
      while (true) {
        if (this.nextMessageLength === -1) {
          this.nextMessageLength = this.buffer.tryReadContentLength();
          if (this.nextMessageLength === -1) {
            return;
          }
        }
        const msg = this.buffer.tryReadContent(this.nextMessageLength);
        if (msg === null) {
          return;
        }
        this.nextMessageLength = -1;
        const json = JSON.parse(msg);
        this._onData.fire(json);
      }
    } catch (e) {
      this._onError.fire(e);
    }
  }
};
function generatePatchedEnv(env, modulePath) {
  const newEnv = Object.assign({}, env);
  newEnv["NODE_PATH"] = path11.join(modulePath, "..", "..", "..");
  newEnv["PATH"] = newEnv["PATH"] || process.env.PATH;
  return newEnv;
}
function getExecArgv(kind, configuration) {
  const args = [];
  const debugPort = getDebugPort(kind);
  if (debugPort) {
    const inspectFlag = getTssDebugBrk() ? "--inspect-brk" : "--inspect";
    args.push(`${inspectFlag}=${debugPort}`);
  }
  if (configuration.maxTsServerMemory) {
    args.push(`--max-old-space-size=${configuration.maxTsServerMemory}`);
  }
  return args;
}
function getDebugPort(kind) {
  if (kind === "syntax" /* Syntax */) {
    return void 0;
  }
  const value = getTssDebugBrk() || getTssDebug();
  if (value) {
    const port = parseInt(value);
    if (!isNaN(port)) {
      return port;
    }
  }
  return void 0;
}
function getTssDebug() {
  return process.env[process.env.remoteName ? "TSS_REMOTE_DEBUG" : "TSS_DEBUG"];
}
function getTssDebugBrk() {
  return process.env[process.env.remoteName ? "TSS_REMOTE_DEBUG_BRK" : "TSS_DEBUG_BRK"];
}
var IpcChildServerProcess = class extends Disposable7 {
  constructor(_process) {
    super();
    this._process = _process;
  }
  write(serverRequest) {
    this._process.send(serverRequest);
  }
  onData(handler) {
    this._process.on("message", handler);
  }
  onExit(handler) {
    this._process.on("exit", handler);
  }
  onError(handler) {
    this._process.on("error", handler);
  }
  kill() {
    this._process.kill();
  }
};
var StdioChildServerProcess = class extends Disposable7 {
  constructor(_process) {
    super();
    this._process = _process;
    this._reader = this._register(new Reader(this._process.stdout));
  }
  write(serverRequest) {
    this._process.stdin.write(JSON.stringify(serverRequest) + "\r\n", "utf8");
  }
  onData(handler) {
    this._reader.onData(handler);
  }
  onExit(handler) {
    this._process.on("exit", handler);
  }
  onError(handler) {
    this._process.on("error", handler);
    this._reader.onError(handler);
  }
  kill() {
    this._process.kill();
    this._reader.dispose();
  }
};
var ServiceProcessFactory = class {
  fork(version, args, kind, configuration) {
    var _a;
    let tsServerPath = version.tsServerPath;
    const useIpc = (_a = version.version) == null ? void 0 : _a.gte(API.v460);
    const runtimeArgs = [...args];
    if (useIpc) {
      runtimeArgs.push("--useNodeIpc");
    }
    const childProcess = child_process.fork(tsServerPath, runtimeArgs, {
      silent: true,
      cwd: void 0,
      env: generatePatchedEnv(process.env, tsServerPath),
      execArgv: getExecArgv(kind, configuration),
      stdio: useIpc ? ["pipe", "pipe", "pipe", "ipc"] : void 0
    });
    return useIpc ? new IpcChildServerProcess(childProcess) : new StdioChildServerProcess(childProcess);
  }
};

// src/server/typescriptServiceClient.ts
var import_coc44 = require("coc.nvim");
var import_path11 = __toESM(require("path"));

// src/server/features/bufferSyncSupport.ts
var import_coc34 = require("coc.nvim");
var import_vscode_languageserver_protocol14 = __toESM(require_main2());
init_typescriptService();
init_api();
init_async();
init_typeConverters();
init_languageModeIds();

// src/server/utils/resourceMap.ts
var import_coc33 = require("coc.nvim");
function defaultPathNormalizer(resource) {
  let u = import_coc33.Uri.parse(resource);
  if (u.scheme === "file") {
    return u.fsPath;
  }
  return resource.toString();
}
var ResourceMap = class {
  constructor(_normalizePath = defaultPathNormalizer) {
    this._normalizePath = _normalizePath;
    this._map = /* @__PURE__ */ new Map();
  }
  get size() {
    return this._map.size;
  }
  get entries() {
    return this._map.values();
  }
  has(uri) {
    const file2 = this.toKey(uri);
    return !!file2 && this._map.has(file2);
  }
  get(uri) {
    const file2 = this.toKey(uri);
    if (!file2)
      return void 0;
    let entry = this._map.get(file2);
    return entry ? entry.value : void 0;
  }
  set(uri, value) {
    const file2 = this.toKey(uri);
    if (file2) {
      this._map.set(file2, { uri, value });
    }
  }
  delete(uri) {
    const file2 = this.toKey(uri);
    if (file2) {
      this._map.delete(file2);
    }
  }
  get values() {
    return Array.from(this._map.values()).map((x) => x.value);
  }
  get uris() {
    return Array.from(this._map.values()).map((x) => x.uri);
  }
  clear() {
    this._map.clear();
  }
  toKey(uri) {
    const key = this._normalizePath ? this._normalizePath(uri) : uri;
    if (!key) {
      return key;
    }
    return this.isCaseInsensitivePath(key) ? key.toLowerCase() : key;
  }
  isCaseInsensitivePath(path19) {
    if (isWindowsPath(path19)) {
      return true;
    }
    return path19[0] === "/" && this.onIsCaseInsenitiveFileSystem;
  }
  get onIsCaseInsenitiveFileSystem() {
    if (process.platform === "win32") {
      return true;
    }
    if (process.platform === "darwin") {
      return true;
    }
    return false;
  }
};
function isWindowsPath(path19) {
  return /^[a-zA-Z]:\\/.test(path19);
}

// src/server/features/bufferSyncSupport.ts
var CloseOperation = class {
  constructor(args) {
    this.args = args;
    this.type = 0 /* Close */;
  }
};
var OpenOperation = class {
  constructor(args) {
    this.args = args;
    this.type = 1 /* Open */;
  }
};
var ChangeOperation = class {
  constructor(args) {
    this.args = args;
    this.type = 2 /* Change */;
  }
};
var SyncedBuffer = class {
  constructor(document, filepath, client, synchronizer) {
    this.document = document;
    this.filepath = filepath;
    this.client = client;
    this.synchronizer = synchronizer;
    this.state = 1 /* Initial */;
  }
  open() {
    let folder = import_coc34.workspace.getWorkspaceFolder(this.document.uri);
    const args = {
      file: this.filepath,
      fileContent: this.document.getText(),
      projectRootPath: folder ? import_coc34.Uri.parse(folder.uri).fsPath : void 0
    };
    const scriptKind = mode2ScriptKind(this.document.languageId);
    if (scriptKind) {
      args.scriptKindName = scriptKind;
    }
    if (this.client.apiVersion.gte(API.v240)) {
      const tsPluginsForDocument = this.client.pluginManager.plugins.filter((x) => x.languages.indexOf(this.document.languageId) >= 0);
      if (tsPluginsForDocument.length) {
        args.plugins = tsPluginsForDocument.map((plugin) => plugin.name);
      }
    }
    this.synchronizer.open(this.resource, args);
    this.state = 2 /* Open */;
  }
  get resource() {
    return this.document.uri;
  }
  get lineCount() {
    return this.document.lineCount;
  }
  get kind() {
    if (this.document.languageId.startsWith("javascript")) {
      return 2 /* JavaScript */;
    }
    return 1 /* TypeScript */;
  }
  close() {
    if (this.state !== 2 /* Open */) {
      this.state = 2 /* Closed */;
      return false;
    }
    this.state = 2 /* Closed */;
    return this.synchronizer.close(this.resource, this.filepath);
  }
  onContentChanged(events2) {
    if (this.state !== 2 /* Open */) {
      console.error(`Unexpected buffer state: ${this.state}`);
    }
    this.synchronizer.change(this.resource, this.filepath, events2);
  }
};
var SyncedBufferMap = class extends ResourceMap {
  getForPath(filePath) {
    return this.get(import_coc34.Uri.file(filePath).toString());
  }
  get allBuffers() {
    return this.values;
  }
};
var PendingDiagnostics = class extends ResourceMap {
  getOrderedFileSet() {
    const orderedResources = Array.from(this.entries).sort((a, b) => a.value - b.value).map((entry) => entry.uri);
    const map = new ResourceMap(this._normalizePath);
    for (const resource of orderedResources) {
      map.set(resource, void 0);
    }
    return map;
  }
};
var BufferSynchronizer = class {
  constructor(client, pathNormalizer) {
    this.client = client;
    this._pending = new ResourceMap(pathNormalizer);
  }
  open(resource, args) {
    if (this.supportsBatching) {
      this.updatePending(resource, new OpenOperation(args));
    } else {
      this.client.executeWithoutWaitingForResponse("open", args);
    }
  }
  close(resource, filepath) {
    if (this.supportsBatching) {
      return this.updatePending(resource, new CloseOperation(filepath));
    } else {
      const args = { file: filepath };
      this.client.executeWithoutWaitingForResponse("close", args);
      return true;
    }
  }
  change(resource, filepath, events2) {
    if (!events2.length) {
      return;
    }
    if (this.supportsBatching) {
      this.updatePending(resource, new ChangeOperation({
        fileName: filepath,
        textChanges: events2.map((change) => ({
          newText: change.text,
          start: Position2.toLocation(change.range.start),
          end: Position2.toLocation(change.range.end)
        })).reverse()
      }));
    } else {
      for (const { range, text } of events2) {
        const args = {
          insertString: text,
          ...Range3.toFormattingRequestArgs(filepath, range)
        };
        this.client.executeWithoutWaitingForResponse("change", args);
      }
    }
  }
  reset() {
    this._pending.clear();
  }
  beforeCommand(command) {
    if (command === "updateOpen") {
      return;
    }
    this.flush();
  }
  flush() {
    if (!this.supportsBatching) {
      this._pending.clear();
      return;
    }
    if (this._pending.size > 0) {
      const closedFiles = [];
      const openFiles = [];
      const changedFiles = [];
      for (const change of this._pending.values) {
        switch (change.type) {
          case 2 /* Change */:
            changedFiles.push(change.args);
            break;
          case 1 /* Open */:
            openFiles.push(change.args);
            break;
          case 0 /* Close */:
            closedFiles.push(change.args);
            break;
        }
      }
      this.client.execute("updateOpen", { changedFiles, closedFiles, openFiles }, import_vscode_languageserver_protocol14.CancellationToken.None, { nonRecoverable: true });
      this._pending.clear();
    }
  }
  get supportsBatching() {
    return this.client.apiVersion.gte(API.v340);
  }
  updatePending(resource, op) {
    switch (op.type) {
      case 0 /* Close */:
        const existing = this._pending.get(resource);
        switch (existing == null ? void 0 : existing.type) {
          case 1 /* Open */:
            this._pending.delete(resource);
            return false;
        }
        break;
    }
    if (this._pending.has(resource)) {
      this.flush();
    }
    this._pending.set(resource, op);
    return true;
  }
};
var GetErrRequest = class {
  constructor(client, uris, _token, onDone) {
    this.client = client;
    this.uris = uris;
    this._token = _token;
    this._done = false;
    if (!this.isErrorReportingEnabled()) {
      this._done = true;
      setImmediate(onDone);
      return;
    }
    const supportsSyntaxGetErr = this.client.apiVersion.gte(API.v440);
    const allFiles = uris.filter((entry) => supportsSyntaxGetErr || client.hasCapabilityForResource(entry, 2 /* Semantic */)).map((entry) => client.normalizedPath(entry));
    if (!allFiles.length) {
      this._done = true;
      setImmediate(onDone);
    } else {
      const request = this.areProjectDiagnosticsEnabled() ? client.executeAsync("geterrForProject", { delay: 0, file: allFiles[0] }, this._token.token) : client.executeAsync("geterr", { delay: 0, files: allFiles }, this._token.token);
      request.finally(() => {
        if (this._done) {
          return;
        }
        this._done = true;
        onDone();
      });
    }
  }
  static executeGetErrRequest(client, uris, onDone) {
    const token = new import_vscode_languageserver_protocol14.CancellationTokenSource();
    return new GetErrRequest(client, uris, token, onDone);
  }
  cancel() {
    if (!this._done) {
      this._token.cancel();
    }
    this._token.dispose();
  }
  areProjectDiagnosticsEnabled() {
    return this.client.configuration.enableProjectDiagnostics && this.client.capabilities.has(2 /* Semantic */);
  }
  isErrorReportingEnabled() {
    if (this.client.apiVersion.gte(API.v440)) {
      return true;
    } else {
      return this.client.capabilities.has(2 /* Semantic */);
    }
  }
};
var BufferSyncSupport = class {
  constructor(client, modeIds) {
    this.disposables = [];
    this._validateJavaScript = true;
    this._validateTypeScript = true;
    this.listening = false;
    this._onDelete = new import_vscode_languageserver_protocol14.Emitter();
    this.onDelete = this._onDelete.event;
    this._onWillChange = new import_vscode_languageserver_protocol14.Emitter();
    this.onWillChange = this._onWillChange.event;
    this.client = client;
    this.modeIds = new Set(modeIds);
    this.diagnosticDelayer = new Delayer(300);
    const pathNormalizer = (path19) => this.client.toPath(path19);
    this.syncedBuffers = new SyncedBufferMap(pathNormalizer);
    this.pendingDiagnostics = new PendingDiagnostics(pathNormalizer);
    this.synchronizer = new BufferSynchronizer(client, pathNormalizer);
    this.updateConfiguration();
    import_coc34.workspace.onDidChangeConfiguration(this.updateConfiguration, this, this.disposables);
  }
  listen() {
    if (this.listening)
      return;
    this.listening = true;
    import_coc34.workspace.onDidOpenTextDocument(
      this.openTextDocument,
      this,
      this.disposables
    );
    import_coc34.workspace.onDidCloseTextDocument(
      this.onDidCloseTextDocument,
      this,
      this.disposables
    );
    import_coc34.workspace.onDidChangeTextDocument(
      this.onDidChangeTextDocument,
      this,
      this.disposables
    );
    import_coc34.workspace.textDocuments.forEach(this.openTextDocument, this);
  }
  handles(resource) {
    return this.syncedBuffers.has(resource);
  }
  dispose() {
    this.pendingDiagnostics.clear();
    (0, import_coc34.disposeAll)(this.disposables);
    this._onWillChange.dispose();
    this._onDelete.dispose();
  }
  ensureHasBuffer(resource) {
    if (this.syncedBuffers.has(resource)) {
      return true;
    }
    const existingDocument = import_coc34.workspace.textDocuments.find((doc) => doc.uri.toString() === resource);
    if (existingDocument) {
      return this.openTextDocument(existingDocument);
    }
    return false;
  }
  toResource(filePath) {
    const buffer = this.syncedBuffers.getForPath(filePath);
    if (buffer)
      return buffer.resource;
    return import_coc34.Uri.file(filePath).toString();
  }
  reset() {
    var _a;
    (_a = this.pendingGetErr) == null ? void 0 : _a.cancel();
    this.pendingDiagnostics.clear();
    this.synchronizer.reset();
  }
  reinitialize() {
    this.reset();
    for (const buffer of this.syncedBuffers.allBuffers) {
      buffer.open();
    }
  }
  openTextDocument(document) {
    if (!this.modeIds.has(document.languageId)) {
      return false;
    }
    const resource = document.uri;
    const filepath = this.client.normalizedPath(import_coc34.Uri.parse(resource));
    if (!filepath) {
      return false;
    }
    if (this.syncedBuffers.has(resource)) {
      return true;
    }
    const syncedBuffer = new SyncedBuffer(document, filepath, this.client, this.synchronizer);
    this.syncedBuffers.set(resource, syncedBuffer);
    syncedBuffer.open();
    this.requestDiagnostic(syncedBuffer);
    return true;
  }
  closeResource(resource) {
    const syncedBuffer = this.syncedBuffers.get(resource);
    if (!syncedBuffer) {
      return;
    }
    this.pendingDiagnostics.delete(resource);
    this.syncedBuffers.delete(resource);
    const wasBufferOpen = syncedBuffer.close();
    this._onDelete.fire(resource);
    if (wasBufferOpen) {
      this.requestAllDiagnostics();
    }
  }
  onDidCloseTextDocument(document) {
    this.closeResource(document.uri);
  }
  onDidChangeTextDocument(e) {
    const syncedBuffer = this.syncedBuffers.get(e.textDocument.uri);
    if (!syncedBuffer) {
      return;
    }
    this._onWillChange.fire(syncedBuffer.resource);
    syncedBuffer.onContentChanged(e.contentChanges);
    const didTrigger = this.requestDiagnostic(syncedBuffer);
    if (!didTrigger && this.pendingGetErr) {
      this.pendingGetErr.cancel();
      this.pendingGetErr = void 0;
      this.triggerDiagnostics();
    }
  }
  beforeCommand(command) {
    this.synchronizer.beforeCommand(command);
  }
  interruptGetErr(f) {
    if (!this.pendingGetErr) {
      return f();
    }
    this.pendingGetErr.cancel();
    this.pendingGetErr = void 0;
    const result = f();
    this.triggerDiagnostics();
    return result;
  }
  getErr(resources) {
    const handledResources = resources.filter((resource) => {
      let syncedBuffer = this.syncedBuffers.get(resource.toString());
      return syncedBuffer && this.shouldValidate(syncedBuffer);
    });
    if (!handledResources.length) {
      return;
    }
    for (const resource of handledResources) {
      this.pendingDiagnostics.set(resource.toString(), Date.now());
    }
    this.triggerDiagnostics();
  }
  triggerDiagnostics(delay = 200) {
    this.diagnosticDelayer.trigger(() => {
      this.sendPendingDiagnostics();
    }, delay);
  }
  requestAllDiagnostics() {
    for (const buffer of this.syncedBuffers.allBuffers) {
      if (this.shouldValidate(buffer)) {
        this.pendingDiagnostics.set(buffer.resource, Date.now());
      }
    }
    this.triggerDiagnostics();
  }
  requestDiagnostic(buffer) {
    if (!this.shouldValidate(buffer)) {
      return false;
    }
    this.pendingDiagnostics.set(buffer.resource, Date.now());
    const delay = Math.min(Math.max(Math.ceil(buffer.lineCount / 20), 300), 800);
    this.triggerDiagnostics(delay);
    return true;
  }
  hasPendingDiagnostics(uri) {
    return this.pendingDiagnostics.has(uri);
  }
  sendPendingDiagnostics() {
    const orderedFileSet = this.pendingDiagnostics.getOrderedFileSet();
    if (this.pendingGetErr) {
      this.pendingGetErr.cancel();
      for (const uri of this.pendingGetErr.uris) {
        let resource = uri.toString();
        let syncedBuffer = this.syncedBuffers.get(resource);
        if (syncedBuffer && this.shouldValidate(syncedBuffer)) {
          orderedFileSet.set(resource, void 0);
        } else {
          orderedFileSet.delete(resource);
        }
      }
      this.pendingGetErr = void 0;
    }
    for (const buffer of this.syncedBuffers.values) {
      if (this.shouldValidate(buffer)) {
        orderedFileSet.set(buffer.resource, void 0);
      }
    }
    if (orderedFileSet.size) {
      let uris = Array.from(orderedFileSet.uris).map((uri) => import_coc34.Uri.parse(uri));
      const getErr = this.pendingGetErr = GetErrRequest.executeGetErrRequest(this.client, uris, () => {
        if (this.pendingGetErr === getErr) {
          this.pendingGetErr = void 0;
        }
      });
    }
    this.pendingDiagnostics.clear();
  }
  updateConfiguration() {
    const jsConfig = import_coc34.workspace.getConfiguration("javascript", null);
    const tsConfig = import_coc34.workspace.getConfiguration("typescript", null);
    this._validateJavaScript = jsConfig.get("validate.enable", true);
    this._validateTypeScript = tsConfig.get("validate.enable", true);
  }
  shouldValidate(buffer) {
    switch (buffer.kind) {
      case 2 /* JavaScript */:
        return this._validateJavaScript;
      case 1 /* TypeScript */:
      default:
        return this._validateTypeScript;
    }
  }
};

// src/server/features/diagnostics.ts
var import_coc35 = require("coc.nvim");
function diagnosticsEquals(a, b) {
  if (a === b)
    return true;
  return equals3(a, b);
}
var FileDiagnostics = class {
  constructor(file2, language2) {
    this.file = file2;
    this.language = language2;
    this._diagnostics = /* @__PURE__ */ new Map();
  }
  updateDiagnostics(language2, kind, diagnostics) {
    if (language2 !== this.language) {
      this._diagnostics.clear();
      this.language = language2;
    }
    const existing = this._diagnostics.get(kind);
    if (equals2(existing || empty, diagnostics, diagnosticsEquals)) {
      return false;
    }
    this._diagnostics.set(kind, diagnostics);
    return true;
  }
  getDiagnostics(settings) {
    if (!settings.getValidate(this.language)) {
      return [];
    }
    return [
      ...this.get(0 /* Syntax */),
      ...this.get(1 /* Semantic */),
      ...this.getSuggestionDiagnostics(settings)
    ];
  }
  getSuggestionDiagnostics(settings) {
    const enableSuggestions = settings.getEnableSuggestions(this.language);
    return this.get(2 /* Suggestion */).filter((x) => {
      if (!enableSuggestions) {
        return x.tags && (x.tags.includes(import_coc35.DiagnosticTag.Unnecessary) || x.tags.includes(import_coc35.DiagnosticTag.Deprecated));
      }
      return true;
    });
  }
  get(kind) {
    return this._diagnostics.get(kind) || [];
  }
};
function areLanguageDiagnosticSettingsEqual(currentSettings, newSettings) {
  return currentSettings.validate === newSettings.validate && currentSettings.enableSuggestions && currentSettings.enableSuggestions;
}
var _DiagnosticSettings = class {
  constructor() {
    this._languageSettings = /* @__PURE__ */ new Map();
  }
  getValidate(language2) {
    return this.get(language2).validate;
  }
  setValidate(language2, value) {
    return this.update(language2, (settings) => ({
      validate: value,
      enableSuggestions: settings.enableSuggestions
    }));
  }
  getEnableSuggestions(language2) {
    return this.get(language2).enableSuggestions;
  }
  setEnableSuggestions(language2, value) {
    return this.update(language2, (settings) => ({
      validate: settings.validate,
      enableSuggestions: value
    }));
  }
  get(language2) {
    return this._languageSettings.get(language2) || _DiagnosticSettings.defaultSettings;
  }
  update(language2, f) {
    const currentSettings = this.get(language2);
    const newSettings = f(currentSettings);
    this._languageSettings.set(language2, newSettings);
    return !areLanguageDiagnosticSettingsEqual(currentSettings, newSettings);
  }
};
var DiagnosticSettings = _DiagnosticSettings;
DiagnosticSettings.defaultSettings = {
  validate: true,
  enableSuggestions: true
};
var DiagnosticsManager = class extends Disposable7 {
  constructor() {
    super();
    this._settings = new DiagnosticSettings();
    this._updateDelay = 50;
    this._diagnostics = new ResourceMap(void 0);
    this._pendingUpdates = new ResourceMap(void 0);
    this._currentDiagnostics = this._register(import_coc35.languages.createDiagnosticCollection("tsserver"));
  }
  dispose() {
    super.dispose();
    for (const value of this._pendingUpdates.values) {
      clearTimeout(value);
    }
    this._pendingUpdates.clear();
  }
  reInitialize() {
    this._currentDiagnostics.clear();
    this._diagnostics.clear();
  }
  setValidate(language2, value) {
    const didUpdate = this._settings.setValidate(language2, value);
    if (didUpdate) {
      this.rebuild();
    }
  }
  setEnableSuggestions(language2, value) {
    const didUpdate = this._settings.setEnableSuggestions(language2, value);
    if (didUpdate) {
      this.rebuild();
    }
  }
  updateDiagnostics(uri, language2, kind, diagnostics) {
    let didUpdate = false;
    const entry = this._diagnostics.get(uri);
    if (entry) {
      didUpdate = entry.updateDiagnostics(language2, kind, diagnostics);
    } else if (diagnostics.length) {
      const fileDiagnostics = new FileDiagnostics(uri, language2);
      fileDiagnostics.updateDiagnostics(language2, kind, diagnostics);
      this._diagnostics.set(uri, fileDiagnostics);
      didUpdate = true;
    }
    if (didUpdate) {
      this.scheduleDiagnosticsUpdate(uri);
    }
  }
  configFileDiagnosticsReceived(uri, diagnostics) {
    this._currentDiagnostics.set(uri, diagnostics);
  }
  delete(resource) {
    this._currentDiagnostics.delete(resource);
    this._diagnostics.delete(resource);
  }
  getDiagnostics(resource) {
    return this._currentDiagnostics.get(resource) || [];
  }
  scheduleDiagnosticsUpdate(resource) {
    if (!this._pendingUpdates.has(resource)) {
      this._pendingUpdates.set(resource, setTimeout(() => this.updateCurrentDiagnostics(resource), this._updateDelay));
    }
  }
  updateCurrentDiagnostics(resource) {
    if (this._pendingUpdates.has(resource)) {
      clearTimeout(this._pendingUpdates.get(resource));
      this._pendingUpdates.delete(resource);
    }
    const fileDiagnostics = this._diagnostics.get(resource);
    this._currentDiagnostics.set(resource, fileDiagnostics ? fileDiagnostics.getDiagnostics(this._settings) : []);
  }
  rebuild() {
    this._currentDiagnostics.clear();
    for (const fileDiagnostic of this._diagnostics.values) {
      this._currentDiagnostics.set(fileDiagnostic.file, fileDiagnostic.getDiagnostics(this._settings));
    }
  }
};

// src/server/typescriptServiceClient.ts
init_protocol_const();

// src/server/tsServer/spawner.ts
var path13 = __toESM(require("path"));
init_typescriptService();
init_api();

// src/server/utils/configuration.ts
var import_coc36 = require("coc.nvim");
var import_path9 = __toESM(require("path"));
var import_os2 = __toESM(require("os"));
var TsServerLogLevel = /* @__PURE__ */ ((TsServerLogLevel2) => {
  TsServerLogLevel2[TsServerLogLevel2["Off"] = 0] = "Off";
  TsServerLogLevel2[TsServerLogLevel2["Normal"] = 1] = "Normal";
  TsServerLogLevel2[TsServerLogLevel2["Terse"] = 2] = "Terse";
  TsServerLogLevel2[TsServerLogLevel2["Verbose"] = 3] = "Verbose";
  return TsServerLogLevel2;
})(TsServerLogLevel || {});
function areServiceConfigurationsEqual(a, b) {
  return equals3(a, b);
}
((TsServerLogLevel2) => {
  function fromString(value) {
    switch (value && value.toLowerCase()) {
      case "normal":
        return 1 /* Normal */;
      case "terse":
        return 2 /* Terse */;
      case "verbose":
        return 3 /* Verbose */;
      case "off":
      default:
        return 0 /* Off */;
    }
  }
  TsServerLogLevel2.fromString = fromString;
  function toString2(value) {
    switch (value) {
      case 1 /* Normal */:
        return "normal";
      case 2 /* Terse */:
        return "terse";
      case 3 /* Verbose */:
        return "verbose";
      case 0 /* Off */:
      default:
        return "off";
    }
  }
  TsServerLogLevel2.toString = toString2;
})(TsServerLogLevel || (TsServerLogLevel = {}));
var ImplicitProjectConfiguration = class {
  constructor(configuration) {
    this.target = ImplicitProjectConfiguration.readTarget(configuration);
    this.module = ImplicitProjectConfiguration.readModule(configuration);
    this.checkJs = ImplicitProjectConfiguration.readCheckJs(configuration);
    this.experimentalDecorators = ImplicitProjectConfiguration.readExperimentalDecorators(configuration);
    this.strictNullChecks = ImplicitProjectConfiguration.readImplicitStrictNullChecks(configuration);
    this.strictFunctionTypes = ImplicitProjectConfiguration.readImplicitStrictFunctionTypes(configuration);
  }
  isEqualTo(other) {
    return equals3(this, other);
  }
  static readTarget(configuration) {
    return configuration.get("tsserver.implicitProjectConfig.target");
  }
  static readModule(configuration) {
    return configuration.get("tsserver.implicitProjectConfig.module");
  }
  static readCheckJs(configuration) {
    return configuration.get("tsserver.implicitProjectConfig.checkJs") ?? configuration.get("tsserver.implicitProjectConfig.checkJs", false);
  }
  static readExperimentalDecorators(configuration) {
    return configuration.get("tsserver.implicitProjectConfig.experimentalDecorators") ?? configuration.get("tsserver.implicitProjectConfig.experimentalDecorators", false);
  }
  static readImplicitStrictNullChecks(configuration) {
    return configuration.get("tsserver.implicitProjectConfig.strictNullChecks", true);
  }
  static readImplicitStrictFunctionTypes(configuration) {
    return configuration.get("tsserver.implicitProjectConfig.strictFunctionTypes", true);
  }
};
var ServiceConfigurationProvider = class {
  loadFromWorkspace() {
    const configuration = import_coc36.workspace.getConfiguration();
    return {
      enable: this.readEnable(configuration),
      locale: this.readLocale(configuration),
      useWorkspaceTsdk: this.readUseWorkspace(configuration),
      globalTsdk: this.readGlobalTsdk(configuration),
      localTsdk: this.readLocalTsdk(configuration),
      npmLocation: this.readNpmLocation(configuration),
      tsServerLogLevel: this.readTsServerLogLevel(configuration),
      tsServerPluginPaths: this.readTsServerPluginPaths(configuration),
      implicitProjectConfiguration: new ImplicitProjectConfiguration(configuration),
      disableAutomaticTypeAcquisition: this.readDisableAutomaticTypeAcquisition(configuration),
      useSyntaxServer: this.readUseSyntaxServer(configuration),
      enableProjectDiagnostics: this.readEnableProjectDiagnostics(configuration),
      maxTsServerMemory: this.readMaxTsServerMemory(configuration),
      watchOptions: this.readWatchOptions(configuration),
      includePackageJsonAutoImports: this.readIncludePackageJsonAutoImports(configuration),
      enableTsServerTracing: this.readEnableTsServerTracing(configuration)
    };
  }
  readGlobalTsdk(configuration) {
    const inspect = configuration.inspect("tsserver.tsdk");
    if (inspect && typeof inspect.globalValue === "string") {
      return this.fixPathPrefixes(inspect.globalValue);
    }
    return null;
  }
  readLocalTsdk(configuration) {
    const inspect = configuration.inspect("tsserver.tsdk");
    let value = inspect.workspaceValue ?? inspect.workspaceFolderValue;
    if (inspect && typeof value === "string") {
      return this.fixPathPrefixes(value);
    }
    return null;
  }
  readUseWorkspace(configuration) {
    const inspect = configuration.inspect("tsserver.useLocalTsdk");
    let value = inspect.workspaceValue ?? inspect.workspaceFolderValue;
    if (typeof value === "boolean") {
      return value;
    }
    value = inspect.globalValue;
    if (typeof value === "boolean") {
      return value;
    }
    return false;
  }
  fixPathPrefixes(inspectValue) {
    const pathPrefixes = ["~" + import_path9.default.sep];
    for (const pathPrefix of pathPrefixes) {
      if (inspectValue.startsWith(pathPrefix)) {
        return import_path9.default.join(import_os2.default.homedir(), inspectValue.slice(pathPrefix.length));
      }
    }
    return inspectValue;
  }
  readTsServerLogLevel(configuration) {
    const setting = configuration.get("tsserver.log", "off");
    return TsServerLogLevel.fromString(setting);
  }
  readTsServerPluginPaths(configuration) {
    return configuration.get("tsserver.pluginPaths", []);
  }
  readNpmLocation(configuration) {
    return configuration.get("tsserver.npm", null);
  }
  readDisableAutomaticTypeAcquisition(configuration) {
    return configuration.get("tsserver.disableAutomaticTypeAcquisition", false);
  }
  readEnable(configuration) {
    return configuration.get("tsserver.enable", true);
  }
  readLocale(configuration) {
    const value = configuration.get("tsserver.locale", "auto");
    return !value || value === "auto" ? null : value;
  }
  readUseSyntaxServer(configuration) {
    const value = configuration.get("tsserver.useSyntaxServer");
    switch (value) {
      case "never":
        return 0 /* Never */;
      case "always":
        return 1 /* Always */;
      case "auto":
        return 2 /* Auto */;
    }
    return 2 /* Auto */;
  }
  readEnableProjectDiagnostics(configuration) {
    return configuration.get("tsserver.experimental.enableProjectDiagnostics", false);
  }
  readWatchOptions(configuration) {
    return configuration.get("tsserver.watchOptions");
  }
  readIncludePackageJsonAutoImports(configuration) {
    return configuration.get("typescript.preferences.includePackageJsonAutoImports");
  }
  readMaxTsServerMemory(configuration) {
    const defaultMaxMemory = 3072;
    const minimumMaxMemory = 128;
    const memoryInMB = configuration.get("tsserver.maxTsServerMemory", defaultMaxMemory);
    if (!Number.isSafeInteger(memoryInMB)) {
      return defaultMaxMemory;
    }
    return Math.max(memoryInMB, minimumMaxMemory);
  }
  readEnableTsServerTracing(configuration) {
    return configuration.get("tsserver.enableTracing", false);
  }
};

// src/server/tsServer/spawner.ts
var TypeScriptServerSpawner = class {
  constructor(_versionProvider, _logDirectoryProvider, _pluginPathsProvider, _logger, _tracer, _factory) {
    this._versionProvider = _versionProvider;
    this._logDirectoryProvider = _logDirectoryProvider;
    this._pluginPathsProvider = _pluginPathsProvider;
    this._logger = _logger;
    this._tracer = _tracer;
    this._factory = _factory;
  }
  spawn(version, capabilities, configuration, pluginManager, cancellerFactory, delegate) {
    let primaryServer;
    const serverType = this.getCompositeServerType(version, capabilities, configuration);
    const shouldUseSeparateDiagnosticsServer = this.shouldUseSeparateDiagnosticsServer(configuration);
    switch (serverType) {
      case 1 /* SeparateSyntax */:
      case 2 /* DynamicSeparateSyntax */: {
        const enableDynamicRouting = !shouldUseSeparateDiagnosticsServer && serverType === 2 /* DynamicSeparateSyntax */;
        primaryServer = new SyntaxRoutingTsServer({
          syntax: this.spawnTsServer("syntax" /* Syntax */, version, configuration, pluginManager, cancellerFactory),
          semantic: this.spawnTsServer("semantic" /* Semantic */, version, configuration, pluginManager, cancellerFactory)
        }, delegate, enableDynamicRouting);
        break;
      }
      case 0 /* Single */: {
        primaryServer = this.spawnTsServer("main" /* Main */, version, configuration, pluginManager, cancellerFactory);
        break;
      }
      case 3 /* SyntaxOnly */: {
        primaryServer = this.spawnTsServer("syntax" /* Syntax */, version, configuration, pluginManager, cancellerFactory);
        break;
      }
    }
    if (shouldUseSeparateDiagnosticsServer) {
      return new GetErrRoutingTsServer({
        getErr: this.spawnTsServer("diagnostics" /* Diagnostics */, version, configuration, pluginManager, cancellerFactory),
        primary: primaryServer
      }, delegate);
    }
    return primaryServer;
  }
  getCompositeServerType(version, capabilities, configuration) {
    var _a, _b;
    if (!capabilities.has(2 /* Semantic */)) {
      return 3 /* SyntaxOnly */;
    }
    switch (configuration.useSyntaxServer) {
      case 1 /* Always */:
        return 3 /* SyntaxOnly */;
      case 0 /* Never */:
        return 0 /* Single */;
      case 2 /* Auto */:
        if ((_a = version.version) == null ? void 0 : _a.gte(API.v340)) {
          return ((_b = version.version) == null ? void 0 : _b.gte(API.v400)) ? 2 /* DynamicSeparateSyntax */ : 1 /* SeparateSyntax */;
        }
        return 0 /* Single */;
    }
  }
  shouldUseSeparateDiagnosticsServer(configuration) {
    return configuration.enableProjectDiagnostics;
  }
  spawnTsServer(kind, version, configuration, pluginManager, cancellerFactory) {
    const apiVersion = version.version || API.defaultVersion;
    const canceller = cancellerFactory.create(kind, this._tracer);
    const { args, tsServerLogFile, tsServerTraceDirectory } = this.getTsServerArgs(kind, configuration, version, apiVersion, pluginManager, canceller.cancellationPipeName);
    if (TypeScriptServerSpawner.isLoggingEnabled(configuration)) {
      if (tsServerLogFile) {
        this._logger.info(`<${kind}> Log file: ${tsServerLogFile}`);
      } else {
        this._logger.error(`<${kind}> Could not create log directory`);
      }
    }
    if (configuration.enableTsServerTracing) {
      if (tsServerTraceDirectory) {
        this._logger.info(`<${kind}> Trace directory: ${tsServerTraceDirectory}`);
      } else {
        this._logger.error(`<${kind}> Could not create trace directory`);
      }
    }
    this._logger.info(`<${kind}> Forking...`);
    const process2 = this._factory.fork(version, args, kind, configuration);
    this._logger.info(`<${kind}> Starting...`);
    return new ProcessBasedTsServer(
      kind,
      this.kindToServerType(kind),
      process2,
      tsServerLogFile,
      canceller,
      version,
      this._tracer
    );
  }
  kindToServerType(kind) {
    switch (kind) {
      case "syntax" /* Syntax */:
        return "syntax" /* Syntax */;
      case "main" /* Main */:
      case "semantic" /* Semantic */:
      case "diagnostics" /* Diagnostics */:
      default:
        return "semantic" /* Semantic */;
    }
  }
  getTsServerArgs(kind, configuration, currentVersion, apiVersion, pluginManager, cancellationPipeName) {
    const args = [];
    let tsServerLogFile;
    let tsServerTraceDirectory;
    if (kind === "syntax" /* Syntax */) {
      if (apiVersion.gte(API.v401)) {
        args.push("--serverMode", "partialSemantic");
      } else {
        args.push("--syntaxOnly");
      }
    }
    if (apiVersion.gte(API.v250)) {
      args.push("--useInferredProjectPerProjectRoot");
    } else {
      args.push("--useSingleInferredProject");
    }
    if (configuration.disableAutomaticTypeAcquisition || kind === "syntax" /* Syntax */ || kind === "diagnostics" /* Diagnostics */) {
      args.push("--disableAutomaticTypingAcquisition");
    }
    if (kind === "semantic" /* Semantic */ || kind === "main" /* Main */) {
    }
    if (cancellationPipeName) {
      args.push("--cancellationPipeName", cancellationPipeName + "*");
    }
    if (TypeScriptServerSpawner.isLoggingEnabled(configuration)) {
      const logDir = this._logDirectoryProvider.getNewLogDirectory();
      if (logDir) {
        tsServerLogFile = path13.join(logDir, `tsserver.log`);
        args.push("--logVerbosity", TsServerLogLevel.toString(configuration.tsServerLogLevel));
        args.push("--logFile", tsServerLogFile);
      }
    }
    if (configuration.enableTsServerTracing) {
      tsServerTraceDirectory = this._logDirectoryProvider.getNewLogDirectory();
      if (tsServerTraceDirectory) {
        args.push("--traceDirectory", tsServerTraceDirectory);
      }
    }
    const pluginPaths = this._pluginPathsProvider.getPluginPaths();
    if (pluginManager.plugins.length) {
      args.push("--globalPlugins", pluginManager.plugins.map((x) => x.name).join(","));
      const isUsingBundledTypeScriptVersion = currentVersion.path === this._versionProvider.bundledVersion.tsServerPath;
      for (const plugin of pluginManager.plugins) {
        if (isUsingBundledTypeScriptVersion || plugin.enableForWorkspaceTypeScriptVersions) {
          pluginPaths.push(plugin.path);
        }
      }
    }
    if (pluginPaths.length !== 0) {
      args.push("--pluginProbeLocations", pluginPaths.join(","));
    }
    if (configuration.npmLocation) {
      args.push("--npmLocation", `"${configuration.npmLocation}"`);
    }
    let locale = TypeScriptServerSpawner.getTsLocale(configuration);
    if (locale)
      args.push("--locale", locale);
    args.push("--noGetErrOnBackgroundUpdate");
    args.push("--validateDefaultNpmLocation");
    return { args, tsServerLogFile, tsServerTraceDirectory };
  }
  static isLoggingEnabled(configuration) {
    return configuration.tsServerLogLevel !== 0 /* Off */;
  }
  static getTsLocale(configuration) {
    return configuration.locale ? configuration.locale : "en";
  }
};

// src/server/tsServer/versionManager.ts
var import_fs5 = __toESM(require("fs"));
var TypeScriptVersionManager = class {
  constructor(configuration, versionProvider, tscPathVim) {
    this.configuration = configuration;
    this.versionProvider = versionProvider;
    if (tscPathVim && import_fs5.default.existsSync(tscPathVim)) {
      this._currentVersion = versionProvider.getVersionFromTscPath(tscPathVim);
      if (this._currentVersion.isValid)
        return;
    }
    this._currentVersion = this.versionProvider.getDefaultVersion();
    if (this.useWorkspaceTsdkSetting) {
      const localVersion = this.versionProvider.getLocalVersion();
      if (localVersion) {
        this._currentVersion = localVersion;
      }
    }
  }
  updateConfiguration(nextConfiguration) {
    this.configuration = nextConfiguration;
    if (this.useWorkspaceTsdkSetting) {
      const localVersion = this.versionProvider.getLocalVersion();
      if (localVersion) {
        this._currentVersion = localVersion;
      }
    } else {
      this._currentVersion = this.versionProvider.getDefaultVersion();
    }
  }
  get currentVersion() {
    return this._currentVersion;
  }
  reset() {
    this._currentVersion = this.versionProvider.bundledVersion;
  }
  get useWorkspaceTsdkSetting() {
    return this.configuration.useWorkspaceTsdk;
  }
};

// src/server/tsServer/versionProvider.ts
var import_coc37 = require("coc.nvim");
var import_fs6 = __toESM(require("fs"));
var import_path10 = __toESM(require("path"));
init_api();
var TypeScriptVersion = class {
  constructor(path19, _pathLabel) {
    this.path = path19;
    this._pathLabel = _pathLabel;
    this._api = null;
  }
  get tscPath() {
    return import_path10.default.resolve(this.path, "../bin/tsc");
  }
  get tsServerPath() {
    return import_path10.default.resolve(this.path, "tsserver.js");
  }
  get pathLabel() {
    return typeof this._pathLabel === "undefined" ? this.path : this._pathLabel;
  }
  get isValid() {
    return this.version != null;
  }
  get version() {
    if (this._api)
      return this._api;
    let api = this._api = this.getTypeScriptVersion(this.tsServerPath);
    return api;
  }
  getTypeScriptVersion(serverPath) {
    if (!import_fs6.default.existsSync(serverPath)) {
      return void 0;
    }
    const p = serverPath.split(import_path10.default.sep);
    if (p.length <= 2) {
      return void 0;
    }
    const p2 = p.slice(0, -2);
    const modulePath = p2.join(import_path10.default.sep);
    let fileName = import_path10.default.join(modulePath, "package.json");
    if (!import_fs6.default.existsSync(fileName)) {
      if (import_path10.default.basename(modulePath) === "built") {
        fileName = import_path10.default.join(modulePath, "..", "package.json");
      }
    }
    if (!import_fs6.default.existsSync(fileName)) {
      return void 0;
    }
    const contents = import_fs6.default.readFileSync(fileName).toString();
    let desc = null;
    try {
      desc = JSON.parse(contents);
    } catch (err) {
      return void 0;
    }
    if (!desc || !desc.version) {
      return void 0;
    }
    return desc.version ? API.fromVersionString(desc.version) : void 0;
  }
};
var MODULE_FOLDERS = ["node_modules/typescript/lib", ".vscode/pnpify/typescript/lib", ".yarn/sdks/typescript/lib"];
var TypeScriptVersionProvider = class {
  constructor(configuration) {
    this.configuration = configuration;
  }
  updateConfiguration(configuration) {
    this.configuration = configuration;
  }
  getDefaultVersion() {
    let { globalTsdk } = this.configuration;
    if (globalTsdk)
      return new TypeScriptVersion(globalTsdk);
    return this.bundledVersion;
  }
  get globalVersion() {
    let { globalTsdk } = this.configuration;
    let folder = import_coc37.workspace.expand(globalTsdk);
    if (!import_path10.default.isAbsolute(folder)) {
      folder = import_path10.default.join(import_coc37.workspace.root, folder);
    }
    if (globalTsdk)
      return new TypeScriptVersion(folder);
    return void 0;
  }
  getVersionFromTscPath(tscPath) {
    if (!tscPath || !import_fs6.default.existsSync(tscPath))
      return void 0;
    let libFolder = import_path10.default.resolve(tscPath, "../../lib");
    if (import_fs6.default.existsSync(libFolder)) {
      let version = new TypeScriptVersion(libFolder);
      if (version.isValid)
        return version;
    }
  }
  getLocalVersionFromFolder(workspaceRoot) {
    for (let folder of MODULE_FOLDERS) {
      let libFolder = import_path10.default.join(workspaceRoot, folder);
      if (import_fs6.default.existsSync(libFolder)) {
        let version = new TypeScriptVersion(libFolder);
        if (version.isValid)
          return version;
      }
    }
  }
  getLocalVersion() {
    let localTsdk = this.configuration.localTsdk;
    if (localTsdk) {
      let folder = import_coc37.workspace.expand(localTsdk);
      if (!import_path10.default.isAbsolute(folder)) {
        folder = import_path10.default.join(import_coc37.workspace.root, folder);
      }
      let version2 = new TypeScriptVersion(folder);
      if (version2.isValid) {
        return version2;
      }
      void import_coc37.window.showWarningMessage(`Invalid tsserver version from folder configuration "tsserver.tsdk"`);
    }
    let version = this.getLocalVersionFromFolder(import_coc37.workspace.root);
    if (version)
      return version;
    return null;
  }
  get bundledVersion() {
    try {
      const file2 = require.resolve("typescript");
      const bundledVersion = new TypeScriptVersion(
        import_path10.default.dirname(file2),
        ""
      );
      return bundledVersion;
    } catch (e) {
      import_coc37.window.showErrorMessage("Bundled typescript module not found");
      return null;
    }
  }
};

// src/server/typescriptServiceClient.ts
init_typescriptService();
init_api();

// src/server/utils/logger.ts
var import_coc38 = require("coc.nvim");

// src/server/utils/is.ts
var toString = Object.prototype.toString;
function boolean(value) {
  return value === true || value === false;
}
function string(value) {
  return toString.call(value) === "[object String]";
}

// src/server/utils/logger.ts
var Logger2 = class {
  get output() {
    if (this._channel) {
      return this._channel;
    }
    this._channel = import_coc38.window.createOutputChannel("tsserver");
    return this._channel;
  }
  dispose() {
    if (this._channel) {
      this._channel.dispose();
    }
  }
  data2String(data) {
    if (data instanceof Error) {
      if (string(data.stack)) {
        return data.stack;
      }
      return data.message;
    }
    if (boolean(data.success) && !data.success && string(data.message)) {
      return data.message;
    }
    if (string(data)) {
      return data;
    }
    return data.toString();
  }
  info(message, data) {
    this.logLevel("Info", message, data);
  }
  warn(message, data) {
    this.logLevel("Warn", message, data);
  }
  error(message, data) {
    if (data && data.message === "No content available.") {
      return;
    }
    this.logLevel("Error", message, data);
  }
  now() {
    const now = new Date();
    return padLeft(now.getUTCHours() + "", 2, "0") + ":" + padLeft(now.getMinutes() + "", 2, "0") + ":" + padLeft(now.getUTCSeconds() + "", 2, "0") + "." + now.getMilliseconds();
  }
  logLevel(level, message, data) {
    this.output.appendLine(
      `[${level} - ${this.now()}] ${message}`
    );
    if (data) {
      this.output.appendLine(this.data2String(data));
    }
  }
};
function padLeft(s, n, pad = " ") {
  return pad.repeat(Math.max(0, n - s.length)) + s;
}

// src/server/utils/pluginPathsProvider.ts
var path16 = __toESM(require("path"));
var import_coc40 = require("coc.nvim");

// src/server/utils/relativePathResolver.ts
var path15 = __toESM(require("path"));
var import_coc39 = require("coc.nvim");
var RelativeWorkspacePathResolver = class {
  static asAbsoluteWorkspacePath(relativePath) {
    for (const root of import_coc39.workspace.workspaceFolders || []) {
      const rootPrefixes = [`./${root.name}/`, `${root.name}/`, `.\\${root.name}\\`, `${root.name}\\`];
      for (const rootPrefix of rootPrefixes) {
        if (relativePath.startsWith(rootPrefix)) {
          return path15.join(import_coc39.Uri.parse(root.uri).fsPath, relativePath.replace(rootPrefix, ""));
        }
      }
    }
    return void 0;
  }
};

// src/server/utils/pluginPathsProvider.ts
var TypeScriptPluginPathsProvider = class {
  constructor(configuration) {
    this.configuration = configuration;
  }
  updateConfiguration(configuration) {
    this.configuration = configuration;
  }
  getPluginPaths() {
    const pluginPaths = [];
    for (const pluginPath of this.configuration.tsServerPluginPaths) {
      pluginPaths.push(...this.resolvePluginPath(pluginPath));
    }
    return pluginPaths;
  }
  resolvePluginPath(pluginPath) {
    if (path16.isAbsolute(pluginPath)) {
      return [pluginPath];
    }
    const workspacePath = RelativeWorkspacePathResolver.asAbsoluteWorkspacePath(pluginPath);
    if (workspacePath !== void 0) {
      return [workspacePath];
    }
    return (import_coc40.workspace.workspaceFolders || []).map((workspaceFolder) => path16.join(import_coc40.Uri.parse(workspaceFolder.uri).fsPath, pluginPath));
  }
};

// src/server/utils/tracer.ts
var import_coc41 = require("coc.nvim");
var Trace = /* @__PURE__ */ ((Trace2) => {
  Trace2[Trace2["Off"] = 0] = "Off";
  Trace2[Trace2["Messages"] = 1] = "Messages";
  Trace2[Trace2["Verbose"] = 2] = "Verbose";
  return Trace2;
})(Trace || {});
((Trace2) => {
  function fromString(value) {
    value = value || "";
    value = value.toLowerCase();
    switch (value) {
      case "off":
        return 0 /* Off */;
      case "messages":
        return 1 /* Messages */;
      case "verbose":
        return 2 /* Verbose */;
      default:
        return 0 /* Off */;
    }
  }
  Trace2.fromString = fromString;
})(Trace || (Trace = {}));
var Tracer = class {
  constructor(logger) {
    this.logger = logger;
    this.updateConfiguration();
  }
  updateConfiguration() {
    this.trace = Tracer.readTrace();
  }
  static readTrace() {
    let result = Trace.fromString(import_coc41.workspace.getConfiguration("tsserver").get("trace.server", "off"));
    if (result === 0 /* Off */ && !!process.env.TSS_TRACE) {
      result = 1 /* Messages */;
    }
    return result;
  }
  traceRequest(serverId, request, responseExpected, queueLength) {
    if (this.trace === 0 /* Off */) {
      return;
    }
    let data = void 0;
    if (this.trace === 2 /* Verbose */ && request.arguments) {
      data = `Arguments: ${JSON.stringify(request.arguments, null, 4)}`;
    }
    this.logTrace(serverId, `Sending request: ${request.command} (${request.seq}). Response expected: ${responseExpected ? "yes" : "no"}. Current queue length: ${queueLength}`, data);
  }
  traceResponse(serverId, response, meta) {
    if (this.trace === 0 /* Off */) {
      return;
    }
    let data = void 0;
    if (this.trace === 2 /* Verbose */ && response.body) {
      data = `Result: ${JSON.stringify(response.body, null, 4)}`;
    }
    this.logTrace(serverId, `Response received: ${response.command} (${response.request_seq}). Request took ${Date.now() - meta.queuingStartTime} ms. Success: ${response.success} ${!response.success ? ". Message: " + response.message : ""}`, data);
  }
  traceEvent(serverId, event) {
    if (this.trace === 0 /* Off */) {
      return;
    }
    let data = void 0;
    if (this.trace === 2 /* Verbose */ && event.body) {
      data = `Data: ${JSON.stringify(event.body, null, 4)}`;
    }
    this.logTrace(serverId, `Event received: ${event.event} (${event.seq}).`, data);
  }
  logTrace(serverId, message, data) {
    if (this.trace !== 0 /* Off */) {
      this.logger.logLevel("Trace", `<${serverId}> ${message}`, data);
    }
  }
  traceRequestCompleted(serverId, command, request_seq, meta) {
    if (this.trace === 0 /* Off */) {
      return;
    }
    this.logTrace(serverId, `Async response received: ${command} (${request_seq}). Request took ${Date.now() - meta.queuingStartTime} ms.`);
  }
};

// src/server/utils/tsconfig.ts
var import_coc42 = require("coc.nvim");
var defaultProjectConfig = Object.freeze({
  module: "ESNext",
  moduleResolution: "Node",
  target: "ES2020",
  jsx: "react"
});
function inferredProjectCompilerOptions(projectType, serviceConfig) {
  const projectConfig = { ...defaultProjectConfig };
  if (serviceConfig.implicitProjectConfiguration.checkJs) {
    projectConfig.checkJs = true;
    if (projectType === 0 /* TypeScript */) {
      projectConfig.allowJs = true;
    }
  }
  if (serviceConfig.implicitProjectConfiguration.experimentalDecorators) {
    projectConfig.experimentalDecorators = true;
  }
  if (serviceConfig.implicitProjectConfiguration.strictNullChecks) {
    projectConfig.strictNullChecks = true;
  }
  if (serviceConfig.implicitProjectConfiguration.strictFunctionTypes) {
    projectConfig.strictFunctionTypes = true;
  }
  if (serviceConfig.implicitProjectConfiguration.module) {
    projectConfig.module = serviceConfig.implicitProjectConfiguration.module;
  }
  if (serviceConfig.implicitProjectConfiguration.target) {
    projectConfig.target = serviceConfig.implicitProjectConfiguration.target;
  }
  if (projectType === 0 /* TypeScript */) {
    projectConfig.sourceMap = true;
  }
  return projectConfig;
}

// src/server/utils/versionStatus.ts
var import_coc43 = require("coc.nvim");
var VersionStatus = class {
  constructor() {
    this._versionString = "";
    this._versionBarEntry = import_coc43.window.createStatusBarItem(99);
    this._onChangeEditor = import_coc43.window.onDidChangeActiveTextEditor(this.onChangeEditor, this);
    this._versionBarEntry.show();
  }
  onDidChangeTypeScriptVersion(version) {
    this._versionString = version.version.displayName;
  }
  set loading(isLoading) {
    if (isLoading) {
      this._versionBarEntry.text = `Initializing tsserver ${this._versionString}`;
    } else {
      this._versionBarEntry.text = `TSC ${this._versionString}`;
    }
    this._versionBarEntry.isProgress = isLoading;
  }
  checkFiletype(filetype) {
    return filetype.startsWith("typescript") || filetype.startsWith("javascript");
  }
  async onChangeEditor(editor) {
    if (this.checkFiletype(editor.document.filetype)) {
      this._versionBarEntry.show();
    } else {
      this._versionBarEntry.hide();
    }
  }
  dispose() {
    this._versionBarEntry.dispose();
    this._onChangeEditor.dispose();
  }
};

// src/server/typescriptServiceClient.ts
var ServerState;
((ServerState2) => {
  let Type;
  ((Type2) => {
    Type2[Type2["None"] = 0] = "None";
    Type2[Type2["Running"] = 1] = "Running";
    Type2[Type2["Errored"] = 2] = "Errored";
  })(Type = ServerState2.Type || (ServerState2.Type = {}));
  ServerState2.None = { type: 0 /* None */ };
  class Running {
    constructor(server, apiVersion, tsserverVersion, languageServiceEnabled) {
      this.server = server;
      this.apiVersion = apiVersion;
      this.tsserverVersion = tsserverVersion;
      this.languageServiceEnabled = languageServiceEnabled;
      this.type = 1 /* Running */;
      this.toCancelOnResourceChange = /* @__PURE__ */ new Set();
    }
    updateTsserverVersion(tsserverVersion) {
      this.tsserverVersion = tsserverVersion;
    }
    updateLanguageServiceEnabled(enabled) {
      this.languageServiceEnabled = enabled;
    }
  }
  ServerState2.Running = Running;
  class Errored {
    constructor(error, tsServerLogFile) {
      this.error = error;
      this.tsServerLogFile = tsServerLogFile;
      this.type = 2 /* Errored */;
    }
  }
  ServerState2.Errored = Errored;
})(ServerState || (ServerState = {}));
var TypeScriptServiceClient = class extends Disposable7 {
  constructor(context, modeIds, services2, tscPathVim) {
    super();
    this.context = context;
    this.modeIds = modeIds;
    this.token = 0;
    this.state = import_coc44.ServiceStat.Initial;
    this.logger = new Logger2();
    this.hasServerFatallyCrashedTooManyTimes = false;
    this._onTsServerStarted = this._register(new import_coc44.Emitter());
    this.onTsServerStarted = this._onTsServerStarted.event;
    this._onDiagnosticsReceived = this._register(new import_coc44.Emitter());
    this.onDiagnosticsReceived = this._onDiagnosticsReceived.event;
    this._onConfigDiagnosticsReceived = this._register(new import_coc44.Emitter());
    this.onConfigDiagnosticsReceived = this._onConfigDiagnosticsReceived.event;
    this._onResendModelsRequested = this._register(new import_coc44.Emitter());
    this.onResendModelsRequested = this._onResendModelsRequested.event;
    this._onProjectLanguageServiceStateChanged = this._register(new import_coc44.Emitter());
    this.onProjectLanguageServiceStateChanged = this._onProjectLanguageServiceStateChanged.event;
    this._onDidBeginInstallTypings = this._register(new import_coc44.Emitter());
    this.onDidBeginInstallTypings = this._onDidBeginInstallTypings.event;
    this._onDidEndInstallTypings = this._register(new import_coc44.Emitter());
    this.onDidEndInstallTypings = this._onDidEndInstallTypings.event;
    this._onTypesInstallerInitializationFailed = this._register(new import_coc44.Emitter());
    this.onTypesInstallerInitializationFailed = this._onTypesInstallerInitializationFailed.event;
    this._onDidChangeCapabilities = this._register(new import_coc44.Emitter());
    this.onDidChangeCapabilities = this._onDidChangeCapabilities.event;
    this.serverState = ServerState.None;
    this.isRestarting = false;
    this.pluginManager = services2.pluginManager;
    this.logDirectoryProvider = services2.logDirectoryProvider;
    this.processFactory = services2.processFactory;
    this.cancellerFactory = services2.cancellerFactory;
    this.pathSeparator = import_path11.default.sep;
    this.lastStart = Date.now();
    this.numberRestarts = 0;
    let resolve;
    let reject;
    const p = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    this._onReady = { promise: p, resolve, reject };
    this.serviceConfigurationProvider = new ServiceConfigurationProvider();
    this._configuration = this.serviceConfigurationProvider.loadFromWorkspace();
    this.versionProvider = new TypeScriptVersionProvider(this._configuration);
    this._apiVersion = API.defaultVersion;
    this.tracer = new Tracer(this.logger);
    this.versionStatus = new VersionStatus();
    this.pluginPathsProvider = new TypeScriptPluginPathsProvider(this._configuration);
    this.versionManager = new TypeScriptVersionManager(this._configuration, this.versionProvider, tscPathVim);
    this.bufferSyncSupport = new BufferSyncSupport(this, modeIds);
    this.onReady(() => {
      this.bufferSyncSupport.listen();
    });
    this.diagnosticsManager = new DiagnosticsManager();
    this.bufferSyncSupport.onDelete((resource) => {
      this.cancelInflightRequestsForResource(resource);
      this.diagnosticsManager.delete(resource);
    }, null, this._disposables);
    this.bufferSyncSupport.onWillChange((resource) => {
      this.cancelInflightRequestsForResource(resource);
    });
    import_coc44.workspace.onDidChangeConfiguration(() => {
      const oldConfiguration = this._configuration;
      this._configuration = this.serviceConfigurationProvider.loadFromWorkspace();
      this.versionProvider.updateConfiguration(this._configuration);
      this.versionManager.updateConfiguration(this._configuration);
      this.pluginPathsProvider.updateConfiguration(this._configuration);
      this.tracer.updateConfiguration();
      if (this.serverState.type === 1 /* Running */) {
        if (!this._configuration.implicitProjectConfiguration.isEqualTo(oldConfiguration.implicitProjectConfiguration)) {
          this.setCompilerOptionsForInferredProjects(this._configuration);
        }
        if (!areServiceConfigurationsEqual(this._configuration, oldConfiguration)) {
          this.restartTsServer();
        }
      }
    }, this, this._disposables);
    this.typescriptServerSpawner = new TypeScriptServerSpawner(this.versionProvider, this.logDirectoryProvider, this.pluginPathsProvider, this.logger, this.tracer, this.processFactory);
    this._register(this.pluginManager.onDidUpdateConfig((update) => {
      this.configurePlugin(update.pluginId, update.config);
    }));
    this._register(this.pluginManager.onDidChangePlugins(() => {
      this.restartTsServer();
    }));
  }
  get configuration() {
    return this._configuration;
  }
  onReady(f) {
    return this._onReady.promise.then(f);
  }
  dispose() {
    super.dispose();
    this.versionStatus.dispose();
    this.bufferSyncSupport.dispose();
    this.diagnosticsManager.dispose();
    if (this.serverState.type === 1 /* Running */) {
      this.serverState.server.kill();
    }
  }
  info(message, data) {
    this.logger.info(message, data);
  }
  error(message, data) {
    this.logger.error(message, data);
  }
  restartTsServer(fromUserAction = false) {
    if (!this._configuration.enable)
      return;
    if (this.serverState.type === 1 /* Running */) {
      this.info("Killing TS Server");
      this.isRestarting = true;
      this.state = import_coc44.ServiceStat.Stopping;
      this.serverState.server.kill();
    }
    if (fromUserAction) {
      this.hasServerFatallyCrashedTooManyTimes = false;
      this.numberRestarts = 0;
      this.lastStart = Date.now();
    }
    this.serverState = this.startService(true);
  }
  stop() {
    if (this.serverState.type === 1 /* Running */) {
      this.info("Killing TS Server");
      this.state = import_coc44.ServiceStat.Stopping;
      this.isRestarting = true;
      this.serverState.server.kill();
    }
  }
  get apiVersion() {
    if (this.serverState.type === 1 /* Running */) {
      return this.serverState.apiVersion;
    }
    return API.defaultVersion;
  }
  get tscPath() {
    return this._tscPath;
  }
  ensureServiceStarted() {
    if (this.serverState.type !== 1 /* Running */) {
      this.startService();
    }
  }
  startService(resendModels = false) {
    this.info(`Starting TS Server`);
    if (this.isDisposed) {
      this.info(`Not starting server: disposed`);
      return ServerState.None;
    }
    if (this.hasServerFatallyCrashedTooManyTimes) {
      this.info(`Not starting server: too many crashes`);
      return ServerState.None;
    }
    let version = this.versionManager.currentVersion;
    if (!version.isValid) {
      void import_coc44.window.showWarningMessage(`The path ${version.path} doesn't point to a valid tsserver install. Falling back to bundled TypeScript version.`);
      this.versionManager.reset();
      version = this.versionManager.currentVersion;
    }
    this.info(`Using tsserver from: ${version.path}`);
    const apiVersion = version.version || API.defaultVersion;
    const mytoken = ++this.token;
    const handle = this.typescriptServerSpawner.spawn(version, this.capabilities, this.configuration, this.pluginManager, this.cancellerFactory, {
      onFatalError: (command, err) => this.fatalError(command, err)
    });
    this.state = import_coc44.ServiceStat.Starting;
    this.serverState = new ServerState.Running(handle, apiVersion, void 0, true);
    this.lastStart = Date.now();
    handle.onError((err) => {
      if (this.token !== mytoken) {
        return;
      }
      if (err) {
        this.state = import_coc44.ServiceStat.StartFailed;
        import_coc44.window.showErrorMessage(`TypeScript language server exited with error. Error message is: ${err.message || err.name}`);
      }
      this.serverState = new ServerState.Errored(err, handle.tsServerLogFile);
      this.error("TSServer errored with error.", err);
      if (handle.tsServerLogFile) {
        this.error(`TSServer log file: ${handle.tsServerLogFile}`);
      }
      this.serviceExited(false);
    });
    handle.onExit((data) => {
      const { code, signal } = data;
      this.error(`TSServer exited. Code: ${code}. Signal: ${signal}`);
      if (this.token !== mytoken) {
        return;
      }
      this.state = import_coc44.ServiceStat.Stopped;
      if (handle.tsServerLogFile) {
        this.info(`TSServer log file: ${handle.tsServerLogFile}`);
      }
      this.serviceExited(!this.isRestarting);
      this.isRestarting = false;
    });
    handle.onEvent((event) => this.dispatchEvent(event));
    if (apiVersion.gte(API.v300) && this.capabilities.has(2 /* Semantic */)) {
      this.versionStatus.loading = true;
    }
    import_coc44.workspace.nvim.setVar("Coc_tsserver_path", version.tscPath, true);
    this.serviceStarted(resendModels);
    this._onReady.resolve();
    this._onTsServerStarted.fire(version.version);
    this.versionStatus.onDidChangeTypeScriptVersion(version);
    this.state = import_coc44.ServiceStat.Running;
    this._onDidChangeCapabilities.fire();
    return this.serverState;
  }
  async openTsServerLogFile() {
    const isRoot = process.getuid && process.getuid() == 0;
    let showWarning = (msg) => {
      import_coc44.window.showWarningMessage(msg);
    };
    if (isRoot) {
      showWarning("Log disabled for root user.");
      return false;
    }
    if (!this.apiVersion.gte(API.v222)) {
      showWarning("TS Server logging requires TS 2.2.2+");
      return false;
    }
    if (this._configuration.tsServerLogLevel === 0 /* Off */) {
      showWarning(`TS Server logging is off. Change 'tsserver.log' in 'coc-settings.json' to enable`);
      return false;
    }
    if (this.serverState.type !== 1 /* Running */ || !this.serverState.server.tsServerLogFile) {
      showWarning("TS Server has not started logging.");
      return false;
    }
    let tsServerLogFile = this.serverState.server.tsServerLogFile;
    try {
      let uri = import_coc44.Uri.file(tsServerLogFile);
      await import_coc44.workspace.jumpTo(uri.toString(), void 0, "tabe");
      return true;
    } catch {
      showWarning("Could not open TS Server log file");
      return false;
    }
  }
  serviceStarted(resendModels) {
    this.bufferSyncSupport.reset();
    const watchOptions = this.apiVersion.gte(API.v380) ? this.configuration.watchOptions : void 0;
    const configureOptions = {
      hostInfo: "coc-nvim",
      preferences: {
        providePrefixAndSuffixTextForRename: true,
        allowRenameOfImportPath: true,
        includePackageJsonAutoImports: this._configuration.includePackageJsonAutoImports
      },
      watchOptions
    };
    this.executeWithoutWaitingForResponse("configure", configureOptions);
    this.setCompilerOptionsForInferredProjects(this._configuration);
    if (resendModels) {
      this._onResendModelsRequested.fire();
      this.bufferSyncSupport.reinitialize();
      this.bufferSyncSupport.requestAllDiagnostics();
    }
    for (const [pluginName, config] of this.pluginManager.configurations()) {
      this.configurePlugin(pluginName, config);
    }
  }
  setCompilerOptionsForInferredProjects(configuration) {
    const args = {
      options: this.getCompilerOptionsForInferredProjects(configuration)
    };
    this.executeWithoutWaitingForResponse("compilerOptionsForInferredProjects", args);
  }
  getCompilerOptionsForInferredProjects(configuration) {
    return {
      ...inferredProjectCompilerOptions(0 /* TypeScript */, configuration),
      allowJs: true,
      allowSyntheticDefaultImports: true,
      allowNonTsExtensions: true
    };
  }
  serviceExited(restart) {
    this.versionStatus.loading = false;
    this.serverState = ServerState.None;
    if (restart) {
      const diff = Date.now() - this.lastStart;
      this.numberRestarts++;
      let startService = true;
      const pluginExtensionList = this.pluginManager.plugins.map((plugin) => plugin.name).join(", ");
      if (this.numberRestarts > 5) {
        this.numberRestarts = 0;
        if (diff < 10 * 1e3) {
          this.lastStart = Date.now();
          startService = false;
          this.hasServerFatallyCrashedTooManyTimes = true;
          import_coc44.window.showErrorMessage(
            this.pluginManager.plugins.length ? `The JS/TS language service immediately crashed 5 times. The service will not be restarted.
This may be caused by a plugin contributed by one of these extensions: ${pluginExtensionList}` : "The JS/TS language service immediately crashed 5 times. The service will not be restarted."
          );
        } else if (diff < 60 * 1e3 * 5) {
          this.lastStart = Date.now();
          import_coc44.window.showWarningMessage(
            this.pluginManager.plugins.length ? `The JS/TS language service crashed 5 times in the last 5 Minutes.
This may be caused by a plugin contributed by one of these extensions: ${pluginExtensionList}` : "The JS/TS language service crashed 5 times in the last 5 Minutes."
          );
        }
      }
      if (startService) {
        this.startService(true);
      }
    }
  }
  toPath(uri) {
    return this.normalizedPath(import_coc44.Uri.parse(uri));
  }
  toOpenedFilePath(uri, options = {}) {
    if (!this.bufferSyncSupport.ensureHasBuffer(uri)) {
      if (!options.suppressAlertOnFailure) {
        this.error(`Unexpected resource ${uri}`);
      }
      return void 0;
    }
    return this.toPath(uri);
  }
  toResource(filepath) {
    if (filepath.includes("zipfile:")) {
      return filepath.replace(/.*zipfile:/, "zipfile://");
    }
    if (this._apiVersion.gte(API.v213)) {
      if (filepath.startsWith(this.inMemoryResourcePrefix + "untitled:")) {
        let resource = import_coc44.Uri.parse(filepath);
        if (this.inMemoryResourcePrefix) {
          const dirName = import_path11.default.dirname(resource.path);
          const fileName = import_path11.default.basename(resource.path);
          if (fileName.startsWith(this.inMemoryResourcePrefix)) {
            resource = resource.with({ path: import_path11.default.posix.join(dirName, fileName.slice(this.inMemoryResourcePrefix.length)) });
          }
        }
        return resource.toString();
      }
    }
    return import_coc44.Uri.file(filepath).toString();
  }
  normalizedPath(resource) {
    if (disabledSchemes.has(resource.scheme)) {
      return void 0;
    }
    switch (resource.scheme) {
      case file: {
        let result = resource.fsPath;
        if (!result)
          return void 0;
        result = import_path11.default.normalize(result);
        return result.replace(new RegExp("\\" + this.pathSeparator, "g"), "/");
      }
      default: {
        return this.inMemoryResourcePrefix + resource.toString(true);
      }
    }
  }
  getDocument(resource) {
    if (resource.startsWith("untitled:")) {
      let bufnr = parseInt(resource.split(":", 2)[1], 10);
      return import_coc44.workspace.getDocument(bufnr);
    }
    return import_coc44.workspace.getDocument(resource);
  }
  get inMemoryResourcePrefix() {
    return this._apiVersion.gte(API.v270) ? "^" : "";
  }
  asUrl(filepath) {
    if (this._apiVersion.gte(API.v213)) {
      if (filepath.startsWith(this.inMemoryResourcePrefix + "untitled:")) {
        let resource = import_coc44.Uri.parse(filepath.slice(this.inMemoryResourcePrefix.length));
        if (this.inMemoryResourcePrefix) {
          const dirName = import_path11.default.dirname(resource.path);
          const fileName = import_path11.default.basename(resource.path);
          if (fileName.startsWith(this.inMemoryResourcePrefix)) {
            resource = resource.with({
              path: import_path11.default.posix.join(
                dirName,
                fileName.slice(this.inMemoryResourcePrefix.length)
              )
            });
          }
        }
        return resource;
      }
    }
    return import_coc44.Uri.file(filepath);
  }
  execute(command, args, token, config) {
    let executions;
    if (config == null ? void 0 : config.cancelOnResourceChange) {
      const runningServerState = this.serverState;
      if (runningServerState.type === 1 /* Running */) {
        const source = new import_coc44.CancellationTokenSource();
        token.onCancellationRequested(() => source.cancel());
        const inFlight = {
          resource: config.cancelOnResourceChange,
          cancel: () => source.cancel()
        };
        runningServerState.toCancelOnResourceChange.add(inFlight);
        executions = this.executeImpl(command, args, {
          isAsync: false,
          token: source.token,
          expectsResult: true,
          ...config
        });
        executions[0].finally(() => {
          runningServerState.toCancelOnResourceChange.delete(inFlight);
          source.dispose();
        });
      }
    }
    if (!executions) {
      executions = this.executeImpl(command, args, {
        isAsync: false,
        token,
        expectsResult: true,
        ...config
      });
    }
    if (config == null ? void 0 : config.nonRecoverable) {
      executions[0].catch((err) => this.fatalError(command, err));
    }
    if (command === "updateOpen") {
      Promise.all(executions).then(() => {
        this.versionStatus.loading = false;
      });
    }
    return executions[0];
  }
  fatalError(command, error) {
    let msg = `A non-recoverable error occurred while executing tsserver command: ${command}`;
    this.error(msg);
    import_coc44.window.showErrorMessage(msg);
    if (error instanceof TypeScriptServerError && error.serverErrorText) {
      this.error(error.serverErrorText);
    }
    if (this.serverState.type === 1 /* Running */) {
      this.info("Killing TS Server");
      this.state = import_coc44.ServiceStat.Stopping;
      const logfile = this.serverState.server.tsServerLogFile;
      this.serverState.server.kill();
      if (error instanceof TypeScriptServerError) {
        this.serverState = new ServerState.Errored(error, logfile);
      }
    }
  }
  executeAsync(command, args, token) {
    return this.executeImpl(command, args, {
      isAsync: true,
      token,
      expectsResult: true
    })[0];
  }
  executeWithoutWaitingForResponse(command, args) {
    this.executeImpl(command, args, {
      isAsync: false,
      token: void 0,
      expectsResult: false
    });
  }
  executeImpl(command, args, executeInfo) {
    const serverState = this.serverState;
    if (serverState.type === 1 /* Running */) {
      this.bufferSyncSupport.beforeCommand(command);
      return serverState.server.executeImpl(command, args, executeInfo);
    } else {
      return [Promise.resolve(ServerResponse.NoServer)];
    }
  }
  dispatchEvent(event) {
    var _a;
    switch (event.event) {
      case "syntaxDiag" /* syntaxDiag */:
      case "semanticDiag" /* semanticDiag */:
      case "suggestionDiag" /* suggestionDiag */: {
        this.versionStatus.loading = false;
        const diagnosticEvent = event;
        if ((_a = diagnosticEvent.body) == null ? void 0 : _a.diagnostics) {
          this._onDiagnosticsReceived.fire({
            kind: getDiagnosticsKind(event),
            resource: this.toResource(diagnosticEvent.body.file),
            diagnostics: diagnosticEvent.body.diagnostics
          });
        }
        break;
      }
      case "configFileDiag" /* configFileDiag */:
        this._onConfigDiagnosticsReceived.fire(event);
        break;
      case "telemetry" /* telemetry */: {
        const body = event.body;
        break;
      }
      case "projectLanguageServiceState" /* projectLanguageServiceState */: {
        const body = event.body;
        if (this.serverState.type === 1 /* Running */) {
          this.serverState.updateLanguageServiceEnabled(body.languageServiceEnabled);
        }
        this._onProjectLanguageServiceStateChanged.fire(body);
        break;
      }
      case "projectsUpdatedInBackground" /* projectsUpdatedInBackground */: {
        this.versionStatus.loading = false;
        const body = event.body;
        const resources = body.openFiles.map((file2) => import_coc44.Uri.parse(this.toResource(file2)));
        this.bufferSyncSupport.getErr(resources);
        break;
      }
      case "beginInstallTypes" /* beginInstallTypes */:
        this._onDidBeginInstallTypings.fire(event.body);
        break;
      case "endInstallTypes" /* endInstallTypes */:
        this._onDidEndInstallTypings.fire(event.body);
        break;
      case "typesInstallerInitializationFailed" /* typesInstallerInitializationFailed */:
        this._onTypesInstallerInitializationFailed.fire(event.body);
        break;
      case "surveyReady" /* surveyReady */:
        break;
      case "projectLoadingStart" /* projectLoadingStart */:
        this.versionStatus.loading = true;
        break;
      case "projectLoadingFinish" /* projectLoadingFinish */:
        this.versionStatus.loading = false;
        break;
    }
  }
  interruptGetErr(f) {
    return this.bufferSyncSupport.interruptGetErr(f);
  }
  cancelInflightRequestsForResource(resource) {
    if (this.serverState.type !== 1 /* Running */) {
      return;
    }
    for (const request of this.serverState.toCancelOnResourceChange) {
      if (request.resource.toString() === resource.toString()) {
        request.cancel();
      }
    }
  }
  get capabilities() {
    if (this._configuration.useSyntaxServer === 1 /* Always */) {
      return new ClientCapabilities(
        0 /* Syntax */,
        1 /* EnhancedSyntax */
      );
    }
    if (this.apiVersion.gte(API.v400)) {
      return new ClientCapabilities(
        0 /* Syntax */,
        1 /* EnhancedSyntax */,
        2 /* Semantic */
      );
    }
    return new ClientCapabilities(
      0 /* Syntax */,
      2 /* Semantic */
    );
  }
  hasCapabilityForResource(resource, capability) {
    if (!this.capabilities.has(capability)) {
      return false;
    }
    switch (capability) {
      case 2 /* Semantic */: {
        return semanticSupportedSchemes.includes(resource.scheme);
      }
      case 0 /* Syntax */:
      case 1 /* EnhancedSyntax */: {
        return true;
      }
    }
  }
  getWorkspaceRootForResource(resource) {
    const roots = import_coc44.workspace.workspaceFolders ? Array.from(import_coc44.workspace.workspaceFolders) : void 0;
    if (!(roots == null ? void 0 : roots.length))
      return void 0;
    const uris = roots.map((f) => import_coc44.Uri.parse(f.uri));
    switch (resource.scheme) {
      case file:
      case untitled:
      case vscodeNotebookCell:
      case memFs:
        for (const uri of uris.sort((a, b) => a.fsPath.length - b.fsPath.length)) {
          if (resource.fsPath.startsWith(uri.fsPath + import_path11.default.sep)) {
            return uri.fsPath;
          }
        }
        return uris[0].fsPath;
      default:
        return void 0;
    }
  }
  configurePlugin(pluginName, configuration) {
    if (this.apiVersion.gte(API.v314)) {
      this.executeWithoutWaitingForResponse("configurePlugin", { pluginName, configuration });
    }
  }
};
function getDiagnosticsKind(event) {
  switch (event.event) {
    case "syntaxDiag":
      return 0 /* Syntax */;
    case "semanticDiag":
      return 1 /* Semantic */;
    case "suggestionDiag":
      return 2 /* Suggestion */;
  }
  throw new Error("Unknown diagnostics kind");
}

// src/server/typescriptServiceClientHost.ts
init_languageDescription();
init_typeConverters();

// src/server/utils/typingsStatus.ts
var import_coc45 = require("coc.nvim");
var import_vscode_languageserver_protocol15 = __toESM(require_main2());
var typingsInstallTimeout = 30 * 1e3;
var TypingsStatus = class {
  constructor(client) {
    this._acquiringTypings = /* @__PURE__ */ Object.create(
      {}
    );
    this._subscriptions = [];
    this._client = client;
    this._subscriptions.push(
      this._client.onDidBeginInstallTypings(
        (event) => this.onBeginInstallTypings(event.eventId)
      )
    );
    this._subscriptions.push(
      this._client.onDidEndInstallTypings(
        (event) => this.onEndInstallTypings(event.eventId)
      )
    );
  }
  dispose() {
    this._subscriptions.forEach((x) => x.dispose());
    for (const eventId of Object.keys(this._acquiringTypings)) {
      clearTimeout(this._acquiringTypings[eventId]);
    }
  }
  get isAcquiringTypings() {
    return Object.keys(this._acquiringTypings).length > 0;
  }
  onBeginInstallTypings(eventId) {
    if (this._acquiringTypings[eventId]) {
      return;
    }
    this._acquiringTypings[eventId] = setTimeout(() => {
      this.onEndInstallTypings(eventId);
    }, typingsInstallTimeout);
  }
  onEndInstallTypings(eventId) {
    const timer = this._acquiringTypings[eventId];
    if (timer) {
      clearTimeout(timer);
    }
    delete this._acquiringTypings[eventId];
  }
};
var AtaProgressReporter = class {
  constructor(client) {
    this._promises = /* @__PURE__ */ new Map();
    this._invalid = false;
    this.statusItem = import_coc45.window.createStatusBarItem(10, { progress: true });
    const disposables = [];
    disposables.push(client.onDidBeginInstallTypings((e) => this._onBegin(e.eventId)));
    disposables.push(client.onDidEndInstallTypings((e) => this._onEndOrTimeout(e.eventId)));
    disposables.push(client.onTypesInstallerInitializationFailed(
      (_) => this.onTypesInstallerInitializationFailed()
    ));
    this._disposable = import_vscode_languageserver_protocol15.Disposable.create(() => {
      disposables.forEach((disposable) => {
        disposable.dispose();
      });
    });
  }
  dispose() {
    this._disposable.dispose();
    this._promises.forEach((value) => value());
  }
  _onBegin(eventId) {
    const handle = setTimeout(
      () => this._onEndOrTimeout(eventId),
      typingsInstallTimeout
    );
    new Promise((resolve) => {
      this._promises.set(eventId, () => {
        clearTimeout(handle);
        resolve();
      });
    });
    this.statusItem.text = "Fetching data for better TypeScript IntelliSense";
    this.statusItem.show();
  }
  _onEndOrTimeout(eventId) {
    this.statusItem.hide();
    const resolve = this._promises.get(eventId);
    if (resolve) {
      this._promises.delete(eventId);
      resolve();
    }
  }
  async onTypesInstallerInitializationFailed() {
    this.statusItem.hide();
    if (!this._invalid) {
      const config = import_coc45.workspace.getConfiguration("typescript");
      if (config.get("check.npmIsInstalled", true)) {
        const dontShowAgain = "Don't Show Again";
        const selected = await import_coc45.window.showWarningMessage(
          "Could not install typings files for JavaScript language features. Please ensure that NPM is installed or configure 'typescript.npm' in your user settings. visit https://go.microsoft.com/fwlink/?linkid=847635  to learn more.",
          dontShowAgain
        );
        if (selected === dontShowAgain) {
          config.update("check.npmIsInstalled", false, true);
        }
      }
    }
    this._invalid = true;
  }
};

// src/server/typescriptServiceClientHost.ts
var styleCheckDiagnostics = /* @__PURE__ */ new Set([
  ...variableDeclaredButNeverUsed,
  ...propertyDeclaretedButNeverUsed,
  ...allImportsAreUnused,
  ...unreachableCode,
  ...unusedLabel,
  ...fallThroughCaseInSwitch,
  ...notAllCodePathsReturnAValue
]);
var TypeScriptServiceClientHost = class {
  constructor(descriptions, pluginManager, tscPath, context) {
    this.languagePerId = /* @__PURE__ */ new Map();
    this.disposables = [];
    this.reportStyleCheckAsWarnings = true;
    let timer;
    const handleProjectChange = () => {
      if (timer)
        clearTimeout(timer);
      timer = setTimeout(() => {
        this.triggerAllDiagnostics();
      }, 1500);
    };
    const configFileWatcher = import_coc47.workspace.createFileSystemWatcher("**/[tj]sconfig.json");
    this.disposables.push(configFileWatcher);
    configFileWatcher.onDidCreate(this.reloadProjects, this, this.disposables);
    configFileWatcher.onDidDelete(this.reloadProjects, this, this.disposables);
    configFileWatcher.onDidChange(handleProjectChange, this, this.disposables);
    const packageFileWatcher = import_coc47.workspace.createFileSystemWatcher("**/package.json");
    packageFileWatcher.onDidCreate(this.reloadProjects, this, this.disposables);
    packageFileWatcher.onDidChange(handleProjectChange, this, this.disposables);
    const services2 = {
      pluginManager,
      logDirectoryProvider: new NodeLogDirectoryProvider(context),
      processFactory: new ServiceProcessFactory(),
      cancellerFactory: nodeRequestCancellerFactory
    };
    const allModeIds = this.getAllModeIds(descriptions, pluginManager);
    this.client = new TypeScriptServiceClient(context, allModeIds, services2, tscPath);
    this.disposables.push(this.client);
    this.client.onDiagnosticsReceived(({ kind, resource, diagnostics }) => {
      this.diagnosticsReceived(kind, resource, diagnostics).catch((e) => {
        console.error(e);
      });
    }, null, this.disposables);
    this.client.onResendModelsRequested(() => this.populateService(), null, this.disposables);
    this.disposables.push(import_coc47.languages.registerWorkspaceSymbolProvider(new TypeScriptWorkspaceSymbolProvider(this.client, allModeIds)));
    Promise.resolve().then(() => (init_updatePathOnRename(), updatePathOnRename_exports)).then((module2) => {
      this.disposables.push(module2.register(this.client, this.fileConfigurationManager, (uri) => this.handles(uri)));
    });
    this.client.onConfigDiagnosticsReceived((diag) => {
      let { body } = diag;
      if (body) {
        let { configFile, diagnostics } = body;
        let uri = import_coc47.Uri.file(configFile).toString();
        if (diagnostics.length == 0) {
          this.client.diagnosticsManager.configFileDiagnosticsReceived(uri, []);
        } else {
          let diagnosticList = diagnostics.map((diag2) => {
            let { text, code, start, end } = diag2;
            let range;
            if (!start || !end) {
              range = import_coc47.Range.create(0, 0, 0, 1);
            } else {
              range = import_coc47.Range.create(start.line - 1, start.offset - 1, end.line - 1, end.offset - 1);
            }
            let severity = this.getDiagnosticSeverity(diag2);
            return import_coc47.Diagnostic.create(range, text, severity, code);
          });
          this.client.diagnosticsManager.configFileDiagnosticsReceived(uri, diagnosticList);
        }
      }
    }, null, this.disposables);
    this.typingsStatus = new TypingsStatus(this.client);
    this.ataProgressReporter = new AtaProgressReporter(this.client);
    this.fileConfigurationManager = new FileConfigurationManager(this.client);
    for (const description of descriptions) {
      const manager = new LanguageProvider(
        this.client,
        this.fileConfigurationManager,
        description,
        this.typingsStatus
      );
      this.languagePerId.set(description.id, manager);
    }
    this.client.ensureServiceStarted();
    this.client.onReady(() => {
      const languageIds = /* @__PURE__ */ new Set();
      for (const plugin of pluginManager.plugins) {
        if (plugin.configNamespace && plugin.languages.length) {
          this.registerExtensionLanguageProvider({
            id: plugin.configNamespace,
            languageIds: Array.from(plugin.languages),
            diagnosticSource: "ts-plugin",
            diagnosticLanguage: 1 /* TypeScript */,
            diagnosticOwner: "typescript",
            standardFileExtensions: [],
            isExternal: true
          });
        } else {
          for (const language2 of plugin.languages) {
            languageIds.add(language2);
          }
        }
      }
      if (languageIds.size) {
        this.registerExtensionLanguageProvider({
          id: "typescript-plugins",
          languageIds: Array.from(languageIds.values()),
          diagnosticSource: "ts-plugin",
          diagnosticLanguage: 1 /* TypeScript */,
          diagnosticOwner: "typescript",
          standardFileExtensions: [],
          isExternal: true
        });
      }
    });
    this.client.onTsServerStarted(() => {
      this.triggerAllDiagnostics();
    });
    import_coc47.workspace.onDidChangeConfiguration(this.configurationChanged, this, this.disposables);
    this.configurationChanged();
  }
  registerExtensionLanguageProvider(description) {
    const manager = new LanguageProvider(this.client, this.fileConfigurationManager, description, this.typingsStatus);
    this.languagePerId.set(description.id, manager);
  }
  dispose() {
    (0, import_coc47.disposeAll)(this.disposables);
    for (let language2 of this.languagePerId.values()) {
      language2.dispose();
    }
    this.languagePerId.clear();
    this.fileConfigurationManager.dispose();
    this.typingsStatus.dispose();
    this.ataProgressReporter.dispose();
  }
  get serviceClient() {
    return this.client;
  }
  reloadProjects() {
    this.client.diagnosticsManager.reInitialize();
    this.client.execute("reloadProjects", null, import_coc47.CancellationToken.None);
    this.triggerAllDiagnostics();
  }
  getProvider(languageId) {
    return this.languagePerId.get(languageId);
  }
  configurationChanged(e) {
    if (!e || e.affectsConfiguration("tsserver")) {
      const config = import_coc47.workspace.getConfiguration("tsserver");
      this.reportStyleCheckAsWarnings = config.get("reportStyleChecksAsWarnings", true);
    }
  }
  async findLanguage(uri) {
    try {
      let doc = this.client.getDocument(uri);
      let languages4 = Array.from(this.languagePerId.values());
      if (doc)
        return languages4.find((language2) => language2.handles(uri, doc.textDocument));
      return languages4.find((language2) => language2.handlesUri(import_coc47.Uri.parse(uri)));
    } catch {
      return void 0;
    }
  }
  async handles(uri) {
    const provider = await this.findLanguage(uri);
    if (provider)
      return true;
    return this.client.bufferSyncSupport.handles(uri);
  }
  triggerAllDiagnostics() {
    for (const language2 of this.languagePerId.values()) {
      language2.triggerAllDiagnostics();
    }
  }
  populateService() {
    this.fileConfigurationManager.reset();
    for (const language2 of this.languagePerId.values()) {
      language2.reInitialize();
    }
  }
  async diagnosticsReceived(kind, resource, diagnostics) {
    const language2 = await this.findLanguage(resource);
    if (language2) {
      language2.diagnosticsReceived(
        kind,
        resource,
        this.createMarkerData(diagnostics)
      );
    }
  }
  createMarkerData(diagnostics) {
    return diagnostics.map((tsDiag) => this.tsDiagnosticToLspDiagnostic(tsDiag));
  }
  tsDiagnosticToLspDiagnostic(diagnostic) {
    const { start, end, text } = diagnostic;
    const range = {
      start: Position2.fromLocation(start),
      end: Position2.fromLocation(end)
    };
    let relatedInformation;
    if (diagnostic.relatedInformation) {
      relatedInformation = diagnostic.relatedInformation.map((o) => {
        let { span, message } = o;
        return {
          location: Location2.fromTextSpan(this.client.toResource(span.file), span),
          message
        };
      });
    }
    let tags = [];
    if (diagnostic.reportsUnnecessary) {
      tags.push(import_coc47.DiagnosticTag.Unnecessary);
    }
    if (diagnostic.reportsDeprecated) {
      tags.push(import_coc47.DiagnosticTag.Deprecated);
    }
    tags = tags.length ? tags : void 0;
    return {
      range,
      tags,
      message: text,
      code: diagnostic.code ? diagnostic.code : null,
      severity: this.getDiagnosticSeverity(diagnostic),
      reportDeprecated: diagnostic.reportsDeprecated,
      reportUnnecessary: diagnostic.reportsUnnecessary,
      source: diagnostic.source,
      relatedInformation
    };
  }
  getDiagnosticSeverity(diagnostic) {
    if (this.reportStyleCheckAsWarnings && this.isStyleCheckDiagnostic(diagnostic.code) && diagnostic.category === DiagnosticCategory.error) {
      return import_coc47.DiagnosticSeverity.Warning;
    }
    switch (diagnostic.category) {
      case DiagnosticCategory.error:
        return import_coc47.DiagnosticSeverity.Error;
      case DiagnosticCategory.warning:
        return import_coc47.DiagnosticSeverity.Warning;
      case DiagnosticCategory.suggestion:
        return import_coc47.DiagnosticSeverity.Hint;
      default:
        return import_coc47.DiagnosticSeverity.Error;
    }
  }
  isStyleCheckDiagnostic(code) {
    return typeof code === "number" && styleCheckDiagnostics.has(code);
  }
  getAllModeIds(descriptions, pluginManager) {
    const allModeIds = flatten([
      ...descriptions.map((x) => x.languageIds),
      ...pluginManager.plugins.map((x) => x.languages)
    ]);
    return allModeIds;
  }
};

// src/server/index.ts
init_languageDescription();
var TsserverService = class {
  constructor(pluginManager, context) {
    this.pluginManager = pluginManager;
    this.context = context;
    this.id = "tsserver";
    this.name = "tsserver";
    this._state = import_coc48.ServiceStat.Initial;
    this._onDidServiceReady = new import_coc48.Emitter();
    this.onServiceReady = this._onDidServiceReady.event;
    this.disposables = [];
    this.descriptions = [];
    const config = import_coc48.workspace.getConfiguration("tsserver");
    this.enable = config.get("enable");
    this.descriptions = standardLanguageDescriptions.filter((o) => {
      return true;
    });
    import_coc48.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("tsserver")) {
        const config2 = import_coc48.workspace.getConfiguration("tsserver");
        let enable = this.enable;
        this.enable = config2.get("enable", true);
        if (enable !== this.enable) {
          if (this.enable) {
            void this.start();
          } else {
            void this.stop();
          }
        }
      }
    });
    this.selector = this.descriptions.reduce((arr, c) => {
      return arr.concat(c.languageIds);
    }, []);
    this.registCommands();
  }
  get subscriptions() {
    return this.context.subscriptions;
  }
  get state() {
    if (this.clientHost) {
      return this.clientHost.serviceClient.state;
    }
    return this._state;
  }
  registCommands() {
    let { subscriptions } = this;
    const registCommand2 = (cmd) => {
      let { id, execute } = cmd;
      subscriptions.push(import_coc48.commands.registerCommand(id, execute, cmd));
    };
    let watchProject = new WatchProject(this, this.context.logger);
    subscriptions.push(watchProject);
    registCommand2({
      id: WatchProject.id,
      execute: () => {
        return watchProject.execute();
      }
    });
    registCommand2(new ChooseVersionCommand(this));
    registCommand2(new ConfigurePluginCommand(this.pluginManager));
    registCommand2(new AutoFixCommand(this));
    registCommand2(new ReloadProjectsCommand(this));
    registCommand2(new FileReferencesCommand(this));
    registCommand2(new OpenTsServerLogCommand(this));
    registCommand2(new TypeScriptGoToProjectConfigCommand(this));
    registCommand2(new SourceDefinitionCommand(this));
    registCommand2({
      id: "tsserver.restart",
      execute: () => {
        this.restart();
      }
    });
  }
  get config() {
    return import_coc48.workspace.getConfiguration("tsserver");
  }
  getClientHost() {
    if (this.state == import_coc48.ServiceStat.Running)
      return Promise.resolve(this.clientHost);
    this.start();
    return new Promise((resolve, reject) => {
      let timer = setTimeout(() => {
        reject(new Error(`Server not started after 5s`));
      }, 5e3);
      let disposable = this.onServiceReady(() => {
        clearTimeout(timer);
        disposable.dispose();
        resolve(this.clientHost);
      });
    });
  }
  async start() {
    if (!this.enable || this._state == import_coc48.ServiceStat.Starting)
      return;
    this._state = import_coc48.ServiceStat.Starting;
    if (this.clientHost) {
      let client2 = this.clientHost.serviceClient;
      client2.restartTsServer(true);
      return;
    }
    let tscPath = await import_coc48.workspace.nvim.getVar("Coc_tsserver_path");
    this.clientHost = new TypeScriptServiceClientHost(this.descriptions, this.pluginManager, tscPath, this.context);
    let client = this.clientHost.serviceClient;
    await new Promise((resolve) => {
      client.onReady(() => {
        this._onDidServiceReady.fire(void 0);
        resolve(void 0);
      });
    });
  }
  async restart() {
    if (!this.enable)
      return;
    await this.stop();
    await this.start();
  }
  async stop() {
    var _a;
    if (!this.clientHost)
      return;
    let client = this.clientHost.serviceClient;
    client.stop();
    await (0, import_coc48.wait)(30);
    (_a = this.clientHost) == null ? void 0 : _a.dispose();
    this.clientHost = null;
    this._state = import_coc48.ServiceStat.Stopped;
  }
  dispose() {
    void this.stop();
    this._onDidServiceReady.dispose();
    (0, import_coc48.disposeAll)(this.disposables);
  }
};

// src/utils/plugins.ts
var import_coc49 = require("coc.nvim");
var TypeScriptServerPlugin;
((TypeScriptServerPlugin2) => {
  function equals4(a, b) {
    return a.path === b.path && a.name === b.name && a.enableForWorkspaceTypeScriptVersions === b.enableForWorkspaceTypeScriptVersions && equals(a.languages, b.languages);
  }
  TypeScriptServerPlugin2.equals = equals4;
})(TypeScriptServerPlugin || (TypeScriptServerPlugin = {}));
var PluginManager = class {
  constructor() {
    this._pluginConfigurations = /* @__PURE__ */ new Map();
    this._disposables = [];
    this._onDidUpdatePlugins = this._register(new import_coc49.Emitter());
    this.onDidChangePlugins = this._onDidUpdatePlugins.event;
    this._onDidUpdateConfig = this._register(new import_coc49.Emitter());
    this.onDidUpdateConfig = this._onDidUpdateConfig.event;
    let loadPlugins = () => {
      if (!this._plugins) {
        return;
      }
      const newPlugins = this.readPlugins();
      if (!equals(flatten(Array.from(this._plugins.values())), flatten(Array.from(newPlugins.values())), TypeScriptServerPlugin.equals)) {
        this._plugins = newPlugins;
        this._onDidUpdatePlugins.fire(this);
      }
    };
    import_coc49.extensions.onDidActiveExtension(loadPlugins, void 0, this._disposables);
    import_coc49.extensions.onDidUnloadExtension(loadPlugins, void 0, this._disposables);
  }
  dispose() {
    (0, import_coc49.disposeAll)(this._disposables);
  }
  get plugins() {
    if (!this._plugins) {
      this._plugins = this.readPlugins();
    }
    return flatten(Array.from(this._plugins.values()));
  }
  _register(value) {
    this._disposables.push(value);
    return value;
  }
  setConfiguration(pluginId, config) {
    this._pluginConfigurations.set(pluginId, config);
    this._onDidUpdateConfig.fire({ pluginId, config });
  }
  configurations() {
    return this._pluginConfigurations.entries();
  }
  readPlugins() {
    const pluginMap = /* @__PURE__ */ new Map();
    for (const extension of import_coc49.extensions.all) {
      const pack = extension.packageJSON;
      if (pack.contributes && Array.isArray(pack.contributes.typescriptServerPlugins)) {
        const plugins = [];
        for (const plugin of pack.contributes.typescriptServerPlugins) {
          plugins.push({
            name: plugin.name,
            enableForWorkspaceTypeScriptVersions: !!plugin.enableForWorkspaceTypeScriptVersions,
            path: extension.extensionPath,
            languages: Array.isArray(plugin.languages) ? plugin.languages : []
          });
        }
        if (plugins.length) {
          pluginMap.set(extension.id, plugins);
        }
      }
    }
    return pluginMap;
  }
};

// src/index.ts
async function activate(context) {
  let { subscriptions } = context;
  const pluginManager = new PluginManager();
  const service = new TsserverService(pluginManager, context);
  subscriptions.push(import_coc50.services.register(service));
  return {
    configurePlugin: (pluginId, configuration) => {
      pluginManager.setConfiguration(pluginId, configuration);
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate
});
