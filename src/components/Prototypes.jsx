// components/Prototypes.jsx

import usePrototypes from '../hooks/usePrototypes';
import useActions from '../hooks/useActions';

export default function Prototypes() {
  const prototypes = usePrototypes();
  return (
    <main>
      <div className="prototypes">
        {prototypes.map((prototype) => {
          const { id, title, artist, desc, thumbnail, price, pieUrl } = prototype;
          const { addToOrder } = useActions();

          const click = () => {
            addToOrder(id);
          };
          return (
            <div className="prototype" key={id}>
              <a href={pieUrl} target="_blank" rel="noreferrer">
                <div
                  style={{
                    padding: '25px 0 33px 0',
                  }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="prototype__artwork prototype__edit"
                    style={{
                      objectFit: 'contain',
                    }}
                    src={thumbnail}
                  />
                </div>
              </a>

              <div className="prototype__body">
                <div className="prototype__title">
                  <div className="btn btn--primary float--right" onClick={click}>
                    <i className="icon icon--plus" />
                  </div>
                  {title}
                </div>
                <p className="prototype__price">{price}</p>
                <p className="prototype__description">{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
