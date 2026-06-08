import type { Options, PluginSimple, PluginWithOptions, PluginWithParams } from 'markdown-it';
import type { Token } from 'markdown-it';
export interface MermaidConfig {
  theme?: string;
}

export interface CustomXssRule {
  key: string;
  value: string[] | null;
}

export interface CodBlockData {
  code: string;
  language: string;
}

export interface CodeBlockActionMethods {
  toggleExpand: () => void;
  copyCode: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  download: () => void;
  resetView: () => void;
  switchMermaidView: (show: boolean) => void;
  getMermaidContainer: () => HTMLElement | null;
}

export interface CodeBlockActionStates {
  expanded: boolean;
  copied: boolean;
  isMermaid: boolean;
  showMermaidDiagram: boolean;
}

export type CodeBlockActions = CodeBlockActionMethods & CodeBlockActionStates;

export type CodeBlockSlotScope = CodeBlockActions & {
  codeBlockData: CodBlockData;
};

export type CodeBlockSlot = {
  actions?: (scope: CodeBlockActions) => any;
  header?: (scope: CodeBlockActions) => any;
  content?: (scope: CodeBlockActions) => any;
};

export type Theme = 'light' | 'dark';

export type TypingStyle = 'normal' | 'cursor' | 'color' | 'gradient';

export type IntervalType = number | [number, number];

export const defaultTypingConfig = {
  step: 2,
  interval: 50,
  style: 'normal' as TypingStyle,
};

export interface MdPlugin {
  plugin: PluginSimple | PluginWithOptions | PluginWithParams;
  opts?: unknown;
}

export interface MarkdownCardProps {
  content?: string;
  typing?: boolean;
  enableThink?: boolean;
  typingOptions?: {
    step?: number;
    interval?: number | [number, number];
    style?: TypingStyle;
  };
  thinkOptions?: {
    customClass?: string;
  };
  mdOptions?: Options;
  mdPlugins?: Array<MdPlugin>;
  customXssRules?: Array<CustomXssRule>;
  theme?: Theme;
  enableMermaid?: boolean;
  mermaidConfig?: MermaidConfig;
}

// 定义 AST 节点接口
export interface ASTNode {
  nodeType: string;
  openNode: Token | null;
  closeNode: Token | null;
  children: (ASTNode | Token)[];
  vNodeKey: string;
}
