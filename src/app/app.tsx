import { useEffect } from 'react';
import { Waypoint } from 'src/ReactWaypoint';

const App = () => {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <Waypoint>
        <div
          className="page"
          style={{
            position: 'relative',
            display: 'flex',
            overflow: 'scroll',
            justifyContent: 'end',
          }}
        >
          <div
            style={{
              width: '30%',
              position: 'fixed',
              left: 0,
              top: 0,
              height: '100vh',
              background: 'green',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {new Array(20).fill(null).map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      background: 'blue',
                      width: '100%',
                      marginBottom: '1rem',
                    }}
                  >
                    <span>{index}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            style={{
              width: '70%',
            }}
          >
            <>
              {new Array(20).fill(null).map((item, index) => {
                return (
                  <Waypoint.Item
                    onEnter={(obj) => {
                      console.log('onEnter', obj);
                    }}
                    onLeave={(obj) => {
                      console.log('onLeave', obj);
                    }}
                    key={index}
                  >
                    <div
                      style={{
                        background: 'red',
                        width: '100%',
                        height: '15rem',
                        marginBottom: '1rem',
                      }}
                    >
                      <span>{index}</span>
                    </div>
                  </Waypoint.Item>
                );
              })}
            </>
          </div>
        </div>
      </Waypoint>
    </div>
  );
};

export { App };
