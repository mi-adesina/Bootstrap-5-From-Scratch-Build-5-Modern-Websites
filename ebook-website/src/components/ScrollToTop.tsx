import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that automatically scrolls the window to the top on route changes.
 * This component uses the `useLocation` hook to detect route changes and the
 * `useEffect` hook to trigger the scrolling. It does not render any visible
 * content.
 *
 * @component
 * @author Michael Adesina <uniquecyborg@gmail.com>
 * @returns {null} null - This component does not render any JSX.
 */
const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  /**
   * Effect that scrolls the window to the top whenever the route changes.
   * The dependency array `[pathname]` ensures that this effect only runs when
   * the pathname changes, preventing unnecessary re-executions.
   *
   * @function useEffect
   * @param {function} callback - The function to execute after render.
   * @param {Array<any>} dependencies - The dependency array. The effect will only run if any of these values change.
   * @returns {void}
   */
  useEffect(() => {
    /**
     * Scrolls the window to the top-left corner (0, 0).
     *
     * @function window.scrollTo
     * @param {number} x - The horizontal scroll coordinate.
     * @param {number} y - The vertical scroll coordinate.
     * @returns {void}
     */
    window.scrollTo(0, 0); 
  }, [pathname]); 

  return null; // This component doesn't render anything
};

export default ScrollToTop;