import React from 'react';

function StickyButton() {
  return (
    <div
      style={{
        height: 300,
        marginBottom: '0.5rem',
        overflow: 'scroll',
        border: '1px solid var(--gold)',
      }}
    >
      <p>
        In aliqua eiusmod commodo consequat ipsum minim Lorem dolore culpa sint
        do est Lorem. Est in officia esse pariatur consectetur enim laboris eu
        ipsum ex. Laboris consequat eiusmod ex sunt labore in proident. Velit et
        in deserunt sint reprehenderit id. Duis culpa do non dolore mollit
        consectetur consectetur tempor non anim minim occaecat. Ad magna
        excepteur dolore dolor tempor non duis voluptate ad incididunt nostrud
        amet cupidatat. Proident quis ipsum culpa qui officia mollit
        reprehenderit mollit eu cupidatat ad. Exercitation consectetur esse id
        voluptate aliquip duis excepteur cupidatat officia sint elit ut.
        Proident exercitation cillum anim pariatur labore qui reprehenderit ut
        proident. Laboris deserunt ex amet minim voluptate tempor incididunt
        aute veniam aliqua nisi fugiat sit sit. Est cillum exercitation commodo
        anim non non mollit excepteur. Do nulla occaecat aliqua velit ea sit
        laboris elit tempor proident. Amet mollit exercitation aliqua
        adipisicing. Incididunt aute tempor reprehenderit dolore ex labore est
        esse irure. Elit in aliqua magna sunt pariatur quis incididunt ad
        adipisicing proident. Fugiat ea incididunt ipsum in incididunt magna
        adipisicing excepteur aliqua reprehenderit veniam dolor proident.
        Reprehenderit Lorem aliqua laborum cupidatat pariatur non nulla elit do
        nostrud culpa ex. Minim consequat sit commodo reprehenderit enim labore
        id dolor ad consectetur. Ullamco consequat non eu excepteur magna ut
        consectetur reprehenderit magna dolore pariatur voluptate. Excepteur
        veniam dolor ex tempor nostrud. Velit adipisicing aliquip qui veniam ex
        duis officia nostrud. Aute Lorem ea in ea. Ad irure minim sit mollit
        tempor minim dolore aute ea est veniam velit. Quis proident consectetur
        reprehenderit do fugiat ut adipisicing. Ullamco aliqua amet elit sit in
        cillum ad. Commodo officia non id excepteur consectetur anim quis in
        cupidatat minim. Sint occaecat minim labore magna officia mollit. Ex
        irure eu incididunt do nostrud cillum ut sit ut ipsum. Ullamco id ut
        esse adipisicing. Est duis ut ea ipsum laboris tempor laboris. Qui non
        anim anim aliqua reprehenderit aute sit dolore commodo eu proident
        exercitation et in. Anim officia velit laborum est amet consequat cillum
        culpa sunt labore amet anim anim. Nisi magna ut ea dolore proident
        aliqua.
      </p>

      <div
        style={{
          padding: '1rem',
          marginBottom: '1rem',
          position: 'sticky',
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(2px)',
        }}
      >
        <button style={{ width: '100%', padding: '10px 12px' }}>
          Sticky Button
        </button>
      </div>

      <p>
        Laborum aute in nisi consequat mollit qui sit ad culpa laboris aliquip
        officia aute ea. Nisi fugiat reprehenderit nostrud magna minim velit do
        officia occaecat deserunt enim adipisicing sunt. Irure aliqua minim
        ullamco voluptate commodo enim tempor officia occaecat Lorem voluptate
        ipsum magna irure. Cupidatat do eiusmod eiusmod pariatur sunt tempor
        esse est ut. Laborum anim aliqua deserunt ullamco enim cillum elit.
        Exercitation ut consectetur in laboris officia quis do.
      </p>
    </div>
  );
}

export default StickyButton;
