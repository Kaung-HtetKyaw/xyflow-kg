import { OnResizeHandler } from '../../hooks/useResizeHandler';
import type { FlowRendererProps } from '../FlowRenderer';
type ZoomPaneProps = Omit<FlowRendererProps, 'deleteKeyCode' | 'selectionKeyCode' | 'multiSelectionKeyCode' | 'noDragClassName' | 'disableKeyboardA11y' | 'selectionOnDrag'> & {
    isControlledViewport: boolean;
};
export type OnZoomPaneResizeHandler = OnResizeHandler;
export declare function ZoomPane({ onPaneContextMenu, zoomOnScroll, zoomOnPinch, panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag, defaultViewport, translateExtent, minZoom, maxZoom, zoomActivationKeyCode, preventScrolling, children, noWheelClassName, noPanClassName, onViewportChange, isControlledViewport, paneClickDistance, onZoomPaneResize, }: ZoomPaneProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map