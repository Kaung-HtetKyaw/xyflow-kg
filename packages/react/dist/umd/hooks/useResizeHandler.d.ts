import { type MutableRefObject } from 'react';
export type OnResizeHandler = (update: () => void) => void;
/**
 * Hook for handling resize events.
 *
 * @internal
 */
export declare function useResizeHandler(domNode: MutableRefObject<HTMLDivElement | null>, onResize?: OnResizeHandler): void;
//# sourceMappingURL=useResizeHandler.d.ts.map