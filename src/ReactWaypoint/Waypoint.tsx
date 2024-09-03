import { PropsWithChildren, useContext, useEffect, useId, useRef } from 'react';
import { ReactWaypointContext } from './ReactWaypointContext';
import { IntersectionObserverService } from './IntersectionObserverService';
import { IWaypoint } from './types';

const Waypoint = ({ children }: PropsWithChildren) => {
  return (
    <ReactWaypointContext.Provider value={new IntersectionObserverService()}>
      <>{children}</>
    </ReactWaypointContext.Provider>
  );
};

Waypoint.Item = ({
  children,
  onEnter,
  onLeave,
}: PropsWithChildren<IWaypoint>) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const id = useId();

  const ctx = useContext(ReactWaypointContext)!;
  useEffect(() => {
    if (itemRef.current) {
      ctx.intersection.observe(itemRef.current);
      ctx.setRegistry(id, { onEnter, onLeave });
    }
    return () => {
      ctx.intersection.unobserve(itemRef.current!);
    };
  }, []);

  return (
    <div ref={itemRef} data-id={id}>
      {children}
    </div>
  );
};

export { Waypoint };
