import { Waypoint } from 'src/ReactWaypoint';

const SomeComponent = () => {
  return (
    <div
      style={{
        background: 'yellow',
        width: '100%',
        height: '5rem',
        textAlign: 'center',
      }}
    >
      <Waypoint.Item
        onEnter={({ item, entry }) => {
          console.log('onEnter', item.querySelector('.milos'));
        }}
        onLeave={({ item, entry }) => {
          console.log('onLeave');
        }}
      >
        <span className="milos">SomeComponent</span>
      </Waypoint.Item>
    </div>
  );
};
const App = () => {
  return (
    <Waypoint>
      <>
        <div
          style={{
            height: '80rem',
            background: 'red',
          }}
        ></div>
        <div
          style={{
            height: '50rem',
            background: 'blue',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <SomeComponent />
        </div>
        <div
          style={{
            height: '50rem',
            background: 'blue',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <SomeComponent />
        </div>
        <div
          style={{
            height: '50rem',
            background: 'blue',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <SomeComponent />
        </div>
        <div
          style={{
            height: '50rem',
            background: 'blue',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <SomeComponent />
        </div>
        <div
          style={{
            height: '50rem',
            background: 'green',
          }}
        ></div>
      </>
    </Waypoint>
  );
};

export { App };
